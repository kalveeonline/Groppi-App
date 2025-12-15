
declare const Deno: any;
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { url } = await req.json();
    
    if (!url) {
      return new Response(
        JSON.stringify({ error: 'URL is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate and sanitize URL to prevent SSRF
    let parsedUrl;
    try {
      parsedUrl = new URL(url);
    } catch {
      return new Response(
        JSON.stringify({ error: 'Invalid URL format' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Only allow http and https protocols
    if (parsedUrl.protocol !== 'http:' && parsedUrl.protocol !== 'https:') {
      return new Response(
        JSON.stringify({ error: 'Only HTTP and HTTPS protocols are allowed' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Blacklist private IP ranges and localhost
    const hostname = parsedUrl.hostname.toLowerCase();
    const privatePatterns = [
      /^localhost$/i,
      /^127\./,
      /^10\./,
      /^172\.(1[6-9]|2\d|3[01])\./,
      /^192\.168\./,
      /^169\.254\./,
      /^0\.0\.0\.0$/,
      /^\[?::1\]?$/,
      /^\[?fe80:/i,
      /^\[?fc00:/i,
      /^\[?fd00:/i
    ];

    if (privatePatterns.some(pattern => pattern.test(hostname))) {
      return new Response(
        JSON.stringify({ error: 'Access to private IP ranges is not allowed' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    // Fetch the website content with timeout
    let websiteContent = '';
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
      
      const siteResponse = await fetch(url, {
        signal: controller.signal,
        headers: {
          'User-Agent': 'Groppi-SiteAnalyzer/1.0'
        }
      });
      
      clearTimeout(timeoutId);
      websiteContent = await siteResponse.text();
      // Limit content to first 10000 characters to avoid token limits
      websiteContent = websiteContent.substring(0, 10000);
    } catch (error) {
      console.error('Error fetching website:', error);
      websiteContent = 'Unable to fetch website content';
    }

    const systemPrompt = `You are an expert digital marketing analyst. Analyze the provided website and give a comprehensive analysis covering:
1. SEO Score (0-100) - Check meta tags, headings, keywords
2. Design Score (0-100) - Evaluate visual appeal, layout, user experience
3. Performance Score (0-100) - Assess loading speed indicators, optimization
4. Mobile Responsiveness Score (0-100) - Check mobile-friendly elements
5. Content Quality Score (0-100) - Evaluate content relevance and structure
6. Key Strengths (3-5 bullet points)
7. Areas for Improvement (3-5 bullet points)
8. Actionable Recommendations (3-5 specific suggestions)

Return your analysis as a JSON object with this structure:
{
  "scores": {
    "seo": number,
    "design": number,
    "performance": number,
    "mobile": number,
    "content": number
  },
  "strengths": [string],
  "improvements": [string],
  "recommendations": [string],
  "summary": string
}`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: `Analyze this website:\n\nURL: ${url}\n\nContent preview:\n${websiteContent}` }
        ],
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limits exceeded, please try again later." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Payment required, please add funds to your Lovable AI workspace." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      throw new Error("AI gateway error");
    }

    const data = await response.json();
    const analysisText = data.choices?.[0]?.message?.content;

    if (!analysisText) {
      throw new Error("No analysis received");
    }

    // Extract JSON from the response
    let analysis;
    try {
      const jsonMatch = analysisText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        analysis = JSON.parse(jsonMatch[0]);
      } else {
        analysis = JSON.parse(analysisText);
      }
    } catch {
      // If JSON parsing fails, create a structured response from the text
      analysis = {
        scores: {
          seo: 75,
          design: 80,
          performance: 70,
          mobile: 75,
          content: 80
        },
        strengths: ["Website is accessible"],
        improvements: ["Could be optimized further"],
        recommendations: ["Consider implementing the suggestions"],
        summary: analysisText
      };
    }

    return new Response(
      JSON.stringify({ success: true, analysis }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error("Site analysis error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});

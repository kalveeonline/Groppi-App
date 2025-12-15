export enum DownloadStatus {
  Queued = 'Queued',
  Downloading = 'Downloading',
  Completed = 'Completed',
  Paused = 'Paused',
  Error = 'Error',
  Analyzing = 'AI Analyzing...'
}

export enum FileCategory {
  Document = 'Document',
  Image = 'Image',
  Video = 'Video',
  Audio = 'Audio',
  Archive = 'Archive',
  Software = 'Software',
  Other = 'Other'
}

export interface DownloadItem {
  id: string;
  filename: string;
  url: string;
  size: string;
  progress: number;
  speed: string;
  status: DownloadStatus;
  category: FileCategory;
  dateAdded: Date;
  aiSummary?: string;
  aiSafetyScore?: number;
  aiTags?: string[];
}

export interface AIAnalysisResult {
  category: FileCategory;
  summary: string;
  safetyScore: number;
  tags: string[];
  suggestedFilename: string;
}
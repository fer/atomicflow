export interface WorkflowStats {
  totalWorkflows: number;
  totalExecutions: number;
  totalTags: number;
  uptime: string;
}

export interface ApiResponse {
  success: boolean;
  data: WorkflowStats;
  error?: string;
}
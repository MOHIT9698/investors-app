export interface Profile {
    name: string;
    user_name: string;
    post_time: string;
    id: number;
    profile_pic: string;
  }
  
  export interface ReportData {
    title: string;
    metrics: Record<string, string | number>;
  }
  
  export interface SuggestionProfile {
    name: string;
    user_name: string;
  }
  
  export interface SuggestionData {
    profile: SuggestionProfile;
    suggestion: string;
  }
  
  export interface PostData {
    title: string;
    image_url: string;
    content: string;
  }
  
  export type DashboardItemType = 'report' | 'suggestion' | 'post';
  
  export interface DashboardItem {
    id: number;
    type: DashboardItemType;
    profile: Profile;
    comment: string;
    report_data?: ReportData;
    suggestion_data?: SuggestionData;
    post_data?: PostData;
  }
  
  export type DashboardDataType = DashboardItem[];
  
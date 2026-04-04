export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  __InternalSupabase: {
    PostgrestVersion: "12";
  };
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          display_name: string;
          company: string;
          role: string | null;
          plan_tier: string;
          plan_updated_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          display_name: string;
          company?: string;
          role?: string | null;
          plan_tier?: string;
          plan_updated_at?: string | null;
        };
        Update: {
          display_name?: string;
          company?: string;
          role?: string | null;
          plan_tier?: string;
          plan_updated_at?: string | null;
        };
        Relationships: [];
      };
      salary_sessions: {
        Row: {
          id: string;
          user_id: string;
          title: string;
          annual_ctc: number;
          monthly_in_hand: number;
          regime_label: string;
          result_source: string | null;
          input_json: Json;
          breakdown_json: Json;
          created_at: string;
          updated_at: string;
          last_opened_at: string | null;
        };
        Insert: {
          id?: string;
          user_id?: string;
          title: string;
          annual_ctc: number;
          monthly_in_hand: number;
          regime_label: string;
          result_source?: string | null;
          input_json: Json;
          breakdown_json: Json;
          last_opened_at?: string | null;
        };
        Update: {
          title?: string;
          annual_ctc?: number;
          monthly_in_hand?: number;
          regime_label?: string;
          result_source?: string | null;
          input_json?: Json;
          breakdown_json?: Json;
          last_opened_at?: string | null;
        };
        Relationships: [];
      };
      salary_session_planning: {
        Row: {
          salary_session_id: string;
          lifestyle_json: Json | null;
          emi_json: Json | null;
          wealth_json: Json | null;
          updated_at: string;
        };
        Insert: {
          salary_session_id: string;
          lifestyle_json?: Json | null;
          emi_json?: Json | null;
          wealth_json?: Json | null;
        };
        Update: {
          lifestyle_json?: Json | null;
          emi_json?: Json | null;
          wealth_json?: Json | null;
        };
        Relationships: [];
      };
      offer_sessions: {
        Row: {
          id: string;
          user_id: string;
          title: string;
          offer_count: number;
          winner_summary: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id?: string;
          title: string;
          offer_count: number;
          winner_summary: string;
        };
        Update: {
          title?: string;
          offer_count?: number;
          winner_summary?: string;
        };
        Relationships: [];
      };
      offer_session_offers: {
        Row: {
          id: string;
          offer_session_id: string;
          sort_order: number;
          draft_json: Json;
          breakdown_override_json: Json | null;
          updated_at: string;
        };
        Insert: {
          id?: string;
          offer_session_id: string;
          sort_order: number;
          draft_json: Json;
          breakdown_override_json?: Json | null;
        };
        Update: {
          draft_json?: Json;
          breakdown_override_json?: Json | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

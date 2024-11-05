import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    const supabaseUrl = 'https://ivexdqqrvymelbbhjbxu.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2ZXhkcXFydnltZWxiYmhqYnh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjkxNjYwOTIsImV4cCI6MjA0NDc0MjA5Mn0.4X6JtVmBHQb8ZKTvWfbX-GFyeE_vmRa1scrZd-4H6Ws';

    this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  get client() {
    return this.supabase;
  }
}

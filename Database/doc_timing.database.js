const SUPABASE_URL = `https://zltxcpwwpbvdymcxihvy.supabase.co`
const SUPABASE_ANON_KEY = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpsdHhjcHd3cGJ2ZHltY3hpaHZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE5NzY5OTAsImV4cCI6MjA3NzU1Mjk5MH0.cMrna_7fF3W1xk_eggHC7Y1aZZ7NZar5g_FlTtLinmc`

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);


export const getAllDrTimings = async () => {
    const { data, error } = await supabaseClient
        .from('Doctor_timings')
        .select()

    if (error) {
        console.log(error);
        return error;
    }

    console.log(data);
    return data;
};
export const getDrTimingsById = async (id) => {
    const { data, error } = await supabaseClient
        .from('Doctor_timings')
        .select()
        .eq("id", id)

    if (error) {
        console.log(error);
        return error;
    }

    console.log(data);
    return data;
};
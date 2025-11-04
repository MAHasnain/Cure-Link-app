const SUPABASE_URL = `SUPABASE_URL`
const SUPABASE_ANON_KEY = `SUPABASE_ANON_KEY`

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
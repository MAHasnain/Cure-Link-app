const SUPABASE_URL = `SUPABASE_URL`
const SUPABASE_ANON_KEY = `SUPABASE_ANON_KEY`

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);


export const getAllDoctors = async () => {
    const { data, error } = await supabaseClient
        .from('Doctors')
        .select()

    if (error) {
        console.log(error);
        return error;
    }

    console.log(data);
    return data;
};

export const getDoctorById = async (doctorId) => {
    const { data, error } = await supabaseClient
        .from('Doctors')
        .select()
        .eq("id", doctorId)

    if (error) {
        console.log(error);
        return error;
    }

    console.log(data);
    return data;
};

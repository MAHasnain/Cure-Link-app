const SUPABASE_URL = `SUPABASE_URL`
const SUPABASE_ANON_KEY = `SUPABASE_ANON_KEY`

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);


export const getAllAppointments = async () => {
    const { data, error } = await supabaseClient
        .from('Appointments')
        .select()

    if (error) {
        console.log(error);
        return error;
    }

    console.log(data);
    return data;
};

export const createNewAppointment = async (appointmentData) => {
    const { error } = await supabaseClient
        .from('Appointments')
        .insert(
            appointmentData
        )

    if (error) {
        console.log(error);
        return error;
    }
}

export const updateAppointment = async (appointmentId, appointmentData) => {
    const { data, error } = await supabaseClient
        .from('Appointments')
        .update(appointmentData)
        .eq('id', appointmentId)
        .select()

    if (error) {
        console.log(error);
        return error;
    }

    console.log(data);
    return data;
}
export const deleteAppointment = async (appointmentId) => {
    const { data, error } = await supabaseClient
        .from('Appointments')
        .delete()
        .eq('id', appointmentId)
        .select()

    if (error) {
        console.log(error);
        return error;
    }

    console.log(data);
    return data;
}
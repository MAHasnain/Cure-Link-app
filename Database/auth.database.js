const SUPABASE_URL = `https://zltxcpwwpbvdymcxihvy.supabase.co`
const SUPABASE_ANON_KEY = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpsdHhjcHd3cGJ2ZHltY3hpaHZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE5NzY5OTAsImV4cCI6MjA3NzU1Mjk5MH0.cMrna_7fF3W1xk_eggHC7Y1aZZ7NZar5g_FlTtLinmc`

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export const createNewUser = async (userData) => {
    const { data, error } = await supabaseClient.auth.signUp(
        userData
        // {
        //     email: 'example@email.com',
        //     password: 'example-password',
        //     options: {
        //         data: {
        //             first_name: 'John',
        //             age: 27,
        //         }
        //     }
        // }
    )

    if (error) {
        console.error(error);
        return error;
    }
    console.log(data);
    return data;

};

export const signInUser = async (userData) => {
    const { data, error } = await supabaseClient.auth.signInWithPassword(
        //     {
        //     email: 'example@email.com',
        //     password: 'example-password',
        // }
        userData
    )

    if (error) {
        console.error(error);
        return error;
    }
    console.log(data);
    return data;

}

export const signOutUser = async () => {
    const { error } = await supabaseClient.auth.signOut()

    if (error) {
        console.error(error);
        return error
    }
}

export const getUserSession = async () => {
    const { data, error } = await supabaseClient.auth.getSession()

    if (error) {
        console.error(error);
        return error;
    }
    console.log(data);
    return data;

}

export const getLoggedInUser = async () => {
    
    const { data: { user } } = await supabase.auth.getUser()

    console.log(user);
    return user;

}
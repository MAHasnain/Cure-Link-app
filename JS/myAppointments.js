// console.log(supabase);
import { getUserSession, getAllAppointments } from "../Database/allMethods.js";

const userAppointments = document.querySelector(".userAppointments");
document.addEventListener("DOMContentLoaded", async () => {

    try {
        const userSession = await getUserSession();
        console.log(userSession.session);

        if (userSession.session) {

            const allAppointments = await getAllAppointments();
            console.log(allAppointments);

            allAppointments.length === 0
                ?
                userAppointments.innerHTML = `
                <div class="empty-content">
                <h2>No upcoming appointments</h2>
                <p>Once you book one, it’ll show up here.</p>
                <a href="../index.html#doctors-section" class="btn-primary">Find Doctor</a>
            </div>`
                :
                allAppointments.map(appointment => {
                    userAppointments.innerHTML += ``
                })

        } else {
            window.location.href = `../HTML/login.html`;
        }

    } catch (error) {
        console.error(error);
    }
})
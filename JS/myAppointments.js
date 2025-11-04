// console.log(supabase);
import { getUserSession, getAllAppointments, getAllDoctors } from "../Database/allMethods.js";

const userAppointments = document.querySelector(".userAppointments");
document.addEventListener("DOMContentLoaded", async () => {

    try {
        const userSession = await getUserSession();
        console.log(userSession.session);

        if (userSession.session) {

            const allAppointments = await getAllAppointments();
            console.log(allAppointments);

            const allDoctors = await getAllDoctors()
            console.log(allDoctors);

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
                    const doctor_id = appointment.doctor_id

                    const doctor = allDoctors.filter(doctor => doctor.id == doctor_id)
                    console.log(doctor[0]);
                    const { doctor_name, specialization, doctor_img } = doctor[0]

                    userAppointments.innerHTML += `
                    <div class="appointment-card flex">
                        <div class="doctor-info flex items-center gap-4 mb-4">
                        <img src="${doctor_img}" alt="Doctor Image" width=200px class="doctor-img">
                        <div>
                            <h3 class="doctor-name ">${doctor_name}</h3>
                            <p class="doctor-speciality ">${specialization}</p>
                        </div>
                        </div>

                        <div class="appointment-details ">
                        <p class="appointment-day ">
                            <span class="font-semibold text-primary">Day:</span>${appointment.day}
                        </p>
                        <p class="appointment-time">
                            <span class="font-semibold text-primary">Time:</span> ${appointment.time}
                        </p>
                        <p class="appointment-reason ">
                            <span class="font-semibold text-primary">Reason:</span>${appointment.reason}
                        </p>
                        </div>
                    </div>`
                })

        } else {
            window.location.href = `../HTML/login.html`;
        }

    } catch (error) {
        console.error(error);
    }
})
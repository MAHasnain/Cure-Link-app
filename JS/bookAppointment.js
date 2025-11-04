// console.log(supabase);

import { getUserSession, getAllDoctors, getAllDrTimings, createNewAppointment, getDoctorById } from "../Database/allMethods.js";

const userData = JSON.parse(localStorage.getItem("user"))
const doctorDropdownSelect = document.querySelector("#doctor-select");

document.addEventListener("DOMContentLoaded", async () => {

    const userSession = await getUserSession();
    if (userSession.session) {

        const searchParams = new URLSearchParams(window.location.search);
        const doctorId = searchParams.get("id")
        // console.log(doctorId);

        const patientName = document.querySelector("#patientName");
        const patientEmail = document.querySelector("#patientEmail");

        const daySelect = document.querySelector("#appointmentDaySelect");
        const timeInp = document.querySelector("#appointmentTimeInp");
        const reasonInp = document.querySelector("#appointmentReasonInp");

        if (doctorId) {

            // user data prefilled
            const { user } = userData;
            // console.log(user.user_metadata.first_name);
            patientName.value = user.user_metadata.first_name
            patientEmail.value = user.email

            const doctor = await getDoctorById(doctorId)
            console.log(doctor);
            const [dr] = doctor;
            doctorDropdownSelect.innerHTML = `
        <option value="${dr.id}">${dr.doctor_name}</option>
        `;
            const drTiming = await getAllDrTimings();
            console.log(drTiming);
            const selectedTiming = drTiming.filter(time => time.doctor_id == doctorId)
            // console.log("selectedTiming", selectedTiming);
            const { day, start_time } = selectedTiming[0];

            // console.log(day);

            const days = day.split(" ")
            days.map(day => {
                daySelect.innerHTML += `<option value="${day}">${day}</option>`
            })
            // if (daySelect.value === `placeholder`) {
            //     return 
            // }
            timeInp.value = start_time;

            const appointmentForm = document.querySelector("#appointmentForm");

            appointmentForm.addEventListener("submit", async (e) => {
                e.preventDefault();

                const newAppointment = await createNewAppointment(
                    {
                        doctor_id: doctorDropdownSelect.value,
                        patient_id: user.id,
                        day: daySelect.value,
                        time: timeInp.value,
                        reason: reasonInp.value
                    }
                )
                console.log(newAppointment);
                // if (newAppointment) {
                //     console.log("done");
                //     window.location.href = `../HTML/myAppointments.html`;
                // }else {
                //     return
                // }
            })
        } else {

            // user data prefilled
            const { user } = userData;
            // console.log(user.user_metadata.first_name);
            patientName.value = user.user_metadata.first_name
            patientEmail.value = user.email

            const doctors = await getAllDoctors()
            // console.log(doctors);
            doctors.map(doctor => {
                doctorDropdownSelect.innerHTML += `
                <option value="${doctor.id}">${doctor.doctor_name}</option>
                `;
            })
            doctorDropdownSelect.addEventListener("change", async (e) => {
                e.preventDefault();

                const drTimings = await getAllDrTimings();
                // console.log(drTimings);
                const selectedDoctorId = e.target.value;
                const selectedTiming = drTimings.filter(time => time.doctor_id == selectedDoctorId);
                console.log(selectedTiming);
                const { start_time, day } = selectedTiming[0];

                const days = day.split(" ")
                days.map(day => {
                    daySelect.innerHTML += `<option value="${day}">${day}</option>`
                })
                // if (daySelect.value === `placeholder`) {
                //     return 
                // }
                timeInp.value = start_time;

                const appointmentForm = document.querySelector("#appointmentForm");

                appointmentForm.addEventListener("submit", async (e) => {
                    e.preventDefault();

                    const newAppointment = await createNewAppointment(
                        {
                            doctor_id: doctorDropdownSelect.value,
                            patient_id: user.id,
                            day: daySelect.value,
                            time: timeInp.value,
                            reason: reasonInp.value
                        }
                    )
                    console.log(newAppointment);
                    // if (newAppointment) {
                    //     console.log("done");
                    //     window.location.href = `../HTML/myAppointments.html`;
                    // }else {
                    //     return
                    // }
                })
            })
        }

    } else {
        window.location.href = `../HTML/login.html`
    }

})

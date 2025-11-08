// console.log(supabase);
import { getAllDoctors, getUserSession, signOutUser } from "../Database/allMethods.js";

const allDoctors = document.querySelector(".all-doctors");
document.addEventListener("DOMContentLoaded", async () => {
    try {

        const doctors = await getAllDoctors();
        console.log(doctors);

        allDoctors.innerHTML = ``;
        doctors.map(doctor => {
            allDoctors.innerHTML += `
            <div class="doctorCard" data-id=${doctor.id}>
                <img src="${doctor.doctor_img}" width="200px" alt="">
                <h4>${doctor.doctor_name}</h4>
                <p>${doctor.specialization}</p>
                <button id="bookAppointmentBtn">Book Appointment</button>
             </div>`
        })

        const userSession = await getUserSession();

        const navAuthButton = document.querySelector("#auth_button")
        if (userSession.session) {
            navAuthButton.innerHTML = `<button class="btn-logout">Logout</button>`
        } else {
            navAuthButton.innerHTML = `<button class="btn-login"><a href="../HTML/login.html">Login</a></button>`
        }

        const btnLogout = document.querySelector(".btn-logout")
        btnLogout.addEventListener("click", async (e) => {
            e.preventDefault();
            const signedOutUser = await signOutUser();
            console.log(signedOutUser);
        })

        const drAllCards = document.querySelectorAll(".doctorCard");
        drAllCards.forEach(drCard => {

            const drId = drCard.getAttribute("data-id");
            console.log(drId);
            drCard.children[3].addEventListener("click", () => {
                console.log("clicked");
                window.location.href = `../HTML/bookAppointment.html?id=${drId}`
            })
        })

    } catch (error) {
        console.error(error);
    }
})
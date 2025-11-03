// console.log(supabase);

import { getAllDoctors } from "../Database/allMethods.js";

const allDoctors = document.querySelector(".all-doctors");
document.addEventListener("DOMContentLoaded", async () => {
    const doctors = await getAllDoctors();
    console.log(doctors);

    allDoctors.innerHTML = ``;
    doctors.map(doctor => {
        allDoctors.innerHTML += `
            <div class="member">
                <img src="${doctor.doctor_img}" width="200px" alt="">
                <h4>${doctor.doctor_name}</h4>
                <p>${doctor.specialization}</p>
             </div>`
    })
})
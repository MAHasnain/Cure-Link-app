import { signInUser } from "../../Database/allMethods.js";

const loginEmailInp = document.querySelector("#loginEmailInp");
const loginPassInp = document.querySelector("#loginPassInp");
const loginForm = document.querySelector("#loginForm");

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {

        const signedInUser = await signInUser({
            email: loginEmailInp.value,
            password: loginPassInp.value,
        })
        console.log(signedInUser.session);
        const user = localStorage.setItem("user", JSON.stringify(signedInUser));

        if (signedInUser.session) {
            window.location.href = `/index.html`;
        }
    
    } catch (error) {
        console.error(error)
        return error;
    }

})
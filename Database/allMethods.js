import { createNewAppointment, getAllAppointments, updateAppointment, deleteAppointment } from "./appointments.database.js";
import { createNewUser, signInUser, getLoggedInUser, getUserSession, signOutUser } from "./auth.database.js";
import { getAllDrTimings, getDrTimingsById } from "./doc_timing.database.js";
import { getAllDoctors, getDoctorById } from "./doctors.database.js";

export { createNewAppointment, getAllAppointments, updateAppointment, deleteAppointment, createNewUser, signInUser, getLoggedInUser, getUserSession, signOutUser, getAllDoctors, getDoctorById, getAllDrTimings, getDrTimingsById };
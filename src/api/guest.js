import { API } from "./api";

/** fetches an array of guests from API */
export async function getGuests() {
  try {
    const response = await fetch(API + "/guests");
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error(error);
  }
}

/** fetches a single guest by ID from API */
export async function getGuest(id) {
  try {
    const response = await fetch(API + "/guests/" + id);
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error(error);
  }
}

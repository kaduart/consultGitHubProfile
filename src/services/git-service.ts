import axios from "axios";
import { BASE_URL } from "../utils/systems";

export function search(request: string) {
    return axios.get(BASE_URL + `${request}`).then(response => response);
}
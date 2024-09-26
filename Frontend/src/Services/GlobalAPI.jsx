import axios from "axios";

const runsURL = "http://localhost:8080"

const getRuns = axios.get("http://localhost:8080/api/runs")

export default {
    getRuns
}
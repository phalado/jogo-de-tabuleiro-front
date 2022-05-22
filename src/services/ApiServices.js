import ApiStr from "../constants/ApiStr";
import axios from "axios";

const ApiServices = async () => {
  const baseUrl = ApiStr.API_URL + "/games";
  const params = { id: 1, game_mode: "01" };
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
  };

  return axios.post(baseUrl, params, { headers });
};

export default ApiServices;

import ApiStr from "../constants/ApiStr";
import axios from "axios";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json; charset=utf-8",
};

const RequestGameData = async (gameMode) => {
  const baseUrl = ApiStr.API_URL + "/games";
  const params = { id: 1, game_mode: gameMode };

  return axios.post(baseUrl, params, { headers });
};

const openDoor = async (doorName, silent) => {
  const baseUrl = ApiStr.API_URL + "/actions/open_door";
  const params = { id: 1, door_name: doorName, silent };

  return axios.post(baseUrl, params, { headers });
};

export { RequestGameData, openDoor };

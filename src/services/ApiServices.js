import ApiStr from "../constants/ApiStr";
import axios from "axios";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json; charset=utf-8",
};

const requestUserData = async (user_id) => {
  const baseUrl = ApiStr.API_URL + "/users/" + user_id;
  const params = { id: user_id };

  return axios.get(baseUrl, params, { headers });
};

const loginUser = async (email, password) => {
  const baseUrl = ApiStr.API_URL + "/users/login";
  const params = { email, password };

  return axios.post(baseUrl, params, { headers });
};

const requestGameData = async () => {
  const baseUrl = ApiStr.API_URL + "/games/game_data";
  const params = { id: 1 };

  return axios.post(baseUrl, params, { headers });
};

const createNewGame = async (gameMode) => {
  const baseUrl = ApiStr.API_URL + "/games";
  const params = { id: 1, game_mode: gameMode };

  return axios.post(baseUrl, params, { headers });
};

const createCharacter = async (type) => {
  const baseUrl = ApiStr.API_URL + "/characters";
  const params = { id: 1, character_type: type };

  return axios.post(baseUrl, params, { headers });
};

const moveCharacter = async (type, direction) => {
  const baseUrl = ApiStr.API_URL + "/characters/move_character";
  const params = { id: 1, character_type: type, direction };

  return axios.post(baseUrl, params, { headers });
};

const openDoor = async (doorName, silent) => {
  const baseUrl = ApiStr.API_URL + "/actions/open_door";
  const params = { id: 1, door_name: doorName, silent };

  return axios.post(baseUrl, params, { headers });
};

const openChest = async (chestName, silent) => {
  const baseUrl = ApiStr.API_URL + "/actions/open_chest";
  const params = { id: 1, door_name: chestName, silent };

  return axios.post(baseUrl, params, { headers });
};

const endGame = async (game_id) => {
  const baseUrl = ApiStr.API_URL + "/games/" + game_id + "/end_game";
  const params = { id: 1 };

  return axios.get(baseUrl, params, { headers });
};

export {
  requestGameData,
  createNewGame,
  createCharacter,
  openDoor,
  openChest,
  endGame,
  moveCharacter,
  requestUserData,
  loginUser,
};

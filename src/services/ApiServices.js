import ApiStr from "../constants/ApiStr";
import axios from "axios";
import { ReactSession } from "react-client-session";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json; charset=utf-8",
};

const currentUserId = () => ReactSession.get("id");
const gameId = () => ReactSession.get("gameId");

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

const createNewUser = async (email, password, username) => {
  const baseUrl = ApiStr.API_URL + "/users";
  const params = { email, password, username };

  return axios.post(baseUrl, params, { headers });
};

const requestGameData = async (gameId) => {
  const baseUrl = ApiStr.API_URL + "/games/game_data";
  const params = { id: currentUserId(), game_id: gameId };

  return axios.post(baseUrl, params, { headers });
};

const createNewGame = async (gameMode) => {
  const baseUrl = ApiStr.API_URL + "/games";
  const params = { id: currentUserId(), game_mode: gameMode };

  return axios.post(baseUrl, params, { headers });
};

const joinCreatedGame = async (gameId) => {
  const baseUrl = ApiStr.API_URL + "/games/join_game";
  const params = { id: currentUserId(), game_id: gameId };

  return axios.post(baseUrl, params, { headers });
};

const createCharacter = async (gameId, type) => {
  const baseUrl = ApiStr.API_URL + "/characters";
  const params = { id: currentUserId(), character_type: type, game_id: gameId };

  return axios.post(baseUrl, params, { headers });
};

const gamesCharacter = async (gameId) => {
  const baseUrl = ApiStr.API_URL + "/characters/games_character";
  const params = { id: currentUserId(), game_id: gameId };

  return axios.post(baseUrl, params, { headers });
};

const gameStart = async (gameId) => {
  const baseUrl = ApiStr.API_URL + "/games/start_game";
  const params = { id: currentUserId(), game_id: gameId };

  return axios.post(baseUrl, params, { headers });
};

const moveCharacter = async (type, direction) => {
  const baseUrl = ApiStr.API_URL + "/characters/move_character";
  const params = {
    id: currentUserId(),
    game_id: gameId(),
    character_type: type,
    direction,
  };

  return axios.post(baseUrl, params, { headers });
};

const openDoor = async (doorName, silent) => {
  const baseUrl = ApiStr.API_URL + "/actions/open_door";
  const params = { game_id: gameId(), door_name: doorName, silent };

  return axios.post(baseUrl, params, { headers });
};

const openChest = async (chestName, silent) => {
  const baseUrl = ApiStr.API_URL + "/actions/open_chest";
  const params = { game_id: gameId(), chest_name: chestName, silent };

  return axios.post(baseUrl, params, { headers });
};

const endGame = async (game_id) => {
  const baseUrl = ApiStr.API_URL + "/games/" + game_id + "/end_game";
  const params = { id: currentUserId() };

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
  createNewUser,
  joinCreatedGame,
  gamesCharacter,
  gameStart,
};

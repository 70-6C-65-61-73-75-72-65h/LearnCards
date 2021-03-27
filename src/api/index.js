import axios from "axios";

// const API = axios.create({ baseURL: "https://memories-backend.zeet.app" });
const BASE_URL = `http://localhost:5000`;
const API = axios.create({
  baseURL: BASE_URL,
});

const API_MEDIA = axios.create({
  baseURL: BASE_URL,
  // headers: { "Content-Type": "multipart/form-data" },
});

API_MEDIA.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = getToken();
  }
  req.headers["Content-Type"] = "multipart/form-data";

  return req;
});

export const getToken = () =>
  `Bearer ${JSON.parse(localStorage.getItem("profile")).token}`;

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = getToken();
  }

  return req;
});

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);

export const fetchAllCards = () => API.get("/cards");
export const fetchTodayCards = () => API.get("/cards/learn");
export const fetchSingleCard = (id) => API.get(`/cards/${id}`);

export const createCard = (newCard) => API.post("/cards", newCard);
export const createCardPicture = (newCard) => API_MEDIA.post("/cards", newCard);

export const streamCardPicSrc = (filename) =>
  `${BASE_URL}/cards/file/${filename}`;

export const checkCard = (id, answer) =>
  API.patch(`/cards/checked/${id}`, { answer });

export const updateCard = (id, updatedCard) =>
  API.patch(`/cards/update/${id}`, updatedCard);

export const deleteCard = (id) => API.delete(`/cards/delete/${id}`);

// fetchTodayCards checkCard

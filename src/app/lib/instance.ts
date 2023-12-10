import axios from "axios";

const token = process.env.NEXT_PUBLIC_API_KEY;

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 2000,
  headers: { Authorization: `Bearer ${token}` },
});

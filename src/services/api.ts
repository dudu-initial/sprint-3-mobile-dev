import axios from "axios";
import { Platform } from "react-native";

const baseUrlPadrao =
  Platform.OS === "android"
    ? "http://10.0.2.2:8080"
    : "http://localhost:8080";

export const BASE_URL = process.env.EXPO_PUBLIC_API_URL || baseUrlPadrao;

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

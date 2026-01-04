import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import { io } from "socket.io-client";

const BASE_URL = "http://localhost:5001"

export const useAuthStore = create((set, get) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isCheckingAuth: true,
  isUpdatingProfile: false,
  onlineUsers: [],
  sockety: null,

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");
      set({ authUser: res.data });
      get().connectSocket();
    } catch (error) {
      console.error("Error checking auth:", error.response?.data?.message || error.message);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/auth/signup", data);
      set({ authUser: res.data });
      console.log("Signup successful");
      get().connectSocket();
    } catch (error) {
      console.error("Signup error:", error.response?.data?.message || error.message);
      throw new Error(error.response?.data?.message || error.message);
    } finally {
      set({ isSigningUp: false });
    }
  },

  login: async (data) => {
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post("/auth/login", data);
      set({ authUser: res.data });
      console.log("Logged in successfully");

      get().connectSocket();
    } catch (error) {
      console.error("Login error:", error.response?.data?.message || error.message);
      throw new Error(error.response?.data?.message || error.message);
    } finally {
      set({ isLoggingIn: false });
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({ authUser: null });
      localStorage.removeItem("authUser");
      console.log("Logged out successfully");
      window.location.href = "/login";
      
      get().disconnectSocket();
    } catch (error) {
      console.error("Error logging out:", error.response?.data?.message || error.message);
    }
  },

  updateProfile: async (data) => {
    set({ isUpdatingProfile: true });
    try {
      const res = await axiosInstance.put("/auth/update-profile", data);
      set({ authUser: res.data });
      console.log("Profile updated successfully");
    } catch (error) {
      console.error("Error updating profile:", error.response?.data?.message || error.message);
      throw new Error(error.response?.data?.message || error.message);
    } finally {
      set({ isUpdatingProfile: false });
    }
  },

  connectSocket: () => {
    const socket = io(BASE_URL, {
      
    })
  },
  disconnectSocket: () => {},
}));

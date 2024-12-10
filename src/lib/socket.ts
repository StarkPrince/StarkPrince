// lib/socket.ts
import config from "@/config";
import { io, Socket } from "socket.io-client";

// Declare a global interface to hold the socket instance
declare global {
  interface Window {
    socket: Socket | null;
  }
}

const SOCKET_URL = config.socketUrl; // Ensure this matches your server URL

export const initializeSocket = (): Socket | null => {
  if (!window.socket) {
    if (typeof window !== "undefined") {
      window.socket = io(SOCKET_URL, {
        transports: ["websocket"],
        reconnectionAttempts: 5, // Optional: Limits reconnection attempts
        timeout: 10000, // Optional: Connection timeout in ms
      });

      // Event listeners for debugging
      window.socket.on("connect", () => {
        console.log("Connected to WebSocket");
      });

      window.socket.on("disconnect", (reason) => {
        console.log("Disconnected from WebSocket:", reason);
      });

      window.socket.on("connect_error", (err) => {
        console.error("Connection Error:", err.message);
      });
    }
  }

  return window.socket;
};

export const getSocket = (): Socket => {
  if (!window.socket) {
    throw new Error("Socket not initialized. Call initializeSocket first.");
  }
  return window.socket;
};

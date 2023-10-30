import { create } from "zustand";
import axios from "axios";

const API_BASE_URL = 'http://localhost:8080';

const useStore = create((set) => ({
    showQuote: [],

    fetchQuote: async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/quotes`);
            set({ showQuote: response.data });
        } catch (error) {
            console.log("Error fetching quotes:", error);
        }
    },
}));

export default useStore;
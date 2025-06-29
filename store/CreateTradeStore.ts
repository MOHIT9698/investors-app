import { create } from "zustand";


// Define the store
interface CreateTradeStore {
    tradeType: string | null;
    setTradeType: (type: string) => void;
    clearTradePayload: () => void;
}



// Create the store
export const useCreateTradeStore = create<CreateTradeStore>((set, get) => ({
    tradeType: null,
    setTradeType: (type: string) => set({ tradeType: type }),
    clearTradePayload: () => set({ tradeType: null }),


}));
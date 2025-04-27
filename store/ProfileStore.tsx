import { ProfileProps } from "@/types/Common";
import { create } from "zustand";


// Define the store
interface ProfileStore {
    userProfile: ProfileProps;
    setUserProfile: (profile: ProfileProps) => void;
    clearUserProfile: () => void;
}

// Create the store
export const useProfileStore = create<ProfileStore>((set) => ({
    userProfile: { id: null, name: '', user_name: '', contact: '', profile_pic: '' }, // Initial user profile state
    setUserProfile: (profile: ProfileProps) => set({ userProfile: profile }), // Update user profile
    clearUserProfile: () => set({ userProfile: { id: null, name: '', user_name: '', contact: '', profile_pic: '' } }), // Clear user profile
}));

import { ProfileProps, UpdateProfilePayload } from "@/types/profile";
import { create } from "zustand";



// Define the store
interface ProfileStore {
    userProfile: ProfileProps;
    setUserProfile: (profile: ProfileProps) => void;
    clearUserProfile: () => void;
    setProfilePayload: (data: UpdateProfilePayload) => void;
    profilePayload: UpdateProfilePayload;
}

// Create the store
export const useProfileStore = create<ProfileStore>((set, get) => ({
    userProfile: { id: null, name: '', user_name: '', contact: '', profile_pic: '', profile_pic_url: '', bio: '' }, // Initial user profile state
    profilePayload: {
        name: "",
        profile_pic_url: "",
        bio: "",
        profile_pic: "",

    },
    setUserProfile: (profile: ProfileProps) => set({ userProfile: profile }), // Update user profile
    clearUserProfile: () => set({ userProfile: { id: null, name: '', user_name: '', contact: '', profile_pic: '', profile_pic_url: '', bio: '' } }), // Clear user profile
    setProfilePayload: (data: UpdateProfilePayload) => {
        set({
            profilePayload: {
                name: data?.name ? data?.name : "",
                profile_pic_url: data?.profile_pic_url ? data?.profile_pic_url : "",
                bio: data?.bio ? data?.bio : "",
                profile_pic: data?.profile_pic ? data?.profile_pic : "",
            }
        })
    }

}));

import apiClient from "../client";
import { ENDPOINTS } from "../endPoints";

export const updateProfile = async (formData?:any) => {
    console.log("payload====>",formData);
    
    return apiClient.patch(ENDPOINTS.PROFILE, formData);
};
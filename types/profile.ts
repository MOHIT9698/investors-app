export interface ProfileProps {
    id: number | null;
    name: string;
    profile_pic: string;
    user_name: string;
    contact: string;
    profile_pic_url: null | string;
    bio: string;
}


export interface UpdateProfilePayload {
    name?: string;
    profile_pic_url?: null | string;
    profile_pic?: null | string;
    bio?: string;
}

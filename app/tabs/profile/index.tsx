
import { ProfileWrapper } from "@/screens/profile/ProfileWrapper";
import apiClient from "@/src/api/client";
import { ENDPOINTS } from "@/src/api/endPoints";
import { useProfileStore } from "@/store/ProfileStore";
import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native"
import Toast from "react-native-toast-message";

const ProfilePage = () => {
    const [loading, setLoading] = useState(false);
    const { setUserProfile, userProfile } = useProfileStore();

    const fetchProfile = async () => {
        setLoading(true);
        try {
            const resp = await apiClient.get(ENDPOINTS.PROFILE);
            if (resp?.data?.status) {
                console.log("profile", resp?.data);
                setUserProfile(resp?.data?.data);

            }


        } catch (error: any) {
            Toast.show({
                type: 'error',
                text1: 'Oops!',
                text2: error?.msg ?? 'Invalid credentials. Try again.',
                position: 'bottom',
                visibilityTime: 3000,
                autoHide: true,
            });


        } finally {
            setLoading(false);
        }

    }

    useEffect(() => {
        fetchProfile();
    }, [])


    return <View style={styles.container} >
        {loading &&
            <View style={styles.loader} >
                <ActivityIndicator size="large" color="#00bdff" />
            </View>
        }
        {!loading &&
            <ProfileWrapper />
        }


    </View>
};

export default ProfilePage;

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",

    },
    loader: {
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    }
})

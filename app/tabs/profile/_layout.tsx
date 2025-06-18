import { CrossIcon, EditIcon, LogoutIcon, NavbarProfileIcon } from '@/components/ui/Icons/Svg';
import { Colors } from '@/constants/Colors';
import apiClient from '@/src/api/client';
import { updateProfile } from '@/src/api/executers/profile';
import { useProfileStore } from '@/store/ProfileStore';
import { Stack, useRouter } from 'expo-router';
import { useState } from 'react';
import { ActivityIndicator, Alert, Text, TouchableOpacity, useColorScheme, View } from 'react-native';
import Toast from 'react-native-toast-message';

export default function ProfileLayout() {
    const router = useRouter();
    const colorScheme = useColorScheme();
    const { profilePayload } = useProfileStore();
    const [loading, setLoading] = useState(false);

    const handleUpdateProfile = async () => {
        setLoading(true);

        console.log("profilePayload", profilePayload);

        const formData = new FormData();

        if (profilePayload?.bio) {
            formData.append("bio", profilePayload?.bio);
        }
        if (profilePayload?.name) {
            formData.append("name", profilePayload?.name);
        }
        // if(profilePayload?.profile_pic){
        //     formData.append("profile_pic",profilePayload?.profile_pic);
        // }
        // if(profilePayload?.profile_pic_url){
        formData.append("profile_pic_url", profilePayload?.profile_pic_url ? profilePayload?.profile_pic_url : "https://randomuser.me/api/portraits/men/51.jpg");
        // }


        try {
            const resp = await updateProfile(formData);
            if (resp?.data?.status) {
                router.replace("/tabs/profile");

            }


        } catch (error: any) {
            Toast.show({
                type: 'error',
                text1: 'Oops!',
                text2: error?.msg ?? 'Try again!',
                position: 'bottom',
                visibilityTime: 3000,
                autoHide: true,
            });


        } finally {
            setLoading(false);
        }
    }

    const handleLogout = () => {
        Alert.alert(
            "Logout",
            "Are you sure you want to log out?",
            [
                {
                    text: "Cancel",
                    style: "cancel",
                },
                {
                    text: "Logout",
                    style: "destructive",
                    onPress: async () => {
                        // await SecureStore.deleteItemAsync("access_token"); // Clear access token
                        router.replace('/auth/login'); // Navigate to login screen
                    }
                }
            ],
            { cancelable: true }
        );
    }
    return (
        <Stack
            screenOptions={{
                headerTitleAlign: 'center',
            }}
        >
            <Stack.Screen
                name="index"
                options={{
                    title: 'Profile',
                    headerRight: () => (
                        <TouchableOpacity style={{ marginRight: 0 }} onPress={handleLogout}>
                            <LogoutIcon className='mt-2' color={Colors[colorScheme ?? 'light'].text} />
                        </TouchableOpacity>
                    ),
                }}
            />

            <Stack.Screen
                name="edit-profile"
                options={{
                    title: 'Edit Profile',
                    animation: 'slide_from_right', // 👈 smooth slide
                    headerRight: () => (
                        <View>
                            {
                                loading ?
                                    <ActivityIndicator size="small" color="#007AFF" />
                                    : <TouchableOpacity
                                        onPress={handleUpdateProfile}
                                        style={{ marginRight: 0 }}
                                    >
                                        <Text style={{ color: '#00bdff', fontSize: 16 }}>Save</Text>
                                    </TouchableOpacity>
                            }
                        </View>
                    ),
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => {
                                router.replace("/tabs/profile"); // 👈 Go back to Profile screen
                            }}
                            style={{ marginLeft: 0 }}
                        >
                            {/* <CrossIcon color='#00bdff' /> */}
                            <Text style={{ color: '#00bdff', fontSize: 16 }}>Cancel</Text>
                        </TouchableOpacity>
                    ),
                }}
            />
        </Stack>
    );
}

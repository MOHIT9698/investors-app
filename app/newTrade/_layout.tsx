import { BackIcon, CrossIcon, EditIcon, LogoutIcon, NavbarProfileIcon } from '@/components/ui/Icons/Svg';
import { Colors } from '@/constants/Colors';
import apiClient from '@/src/api/client';
import { updateProfile } from '@/src/api/executers/profile';
import { useProfileStore } from '@/store/ProfileStore';
import { Stack, useRouter } from 'expo-router';
import { useState } from 'react';
import { ActivityIndicator, Alert, Text, TouchableOpacity, useColorScheme, View } from 'react-native';
import Toast from 'react-native-toast-message';

export default function NewTradelayout() {
    const router = useRouter();
    const colorScheme = useColorScheme();
    // const { profilePayload } = useProfileStore();
    const [loading, setLoading] = useState(false);

    const handleUpdateProfile = async () => {
        setLoading(true);


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
            {/* <Stack.Screen
                name="index"
                options={{
                    title: 'Profile',
                    headerRight: () => (
                        <TouchableOpacity style={{ marginRight: 0 }} onPress={handleLogout}>
                            <LogoutIcon className='mt-2' color={Colors[colorScheme ?? 'light'].text} />
                        </TouchableOpacity>
                    ),
                }}
            /> */}

            <Stack.Screen
                name="share-trade"
                options={{
                    title: 'Share Trade',
                    animation: 'slide_from_right', // 👈 smooth slide
                    headerLeft: () => (
                        <TouchableOpacity
                        onPress={() => {
                            router.replace("/tabs/dashboard"); // 👈 Go back to Profile screen
                        }}
                        style={{ marginLeft: 0 }}
                        >
                        {/* <CrossIcon color='#00bdff' /> */}
                        {/* <Text style={{ color: '#00bdff', fontSize: 16 }}>Cancel</Text> */}
                        <BackIcon color='#00bdff' />
                    </TouchableOpacity>
                ),
            }}
            />
        </Stack>
    );
}

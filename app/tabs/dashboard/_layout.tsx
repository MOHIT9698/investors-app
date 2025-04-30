import { LogoutIcon, } from '@/components/ui/Icons/Svg';
import { Colors } from '@/constants/Colors';
import { Stack, useRouter } from 'expo-router';
import { ActivityIndicator, Alert, Text, TouchableOpacity, useColorScheme, View } from 'react-native';

export default function DashboardLayout() {
    const router = useRouter();
    const colorScheme = useColorScheme();
   


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
                    title: 'Dashboard',
                    headerRight: () => (
                        <TouchableOpacity style={{ marginRight: 0 }} onPress={handleLogout}>
                            <LogoutIcon className='mt-2' color={Colors[colorScheme ?? 'light'].text} />
                        </TouchableOpacity>
                    ),
                }}
            />

        </Stack>
    );
}

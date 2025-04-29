import { CrossIcon, EditIcon, NavbarProfileIcon } from '@/components/ui/Icons/Svg';
import { Stack, useRouter } from 'expo-router';
import { Text, TouchableOpacity } from 'react-native';

export default function ProfileLayout() {
    const router = useRouter();
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
                }}
            />

            <Stack.Screen
                name="edit-profile"
                options={{
                    title: 'Edit Profile',
                    animation: 'slide_from_right', // 👈 smooth slide
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={() => {
                                // Your save logic here
                                console.log('Save clicked');
                            }}
                            style={{ marginRight: 0 }}
                        >
                            <Text style={{ color: '#00bdff', fontSize: 16 }}>Save</Text>
                        </TouchableOpacity>
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

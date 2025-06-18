import { AppImages } from '@/assets/images';
import { FolderIcon, LogoutIcon, NotificationIcon, } from '@/components/ui/Icons/Svg';
import { Colors } from '@/constants/Colors';
import { Stack, useRouter } from 'expo-router';
import { ActivityIndicator, Alert, Image, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native';

export default function DashboardLayout() {
    const router = useRouter();
    const colorScheme = useColorScheme();

    const handleShowNotification = () => {

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
                    headerLeft: () => (
                        <TouchableOpacity style={{ marginRight: 0 }} onPress={() => { }}>
                            <Image source={AppImages?.home_logo} style={styles.logo} />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <View style={{ marginRight: 0, display: "flex", flexDirection: "row", gap: 20 }} >
                            <TouchableOpacity onPress={handleShowNotification}>
                                <FolderIcon className='mt-2' color={Colors[colorScheme ?? 'light'].text} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={handleShowNotification}>
                                <NotificationIcon className='mt-2' color={Colors[colorScheme ?? 'light'].text} />
                            </TouchableOpacity>
                        </View>
                    ),
                }}
            />

        </Stack>
    );
}

const styles = StyleSheet.create({
    logo: {
        height: 30,
        width: 30
    }
})
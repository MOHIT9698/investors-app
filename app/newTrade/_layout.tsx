import { BackIcon } from '@/components/ui/Icons/Svg';
import { useCreateTradeStore } from '@/store/CreateTradeStore';
import { Stack, useRouter } from 'expo-router';
import {  Text, TouchableOpacity, } from 'react-native';

export default function NewTradelayout() {
    const router = useRouter();
    const { tradeType, clearTradePayload } = useCreateTradeStore();


    return (
        <Stack
            screenOptions={{
                headerTitleAlign: 'center',
            }}
        >

            <Stack.Screen
                name="share-trade"
                options={{
                    title: 'Share Trade',
                    animation: 'slide_from_right',
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => {
                                router.replace("/newTrade/stock-type");
                            }}
                            style={{ marginLeft: 0 }}
                        >

                            <BackIcon color='#00bdff' />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <Text style={{ color: '#00bdff', }} >
                            {tradeType}
                        </Text>
                    ),
                }}
            />
            <Stack.Screen
                name="stock-type"
                options={{
                    title: 'Select Type',
                    animation: 'slide_from_right',
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => {
                                router.replace("/tabs/dashboard");
                                clearTradePayload();
                            }}
                            style={{ marginLeft: 0 }}
                        >
                            <BackIcon color='#00bdff' />
                        </TouchableOpacity>
                    ),
                }}
            />
            <Stack.Screen
                name="create-post"
                options={{
                    title: 'Create Post',
                    animation: 'slide_from_right',
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => {
                                router.replace("/tabs/dashboard");
                                clearTradePayload();
                            }}
                            style={{ marginLeft: 0 }}
                        >
                            <BackIcon color='#00bdff' />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={() => {
                                router.replace("/tabs/dashboard");
                                clearTradePayload();
                            }}
                            style={{ marginLeft: 0 }}
                        >
                           <Text> Share </Text>
                        </TouchableOpacity>
                    ),
                }}
            />
        </Stack>
    );
}

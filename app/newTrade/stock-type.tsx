import { View, Text } from 'react-native'
import React, { useState } from 'react'
import TradeToggleButtons from '@/components/custom/TradeToggleButtons';
import CustomButton from '@/components/CustomButton';
import { useRouter } from 'expo-router';




export default function SelectType() {
    const router = useRouter();
    const [type, setType] = useState("Stocks");



    return (
        <View style={{ padding: 20, position: "relative", height: "100%" }}>
            <TradeToggleButtons
                active={type}
                setActive={setType}
                btn1='Stocks'
                btn2='CryptoCurrency'
            />
            <View style={{ position: "absolute", bottom: 40, width:"100%",marginLeft: 20 }} >
                <CustomButton variant="contained" title="Continue" onPress={() => router.replace("/newTrade/share-trade")} />
            </View>
        </View>
    )
};
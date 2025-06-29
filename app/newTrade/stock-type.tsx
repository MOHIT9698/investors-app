import { View, Text } from 'react-native'
import React, { useState } from 'react'
import TradeToggleButtons from '@/components/custom/TradeToggleButtons';
import CustomButton from '@/components/CustomButton';
import { useRouter } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { createNewTradeSchema, selectTradeSchema } from '@/zod/Tradeschema';
import { z } from 'zod';
import { useCreateTradeStore } from '@/store/CreateTradeStore';


type selectSchema = z.infer<typeof selectTradeSchema>;


export default function SelectType() {
    const { tradeType, setTradeType } = useCreateTradeStore();

    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<selectSchema>({
        resolver: zodResolver(selectTradeSchema),
        defaultValues: {
            trade_type: tradeType ?? "",
        }
    });
    const router = useRouter();

    const onSubmit = (data: any) => {

        setTradeType(data?.trade_type);

        router.replace("/newTrade/share-trade");

    }

    return (
        <View style={{ padding: 20, position: "relative", height: "100%" }}>
            <Controller
                control={control}
                name="trade_type"
                rules={{ required: "Trade type is required" }}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <>
                        <TradeToggleButtons
                            value={value}
                            onChange={onChange}
                            btn1='Stocks'
                            btn2='CryptoCurrency'
                        />
                        {error?.message && <Text style={{ color: "red", marginTop: 10 }}>Please select Type</Text>}
                    </>
                )}
            />
            <View style={{ position: "absolute", bottom: 40, width: "100%", marginLeft: 20 }} >
                <CustomButton variant="contained" title="Continue" onPress={handleSubmit(onSubmit)} />
            </View>
        </View>
    )
};
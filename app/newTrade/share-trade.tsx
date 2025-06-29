import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchSelect from '@/components/form-fields/SearchSelect'
import { dummyStockList } from './data';
import TradeToggleButtons from '@/components/custom/TradeToggleButtons';
import CustomTextInput from "@/components/form-fields/CustomTextInput";
import DurationPickerField from '@/components/custom/DurationPickerField';
import TradePositionSlider from '@/components/custom/TradePositionSlider';
import FormSelectDropdown from '@/components/form-fields/SelectInput';
import { ENDPOINTS } from '@/src/api/endPoints';
import Toast from 'react-native-toast-message';
import { apiClient } from '@/src/api/testClient';
import CustomButton from '@/components/CustomButton';
import { zodResolver } from '@hookform/resolvers/zod';
import { createNewTradeSchema } from '@/zod/Tradeschema';
import { z } from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { useCreateTradeStore } from '@/store/CreateTradeStore';
import { useRouter } from 'expo-router';


export const searchStocks = async (query: string) => {
  return dummyStockList.filter(stock =>
    stock.label.toLowerCase().includes(query.toLowerCase())
  );
};
type CreateSchema = z.infer<typeof createNewTradeSchema>;


export default function ShareTrade() {

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<CreateSchema>({
    resolver: zodResolver(createNewTradeSchema),
  });
  const router = useRouter();
  const { tradeType } = useCreateTradeStore();
  const [positionSize, setPositionSize] = useState(0);
  const [levergae, setLeverage] = useState(1);
  const [loading, setLoading] = useState(false);

  const handlefetchStocks = async () => {

    console.log("fetch");
    // setLoading(true);
    let q = "a";
    try {

      const data = await apiClient.get(ENDPOINTS.SEARCH_STOCK(q));

      console.log("testclient", data);



    } catch (error: any) {
      Toast.show({
        type: 'error',
        text1: 'Oops!',
        text2: error?.msg ?? 'Something went wrong!',
        position: 'bottom',
        visibilityTime: 3000,
        autoHide: true,
      });


    } finally {
      // setLoading(false);
    }

  }

  useEffect(() => {
    // handlefetchStocks();
    // createTrade()
  }, [])

  const createTrade = async (data: CreateSchema) => {
    setLoading(true);

    const holdTime = data?.hold_time ? data?.hold_time.match(/^(\d+)\s*(\w+)$/) : null;


    const payload = {
      "stock_id": 2,
      "portfolio_id": 0,
      "entry_price": 1000,
      "price_target": data?.price_target,
      "stop_loss": data?.stop_loss,
      "direction": data?.trade_type.toLowerCase(),
      "hold_time1": holdTime ? parseInt(holdTime[1]) : 0,
      "hold_time2": holdTime ? parseInt(holdTime[1]) : 0,
      "hold_interval": holdTime ? holdTime[2].toUpperCase() : "",
      "status": "open",
      "type": "stocks",
      "size": positionSize,
      "leverage": levergae,
      "risk": data?.risk_level
    }
    try {
      const resp = await apiClient.post(ENDPOINTS.CREATE_TRADE, payload);

      console.log("resppppp create trade", resp);


    } catch (error) {

    }
    setLoading(false);

  }


  return (
    <View style={{ padding: 20, height: "100%" }}>

      <Controller
        control={control}
        name="stock_id"
        rules={{ required: "Stock selection is required" }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <SearchSelect
            placeholder={`Search ${tradeType ?? ""}...`}
            fetchOptions={searchStocks}
            selectedItem={value}
            onSelect={onChange}
            error={error?.message}
          />
        )}
      />

      <Controller
        control={control}
        name="trade_type"
        rules={{ required: "Trade type is required" }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <>
            <TradeToggleButtons
              value={value}
              onChange={onChange}
              btn1='LONG'
              btn2='SHORT'

            />
            {error?.message && <Text style={{ color: "red" }}>{error.message}</Text>}
          </>
        )}
      />

      <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
        <View style={{ width: "48%" }}>
          <Controller
            control={control}
            name="stop_loss"
            render={({ field: { onChange, value } }) => (
              <CustomTextInput
                placeholder="Stop Loss"
                label='Stop Loss:'
                keyboardType='number-pad'
                value={value}
                onChange={onChange}
                error={errors.stop_loss?.message}
                disabled={!watch("trade_type")} // disables when stock_id has a value
              />
            )}
          />
        </View>

        <View style={{ width: "48%" }}>
          <Controller
            control={control}
            name="price_target"
            render={({ field: { onChange, value } }) => (
              <CustomTextInput
                placeholder="Price Target"
                label='Price Target:'
                keyboardType='number-pad'
                value={value}
                onChange={onChange}
                error={errors.price_target?.message}
                disabled={!watch("trade_type")} // disables when stock_id has a value
              />
            )}
          />
        </View>

      </View>



      <Controller
        control={control}
        name="risk_level"
        rules={{ required: "Risk level is required" }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <FormSelectDropdown
            label="Risk Level"
            placeholder="Select Risk Level"
            options={[
              { label: "Low Risk - High Return", value: "low_high" },
              { label: "Low Risk - Low Return", value: "low_low" },
              { label: "High Risk - High Return", value: "high_high" },
              { label: "High Risk - Low Return", value: "high_low" },
            ]}
            value={value}
            onSelect={onChange}
            error={error?.message}
            disabled={!watch("trade_type")} // disables when stock_id has a value

          />
        )}
      />


      <Controller
        control={control}
        name="hold_time"
        rules={{ required: "Hold Time is required" }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <DurationPickerField
            label="Est. Hold Time"
            placeholder="Add Hold Time"
            value={value}
            onChange={onChange}
            error={error?.message}
            disabled={!watch("trade_type")} // disables when stock_id has a value

          />
        )}
      />


      <TradePositionSlider
        label="Position Size"
        value={positionSize}
        onChange={setPositionSize}
        valType={"%"}
        disabled={!watch("trade_type")} // disables when stock_id has a value

      />
      <TradePositionSlider
        label="Leverage"
        value={levergae}
        onChange={setLeverage}
        step={1}
        minimumValue={1}
        maximumValue={4}
        showRange={true}
        rangeLabels={["1X", "2X", "3X", "4X"]}
        valType={"X"}
        disabled={!watch("trade_type")} // disables when stock_id has a value

      />

      <View style={{ position: "absolute", bottom: 40, width: "100%", marginLeft: 20 }} >
        <CustomButton variant="contained" title="Create Trade" onPress={() => { router.replace("/newTrade/create-post") }}   loading={loading}
        // <CustomButton variant="contained" title="Create Trade" onPress={handleSubmit(createTrade)} disabled={!watch("trade_type")} loading={loading}
        />
      </View>

    </View>
  )
}
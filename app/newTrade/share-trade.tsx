import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchSelect from '@/components/form-fields/SearchSelect'
import { dummyStockList } from './data';
import TradeToggleButtons from '@/components/custom/TradeToggleButtons';
import CustomTextInput from "@/components/form-fields/CustomTextInput";
import DurationPickerField from '@/components/custom/DurationPickerField';
import TradePositionSlider from '@/components/custom/TradePositionSlider';
import FormSelectDropdown from '@/components/form-fields/SelectInput';
import apiClient from '@/src/api/client';
import { ENDPOINTS } from '@/src/api/endPoints';
import Toast from 'react-native-toast-message';


export const searchStocks = async (query: string) => {
  return dummyStockList.filter(stock =>
    stock.label.toLowerCase().includes(query.toLowerCase())
  );
};

export default function ShareTrade() {

  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedRisk, setSelectedRisk] = useState("");
  const [tradeType, setTradeType] = useState("");
  const [duration, setDuration] = useState("");
  const [positionSize, setPositionSize] = useState(0);
  const [levergae, setLeverage] = useState(1);

 

  const handlefetchStocks = async () => {
    console.log("jljljlljl");
    
    // setLoading(true);
    let q ="a";
    try {
        const resp = await apiClient.get(ENDPOINTS.SEARCH_STOCK(q));
        if (resp?.data?.status) {
            console.log("profile", resp?.data);
            // setUserProfile(resp?.data?.data);

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
        // setLoading(false);
    }

}

useEffect(()=>{
  handlefetchStocks()
},[])


  return (
    <View style={{ padding: 20 }}>
      <SearchSelect
        fetchOptions={searchStocks}
        onSelect={(item: any) => setSelectedUser(item)}
        selectedItem={selectedUser}
        placeholder='BTC,ETH,DOGE...'
      />

      <TradeToggleButtons
        active={tradeType}
        setActive={setTradeType}
        btn1='LONG'
        btn2='SHORT'
      />

      <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 20 }}>
        <View style={{ width: "48%" }}>
          <CustomTextInput
            placeholder="Stop-Loss"
            value={""}
            onChange={() => { }}
            secureTextEntry
            keyboardType="number-pad"
            label='Stop-Loss:'
          // error={errors.pin?.message}
          />

        </View>
        <View style={{ width: "48%" }}>
          <CustomTextInput
            placeholder="Price Target"
            value={""}
            onChange={() => { }}
            secureTextEntry
            keyboardType="number-pad"
            label='Price Target:'
          // error={errors.pin?.message}
          />

        </View>

      </View>
      <FormSelectDropdown
        label="Risk Level"
        placeholder="Select Risk Level"
        value={selectedRisk}
        onSelect={(val) => setSelectedRisk(val)}
        options={[
          { label: "Low Risk - High Return", value: "low-high" },
          { label: "Low Risk - Low Return", value: "low-low" },
          { label: "High Risk - High Return", value: "high-high" },
          { label: "High Risk - Low Return", value: "high-low" },
        ]}
      />


      <DurationPickerField
        label="Est. Hold Time"
        value={duration}
        onChange={setDuration}
        placeholder="Add Hold Time"
      />
      <TradePositionSlider
        label="Position Size"
        value={positionSize}
        onChange={setPositionSize}
        valType={"%"}
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
      />

    </View>
  )
}
import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../CustomButton'
import {  TradeArrowDown, TradeArrowUp } from '../ui/Icons/Svg'

const TradeToggleButtons = () => {
  return (
    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
      <CustomButton customButtonStyle={{ width: "48%" }} prefixIcon={<TradeArrowUp color="#00bdff" style={{marginRight:10}} />} variant="text" title="LONG" onPress={() => { }} />
      <CustomButton customButtonStyle={{ width: "48%" }} prefixIcon={<TradeArrowDown color="#00bdff" style={{marginRight:10}}  />} variant="text" title="SHORT" onPress={() => { }} />

    </View>
  )
}

export default TradeToggleButtons
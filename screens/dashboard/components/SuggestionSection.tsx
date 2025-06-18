import { DashboardItem } from '@/types/dashboard/profile'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ProfileSection } from '../sections/ProfileSection'

interface MainProps {
  data: DashboardItem
}

const SuggestionSection = ({ data }: MainProps) => {
  return (
    <View style={style.container}>
      <ProfileSection userProfile={data?.profile} />
    </View>
  )
}

export default SuggestionSection

const style = StyleSheet.create({
  container: {
    padding: 10
  }
})
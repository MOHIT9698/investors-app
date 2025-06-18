import { DashboardItem } from '@/types/dashboard/profile'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ProfileSection } from '../sections/ProfileSection'

interface MainProps {
  data: DashboardItem
}

const ReportSection = ({ data }: MainProps) => {
  return (
    <View style={style.container}>
      <ProfileSection userProfile={data?.profile} />
    </View>
  )
}

export default ReportSection;

const style = StyleSheet.create({
  container: {
    padding: 10
  }
})
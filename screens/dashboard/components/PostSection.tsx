import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ProfileSection } from '../sections/ProfileSection'
import { DashboardItem } from '@/types/dashboard/profile'

interface MainProps {
    data: DashboardItem
}

const PostSection = ({ data }: MainProps) => {
    return (
        <View style={style.container}>
            <ProfileSection userProfile={data?.profile} />
        </View>
    )
}

export default PostSection;

const style = StyleSheet.create({
    container: {
        padding: 10
    }
})
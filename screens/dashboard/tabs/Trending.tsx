import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import { DashboardData } from '../Data'
import ReportSection from '../components/ReportSection'
import PostSection from '../components/PostSection'
import SuggestionSection from '../components/SuggestionSection'
import Divider from '@/components/divider/Divider'

const Trending = () => {
    return (
        <ScrollView contentContainerStyle={{ paddingVertical: 10, paddingBottom: 80 }} showsVerticalScrollIndicator={false} >

            {DashboardData?.map((data, index) => {
                return <View key={index}  >
                    {
                        data?.type === "report" ? <ReportSection data={data} /> : data?.type === "post" ? <PostSection data={data} /> : <SuggestionSection data={data} />
                    }

                    <Divider />
                </View>
            })}

        </ScrollView>
    )
}

export default Trending
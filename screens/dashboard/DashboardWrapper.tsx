import React from 'react'
import { StyleSheet, View } from 'react-native'
import Trending from './tabs/Trending'

const DashboardWrapper = () => {
    return (
        <View style={styles.wrapper}>
            <Trending/>
            
        </View>
    )
}

export default DashboardWrapper

const styles = StyleSheet.create({
wrapper:{
    height:"100%",
    width:"100%",
    
}
})
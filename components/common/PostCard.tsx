import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


const PostCard = () => {
    return (
        <View style={styles.container}>
            <View style={[styles.content]}>
                <View style={styles.header}>

                </View>
                <View style={styles.infoContainer}>
                    <View style={styles.dataContainer}>
                        <View style={styles.row}>

                        </View>

                    </View>
                    <View style={styles.graphContainer}>
                        

                    </View>

                </View>

            </View>
            <View style={[styles.footer]}>
                <NewPosition />

                <Text style={{ color: "#a4a7a4" }}>Opened on 29/06/2025</Text>

            </View>
        </View>
    )
}

export default PostCard;


const NewPosition = () => {
    return (
        <View style={styles.position}>
            <Text style={{ color: "#1dda56" }}>New Position</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        height: 250,
        width: "100%",
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 10,
    },
    content: {
        height: "80%",
        width: "100%",
        padding: 10
    },
    header: {
        height: 60,
        width: "100%",
        borderColor: "#ccc",
        borderBottomWidth: 1,
    },
    infoContainer: {
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "72%"
    },
    dataContainer: {
        width: "50%",
    },
    row: {
        height: "50%",
        width: "100%",
        borderColor: "#ccc",
        borderBottomWidth: 1,

    },
    graphContainer: {

        width: "50%",
        height: "100%",
    },
    footer: {
        height: "20%",
        width: "100%",
        borderColor: "#ccc",
        borderTopWidth: 1,
        padding: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    position: {
        backgroundColor: "#d7dad7",
        borderRadius: 5,
        padding: 5,
        paddingInline: 10,
    }
})



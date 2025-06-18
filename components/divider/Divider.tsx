import React from 'react';
import { View, StyleSheet } from 'react-native';

const Divider = () => {
    return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
    divider: {
        height: 1,
        backgroundColor: '#E0E0E0',
        marginVertical: 10, // Optional: adds spacing
    },
});

export default Divider;

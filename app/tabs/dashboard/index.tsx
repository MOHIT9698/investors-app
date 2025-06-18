import { Image, StyleSheet, Platform, View, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import DashboardWrapper from '@/screens/dashboard/DashboardWrapper';

export default function HomeScreen() {
  return (
    <View style={{ height: "100%", width: "100%" }} >
      <DashboardWrapper />
    </View>
  );
}

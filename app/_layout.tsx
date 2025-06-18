import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Slot, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


import { useColorScheme } from '@/hooks/useColorScheme';
import Toast from 'react-native-toast-message';
import { AuthProvider, useAuth } from '@/src/context/AuthContext';
import { StyleSheet, View } from 'react-native';
import * as SecureStore from 'expo-secure-store';



// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();


  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
    const checkAuth = async () => {
      const token = await SecureStore.getItemAsync('access_token');
      if (token) {
        router.replace('/tabs/dashboard'); // navigate to dashboard if token exists
      } else {
        router.replace('/auth/login'); // otherwise go to login
      }
    };

    checkAuth();
  }, [loaded]);

  if (!loaded) {
    return null;
  }


  return (
    <GestureHandlerRootView style={styles.container}>
      <AuthProvider>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Slot />
          <StatusBar style="auto" />
          <Toast />
        </ThemeProvider>
      </AuthProvider>
    </GestureHandlerRootView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

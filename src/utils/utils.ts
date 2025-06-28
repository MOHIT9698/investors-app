import * as SecureStore from 'expo-secure-store';
import { Alert, Platform } from 'react-native';


export const getAuthToken = async (): Promise<string | null> => {
    if (Platform.OS === 'web') {
      // For web, use localStorage or AsyncStorage
      return localStorage.getItem('access_token');
    } else {
      // For native platforms
      return await SecureStore.getItemAsync('access_token');
    }
  };
export const setAuthToken = async (paramToken: string) => {
    if (Platform.OS === 'web') {
        localStorage.setItem('access_token', paramToken);
      } else {
        await SecureStore.setItemAsync('access_token', paramToken);
      }

}


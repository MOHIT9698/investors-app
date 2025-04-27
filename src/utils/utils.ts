import * as SecureStore from 'expo-secure-store';


export const getAuthToken = async () => {
    const token = await SecureStore.getItemAsync('access_token');
    return token;

}
export const setAuthToken = async (paramToken: string) => {
    await SecureStore.setItemAsync('access_token', paramToken);

}
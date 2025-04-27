// app/index.tsx or app/navigation/MainNavigator.tsx
import { useAuth } from '@/src/context/AuthContext';
import { Stack } from 'expo-router'; // or react-navigation if needed

export default function MainNavigator() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return (
      <Stack>
        {/* Private (authenticated) screens */}
        <Stack.Screen name="tabs" options={{ headerShown: false }} />
        {/* (tabs) is a group that has profile, dashboard, etc. inside it */}
      </Stack>
    );
  } else {
    return (
      <Stack>
        {/* Public (unauthenticated) screens inside the auth folder */}
        <Stack.Screen name="auth/login" options={{ headerShown: false }} />
        <Stack.Screen name="auth/register" options={{ headerShown: false }} />
        <Stack.Screen name="auth/verification" options={{ headerShown: false }} />
      </Stack>
    );
  }
}

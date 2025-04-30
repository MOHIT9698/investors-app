import { Tabs, useRouter } from 'expo-router';
import React from 'react';
import { Alert, Platform, TouchableOpacity } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { LogoutIcon, NavbarAddIcon, NavbarHomeIcon, NavbarProfileIcon, NavbarSearchIcon } from '@/components/ui/Icons/Svg';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();

  const handleLogout = () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to log out?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Logout",
          style: "destructive",
          onPress: async () => {
            // await SecureStore.deleteItemAsync("access_token"); // Clear access token
            router.replace('/auth/login'); // Navigate to login screen
          }
        }
      ],
      { cancelable: true }
    );
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false, // 👈 show the header now
        headerTitleAlign: 'center', // 👈 optional: center the title if you want
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarShowLabel: false,
        headerRight: () => (
          <TouchableOpacity style={{ marginRight: 15 }} onPress={handleLogout}>
            <LogoutIcon className='mt-2' color={Colors[colorScheme ?? 'light'].text} />
          </TouchableOpacity>
        ),
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',

          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="dashboard"
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color }) => <NavbarHomeIcon className="mt-2" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <NavbarSearchIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="new"
        options={{
          title: 'New',
          tabBarIcon: ({ color }) => <NavbarAddIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <NavbarProfileIcon color={color} />,
        }}
      />
    </Tabs>
  );
}

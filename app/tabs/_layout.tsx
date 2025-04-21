import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { NavbarAddIcon, NavbarHomeIcon, NavbarProfileIcon, NavbarSearchIcon } from '@/components/ui/Icons/Svg';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarShowLabel: false,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',

          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          // title: 'Home',
          tabBarIcon: ({ color }) => <NavbarHomeIcon className="mt-2" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          // title: 'Profile',
          tabBarIcon: ({ color }) => <NavbarSearchIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          // title: 'Add',
          tabBarIcon: ({ color }) => <NavbarAddIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          // title: 'Explore',
          tabBarIcon: ({ color }) => <NavbarProfileIcon color={color} />,
        }}
      />
    </Tabs>
  );
}

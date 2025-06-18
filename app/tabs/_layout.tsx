import { Link, Tabs, useRouter } from 'expo-router';
import React, { useRef } from 'react';
import { Alert, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Modalize } from 'react-native-modalize';

import { ChatIcon, DocIcon, LogoutIcon, NavbarAddIcon, NavbarHomeIcon, NavbarProfileIcon, NavbarSearchIcon, PortfolioIcon, TradeIcon } from '@/components/ui/Icons/Svg';
import Divider from '@/components/divider/Divider';
import CustomButton from '@/components/CustomButton';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const modalizeRef = useRef<Modalize>(null);

  const openDrawer = () => modalizeRef.current?.open();

  const handleNavigation = (path:string)=>{
    router.replace(path)
    console.log("path",path);
    
  }

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
    <>
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
            tabBarButton: (props) => (
              <TouchableOpacity
                onPress={() => modalizeRef.current?.open()} // open modal here
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 4,
                }}
              >
                <NavbarAddIcon color={Colors[colorScheme ?? 'light'].text} />
              </TouchableOpacity>
            ),
          }}
        />

        {/* <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color }) => <ChatIcon color={color} />,
          }}
        /> */}
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color }) => <NavbarProfileIcon color={color} />,
          }}
        />
      </Tabs>

      <TouchableOpacity
        onPress={openDrawer}
        style={{
          position: 'absolute',
          bottom: 80,
          right: 20,
          backgroundColor: '#fff',
          borderRadius: 30,
          padding: 10,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 4,
          elevation: 5,
        }}
      >
        <ChatIcon color={Colors[colorScheme ?? 'light'].text} />
      </TouchableOpacity>

      <Modalize
        ref={modalizeRef}
        snapPoint={300}
        modalHeight={250}
        handleStyle={{ backgroundColor: '#ccc' }}
      >
        <View style={{ padding: 20 }}>

          <TouchableOpacity style={styles.MenuOption} onPress={openDrawer} >
            <View style={{ minWidth: 30, height:25 }}>
              <PortfolioIcon />
            </View>
            <Text style={{ fontSize: 16, marginTop:5 }} >Portfolio</Text>

          </TouchableOpacity>
          <Divider />
          <TouchableOpacity style={styles.MenuOption} onPress={()=> handleNavigation("/newTrade/share-trade")} >
            <View style={{ minWidth: 30, minHeight:20 }}>

              <TradeIcon />
            </View>

            <Text style={{ fontSize: 16 }} >New Trade</Text>

          </TouchableOpacity>
          <Divider />
          <TouchableOpacity style={styles.MenuOption} onPress={openDrawer} >
            <View style={{ minWidth: 30  }}>

              <DocIcon />
            </View>

            <Text style={{ fontSize: 16 }} >Post</Text>

          </TouchableOpacity>
          <Divider />

          <CustomButton fontSize={16} variant="contained" title="Cancel" onPress={() => modalizeRef.current?.close()}
          />
        </View>
      </Modalize>
    </>
  );
}

const styles = StyleSheet.create({
  MenuOption: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    alignItems: "center"
  },
});

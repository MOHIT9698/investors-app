import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack.Screen
      name="your-screen-name"
      options={{
        headerShown: true,
        title: "",
        // headerBackTitleVisible: false,
      }}
    />
  );
}

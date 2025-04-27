// app/login.tsx or screens/LoginScreen.tsx
import React, { useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomTextInput from "@/components/form-fields/CustomTextInput";

import { z } from "zod";
import { useNavigation, useRouter } from "expo-router";
import { AppImages } from "@/assets/images";
import CustomButton from "@/components/CustomButton";
import { BackIcon } from "@/components/ui/Icons/Svg";
import Toast from "react-native-toast-message";
import { loginSchema } from "@/zod/authSchema";
import apiClient from "@/src/api/client";
import { ENDPOINTS } from "@/src/api/endPoints";
import { useAuth } from "@/src/context/AuthContext";
const { height, width } = Dimensions.get("window"); // Get device height


type LoginForm = z.infer<typeof loginSchema>;

export default function LoginScreen() {
  const router = useRouter();
  const navigation = useNavigation();
  const { login } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginForm) => {

    try {
      const response = await apiClient.post(ENDPOINTS.LOGIN, {
        ...data,
        password: data?.pin
      });

      if (response.data?.status) {
        const token = response?.data?.data;
        await login(token);
        Toast.show({
          type: 'success',
          text1: 'Login Successful!',
          text2: 'Hang tight, taking you to your dashboard...',
          position: 'bottom',
          visibilityTime: 1000,
          autoHide: true,
        });
        router.push("/tabs");

      }

    } catch (error: any) {
      Toast.show({
        type: 'error',
        text1: 'Oops!',
        text2: error?.msg ?? 'Invalid credentials. Try again.',
        position: 'bottom',
        visibilityTime: 3000,
        autoHide: true,
      });
    }

  };

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation])



  return (
    <TouchableWithoutFeedback style={styles.wrapper} onPress={Keyboard.dismiss}>
      <View
        style={styles.wrapper} >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={styles.container}
        >
          <View style={styles.heading} >
            <Image source={AppImages?.home_logo} style={styles.logo} />
            <Text style={styles.title}>Welcome Back!</Text>
          </View>
          <View style={styles.formContainer} >


            <Controller
              control={control}
              name="user_name"
              render={({ field: { onChange, value } }) => (
                <CustomTextInput
                  placeholder="Username"
                  value={value}
                  onChange={onChange}
                  error={errors.user_name?.message}
                />
              )}
            />
            <View>
              <Controller
                control={control}
                name="pin"
                render={({ field: { onChange, value } }) => (
                  <CustomTextInput
                    placeholder="PIN"
                    value={value}
                    onChange={onChange}
                    secureTextEntry
                    keyboardType="number-pad"
                    error={errors.pin?.message}
                  />
                )}
              />
              <TouchableOpacity
               onPress={() => router.replace("/auth/forgot-password")}
                style={styles.forgotButton}
              >
                <Text style={{ fontSize: 14, color: "#00bdff", }}>Forgot password?</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.button}>
              <CustomButton variant="contained" title="LogIn" onPress={handleSubmit(onSubmit)} />
            </View>

          </View>
          <View style={styles.backButton}>
            <CustomButton prefixIcon={<BackIcon color="#00bdff" />} variant="text" title="Back" onPress={() => router.replace("/")} />
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  wrapper: { backgroundColor: "white", flex: 1, },
  container: { paddingHorizontal: 20, flex: 1, paddingTop: height * 0.1, padding: 20, },
  logo: { height: 50, width: 50, },
  title: { fontSize: 24, fontWeight: "bold", width: "auto", color: "#00bdff", marginTop: 5 },
  heading: { display: "flex", alignItems: "center", },
  formContainer: { gap: 0, marginTop: 20, },
  button: { marginTop: 30 },
  backButton: { marginBottom: 40, position: "absolute", bottom: 0 },
  forgotButton: { display: "flex", justifyContent: "flex-end", alignItems: "flex-end",marginTop:-20 },


});

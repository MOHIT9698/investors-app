import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Dimensions, Image, Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useNavigation, useRouter } from "expo-router";
import { useEffect } from "react";
import CustomButton from "@/components/CustomButton";
import FormTextField from "@/components/form-fields/FormTextField";
import { AppImages } from "@/assets/images";
import { BackIcon } from "@/components/ui/Icons/Svg";
import { registerSchema } from "@/zod/register";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreateAccountSchema } from "@/zod/authSchema";
import CustomTextInput from "@/components/form-fields/CustomTextInput";
import { z } from "zod";
import apiClient from "@/src/api/client";
import { ENDPOINTS } from "@/src/api/endPoints";
import Toast from "react-native-toast-message";
import * as SecureStore from 'expo-secure-store';

const { height, width } = Dimensions.get("window"); // Get device height
type CreateForm = z.infer<typeof CreateAccountSchema>;



export default function RegisterScreen() {
  const router = useRouter();
  const navigation = useNavigation();
  const { control, handleSubmit, formState: { errors } } = useForm<CreateForm>({
    resolver: zodResolver(CreateAccountSchema),
  });
  // const { control, handleSubmit, formState: { errors } } = useForm({resolver:zodResolver(registerSchema)});


  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation])


  const onSubmit = async (data: CreateForm) => {
    try {
      const response = await apiClient.post(ENDPOINTS.REGISTER, {
        ...data,
        password: data?.pin
      });

      if (response.data?.status) {

        Toast.show({
          type: 'success',
          text1: response.data.msg ?? 'User created successfully',
          text2: "You're all set! Redirecting to the login screen...",
          position: 'bottom',
          visibilityTime: 3000,
          autoHide: true,
        });
        router.push("/auth/login");

      }

    } catch (error: any) {
      console.log("error", error);

      Toast.show({
        type: 'error',
        text1: error.msg,
        text2: '',
        position: 'bottom',
        visibilityTime: 3000,
        autoHide: true,
      });
    }
  };

  return (
    <TouchableWithoutFeedback style={styles.wrapper} onPress={Keyboard.dismiss}>
      <View
        style={styles.wrapper} >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={styles.container}
        >


          <View style={styles.headContainer}>
            <Image source={AppImages?.home_logo} style={styles.logo} />
            <Text style={styles.title}>Create Account</Text>
            <Text style={styles.subTitle}>Join the Investor's Community and Get Started Today</Text>
          </View>

          <View style={styles.formContainer} >
            <Controller
              control={control}
              name="name"
              render={({ field: { onChange, value } }) => (
                <CustomTextInput
                  placeholder="Full Name"
                  value={value}
                  onChange={onChange}
                  error={errors.name?.message}
                />
              )}
            />

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
          </View>
          <View style={styles.button}>
            <CustomButton variant="contained" title="Create" onPress={handleSubmit(onSubmit)} />
          </View>


        </KeyboardAvoidingView>
        <View style={styles.backButton}>
          <CustomButton prefixIcon={<BackIcon color="#00bdff" />} variant="text" title="Back" onPress={() => router.replace("/")} />
        </View>
      </View>

    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  wrapper: { backgroundColor: "white", flex: 1, },
  container: { flex: 1, paddingTop: height * 0.1, padding: 20, },
  headContainer: {
    // marginTop: height * 0.1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  logo: { height: 50, width: 50, },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    marginTop: 10,
    color: "#00bdff"

  },
  subTitle: {
    fontSize: 16,
    color: "#85929e",
    // width: width * 1,
    fontWeight: "400",
    textAlign: "center",
    marginBottom: 20,
    paddingInline: 50

  },
  formContainer: {
    gap: 2,
    marginTop: 20
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  error: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
  },
  button: {
    marginTop: 30
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  backButton: { marginBottom: 40, position: "absolute", bottom: 0 },

});

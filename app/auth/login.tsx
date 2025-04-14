import { useEffect, useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Dimensions, Image, Keyboard, TouchableOpacity } from "react-native";
import { useNavigation, useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { AppImages } from "@/assets/images";
import TextButton from "@/components/TextButton";
import { Controller, useForm } from "react-hook-form";
import FormTextField from "@/components/form-fields/FormTextField";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/zod/login";
import CustomButton from "@/components/CustomButton";
import { BackIcon } from "@/components/ui/Icons/Svg";


const { height, width } = Dimensions.get("window"); // Get device height


export default function LoginScreen() {
  const router = useRouter();
  const navigation = useNavigation();
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log("Form data:", data);
    Keyboard.dismiss();
    // You can navigate or call an API here
  };

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation])


  return (
    <View
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
          rules={{ required: "Username is required" }}
          render={({ field: { onChange, value } }) => (
            <FormTextField
              placeholder="User Name"
              onChange={onChange}
              value={value}
            />
          )}
        />
        {/* {errors.username && <Text style={styles.error}>{errors.username.message}</Text>} */}



        <Controller
          control={control}
          name="pin"
          rules={{ required: "Pin is required", minLength: { value: 4, message: "Pin must be at least 4 digits" }, }}
          render={({ field: { onChange, value } }) => (
            <FormTextField
              // label={"Password"}
              placeholder="Pin"
              secureTextEntry={true}
              onChange={onChange}
              value={value}
              keyboardType="number-pad"
            />
          )}
        />
      </View>
      {/* {errors.password && <Text style={styles.error}>{errors.password.message}</Text>} */}
      <View style={styles.button}>
        <CustomButton variant="contained" title="LogIn" onPress={handleSubmit(onSubmit)} />
      </View>
      <View style={styles.button}>
        <CustomButton prefixIcon={<BackIcon color="#00bdff" />} variant="outlined" title="Back" onPress={() => router.replace("/")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: height * 0.1, padding: 20, backgroundColor: "white" },
  heading: { display: "flex", alignItems: "center", },
  title: { fontSize: 24, fontWeight: "bold", width: "auto", color: "#00bdff", marginTop: 5 },
  logo: { height: 50, width: 50, },
  alreadyAccount: { fontSize: 14, fontWeight: "700", width: "auto", color: "white", marginBlock: 20, textAlign: "center" },
  account: { fontSize: 14, fontWeight: "500", width: 170, color: "white", },
  signUp: { fontSize: 14, fontWeight: "700", width: 60, color: "rgba(2,0,36,1)", },
  noEmail: { fontSize: 14, fontWeight: "400", color: "white", alignContent: "flex-start", display: "flex", width: "100%", },
  formContainer: { gap: 0, marginTop: 20, },
  footerParent: { display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between", position: "absolute", bottom: 50, marginLeft: 20 },
  footerChild: { display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", },
  nextButton: { height: 100, width: 100, backgroundColor: "red" },
  button: {
    marginTop: 30
  },
});

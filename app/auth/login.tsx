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


const { height, width } = Dimensions.get("window"); // Get device height


export default function LoginScreen() {
  const router = useRouter();
  const navigation = useNavigation();
  const { control, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(loginSchema) });

  const onSubmit = (data: any) => {
    console.log("Form data:", data);
    Keyboard.dismiss();
    // You can navigate or call an API here
  };

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation])


  return (
    <LinearGradient
      colors={[
        "rgba(2,0,36,1)",
        "rgba(9,9,121,1)",
        "rgba(9,14,124,1)",
        "rgba(0,189,255,1)"
      ]}
      locations={[0, 0.15, 0.17, 0.87]} // Positions to match CSS stops
      start={{ x: 0.1, y: 0 }}  // Approximate 172-degree angle
      end={{ x: 0.9, y: 1 }}
      style={styles.container}
    >
      <View style={styles.heading} >
        <Image source={AppImages?.home_logo} style={styles.logo} />
        <Text style={styles.title}>Welcome Back!</Text>
      </View>
      {/* <TextButton customStyle={styles.alreadyAccount} textColor="white" title="I already have an account" onPress={() => router.replace("/")} /> */}

      <View style={styles.formContainer} >
        <Controller
          control={control}
          name="email"
          rules={{ required: "Email is required" }}
          render={({ field: { onChange, value } }) => (
            <FormTextField
              // label="Full Name"
              onChange={onChange}
              placeholder="Enter Your Email Address"
              value={value}
              error={!!errors.email}

              textColor="white"
            />
          )}
        />
        {errors.email && <Text style={{ color: "red", fontSize: 12 }}>{errors.email.message}</Text>}

      </View>
      <TextButton customStyle={styles.noEmail} textColor="white" title="Can't login with your email?" onPress={() => router.replace("/auth/verification")} />
      <View style={styles.footerParent} >
        <View style={styles.footerChild}>
          <Text style={styles.account}>Dont't have an account?</Text>
          <TextButton customStyle={styles.signUp} textColor="rgba(9,9,121,1)" title="Sign Up" onPress={() => router.replace("/auth/verification")} />
        </View>

       
        <TouchableOpacity
          style={styles.nextButton}
          onPress={handleSubmit(onSubmit)} // Important: wrap your onSubmit like this
        >

          <Text style={{ fontSize: 18 }}>{">>>>>"}</Text>
        </TouchableOpacity>
      </View>


    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: height * 0.1, padding: 20, },
  heading: { display: "flex", alignItems: "center", },
  title: { fontSize: 24, fontWeight: "bold", width: "auto", color: "white", marginTop: 5 },
  logo: { height: 50, width: 50, },
  alreadyAccount: { fontSize: 14, fontWeight: "700", width: "auto", color: "white", marginBlock: 20, textAlign: "center" },
  account: { fontSize: 14, fontWeight: "500", width: 170, color: "white", },
  signUp: { fontSize: 14, fontWeight: "700", width: 60, color: "rgba(2,0,36,1)", },
  noEmail: { fontSize: 14, fontWeight: "400", color: "white", alignContent: "flex-start", display: "flex", width: "100%", },
  formContainer: { gap: 0, marginTop: 20, },
  footerParent: { marginTop: 400, display: "flex", flexDirection: "row" },
  footerChild: { display: "flex", flexDirection: "row", width: "100%", justifyContent: "flex-start", alignItems: "center" },
  nextButton: { height: 100, width: 100, backgroundColor: "red" },
});

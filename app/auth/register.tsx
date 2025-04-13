import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Dimensions, Image } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useNavigation, useRouter } from "expo-router";
import { useEffect } from "react";
import CustomButton from "@/components/CustomButton";
import FormTextField from "@/components/form-fields/FormTextField";
import { AppImages } from "@/assets/images";
import { BackIcon } from "@/components/ui/Icons/Svg";
const { height, width } = Dimensions.get("window"); // Get device height


export default function RegisterScreen() {
  const router = useRouter();
  const navigation = useNavigation();
  const { control, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation])


  const onSubmit = (data: any) => {
    Alert.alert("Success", `Welcome, ${data.name}!`);
    router.push("/"); // Navigate to home after registration
  };

  return (
    <View style={styles.container}>
      <View style={styles.headContainer}>
        <Image source={AppImages?.home_logo} style={styles.logo} />
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subTitle}>Join the Investor's Community and Get Started Today</Text>
      </View>

      <View style={styles.formContainer} >
        <Controller
          control={control}
          name="name"
          rules={{ required: "Full Name is required" }}
          render={({ field: { onChange, value } }) => (
            <FormTextField
              // label="Full Name"
              onChange={onChange}
              placeholder="Full Name"
              value={value}
            />
          )}
        />
        {/* {errors.name && <Text style={styles.error}>{errors.name.message}</Text>} */}

        <Controller
          control={control}
          name="username"
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
          name="password"
          rules={{ required: "Password is required", minLength: { value: 6, message: "Password must be at least 6 characters" } }}
          render={({ field: { onChange, value } }) => (
            <FormTextField
              // label={"Password"}
              placeholder="Password"
              secureTextEntry={true}
              onChange={onChange}
              value={value}
            />
          )}
        />
      </View>
      {/* {errors.password && <Text style={styles.error}>{errors.password.message}</Text>} */}
      <View style={styles.button}>
        <CustomButton variant="contained" title="Create" onPress={() => router.replace("/auth/register")} />
      </View>
      <View style={styles.button}>
        <CustomButton prefixIcon={<BackIcon color="#00bdff" />} variant="outlined" title="Back" onPress={() => router.replace("/")} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  headContainer: {
    marginTop: height * 0.1,
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
    gap: 10,
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
});

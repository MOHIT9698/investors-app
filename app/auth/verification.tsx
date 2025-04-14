import { View, Text, StyleSheet, Alert, TextInput, TouchableOpacity, Image, Dimensions, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';
import { AppImages } from '@/assets/images';
import CustomButton from '@/components/CustomButton';
import FormTextField from '@/components/form-fields/FormTextField';
const { height, width } = Dimensions.get("window"); // Get device height

const CELL_COUNT = 6; // Number of OTP digits


const Verification = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm();
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");

  const ref = useBlurOnFulfill({ value: otp, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: otp,
    setValue: setOtp,
  });

  const sendOtp = (data: any) => {
    if (!data.phone || data.phone.length < 10) {
      Alert.alert("Error", "Please enter a valid phone number.");
      return;
    }
    setOtpSent(true);
    // Alert.alert("OTP Sent", "A verification code has been sent to your number.");
  };

  const verifyOtp = () => {
    if (otp.length !== CELL_COUNT) {
      Alert.alert("Invalid OTP", "Please enter a valid 6-digit OTP.");
      return;
    }
    Alert.alert("Success", "OTP Verified Successfully!");
    router.push("/auth/register");
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={AppImages?.verification_bg} style={styles.bg} />
      <Text style={styles.heading}>Phone verification</Text>
      <Text style={styles.subheading}>We need to register your phone number berfore getting started!</Text>

      {!otpSent ? (
        <View style={styles.buttonContainer} >
          <Controller

            control={control}
            name="phone"
            render={({ field: { onChange, value } }) => (
              <FormTextField
                onChange={onChange}
                placeholder="Phone Number"
                value={value}
                keyboardType='phone-pad'
              />

            )}
          />

          <View style={styles.buttonContainer} >
            <CustomButton title='Send Code' variant='contained' fontSize={14} onPress={handleSubmit(sendOtp)} />



            <CustomButton title='back' variant='text' onPress={() => {
              if (navigation.canGoBack()) {
                navigation.goBack();
              } else {
                // fallback, maybe navigate somewhere else
               router.replace("/")
              }
            }}
             />
          </View>

        </View>
      ) : (
        <>
          <CodeField
            ref={ref}
            {...props}
            value={otp}
            onChangeText={setOtp}
            cellCount={CELL_COUNT}
            rootStyle={styles.otpRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({ index, symbol, isFocused }) => (
              <View
                key={index}
                style={[styles.cell, isFocused && styles.cellFocused]}
                onLayout={getCellOnLayoutHandler(index)}
              >
                <Text style={styles.cellText}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              </View>
            )}
          />
          <View style={styles.buttonContainer} >
            <CustomButton title='Verify Phone Number' variant='contained' fontSize={14} onPress={verifyOtp} />

            {/* <CustomButton title='back' variant='text' onPress={() => router.push("/")} /> */}
            <View style={styles.footer}>
              <Text onPress={() => setOtpSent(false)} style={styles.editPhone}>
                Edit phone number ?
              </Text>
              <Text style={styles.sendAgain}>
                Send again
              </Text>


            </View>
          </View>


        </>
      )}
    </View>
  )
}

export default Verification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: "30%",
    alignItems: "center",
    paddingHorizontal: 30,
    backgroundColor: "white",
  },
  bg: {
    height: 150,
    width: 200
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20
  },
  subheading: {
    fontSize: 14,
    paddingInline: 50,
    fontWeight: "400",
    marginBottom: 20,
    textAlign: "center"
  },
  buttonContainer: {
    width: "100%",
    marginTop: 30
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  editPhone: {
    fontSize: 14,
  },
  sendAgain: {
    fontSize: 14,
    color: "#00bdff"
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  otpInput: {
    width: "80%",
    height: 50,
  },
  otpBox: {
    width: 40,
    height: 45,
    borderBottomWidth: 2,
    borderColor: "#007BFF",
    fontSize: 20,
    textAlign: "center",
  },
  resendText: {
    marginTop: 15,
    color: "#007BFF",
    fontWeight: "bold",
  },
  // container: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   paddingHorizontal: 20,
  //   backgroundColor: "#F5F5F5",
  // },
  // heading: {
  //   fontSize: 22,
  //   fontWeight: "bold",
  //   marginBottom: 20,
  // },
  otpRoot: {
    width: "80%",
    alignItems: "center",
  },
  cell: {
    width: 40,
    height: 50,
    borderBottomWidth: 2,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  cellFocused: {
    borderColor: "#007BFF",
  },
  cellText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  // button: {
  //   backgroundColor: "#007BFF",
  //   paddingVertical: 12,
  //   paddingHorizontal: 40,
  //   borderRadius: 8,
  //   marginTop: 20,
  // },
  // buttonText: {
  //   color: "#fff",
  //   fontSize: 16,
  //   fontWeight: "bold",
  // },
});
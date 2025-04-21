import { View, Text, StyleSheet, Alert, TextInput, TouchableOpacity, Image, Dimensions, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';
import { AppImages } from '@/assets/images';
import CustomButton from '@/components/CustomButton';
import FormTextField from '@/components/form-fields/FormTextField';
import { BackIcon } from '@/components/ui/Icons/Svg';
import apiClient from '@/src/api/client';
import { ENDPOINTS } from '@/src/api/endPoints';
import Toast from 'react-native-toast-message';
const { height, width } = Dimensions.get("window"); // Get device height

const CELL_COUNT = 6; // Number of OTP digits


const Verification = () => {
  const router = useRouter();
  const navigation = useNavigation();
  const { control, handleSubmit } = useForm();
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [contact,setContact] = useState(null);

  const ref = useBlurOnFulfill({ value: otp, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: otp,
    setValue: setOtp,
  });

  const sendOtp = async (data: any) => {

    if (!data.phone || data.phone.length < 10) {
      Alert.alert("Error", "Please enter a valid phone number.");
      return;
    } else {
      setContact(data?.phone)

      try {
        const response = await apiClient.post(ENDPOINTS.SIGN_UP, {
          contact: "+91" + data.phone,
        });

        if (response.data?.status) {
          Toast.show({
            type: 'success',
            text1: response.data.msg ?? 'OTP sent successfully',
            text2: 'Your OTP is on the way. Enter it to verify your identity.',
            position: 'bottom',
            visibilityTime: 3000,
            autoHide: true,
          });
          setOtpSent(true);

        }
        
      } catch (error: any) {
        Toast.show({
          type: 'error',
          text1: error.msg,
          text2: '',
          position: 'bottom',
          visibilityTime: 3000,
          autoHide: true,
        });
      }
    }
  };


  const verifyOtp = async() => {
    if (otp.length !== CELL_COUNT) {
      Alert.alert("Invalid OTP", "Please enter a valid 6-digit OTP.");
      return;
    }else{
      try {
        const response = await apiClient.post(ENDPOINTS.VERIFY_PHONE, {
          contact:"+91" + contact,
          otp: 88888,
        });

        console.log("response",response);
        
        if (response.data?.status) {
          Toast.show({
            type: 'success',
            text1: response.data.msg ?? 'OTP has been verified',
            text2: "Verification complete. You're good to go!",
            position: 'bottom',
            visibilityTime: 3000,
            autoHide: true,
          });

          router.push("/auth/register");
        }
      } catch (error: any) {
        Toast.show({
          type: 'error',
          text1: error.msg,
          text2: '',
          position: 'bottom',
          visibilityTime: 3000,
          autoHide: true,
        });
      }
    }
  };

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View style={styles.wrapper} >
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

      <View style={styles.backButton}>
        <CustomButton prefixIcon={<BackIcon color="#00bdff" />} variant="text" title="Back" onPress={() => {
          if (navigation.canGoBack()) {
            navigation.goBack();
          } else {
            // fallback, maybe navigate somewhere else
            router.replace("/")
          }
        }} />
      </View>
    </View>
  )
}

export default Verification;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    paddingTop: "30%",
    alignItems: "center",
    paddingHorizontal: 30,
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
    marginTop: 20
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
  backButton: { marginBottom: 40, position: "absolute", bottom: 0 },

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
import { View, Text, Button, StyleSheet, Image, Dimensions } from "react-native";
import { useNavigation, useRouter } from "expo-router";
import CustomButton from "@/components/CustomButton";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect } from "react";
import { AppImages } from "@/assets/images";
import TextButton from "@/components/TextButton";
const { height, width } = Dimensions.get("window"); // Get device height

export default function HomeScreen() {
    const router = useRouter();
    const navigation = useNavigation();

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
                <Text style={styles.title}>Investor's App</Text>
                <Text style={styles.title3}>improve your stratgies</Text>
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.title2}>Lets Get Started!</Text>
                <CustomButton customButtonStyle={{width:"100%"}} variant="text" title="Create Account" onPress={() => router.replace("/auth/register")} borderRadius={50} />
                <TextButton customStyle={styles.alreadyAccount} textColor="white" title="I already have an account" onPress={() => router.replace("/auth/login")} />
            </View>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, paddingTop: "50%", padding: 20, flexDirection:"column", justifyContent:"space-between" },
    heading: { display: "flex", alignItems: "center", },
    title: { fontSize: 24, fontWeight: "bold", width: "auto", color: "white", marginTop: 5 },
    title2: { fontSize: 28, fontWeight: "300", width:220,  color: "white", marginTop: 5, textAlign: "center", marginBottom: 20,},
    title3: { fontSize: 14, fontWeight: "300", width: "auto", color: "white", marginTop: 5, textAlign: "center", marginBottom: 30, letterSpacing: 4 },
    logo: { height: 50, width: 50, },
    bottomContainer: { width: "100%",    display: "flex", flexDirection:"column", justifyContent: "center", alignItems:"center", },
    alreadyAccount: { fontSize: 14, fontWeight: "700", width: "auto", color: "white", marginBlock: 10, textAlign: "center" },
});

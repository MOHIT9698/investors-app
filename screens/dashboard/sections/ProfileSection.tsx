import { EditIcon, MenuDotIcon } from "@/components/ui/Icons/Svg";
import { Colors } from "@/constants/Colors";
import { Profile } from "@/types/dashboard/profile";
import { useRouter } from "expo-router";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from "react-native";
const { height, width } = Dimensions.get("window"); // Get device height

interface MainProps {
    userProfile: Profile
}



export const ProfileSection = ({ userProfile }: MainProps) => {
    const router = useRouter();
    const colorScheme = useColorScheme();

    const handleEditProfile = () => {


    }

    return (
        <View style={styles?.container}>
            <View style={styles?.ProfileHeader}>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
                    {
                        userProfile?.profile_pic ? <Image source={{ uri: userProfile?.profile_pic }} style={styles.avatarView} /> :

                            <View style={styles?.avatarView}>
                                <Text style={{ color: "white", fontSize: 22, fontWeight: "600" }}>{userProfile?.name.charAt(0) ?? "U"}</Text>
                            </View>}
                    <View >
                        <Text style={{ fontSize: 14, fontWeight: "600" }} >{userProfile?.name ?? "user"}</Text>
                        <Text style={{ fontSize: 12, fontWeight: "300" }} >@{userProfile?.user_name}</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={handleEditProfile}>
                    <MenuDotIcon color={Colors[colorScheme ?? 'light'].text} />
                </TouchableOpacity>

            </View>
        </View>
    )

};

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    ProfileHeader: {
        // height: 150,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },

    avatarView: {
        backgroundColor: "#1C274C",
        height: 35,
        width: 35,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "red",
        borderRadius: 5,
        fontSize: 12

    },
})



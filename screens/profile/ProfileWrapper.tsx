import { EditIcon } from "@/components/ui/Icons/Svg";
import { useProfileStore } from "@/store/ProfileStore";
import { useRouter } from "expo-router";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
const { height, width } = Dimensions.get("window"); // Get device height


export const ProfileWrapper = () => {
    const { userProfile } = useProfileStore();
    const router = useRouter();
    const handleEditProfile = ()=>{
        router.replace("/tabs/profile/edit-profile")

    }

    return (
        <View style={styles?.container}>
            <View style={styles?.ProfileHeader}>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
                    <View style={styles?.avatarView}>
                        <Text style={{ color: "white", fontSize: 38, fontWeight: "600" }}>{userProfile?.name.charAt(0) ?? "U"}</Text>
                    </View>
                    <View >
                        <Text style={{ fontSize: 20, fontWeight: "600" }} >{userProfile?.name ?? "user"}</Text>
                        <Text style={{ fontSize: 16, fontWeight: "300" }} >@{userProfile?.user_name}</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={handleEditProfile}>
                    <EditIcon color="" />
                </TouchableOpacity>

            </View>
        </View>
    )

};

const styles = StyleSheet.create({
    container: {
        height: "100%",
        padding: 20
    },
    ProfileHeader: {
        // height: 150,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },

    avatarView: {
        backgroundColor: "#1dda56",
        height: 70,
        width: 70,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "red",
        borderRadius: 10,
        fontSize: 12

    },
})



import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { useProfileStore } from '@/store/ProfileStore';
import { useRouter } from 'expo-router';
import PostCard from '@/components/common/PostCard';
import FormTextField from '@/components/form-fields/FormTextField';
import CustomTextInput from '@/components/form-fields/CustomTextInput';

const CreatePost = () => {
    const { userProfile } = useProfileStore();
    const router = useRouter();

    const [caption, setCaption] = useState("");
    return (
        <View style={styles?.container}>

            <View style={styles?.ProfileHeader}>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
                    {userProfile?.profile_pic ? <Image source={{ uri: userProfile?.profile_pic }} style={styles.avatarView} /> :
                        <View style={styles?.avatarView}>
                            <Text style={{ color: "white", fontSize: 38, fontWeight: "600" }}>{userProfile?.name.charAt(0) ?? "U"}</Text>
                        </View>
                    }
                    <View style={{ width: "79%", height: 70}} >
                        <CustomTextInput
                            placeholder="Share info about this position"
                            value={caption}
                            onChange={setCaption}
                            keyboardType="default"
                            isMultiline={true}
                            numberOfLines={3}


                        />
                    </View>
                </View>
            </View>


            <View style={{marginTop:10}}>
                <PostCard />
            </View>
        </View>
    )
}

export default CreatePost;



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
        alignItems: "center",
        width:"100%",
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

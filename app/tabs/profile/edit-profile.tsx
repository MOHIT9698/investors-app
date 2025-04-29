import UploadPhoto from '@/components/custom/UploadProfile';
import CustomTextInput from "@/components/form-fields/CustomTextInput";

import { useProfileStore } from '@/store/ProfileStore';
import { useRouter } from 'expo-router';
import React, { useState } from 'react'
import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'

const EditProfile = () => {
  const router = useRouter();
  const { userProfile } = useProfileStore();
  const [name, setName] = useState(userProfile?.name)
  const [bio, setBio] = useState("");

  const onNameChange = (text: string) => {
    setName(text);

  }
  const onBioChange = (text: string) => {
    setBio(text);

  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles?.container}>
        <UploadPhoto defaultImage={"https://picsum.photos/id/237/200/300"} />

        <View style={{ marginTop: 10 }} >
          <Text style={{ fontSize: 20, fontWeight: "600", textAlign: "center" }} >{userProfile?.name ? userProfile?.name : "user"}</Text>
          <Text style={{ fontSize: 16, fontWeight: "300", textAlign: "center" }} >@{userProfile?.user_name ? userProfile?.user_name : "user"}</Text>
        </View>

        <View style={{ marginTop: 50 }} >


          <CustomTextInput
            placeholder="name"
            value={name}
            onChange={onNameChange}
            keyboardType="default"
            label='Name'

          />
          <CustomTextInput
            placeholder="Bio"
            value={bio}
            onChange={onBioChange}
            keyboardType="default"
            isMultiline={true}
            numberOfLines={4}
            label='Bio'

          />
        </View>

      </View>
    </TouchableWithoutFeedback>
  )
}

export default EditProfile;

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

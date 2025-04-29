import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

interface UploadPhotoProps {
  defaultImage?: string | null;
  placeholder?: string;
  handleUpload?: (img: string | any) => void;
}

const UploadPhoto = ({ defaultImage, handleUpload, placeholder }: UploadPhotoProps) => {
  const [imageUri, setImageUri] = useState<string | null>(defaultImage ? defaultImage : null);

  const pickImage = async () => {
    // Request permissions
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission denied', 'Please allow access to your media library.');
      return;
    }

    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'], // ✅ use the updated type
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
      });

      if (!result.canceled && result.assets?.length > 0) {
        setImageUri(result.assets[0].uri);
        if (handleUpload) {
          handleUpload(result.assets[0]);
        }
      }
    } catch (error) {
      console.error('Error picking image:', error);
      Alert.alert('Error', 'Something went wrong while picking the image.');
    }
  };

  return (
    <TouchableOpacity onPress={pickImage} >
      <View style={styles.container}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <View style={styles.placeholder}>
            <Text style={styles.placeholderText}>{placeholder ? placeholder : "No image selected"}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginTop: 30 },
  image: { width: 150, height: 150, borderRadius: 10 },
  placeholder: {
    width: 150, height: 150, backgroundColor: '#eee', borderWidth: 2, borderStyle: "dotted", borderColor: "#85929e",
    justifyContent: 'center', alignItems: 'center', borderRadius: 10,
  },
  placeholderText: { color: '#666' },
});


export default UploadPhoto;
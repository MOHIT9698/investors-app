import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ImageUploadComponent = () => {
  const [image, setImage] = useState<string | null>(null);

  // Request permissions and pick an image from the gallery
  const pickImage = async () => {
    // Ask for media library permissions
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission required', 'We need access to your photo library to select an image');
      return;
    }

    // Open image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaType.IMAGE, // Use MediaType for picking images
      allowsEditing: true, // Allow image editing if needed
      aspect: [4, 3], // Set aspect ratio if needed
      quality: 1, // Full quality image
    });

    if (!result.cancelled) {
      setImage(result.uri); // Store the selected image URI
    }
  };

  // Take a photo using the camera
  const takePhoto = async () => {
    // Ask for camera permissions
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission required', 'We need access to your camera to take a photo');
      return;
    }

    // Open the camera to take a photo
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true, // Allow image editing if needed
      aspect: [4, 3], // Set aspect ratio if needed
      quality: 1, // Full quality image
    });

    if (!result.cancelled) {
      setImage(result.uri); // Store the captured image URI
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upload an Image</Text>
      
      {/* Display image if selected */}
      {image ? (
        <Image source={{ uri: image }} style={styles.image} />
      ) : (
        <Text>No image selected</Text>
      )}

      {/* Buttons to pick an image or take a photo */}
      <Button title="Pick an image from gallery" onPress={pickImage} />
      <Button title="Take a photo" onPress={takePhoto} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
});

export default ImageUploadComponent;

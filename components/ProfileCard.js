import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileCard = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/profile.jpg')} style={styles.image} />
      <Text style={styles.name}>Camile Stefany</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProfileCard;

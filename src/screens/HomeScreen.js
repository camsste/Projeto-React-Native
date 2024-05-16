import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Seu Nome</Text>
      <Image
        source={{ uri: 'URL_DA_SUA_IMAGEM' }}
        style={styles.image}
      />
      <Button
        title="Sobre"
        onPress={() => navigation.navigate('About')}
      />
      <Button
        title="Contato"
        onPress={() => navigation.navigate('Contact')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
});

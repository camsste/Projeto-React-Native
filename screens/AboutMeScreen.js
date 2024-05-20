import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ProfileCard from '../components/ProfileCard';

const AboutMeScreen = () => {
  return (
    <View style={styles.container}>
      <ProfileCard />
      <Text style={styles.aboutMe}>
        Sou uma estudante dedicada do 3º período de Análise e Desenvolvimento de Sistemas no programa Embarque Digital pela Faculdade Senac Pernambuco. Tenho interesse em diversas áreas, como Back-end, Cloud, Banco de Dados e Cibersegurança. Minha personalidade é versátil, curiosa e comunicativa. Estou em busca do meu primeiro emprego na área e desejo construir meu caminho profissional naquilo que amo.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  aboutMe: {
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
  },
});

export default AboutMeScreen;

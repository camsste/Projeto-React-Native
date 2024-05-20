import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ExperienceCard from '../components/ExperienceCard';

const ExperienceScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ExperienceCard
        title="Residência Tecnológica - Primeiro Período"
        description="Projeto Embarque Digital em colaboração com o Porto Digital"
        date="Maio de 2023 - Presencial, Recife"
      />
      <ExperienceCard
        title="Residência Tecnológica - Segundo Período"
        description="Empresa Ichords"
        date="Setembro de 2023 - Presencial, Recife"
      />
      <ExperienceCard
        title="OCCA | Olinda Criativa Community Action"
        description="Posição: Júnior"
        date="Olinda, Pernambuco"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
});

export default ExperienceScreen;

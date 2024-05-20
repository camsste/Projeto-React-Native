import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import SoftSkillsCard from '../components/SoftSkillsCard';

const SkillsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <SoftSkillsCard skill="Comunicação Interpessoal" />
      <SoftSkillsCard skill="Empatia" />
      <SoftSkillsCard skill="Resolução de Conflitos" />
      <SoftSkillsCard skill="Negociação" />
      <SoftSkillsCard skill="Diplomacia" />
      <SoftSkillsCard skill="Gerenciamento Emocional" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
});

export default SkillsScreen;

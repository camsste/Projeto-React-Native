import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import HardSkillsCard from '../components/HardSkillsCard';

const HardSkillsScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <HardSkillsCard skill="HTML" />
      <HardSkillsCard skill="CSS/CSS3" />
      <HardSkillsCard skill="Language C" />
      <HardSkillsCard skill="Python" />
      <HardSkillsCard skill="JavaScript" />
      <HardSkillsCard skill="MySQL" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
});

export default HardSkillsScreen;

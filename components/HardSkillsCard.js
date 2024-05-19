import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HardSkillsCard = ({ skill }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.skill}>{skill}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
  },
  skill: {
    fontSize: 16,
  },
});

export default HardSkillsCard;

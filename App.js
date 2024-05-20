import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AboutMeScreen from './screens/AboutMeScreen';
import ExperienceScreen from './screens/ExperienceScreen';
import HardSkillsScreen from './screens/HardSkillsScreen';
import SkillsScreen from './screens/SkillsScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AboutMe"
          component={AboutMeScreen}
          options={{ title: 'Sobre Mim' }}
        />
        <Stack.Screen
          name="Experience"
          component={ExperienceScreen}
          options={{ title: 'Experiência' }}
        />
        <Stack.Screen
          name="HardSkills"
          component={HardSkillsScreen}
          options={{ title: 'Hard Skills' }}
        />
        <Stack.Screen
          name="Skills"
          component={SkillsScreen}
          options={{ title: 'Soft Skills' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ;
// src/App.js
import React from 'react';
import Navigation from './Navigation';

export default function App() {
  return <Navigation />;
}

import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../../config';
import { useProfileStore } from '../../store/profile-store';

export const HomeScreen = () => {
  const { name, email } = useProfileStore();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HomeScreen</Text>
      <Text>{name}</Text>
      <Text>{email}</Text>
    </View>
  );
};

import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../../config';
import { useProfileStore } from '../../store/profile-store';
import { useCounterStore } from '../../store/counter-store';

export const HomeScreen = () => {
  const { name, email } = useProfileStore();
  const { count } = useCounterStore();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HomeScreen</Text>
      <Text>{name}</Text>
      <Text>{email}</Text>
      <Text>Count: {count}</Text>
    </View>
  );
};

import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from '../../../config';
import { useCounterStore } from '../../store/counter-store';

export const SettingsScreen = () => {
  const { count, incrementBy } = useCounterStore();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {count}</Text>

      <Pressable
        style={styles.primaryButton}
        onPress={() => incrementBy(1)}>
        <Text>Incrementar</Text>
      </Pressable>

      <Pressable
        style={styles.primaryButton}
        onPress={() => incrementBy(-1)}>
        <Text>Decrementar</Text>
      </Pressable>
    </View>
  );
};
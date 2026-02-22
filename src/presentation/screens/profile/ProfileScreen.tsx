
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { styles } from '../../../config';
import { useProfileStore } from '../../store/profile-store';

export const ProfileScreen = () => {
  const { name, email, changeProfile } = useProfileStore();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ProfileScreen</Text>
      <Text>{name}</Text>
      <Text>{email}</Text>

      <Pressable
        style={styles.primaryButton}
        onPress={() => changeProfile('Fernando Herrera', email)}>
        <Text>Cambiar nombre</Text>
      </Pressable>

      <Pressable
        style={styles.primaryButton}
        onPress={() => changeProfile(name, 'fernando.herrera@google.com')}>
        <Text>Cambiar email</Text>
      </Pressable>

      <Pressable
        style={styles.primaryButton}
        onPress={() => changeProfile('John Doe', 'john.doe@google.com')}>
        <Text>Regresar a John Doe</Text>
      </Pressable>
    </View>
  );
};
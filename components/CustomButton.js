import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function CustomButton({ title, onPress, type = 'primary' }) {
  const isPrimary = type === 'primary';
  return (
    <TouchableOpacity 
      style={[styles.button, isPrimary ? styles.primaryBtn : styles.secondaryBtn]} 
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={[styles.text, isPrimary ? styles.primaryText : styles.secondaryText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 6,
  },
  primaryBtn: { backgroundColor: '#0D6EFD' },
  secondaryBtn: { backgroundColor: '#E9ECEF' },
  text: { fontSize: 16, fontWeight: '600' },
  primaryText: { color: '#FFFFFF' },
  secondaryText: { color: '#495057' },
});
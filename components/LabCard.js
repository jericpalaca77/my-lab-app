import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View, Platform } from 'react-native';
import { useTheme } from '../context/ThemeContext';

export default function LabCard({ title, description, onPress }) {
  const { colors } = useTheme();

  return (
    <TouchableOpacity 
      style={[styles.card, { backgroundColor: colors.cardBackground, borderColor: colors.border }]} 
      onPress={onPress}
      activeOpacity={0.9}
    >
      <View>
        <Text style={[styles.title, { color: colors.text }]}>{title}</Text>
        <Text style={[styles.desc, { color: colors.subText }]}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: Platform.OS === 'ios' ? 0.05 : 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 4 },
  desc: { fontSize: 14 },
});
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import CustomButton from '../components/CustomButton';

export default function HomeScreen({ navigation }) {
  const { colors, userName, isDarkMode } = useTheme();

  const activities = [
    { id: '1', title: 'Activity 1', desc: 'Components & Props', icon: '🧩' },
    { id: '2', title: 'Activity 2', desc: 'Navigation', icon: '🧭' },
    { id: '3', title: 'Activity 3', desc: 'Geofencing', icon: '📍' },
    { id: '4', title: 'Activity 4', desc: 'Local Mesh Chat', icon: '💬' },
    { id: '5', title: 'Activity 5', desc: 'Firebase', icon: '🔥' },
    { id: '6', title: 'Final Project', desc: 'Coming soon', icon: '🚀' },
  ];

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]} contentContainerStyle={styles.contentContainer}>
      {/* Header with Gear Settings Icon */}
      <View style={styles.topBar}>
        <View>
          <Text style={[styles.helloText, { color: colors.text }]}>Hello, {userName}! 👋</Text>
          <Text style={[styles.themeStatus, { color: colors.subText }]}>
            Current theme: {isDarkMode ? 'Dark' : 'Light'}
          </Text>
        </View>
        <TouchableOpacity 
          style={[styles.gearBtn, { backgroundColor: colors.primary }]}
          onPress={() => navigation.navigate('Settings')}
        >
          <Text style={styles.gearIcon}>⚙️</Text>
        </TouchableOpacity>
      </View>

      {/* Grid Container for Cards */}
      <View style={styles.gridContainer}>
        {activities.map((item) => (
          <TouchableOpacity 
            key={item.id}
            style={[styles.card, { backgroundColor: colors.cardBackground, borderColor: colors.border }]}
            onPress={() => alert(`Opening ${item.title}...`)}
            activeOpacity={0.8}
          >
            <View style={styles.iconBox}>
              <Text style={styles.emojiIcon}>{item.icon}</Text>
            </View>
            <Text style={[styles.cardTitle, { color: colors.text }]}>{item.title}</Text>
            <Text style={[styles.cardDesc, { color: colors.subText }]}>{item.desc}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Bottom Settings Button */}
      <View style={styles.bottomButtonContainer}>
        <CustomButton 
          title="⚙️ Settings" 
          onPress={() => navigation.navigate('Settings')} 
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  contentContainer: { padding: 20, paddingBottom: 40 },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    marginTop: 10,
  },
  helloText: { fontSize: 24, fontWeight: 'bold' },
  themeStatus: { fontSize: 14, marginTop: 4 },
  gearBtn: {
    width: 45,
    height: 45,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gearIcon: { fontSize: 22 },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  iconBox: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#EEF2FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  emojiIcon: { fontSize: 22 },
  cardTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 2 },
  cardDesc: { fontSize: 13 },
  bottomButtonContainer: {
    marginTop: 10,
  },
});
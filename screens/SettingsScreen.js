import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch, TextInput } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import CustomButton from '../components/CustomButton';

export default function SettingsScreen() {
  const { colors, isDarkMode, toggleTheme, userName, setUserName } = useTheme();
  const [tempName, setTempName] = useState(userName);

  const handleSave = () => {
    setUserName(tempName);
    alert('Profile updated successfully!');
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={[styles.settingRow, { borderColor: colors.border }]}>
        <View>
          <Text style={[styles.settingTitle, { color: colors.text }]}>Dark Mode</Text>
          <Text style={[styles.settingDesc, { color: colors.subText }]}>Switch between light and dark theme</Text>
        </View>
        <Switch 
          value={isDarkMode} 
          onValueChange={toggleTheme}
          trackColor={{ false: '#767577', true: '#0D6EFD' }}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={[styles.settingTitle, { color: colors.text, marginBottom: 8 }]}>Update Profile Name</Text>
        <TextInput 
          style={[styles.input, { backgroundColor: colors.cardBackground, color: colors.text, borderColor: colors.border }]}
          value={tempName}
          onChangeText={setTempName}
          placeholder="Enter your name"
          placeholderTextColor={colors.subText}
        />
        <CustomButton title="Save Changes" onPress={handleSave} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  settingTitle: { fontSize: 16, fontWeight: '600' },
  settingDesc: { fontSize: 13 },
  inputContainer: { marginTop: 10 },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 12,
  },
});
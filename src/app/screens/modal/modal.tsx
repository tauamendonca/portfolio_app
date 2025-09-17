import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { Text, View } from '../../../components/Themed';
import { styles } from './styles';


import ExtraScreenInfo from '../../../components/ExtraScreenInfo';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Extra</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <ExtraScreenInfo path="app/modal.tsx" />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}
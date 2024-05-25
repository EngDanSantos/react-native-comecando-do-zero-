import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,233,229,0) 4%, rgba(193,204,216,1) 96%)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

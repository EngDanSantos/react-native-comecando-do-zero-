import { StatusBar,StyleSheet, Text, SafeAreaView } from 'react-native';
import Cesta from "./src/telas/cesta"
import Cat from './src/telas/cats';

export default function App() {
  return (
    
      <SafeAreaView >
      <Cesta/>
      <Cat/>    
    </SafeAreaView>
  );
}

import { StyleSheet, View } from 'react-native';
import { Insert } from './banco/Insert';
import { Remove } from './banco/Remove';
import { AllContacts } from './banco/AllContacts';
import { Alterar } from './banco/Alterar';

export default function App() {

  return (
    <View style={styles.container}>
      <Insert/>
      <Remove/>
      
      <Alterar/>
      <AllContacts/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
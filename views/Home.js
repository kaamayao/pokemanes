import { Button, View, Text } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen :)</Text>
      <Button
        title="Go to Select Pokémon"
        onPress={() => navigation.navigate('SelectPokemon')}
      />
    </View>
  );
}

export {HomeScreen}
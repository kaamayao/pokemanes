import { Button, View, Text } from 'react-native';

function SelectPokemon({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Main Game"
        onPress={() => navigation.navigate('MainGame')}
      />
    </View>
  );
}

export {SelectPokemon}
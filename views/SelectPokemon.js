import { Button, View, Text } from 'react-native';

const fetchPokeData = async () => {

}

const getMoviesFromApiAsync = async () => {
  try {
    const response = await fetch(
      'https://pokeapi.co/api/v2/pokemon?limit=151',
    );
    const {results} = await response.json();
    const pokemons = results.map((result,id)=> {
      return {
        id: id+1,
        name: result.name,
        frontSpriteURL: '', 
      }
    })
    console.log('pokemans',pokemons)
    return pokemons;
  } catch (error) {
    console.error(error);
  }
};

function SelectPokemon({navigation}) {
  getMoviesFromApiAsync()
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Main Game"
        onPress={() => navigation.navigate('MainGame')}
      />
    </View>
  );
}

export {SelectPokemon}
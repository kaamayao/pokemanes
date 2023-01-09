import { Button, Pressable, View, ScrollView, Text, Image } from 'react-native';
import React, { useState, useEffect} from 'react';

const API_URL = 'https://pokeapi.co/api/v2/pokemon'
const LIMIT_POKEMON = 20

async function getPokemonData(result){
  const response = await fetch(result.url);
  const json = await response.json()
  const pokemon = {
    name: result.name,
    frontSpriteURL: json.sprites.front_default, 
  }
  return pokemon
}

const getPokemonFromApiAsync = async () => {
  try {
    const response = await fetch(
      `${API_URL}?limit=${LIMIT_POKEMON}`,
    );
    const {results} = await response.json();
    const pokemons = await Promise.all(results.map(async (result) => { return await getPokemonData(result) }))
    return pokemons;
  } catch (error) {
    console.error(error);
  }
};

function SelectPokemon({navigation}) {
  const [pokemons, setPokemons] = useState([]); 
  
  useEffect( ()=>{
    (async() => {const pokemonData = await getPokemonFromApiAsync()
    setPokemons(pokemonData)} ) ();
  },[]);

  return (
    <ScrollView style={{ display: 'flex'}}>
      {pokemons.length === 0 ? <></> : pokemons.map(pokemon => {
        return <Pressable style={{borderColor:'red'}}>
          <Text>{pokemon.name}</Text>
          <Image style={{height: 100, width: 100}} source={{uri: pokemon.frontSpriteURL}}/>
        </Pressable>
      })}
      <Button
        title="Go to Main Game"
        onPress={() => navigation.navigate('MainGame')}
      />
    </ScrollView>
  );
}

export {SelectPokemon}
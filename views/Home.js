import { Pressable , View, Text, Image} from 'react-native';
import { styles } from './HomeViewStyle'


function HomeScreen({ navigation }) {
  return (
    <View style={styles.mainView}>
      <Image style={styles.image} 
        source={{uri: 'https://www.pngkit.com/png/detail/433-4335705_pokemon-logo-pokmon-red-version-reproduction-nintendo-game.png'}}/>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('SelectPokemon')}
      >
         <Text style={styles.buttonText}>
            Start Game
          </Text>
      </Pressable>
    </View>
  );
}

export {HomeScreen}
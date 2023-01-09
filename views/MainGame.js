import { Pressable, View, Text } from 'react-native';
import { styles } from './MainGameViewStyle';

function MainGame({navigation}) {
  return (
    <View style={styles.mainView}>

    <Pressable
      style={styles.button}
      onPress={()}
    >
       <Text style={styles.buttonText}>
          Start Game
        </Text>
    </Pressable>
  </View>
  );
}

export {MainGame}
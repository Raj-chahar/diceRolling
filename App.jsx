import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import DiceOne from './assests/One.png';
import DiceTwo from './assests/Two.png';
import DiceThree from './assests/Three.png';
import DiceFour from './assests/Four.png';
import DiceFive from './assests/Five.png';
import DiceSix from './assests/Six.png';
const Dice = ({imageUrl}) => {
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  );
};
function App() {
  const [diceImage, setDiceImage] = useState(DiceSix);
  const rollDice = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;
      default:
        setDiceImage(DiceSix);
        break;
    }
  };
  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage} />
      <TouchableOpacity onPress={rollDice} >
        <Text style={styles.rollDiceBtnText}>Roll the dice</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
export default App;

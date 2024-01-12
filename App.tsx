import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import DiceOne from './assets/One.png'
import DiceTwo from './assets/Two.png'
import DiceThree from './assets/Three.png'
import DiceFour from './assets/Four.png'
import DiceFive from './assets/Five.png'
import DiceSix from './assets/Six.png'

type DiceProps = PropsWithChildren<{
  imageUrl:ImageSourcePropType
}>

const Dice=({imageUrl}:DiceProps):JSX.Element=>{
  return(
    <View >
      <Image style={styles.diceImg} source={imageUrl} />
    </View>
  )
}

function App(): React.JSX.Element {

  const [diceImage,setDiceImage]=useState<ImageSourcePropType>(DiceOne)
  const rollDiceOnTap=()=>{
    let randomNUmber=Math.floor(Math.random() * 6)+1;
    switch (randomNUmber) {
      case 1:
        setDiceImage(DiceOne)
        break;
        case 2:
        setDiceImage(DiceTwo)
        break;
        case 3:
        setDiceImage(DiceThree)
        break;
        case 4:
        setDiceImage(DiceFour)
        break;
        case 5:
        setDiceImage(DiceFive)
        break;
        case 6:
        setDiceImage(DiceSix)
        break;
      default:
        setDiceImage(DiceOne)
        break;
    }
  }

  return (
    <View style={styles.Container}>
      <Dice imageUrl={diceImage}/>
      <Pressable onPress={rollDiceOnTap}>
        <Text style={styles.rollDiceBtnText}>Roll The Dice</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff2f2'
  },
  DiceContainer: {
    margin: 12,
  },
  diceImg: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#8ea7e9',
    fontWeight: '700',
    textTransform: 'uppercase'
  },
});

export default App;

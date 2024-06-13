import {View, Image, Text, StyleSheet, Dimensions, useWindowDimensions} from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../components/color';
import PrimaryButton from '../components/ui/PrimaryButton';

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
  const {width, height} = useWindowDimensions();

  let imageSize = 300;
  if (width < 380 ){
    imageSize = 150;
  }

  if (height < 380){
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height : imageSize,
    borderRadius : imageSize/2
  }

  return (
    <View style={[styles.rootContainer, imageStyle]}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../asset/img/success.png')}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.hightlight}>{roundsNumber}</Text> rounds to guess the number{' '}
        <Text style={styles.hightlight}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
}

const deviceWidth = Dimensions.get('window').width;


const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding:  24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    // borderRadius: deviceWidth < 380 ? 75 : 150,
    // height: deviceWidth < 380 ? 100 : 300,
    // width: deviceWidth < 380 ? 100 : 300,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: 'hidden',
    margin: deviceWidth < 380 ? 18 : 36,
  },
  image: {
    width:  '100%',
    height:  '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize:  24,
    textAlign: 'center',
    marginVertical: 24
  },
  hightlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
  },
});

export default GameOverScreen;

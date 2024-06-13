import Colors from '../color';

const {View, StyleSheet, Text, Dimensions} = require('react-native');

function NumberContainer({children}) {
    console.log("Ini dari Children : ",children)
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.accent500,
        padding: deviceWidth < 380 ? 12 : 24 ,
        margin: deviceWidth < 380 ? 12 : 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText:{
        color: 'white',
        fontSize: deviceWidth < 380 ? 28 : 36 ,
        fontWeight: 'bold'
    }
})


export default NumberContainer;
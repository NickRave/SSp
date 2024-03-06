import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
   <TouchableOpacity
        style={styles.button}
        onPress={() => console.log("Кнопка нажата")}
      >
        <Text style={styles.buttonText}>Новости</Text>
      </TouchableOpacity>
      <Image style={styles.logo} source={require('../assets/041.jpg')} />
      <Text style={styles.paragraph}>
        Умиротворение: где это и как туда попасть
      </Text>
      <Text style={styles.text}>
      Умиротворение - это индивидуально для каждого и оно везде. Умиротворение там, где ты его найдешь.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
  },
  paragraph: {
    marginBottom: 25,
    marginTop: 25,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  logo: {
    alignSelf: 'flex-start',
    height: 200,
    width: 280,
  },
  text: {
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 35,
  },
  button: {
    paddingTop: 40,
    marginBottom: 40,
    alignSelf: 'flex-start',
    paddingBottom: 15,
    
  },
  buttonText: {
    fontSize: 15,
    color: 'blue',
  },
});

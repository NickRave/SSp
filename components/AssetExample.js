import { Text, View, StyleSheet, Image, Button, Alert} from 'react-native';
import React, { useState } from 'react';
const AssetExample = (props) => {

const ButtonAlert = () => {
  Alert.alert('Оповещение', 'Товар добавлен в корзину', [
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);
}

  const [message, setMessage] = useState('');

  const showMessage = () => {
    setMessage('Товар добавлен в корзину');
    ButtonAlert();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        {props.name}
      </Text>
      <Image style={styles.logo} source={props.image} />
      <Text style={styles.description}>
        {props.description}
      </Text>
      <Text style={styles.message}>{message}</Text>
      <Button style={styles.but} title="В корзину" onPress={showMessage} />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: 24,
  },
  description: {
    width: '100%',
    margin: 20,
    textAlign: 'center',
  },
  but: {
    width: '300%',
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  },
  message: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default AssetExample
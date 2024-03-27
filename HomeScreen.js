import React from 'react';
import { View, Button } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './styles';

const HomeScreen = ({ navigation }) => (
    <View style={styles.homeContainer}>
      <Animatable.View animation="pulse" easing="ease-out" iterationCount="infinite">
        <Button
          title="Go to Photos"
          onPress={() => navigation.navigate('Photos')}
          color="#841584"
        />
      </Animatable.View>
    </View>
  );
export default HomeScreen;
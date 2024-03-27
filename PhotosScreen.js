import React from 'react';
import { Image } from 'react-native';
import Swiper from 'react-native-swiper';
import * as Animatable from 'react-native-animatable';
import styles from './styles';

const PhotosScreen = () => (
    <Swiper>
      <Animatable.Image animation="rotate" duration={5000}  iterationCount={1} source={require("./start.png")} style={styles.image}/>
      <Animatable.Image animation="fadeIn" duration={4000} iterationCount="infinite" direction="alternate" source={require("./reg.png")} style={styles.image}/>
      <Animatable.Image animation="pulse" easing="ease-out" iterationCount="infinite" source={require("./ger.jpg")} style={styles.image}/>
    </Swiper>
  );
export default PhotosScreen;
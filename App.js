import React from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const moviesData = [
  { id: '1', title: 'The Shawshank Redemption', genre: 'Drama', rating: 9.3 },
  { id: '2', title: 'The Godfather', genre: 'Crime', rating: 9.2 },
  { id: '3', title: 'The Dark Knight', genre: 'Action', rating: 9.0 },
  { id: '4', title: 'Pulp Fiction', genre: 'Crime', rating: 8.9 },
  { id: '5', title: 'Inception', genre: 'Sci-Fi', rating: 8.8 },
  { id: '6', title: 'Forrest Gump', genre: 'Drama', rating: 8.8 },
];

const moviesData2 = [
  { id: '1', title: 'Fight Club', genre: 'Drama', rating: 8.8 },
  {
    id: '2',
    title: 'The Lord of the Rings: The Return of the King',
    genre: 'Fantasy',
    rating: 8.9,
  },
  { id: '3', title: 'The Matrix', genre: 'Sci-Fi', rating: 8.7 },
  { id: '4', title: 'Goodfellas', genre: 'Crime', rating: 8.7 },
  { id: '5', title: 'Interstellar', genre: 'Sci-Fi', rating: 8.6 },
  { id: '6', title: 'Schindlers List', genre: 'Drama', rating: 8.9 },
];

const moviesData3 = [
  {
    id: '1',
    title: 'The Silence of the Lambs',
    genre: 'Thriller',
    rating: 8.6,
  },
  { id: '2', title: 'Saving Private Ryan', genre: 'War', rating: 8.6 },
  { id: '3', title: 'The Green Mile', genre: 'Drama', rating: 8.6 },
  {
    id: '4',
    title: 'Terminator 2: Judgment Day',
    genre: 'Action',
    rating: 8.5,
  },
  { id: '5', title: 'The Prestige', genre: 'Drama', rating: 8.5 },
  { id: '6', title: 'The Departed', genre: 'Crime', rating: 8.5 },
];

const FirstScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Это первая страница фильмов</Text>
      <FlatList
        data={moviesData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text
            style={
              styles.contactText
            }>{`${item.title} ${item.genre} - ${item.rating}`}</Text>
        )}
      />
      <Button title="Далее" onPress={() => navigation.navigate('Second')} />
    </View>
  );
};

const SecondScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Это вторая страница фильмов</Text>
      <FlatList
        data={moviesData2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text
            style={
              styles.contactText
            }>{`${item.title} ${item.genre} - ${item.rating}`}</Text>
        )}
      />
      <Button title="Далее" onPress={() => navigation.navigate('Third')} />
      <Button title="Назад" onPress={() => navigation.goBack()} />
    </View>
  );
};

const ThirdScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Это третья страница фильмов</Text>
      <FlatList
        data={moviesData3}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text
            style={
              styles.contactText
            }>{`${item.title} ${item.genre} - ${item.rating}`}</Text>
        )}
      />
      <Button title="Назад" onPress={() => navigation.goBack()} />
    </View>
  );
};

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="First" component={FirstScreen} />
        <Stack.Screen name="Second" component={SecondScreen} />
        <Stack.Screen name="Third" component={ThirdScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  contactText: {
    fontSize: 16,
    marginBottom: 8,
  },
});

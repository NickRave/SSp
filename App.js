import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph1}>
        Витать в облаках полезно для ментального здоровья
      </Text>
      <Text style={styles.paragraph2}>
        Мечтателей, которые иногда отвлекаются от реальности, чтобы погрузиться в свой мир, часто осуждают. Но в целом, если это не вредит вашей деятельности, то это очень даже полезно. 
      </Text>
      <Text style={styles.paragraph3}>
        “Ты снова витаешь в облаках”, — часто слышат те, кто умеет периодически отключаться от реальности. Оказывается, это очень важный талант, который полезен для нашего ментального здоровья. Это утверждают ученые из Гарвардской медицинской школы, которые опубликовали результаты своего исследования в журнале Nature. 
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  paragraph1: {
    flex: 0.15,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph2: {
    flex: 0.35,
    fontSize: 14,
    paddingTop: 40,
    textAlign: 'center',
    backgroundColor: '#ecf0f1',
  },
  paragraph3: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#aba8a4',
    fontSize: 12,
    textAlign: 'center',
  },
});

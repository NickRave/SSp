import { StyleSheet, SafeAreaView, ScrollView, View } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <ScrollView style={styles.container}>
        <Card>
          <AssetExample
            name="Microsoft Surface Book 3"
            image={require('./assets/msb3.webp')}
            description="Тип: ноутбук.

Процессор: линейка процессора Intel Core i7, модель Intel Core i7 1065G7, частота 1300 МГц (базовая), 4 ядра, ядро Ice Lake.

Память: оперативная память 16 ГБ, тип LPDDR4, частота 3733 МГц.

Экран: диагональ 15 дюймов, разрешение 3240x2160, сенсорный.

Накопители: общий объем SSD 256 ГБ.

Видеоадаптер: видеокарта NVIDIA GeForce GTX 1660 Ti MAX-Q, тип дискретная и встроенная, объем видеопамяти 6 ГБ, тип видеопамяти GDDR6.

Связь: беспроводные интерфейсы Bluetooth и Wi-Fi, стандарт Wi-Fi 802.11ax, версия Bluetooth 5.0.

Слоты и разъемы: оптический привод отсутствует, интерфейсы USB 3.1 Type A x 2, USB 3.1 Type-C, микрофон/наушники Combo, поддержка карт памяти SD.

Ввод данных: подсветка клавиатуры есть, устройство позиционирования Touchpad.

Операционная система: Windows 10 Home.

Питание: время автономной работы до 17.5 часов.

Корпус: материал металлический, размеры 251 x 343 x 23 мм (ДхШхВ), вес 1.91 кг."
          />
        </Card>
        <View style={styles.line}></View>
        <Card>
          <AssetExample
            name="Microsoft Surface Book 2"
            image={require('./assets/Microsoft-SurfaceBook-2.jpg')}
            description="Процессор: 13,5: Intel Ядро i5-7300U, 14 нм, 2 ядра; Intel Core i7-8650U, 14 нм, 2 ядра. 15: Intel Core i7-8650U, 14 нм, 2 ядра.

Объем оперативной памяти: 13,5: 8 или 16 ГБ ОЗУ LPDDR3. 15: 16 ГБ ОЗУ LPDDR3.

Объем встроенной памяти SSD: 128 ГБ, 256 ГБ, 512 ГБ, 1 ТБ.

Слот для карт SD: есть.

Дисплей: 13,5 (34 см), 3000 × 2000 (267 PPI) ЖКД; 15 (38 см), 3240 × 2160 (260 PPI) ЖК.

Графика: 13,5: Intel HD Graphics 620 или NVIDIA GeForce GTX 1050 с 2 ГБ ОЗУ GDDR5. 15: NVIDIA GeForce GTX 1060 с 6 ГБ ОЗУ GDDR5.

Операционная система: Windows 10 Pro.

Аккумулятор: 65 Вт/ч, 23 Вт/ч.

Звук: стереодинамики, два микрофона.

Разъемы и порты: разъем для гарнитуры, USB Type А, USB Type-C, Surface Connect.

Фронтальная камера: 5,0 МП.

Основная камера: 8,0 МП, запись видео 1080p, HD.

Размеры: 13,5: 31241,3-2,3 см. 15: 3425,11,44-2,29 см.

Вес: 1,5 кг, 1,6 кг, 1,9 кг; планшет - 0,7 кг."
          />
        </Card>
        <View style={styles.line}></View>
        <Card>
          <AssetExample
            name="Microsoft Surface Book 1"
            image={require('./assets/SurfaceBook1.jpg')}
            description="

Процессор: Intel Core 6th Gen i5 или i7.

Графика: Intel HD 520 или NVIDIA GeForce.

Память: 8 Гб или 16 Гб.

Накопитель: SSD до 128 Гб, 256 Гб, 512 Гб или 1 Тб.

Корпус: сплав алюминия, 312.3 х 232.1 х 13.0/22.8 мм, 1516 грамм с подключенной клавиатурой.

Порты: два полноразмерных USB 3.0, SD, 3.5 мм аудиовыход, mini DisplayPort, SurfaceConnect.

Сенсоры: датчик освещения, акселерометр, гироскоп, магнитометр.

Соединения: WiFi 802.11 a/b/g/n/ac, Bluetooth 4.0.

Экран: 13.5 PixelSense, 3000x2000, 267 PPI 3:2, поддержка до 10 одновременных касаний.

Камера: 5 Мп фронтальная HD-камера, 8 Мп задняя AF-камера с возможностью записи FullHD, стереомикрофоны на передней и задней парнели."
          />
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
  line: {
    height: 10,
  },
});
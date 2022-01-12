import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Image } from '@td-design/react-native';
import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';

const items = [
  {
    id: 'homelander',
    image: require('../../../assets/homelander.jpg'),
  },
  {
    id: 'stormfront',
    image: require('../../../assets/stormfront.jpg'),
  },
  {
    id: 'atrain',
    image: require('../../../assets/atrain.jpg'),
  },
  {
    id: 'blacknoir',
    image: require('../../../assets/blacknoir.png'),
  },
  {
    id: 'queenmaeve',
    image: require('../../../assets/queenmaeve.jpg'),
  },
  {
    id: 'thedeep',
    image: require('../../../assets/thedeep.jpeg'),
  },
  {
    id: 'starlight',
    image: require('../../../assets/starlight.jpg'),
  },
];

export default function ListScreen() {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const renderItem = ({ item }: any) => {
    return (
      <TouchableOpacity activeOpacity={1} onPress={() => navigation.push('Detail', { item })}>
        <SharedElement id={`item.${item.id}.photo`}>
          <Image source={item.image} style={styles.image} />
        </SharedElement>
      </TouchableOpacity>
    );
  };

  return <FlatList style={styles.container} data={items} renderItem={renderItem} keyExtractor={item => item.id} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
  },
});

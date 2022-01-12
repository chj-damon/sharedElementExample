import { useNavigation, useRoute } from '@react-navigation/native';
import { Image } from '@td-design/react-native';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { SharedElement } from 'react-navigation-shared-element';

export default function DetailScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { item } = route.params as any;
  return (
    <TouchableOpacity activeOpacity={1} onPress={navigation.goBack}>
      <SharedElement id={`item.${item.id}.photo`}>
        <Image source={item.image} style={styles.image} />
      </SharedElement>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

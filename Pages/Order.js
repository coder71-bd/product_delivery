import { Button, View } from 'react-native';

const Order = ({ navigation }) => {
  return (
    <View>
      <Button onPress={() => navigation.navigate('Home')} title="Go BAck" />
    </View>
  );
};

export default Order;

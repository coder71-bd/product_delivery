import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import boxLogo from '../assets/box.png';
import dIcon from '../assets/main_logo.png';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* logo */}
      <Image source={dIcon} width={10} height={10} />

      <View style={styles.box}>
        {/* image */}
        <View style={styles.boxLogo}>
          <Image source={boxLogo} width={20} height={20} />
        </View>

        <View style={{ flex: 3 }}>
          <Text>Non-Contact Deliveries</Text>
          <Text>
            When placing an order, select the option “Contactless delivery” and
            the courier will leave your order at the door.
          </Text>

          <TouchableHighlight
            onPress={() => navigation.navigate('Order')}
            style={styles.orderBtn}
            underlayColor="red"
          >
            <Text style={{ textAlign: 'center', color: '#fff', opacity: 1 }}>
              Order Now
            </Text>
          </TouchableHighlight>

          <Pressable onPress={() => alert('hello world')}>
            <Text style={{ textTransform: 'capitalize', textAlign: 'center' }}>
              dismiss
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A259FF',
  },
  logo: {
    marginTop: 63,
    marginLeft: 20,
  },

  box: {
    flex: 1,
    backgroundColor: '#F6F5F5',
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 64,
    paddingBottom: 54,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },

  boxLogo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  orderBtn: {
    backgroundColor: '#0BCE83',
    paddingHorizontal: 56,
    paddingVertical: 15,
    borderRadius: 8,
  },
});

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from './index';
import DetailsScreen from '../detail/index';

const CartStackContainer = createNativeStackNavigator();

function HomeStackScreenContainer() {
  return (
    <CartStackContainer.Navigator>
      <CartStackContainer.Screen name="Cart" component={CartScreen} />
      <CartStackContainer.Screen name="Details" component={DetailsScreen} />
    </CartStackContainer.Navigator>
  );
}

export default HomeStackScreenContainer;
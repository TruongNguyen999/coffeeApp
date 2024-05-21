import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './index';
import DetailsScreen from '../detail/index';

const HomeStackContainer = createNativeStackNavigator();

function HomeStackScreenContainer() {
  return (
    <HomeStackContainer.Navigator>
      <HomeStackContainer.Screen name="Home" component={HomeScreen} />
      <HomeStackContainer.Screen name="Details" component={DetailsScreen} />
    </HomeStackContainer.Navigator>
  );
}

export default HomeStackScreenContainer;
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Login from "./screens/login/index";
import { useEffect } from "react";
import { connect } from "react-redux";
import HomeStackScreenContainer from "./screens/home/HomeContainer";
import CartStackScreenContainer from "./screens/cart/CartContainer";

import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

import { USER_LOGGED } from "./contants/index";

function AppContainer({ userStore, userNoti }) {
  console.log("Truong log userStore", userStore);
  console.log("Truong log userNoti", userNoti);

  useEffect(() => {}, []);

  return (
    <NavigationContainer>
      {userNoti === USER_LOGGED ? (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="HomeStack" component={HomeStackScreenContainer} />
          <Tab.Screen name="CartStack" component={CartStackScreenContainer} />
        </Tab.Navigator>
      ) : (
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: { display: "none" },
          }}
        >
          <Tab.Screen
            name="Login"
            component={Login}
            options={{
              tabBarButton: () => null,
              tabBarVisible: false,
            }}
          />
        </Tab.Navigator>
      )}

      <StatusBar />
    </NavigationContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    userStore: state.user,
    userNoti: state.noti,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);

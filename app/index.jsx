import { StatusBar } from "expo-status-bar";
import { View, Image, Text, TouchableOpacity } from "react-native";
import Login from "./screens/login/index";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import HomeStackScreenContainer from "./screens/home/HomeContainer";
import CartStackScreenContainer from "./screens/cart/CartContainer";
const HomeIcon = require("../assets/coffee/home.png");
import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();

import { USER_LOGGED } from "./contants/index";
import CGradientText from "./components/CGradientText";

function AppContainer({ userStore, userNoti }) {
  // console.log("Truong log userStore", userStore);
  // console.log("Truong log userNoti", userNoti);

  useEffect(() => {}, []);

  // console.log('Truong log iconWidth', iconWidth);

  return (
    <NavigationContainer>
      {userNoti !== USER_LOGGED ? (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen
            name="Home"
            component={HomeStackScreenContainer}
            options={{
              title: "Home",
              tabBarStyle: {
                height: 70,
              },
              tabBarButton: (props) => (
                <TouchableOpacity
                  {...props}
                  style={
                    props.accessibilityState.selected
                      ? [
                          props.style,
                          {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          },
                        ]
                      : props.style
                  }
                >
                  <View
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {/* {focused && <View style={{ height: 3, backgroundColor: 'blue', top: -3, width: iconWidth}} />} */}
                    <Image
                      source={HomeIcon}
                    />
                    <CGradientText
                      text="Home"
                      style={{ fontSize: 16, fontWeight: 600 }}
                      styleMasView={{width: 43}}
                      gradientColors={['#cb8a58', '#562b1a']}
                      gradientStart={{ x: 0, y: 0 }}
                      gradientEnd={{ x: 1, y: 0 }}
                    />
                  </View>
                </TouchableOpacity>
              ),
            }}
          />
          <Tab.Screen name="Favourite" component={CartStackScreenContainer} />
          <Tab.Screen name="Cart" component={CartStackScreenContainer} />
          <Tab.Screen name="Profile" component={CartStackScreenContainer} />
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

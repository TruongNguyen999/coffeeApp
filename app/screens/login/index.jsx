// gif,image
const Gif = require('../../../assets/coffee/loading.gif');
const backgroundLogin = require('../../../assets/coffee/bglogin.png');

// react
import { useEffect, useState } from "react";
import { Animated, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// const
import {
  windowWidth
} from '../../utlis/contans';

// styled
import { 
    ViewLoading, 
    GifLoading,
    ViewContainer,
    ViewLogin,
    ContentLogin,
    TitleLogin,
    SubTitleLogin,
    FormLogin,
    FormTitle,
    FormInput,
    LoginBtn,
    TextLoginBtn,
} from "./styled";

export default Login = () => {

  const [marginRight, setRight] = useState(new Animated.Value(0));
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    // Animated.timing(marginRight, {
    //   toValue: windowWidth, 
    //   duration: 1000, 
    //   useNativeDriver: false, 
    // }).start();
  }, [isLogin]); 

  useEffect(() => {
    // const TimeOutLoading = setTimeout(() => {
    //   setIsLogin(prev => !prev)
    // }, 10000);

    // return () => {
    //   clearTimeout(TimeOutLoading)
    // }
  }, [])

  return (
    <ViewContainer>

      {/* Loading */}
      {/* <ViewLoading style={{marginRight: marginRight}}>
        <GifLoading source={Gif} />
      </ViewLoading> */}

      {/* Login */}
      <ViewLogin source={backgroundLogin} resizeMode="cover">
        <ContentLogin>

          {/* title */}
          <TitleLogin
            style={{
              textShadowColor: 'rgba(0, 0, 0, 0.25)',
              textShadowOffset: { width: 0, height: 4 },
              textShadowRadius: 4
            }}
          >
            Welcome back!
          </TitleLogin>

          {/* sub title */}
          <SubTitleLogin>
            Login to your account.
          </SubTitleLogin>

          {/* form login */}
          <FormLogin>
            <FormTitle 
              style={{
                lineHeight: 26
              }}
            >
              Username
            </FormTitle>
            <FormInput
            />
            <FormTitle 
              style={{
                lineHeight: 26
              }}
            >
              Phone Number
            </FormTitle>
            <FormInput />
          </FormLogin>

          <LoginBtn 
            style={{
              shadowColor: 'rgba(0, 0, 0, 0.25)',
              shadowOffset: { width: 0, height: 4 },
              shadowRadius: 4
            }}
          >
            <LinearGradient 
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }} 
              colors={['#cb8a58', '#562b1a']} 
              style={{flex: 1, justifyContent: 'center'}}
            >
              <TextLoginBtn>Login</TextLoginBtn>
            </LinearGradient>
          </LoginBtn>
        </ContentLogin>
      </ViewLogin>
    </ViewContainer>
    
  );
};

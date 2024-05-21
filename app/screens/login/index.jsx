
// react
import { 
  useEffect, 
  useState,
} from "react";
import { 
  Animated, 
  Dimensions, 
  ActivityIndicator, 
} from 'react-native';
import { 
  LinearGradient,
} from 'expo-linear-gradient';
import { connect } from "react-redux";

// const
import {
  windowWidth
} from '../../utlis/contans';

// gif,image
const Gif = require('../../../assets/coffee/loading.gif');
const backgroundLogin = require('../../../assets/coffee/bglogin.png');

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
import { userLoginRequest } from "../../actions";
import { version } from "styled-components";

const Login = ({
  userLogin,
}) => {

  // const [marginRight, setRight] = useState(new Animated.Value(0));
  const [isLogin, setIsLogin] = useState(false)
  const [user, setUser] = useState({userName: '', passWord: ''})
  const [isLoading, setIsLoading] = useState(false)

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

  const onHandleSubmit = () => {
    setIsLoading(true)

    if(user.userName !== '' || user.passWord !== '') {
      userLogin(user)
    }
  }

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
              onChangeText={e => setUser(prev => ({ ...prev, userName: e }))}
            />
            <FormTitle 
              style={{
                lineHeight: 26
              }}
            >
              Password
            </FormTitle>
            <FormInput
              secureTextEntry
              onChangeText={e => setUser(prev => ({ ...prev, passWord: e }))}
            />
          </FormLogin>

          <LoginBtn
            style={{
              shadowColor: 'rgba(0, 0, 0, 0.25)',
              shadowOffset: { width: 0, height: 4 },
              shadowRadius: 4
            }}
            onPress={onHandleSubmit}
            disabled={isLoading}
          >
            <LinearGradient 
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }} 
              colors={['#cb8a58', '#562b1a']} 
              style={{flex: 1, justifyContent: 'center'}}
            >
              <TextLoginBtn>
                {isLoading ? <ActivityIndicator size="small" color="#ffffff" /> : "Login"}
              </TextLoginBtn>
            </LinearGradient>
          </LoginBtn>
        </ContentLogin>
      </ViewLogin>
    </ViewContainer>
  );
};

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    userLogin: (user) => {
      dispatch(userLoginRequest(user))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
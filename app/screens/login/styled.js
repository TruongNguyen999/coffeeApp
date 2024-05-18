// react
import { 
    View,
    Image,
    Animated,
    ImageBackground,
    Text,
    TextInput,
    Pressable,
    TouchableOpacity,
 } from "react-native";

//  styled
import styled from "styled-components";

// utils
import { Color } from "../../utlis/color";
import { windowWidth } from "../../utlis/contans";

// assets


export const ViewContainer = styled(View)`
    display: flex;
    width: 100%;
    height: 100%;
`

export const ViewLoading = styled(Animated.View)`
    background-color: ${Color.bgLoading};
    display: flex;
    justify-content: center;
    align-items: center;
`

export const GifLoading = styled(Image)`
    width: 100%;
    max-width: 352px;
    height: 100%;
    max-height: 206px;
`

export const ViewLogin = styled(ImageBackground)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${windowWidth}px;
    height: 100%;
`

export const ContentLogin = styled(View)`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TitleLogin = styled(Text)`
    font-family: 'Raleway, sans-serif';
    font-weight: 700;
    font-size: 36px;
    color: ${Color.titleBlack};
`

export const SubTitleLogin = styled(Text)`
    font-family: 'Lato, sans-serif';
    font-weight: 400;
    font-size: 24px;
    color: ${Color.subTitleBlack};
`

export const FormLogin = styled(View)`
    display: flex;
    flex-direction: column;
    margin-top: 36px;
`

export const FormTitle = styled(Text)`
    font-family: 'Lato, sans-serif';
    font-weight: 400;
    font-size: 18px;
    color: ${Color.black};
    margin-left: 12px;
`

export const FormInput = styled(TextInput)`
    border: 1px solid #b29f91;
    border-radius: 10px;
    width: 311px;
    height: 60px;
    background: #fff;
    padding: 15px;
    margin-bottom: 16px;
`

export const LoginBtn = styled(TouchableOpacity)`   
    border: 1px solid #000;
    border-radius: 17px;
    width: 311px;
    height: 54px;
    overflow: hidden;
    margin-top: 72px;
`

export const TextLoginBtn = styled(Text)`
    font-family: 'Lato, sans-serif';
    font-weight: 400;
    font-size: 18px;
    text-align: center;
    color: ${Color.white};
`
import { View, Text, Image } from "react-native";
import styled from "styled-components";

export const HomeContainer = styled(View)`
    width: calc(100% - 60px);
    height: 100%;
    display: flex;
    margin: 40px 30px 0px 30px;
`

export const Header = styled(View)`
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
`

export const Location = styled(View)`
    display: flex;
    flex-direction: row;
`

export const ImgLocation = styled(Image)`
    margin-right: 5px;
`

export const TextLocation = styled(Text)`
    font-weight: 800;
    font-size: 12px;
    color: #000;
    align-self: flex-end;
`

export const Phone = styled(Image)`
    margin: auto 0px auto auto;
`
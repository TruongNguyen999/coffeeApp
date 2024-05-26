import {
  Header,
  HomeContainer,
  ImgLocation,
  Location,
  TextLocation,
  Phone,
} from "./styled";

const location = require("../../../assets/coffee/location.png");
const phone = require("../../../assets/coffee/phone.png");

const HomeScreen = ({ navigation }) => {
  return (
    <HomeContainer>
      <Header>
        <Location>
          <ImgLocation source={location} />
          <TextLocation>Ukraine, Ivano-Frankivsk, Konovaltsya 132</TextLocation>
        </Location>
        <Phone source={phone} />
      </Header>
    </HomeContainer>
  );
};

export default HomeScreen;

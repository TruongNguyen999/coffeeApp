import {
    View,
    Text,
    Button,
} from 'react-native';
import { connect } from 'react-redux';
import { userLoggout } from '../../actions/index';

const DetailsScreen = ({
  userLogoutRequest,
}) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Details!</Text>
      <Button
        title="Loggout"
        onPress={() => userLogoutRequest()}
      />
    </View>
  );
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    userLogoutRequest: () => {
      dispatch(userLoggout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen);
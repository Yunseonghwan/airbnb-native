//mapStateToProps는 connect함수에 첫번째 인수로 들어가는 함수 혹은 객체다.
//mapStateToProps는 기본적으로 store가 업데이트가 될때 마다 자동적으로 호출이 된다.이를 원하지 않는다면 null 혹은 undefined값을 제공해야한다.

import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect, useSelector, useDispatch } from "react-redux"; //useSelector는 state에 접근하게하고 state를 보내기도함
import { logIn, logOut } from "../redux/usersSlice";

import Auth from "../navigation/Auth";
import { NavigationContainer } from "@react-navigation/native";

const Gate = () => {
  const { isLoggedIn } = useSelector((state) => state.usersReducer);
  const dispatch = useDispatch();

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <TouchableOpacity onPress={() => dispatch(logOut())}>
          <Text>Log Out</Text>
        </TouchableOpacity>
      ) : (
        <Auth />
      )}
    </NavigationContainer>
  );
};

export default Gate;

/* mapStateToProps 쓸때 */

// const Gate = (props) => {
//     console.log(props);
//     const isLoggedIn = false;
//     return (
//       <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
//         {isLoggedIn ? <Text>Welcome</Text> : <Text>Login please</Text>}
//       </View>
//     );
//   };

//   const mapStateToProps = (state) => {
//     console.log(state);
//     return { isLoggedIn: false };
//   };

//   export default connect(mapStateToProps)(Gate);

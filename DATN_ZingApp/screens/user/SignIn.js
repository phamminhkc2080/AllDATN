import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";

import { LinearGradient } from "expo-linear-gradient";
import { request } from "../utils/Request";
import { signIn, signInAction } from "../../redux/actions/users";
import { SongContext } from "../../contexts/SongContext";

export default function SignIn() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { dataSignIn } = useSelector((state) => state);

  const [userNameInput, setUserNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [isUserName, setIsUserName] = useState(true);
  const [isPassword, setIsPassword] = useState(true);

  const onChangedUsername = (value) => {
    setUserNameInput(value);
    setIsUserName(verifyAcount(value));
  };

  const onChangedPassword = (value) => {
    setPasswordInput(value);
    setIsPassword(verifyPass(value));
  };

  const signInUser = (userName, password) => {
    request
      .post("/users/sign-in", {
        username: userName,
        password: password,
      })
      .then((result) => {
        console.log("result : ", result.data);

        if (result?.data) {
          // onHandleSignIn();
          if (result.data.length===0) {
            alert("Wrong username or password");
          } else {
            dispatch(
              signInAction(
                true,
                result?.data[0]?.idUser,
                result?.data[0]?.username
              )
            );
            navigation.navigate("TabsNavigation");
          }
         
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // const { song, songs, songControl } = useContext(SongContext);
  //   const {
  //     index,
  //     isShow,
  //     isRepeat,
  //     isPlaying,
  //     isSliding,
  //     position,
  //     duration,

  //     setPlaying,
  //     setSliding,
  //     setPosition,
  //     setDuration,

  //     setSong,
  //     setSongs,
  //     setIndex,
  //     setShow,
  //     setRepeat,

  //     onHandlerBack,
  //     onHandlerNext,
  //     onHandlerRepeat,
  //     onPauseSound,
  //     onPlaySound,
  //     gotoPosition,
  //   } = songControl;

  // useEffect(()=>{
  //   setShow(false)
  // },[isShow])

  // const saveUserData = async (item) => {
  //   try {
  //     const user = {
  //       idUser: item[0]?.idUser,
  //       email: item[0]?.username,
  //       isSignIn: true,
  //     };
  //     const dataUser = JSON.stringify(user);

  //     await AsyncStorage.setItem("dataUser", dataUser);
  //     console.log("dataStringUser : ", dataUser);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  // const getDataUser = async () => {
  //   try {
  //     const jsonUser = await AsyncStorage.getItem("dataUser");
  //     console.log("dataUser : ", jsonUser.idUser);
  //     return jsonUser != null ? JSON.parse(jsonUser) : null;
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  // const showAlert = (message) =>
  // Alert.alert(
  //   "Warning!!",
  //   message,
  //   [
  //     {
  //       text: "Cancel",
  //       onPress: () => Alert.alert("Cancel Pressed"),
  //       style: "cancel",
  //     },
  //   ],
  //   {
  //     cancelable: true,
  //     onDismiss: () =>
  //       Alert.alert(
  //         "This alert was dismissed by tapping outside of the alert dialog."
  //       ),
  //   }
  // );
  const onClickLogin = () => {
    if (userNameInput.length == 0 && passwordInput.length == 0) {
      // showAlert(message);
      alert("Please enter fill all the field !!");
    } else {
      if (userNameInput.length == 0) {
        alert("please enter your username !!");
        // showAlert(message);
      } else {
        if (passwordInput.length == 0) {
          alert("please enter your password !!");
          // showAlert(message);
        } else {
          signInUser(userNameInput, passwordInput);
        }
      }
    }
  };

  const onHandleSignIn = async () => {
    console.log("dataSignIn : ", dataSignIn);
  };

  const verifyAcount = (acount) => {
    let regex = new RegExp(
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    );
    if (!acount) {
      return true;
    }
    if (regex.test(acount)) {
      return true;
    }
    return false;
  };

  // đặt điều kiện cho chuỗi nhập vào mật khẩu
  const verifyPass = (pass) => {
    let regex = new RegExp(
      /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/
    );
    if (!pass) return true;

    if (regex.test(pass)) {
      return true;
    }
    return false;
  };

  console.log("dataUserLogout : ", dataSignIn);

  return (
    <View style={styles.contain}>
      <View style={styles.containLogin}>
        <View
          style={{
            flex: 1,
            marginVertical: 20,
          }}
        >
          {/* header */}
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
              }}
            >
              Login
            </Text>
          </View>

          {/* body */}
          <View
            style={{
              flex: 6,
            }}
          >
            <View
              style={{
                margin: 30,
                flexDirection: "column",
              }}
            >
              {/* username */}
              <View>
                <Text style={{ paddingVertical: 10 }}>Username</Text>
                <View
                  style={{
                    flexDirection: "row",
                    borderBottomColor: "grey",
                    borderBottomWidth: 1,
                  }}
                >
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      padding: 3,
                    }}
                  >
                    <Icon name="user" size={15} />
                  </View>
                  <View
                    style={{
                      flex: 1,
                    }}
                  >
                    <TextInput
                      style={{}}
                      placeholder={"Type your username"}
                      value={userNameInput}
                      onChangeText={onChangedUsername}
                    />
                  </View>
                </View>
                <View style={{ height: 50, width: "100%" }}>
                  {isUserName ? (
                    <Text></Text>
                  ) : (
                    <Text style={{ color: "red" }}>
                      {" "}
                      chỉ được phép sử dụng các chữ cái (a-z), số (0-9), và dấu
                      ( _ hoặc . ).
                    </Text>
                  )}
                </View>
              </View>

              {/* password */}
              <View>
                <Text style={{ paddingVertical: 10 }}>Password</Text>
                <View
                  style={{
                    flexDirection: "row",
                    borderBottomColor: "grey",
                    borderBottomWidth: 1,
                  }}
                >
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      padding: 3,
                    }}
                  >
                    <Icon name="lock" size={15} />
                  </View>
                  <View
                    style={{
                      flex: 1,
                    }}
                  >
                    <TextInput
                      secureTextEntry={true}
                      placeholder={"Type your password"}
                      value={passwordInput}
                      onChangeText={onChangedPassword}
                    />
                  </View>
                </View>
                <View style={{ height: 50, width: "100%" }}>
                  {isPassword ? (
                    <Text></Text>
                  ) : (
                    <Text style={{ color: "red" }}>
                      {" "}
                      Mật khẩu bao gồm chữ hoa, chữ thường, số và kí tự đặc biệt
                    </Text>
                  )}
                </View>
              </View>

              {/* login button */}
              <View
                style={{
                  marginVertical: 20,
                }}
              >
                <TouchableOpacity activeOpacity={0.5} onPress={onClickLogin}>
                  <LinearGradient
                    style={{
                      padding: 10,
                      widt: "100%",
                      borderRadius: 50,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    colors={["#AED6F1", "#3498DB"]}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0 }}
                  >
                    <Text>LOGIN</Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>

            <View
              style={{
                marginVertical: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            ></View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: "#3498DB",
  },
  containLogin: {
    flex: 1,
    margin: 30,
    borderRadius: 20,
    backgroundColor: "white",
    backgroundColor: "white",
  },
});

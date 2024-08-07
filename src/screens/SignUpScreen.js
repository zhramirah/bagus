import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import colors from "../themes/colors";
import { useNavigation } from "@react-navigation/native";
import Firebase from "../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = async () => {
    try {
        await createUserWithEmailAndPassword(Firebase.auth, email, password);
        navigation.reset({
            index: 0,
            routes: [{ name: "MainScreen" }],
          });
      } catch (error) {
        console.error(error);
      }
  };

  const signIn = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        style={styles.input}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity style={styles.btn} onPress={signUp}>
        <Text style={styles.btnTitle}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={signIn}>
        <Text style={styles.btnTitle}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    color: colors.textColors.black,
    fontWeight: "800",
    fontSize: 18,
  },
  line: {
    width: 87,
    height: 4,
    borderRadius: 4,
    backgroundColor: colors.primary.blue,
    marginTop: 20,
    marginBottom: 48,
  },
  input: {
    height: 56,
    width: "100%",
    marginBottom: 32,
    paddingHorizontal: 16,
    paddingVertical: 18,
    backgroundColor: colors.textColors.whiteGrey,
    borderRadius: 14,
    fontWeight: "600",
    color: colors.textColors.black,
  },
  btn: {
    backgroundColor: colors.primary.blue,
    height: 56,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  btnTitle: {
    color: colors.textColors.white,
    fontWeight: "600",
  },
});

export default SignUpScreen;
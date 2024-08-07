import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import colors from "../themes/colors";
import { useNavigation } from "@react-navigation/native";
import Firebase from "../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

const SignInScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(Firebase.auth, email, password);
      navigation.reset({
        index: 0,
        routes: [{ name: "MainScreen" }],
      });
    } catch (error) {
      console.error(error);
    }
  };

  const signUp = () => {
    navigation.navigate("SignUpScreen");
  };

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <Image
        source={require("../../assets/background.png")}
        style={styles.backgroundImage}
      />

      {/* Content Stack (Centered Vertically) */}
      <View style={styles.contentContainer}>
        {/* Centered Top Image (Optional) */}
        <Image
          source={require("../../assets/console.png")}
          style={styles.consoleImage}
        />
        {/* Header and Input Fields */}
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Halo!</Text>
          <Image
            source={require("../../assets/bsilogo.png")}
            style={styles.logoImage}
          />
        </View>
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
        {/* Buttons */}
        <TouchableOpacity style={styles.btn} onPress={signIn}>
          <Text style={styles.btnTitle}>Masuk</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.transparentBtn} onPress={signUp}>
          <Text style={styles.transparentBtnTitle}>Belum punya akun? </Text>
          <Text style={styles.boldText}>Daftar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Makes the container fill the entire screen
  },
  backgroundImage: {
    position: "absolute", // Overlays other elements
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
    resizeMode: "cover", // Adjust as needed (e.g., "contain", "stretch")
  },
  contentContainer: {
    flex: 1, // Fills the container (excluding the background image)
    justifyContent: "center", // Vertically centers the content
    alignItems: "center", // Horizontally centers the content
  },
  consoleImage: {
    width: 200, // Adjust width as needed
    height: 200, // Adjust height as needed
    marginBottom: 0, // Add some margin below (optional)
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
  },
  header: {
    fontSize: 40,
    fontWeight: "bold",
    color: colors.textColors.white,
  },
  logoImage: {
    width: 40, // Adjust width as needed
    height: 40, // Adjust height as needed
    marginLeft: 10, // Space between text and image
  },
  input: {
    height: 56,
    width: "80%",
    marginBottom: 32,
    paddingHorizontal: 16,
    paddingVertical: 18,
    backgroundColor: colors.textColors.white,
    borderRadius: 14,
    fontWeight: "600",
    color: colors.textColors.black,
  },
  btn: {
    backgroundColor: colors.secondary.yellow,
    height: 56,
    width: "80%",
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  transparentBtn: {
    borderWidth: 0,
    width: "80%",
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
  transparentBtnTitle: {
    color: colors.textColors.white,
    fontWeight: "600",
  },
});

export default SignInScreen;

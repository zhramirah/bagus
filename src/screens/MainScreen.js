import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Firebase from "../../firebaseConfig";
import { signOut } from "firebase/auth";
import colors from '../themes/colors';

const MainScreen = () => {
  const signOutHandler = async () => {
    try {
      await signOut(Firebase.auth);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={signOutHandler}>
        <Text style={styles.btnTitle}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    backgroundColor: colors.primary.blue,
    height: 56,
    width: 300,
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

export default MainScreen;
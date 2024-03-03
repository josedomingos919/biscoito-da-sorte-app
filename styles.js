import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 250,
    height: 250,
  },
  textPhrase: {
    margin: 30,
    fontSize: 20,
    color: "#dd7b22",
    fontStyle: "italic",
    textAlign: "center",
  },
  button: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: "#dd7b22",
    borderRadius: 25,
  },
  buttonView: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#dd7b22",
  },
});

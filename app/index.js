import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import CarsList from "../component/CarList";
import Header from "../component/Header";

export default function Page() {
  return (
    <View style={styles.container}>

      <Header />
      <CarsList />
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24, 
    backgroundColor: "#fff"
  },
  
});

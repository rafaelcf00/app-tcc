import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, Image, StyleSheet } from "react-native";
import Home from "./(tabs)";
import About from "./(tabs)/about";
import Plans from "./(tabs)/plans";

// Criando o Tab.Navigator
const Tab = createBottomTabNavigator();

export default function RootLayout() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#832370",
        tabBarInactiveTintColor: "#D3A6D4",
        headerTitle: () => (
          <View style={styles.header}>
            <Image
              source={require("../assets/images/logo.png")} // Caminho da sua logo
              style={styles.logo}
            />
            <Text style={styles.title}>MDevelop</Text>
          </View>
        ),
        headerStyle: {
          backgroundColor: "#fff",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Sobre"
        component={About}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="information-circle" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Planos"
        component={Plans}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 1,
    // borderColor: "#832370",
    width: "100%",
    paddingHorizontal: 100,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  title: {
    marginLeft: 10,
    fontSize: 25,
    fontWeight: "bold",
    color: "#832370",
    textAlign: "center",
  },
});

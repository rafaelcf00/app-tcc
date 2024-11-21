import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Linking,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function About() {
  return (
    <LinearGradient colors={["#fff", "#fff"]} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Título em Destaque */}
        <View style={styles.card}>
          <Text style={styles.title}>Processo de Limpeza dos Microdados</Text>
        </View>

        {/* Parágrafos como Cartões */}
        <View style={styles.infoCard}>
          <Text style={styles.body}>
            A limpeza dos microdados foi realizada de forma meticulosa para
            garantir a qualidade e precisão das informações apresentadas no
            nosso aplicativo. Utilizando os dados brutos fornecidos pelo INEP,
            foram aplicadas técnicas de filtragem, validação e transformação
            para eliminar inconsistências, dados faltantes e duplicados. As
            variáveis foram padronizadas e estruturadas de maneira adequada,
            permitindo uma visualização mais clara e útil para os usuários.
          </Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.body}>
            Durante esse processo, as informações educacionais e socioeconômicas
            dos participantes do Enem foram tratadas com o máximo rigor,
            respeitando os padrões de qualidade e as especificidades do INEP.
            Isso garante que os dados sejam apresentados de maneira acessível.
          </Text>
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
  },
  logo: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
  },
  card: {
    // backgroundColor: "#A4418E",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#832370",
    textAlign: "center",
  },
  infoCard: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 10,
  },
  body: {
    fontSize: 16,
    color: "#000",
    lineHeight: 24,
    textAlign: "justify",
  },
  divider: {
    height: 1,
    backgroundColor: "#000",
    marginVertical: 20,
  },
  buttonContainer: {
    marginTop: 10,
    alignItems: "center",
  },
  button: {
    flexDirection: "row",
    backgroundColor: "#E6C740",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 15,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
  icon: {
    marginRight: 10,
  },
});

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
import { Fontisto, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function Home() {
  return (
    <LinearGradient colors={["#fff", "#fff"]} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Título em Destaque */}
        <View style={styles.card}>
          <Text style={styles.title}>Muito prazer! Somos a MDevelop.</Text>
        </View>

        {/* Parágrafos como Cartões */}
        <View style={styles.infoCard}>
          <Text style={styles.body}>
            A MDevelop é um projeto dedicado à criação de interface simples e
            prática para análise de microdados educacionais, com foco especial
            no ENEM. Nossa missão é proporcionar ferramentas que facilitem a
            compreensão do desempenho dos participantes, análise de recursos com
            base em dados regionais entre outros, orientando políticas públicas,
            a entrega equitativa de recursos e iniciativas educacionais.
          </Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.body}>
            Desenvolvemos uma ferramenta simples que permite explorar microdados
            dos participantes do ENEM, transformando pesquisas difíceis em
            consultas práticas. Com a MDevelop, instituições educacionais e
            pesquisadores podem aprimorar suas pesquisas envolvendo o sistema
            educacional brasileiro.
          </Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.body}>
            Nosso compromisso com a excelência, responsabilidade e transparência
            garante que cada dado fornecido seja relevante para os usuários.
            Experimente gratuitamente nossos serviços e facilite seus estudos.
          </Text>
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            Ficou com alguma dúvida? Entre em contato com nosso suporte!
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL("mailto:Mdevelopcontato1@gmail.com")}
          >
            <Fontisto name="email" size={20} color="#000" style={styles.icon} />
            <Text style={styles.buttonText}>Entre em contato</Text>
          </TouchableOpacity>
        </View>

        {/* Divisor */}
        <View style={styles.divider} />

        {/* Botões com Ícones */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              Linking.openURL(
                "https://www.instagram.com/develop_md?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              )
            }
          >
            <Ionicons
              name="logo-instagram"
              size={20}
              color="#000"
              style={styles.icon}
            />
            <Text style={styles.buttonText}>Siga-nos no Instagram</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              Linking.openURL(
                "https://youtube.com/@mdevelopoficial?si=Cxc0E5idNVfm-4rL"
              )
            }
          >
            <Ionicons
              name="logo-youtube"
              size={20}
              color="#000"
              style={styles.icon}
            />
            <Text style={styles.buttonText}>Visite nosso YouTube</Text>
          </TouchableOpacity>
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
    textAlign: "center",
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
  buttonEmail: {
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

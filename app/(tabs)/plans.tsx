import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Linking,
} from "react-native";

export default function Plans() {
  const openWhatsApp = (number: any, message: any) => {
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    Linking.openURL(url).catch(() =>
      alert("Não foi possível abrir o WhatsApp.")
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Escolha o seu plano</Text>

      <View style={styles.planContainer}>
        <Text style={styles.planTitle}>Versão Gratuita</Text>
        <Text style={styles.planDescription}>
          O usuário pode acessar uma versão gratuita do dashboard, com menos
          informações e recursos de uso.
        </Text>
        <TouchableOpacity
          style={[styles.button, styles.freeButton]}
          onPress={() =>
            openWhatsApp(
              "5511920150594",
              "Olá, quero saber mais sobre o plano."
            )
          }
        >
          <Text style={[styles.buttonText, styles.freeButtonText]}>
            Acessar
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.planContainer}>
        <Text style={styles.planTitle}>Acesso Único</Text>
        <Text style={styles.planDescription}>
          Pelo valor de <Text style={styles.price}>R$ 2,99</Text>, o usuário
          pode acessar o dashboard completo uma única vez.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            openWhatsApp(
              "5511920150594",
              "Olá, quero saber mais sobre o plano."
            )
          }
        >
          <Text style={styles.buttonText}>Comprar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.planContainer}>
        <Text style={styles.planTitle}>Acesso Mensal</Text>
        <Text style={styles.planDescription}>
          Pelo valor de <Text style={styles.price}>R$ 5,99</Text>, o usuário tem
          acesso ao dashboard completo durante um mês, podendo cancelar ou
          renovar quando quiser.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            openWhatsApp(
              "5511920150594",
              "Olá, quero saber mais sobre o plano."
            )
          }
        >
          <Text style={styles.buttonText}>Assinar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.planContainer}>
        <Text style={styles.planTitle}>Acesso Anual</Text>
        <Text style={styles.planDescription}>
          Pelo valor de <Text style={styles.price}>R$ 59,99</Text>, o usuário
          tem acesso ao dashboard completo durante um ano, podendo renovar a
          assinatura após esse período.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            openWhatsApp(
              "5511920150594",
              "Olá, quero saber mais sobre o plano."
            )
          }
        >
          <Text style={styles.buttonText}>Assinar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#832370",
    textAlign: "center",
    marginBottom: 20,
  },
  planContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  planTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#832370",
    marginBottom: 10,
  },
  planDescription: {
    fontSize: 14,
    color: "#555",
    marginBottom: 15,
  },
  price: {
    fontWeight: "bold",
    color: "#832370",
  },
  button: {
    backgroundColor: "#832370",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  freeButton: {
    backgroundColor: "#832370",
  },
  freeButtonText: {
    color: "#fff",
  },
});

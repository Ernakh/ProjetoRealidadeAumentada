import React, { useMemo, useState } from "react";
import {
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from "react-native";

import { ViroARSceneNavigator } from "@reactvision/react-viro";

import CenaImagem from "./src/scenes/CenaImagem";
import CenaPlano from "./src/scenes/CenaPlano";
import CenaInterativa from "./src/scenes/CenaInterativa";
import CenaPlanoInterativa from "./src/scenes/CenaPlanoInterativa";

type TelaAR = "imagem" | "plano" | "interativo" | "planoInterativo" | null;

export default function App() {
  const [telaAtual, setTelaAtual] = useState<TelaAR>(null);

  const cenaSelecionada = useMemo(() => {
    if (telaAtual === "imagem") {
      return CenaImagem;
    }

    if (telaAtual === "plano") {
      return CenaPlano;
    }

    if (telaAtual === "interativo") {
      return CenaInterativa;
    }

    if (telaAtual === "planoInterativo") {
      return CenaPlanoInterativa;
    }

    return null;
  }, [telaAtual]);

  if (cenaSelecionada) {
    return (
      <View style={styles.arContainer}>
        <ViroARSceneNavigator
          autofocus={true}
          initialScene={{
            scene: cenaSelecionada as any
          }}
          style={styles.arContainer}
        />

        <SafeAreaView style={styles.overlay}>
          <Pressable
            style={styles.voltarButton}
            onPress={() => setTelaAtual(null)}
          >
            <Text style={styles.voltarButtonText}>Voltar</Text>
          </Pressable>
        </SafeAreaView>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />

      <Text style={styles.title}>App de Realidade Aumentada</Text>

      <Text style={styles.subtitle}>Escolha uma experiência:</Text>

      <Pressable style={styles.button} onPress={() => setTelaAtual("imagem")}>
        <Text style={styles.buttonTitle}>1. Reconhecer capa ou figura</Text>
        <Text style={styles.buttonDescription}>
          Identifica uma imagem cadastrada e renderiza um objeto 3D acima dela.
        </Text>
      </Pressable>

      <Pressable style={styles.button} onPress={() => setTelaAtual("plano")}>
        <Text style={styles.buttonTitle}>2. Usar superfície plana</Text>
        <Text style={styles.buttonDescription}>
          Detecta uma mesa, chão ou parede e posiciona um objeto na superfície.
        </Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => setTelaAtual("interativo")}
      >
        <Text style={styles.buttonTitle}>3. Objeto interativo na imagem</Text>
        <Text style={styles.buttonDescription}>
          Reconhece uma imagem e permite tocar no objeto para alterar sua cor.
        </Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => setTelaAtual("planoInterativo")}
      >
        <Text style={styles.buttonTitle}>4. Objeto interativo no plano</Text>
        <Text style={styles.buttonDescription}>
          Detecta uma superfície plana e permite tocar no objeto para alterar sua cor.
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  arContainer: {
    flex: 1
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    padding: 16
  },
  voltarButton: {
    backgroundColor: "rgba(15, 23, 42, 0.85)",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 20,
    alignSelf: "flex-start"
  },
  voltarButtonText: {
    color: "#ffffff",
    fontWeight: "bold"
  },
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
    justifyContent: "center",
    padding: 24
  },
  title: {
    color: "#ffffff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 12
  },
  subtitle: {
    color: "#CBD5E1",
    fontSize: 16,
    marginBottom: 32
  },
  button: {
    backgroundColor: "#1E293B",
    padding: 18,
    borderRadius: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#334155"
  },
  buttonTitle: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 6
  },
  buttonDescription: {
    color: "#CBD5E1",
    fontSize: 14,
    lineHeight: 20
  }
});
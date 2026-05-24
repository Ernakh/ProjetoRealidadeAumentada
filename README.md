# AppAR — Aplicativo de Realidade Aumentada com React Native

Aplicativo experimental de **Realidade Aumentada (AR)** desenvolvido com **React Native**, **Expo Development Build**, **TypeScript** e **ViroReact / ReactVision**.

O projeto possui uma tela inicial com três experiências principais:

1. Reconhecimento de imagem/capa de livro;
2. Detecção de superfície plana;
3. Reconhecimento de imagem com objeto 3D interativo.

---

## Sumário

- [Sobre o projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Configuração do Android](#configuração-do-android)
- [Rodando no Android](#rodando-no-android)
- [Rodando no iOS](#rodando-no-ios)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Arquivos principais](#arquivos-principais)
- [Como trocar a imagem reconhecida](#como-trocar-a-imagem-reconhecida)
- [Como funcionam as cenas de AR](#como-funcionam-as-cenas-de-ar)
- [Objetos 3D](#objetos-3d)
- [Limitações conhecidas](#limitações-conhecidas)
- [Solução de problemas](#solução-de-problemas)
- [Possibilidades de expansão](#possibilidades-de-expansão)
- [Status do projeto](#status-do-projeto)
- [Autor](#autor)
- [Licença](#licença)

---

## Sobre o projeto

O **AppAR** é um projeto criado para estudar e demonstrar o uso de Realidade Aumentada em aplicativos móveis com React Native.

A proposta é permitir que o usuário abra a câmera do dispositivo e visualize objetos 3D renderizados em diferentes contextos:

- sobre uma imagem previamente cadastrada;
- sobre uma superfície plana detectada no ambiente;
- sobre uma imagem cadastrada com possibilidade de interação com o objeto 3D.

Este projeto pode ser utilizado como base para aplicações educacionais, materiais didáticos interativos, protótipos de jogos, experiências com livros, catálogos, cartazes, embalagens ou objetos físicos.

---

## Funcionalidades

### 1. Reconhecimento de capa ou figura

O primeiro botão abre uma cena de AR que reconhece uma imagem cadastrada no projeto.

Quando a imagem é identificada pela câmera, um objeto 3D é renderizado acima dela.

Exemplos de uso:

- capa de livro;
- pôster;
- figura impressa;
- cartaz;
- imagem de referência;
- embalagem.

---

### 2. Detecção de superfície plana

O segundo botão abre uma cena de AR baseada na detecção de planos.

O usuário pode mover o celular pelo ambiente e tocar em uma superfície detectada, como:

- mesa;
- chão;
- parede;
- bancada;
- outra superfície plana.

Após a seleção do plano, um objeto 3D é posicionado no ambiente.

---

### 3. Objeto 3D interativo

O terceiro botão funciona de forma semelhante ao primeiro, usando reconhecimento de imagem.

A diferença é que o objeto 3D renderizado pode ser tocado pelo usuário.

A interação implementada inicialmente permite:

- mudar a cor do objeto;
- alterar o tamanho do objeto.

Essa funcionalidade pode ser expandida futuramente para executar outras ações, como abrir informações, iniciar animações, tocar sons ou carregar conteúdos educacionais.

---

## Tecnologias utilizadas

- React Native
- Expo
- Expo Development Build
- TypeScript
- ViroReact / ReactVision
- ARCore no Android
- ARKit no iOS

---

## Requisitos

Para rodar o projeto corretamente, é necessário ter:

- Node.js instalado;
- npm ou yarn;
- Expo CLI;
- Android Studio configurado, no caso de Android;
- dispositivo físico compatível com ARCore, no caso de Android;
- dispositivo iOS compatível com ARKit, no caso de iPhone;
- câmera disponível no dispositivo.

> Este projeto **não funciona no Expo Go**, pois utiliza dependências nativas de Realidade Aumentada. É necessário utilizar um build nativo ou um development build.

---

## Instalação

Clone o repositório:

```bash
git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/Ernakh/ProjetoRealidadeAumentada.git)
```

Acesse a pasta do projeto:

```bash
cd AppAR
```

Instale as dependências:

```bash
npm install
```

Caso ainda não tenha instalado o ViroReact / ReactVision no projeto, use:

```bash
npm install @reactvision/react-viro expo-dev-client
```

---

## Configuração do `app.json`

O arquivo `app.json` deve conter permissões de câmera e o plugin do ViroReact.

Exemplo:

```json
{
  "expo": {
    "name": "AppAR",
    "slug": "AppAR",
    "version": "1.0.0",
    "orientation": "portrait",
    "ios": {
      "bundleIdentifier": "com.ernakh.appar",
      "infoPlist": {
        "NSCameraUsageDescription": "Este app usa a câmera para experiências de realidade aumentada."
      }
    },
    "android": {
      "package": "com.ernakh.appar",
      "permissions": ["CAMERA"]
    },
    "plugins": [
      [
        "@reactvision/react-viro",
        {
          "android": {
            "xRMode": "AR"
          },
          "ios": {
            "cameraUsagePermission": "Este app usa a câmera para experiências de realidade aumentada."
          }
        }
      ]
    ]
  }
}
```

---

## Configuração do Android

Caso esteja usando Windows ou Linux, verifique se o Android SDK está instalado e configurado.

No Windows, o arquivo abaixo pode ser necessário:

```txt
android/local.properties
```

Exemplo de conteúdo:

```properties
sdk.dir=C:/Users/seu-usuario/AppData/Local/Android/Sdk
```

Também é recomendado configurar as variáveis de ambiente:

```txt
ANDROID_HOME
ANDROID_SDK_ROOT
```

No Windows PowerShell, um exemplo de configuração é:

```powershell
setx ANDROID_HOME "$env:LOCALAPPDATA\Android\Sdk"
setx ANDROID_SDK_ROOT "$env:LOCALAPPDATA\Android\Sdk"
setx PATH "$env:PATH;$env:LOCALAPPDATA\Android\Sdk\platform-tools"
```

Depois de alterar variáveis de ambiente, feche e abra novamente o terminal ou o VS Code.

---

## Rodando no Android

Gere os arquivos nativos:

```bash
npx expo prebuild
```

Execute o projeto no Android:

```bash
npx expo run:android
```

Caso queira limpar a build antes de rodar:

```bash
cd android
./gradlew clean
cd ..
npx expo run:android
```

No Windows:

```powershell
cd android
.\gradlew.bat clean
cd ..
npx expo run:android
```

---

## Rodando no iOS

Para rodar localmente no iOS, é necessário utilizar macOS com Xcode instalado.

```bash
npx expo run:ios
```

Em ambiente Windows, uma alternativa é gerar um build iOS usando EAS Build.

Instale o EAS CLI:

```bash
npm install -g eas-cli
```

Faça login:

```bash
eas login
```

Configure o EAS no projeto:

```bash
eas build:configure
```

Gere um build de desenvolvimento para iOS:

```bash
eas build --platform ios --profile development
```

Para instalar em um iPhone físico, pode ser necessário registrar o dispositivo na conta Apple Developer.

---

## Estrutura do projeto

```txt
AppAR
├── assets
│   └── targets
│       └── livro.jpg
│
├── src
│   └── scenes
│       ├── alvos.ts
│       ├── materials.ts
│       ├── CenaImagem.tsx
│       ├── CenaPlano.tsx
│       └── CenaInterativa.tsx
│
├── App.tsx
├── app.json
├── package.json
└── README.md
```

---

## Arquivos principais

### `App.tsx`

Arquivo principal do aplicativo.

Contém a tela inicial com os três botões e controla qual cena de AR será aberta.

Os três modos disponíveis são:

- `imagem`;
- `plano`;
- `interativo`.

---

### `src/scenes/CenaImagem.tsx`

Cena responsável por reconhecer uma imagem previamente cadastrada e renderizar um objeto 3D acima dela.

Essa cena usa:

- `ViroARScene`;
- `ViroARImageMarker`;
- `ViroBox`;
- `ViroText`;
- `ViroAmbientLight`.

---

### `src/scenes/CenaPlano.tsx`

Cena responsável por detectar superfícies planas no ambiente e posicionar um objeto 3D sobre a superfície selecionada.

Essa cena usa:

- `ViroARScene`;
- `ViroARPlaneSelector`;
- `ViroBox`;
- `ViroText`;
- `ViroAmbientLight`.

---

### `src/scenes/CenaInterativa.tsx`

Cena responsável por reconhecer uma imagem cadastrada e renderizar um objeto 3D interativo.

Ao tocar no objeto, sua cor e tamanho são alterados.

Essa cena usa:

- `ViroARScene`;
- `ViroARImageMarker`;
- `ViroBox`;
- `ViroText`;
- eventos de interação como `onClick`.

---

### `src/scenes/alvos.ts`

Arquivo responsável por cadastrar as imagens que serão reconhecidas pelo aplicativo.

Exemplo:

```ts
import { ViroARTrackingTargets } from "@reactvision/react-viro";

let alvosCriados = false;

export function criarAlvosDeImagem() {
  if (alvosCriados) {
    return;
  }

  ViroARTrackingTargets.createTargets({
    capaLivro: {
      source: require("../../assets/targets/livro.png"),
      orientation: "Up",
      physicalWidth: 0.16
    }
  });

  alvosCriados = true;
}
```

O valor `physicalWidth` representa a largura física real da imagem impressa, em metros.

Exemplo:

```txt
16 cm = 0.16
20 cm = 0.20
25 cm = 0.25
```

---

### `src/scenes/materials.ts`

Arquivo responsável por criar os materiais utilizados nos objetos 3D.

Neste projeto, os materiais são usados para definir as cores dos cubos renderizados nas cenas.

Exemplo:

```ts
import { ViroMaterials } from "@reactvision/react-viro";

let materiaisCriados = false;

export function criarMateriais() {
  if (materiaisCriados) {
    return;
  }

  ViroMaterials.createMaterials({
    azul: {
      diffuseColor: "#2563EB",
      lightingModel: "Lambert"
    },
    verde: {
      diffuseColor: "#16A34A",
      lightingModel: "Lambert"
    },
    vermelho: {
      diffuseColor: "#EF4444",
      lightingModel: "Lambert"
    },
    amarelo: {
      diffuseColor: "#F59E0B",
      lightingModel: "Lambert"
    },
    roxo: {
      diffuseColor: "#8B5CF6",
      lightingModel: "Lambert"
    }
  });

  materiaisCriados = true;
}
```

---

## Como trocar a imagem reconhecida

Para alterar a imagem utilizada no reconhecimento:

1. Substitua o arquivo:

```txt
assets/targets/livro.png
```

2. Mantenha o mesmo nome do arquivo ou altere o caminho em:

```txt
src/scenes/alvos.ts
```

3. Ajuste o valor de `physicalWidth` conforme a largura real da imagem impressa.

Exemplo:

```ts
physicalWidth: 0.16
```

Esse valor indica que a imagem física possui 16 centímetros de largura.

---

## Dicas para uma boa imagem-alvo

Para melhorar o reconhecimento da imagem, prefira imagens com:

- bom contraste;
- vários detalhes visuais;
- bordas e formas distintas;
- ilustrações ou texturas;
- boa iluminação no ambiente de teste.

Evite imagens com:

- fundo muito liso;
- poucas formas;
- apenas texto pequeno;
- baixa resolução;
- reflexo excessivo;
- superfícies muito brilhantes.

---

## Observação sobre reconhecimento de imagens

O aplicativo não reconhece automaticamente qualquer livro ou qualquer imagem desconhecida.

Ele reconhece apenas imagens previamente cadastradas no projeto por meio de `ViroARTrackingTargets`.

Para reconhecer capas de livros desconhecidas ou imagens arbitrárias, seria necessário integrar recursos adicionais de visão computacional, aprendizado de máquina ou serviços externos de reconhecimento de imagem.

---

## Como funcionam as cenas de AR

### Cena por imagem

A cena por imagem usa um alvo cadastrado.

Fluxo básico:

```txt
abre a câmera
procura a imagem cadastrada
identifica a imagem
renderiza o objeto 3D acima dela
```

---

### Cena por superfície plana

A cena por superfície plana usa a detecção de planos do ARCore ou ARKit.

Fluxo básico:

```txt
abre a câmera
analisa o ambiente
detecta planos horizontais ou verticais
usuário toca em uma superfície
objeto 3D é posicionado no espaço
```

---

### Cena interativa

A cena interativa usa reconhecimento de imagem e eventos de toque.

Fluxo básico:

```txt
abre a câmera
identifica a imagem cadastrada
renderiza o objeto 3D
usuário toca no objeto
objeto muda de cor e tamanho
```

---

## Objetos 3D

Na versão inicial, o projeto utiliza objetos 3D simples, como cubos, por meio do componente:

```tsx
<ViroBox />
```

Futuramente, esses objetos podem ser substituídos por modelos 3D personalizados, como arquivos:

- `.obj`;
- `.mtl`;
- `.glb`;
- `.gltf`.

Exemplo futuro com `.obj`:

```tsx
<Viro3DObject
  source={require("../../assets/models/objeto.obj")}
  resources={[require("../../assets/models/objeto.mtl")]}
  position={[0, 0.1, 0]}
  scale={[0.02, 0.02, 0.02]}
  type="OBJ"
/>
```

---

## Limitações conhecidas

- O app precisa de um dispositivo físico compatível com AR.
- Em Android, o aparelho precisa ter suporte ao Google Play Services for AR / ARCore.
- Em iOS, o aparelho precisa ter suporte ao ARKit.
- O app não funciona no Expo Go.
- A imagem reconhecida precisa ser previamente cadastrada.
- O reconhecimento pode falhar se a imagem tiver pouco contraste, poucos detalhes ou estiver mal iluminada.
- O desempenho pode variar conforme o dispositivo.
- Emuladores e simuladores geralmente não são adequados para testar a experiência real de AR.

---

## Solução de problemas

### Erro: `SDK location not found`

Esse erro indica que o Gradle não encontrou o Android SDK.

Crie ou edite o arquivo:

```txt
android/local.properties
```

Com o caminho do SDK:

```properties
sdk.dir=C:/Users/seu-usuario/AppData/Local/Android/Sdk
```

---

### Erro: aparelho Android incompatível com AR

Se o aparelho abrir a página do **Google Play Services for AR** e mostrar que o dispositivo não é compatível, significa que o celular não possui suporte a ARCore.

Nesse caso, teste em outro dispositivo Android compatível com ARCore.

---

### O app não abre no Expo Go

Esse comportamento é esperado.

O projeto usa bibliotecas nativas de Realidade Aumentada. Por isso, é necessário rodar com:

```bash
npx expo run:android
```

ou:

```bash
npx expo run:ios
```

---

### A imagem não é reconhecida

Verifique:

- se a imagem está no caminho correto;
- se o nome do arquivo está correto;
- se `physicalWidth` corresponde à largura real da imagem impressa;
- se a imagem possui boa qualidade;
- se a iluminação do ambiente está adequada;
- se a câmera está apontada diretamente para a imagem.

---

### O objeto aparece muito grande ou muito pequeno

Ajuste a propriedade `scale` do objeto.

Exemplo:

```tsx
<ViroBox
  position={[0, 0.08, 0]}
  scale={[0.08, 0.08, 0.08]}
  materials={["azul"]}
/>
```

Valores menores deixam o objeto menor. Valores maiores deixam o objeto maior.

---

## Possibilidades de expansão

Algumas melhorias futuras possíveis:

- adicionar modelos 3D personalizados;
- incluir animações nos objetos;
- permitir múltiplas imagens-alvo;
- adicionar sons ou feedback visual nas interações;
- criar uma interface de seleção de objetos;
- integrar reconhecimento de imagem com inteligência artificial;
- registrar eventos de interação do usuário;
- criar experiências educacionais com livros, cartazes ou materiais didáticos;
- associar conteúdos explicativos a cada imagem reconhecida;
- adicionar banco de dados de objetos 3D;
- permitir download dinâmico de modelos;
- integrar com APIs externas;
- criar experiências gamificadas em AR.

---

## Status do projeto

Projeto em desenvolvimento.

A versão atual implementa a estrutura inicial das três experiências principais de AR:

- imagem-alvo;
- superfície plana;
- objeto interativo.

---

## Autor

Desenvolvido por **Fabrício Tonetto Londero**.

---

## Licença

Este projeto pode ser utilizado para fins de estudo, experimentação e desenvolvimento acadêmico.


## Observação final

Este projeto foi desenvolvido como base inicial para experimentos com Realidade Aumentada em React Native.

A implementação atual prioriza simplicidade e clareza, utilizando cubos e interações básicas para validar os principais recursos de AR antes da inclusão de modelos 3D personalizados e funcionalidades mais avançadas.

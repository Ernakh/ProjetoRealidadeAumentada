import { ViroARTrackingTargets } from "@reactvision/react-viro";

let alvosCriados = false;

export function criarAlvosDeImagem() {
  if (alvosCriados) {
    return;
  }

  ViroARTrackingTargets.createTargets({
    capaLivro: {
      source: require("../../assets/targets/livro.jpg"),
      orientation: "Up",
      physicalWidth: 0.16
    }
  });

  alvosCriados = true;
}


//old
// import { ViroARTrackingTargets } from "@reactvision/react-viro";

// let alvosCriados = false;

// export function criarAlvosDeImagem() {
//   if (alvosCriados) {
//     return;
//   }

//   ViroARTrackingTargets.createTargets({
//     capaLivro: {
//       source: require("../../assets/targets/livro.jpg"),
//       orientation: "Up",

//       // Largura física real da imagem, em metros.
//       // Exemplo: se a capa impressa tem 16 cm de largura, use 0.16.
//       physicalWidth: 0.16
//     }
//   });

//   alvosCriados = true;
// }
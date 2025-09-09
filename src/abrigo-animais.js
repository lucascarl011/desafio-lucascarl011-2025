// src/abrigo-animais.js

const ANIMAIS = {
  Rex: { tipo: "cão", brinquedos: ["RATO", "BOLA"] },
  Mimi: { tipo: "gato", brinquedos: ["BOLA", "LASER"] },
  Fofo: { tipo: "gato", brinquedos: ["BOLA", "RATO", "LASER"] },
  Zero: { tipo: "gato", brinquedos: ["RATO", "BOLA"] },
  Bola: { tipo: "cão", brinquedos: ["CAIXA", "NOVELO"] },
  Bebe: { tipo: "cão", brinquedos: ["LASER", "RATO", "BOLA"] },
  Loco: { tipo: "jabuti", brinquedos: ["SKATE", "RATO"] },
};

function pessoaAtendeAnimal(brinquedosPessoa, brinquedosAnimal, ignorarOrdem = false) {
  if (ignorarOrdem) return true;

  let index = 0;
  for (const b of brinquedosPessoa) {
    if (b === brinquedosAnimal[index]) {
      index++;
    }
    if (index === brinquedosAnimal.length) return true;
  }
  return false;
}

class AbrigoAnimais {
  encontraPessoas(brinquedosPessoa1, brinquedosPessoa2, ordemAnimais) {
    const listaBrinquedos1 = brinquedosPessoa1.split(",");
    const listaBrinquedos2 = brinquedosPessoa2.split(",");
    const animais = ordemAnimais.split(",");

    const animaisSet = new Set();
    for (const animal of animais) {
      if (!ANIMAIS[animal] || animaisSet.has(animal)) {
        return { erro: "Animal inválido", lista: null };
      }
      animaisSet.add(animal);
    }

    const lista = [];
    const adotadosPessoa1 = [];
    const adotadosPessoa2 = [];

    for (const animal of animais) {
      const info = ANIMAIS[animal];
      const ignorarOrdem = animal === "Loco";

      const atende1 = pessoaAtendeAnimal(listaBrinquedos1, info.brinquedos, ignorarOrdem);
      const atende2 = pessoaAtendeAnimal(listaBrinquedos2, info.brinquedos, ignorarOrdem);

      let destino = "abrigo";
      const limite1 = adotadosPessoa1.length < 3;
      const limite2 = adotadosPessoa2.length < 3;

      if (info.tipo === "gato") {
        if (atende1 && atende2) destino = "abrigo";
        else if (atende1 && limite1) destino = "pessoa 1";
        else if (atende2 && limite2) destino = "pessoa 2";
      } else {
        if (atende1 && atende2) destino = "abrigo";
        else if (atende1 && limite1) destino = "pessoa 1";
        else if (atende2 && limite2) destino = "pessoa 2";
      }

      if (destino === "pessoa 1") adotadosPessoa1.push(animal);
      if (destino === "pessoa 2") adotadosPessoa2.push(animal);

      lista.push(`${animal} - ${destino}`);
    }

    lista.sort((a, b) => a.localeCompare(b));
    return { erro: false, lista };
  }
}

export { AbrigoAnimais as AbrigoAnimais };

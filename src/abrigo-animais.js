// base de animais
const ANIMAIS = {
  Rex: { tipo: "cão", brinquedos: ["RATO", "BOLA"] },
  Mimi: { tipo: "gato", brinquedos: ["BOLA", "LASER"] },
  Fofo: { tipo: "gato", brinquedos: ["BOLA", "RATO", "LASER"] },
  Zero: { tipo: "gato", brinquedos: ["RATO", "BOLA"] },
  Bola: { tipo: "cão",  brinquedo: ["CAIXA", "NOVELA"] },
  Bebe: { tipo: "cão", brinquedo: ["LASER", "RATO", "BOLA"] },
  Loco: { tipo: "jabuti", brinquedo: ["SKATE", "RATO"] },
};

// verifica se atende animal
function animalAceitaPessoa(brinquedosPessoa, brinquedosAnimal, ignoraOrdem = false) {
  if (ignoraOrdem) return true;

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

    // Arrays para entradas 
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


  }
}

export { AbrigoAnimais as AbrigoAnimais };

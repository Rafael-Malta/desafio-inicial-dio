let nome = "Rafael";
let xp = 7500;

const niveis = [
  { limite: 1000, nome: "Ferro" },
  { limite: 2000, nome: "Bronze"},
  { limite: 5000, nome: "Prata" },
  { limite: 7000, nome: "Ouro" },
  { limite: 8000, nome: "Platina"},
  { limite: 9000, nome: "Ascendente"},
  { limite: 10000, nome: "Imortal" },
  { limite: Infinity, nome: "Radiante"} 
];

let nivel;

for (const xpHeroi of niveis) {
  if (xp < xpHeroi.limite) {
    nivel = xpHeroi.nome;
    break;
  }
}

console.log("O herói " + nome , "está no nível " + nivel);
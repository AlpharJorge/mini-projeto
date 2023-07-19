// Definindo as três falas em um array
const falas = [
    "Não sou eu!!",
    "Eu tentei te ajudar desde o início!!",
    "Já pensou que o monstro pode ser controlado?"
  ];
  
  // Inicializa a variável para armazenar o número máximo de letras
  let maxLetras = 0;
  // Inicializa a variável para armazenar o índice do suspeito com mais letras
  let suspeitoComMaisLetras = -1;
  
  // Itera pelas falas para encontrar o suspeito com mais letras
  for (let i = 0; i < falas.length; i++) {
    const falaAtual = falas[i];
    const numLetras = falaAtual.replace(/\s/g, "").length;
  
    // Verifica se a fala atual tem mais letras que o suspeito anterior
    if (numLetras > maxLetras) {
      maxLetras = numLetras;
      suspeitoComMaisLetras = i;
    }
  }
  
  // Verifica se encontrou algum suspeito com mais letras
  if (suspeitoComMaisLetras !== -1) {
    console.log(`O suspeito com mais letras é o número ${suspeitoComMaisLetras + 1}`);
  } else {
    console.log("Não foi encontrado nenhum suspeito.");
  }
  
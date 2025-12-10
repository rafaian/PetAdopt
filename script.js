//Passo 1: Pegar todos os pets da página
const pets = document.querySelectorAll(".pet");
//Passo 2: Pegamos os elementos do card principal
//Estes são os campos (lugares) onde vamos colocar as informações do pet clicado
const nome = document.getElementById("nomeDoPet");
const descricao = document.getElementById("descricao");
const fotoGrande = document.getElementById("fotoGrande");
//Passo 3: Colocar um "ouvido" em cada pet
//Vamos usar o laço de repetição, FOR.
//Ele faz: Comece no pet 0; depois vá para o pet 1, depois para o pet 2, depois para o pet 3 e por último o pet 4 , onde finaliza a quantidade dos elementos que tem na variável const pets
// ++ quer dizer adicione 1 (um) valor 
for (let i = 0; i < pets.length; i++) {
 
    //Pegamos o pet atual
  const pet = pets[i];
  //Dentro dele, pegamos a imagem pequena(miniatura)
  //Dentro do pet, vamos pegar a sua própria imagem
  const miniatura = pet.querySelector("img");
  //------------------------------
  //Passo 4 : Quando clicarem na miniatura (imagem)
  //Pega as informações e coloca no card principal quando a miniatura da imagem for clicada
  miniatura.addEventListener("click", () => {
    //Troca o nome grande pelo nome do pet clicado
    nome.textContent = pet.querySelector("h2").textContent; //Pegando pela a tag
    //Troca a descricao grande pelo a descrição do pet clicado
    descricao.textContent = pet.querySelector(".descricao").textContent; //Pegando pela a class
    //Troca a imagem grande pela a imagem do pet clicado
    fotoGrande.src = miniatura.src;
  });
}
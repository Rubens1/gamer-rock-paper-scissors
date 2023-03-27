// Acesse os elementos DOM
const gameContainer = document.querySelector(".container"),
  userResult = document.querySelector(".user_result img"),
  cpuResult = document.querySelector(".cpu_result img"),
  result = document.querySelector(".result"),
  optionImages = document.querySelectorAll(".option_image");

// Percorra cada elemento de imagem de opção
optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    userResult.src = cpuResult.src = "image/rock.png";
    result.textContent = "Espere...";

    // Percorra cada imagem de opção novamente
    optionImages.forEach((image2, index2) => {
      // Se o índice atual não corresponder ao índice clicado
      // Remova a classe "ativa" das outras imagens de opção
      index !== index2 && image2.classList.remove("active");
    });

    gameContainer.classList.add("start");

    // Defina um tempo limite para atrasar o cálculo do resultado
    let time = setTimeout(() => {
      gameContainer.classList.remove("start");

      // Obtenha a fonte da imagem da opção clicada
      let imageSrc = e.target.querySelector("img").src;
      // Defina a imagem do usuário para a imagem da opção clicada
      userResult.src = imageSrc;

      // Gerar um número aleatório entre 0 e 2
      let randomNumber = Math.floor(Math.random() * 3);
      // Crie uma variedade de opções de imagem de CPU
      let cpuImages = ["image/rock.png", "image/paper.png", "image/scissors.png"];
      // Definir a imagem da CPU para uma opção aleatória da matriz
      cpuResult.src = cpuImages[randomNumber];

      // Atribua um valor de letra à opção de CPU (R para pedra, P para papel, S para tesoura)
      let cpuValue = ["R", "P", "S"][randomNumber];
      // Atribua um valor de letra à opção clicada (com base no índice)
      let userValue = ["R", "P", "S"][index];

      // Crie um objeto com todos os resultados possíveis
      let outcomes = {
        RR: "Empate",
        RP: "Cpu",
        RS: "Você",
        PP: "Empate",
        PR: "Você",
        PS: "Cpu",
        SS: "Empate",
        SR: "Cpu",
        SP: "Você",
      };

      // Procure o valor do resultado com base nas opções do usuário e da CPU
      let outComeValue = outcomes[userValue + cpuValue];

      // Exibir o resultado
      result.textContent = userValue === cpuValue ? "Empatado" : `${outComeValue} Ganho!!`;
    }, 2500);
  });
});

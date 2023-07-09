var teclasPressionadas = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false,
    W: false,
    A: false,
    S: false,
    D: false,
    w: false,
    a: false,
    s: false,
    d: false,
    Shift: false

  };
  
  var player = document.getElementById("player");
  var velocidade = 5;
  
  window.addEventListener("click", function(event) {
    var clickX = event.clientX; // Coordenada X do clique
    var clickY = event.clientY; // Coordenada Y do clique
  
    // Atualize as coordenadas de posição do jogador
    player.style.left = clickX + "px";
    player.style.top = clickY + "px";
  });

  document.addEventListener("keydown", function(event) {
    teclasPressionadas[event.key] = true;
  });
  
  document.addEventListener("keyup", function(event) {
    teclasPressionadas[event.key] = false;
  });
  
  function moverPlayer() {
    var topPosition = parseInt(player.style.top) || 0;
    var leftPosition = parseInt(player.style.left) || 0;
    
    if (teclasPressionadas.Shift) {
      criarbox();
    }
    if (teclasPressionadas.ArrowUp || teclasPressionadas.W || teclasPressionadas.w) {
      player.style.top = topPosition - velocidade + "px";
    }
    if (teclasPressionadas.ArrowDown || teclasPressionadas.S || teclasPressionadas.s) {
      player.style.top = topPosition + velocidade + "px";
    }
    if (teclasPressionadas.ArrowLeft || teclasPressionadas.A || teclasPressionadas.a) {
      player.style.left = leftPosition - velocidade + "px";
    }
    if (teclasPressionadas.ArrowRight || teclasPressionadas.D || teclasPressionadas.d) {
      player.style.left = leftPosition + velocidade + "px";
    }
    criarbox();
  }
  
  setInterval(function() {
    if (teclasPressionadas.ArrowUp || teclasPressionadas.ArrowDown ||
        teclasPressionadas.ArrowLeft || teclasPressionadas.ArrowRight ||
        teclasPressionadas.W || teclasPressionadas.A || teclasPressionadas.S ||
        teclasPressionadas.D || teclasPressionadas.w || teclasPressionadas.a ||
        teclasPressionadas.s || teclasPressionadas.d) {
      moverPlayer();
    }
  }, 16);

  function criarbox() {
    var topPosition = parseInt(player.style.top) || 0;
    var leftPosition = parseInt(player.style.left) || 0;
    var boxcase = document.getElementById("boxescase");
    var existingBoxes = boxcase.getElementsByClassName("box");

    var maxBoxes = 100; // Defina o número máximo de caixas desejado
    if (existingBoxes.length >= maxBoxes) {
      boxcase.removeChild(existingBoxes[0]); // Remover a primeira caixa
    }

    //cria a caixa
    var box = document.createElement("button");
    box.className = "box";
    
    //define posição da caixa
    box.style.top = (topPosition + velocidade) + "px";
    box.style.left = (leftPosition + velocidade) +"px";
    
    //player.style.left = leftPosition + 50 + "px";

    //agrupa a caixa
    boxcase.appendChild(box);
  }
  
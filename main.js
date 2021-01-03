window.onload = function(){

    var stage = document.getElementById('stage');
    var ctx = stage.getContext("2d");
    document.addEventListener("keydown", keyPush);
    setInterval(game, 80);

    const velocidade = 1;

    var velocidadeX = velocidadeY = 0;
    var pontoX = 10;
    var pontoY = 15;
    var tamanhoP = 30;
    var quantidadeP = 20;
    var aplleX=aplleY= 15;

    var trail = [];
    tail = 5;

    function game(){
        pontoX += velocidadeX;
        pontoY += velocidadeY;
        if (pontoX < 0) {
            pontoX = quantidadeP - 1;
        }
        if (pontoX > quantidadeP - 1) {
            pontoX = 0;
        }
        if (pontoY < 0) {
            pontoY = quantidadeP -1;
        }
        if (pontoY > quantidadeP - 1) {
            pontoY = 0;
        }

        ctx.fillStyle = "black";
        ctx.fillRect(0,0, stage.width, stage.height);

        ctx.fillStyle = "red";
        ctx.fillRect(aplleX*tamanhoP, aplleY*tamanhoP, tamanhoP,tamanhoP);

        ctx.fillStyle = "gray";
        for (var i = 0; i < trail.length; i++) {
            ctx.fillRect(trail[i].x*tamanhoP, trail[i].y*tamanhoP, tamanhoP-1,tamanhoP-1);
            if (trail[i].x == pontoX && trail[i].y == pontoY)
            {
                velocidadeX = velocidadeY = 0;
                tail =5;
            }
        }

        trail.push({x:pontoX,y:pontoY})
        while (trail.length > tail) {
            trail.shift();
        }

        if (aplleX == pontoX && aplleY == pontoY){
            tail++;
            aplleX = Math.floor(Math.random()*quantidadeP);
            aplleY = Math.floor(Math.random()*quantidadeP);
        }

    }

    function keyPush(event){

        switch (event.keyCode) {
            case 37: // Left
                velocidadeX = -velocidade;
                velocidadeY = 0;
                break;
            case 38: // up
                velocidadeX = 0;
                velocidadeY = -velocidade;
                break;
            case 39: // right
                velocidadeX = velocidade;
                velocidadeY = 0;
                break;
            case 40: // down
                velocidadeX = 0;
                velocidadeY = velocidade;
                break;			
            default:
                
                break;
        }


    }

}

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora de IMC</title>
</head>
<body>
    <script>

        function pulaLinha (){
          
            document.write("<br><br>");
        }

        function mostra(frase){
            document.write(frase);
            pulaLinha();
        }
        function calculaImc(altura,peso){
            return peso/(altura*altura);
            
        }

        var nome= prompt("Digite seu nome :");
        var altura= prompt(nome +"Digite sua altura :");
        var peso= prompt(nome + "Digite seu peso :");
        var imc= calculaImc(altura,peso)
         mostra("Seu Imc é "+ Math.round( imc));



    </script>
    
</body>
</html>

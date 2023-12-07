const calcular= document.getElementById("calcular");


  
alert("Olá,insira seus dados e obtenha seu IMC!");

function calculaImc(){
    const nome = document.getElementById("nome").value;
    const altura= document.getElementById("altura").value;
    const peso= document.getElementById("peso").value;
    const resultado= document.getElementById("resultado"); 
    



if(nome!==""&& altura!== "" && peso!== ""){
    
    const valorImc = Math.round((peso/(altura*altura)));
    resultado.textContent = valorImc;
    let classificacao ="";
    
 
    if (valorImc < 18.5 ){
        classificacao ="Você esta muito magro!";
       }else if (valorImc < 24.9){
        classificacao="Peso normal !";
        }else if( valorImc < 29.9){
            classificacao="Você está com sobrepeso!";
        }else if( valorImc <34.9){
            classificacao="Você está com obesidade grau I.";
        }else if( valorImc < 40){
            classificacao="Você está com obesidade grau II.";
        }else if (valorImc >40){
            classificacao="Você está com obesidade grau III,cuide-se!!";
    
        }  
         resultado.textContent =`${nome} seu IMC é ${valorImc} e ${classificacao}`;
        }else {
            resultado.textContent ="Preeencha todos os campos!";
           
         
      }
      
    }  
 calcular.addEventListener("click",calculaImc); 
     


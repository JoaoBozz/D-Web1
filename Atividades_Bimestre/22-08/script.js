        function calcularIMC(){
                
                //captura elementos HTML que serãp manipulados pelo javascript
                let inputPeso = document.getElementById("peso")
                let inputAltura = document.getElementById("altura")
                let divSaida = document.getElementById("saida")

                //ENTRADA
                let peso = Number(inputPeso.value)
                let altura = Number(inputAltura.value)

                //PROCESSAMENTO
                let imc = peso / (altura * altura)

                //SAÍDA
                divSaida.innerText = imc
        }
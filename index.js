function generateNumber(){
            const min = Math.ceil(document.querySelector(".input-min").value);
            const max = Math.floor(document.querySelector(".input-max").value);

            if (min > max) {
                alert("O valor mínimo deve ser menor ou igual ao valor máximo.");
                return;
            }

            const result = Math.floor(Math.random() * (max - min + 1)) + min;
            console.log(min, max);
            alert(result);
        }
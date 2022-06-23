var 


var list_lowercase = 'abcdefghijklmnopqrstuvwxyz'
var list_uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var list_numbers_pontuation = '123456789!@#$%&*-_'


function choice_list(list){
    /*
    pega um item aleatório do Array
    */
    var name_var = Math.floor(Math.random() * list.length)
    var choice = list[name_var]
    return choice
}


function PasswordGenerator(number_choice=8){
    /*
    Aqui gera a senha em si
    */
    var password = new Array() //armazena a senha gerada
    
    for (let i = 0; i < number_choice; i++){

        var rng = Math.floor(Math.random() * 4) //para que crie senhas um pouco memoráveis
        
        if (rng == 0){
            password += choice_list(list_lowercase)
        }
        
       else if (rng == 1 || rng == 2){
            password += choice_list(list_uppercase)
        }
        
        else{
            password += choice_list(list_numbers_pontuation)
        }
    }
    return password
}

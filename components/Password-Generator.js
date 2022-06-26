var numberEl = document.getElementById('input-number')

var buttonEl = document.getElementById('button-press')
var passwordEl = document.getElementById('password-gen')



var list_lowercase = 'abcdefghijklmnopqrstuvwxyz'
var list_uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var list_numbers_pontuation = `123456789!&@#$%*-_`


function choice_list(list){
    /*
    pega um item aleatório do Array
    */
    var name_var = Math.floor(Math.random() * list.length)
    var choice = list[name_var]
    return choice
}


function PasswordGenerator(){
    /*
    Aqui gera a senha em si
    */
    
    var progress_barEl = document.getElementById('progress-bar_')
    
    if (numberEl.value <= 7){
        progress_barEl.style.backgroundColor = '#f00'
        progress_barEl.style.width = '20%'

    }else if (numberEl.value > 7 && numberEl.value < 10){
        progress_barEl.style.backgroundColor = '#f0d769'
        progress_barEl.style.width = '70%'

    }else{
        progress_barEl.style.backgroundColor = '#663399'
        progress_barEl.style.width = '120%'
    }

    var password = new Array()
    
    for (let i = 0; i < numberEl.value; i++){
        var rng = Math.floor(Math.random() * 4) //para que crie senhas um pouco memoráveis
        
        if (rng == 0){
            password += choice_list(list_lowercase)
        }
        
        if (rng == 1 || rng == 2){
            password += choice_list(list_uppercase)
        }
        
        if (rng == 3){
            password += choice_list(list_numbers_pontuation)
        }
    }
    
    passwordEl.value = password
    
}

buttonEl.addEventListener('click', PasswordGenerator)
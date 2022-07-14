//valores dos inputs, quantidades de caracters
const numberEl = document.getElementById('input-number')

var buttonEl = document.getElementById('button-press')
var passwordEl = document.getElementById('password-gen')

//checkbox
const only_lowercase = document.getElementById('lowercase')
const only_uppercase = document.getElementById('uppercase')
const only_numbercase = document.getElementById('numbercase')
const only_simbolos = document.getElementById('simbolos')

//radio buttons
const radio_1 = document.getElementById('radio-1')
const radio_2 = document.getElementById('radio-2')

//Array cases
var list_lowercase = 'abcdefghijklmnopqrstuvwxyz'
var list_uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var list_numbers = `123456789`
var list_pontuation = '!&@#$%*-_'


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
    
    if (numberEl.value <= 9){
        progress_barEl.style.backgroundColor = '#f00'
        progress_barEl.style.width = '20%'

    }else if (numberEl.value > 9 && numberEl.value < 16){
        progress_barEl.style.backgroundColor = '#f0d769'
        progress_barEl.style.width = '70%'

    }else{
        progress_barEl.style.backgroundColor = '#663399'
        progress_barEl.style.width = '120%'
    }

    var password = new Array()
    
    for (let i = 0; i < numberEl.value; i++){
        var rng = 0 //para que crie senhas um pouco memoráveis
        
        if (radio_2.checked == true) {
            rng = Math.floor(Math.random() * 3)
            

        } else {
            rng = Math.floor(Math.random() * 5)
        }


        if (rng == 0){
            password += choice_list(list_lowercase)
        }
        
        if (rng == 1 || rng == 2){
            password += choice_list(list_uppercase)
        }
        
        if (rng == 3){
            password += choice_list(list_numbers)
        }

        if (rng == 4){
            password += choice_list(list_pontuation)
        }
    }
    
    passwordEl.value = password
    
}

buttonEl.addEventListener('click', PasswordGenerator)

//copy password---------------------------
const copy_button = document.getElementById('copy-button')

copy_button.addEventListener('click', function CopyPassword(){
    navigator.clipboard.writeText(passwordEl.value)
    window.alert('Senha copiada!')
})
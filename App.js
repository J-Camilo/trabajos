
//--------------- name --------------------

const fullName = document.getElementById("Name");

const validateTypes = (event) => {
    const field = event.target.value;
    // expresion regular para validar caracteres especiales
    const regex = /^[a-zA-Z\s]*$/;
    valido = document.getElementById('nameOK');

    if (regex.test(field)) {
        const form = document.getElementById("Name");
        form.style.border = "solid 3px green" ;
        form.style.backgroundColor = "rgb(181, 255, 181)";
        valido.innerText = "";

    } else {
        const form = document.getElementById("Name");
        form.style.border = "solid 3px red" ;
        form.style.backgroundColor = "rgb(255, 162, 162)";
        valido.innerText = "No se acepta caracteres especiales";
    }
}
fullName.addEventListener("keyup", validateTypes);




//--------------------- user ------------------

document.getElementById('userName2').addEventListener('input', function() {
    campo = event.target;
    valido = document.getElementById('emailOK');
        
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    //Se muestra un texto a modo de ejemplo, luego va a ser un icono
    if (emailRegex.test(campo.value)) {
        const form_2 = document.getElementById("userName2");
        form_2.style.border = "solid 3px green" ;
        form_2.style.backgroundColor = "rgb(181, 255, 181)";
        valido.innerText = "";
    } else {
        const form_2 = document.getElementById("userName2");
        form_2.style.border = "solid 3px red" ;
        form_2.style.backgroundColor = "rgb(255, 162, 162)";
        valido.innerText = "No se acepta caracteres especiales";
    }
});





login.addEventListener("click", verificarPasswords, store);


//--------------------- storage -------------------

//                     ERROR

function store(){
    const User_ = document.getElementById("userName2");
    localStorage.setItem("userName2", User_.value);
   

    const name_ = document.getElementById("Name");
    localStorage.setItem("Name", name_.value);

    const pass_ = document.getElementById("password2");
    localStorage.setItem("password2", pass_.value);
    


    //optener el valor --- var storedValue = localStorage.getItem("email");
}


//---------------------- spaces --------------------
    /*                  ERROR


const id = (id) => document.getElementById(id);
const classs = (classes) => document.getElementById(classes);

const user_0 = id ("name"),
    username = id ("userName2"),
    pass_0 = id ("password2"),
    pass_1 = id ("password3"),
    form_0 = id ("register"),
    msError = classes("error"),
    iconEx = classes ("success-icon"),
    iconfall = classes ("failure-icon");

form_0.addEventListener("submit", (e) =>{
    e.preventDefault();

    motor(user_0, 0, "No puesdes dejar este espacio en blanco");
    motor(username, 1, "No puesdes dejar este espacio en blanco")
    motor(pass_0, 2, "No puesdes dejar este espacio en blanco");
    motor(pass_1, 3, "No puesdes dejar este espacio en blanco");
})
const motor = (id, serial, mensaje);
*/

//--------------------- passwords ---------------

const pass1 = document.getElementById('password2');
const pass2 = document.getElementById('password3');
    //------------process check_password 
    function verificarPasswords() {
        valido2 = document.getElementById('checkOK');
     
        if (pass2.value == pass1.value) {
            const form_3 = document.getElementById("password3");
            form_3.style.border = "solid 3px green" ;
            form_3.style.backgroundColor = "rgb(181, 255, 181)";
            valido2.innerText = "";
        } else {
            const form_3 = document.getElementById("password3");
            form_3.style.border = "solid 3px red" ;
            form_3.style.backgroundColor = "rgb(255, 162, 162)";
            valido2.innerText = "Las contraseñas no coinciden";
        }
    }

//-------------------------------------------------------------------------------------------------------

//------------------- login ----------------------------

//                    ERROR

document.getElementById('userName').addEventListener('input', function() {
    campo2 = event.target;
    valido2 = document.getElementById('name');
        
    emailRegex2 = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    //Se muestra un texto a modo de ejemplo, luego va a ser un icono
    if (emailRegex2.test(campo2.value)) {
        const form_4 = document.getElementById("userName");
        form_4.style.border = "solid 3px green" ;
        form_4.style.backgroundColor = "rgb(181, 255, 181)";
        valido2.innerText = "";
    } else {
        const form_4 = document.getElementById("userName");
        form_4.style.border = "solid 3px red" ;
        form_4.style.backgroundColor = "rgb(255, 162, 162)";
        valido2.innerText = "No se acepta caracteres especiales";
    }
});

//--------------- pass incorret -----------------



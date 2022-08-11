//Menú hamburguesa
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

//Creamos la constante "inputs", que nos servirá para validar lo que escribe el usuario en el formulario
const inputs = document.querySelectorAll("#formulario input");

//Validación formato campos formulario
const expresiones = {
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  phone: /^\d{7,14}$/,
};

//Declaramos las variables que nos permitirán validar cada campo del formulario
let isnamevalid;
let isemailvalid;
let isphonevalid;

//Validación visual y en directo de los campos formulario con colores
const validarFormulario = (e) => {
  switch (e.target.name) {
    case "name":
      if (expresiones.name.test(e.target.value)) {
        document
          .getElementById("grupo_name")
          .classList.add("contact-us-form_grupo-correcto");
        document
          .getElementById("grupo_name")
          .classList.remove("contact-us-form_grupo-incorrecto");
        isnamevalid = true;
      } else {
        document
          .getElementById("grupo_name")
          .classList.add("contact-us-form_grupo-incorrecto");
        document
          .getElementById("grupo_name")
          .classList.remove("contact-us-form_grupo-correcto");
        isnamevalid = false;
      }
      break;
    case "email":
      if (expresiones.email.test(e.target.value)) {
        document
          .getElementById("columnas")
          .classList.add("contact-us-form_grupo-correcto");
        document
          .getElementById("columnas")
          .classList.remove("contact-us-form_grupo-incorrecto");
        isemailvalid = true;
      } else {
        document
          .getElementById("columnas")
          .classList.add("contact-us-form_grupo-incorrecto");
        document
          .getElementById("columnas")
          .classList.remove("contact-us-form_grupo-correcto");
        isemailvalid = false;
      }
      break;
    case "phone":
      if (expresiones.phone.test(e.target.value)) {
        document
          .getElementById("columnas")
          .classList.add("contact-us-form_grupo-correcto");
        document
          .getElementById("columnas")
          .classList.remove("contact-us-form_grupo-incorrecto");
        isphonevalid = true;
      } else {
        document
          .getElementById("columnas")
          .classList.add("contact-us-form_grupo-incorrecto");
        document
          .getElementById("columnas")
          .classList.remove("contact-us-form_grupo-correcto");
        isphonevalid = false;
      }
      break;
  }
};

//Comportamiento de los campos del formulario según el comportamiento del ratón/teclado
inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});

//Cancelamos el comportamiento habitual del botón "submit", de manera que el usuario ve como queda su información en el momento de enviarse y no pasa a una siguiente URL o ve un pop-up window con un mensaje
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
});

//Validación campos formulario
const element = document.getElementById("myButton");
element.addEventListener("click", myFunction);

function myFunction() {
  if (isnamevalid && isemailvalid && isphonevalid === true) {
    document.getElementById("button").innerHTML =
      "Has enviado correctamente el formulario!";
  } else {
    document.getElementById("button").innerHTML =
      "Por favor, rellena los campos para enviar la información";
  }
}

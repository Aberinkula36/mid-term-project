//Menú hamburguesa
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

const expresiones = {
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  phone: /^\d{7,14}$/,
};
let isnamevalid;
//Validación campos formulario
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
      } else {
        document
          .getElementById("columnas")
          .classList.add("contact-us-form_grupo-incorrecto");
        document
          .getElementById("columnas")
          .classList.remove("contact-us-form_grupo-correcto");
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
      } else {
        document
          .getElementById("columnas")
          .classList.add("contact-us-form_grupo-incorrecto");
        document
          .getElementById("columnas")
          .classList.remove("contact-us-form_grupo-correcto");
      }
      break;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
});

//addEventListener
function myFunction() {
  var existe = document.getElementById("email-contact");
  if(!existe){
    console.log("No existe");
  }else{
    console.log("Existe");
  }
}

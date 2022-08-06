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
  name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  phone: /^\d{7,14}$/, // 7 a 14 numeros.
};

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
      } else {
        document
          .getElementById("grupo_name")
          .classList.add("contact-us-form_grupo-incorrecto");
        document
          .getElementById("grupo_name")
          .classList.remove("contact-us-form_grupo-correcto");
      }
      break;
    case "email-contact":
      break;
    case "phone":
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

export function validarFecha(input) {
  let fechaNacimiento = document.querySelector("#fechaNacimiento");
  let valorFechaNacimiento = fechaNacimiento.value;
  if (valorFechaNacimiento) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
}

export function validarElemento(input) {
  let selectElemento = document.querySelector("#selectElemento");
  let valorSelectElemento = selectElemento.value;
  if (valorSelectElemento) {
    input.className = "form-control is-valid";
    return true;
  } else {
    input.className = "form-control is-invalid";
    return false;
  }
}


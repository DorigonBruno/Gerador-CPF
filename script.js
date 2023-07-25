const cpfElement = document.querySelector(".resultado");
const btnGerar = document.querySelector(".gerar");
const btnCopy = document.querySelector(".copy");

function gerarCpf() {
  let n = Math.floor(Math.random() * 999999999) + 1;
  let nStr = n.toString().padStart(9, "0");
  let dv1 = calcularDV(nStr, 10);
  let dv2 = calcularDV(nStr + dv1, 11);

  cpfElement.innerText = fomartarCPF(nStr + dv1 + dv2);
}

function calcularDV(numero, peso) {
  let total = 0;
  for (let i = 0; i < numero.length; i++) {
    total += parseInt(numero.charAt(i)) * peso--;
  }
  let resto = total % 11;
  return resto < 2 ? 0 : 11 - resto;
}

function fomartarCPF(cpf) {
  const regex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;
  return cpf.replace(regex, "$1.$2.$3-$4");
}

function copyCPF() {
  navigator.clipboard.writeText(cpfElement.innerText);

  btnCopy.innerText = "Copiado !";

  setTimeout(() => {
    btnCopy.innerText = "Copiar CPF";
  }, 1500);
}

btnGerar.addEventListener("click", gerarCpf);
btnCopy.addEventListener("click", copyCPF);

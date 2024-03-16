const JustCurrencyConverter = require("conver-currency");
const check = require("check-gempa");

class Kalkulator {
    function hasil() {
    var angka1 = parseFloat(document.getElementById("angka1").value);
    var angka2 = parseFloat(document.getElementById("angka2").value);
    var operator = document.getElementById("operator").value;
    var hasil;

    if (operator == "tambah") {
      hasil = angka1 + angka2;
    } else if (operator == "kurang") {
      hasil = angka1 - angka2;
    } else if (operator == "kali") {
      hasil = angka1 * angka2;
    } else if (operator == "bagi") {
      hasil = angka1 / angka2;
    }

    document.getElementById("hasil").value = hasil;
  }
}

export.module Kalkulator
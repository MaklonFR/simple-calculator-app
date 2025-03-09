// bagian fungsi hitung
function hitung() {
    //deklarasi variabel
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;
    let hasil;

    //cek kesalahan
    if (isNaN(num1) || isNaN(num2)) {
        hasil = " Harap masukan angka yang benar (valid)";
    } else {
        if (operator === "+") {
            hasil = num1 + num2;
        } else if (operator === "-") {
            hasil = num1 - num2;
        } else if (operator === "*") {
            hasil = num1 * num2;
        } else if (operator === "/") {
            if (num2 === 0) {
                hasil = "Kesalahan! Tidak bisa dibagi dengan nol."
            } else {
                hasil = num1 / num2;
            }
        } else {
            hasil = "Operator tidak valid";
        }
    }

    document.getElementById("hasil").textContent = hasil;
}

//bagian fungsi tombol bersih
function bersih() {
    document.getElementById("fkalkulator").reset();
}
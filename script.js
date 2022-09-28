//fungsi untuk operasi penjumlahan
function tambah() {
    val1 = document.kirim.B1.value
    val2 = document.kirim.B2.value
    document.kirim.HASIL.value= Number(val1)+Number(val2)
}

//fungsi untuk operasi pengurangan
function kurang() {
    val1 = document.kirim.B1.value
    val2 = document.kirim.B2.value
    document.kirim.HASIL.value= Number(val1)-Number(val2)
}

//fungsi untuk operasi perkalian
function kali() {
    val1 = document.kirim.B1.value
    val2 = document.kirim.B2.value
    document.kirim.HASIL.value= Number(val1)*Number(val2)
}

//fungsi untuk operasi pembagian
function bagi() {
    val1 = document.kirim.B1.value
    val2 = document.kirim.B2.value
    //kondisi saat terjadi operasi dibagi nol maka akan menghasilkan output eror
    if (val2 == 0) {
        document.kirim.HASIL.value="Error!"
    } else {
        document.kirim.HASIL.value= Number(val1)/Number(val2)
    }
}


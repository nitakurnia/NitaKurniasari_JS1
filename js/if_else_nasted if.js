// Contoh program JavaScript if, else, nasted if
let nilai = 75;
// Ini adalah contoh penggunaan if
if (nilai >= 90) {
    document.write("Nilai Anda A");
} else { // Ini adalah contoh penggunaan else
    // Ini adalah contoh nested if
    if (nilai >= 80) {
        document.write("Nilai Anda B");
    } else {
        if (nilai >= 70) {
            document.write("Nilai Anda C");
        } else {
            document.write("Nilai Anda D");
        }
    }
}
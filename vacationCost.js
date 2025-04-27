function findAnswer(array) {
    let n = array.length;
    let minCost = Infinity; // Inisialisasi nilai terkecil untuk biaya
    let bestDay = -1;
  
    // Iterasi untuk mencari dua hari berturut-turut
    for (let i = 0; i < n - 1; i++) {
      // Mengambil biaya maksimum dari dua hari berturut-turut
      let cost = Math.max(array[i], array[i + 1]);
  
      // Menyimpan hasil jika biaya lebih kecil atau jika biaya sama, memilih hari yang lebih awal
      if (cost < minCost || (cost === minCost && i + 1 < bestDay)) {
        minCost = cost;
        bestDay = i + 1; // Indeks + 1 untuk mendapatkan hari (1-based index)
      }
    }
  
    // Mengembalikan hasil
    return [bestDay, minCost];
  }
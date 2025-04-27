function solution(a) {
    let diagonalkanan = 0;
    let diagonalKiri = 0;
    
    for (let i = 0; i < a.length; i++) {
      diagonalkanan += a[i][i];                      
      diagonalKiri += a[i][a.length - 1 - i];      
    }
    
    return Math.abs(diagonalkanan - diagonalKiri);
  }
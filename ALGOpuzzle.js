function findButtonPresses(arr) {
    let count = 0;
  
    while (arr.includes("BASH")) {
      let lastBash = arr.lastIndexOf("BASH");
      arr[lastBash] = "ALGO";
      
      for (let i = lastBash + 1; i < arr.length; i++) {
        if (arr[i] === "ALGO") {
          arr[i] = "BASH";
        }
      }
  
      count++;
    }
  
    return count;
  }
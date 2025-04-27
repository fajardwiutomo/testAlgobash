function solution(l1, l2) {
    let carry = 0;
    let result = [];
    let maxLength = Math.max(l1.length, l2.length);
  
    for (let i = 0; i < maxLength; i++) {
      let val1 = i < l1.length ? l1[i] : 0;
      let val2 = i < l2.length ? l2[i] : 0;
      let sum = val1 + val2 + carry;
      
      result.push(sum % 10);       
      carry = Math.floor(sum / 10); 
    }
  
    if (carry > 0) {
      result.push(carry);
    }
  
    return result;
  }
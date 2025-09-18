function balanceada(str) {
    const stack = [];
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (char === '(') {
        stack.push(char);
      } else if (char === ')') {
        if (stack.length === 0) {
          return false;
        }
        stack.pop();
      }
    }
    return stack.length === 0;
  }
  
  console.log(balanceada("()")); // Saída esperada: true
  console.log(balanceada("(()")); // Saída esperada: false
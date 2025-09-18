function push(stack, value) {
    stack.push(value);
  }
  
  function pop(stack) {
    if (stack.length === 0) {
      return "Pilha vazia";
    }
    return stack.pop();
  }
  
  function peek(stack) {
    if (stack.length === 0) {
      return "Pilha vazia";
    }
    return stack[stack.length - 1];
  }
  
  let pilha = [];
  push(pilha, 10);
  push(pilha, 20);
  console.log(pop(pilha)); 
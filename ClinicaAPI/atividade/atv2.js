function enqueue(queue, value) {
    queue.push(value);
  }
  
  function dequeue(queue) {
    if (queue.length === 0) {
      return "Fila vazia";
    }
    return queue.shift();
  }
  
  function front(queue) {
    if (queue.length === 0) {
      return "Fila vazia";
    }
    return queue[0];
  }
  
  let queue = [];
  enqueue(queue, 'A');
  enqueue(queue, 'B');
  console.log(dequeue(queue)); // Saída esperada: A
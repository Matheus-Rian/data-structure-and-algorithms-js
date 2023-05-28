/* Como as filas são aplicadas com frequência em ciência da computação e em nossas vidas.
Há algumas versões modificadas em relação a fila padrão. Uma delas é a fila circular. 
Usaremos o jogo "batata quente" para exemplificar.
*/

import { Queue } from "./queue.js";

function hotPotato(elementsList, num) {
  const queue = new Queue()
  const eliminatedList = []
  
  for (let i = 0; i < elementsList.length; i++) {
    queue.enqueue(elementsList[i])
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue())
    }

    eliminatedList.push(queue.dequeue())
  }

  return {
    eliminated: eliminatedList,
    winner: queue.dequeue()
  }
}

const names = ['Talita', 'Matheus', 'Julia', 'Vitória', 'Victor']
const result = hotPotato(names, 7)
result.eliminated.forEach(name => {
  console.log(`${name} was eliminated from the hot potato game.`)
})
console.log(`The winner is ${result.winner}`)
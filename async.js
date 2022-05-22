console.log('Start');
console.log('Start 2');

setTimeout(function() {
  console.log('Inside Timeout, after ??? seconds Second Stage of Test');
}, 3)

function timeoutPack() {
  console.log('timeoutPack delivered !)');
}

setTimeout(function() {
  console.log('Inside Timeout, after ??? seconds');
}, 2)

console.log('end');

setTimeout(function() {
  console.log('Inside Timeout, after ??? seconds NFS');
}, 1)

// Синхрон > классическое состояние порядка выполнения функций в JS. Тоесть, последовательно...
// асинхрон Settimeout же задаёт в параметре Задержку перед выполнением функций...

setTimeout(timeoutPack, 2000)

// Остаёться неочевидным, как так тормозякает > шо аж по-разной скорости отрабатывают чётко прописяканные ТаймАуты...
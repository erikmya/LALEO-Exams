//Arrays ejercicios
const nums = [0,0,5,7,1]

//Funcion con parametro nums
function orderNums(nums) {
  //for externo que recorrera desde la posición 0 todo el length del array.
  for (let i = 0; i < nums.length; i++) {
    //for interno que recorrera desde +1 posicion del ciclo anterior del array.
    for (let a = i + 1; a < nums.length; a++) {
      //condición compara si lo que se encuentra en la posición a es menor que la posición i si es asi pasa abajo si no sigue el ciclo
      if (nums[a] < nums[i]) {
        //se declara temp que contendra el valor de i 
        let temp = nums[i];
        // el valor de i sera igual a el valor de a
        nums[i] = nums[a];
        // una vez hecho el intercambio se asignara el valor a temp para seguir haciendo la sustitución si se cumple la condición de arriba
        nums[a] = temp;
      }
    }
  }
  //Una vez se cumplen los ciclos de arriba los numeros quedan ordenados de esta manera [0,0,1,5,7]
  //Se declara count que sera mi contador para mover todos los elementos diferentes a cero a la izquierda del array
  let count = 0;
  //for que recorrera el length del array que ya tenia ordenado
  for (let i = 0; i < nums.length; i++) {
    //Si se cumple la condición que el elemento es diferente a cero pasa abajo si no sigue con el ciclo
    if (nums[i] !== 0) {
      //ya que entra a esta parte al contador ala posición de 0 se le asignara el valor de i y se le sumara 1
      nums[count] = nums[i];
      count++;
    }
  }
  //De esta manera el array queda así [1,5,7,5,7]
  //mientras que el contador sea menor que el length del array ordenado
  while (count < nums.length) {
    //La posición del contador quedo en 3 entonces al elemento que este dentro de esa posición cambiara por 0
    nums[count] = 0;
    count++;
  }
  //saliendo de todo esto retornara nums el array quedaría de esta manera [1,5,7,0,0]
  return nums;
}
console.log(orderNums(nums))


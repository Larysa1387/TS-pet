/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<K, U> {
  key: K;
  value: U;
}

// interface MixedDictionary {
//   [key: string]: string | number;
// }

export {};

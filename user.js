//Завдання 7: Використайте ключове слово this в об'єкті.
// Створюємо об'єкт
let user = {
  name: "John",
  age: 25,
  introduce: function () {
    return `My name is ${this.name} and I am ${this.age} years old`;
  },
};

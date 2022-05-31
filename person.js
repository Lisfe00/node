class Person {
  constructor(name) {
    this.name = name;
  }

  sayMyName() {
    return `My name is ${this.name}!`;
  }
}

module.exports = { //usado para exportar a class para o index
  Person,
};

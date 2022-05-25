class Person {
  #name = 'jack'
  age = 23
  constructor(skill) {
    this.skill = skill
  }

  getInfo() {
    return `
        info is:
            name: ${this.#name};
            age: ${this.age};
            skill: ${this.skill};   
        `
  }
}

const p = new Person('eat')
console.log(p) // { age: 23, skill: 'eat' }
console.log(p.getInfo())

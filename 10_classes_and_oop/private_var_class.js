class MyClass {
  #privateVariable; // This is private property '#' is used followed by properties name to make it private [Acces only inside the class]
  static root_val = "Rajiv"; // This is Myclass specific property only and cannot be called by its instance
  constructor(value) {
    this.#privateVariable = value;
    this.name = value;
  }

  getPrivateVariable() {
    return this.#privateVariable;
  }

  setPrivateVariable(value) {
    this.#privateVariable = value;
  }

  greeting(){
      console.log('Hello',MyClass.root_val)
  }
}

let first_class = new MyClass("Rajiv")
first_class.greeting()
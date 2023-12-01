class Car {
    initCar(name, brand, color, made) {
      this._name = name;
      this._brand = brand;
      this._color = color;
      this._made = made;
    }
  
    get name() {
      return this._name;
    }
  
    set name(name) {
      this._name = name;
    }
  }
  
  const bmwi8 = new Car();
  
  bmwi8.initCar("BMW i8", "BMW", "Dark Blue", "German");
  
  console.log("Name: ", bmwi8.name);
  bmwi8.name = "BMW i9";
  console.log("After Name: ", bmwi8.name);
  
  
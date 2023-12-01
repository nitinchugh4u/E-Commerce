class Parents {
    constructor(mother, father, accountBalance, isOwningAHouse) {
      this._mother = mother;
      this._father = father;
      this._accountBalance = accountBalance;
      this._isOwningAHouse = isOwningAHouse;
    }
  
    get mother() {
      return this._mother;
    }
  
    get father() {
      return this._father;
    }
  
    get accountBalance() {
      return this._accountBalance;
    }
  }
  
  class GenZBaccha extends Parents {
    constructor(
      mother,
      father,
      accountBalance,
      isOwningAHouse,
      kidName,
      isInstaAddicted,
      moyeMoyeAddicted,
      snapAddicted
    ) {
      super(mother, father, accountBalance, isOwningAHouse);
      this._kidName = kidName;
      this._isInstaAddicted = isInstaAddicted;
      this._moyeMoyeAddicted = moyeMoyeAddicted;
      this._snapAddicted = snapAddicted;
    }
  
    get snapAddicted() {
      return this._snapAddicted;
    }
  }
  
  const xyz = new GenZBaccha(
    "Sheela Devi",
    "Raman Lal",
    3000000000000,
    "Mike",
    true,
    true,
    true,
    false
  );
  
  console.log("Mum: ", xyz.mother);
  console.log("Papa Ji: ", xyz.father);
  console.log("snapAddicted: ", xyz.snapAddicted);
  console.log("accountBalance: ", xyz.accountBalance);
  
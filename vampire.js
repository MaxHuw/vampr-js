class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let degreeOfSeparation  = 0;
    let currentVampire = this;

    while (currentVampire.creator){
      currentVampire = currentVampire.creator;
      degreeOfSeparation++;
    }

    return degreeOfSeparation;
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {

    if (this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal){
      return true;
    } else {
      return false;
    }

  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

    let myLiniage = this;
    let theirLineage = vampire;

    if (!myLiniage.creator){
      return myLiniage;
    } else if (!theirLineage.creator){
      return theirLineage;
    } else if ()
   
    while (myLiniage !== theirLineage){
      myLiniage = myLiniage.creator;
      theirLineage = theirLineage.creator;
    }

    return myLiniage;
  }
}

module.exports = Vampire;


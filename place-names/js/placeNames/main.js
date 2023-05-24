// Put your code here

const names = [
   "Nashville", "Hong Kong", "The back yard", "Earth",
    "London", "The mall", "Ryman Auditorium", "The Great Wall of China"
];

console.log("All Place Names");

for (const name of names) {
  console.log(name);
}

// The names

let theNames = names.filter((theName) => theName.startsWith("The") )

console.log(`'The' Place Names`)

for(const singleTheName of theNames){
  console.log(singleTheName)
}
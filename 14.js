// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  const contact = contacts.find((data) => data.firstName === name);
  // find is used to find the first object in the array that matches the name.

  // const contact = contacts.filter((data) => data.firstName === name);
  // to get multiple objects if their

  if (contact) {
    if (contact.hasOwnProperty(prop)) {
      return contact[prop];
    } else {
      return "No such property";
    }
  }
  return "No such contact";
}

console.log(lookUpProfile("Akira", "likes"));

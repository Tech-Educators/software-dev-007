const book = {
  title: "The Hobbit",
  author: {
    name: "JRR Tolkien",
    dob: 1892,
    dod: 1973,
    nationality: "British",
  },
  genre: ["Children", "Fantasy", "Adventure", "History", "Mythology"],
  ISBN: "9780007525508",
  publicationDate: 1937,
  blurb:
    "In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort.",
};

// access the authors name
book.author.name;

// access the first genre
book.genre[0];

// access the last genre
book.genre[length - 1];

// IMPORTANT: this is a non real life example (this is not a good piece of code, just a demo)
const myObj = {
  layerOne: {
    layerTwo: {
      layerThree: {
        layerFour: {
          layerFive: {
            theTruth: ["This was a waste of time", "This was a good exercise"],
          },
        },
      },
    },
  },
};

myObj.layerOne.layerTwo.layerThree.layerFour.layerFive.theTruth[1]; // "This was a good exercise"

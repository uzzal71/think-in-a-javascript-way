var language = {
  name: "Javascript",
  estd: "1995",
  libraries: ["React", "Vue", "jQuery"],
};

var language2 = structuredClone(language); //immutably // structuredClone

language.libraries.push("Angular");

console.log(language);
console.log(language2);

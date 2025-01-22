let element = document.querySelector("#List");
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

function generateDomains(pronouns, adjectives, nouns) {
  let domains = [];
  for (let p of pronouns) {
    for (let a of adjectives) {
      for (let n of nouns) {
        domains.push(`${p}${a}${n}.com`);
      }
    }
  }
  return domains;
}

let domainList = generateDomains(pronoun, adj, noun);
console.log(domainList.join("\n"));
for (let i = 0; i < domainList.length; i++) {
  element.innerHTML += `<h1>${domainList[i]}</h1>`;
}
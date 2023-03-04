let pronoun = ['the','our',"home","citi"];
let adj = ['great', 'big',"baby","yes"];
let noun = ['jogger','racoon',"late","soc"];
let com = [".com",".org",".es",".al",".us",".it"];

let domainGenerator = (pronoun, adj, noun, com) => {
    let randomPronoun = pronoun[Math.floor(Math.random() * pronoun.length)];
    let randomAdj = adj[Math.floor(Math.random() * adj.length)];
    let randomNoun = noun[Math.floor(Math.random() * noun.length)];
    let randomCom = com[Math.floor(Math.random() * com.length)];
    
    let div = document.createElement("div");
    div.innerText = `
        ${randomPronoun}${randomAdj}${randomNoun}${randomCom}
    `;
    return div;
};



document.getElementById("prueba").addEventListener("click", function() {
    let newDomain = domainGenerator(pronoun, adj, noun, com);
    document.getElementById("prueba").innerHTML=""
    document.getElementById("prueba").appendChild(newDomain);
});


document.getElementById("lista").innerHTML = "";
for (let i = 0; i < pronoun.length; i++ ) {
  for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
          for (let l = 0; l < com.length; l++) {
              let newDomain = `${pronoun[i]}${adj[j]}${noun[k]}${com[l]}`;
              let div = document.createElement("div");
              div.innerText = newDomain;
              document.getElementById("lista").appendChild(div);
          };
      };
  };
};


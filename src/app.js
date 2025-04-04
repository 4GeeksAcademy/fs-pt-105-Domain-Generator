let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let tern = ['.com', '.es']
/*
for(let i=0;i<pronoun.length;i++){

  for(let j=0;j<adj.length;j++){

    for(let h=0;h<noun.length;h++){

      for(let g=0;g<tern.length;g++){
      console.log(pronoun[i]+adj[j]+noun[h]+tern[g])
      }
    }
  }
}*/
pronoun.forEach(i => {
  adj.forEach(j => {
    noun.forEach(h => {
      tern.forEach(g => {
        console.log(i + j + h + g)
      })
    })
  })
})
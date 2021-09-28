function random() {
    min = 0
    max = 10
    return Math.floor(Math.random() * (max - min));
}
let boletim = {
    name:"aluno",
    notaa: random(),
    notab: random(),
    notac: random(),
    notad: random(),
    mediafim: function() {
        return (this.notaa +this.notab +this.notac +this.notad)/4;
    }
};
boletim.notaa = 8
let media = boletim.mediafim();
console.log (`${media}`);

if(media >= 7){
    console.log ("Aluno Aprovado");
}else {
    console.log ("Situação: Aluno Reprovado");
}
console.log("____________________________");


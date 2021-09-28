

let boletim = {
    name:"aluno",
    notaa: 7,
    notab: 4,
    notac: 6,
    notad: 10,
    mediafim: function() {
       
        return (this.notaa +this.notab +this.notac +this.notad)/4;

    }
};
    boletim.mediafim();
    console.log (`${boletim.mediafim()}`);

    let mdf = parseFloat(boletim.mediafim)

if(mdf >= 7){
        console.log (" Aluno Aprovado");

}else if (mdf <= 6.75) {
    console.log ("Situação: Aluno Reprovado");
}
console.log("____________________________")



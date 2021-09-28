
function idade(dia, mes, ano){
    return new Date().getFullYear() - ano;
} 
    
console.log(idade(22, 2, 2003))
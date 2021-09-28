let dadinhu = 
{

    name: "dado RPG",
    lados: 12,
    paintPicture: function getRandomIntInclusive(min, max) {
      min = Math.ceil(1);
      max = Math.floor(12);
      return Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    },
    casas: function(){
      
      if (dadinhu.lados==5){
      console.log("batata")
    }
    else if(dadinhu.lados==1){
    console.log("lasanha")
    }

    }
    
};
dadinhu.paintPicture(); console.log (dadinhu.name) 
console.log ("QUANTIDADE DE LADOS É:"  +dadinhu.lados)
console.log(dadinhu.paintPicture())
console.log(dadinhu.casas())
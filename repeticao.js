const cliente = {
    nome : "joao",
    idade : 24,
    email : "joao@larissa.com", 
    telefone:["(41) 9999-0000", "(41)9999-0000  "]
};
    cliente.enderecos = [
{
    rua : "R. Joseth Climber", 
    numero : 1337 ,
    apartamento :true, 
    complemetnto :"Ap 934 ",
},  
 ];


for (let chave in cliente){
   let tipo = typeof cliente[chave];
   if (tipo !== "object" && tipo !== "function"){
   console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
   }
};

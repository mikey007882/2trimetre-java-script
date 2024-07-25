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

cliente.enderecos.push({
    rua:"R. Joseth Ladder ",
    numero: 404, 
    apartamento :false,
});

const listaApenasApartamentos = cliente.enderecos.filter (
    (endereco) => endereco.apartamento === true     
    
     );
     console.log(listaApenasApartamentos)
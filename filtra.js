const clientes = require ("./clientes.json");

function filtrarApartamentosemComplemento (clientes){
    return clientes.filtrar((clientes) => {
        return(
            cliente.endereco.apartamento &&
            cliente.endereco.hasOwnProperty("complemento")
            )
      });
}; 

const filtrados = filtrarApartamentosemComplemento(clientes);

console.log(filtrados)
const clientes = [
    "23478925M",
    "23098838L",
    "12874759C",
    "X2187473M",
    "Y2934485V",
];

const nieCliente = "X2187473M";

for (let i = 0; i < clientes.length; i++) {
    if(clientes[i] === nieCliente){
        console.log("Cliente enocontrado", nieCliente);
    }
}
const PUBLICAR$$ = document.querySelector("button");

const PRODUCTOS = [];

const crearProducto = () => {
    const crearProducto = () => {

        const nombre$$ = document.querySelector("#nombre");
        const imagen$$ = document.querySelector("#imagen");
        const precio$$ = document.querySelector("#precio");
        const tipo$$ = document.querySelector("#tipo");
    
        const newProducto = {
            nombre: nombre$$.value,
            imagen: imagen$$.value,
            precio: precio$$.value,
            tipo: tipo$$.value
        }
    
        PRODUCTOS.push(newProducto);
    
        console.log(PRODUCTOS);
    
    }
}

PUBLICAR$$.addEventListener("click", crearProducto);
class ProductManager{
    constructor(){
        this.products = [];
        this.id = 1;
    }
    //metodo1
    addProduct({title, description,price,thumbnail,code,stock}){
        const codeExist = this.products.find((producto) => producto.code === code)
        if(codeExist){
            console.error("Lo sentimos, pero el codigo que intenta ingresar ya esta siendo usado por otro producto");
            return null;
        }else if(!title || !description || !price || !thumbnail || !code || !stock){
            console.warn("Advertencia, Recuerde llenar todos los campos, pues son obligatorios!");
            return null;
        }
        
        const productoNuevo = {
            id: this.id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        //este tramo de codigo lo cree por las dudas si hiciera falta, con este codigo el cual utiliza 
        //el id inicializado el constructor y va sumandole 1 por cada elemento cargado...
        //...Dudo bastante de que sea necesario esto, pero nunca esta de mas
        const existeId = this.products.find((producto) => producto.id === productoNuevo.id)
        if(!existeId){
            this.products.push(productoNuevo);
            this.id++;
            return productoNuevo;
        }else{
            console.error("Ha ocurrido un error con el id de su producto (El id que quiere ingresar ya se encuentra en uso)")
            return null;
        }
        
    }
    //metodo2
    getProducts(){
        return this.products;
    }
    //metodo3
    getProductById(id){
        const producto = this.products.find((producto) => producto.id === id);
        if(producto){
            return producto;
        }else{
            console.error("El producto con el id que usted desea encontrar, no existe");
            return null;
        }
    }
}

//Creacion de product
const product = new ProductManager();
console.log(product);

//agregado de producto (metodo 1)
product.addProduct({
    title: 'remera',
    description: 'remera comun',
    price: 10,
    thumbnail: 'remera.jpg',
    code: 'abc123',
    stock: 50
});

product.addProduct({
    title: 'pantalon',
    description: 'pantalon comun',
    price: 12,
    thumbnail: 'pantalon.jpg',
    code: 'abc123',
    stock: 50
});

product.addProduct({
    title: 'camisa',
    description: 'camisa comun',
    price: null,
    thumbnail: 'camisa.jpg',
    code: 'cam123',
    stock: 50
});

product.addProduct({
    title: 'camisa',
    description: 'camisa comun',
    price: 15,
    thumbnail: 'camisa.jpg',
    code: 'cam123',
    stock: 50
});




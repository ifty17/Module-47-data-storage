// use local storage to manage data;
const addToDb = id =>{

    let shoppingCart = {};

    //Get the stored cart  
    const storedCart = localStorage.getItem("shopping-cart");
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }
    
    //add quantity
    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
        // localStorage.setItem(id, newQuantity);  
    }
    else{
        shoppingCart[id] = 1;
        // localStorage.setItem(id, 1)
    }
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));

}

export {addToDb};
//use PascalCase for things that generate objects

//A class is a object generator
class Cart{
    cartItems;//public property

    #localStoragekey;//private property

    constructor(localStoragekey) {
        this.#localStoragekey=localStoragekey;
        this.#loadFromStorage();

    }

    #loadFromStorage(){
        this.cartItems =JSON.parse(localStorage.getItem(this.#localStoragekey));
      
      if(!this.cartItems){
          this.cartItems=[{
            productId:
            'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
            quantity:2,
            deliveryOptionId:'1'
        },{
          productId:
          '15b6fc6f-327a-4ec4-896f-486349e85a3d',
          quantity:1,
          deliveryOptionId:'2'
        }];
        }
      }

      saveToStorage(){
        localStorage.setItem(this.#localStoragekey,JSON.stringify(this.cartItems));
      }

      addToCart(productId){
        let matchingItem;
              this.cartItems.forEach((cartitem)=>{
                if(productId===cartitem.productId){
                  matchingItem=cartitem;
                }
                
              });
              
    
              if(matchingItem){
                matchingItem.quantity+=1;
              }
              else{
                this.cartItems.push({
                  productId:productId,
                  quantity:1,
                  deliveryOptionId:'1'
                }); 
              }
              //to access the function inside our object
              this.saveToStorage();
      }
      
      removefromcart(productId){
        const newcart=[];
        this.cartItems.forEach((cartitem)=>{
          if(cartitem.productId !== productId){
            newcart.push(cartitem);
          }
        });
        this.saveToStorage();
        this.cartItems=newcart;
      }
      
      updateDeliveryOption(productId,deliveryOptionId){
        let matchingItem;
        this.cartItems.forEach((cartitem)=>{
          if(productId===cartitem.productId){
            matchingItem=cartitem;
          }
          });
          matchingItem.deliveryOptionId = deliveryOptionId;
          this.saveToStorage();
      }
    
}
    //return cart;
       //for update the deliveryOptionId of the product
const cart = new Cart('cart-oop');
const businesscart = new Cart('cart-business');

//cart.#localStoragekey='test';
//it is a model-saves and manages data
console.log(cart);

//it is a model-saves and manages data
console.log(businesscart);
console.log(businesscart instanceof Cart);
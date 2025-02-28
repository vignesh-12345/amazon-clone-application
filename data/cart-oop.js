function Cart(localStoragekey){
    const cart= {
        cartItems : undefined,
        
    loadFromStorage(){
        this.cartItems =JSON.parse(localStorage.getItem(localStoragekey));
      
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
      },
    
     saveToStorage(){
        localStorage.setItem(localStoragekey,JSON.stringify(this.cartItems));
      },
    
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
      },
      
      removefromcart(productId){
        const newcart=[];
        this.cartItems.forEach((cartitem)=>{
          if(cartitem.productId !== productId){
            newcart.push(cartitem);
          }
        });
        this.saveToStorage();
        this.cartItems=newcart;
      },
    
       //for update the deliveryOptionId of the product
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
    
    };
    return cart;
}

const cart=Cart('cart-oop');
const businesscart = Cart('businesscart');

//it is a model-saves and manages data
cart.loadFromStorage();
console.log(cart);

//it is a model-saves and manages data
businesscart.loadFromStorage();
businesscart.addToCart('3ebe75dc-64d2-4137-8860-1f5a963e534b');
console.log(businesscart);
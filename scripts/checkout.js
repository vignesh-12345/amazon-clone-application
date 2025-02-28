import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
//import '../data/cart-class.js';
//import '../data/backend-practice.js';

async function loadPage() {
    try{
        //throw 'error1';

        await loadProductsFetch();

    const value= await new Promise((resolve,reject)=>{
        //throw 'error2'
        loadCart(()=>{
            //reject('error3');//if we are creating the error asynchronously
            resolve('hoi');
        });
    });
    } catch(error){
        console.log('Unexpected error.Please try again later.');
    }

renderOrderSummary();
renderPaymentSummary();

    
}
loadPage()

/*
Promise.all([
    //it need a promises so write a function name
    loadProductsFetch(),
    new Promise((resolve)=>{
        loadCart(()=>{
            resolve('hoi');
    });
})
]).then((value)=>{
    console.log(value);
    renderOrderSummary();
    renderPaymentSummary();
});
*/
/*
//resolve is same like done function in jasmine
new Promise((resolve)=>{
    loadProducts(()=>{
        resolve('value1');
    });
}).then((value)=>{
    console.log(value);
    return new Promise((resolve)=>{
        loadCart(()=>{
            resolve();
    });
    });
}).then(()=>{
    renderOrderSummary();
    renderPaymentSummary();
})
    */

/*
loadProducts(()=>{
    loadCart(()=>{
        renderOrderSummary();
        renderPaymentSummary();
    });
});
*/
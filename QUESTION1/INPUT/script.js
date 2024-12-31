const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// A) add 'Meat' in the beginning of your shopping cart if it has not been already added
if(!shoppingCart.includes('Meat')){
    shoppingCart.unshift("Meat");
}

// B) add Sugar at the end of you shopping cart if it has not been already added
if(!shoppingCart.includes('Sugar')){
    shoppingCart.push('Sugar');
}

// C) remove 'Honey' if you are allergic to honey
if(shoppingCart.includes("Honey")){
    let index=shoppingCart.indexOf('Honey');
    if(index>-1){
        shoppingCart.splice(index,1);
    }
}

// D) modify Tea to 'Green Tea'
if(shoppingCart.includes('Tea')){
    let index=shoppingCart.indexOf('Tea');
    if(index>-1){
        shoppingCart[index]='Green Tea';
    }
}

console.log(shoppingCart);

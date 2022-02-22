import { ProductReducer } from '../interfaces/ProductInterfaces';

export const productsReducer: ProductReducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        const updatedAmount = state.totalAmount + action.item!.price * action.item!.amount;

        const existingProductItemIndex = state.items!.findIndex(item => item.id === action.item!.id)
        
        const exsistingProductItem = state.items![existingProductItemIndex];
        
        let updatedItems;

        if(exsistingProductItem) {
            const updatedItem = {
                ...exsistingProductItem,
                amount: exsistingProductItem.amount + action.item!.amount
            };
            updatedItems = [ ...state.items ];
            updatedItems[existingProductItemIndex] = updatedItem;
        } else {
            updatedItems = [ ...state.items ];
            updatedItems = state.items!.concat(action.item!)
        }

        localStorage.setItem('cart', JSON.stringify({
            items: updatedItems,
            totalAmount: updatedAmount,
        }));

        return {
            items: updatedItems,
            totalAmount: updatedAmount,
        }
    }

    if (action.type === 'REMOVE_ITEM') {
        
        const existingProductItemIndex = state.items.findIndex(item => item.id === action.id);
        
        const exsistingProductItem = state.items[existingProductItemIndex];
        const updatedAmount: number = state.totalAmount - exsistingProductItem.price;
        
        let updatedItems; 

        if(exsistingProductItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
            const updatedItem = {
                ...exsistingProductItem,
                amount: exsistingProductItem.amount - 1,
            };

            updatedItems = [ ...state.items ];
            updatedItems[existingProductItemIndex] = updatedItem; 
        } 

        localStorage.setItem('cart', JSON.stringify({
            items: updatedItems,
            totalAmount: updatedAmount,
        }));
        
        if (updatedItems.length === 0 ) localStorage.removeItem('cart');

        return {
            items: updatedItems,
            totalAmount: updatedAmount,
        }
    }

    if (action.type === 'RESET_ITEM') {
        localStorage.removeItem('cart');
        return {
            items: [],
            totalAmount: 0
        }
    }

    return state;
};
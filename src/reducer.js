export const initialState ={
    basket:[{
                id:"121212424",
                title:"Apple iphone 11 ",
                price:100000,
                rating:5,
                image:"http://pngimg.com/uploads/iphone_11/iphone_11_PNG33.png"
    }
],
basket:[],
user: null,
};

export const getBasketTotal = (basket) =>
basket?.reduce((amount,item)=> item.price+ amount,0);


const reducer = (state,action) => {     
    // action is command given here
    console.log(state);
    console.log(action);
    // For Reference for the below line https://redux.js.org/introduction/getting-started 
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            }
        case 'ADD_TO_BASKET':
            // logic for adding item to basket 
            return {
                ...state,
                basket:[...state.basket,action.item]
            };
        
        case 'REMOVE_FROM_BASKET':
            //logic for removing item from the basket
            // we cloned the basket 
            let newBasket =[...state.basket];
            const index = state.basket.findIndex((basketItem)=>basketItem.id===action.id);
            if(index>=0){
                // item exists in basket ,remove it 
                    newBasket.splice(index,1);
            }
            else{
                console.warn(
                    "can't remove product (id: ${action.id}) as its not in basket"
                );
            }
            return {...state ,basket:newBasket};
            
        default:
            return state;
    }
}

export default reducer;

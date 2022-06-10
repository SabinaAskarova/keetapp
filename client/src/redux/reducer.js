
const initialState={
    favcard: [],
    card: [
        {"id":'1', "author":'Suzanne Fişer',"bookname":'Eyni ulduzun altında',  "image":'https://images-na.ssl-images-amazon.com/images/I/81xflCoixwL.jpg'},
        {"id":'2', "author":' Xalid Hüseyni', "bookname":'Çərpələng Uçuran',"image":'https://www.bookzone.az/image/cache/data/kitab-sekilleri/cerpeleng-ucuran-450x640.jpg'},
        {"id":'3', "author":'Kristin Harmel ', "bookname":'İtirilmiş adlar',"image":'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1573742414l/52762903.jpg'},
        {"id":'4', "author":'Aqata Kristi', "bookname":'Masadakı kartlar',"image":'https://static.insales-cdn.com/images/products/1/5091/171070435/a07629ffb6512f48a64a064997374c58.jpg'},
        {"id":'5', "author":'Zigmund Freud', "bookname":'Totem və Tabu',"image":'https://images4.penguinrandomhouse.com/cover/9780394701240'}
      ]
}
function reducer(state=initialState,action){
  switch(action.type){
      case 'ADD_TO_CARD':
 const favcard=[...state.favcard,action.payload.post]
 return {...state,favcard} 



      default: return state
  }
}
export default reducer
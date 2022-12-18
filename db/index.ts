// the best opproach is to use a decreasing constant and find a function that the hase the limit towards that function when it huts in
// use a percentage value
const products: products = {
  "toner-rice": {
    title: "Toner Rice",
    price:  {
      "1":120,
      "[2,5]": 67,
      "[6,20]": 36,
      "21": 20.75
    },
    images: {
      main: "https://picsum.photos/600",
    },
    categorie: "toner",
    volume: "100ml",
  },
  "toner-safron-rose": {
    title: "Toner Safron & Rose",
    price: {
      "1":127.12,
      "[2,5]":75,
      "[6,20]": 43,
      "21": 27.25
    },
    images: {
      main: "https://picsum.photos/600",
    },
    categorie: "toner",
    volume: "100ml",
  },
  "ecran-solaire": {
    title: "Écran Solaire - 60FPS",
    price:{
      "1": 135,
      "[2,5]": 82.5,
      "[6,20]": 51,
      "21": 35.25
    },
    images: {
      main: "https://picsum.photos/600",
    },
    categorie: "créme",
    volume: "50g",
  },
  // "savon": {
  //     title: "savon",

  // }
};

interface products {
  [key: string]: Product;
}

export type Response<T> = {
  data: T | null,
  error: Error |null
}

interface api<T>{
  store: T;
  getbySlug: (slug: string) => Response<Product>;
  getIndex: () => Response<Array<{ title: string; image: string; price: number, slug:string}>>;
}

export interface Product {
  title: string;
  price: {[key:string]:number};
  volume: string;
  images: {
    main: string;
    others?: Array<string>;
  };
  categorie: string;
  slug?:string
}

const reviews = {};

const users = {};

const orders = {};

let productsApi: api<products> = {
  store: products,
  getbySlug: function (slug: string) {
    return products[slug] ? {data:{slug,...products[slug]}, error:null} : {data:null, error:new Error("Product not found")} ;
  },
  getIndex: function () {
    let indexData = Object.keys(this.store).map((key) => {
      return {
        title: this.store[key].title,
        price: this.store[key].price["1"],
        image: this.store[key].images.main,
        slug: key
      };
    });
    return {data: indexData, error:null}
    
    
    
  },
};

function getPrice(price: {[key:string]:number},qt:number){
  if(qt==1){
    return price["1"]
  }else if(qt>1&&qt<=5){
    return price["[2,5]"]
  }else if(qt>5&&qt<=20){
    return price["[6,20]"]
  }else if(qt>20){
    return price["21"]
  }else {
    return 0
  }
}

export {productsApi, getPrice};

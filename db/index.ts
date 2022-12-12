const products: products = {
  "toner-rice": {
    title: "Toner Rice",
    price: (qt: number) => {
      if (qt == 1) {
        return 120;
      } else if (qt > 1 && qt <= 5) {
        return 67;
      } else if (qt > 5 && qt <= 20) {
        return 36;
      } else if (qt > 20) {
        return 20.25;
      } else {
        return 0;
      }
    },
    images: {
      main: "https://picsum.photos/600",
    },
    categorie: "toner",
    volume: "100ml",
  },
  "toner-safron-rose": {
    title: "Toner Safron & Rose",
    price: (qt: number) => {
      if (qt == 1) {
        return 127.12;
      } else if (qt > 1 && qt <= 5) {
        return 75;
      } else if (qt > 5 && qt <= 20) {
        return 43;
      } else if (qt > 20) {
        return 27.25;
      } else {
        return 0;
      }
    },
    images: {
      main: "https://picsum.photos/600",
    },
    categorie: "toner",
    volume: "100ml",
  },
  "ecran-solaire": {
    title: "Écran Solaire - 60FPS",
    price: (qt: number) => {
      if (qt == 1) {
        return 135;
      } else if (qt > 1 && qt <= 5) {
        return 82.5;
      } else if (qt > 5 && qt <= 20) {
        return 51;
      } else if (qt > 20) {
        return 35.25;
      } else {
        return 0;
      }
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

interface api<T>{
  store: T;
  getbySlug: (slug: string) => Product | Error;
  getIndex: () => Array<{ title: string; image: string; price: number, slug:string}>;
}

export interface Product {
  title: string;
  price: (qt: number) => number;
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
    return products[slug] ? {slug,...products[slug]} : new Error("Product not found");
  },
  getIndex: function () {
    return Object.keys(this.store).map((key) => {
      return {
        title: this.store[key].title,
        price: this.store[key].price(1),
        image: this.store[key].images.main,
        slug: key
      };
    });
  },
};

export {productsApi};

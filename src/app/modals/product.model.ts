// Product Tag
export type ProductTags = 'nike' | 'puma' | 'lifestyle' | 'caprese';

// Product Colors
export type ProductColor = 'white' | 'black' | 'red' | 'green' | 'purple' | 'yellow' | 'blue' | 'gray' | 'orange' | 'pink';



export class Product {
  id?: number;
  name?: string;
  price?: number;
  type?: string;
  salePrice?: number;
  discount?: number;
  pictures?: string;
  state?: string;
  shortDetails?: string;
  description?: string;
  stock?: number;
  newPro?: boolean;
  brand?: string;
  sale?: boolean;
  category?: string;
  tags?: ProductTags[];
  colors?: ProductColor[];
  /**Custom**/
  author?: string;
  content?: string;
  title?: string;
  handle?: string;
  status?: string;
  sku?: string;
  sale_price?: string;
  stock_qty?: string;
  stock_availability?: string;
  image_url?: string;
  date_created?: string;
  date_modified?: string;
  data?:string;

  constructor(
    id?: number,
    name?: string,
    price?: number,
    salePrice?: number,
    discount?: number,
    pictures?: string,
    type?: string,
    shortDetails?: string,
    description?: string,
    stock?: number,
    state?: string,
    newPro?: boolean,
    brand?: string,
    sale?: boolean,
    category?: string,
    tags?: ProductTags[],
    colors?: ProductColor[],
    author?: string,
    content?: string,
    title?: string,
    handle?: string,
    status?: string,
    sku?: string,
    sale_price?: string,
    stock_qty?: string,
    stock_availability?: string,
    image_url?: string,
    date_created?: string,
    date_modified?: string,
    data?:string,
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.type = type;
    this.salePrice = salePrice;
    this.discount = discount;
    this.pictures = pictures;
    this.shortDetails = shortDetails;
    this.description = description;
    this.stock = stock;
    this.newPro = newPro;
    this.brand = brand;
    this.sale = sale;
    this.category = category;
    this.tags = tags;
    this.colors = colors;
    this.state = state;
    this.author = author;
    this.content = content;
    this.title = title;
    this.handle = handle;
    this.status = status;
    this.sku = sku;
    this.sale_price = sale_price;
    this.stock_qty = stock_qty;
    this.stock_availability = stock_availability;
    this.type = type;
    this.image_url = image_url;
    this.date_created = date_created;
    this.date_modified = date_modified;
    this.data=data;
  }

 }
  // Color Filter
  export interface ColorFilter {
    color?: ProductColor;
  }

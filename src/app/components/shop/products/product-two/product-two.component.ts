import { Component, OnChanges, Input, EventEmitter, Output, SimpleChanges } from '@angular/core';
import { CartService } from 'src/app/components/shared/services/cart.service';
import { ProductService } from 'src/app/components/shared/services/product.service';
import { WishlistService } from 'src/app/components/shared/services/wishlist.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Product } from 'src/app/modals/product.model';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';



@Component({
  selector: 'app-product-two',
  templateUrl: './product-two.component.html',
  styleUrls: ['./product-two.component.sass'],
  animations: [
    trigger('myAnimation', [
      state('small', style({height: '0px'})),
      state('large', style({minHeight: '100px'})),

      transition('small <=> large', animate('400ms ease-in'))
    ])
    ]
})

export class ProductTwoComponent implements OnChanges {
  @Output() onOpenProductDialog: EventEmitter<any> = new EventEmitter();
  @Input('product') product: Array<Product> = [];

  defaultFruits: Product[];

  @Input() products: Product[];

  uri: string = 'http://cocanasa.local/server';

  constructor(private wishlistService: WishlistService, private cartService: CartService, private dialog: MatDialog, private router: Router) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.products && changes.products.currentValue && changes.products.currentValue.length) {
      this.defaultFruits = this.products;
    }
  }
    // Add to cart
    public addToCart(product: Product,  quantity: number = 1) {
      console.log(product);
      this.cartService.addToCart(product,quantity);
    }

    public openProductDialog(product){
      let dialogRef = this.dialog.open(ProductDialogComponent, {
          data: {product},
          panelClass: 'product-dialog',
      });
      dialogRef.afterClosed().subscribe(product => {
        if(product){
          this.router.navigate(['/products', product.id, product.name]);
        }
      });
    }

    public filterProducts(predicate: string) {
     if(predicate === 'all') {
      this.products = this.defaultFruits.filter(item => item.type == 'food')
     } else {
      this.products = this.defaultFruits.filter(product => product.category === predicate);

     }

    }

       // Add to wishlist
   public addToWishlist(product: Product) {
    this.wishlistService.addToWishlist(product);
 }


 showMore = (product: Product) => product.state = product.state === 'small' ? 'large' : 'small';
}





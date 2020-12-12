import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { AppSettings } from './services/color-option.service'

import { FlexLayoutModule } from '@angular/flex-layout';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDividerModule} from '@angular/material/divider';
import {MatRadioModule} from '@angular/material/radio';
import {MatListModule} from '@angular/material/list';
import {MatSliderModule} from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { OrderByPipe } from './pipes/order-by.pipe';
import { ProductService } from './services/product.service';
import { CartService } from './services/cart.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BannersComponent } from './banners/banners.component';
import { HeaderTwoComponent } from './header-two/header-two.component';
import { ShoppingWidgetsComponent } from './shopping-widgets/shopping-widgets.component';
import { HeaderThreeComponent } from './header-three/header-three.component';
import { BannersFourComponent } from './banners-four/banners-four.component';
import { BlogSectionComponent } from './blog-section/blog-section.component';
import { BannerPromotionComponent } from './banner-promotion/banner-promotion.component';
import { HeaderFourComponent } from './header-four/header-four.component';
import { CategoriesMenuComponent } from './categories-menu/categories-menu.component';
import { CategoriesSectionComponent } from './categories-section/categories-section.component';
import { FooterTwoComponent } from './footer-two/footer-two.component';
import {MatBadgeModule} from '@angular/material/badge';
import { ShoppingWidgetsTwoComponent } from './shopping-widgets-two/shopping-widgets-two.component';
import { HeaderFiveComponent } from './header-five/header-five.component';
import { BlogSectionTwoComponent } from './blog-section-two/blog-section-two.component';
import { HeaderSixComponent } from './header-six/header-six.component';
import { ShoppingWidgetsThreeComponent } from './shopping-widgets-three/shopping-widgets-three.component';
import { HeaderSevenComponent } from './header-seven/header-seven.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    SidebarComponent,
    OrderByPipe,
    BannersComponent,
    HeaderTwoComponent,
    ShoppingWidgetsComponent,
    HeaderThreeComponent,
    BannersFourComponent,
    BlogSectionComponent,
    BannerPromotionComponent,
    HeaderFourComponent,
    CategoriesMenuComponent,
    CategoriesSectionComponent,
    FooterTwoComponent,
    ShoppingWidgetsTwoComponent,
    HeaderFiveComponent,
    BlogSectionTwoComponent,
    HeaderSixComponent,
    ShoppingWidgetsThreeComponent,
    HeaderSevenComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatListModule,
    MatSliderModule,
    MatExpansionModule,
    MatBadgeModule,
    MatMenuModule,
    MatTableModule,
    MatRadioModule,
    MatDialogModule,
    MatChipsModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule,
    MatSelectModule,
    MatTabsModule,
    MatDividerModule,
    MatCardModule,
    FlexLayoutModule,
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatListModule,
    MatExpansionModule,
    MatMenuModule,
    MatTableModule,
    MatSliderModule,
    MatRadioModule,
    MatDialogModule,
    MatChipsModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule,
    MatSelectModule,
    MatTabsModule,
    MatDividerModule,
    MatCardModule,
    OrderByPipe,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    SidebarComponent,
    BannersComponent,
    FlexLayoutModule,
    HeaderTwoComponent,
    HeaderThreeComponent,
    HeaderFourComponent,
    ShoppingWidgetsComponent,
    BannersFourComponent,
    BlogSectionComponent,
    BannerPromotionComponent,
    CategoriesMenuComponent,
    CategoriesSectionComponent,
    FooterTwoComponent,
    HeaderFiveComponent,
    HeaderSixComponent,
    ShoppingWidgetsThreeComponent,
    HeaderSevenComponent

  ],
  providers: [
    ProductService,
    CartService,
    AppSettings
  ]
})
export class SharedModule {}

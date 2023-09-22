import CoreMenu from '../components/CoreMenu';
import OfferSection from './OfferSection';
import PLPFooterMenu from './PLPFooterMenu';
import ProductGridItem from './ProductGridItem';
import ProductVariation from './ProductVariation';
import CartItems from './cart/CartItems';
import CartSummary from './cart/CartSummary';
import CouponApply from './cart/CouponApply';
import CustomHeaderNotice from './cart/CustomHeaderNotice';
import FooterCheckout from './cart/FooterCheckout';
import CustomProductList from './components/CustomProductList';

const blocks = [
  {
    name: 'appmaker/product-grid-item',
    View: ProductGridItem,
  },
  {
    name: 'sri-sri-tatva/custom-product-list',
    View: CustomProductList,
  },
  {
    name: 'appmaker/shopify-product-variation',
    View: ProductVariation,
  },
  {
    name: 'sri-sri-tatva/custom-offer-section',
    View: OfferSection,
  },
  {
    name: 'appmaker/core-drawer-menu',
    View: CoreMenu,
  },
  {
    name: 'sri-sri-tatva/PLPFooter',
    View: PLPFooterMenu,
  },
  {
    name: 'shopify/cart-line-item',
    View: CartItems,
  },
  {
    name: 'sri-sri-tatva/header-notice',
    View: CustomHeaderNotice,
  },
  {
    name: 'sri-sri-tatva/couponApply',
    View: CouponApply,
  },
  {
    name: 'sri-sri-tatva/cart-summary-table',
    View: CartSummary,
  },
  {
    name: 'sri-sri-tatva/cart-footer-checkout',
    View: FooterCheckout,
  },
];
export { blocks };

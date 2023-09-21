import CoreMenu from '../components/CoreMenu';
import CustomLogin from './CustomLogin';
import OfferSection from './OfferSection';
import ProductGridItem from './ProductGridItem';
import ProductVariation from './ProductVariation';

const blocks = [
  {
    name: 'appmaker/product-grid-item',
    View: ProductGridItem,
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
];
export { blocks };

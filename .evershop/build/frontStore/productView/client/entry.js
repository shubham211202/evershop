
      import React from 'react';
      import ReactDOM from 'react-dom';
      import { Area } from '@evershop/evershop/components/common';
      import {HydrateFrontStore} from '@evershop/evershop/components/common';
      
import e9ecf5ef8543fb207f1817d4796ae1884 from 'file:///root/my-evershop/node_modules/@evershop/evershop/dist/modules/catalog/pages/frontStore/all/SearchBox.js';
import e5a10fb64c08f346abdd372c73ce9480f from 'file:///root/my-evershop/node_modules/@evershop/evershop/dist/modules/catalog/pages/frontStore/productView/Attributes.js';
import e9e06ae0285632ae63b83ad9b0d26d190 from 'file:///root/my-evershop/node_modules/@evershop/evershop/dist/modules/catalog/pages/frontStore/productView/Description.js';
import e818c743cd8cfe8da4ea7444d6b4b5485 from 'file:///root/my-evershop/node_modules/@evershop/evershop/dist/modules/catalog/pages/frontStore/productView/Form.js';
import ef083e5f1360cbd737384e4e6999870d3 from 'file:///root/my-evershop/node_modules/@evershop/evershop/dist/modules/catalog/pages/frontStore/productView/GeneralInfo.js';
import e5acfde4077bbde7adcbd22f0747cdcf9 from 'file:///root/my-evershop/node_modules/@evershop/evershop/dist/modules/catalog/pages/frontStore/productView/Images.js';
import e741c0b5edab221f0a7d19da241d233dc from 'file:///root/my-evershop/node_modules/@evershop/evershop/dist/modules/catalog/pages/frontStore/productView/Layout.js';
import e16312a55a2f2d2053a5a8d8dcefb3b99 from 'file:///root/my-evershop/node_modules/@evershop/evershop/dist/modules/catalog/pages/frontStore/productView/Options.js';
import e110f441fce3118de5836180c5b30138c from 'file:///root/my-evershop/node_modules/@evershop/evershop/dist/modules/catalog/pages/frontStore/productView/Variants.js';
import e17602fc1069e0057bfd8ebcb2c75a6bd from 'file:///root/my-evershop/node_modules/@evershop/evershop/dist/modules/checkout/pages/frontStore/all/MiniCart.js';
import eb52408d2e7f153ee66cbe515c679520b from 'file:///root/my-evershop/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/Breadcrumb.js';
import ee4f06e0e9b0a702b40ab3d761e0305c1 from 'file:///root/my-evershop/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/Footer.js';
import ea14469e70a79392d6c86c8a22e53964a from 'file:///root/my-evershop/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/HeadTags.js';
import e9d94f064257cd97755d5f9920b570bfd from 'file:///root/my-evershop/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/Layout.js';
import e49357aa605ce93a8ce1206553d0a2b82 from 'file:///root/my-evershop/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/Logo.js';
import e80fd16c408e659500665291caff6892f from 'file:///root/my-evershop/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/Notification.js';
import e37d9c56ea2df2993de9c2ad6bef05044 from 'file:///root/my-evershop/node_modules/@evershop/evershop/dist/modules/customer/pages/frontStore/all/UserIcon.js';
import collection_products from 'file:///root/my-evershop/node_modules/@evershop/evershop/dist/components/frontStore/widgets/CollectionProducts.js';
import text_block from 'file:///root/my-evershop/node_modules/@evershop/evershop/dist/components/frontStore/widgets/TextBlock.js';
import basic_menu from 'file:///root/my-evershop/node_modules/@evershop/evershop/dist/components/frontStore/widgets/BasicMenu.js';
Area.defaultProps.components = {
  'icon-wrapper': {
    e9ecf5ef8543fb207f1817d4796ae1884: {
      id: 'e9ecf5ef8543fb207f1817d4796ae1884',
      sortOrder: 5,
      component: { default: e9ecf5ef8543fb207f1817d4796ae1884 }
    },
    e17602fc1069e0057bfd8ebcb2c75a6bd: {
      id: 'e17602fc1069e0057bfd8ebcb2c75a6bd',
      sortOrder: 10,
      component: { default: e17602fc1069e0057bfd8ebcb2c75a6bd }
    },
    e37d9c56ea2df2993de9c2ad6bef05044: {
      id: 'e37d9c56ea2df2993de9c2ad6bef05044',
      sortOrder: 30,
      component: { default: e37d9c56ea2df2993de9c2ad6bef05044 }
    }
  },
  productViewGeneralInfo: {
    e5a10fb64c08f346abdd372c73ce9480f: {
      id: 'e5a10fb64c08f346abdd372c73ce9480f',
      sortOrder: 25,
      component: { default: e5a10fb64c08f346abdd372c73ce9480f }
    }
  },
  productPageMiddleRight: {
    e9e06ae0285632ae63b83ad9b0d26d190: {
      id: 'e9e06ae0285632ae63b83ad9b0d26d190',
      sortOrder: 50,
      component: { default: e9e06ae0285632ae63b83ad9b0d26d190 }
    },
    e818c743cd8cfe8da4ea7444d6b4b5485: {
      id: 'e818c743cd8cfe8da4ea7444d6b4b5485',
      sortOrder: 45,
      component: { default: e818c743cd8cfe8da4ea7444d6b4b5485 }
    },
    ef083e5f1360cbd737384e4e6999870d3: {
      id: 'ef083e5f1360cbd737384e4e6999870d3',
      sortOrder: 10,
      component: { default: ef083e5f1360cbd737384e4e6999870d3 }
    },
    e16312a55a2f2d2053a5a8d8dcefb3b99: {
      id: 'e16312a55a2f2d2053a5a8d8dcefb3b99',
      sortOrder: 30,
      component: { default: e16312a55a2f2d2053a5a8d8dcefb3b99 }
    },
    e110f441fce3118de5836180c5b30138c: {
      id: 'e110f441fce3118de5836180c5b30138c',
      sortOrder: 35,
      component: { default: e110f441fce3118de5836180c5b30138c }
    }
  },
  productPageMiddleLeft: {
    e5acfde4077bbde7adcbd22f0747cdcf9: {
      id: 'e5acfde4077bbde7adcbd22f0747cdcf9',
      sortOrder: 10,
      component: { default: e5acfde4077bbde7adcbd22f0747cdcf9 }
    }
  },
  content: {
    e741c0b5edab221f0a7d19da241d233dc: {
      id: 'e741c0b5edab221f0a7d19da241d233dc',
      sortOrder: 10,
      component: { default: e741c0b5edab221f0a7d19da241d233dc }
    },
    eb52408d2e7f153ee66cbe515c679520b: {
      id: 'eb52408d2e7f153ee66cbe515c679520b',
      sortOrder: 0,
      component: { default: eb52408d2e7f153ee66cbe515c679520b }
    }
  },
  footer: {
    ee4f06e0e9b0a702b40ab3d761e0305c1: {
      id: 'ee4f06e0e9b0a702b40ab3d761e0305c1',
      sortOrder: 10,
      component: { default: ee4f06e0e9b0a702b40ab3d761e0305c1 }
    }
  },
  head: {
    ea14469e70a79392d6c86c8a22e53964a: {
      id: 'ea14469e70a79392d6c86c8a22e53964a',
      sortOrder: 5,
      component: { default: ea14469e70a79392d6c86c8a22e53964a }
    }
  },
  body: {
    e9d94f064257cd97755d5f9920b570bfd: {
      id: 'e9d94f064257cd97755d5f9920b570bfd',
      sortOrder: 1,
      component: { default: e9d94f064257cd97755d5f9920b570bfd }
    },
    e80fd16c408e659500665291caff6892f: {
      id: 'e80fd16c408e659500665291caff6892f',
      sortOrder: 10,
      component: { default: e80fd16c408e659500665291caff6892f }
    }
  },
  header: {
    e49357aa605ce93a8ce1206553d0a2b82: {
      id: 'e49357aa605ce93a8ce1206553d0a2b82',
      sortOrder: 10,
      component: { default: e49357aa605ce93a8ce1206553d0a2b82 }
    }
  },
  '*': {
    collection_products: {
      id: 'collection_products',
      sortOrder: 0,
      component: { default: collection_products }
    },
    text_block: {
      id: 'text_block',
      sortOrder: 0,
      component: { default: text_block }
    },
    basic_menu: {
      id: 'basic_menu',
      sortOrder: 0,
      component: { default: basic_menu }
    }
  }
} 
ReactDOM.hydrate(
        React.createElement(HydrateFrontStore, null),
        document.getElementById('app')
      );
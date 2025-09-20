
      import React from 'react';
      import ReactDOM from 'react-dom';
      import { Area } from '@evershop/evershop/components/common';
      import {HydrateFrontStore} from '@evershop/evershop/components/common';
      
import e9ecf5ef8543fb207f1817d4796ae1884 from 'file:///root/evershop/node_modules/@evershop/evershop/dist/modules/catalog/pages/frontStore/all/SearchBox.js';
import e561aafe401cc2c98492fdd605f475866 from 'file:///root/evershop/node_modules/@evershop/evershop/dist/modules/catalog/pages/frontStore/catalogSearch/General.js';
import e202221c03b01e01ada8d23218d06f234 from 'file:///root/evershop/node_modules/@evershop/evershop/dist/modules/catalog/pages/frontStore/catalogSearch/Pagination.js';
import e82487e645beb54b368342cd5af74b981 from 'file:///root/evershop/node_modules/@evershop/evershop/dist/modules/catalog/pages/frontStore/catalogSearch/Products.js';
import e92cd27723322ce2b1c645e73642659a8 from 'file:///root/evershop/node_modules/@evershop/evershop/dist/modules/catalog/pages/frontStore/catalogSearch/SearchPage.js';
import ee61d8b1e6f71998f490931d493e661c3 from 'file:///root/evershop/node_modules/@evershop/evershop/dist/modules/catalog/pages/frontStore/catalogSearch/Sorting.js';
import e17602fc1069e0057bfd8ebcb2c75a6bd from 'file:///root/evershop/node_modules/@evershop/evershop/dist/modules/checkout/pages/frontStore/all/MiniCart.js';
import eb52408d2e7f153ee66cbe515c679520b from 'file:///root/evershop/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/Breadcrumb.js';
import ee4f06e0e9b0a702b40ab3d761e0305c1 from 'file:///root/evershop/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/Footer.js';
import ea14469e70a79392d6c86c8a22e53964a from 'file:///root/evershop/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/HeadTags.js';
import e9d94f064257cd97755d5f9920b570bfd from 'file:///root/evershop/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/Layout.js';
import e49357aa605ce93a8ce1206553d0a2b82 from 'file:///root/evershop/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/Logo.js';
import e80fd16c408e659500665291caff6892f from 'file:///root/evershop/node_modules/@evershop/evershop/dist/modules/cms/pages/frontStore/all/Notification.js';
import e37d9c56ea2df2993de9c2ad6bef05044 from 'file:///root/evershop/node_modules/@evershop/evershop/dist/modules/customer/pages/frontStore/all/UserIcon.js';
import collection_products from 'file:///root/evershop/node_modules/@evershop/evershop/dist/components/frontStore/widgets/CollectionProducts.js';
import text_block from 'file:///root/evershop/node_modules/@evershop/evershop/dist/components/frontStore/widgets/TextBlock.js';
import basic_menu from 'file:///root/evershop/node_modules/@evershop/evershop/dist/components/frontStore/widgets/BasicMenu.js';
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
  content: {
    e561aafe401cc2c98492fdd605f475866: {
      id: 'e561aafe401cc2c98492fdd605f475866',
      sortOrder: 5,
      component: { default: e561aafe401cc2c98492fdd605f475866 }
    },
    e92cd27723322ce2b1c645e73642659a8: {
      id: 'e92cd27723322ce2b1c645e73642659a8',
      sortOrder: 10,
      component: { default: e92cd27723322ce2b1c645e73642659a8 }
    },
    eb52408d2e7f153ee66cbe515c679520b: {
      id: 'eb52408d2e7f153ee66cbe515c679520b',
      sortOrder: 0,
      component: { default: eb52408d2e7f153ee66cbe515c679520b }
    }
  },
  oneColumn: {
    e202221c03b01e01ada8d23218d06f234: {
      id: 'e202221c03b01e01ada8d23218d06f234',
      sortOrder: 30,
      component: { default: e202221c03b01e01ada8d23218d06f234 }
    },
    e82487e645beb54b368342cd5af74b981: {
      id: 'e82487e645beb54b368342cd5af74b981',
      sortOrder: 25,
      component: { default: e82487e645beb54b368342cd5af74b981 }
    },
    ee61d8b1e6f71998f490931d493e661c3: {
      id: 'ee61d8b1e6f71998f490931d493e661c3',
      sortOrder: 15,
      component: { default: ee61d8b1e6f71998f490931d493e661c3 }
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
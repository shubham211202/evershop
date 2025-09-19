
      import React from 'react';
      import ReactDOM from 'react-dom';
      import { Area } from '@evershop/evershop/components/common';
      import {HydrateAdmin} from '@evershop/evershop/components/common';
      
import e6a723cdb49007b615ca921b88358d1fd from 'file:///root/my-evershop/node_modules/@evershop/evershop/dist/modules/auth/pages/admin/all/AdminUser.js';
import e9202d651418814552c97bae86df6dc5b from 'file:///root/my-evershop/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/all/CatalogMenuGroup.js';
import e3bec23e73ac3b12e192ad9326de51821 from 'file:///root/my-evershop/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/all/NewProductQuickLink.js';
import ebc3345a9c50b598a55885445d34ffee8 from 'file:///root/my-evershop/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/collectionEdit/CollectionEditForm.js';
import e197120a9736db5d0bb476f05bbf4cad6 from 'file:///root/my-evershop/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/collectionEdit/Products.js';
import e62ef4036c0d5c6bb87f7fe2f931136af from 'file:///root/my-evershop/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/collectionEdit+collectionNew/FormContent.js';
import ec7eef5e0640b80765ce4e315b875b5a3 from 'file:///root/my-evershop/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/collectionEdit+collectionNew/General.js';
import e53837eda0efed769c7b273661c62a516 from 'file:///root/my-evershop/node_modules/@evershop/evershop/dist/modules/catalog/pages/admin/collectionEdit+collectionNew/PageHeading.js';
import ecaf43ef9df03dd8557befff3a4512a78 from 'file:///root/my-evershop/node_modules/@evershop/evershop/dist/modules/checkout/pages/admin/all/ShippingSettingMenu.js';
import e08adb36e9e7a6ac5c95e89be4b81c976 from 'file:///root/my-evershop/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/CmsMenuGroup.js';
import ecb243fe1c449deda7638a962fbbbcdf1 from 'file:///root/my-evershop/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/CopyRight.js';
import e6c795789c3a69c5e8b2140b5b76d8ee3 from 'file:///root/my-evershop/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Layout.js';
import e7b34f21ec0f8f129e3b85f2257ad7dff from 'file:///root/my-evershop/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Logo.js';
import e06db7484b59a0f7daba90a9fbe3a943a from 'file:///root/my-evershop/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Meta.js';
import eb01834606299fecea3af4b2d0687288d from 'file:///root/my-evershop/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Navigation.js';
import e6a8310377b3dd3e860ecded08f6a2c17 from 'file:///root/my-evershop/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Notification.js';
import e845545e146b7bc075776a87b83b88b27 from 'file:///root/my-evershop/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/QuickLinks.js';
import e0e5bfc93e951446531979129cb372d2d from 'file:///root/my-evershop/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/SearchBox.js';
import ece7702765b194d9d57d5a05634eb2dea from 'file:///root/my-evershop/node_modules/@evershop/evershop/dist/modules/cms/pages/admin/all/Version.js';
import ef89557c2007bf7630b05f952fa0ca3e8 from 'file:///root/my-evershop/node_modules/@evershop/evershop/dist/modules/customer/pages/admin/all/CustomerMenuGroup.js';
import e8036f3bbf44cfcca80826f6f535a90e1 from 'file:///root/my-evershop/node_modules/@evershop/evershop/dist/modules/oms/pages/admin/all/OmsMenuGroup.js';
import ed17eeecc0ca17205807b461b809823d2 from 'file:///root/my-evershop/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/all/CouponMenuGroup.js';
import e828c52bf4253e43d4455b3037eada48f from 'file:///root/my-evershop/node_modules/@evershop/evershop/dist/modules/promotion/pages/admin/all/NewCouponQuickLink.js';
import ee4aa72132c12ca518660b07b63e22fbf from 'file:///root/my-evershop/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/PaymentSettingMenu.js';
import e57bd040215c79dfa89505b9a567ccd86 from 'file:///root/my-evershop/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/SettingMenuGroup.js';
import ed970bcb9b203fa65d6ebbf547761d6b7 from 'file:///root/my-evershop/node_modules/@evershop/evershop/dist/modules/setting/pages/admin/all/StoreSettingMenu.js';
import e6a0becdf62c3dea9cf6374241043ef7a from 'file:///root/my-evershop/node_modules/@evershop/evershop/dist/modules/tax/pages/admin/all/TaxSettingMenu.js';
import collection_products from 'file:///root/my-evershop/node_modules/@evershop/evershop/dist/components/admin/widgets/CollectionProductsSetting.js';
import text_block from 'file:///root/my-evershop/node_modules/@evershop/evershop/dist/components/admin/widgets/TextBlockSetting.js';
import basic_menu from 'file:///root/my-evershop/node_modules/@evershop/evershop/dist/components/admin/widgets/BasicMenuSetting.js';
Area.defaultProps.components = {
  header: {
    e6a723cdb49007b615ca921b88358d1fd: {
      id: 'e6a723cdb49007b615ca921b88358d1fd',
      sortOrder: 50,
      component: { default: e6a723cdb49007b615ca921b88358d1fd }
    },
    e7b34f21ec0f8f129e3b85f2257ad7dff: {
      id: 'e7b34f21ec0f8f129e3b85f2257ad7dff',
      sortOrder: 10,
      component: { default: e7b34f21ec0f8f129e3b85f2257ad7dff }
    },
    e0e5bfc93e951446531979129cb372d2d: {
      id: 'e0e5bfc93e951446531979129cb372d2d',
      sortOrder: 20,
      component: { default: e0e5bfc93e951446531979129cb372d2d }
    }
  },
  adminMenu: {
    e9202d651418814552c97bae86df6dc5b: {
      id: 'e9202d651418814552c97bae86df6dc5b',
      sortOrder: 20,
      component: { default: e9202d651418814552c97bae86df6dc5b }
    },
    e08adb36e9e7a6ac5c95e89be4b81c976: {
      id: 'e08adb36e9e7a6ac5c95e89be4b81c976',
      sortOrder: 60,
      component: { default: e08adb36e9e7a6ac5c95e89be4b81c976 }
    },
    e845545e146b7bc075776a87b83b88b27: {
      id: 'e845545e146b7bc075776a87b83b88b27',
      sortOrder: 10,
      component: { default: e845545e146b7bc075776a87b83b88b27 }
    },
    ef89557c2007bf7630b05f952fa0ca3e8: {
      id: 'ef89557c2007bf7630b05f952fa0ca3e8',
      sortOrder: 40,
      component: { default: ef89557c2007bf7630b05f952fa0ca3e8 }
    },
    e8036f3bbf44cfcca80826f6f535a90e1: {
      id: 'e8036f3bbf44cfcca80826f6f535a90e1',
      sortOrder: 30,
      component: { default: e8036f3bbf44cfcca80826f6f535a90e1 }
    },
    ed17eeecc0ca17205807b461b809823d2: {
      id: 'ed17eeecc0ca17205807b461b809823d2',
      sortOrder: 50,
      component: { default: ed17eeecc0ca17205807b461b809823d2 }
    },
    e57bd040215c79dfa89505b9a567ccd86: {
      id: 'e57bd040215c79dfa89505b9a567ccd86',
      sortOrder: 500,
      component: { default: e57bd040215c79dfa89505b9a567ccd86 }
    }
  },
  quickLinks: {
    e3bec23e73ac3b12e192ad9326de51821: {
      id: 'e3bec23e73ac3b12e192ad9326de51821',
      sortOrder: 20,
      component: { default: e3bec23e73ac3b12e192ad9326de51821 }
    },
    e828c52bf4253e43d4455b3037eada48f: {
      id: 'e828c52bf4253e43d4455b3037eada48f',
      sortOrder: 30,
      component: { default: e828c52bf4253e43d4455b3037eada48f }
    }
  },
  content: {
    ebc3345a9c50b598a55885445d34ffee8: {
      id: 'ebc3345a9c50b598a55885445d34ffee8',
      sortOrder: 10,
      component: { default: ebc3345a9c50b598a55885445d34ffee8 }
    },
    e53837eda0efed769c7b273661c62a516: {
      id: 'e53837eda0efed769c7b273661c62a516',
      sortOrder: 5,
      component: { default: e53837eda0efed769c7b273661c62a516 }
    }
  },
  collectionFormInner: {
    e197120a9736db5d0bb476f05bbf4cad6: {
      id: 'e197120a9736db5d0bb476f05bbf4cad6',
      sortOrder: 20,
      component: { default: e197120a9736db5d0bb476f05bbf4cad6 }
    },
    ec7eef5e0640b80765ce4e315b875b5a3: {
      id: 'ec7eef5e0640b80765ce4e315b875b5a3',
      sortOrder: 10,
      component: { default: ec7eef5e0640b80765ce4e315b875b5a3 }
    }
  },
  collectionForm: {
    e62ef4036c0d5c6bb87f7fe2f931136af: {
      id: 'e62ef4036c0d5c6bb87f7fe2f931136af',
      sortOrder: 10,
      component: { default: e62ef4036c0d5c6bb87f7fe2f931136af }
    }
  },
  settingPageMenu: {
    ecaf43ef9df03dd8557befff3a4512a78: {
      id: 'ecaf43ef9df03dd8557befff3a4512a78',
      sortOrder: 15,
      component: { default: ecaf43ef9df03dd8557befff3a4512a78 }
    },
    ee4aa72132c12ca518660b07b63e22fbf: {
      id: 'ee4aa72132c12ca518660b07b63e22fbf',
      sortOrder: 10,
      component: { default: ee4aa72132c12ca518660b07b63e22fbf }
    },
    ed970bcb9b203fa65d6ebbf547761d6b7: {
      id: 'ed970bcb9b203fa65d6ebbf547761d6b7',
      sortOrder: 5,
      component: { default: ed970bcb9b203fa65d6ebbf547761d6b7 }
    },
    e6a0becdf62c3dea9cf6374241043ef7a: {
      id: 'e6a0becdf62c3dea9cf6374241043ef7a',
      sortOrder: 20,
      component: { default: e6a0becdf62c3dea9cf6374241043ef7a }
    }
  },
  footerLeft: {
    ecb243fe1c449deda7638a962fbbbcdf1: {
      id: 'ecb243fe1c449deda7638a962fbbbcdf1',
      sortOrder: 10,
      component: { default: ecb243fe1c449deda7638a962fbbbcdf1 }
    },
    ece7702765b194d9d57d5a05634eb2dea: {
      id: 'ece7702765b194d9d57d5a05634eb2dea',
      sortOrder: 20,
      component: { default: ece7702765b194d9d57d5a05634eb2dea }
    }
  },
  body: {
    e6c795789c3a69c5e8b2140b5b76d8ee3: {
      id: 'e6c795789c3a69c5e8b2140b5b76d8ee3',
      sortOrder: 10,
      component: { default: e6c795789c3a69c5e8b2140b5b76d8ee3 }
    },
    e6a8310377b3dd3e860ecded08f6a2c17: {
      id: 'e6a8310377b3dd3e860ecded08f6a2c17',
      sortOrder: 10,
      component: { default: e6a8310377b3dd3e860ecded08f6a2c17 }
    }
  },
  head: {
    e06db7484b59a0f7daba90a9fbe3a943a: {
      id: 'e06db7484b59a0f7daba90a9fbe3a943a',
      sortOrder: 5,
      component: { default: e06db7484b59a0f7daba90a9fbe3a943a }
    }
  },
  adminNavigation: {
    eb01834606299fecea3af4b2d0687288d: {
      id: 'eb01834606299fecea3af4b2d0687288d',
      sortOrder: 10,
      component: { default: eb01834606299fecea3af4b2d0687288d }
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
        React.createElement(HydrateAdmin, null),
        document.getElementById('app')
      );
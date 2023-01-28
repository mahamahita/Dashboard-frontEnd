import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Acceuil',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
  },
  {
    title: 'MAIN',
    group: true,
  },
  {
    title: 'Clients',
    icon: 'person-outline',
    children: [
      {
        title: 'Liste des Clients',
         icon: 'list-outline',
        link: '/pages/customers/principale',
      }, {
                title: 'Ajout Client',
                icon: 'plus-outline',
                link: '/pages/customers/save',
              },
              {
                title: 'Modification Client',
                icon: 'edit-outline',
                link: '/pages/customers/update/:id',
              },
             ],
  },
  {
    title: 'Produits',
    icon: 'shopping-bag-outline',
    children: [
      {
        title: 'Liste des produits',
        icon: 'list-outline',
        link: '/pages/products/list',
      }, {
                title: 'Ajout Produit',
                icon: 'plus-outline',
                link: '/pages/products/create',
              },
              {
                title: 'Modification Produit',
                icon: 'edit-outline',
                link: '/pages/products/update/:id',
              },
              ],
  },
  {
    title: 'Factures',
    icon: 'layout-outline',
    children: [
      {
        title: 'Liste des Factures',
        icon: 'list-outline',
        link: '/pages/invoice/principale',
      },
      {
        title: 'Ajout Facture',
        icon: 'plus-outline',
        link: '/pages/invoice/create-invoice',
      },
      {
        title: 'Modification Facture',
        icon: 'edit-outline',
        link: '/pages/invoice/update-invoice/:id',
      },
      {
        title: 'Details Facture',
        icon: 'eye-outline',
        link: '/pages/invoice/detail-invoice/:id',
      },
    ],
  },

];

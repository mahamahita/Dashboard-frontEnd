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
    title: 'Consommateurs',
    icon: 'person-outline',
    children: [
      {
        title: 'principale',
        link: '/pages/customers/principale',
      }],
  },
  {
    title: 'Produits',
    icon: 'shopping-bag-outline',
    children: [
      {
        title: 'principale',
        link: '/pages/products/principale',
      }],
  },
  {
    title: 'Factures',
    icon: 'layout-outline',
    children: [
      {
        title: 'Principale',
        link: '/pages/invoice/principale',
      },
      {
        title: 'create-invoice',
        link: '/pages/invoice/create-invoice',
      },
      {
        title: 'update-invoice',
        link: '/pages/invoice/update-invoice/:id',
      },
      {
        title: 'detail-invoice',
        link: '/pages/invoice/detail-invoice/:id',
      },
    ],
  },
  {
    title: 'Outils',
    icon: 'settings',
    children: [
      {
        title: 'reglage',
        link: '/pages/tools/principale',
      }],
  },








  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];

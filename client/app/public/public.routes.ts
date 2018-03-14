export const PUBLIC_ROUTES = [
  {
    path: '',
    loadChildren: 'app/public/home-page/home-page.module#HomePageModule'
  },
  {
    path: 'account',
    loadChildren: 'app/public/accounting/accounting.module#AccountingModule'
  }
];

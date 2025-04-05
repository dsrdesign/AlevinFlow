import { INavbarData } from './helper';

export const navbarData: INavbarData[] = [
  {
    routeLink: '/dashboard',
    icon: 'fal fa-home',
    label: 'Dashboard',
  },
  {
    routeLink: 'products',
    icon: 'fal fa-box-open',
    label: 'Produits',
    items: [
      {
        routeLink: 'products/aliments',
        label: 'Aliments',
        items: [
          {
            routeLink: '/products/aliments/add',
            label: 'Ajouter un aliment',
          },
          {
            routeLink: '/products/aliments/list',
            label: 'Liste des aliments',
          }
        ],
      },
      {
        routeLink: 'products/geniteurs',
        label: 'Géniteurs',
        items: [
          {
            routeLink: '/products/geniteurs/add',
            label: 'Ajouter un géniteur',
          },
          {
            routeLink: '/products/geniteurs/list',
            label: 'Liste des géniteurs',
          }
        ],
      },
      {
        routeLink: 'products/calibres',
        label: 'Calibres',
        items: [
          {
            routeLink: '/products/calibres/add',
            label: 'Ajouter un calibre',
          },
          {
            routeLink: '/products/calibres/list',
            label: 'Liste des calibres',
          }
        ],
      },
    ],
  },
  {
    routeLink: 'productions',
    icon: 'fal fa-fish',
    label: 'Productions',
    items: [
      {
        routeLink: '/productions/cycles',
        label: 'Cycles',
        items: [
          {
            routeLink: '/productions/cycles/add',
            label: 'Ajouter un cycle',
          },
          {
            routeLink: '/productions/cycles/list',
            label: 'Liste des cycles',
          }
        ],
      },
      {
        routeLink: '/productions/eclosions',
        label: 'Eclosions',
        items: [
          {
            routeLink: '/productions/eclosions/add',
            label: 'Ajouter une éclosion',
          },
          {
            routeLink: '/productions/eclosions/list',
            label: 'Liste des éclosions',
          }
        ],
      },
      {
        routeLink: 'productions/fecondations',
        label: 'Fécondations',
        items: [
          {
            routeLink: '/productions/fecondations/add',
            label: 'Ajouter une fécondations',
          },
          {
            routeLink: '/productions/fecondations/list',
            label: 'Liste des fécondations',
          }
        ],
      }
    ],
  },
  {
    routeLink: 'calibrages',
    icon: 'fal fa-tag',
    label: 'Calibrages',
    items: [
      {
        routeLink: '/calibrages/add',
        label: 'Ajouter un calibrage',
      },
      {
        routeLink: '/calibrages/list',
        label: 'Liste de Calibrage',
      }
    ],
  },
  {
    routeLink: 'nutritions',
    icon: 'fal fa-cookie',
    label: 'Nutritions',
    items: [
      {
        routeLink: '/nutritions/add',
        label: 'Ajouter une nutrition',
      },
      {
        routeLink: '/nutritions/list',
        label: 'Liste des nutritions',
      },
    ],
  },
  {
    routeLink: '/deces',
    icon: 'fal fa-building',
    label: 'Décès',
    items: [
      {
        routeLink: '/deces/add',
        label: 'Ajuter un décès',
      },
      {
        routeLink: '/deces/list',
        label: 'Liste des décès',
      },
    ],
  },
  {
    routeLink: 'trading',
    icon: 'fal fa-sack-dollar',
    label: 'Commerces',
    items: [
      {
        routeLink: 'trading/sales',
        label: 'Ventes',
        items: [
          {
            routeLink: '/trading/sales/add',
            label: 'Ajouter une vente',
          },
          {
            routeLink: '/trading/sales/list',
            label: 'Liste des ventes',
          }
        ],
      },
      {
        routeLink: 'trading/purchase',
        label: 'Achats',
        items: [
          {
            routeLink: '/trading/purchases/add',
            label: 'Ajouter un achat',
          },
          {
            routeLink: '/trading/purchases/list',
            label: 'Liste des achats',
          }
        ],
      }
    ],
  },
  {
    routeLink: 'authors',
    icon: 'fal fa-users',
    label: 'Acteurs',
    items: [
      {
        routeLink: '/authors/suppliers',
        label: 'Fournisseurs',
        items: [
          {
            routeLink: '/authors/suppliers/add',
            label: 'Ajouter un fournisseur',
          },
          {
            routeLink: '/authors/suppliers/list',
            label: 'Liste des fournisseurs',
          }
        ],
      },
      {
        routeLink: '/authors/customers',
        label: 'Clients',
        items: [
          {
            routeLink: '/authors/customers/add',
            label: 'Ajouter un client',
          },
          {
            routeLink: '/authors/customers/list',
            label: 'Liste des clients',
          }
        ],
      }
    ],
  },
  {
    routeLink: 'users',
    icon: 'fal fa-user',
    label: 'Utilisateurs',
    items: [
      {
        routeLink: '/users/add',
        label: 'Ajouter un utilisateur',
      },
      {
        routeLink: '/users/list',
        label: 'Liste des utilisateurs',
      },
    ],
  },
  {
    routeLink: 'roles',
    icon: 'fal fa-user',
    label: 'Roles',
    items: [
      {
        routeLink: '/roles/add',
        label: 'Ajouter un role',
      },
      {
        routeLink: '/roles/list',
        label: 'Liste des roles',
      },
    ],
  },
  {
    routeLink: 'report',
    icon: 'fal fa-inventory',
    label: 'Reports',
    items: [
      {
        routeLink: '/report/salereport',
        label: 'Sales Report',
      },
      {
        routeLink: '/report/purchasereport',
        label: 'Purchase Report',
      },
      {
        routeLink: '/report/paymentreport',
        label: 'Payment Report',
      },
      {
        routeLink: '/report/productreport',
        label: 'Product Report',
      },
      {
        routeLink: '/report/stockreport',
        label: 'Stock Report',
      },
      {
        routeLink: '/report/expensereport',
        label: 'Expense Report',
      },
      {
        routeLink: '/report/userreport',
        label: 'User Report',
      },
      {
        routeLink: '/report/customerreport',
        label: 'Customer Report',
      },
      {
        routeLink: '/report/warehousereport',
        label: 'Warehouse Report',
      },
      {
        routeLink: '/report/supplierreport',
        label: 'Supplier Report',
      },
      {
        routeLink: '/report/discountreport',
        label: 'Discount Report',
      },
      {
        routeLink: '/report/taxreport',
        label: 'Tax Report',
      },
      {
        routeLink: '/report/shippingchargereport',
        label: 'Shipping Charge',
      }
    ],
  },
  {
    routeLink: '/rolepermission',
    icon: 'fal fa-cog',
    label: 'Outils Administratifs',
  },
];

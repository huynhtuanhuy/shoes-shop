import React from 'react';

const Toaster = React.lazy(() => import('./components/notifications/toaster/Toaster'));
const Tables = React.lazy(() => import('./components/base/tables/Tables'));

const Breadcrumbs = React.lazy(() => import('./components/base/breadcrumbs/Breadcrumbs'));
const Cards = React.lazy(() => import('./components/base/cards/Cards'));
const Carousels = React.lazy(() => import('./components/base/carousels/Carousels'));
const Collapses = React.lazy(() => import('./components/base/collapses/Collapses'));
const BasicForms = React.lazy(() => import('./components/base/forms/BasicForms'));

const Jumbotrons = React.lazy(() => import('./components/base/jumbotrons/Jumbotrons'));
const ListGroups = React.lazy(() => import('./components/base/list-groups/ListGroups'));
const Navbars = React.lazy(() => import('./components/base/navbars/Navbars'));
const Navs = React.lazy(() => import('./components/base/navs/Navs'));
const Paginations = React.lazy(() => import('./components/base/paginations/Pagnations'));
const Popovers = React.lazy(() => import('./components/base/popovers/Popovers'));
const ProgressBar = React.lazy(() => import('./components/base/progress-bar/ProgressBar'));
const Switches = React.lazy(() => import('./components/base/switches/Switches'));

const Tabs = React.lazy(() => import('./components/base/tabs/Tabs'));
const Tooltips = React.lazy(() => import('./components/base/tooltips/Tooltips'));
const BrandButtons = React.lazy(() => import('./components/buttons/brand-buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./components/buttons/button-dropdowns/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./components/buttons/button-groups/ButtonGroups'));
const Buttons = React.lazy(() => import('./components/buttons/buttons/Buttons'));
const Charts = React.lazy(() => import('./components/charts/Charts'));
const CoreUIIcons = React.lazy(() => import('./components/icons/coreui-icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./components/icons/flags/Flags'));
const Brands = React.lazy(() => import('./components/icons/brands/Brands'));
const Alerts = React.lazy(() => import('./components/notifications/alerts/Alerts'));
const Badges = React.lazy(() => import('./components/notifications/badges/Badges'));
const Modals = React.lazy(() => import('./components/notifications/modals/Modals'));
const ThemeColors = React.lazy(() => import('./components/theme/colors/Colors'));
const Typography = React.lazy(() => import('./components/theme/typography/Typography'));
const Widgets = React.lazy(() => import('./components/widgets/Widgets'));
const User = React.lazy(() => import('./components/users/User'));

const EditColors = React.lazy(() => import('./pages/colors/EditColors'));
const NewColors = React.lazy(() => import('./pages/colors/NewColors'));
const Colors = React.lazy(() => import('./pages/colors/Colors'));
const EditSizes = React.lazy(() => import('./pages/sizes/EditSizes'));
const NewSizes = React.lazy(() => import('./pages/sizes/NewSizes'));
const Sizes = React.lazy(() => import('./pages/sizes/Sizes'));
const EditUsers = React.lazy(() => import('./pages/users/EditUsers'));
const NewUsers = React.lazy(() => import('./pages/users/NewUsers'));
const Users = React.lazy(() => import('./pages/users/Users'));
const EditProducts = React.lazy(() => import('./pages/products/EditProducts'));
const NewProducts = React.lazy(() => import('./pages/products/NewProducts'));
const Products = React.lazy(() => import('./pages/products/Products'));
const EditProductSales = React.lazy(() => import('./pages/product-sales/EditProductSales'));
const NewProductSales = React.lazy(() => import('./pages/product-sales/NewProductSales'));
const ProductSales = React.lazy(() => import('./pages/product-sales/ProductSales'));
const ProductCategories = React.lazy(() => import('./pages/product-categories/ProductCategories'));
const NewProductCategories = React.lazy(() => import('./pages/product-categories/NewProductCategories'));
const EditProductCategories = React.lazy(() => import('./pages/product-categories/EditProductCategories'));
const EditOrders = React.lazy(() => import('./pages/orders/EditOrders'));
const CreateOrders = React.lazy(() => import('./pages/orders/CreateOrders'));
const Orders = React.lazy(() => import('./pages/orders/Orders'));
const Dashboard = React.lazy(() => import('./pages/dashboard/Dashboard'));
const Statistics = React.lazy(() => import('./pages/statistics/Statistics'));

const routes = [
  { path: '/', exact: true, name: 'Trang ch???' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/statistics', name: 'Th???ng k??', component: Statistics },
  
  { path: '/products/:id/edit', exact: true,  name: 'Ch???nh s???a', component: EditProducts },
  { path: '/products/new', exact: true,  name: 'T???o m???i', component: NewProducts },
  { path: '/products', exact: true,  name: 'Qu???n l?? s???n ph???m', component: Products },

  { path: '/product-sales/:id/edit', exact: true,  name: 'Ch???nh s???a', component: EditProductSales },
  { path: '/product-sales/new', exact: true,  name: 'T???o m???i', component: NewProductSales },
  { path: '/product-sales', exact: true,  name: 'Qu???n l?? khuy???n m??i', component: ProductSales },

  { path: '/product-categories/:id/edit', exact: true,  name: 'Ch???nh s???a', component: EditProductCategories },
  { path: '/product-categories/new', exact: true,  name: 'T???o m???i', component: NewProductCategories },
  { path: '/product-categories', exact: true,  name: 'Danh m???c s???n ph???m', component: ProductCategories },

  { path: '/colors/:id/edit', exact: true,  name: 'Ch???nh s???a', component: EditColors },
  { path: '/colors/new', exact: true,  name: 'T???o m???i', component: NewColors },
  { path: '/colors', exact: true,  name: 'Qu???n l?? m??u s???c', component: Colors },

  { path: '/sizes/:id/edit', exact: true,  name: 'Ch???nh s???a', component: EditSizes },
  { path: '/sizes/new', exact: true,  name: 'T???o m???i', component: NewSizes },
  { path: '/sizes', exact: true,  name: 'Qu???n l?? k??ch c???', component: Sizes },

  { path: '/orders/new', exact: true,  name: 'T???o m???i', component: CreateOrders },
  { path: '/orders/:id/edit', exact: true,  name: 'Ch???nh s???a', component: EditOrders },
  { path: '/orders', exact: true,  name: 'Qu???n l?? ????n h??ng', component: Orders },
  
  { path: '/users/:id/edit', exact: true,  name: 'Ch???nh s???a', component: EditUsers },
  { path: '/users/new', exact: true,  name: 'T???o m???i', component: NewUsers },
  { path: '/users', exact: true,  name: 'Qu???n l?? kh??ch h??ng', component: Users },

  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: ThemeColors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', name: 'Base', component: Cards, exact: true },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/forms', name: 'Forms', component: BasicForms },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toaster', name: 'Toaster', component: Toaster },
  { path: '/widgets', name: 'Widgets', component: Widgets }
];

export default routes;

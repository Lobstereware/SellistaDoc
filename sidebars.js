// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: [
        'introduction/welcome',
        'introduction/overview-of-sellista-features',
        'introduction/getting-started',
      ],
    },
    {
      type: 'category',
      label: 'Dashboard Overview',
      items: [
        'dashboard-overview/reports',
        'dashboard-overview/sales-data',
        'dashboard-overview/latest-orders',
        'dashboard-overview/customer-segmentation',
      ],
    },
    {
      type: 'category',
      label: 'Shop Management',
      items: [
        'shop-management/home',
        'shop-management/adding-products',
        'shop-management/managing-orders',
        'shop-management/invoices',
        'shop-management/shipping',
        'shop-management/reviews',
        'shop-management/returns',
      ],
    },
    {
      type: 'category',
      label: 'Sales Channels',
      items: [
        'sales-channels/websites',
        'sales-channels/website-settings',
      ],
    },
    /* {
      type: 'category',
      label: 'Media Files',
      items: [
        'media-files/uploading-media-files',
        'media-files/managing-media-files',
      ],
    }, */
    /* {
      type: 'category',
      label: 'Analytics',
      items: [
        'analytics/viewing-reports',
        'analytics/exporting-data',
      ],
    }, */
   /*  {
      type: 'category',
      label: 'Orders & Invoices',
      items: [
        'orders-invoices/managing-orders',
        'orders-invoices/generating-invoices',
      ],
    }, */
    {
      type: 'category',
      label: 'User Settings',
      items: [
        'user-settings/editing-profile',
        'user-settings/managing-security-settings',
        'user-settings/subscription-and-billing',
        'user-settings/deleting-profile',
        'user-settings/public-api',
        'user-settings/preferences',
        'user-settings/groups-and-permissions',
      ],
    },
  /*   {
      type: 'category',
      label: 'Notifications',
      items: [
        'notifications/overview',
      ],
    }, */
  ],
};

export default sidebars;
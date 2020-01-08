export default {
    items: [
      {
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'icon-speedometer'
      },
      {
        name: 'Academics',
        url: '/base',
        icon: 'icon-puzzle',
        children: [
          {
            name: 'AcademicYears',
            url: '/base/breadcrumbs',
            icon: 'icon-puzzle',
          },
          {
            name: 'Departments',
            url: '/base/cards',
            icon: 'icon-puzzle',
          },
          {
            name: 'Courses',
            url: '/base/carousels',
            icon: 'icon-puzzle',
          },
          {
            name: 'Batches',
            url: '/base/collapses',
            icon: 'icon-puzzle',
          },
          {
            name: 'IDCards',
            url: '/base/dropdowns',
            icon: 'icon-puzzle',
          },
          {
            name: 'Certificates',
            url: '/base/forms',
            icon: 'icon-puzzle',
          }
        ],
      },
      {
        name: 'Finance',
        url: '/buttons',
        icon: 'icon-cursor',
        children: [
          {
            name: 'Buttons',
            url: '/buttons/buttons',
            icon: 'icon-cursor',
          },
          {
            name: 'Button dropdowns',
            url: '/buttons/button-dropdowns',
            icon: 'icon-cursor',
          },
          {
            name: 'Button groups',
            url: '/buttons/button-groups',
            icon: 'icon-cursor',
          },
          {
            name: 'Brand Buttons',
            url: '/buttons/brand-buttons',
            icon: 'icon-cursor',
          },
        ],
      },
      {
        name: 'Library',
        url: '/buttons',
        icon: 'icon-cursor',
        children: [
          {
            name: 'Buttons',
            url: '/buttons/buttons',
            icon: 'icon-cursor',
          },
          {
            name: 'Button dropdowns',
            url: '/buttons/button-dropdowns',
            icon: 'icon-cursor',
          },
          {
            name: 'Button groups',
            url: '/buttons/button-groups',
            icon: 'icon-cursor',
          },
          {
            name: 'Brand Buttons',
            url: '/buttons/brand-buttons',
            icon: 'icon-cursor',
          },
        ],
      },
      {
        name: 'Hostel',
        url: '/buttons',
        icon: 'icon-cursor',
        children: [
          {
            name: 'Buttons',
            url: '/buttons/buttons',
            icon: 'icon-cursor',
          },
          {
            name: 'Button dropdowns',
            url: '/buttons/button-dropdowns',
            icon: 'icon-cursor',
          },
          {
            name: 'Button groups',
            url: '/buttons/button-groups',
            icon: 'icon-cursor',
          },
          {
            name: 'Brand Buttons',
            url: '/buttons/brand-buttons',
            icon: 'icon-cursor',
          },
        ],
      },
      {
        name: 'Transport',
        url: '/buttons',
        icon: 'icon-cursor',
        children: [
          {
            name: 'Buttons',
            url: '/buttons/buttons',
            icon: 'icon-cursor',
          },
          {
            name: 'Button dropdowns',
            url: '/buttons/button-dropdowns',
            icon: 'icon-cursor',
          },
          {
            name: 'Button groups',
            url: '/buttons/button-groups',
            icon: 'icon-cursor',
          },
          {
            name: 'Brand Buttons',
            url: '/buttons/brand-buttons',
            icon: 'icon-cursor',
          },
        ],
      },
      {
        name: 'Arts',
        url: '/buttons',
        icon: 'icon-cursor',
        children: [
          {
            name: 'Buttons',
            url: '/buttons/buttons',
            icon: 'icon-cursor',
          },
          {
            name: 'Button dropdowns',
            url: '/buttons/button-dropdowns',
            icon: 'icon-cursor',
          },
          {
            name: 'Button groups',
            url: '/buttons/button-groups',
            icon: 'icon-cursor',
          },
          {
            name: 'Brand Buttons',
            url: '/buttons/brand-buttons',
            icon: 'icon-cursor',
          },
        ],
      },
      {
        name: 'Sports',
        url: '/buttons',
        icon: 'icon-cursor',
        children: [
          {
            name: 'Buttons',
            url: '/buttons/buttons',
            icon: 'icon-cursor',
          },
          {
            name: 'Button dropdowns',
            url: '/buttons/button-dropdowns',
            icon: 'icon-cursor',
          },
          {
            name: 'Button groups',
            url: '/buttons/button-groups',
            icon: 'icon-cursor',
          },
          {
            name: 'Brand Buttons',
            url: '/buttons/brand-buttons',
            icon: 'icon-cursor',
          },
        ],
      },
      {
        title: true,
        name: 'Extras',
      },
      {
        name: 'Pages',
        url: '/pages',
        icon: 'icon-star',
        children: [
          {
            name: 'Login',
            url: '/login',
            icon: 'icon-star',
          },
          {
            name: 'Register',
            url: '/register',
            icon: 'icon-star',
          },
          {
            name: 'Error 404',
            url: '/404',
            icon: 'icon-star',
          },
          {
            name: 'Error 500',
            url: '/500',
            icon: 'icon-star',
          },
        ],
      },
      {
        name: 'Disabled',
        url: '/dashboard',
        icon: 'icon-ban',
        attributes: { disabled: true },
      }
    ],
  };

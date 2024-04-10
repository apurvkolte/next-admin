export const MENUITEMS = [
  {
    menutitle: "DASHBOARD",
    Items: [
      {
        path: "/components/dashboard/dashboard",
        icon: "ti-home",
        type: "link",
        active: false,
        selected: false,
        title: "Dashboard",
      },

      {
        title: "ECommerce",
        icon: "ti-shopping-cart-full",
        type: "sub",
        active: false,
        selected: false,
        children: [

          {
            path: "/components/ecommerce/orders",
            type: "link",
            active: false,
            selected: false,
            title: "Orders",
          },
          {
            path: "/components/ecommerce/add-product",
            type: "link",
            active: false,
            selected: false,
            title: "Add Product",
          },
        ],
      },
    ],
  },

  // {
  //   menutitle: "OTHER PAGES",
  //   Items: [
  //     {
  //       title: "Authentication",
  //       icon: "ti-lock",
  //       type: "sub",
  //       children: [
  //         {
  //           path: "/components/authentication/signin",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: " Sign In",
  //         },
  //         {
  //           path: "/components/authentication/signup",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: " Sign Up",
  //         },
  //         {
  //           path: "/components/authentication/forgot-password",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: " Forgot Password",
  //         },
  //         {
  //           path: "/components/authentication/reset-password",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: " Reset Password",
  //         },
  //         {
  //           path: "/components/authentication/under-construction",
  //           type: "link",
  //           active: false,
  //           selected: false,
  //           title: " UnderConstruction",
  //         },
  //       ],
  //     },
  //   ],
  // },

];

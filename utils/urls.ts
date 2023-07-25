// export const Url = "https://jib.iran.liara.run";
export const Url = "https://dev.kianmetronic.ir";
export const baseUrl = `${Url}/api/v1`;
export const imageUrl = `${Url}/`;

export const imageUrlBase = `${Url}/images/contents/`;
export const IMAGE_URL = (path: string) => `${Url}/${path}`;
export const bankUrl = (path: string) => `${Url}/images/bank/${path}`;

export const apiRoutes = {
  AU1: "/user/auth/code",

  AU2: "/user/verify-account",

  AU3: "/user/register",

  AU4: "/user/profile",

  AU5: "/user/national-card/upload",

  AU6: "/user/legal/person",

  AU7: "/business/login",

  AU8: "/user/auth/set-password",

  AU9: "/user/auth/login",

  AU10: "/user/auth/register",

  AU12: "/user/forget-password/code/send",

  AU13: "/user/forget-password/code/verify",

  AU14: "/user/forget-password/reset",

  BUSSINESSES: `/businesses`,

  IMAGE_UPLOAD: `/user/image-profile`,

  LOGOUT: `/user/auth/logout`,

  CATEGORIES: `/categories`,

  CART: `/user/carts`,

  CART_STATS: `/user/carts/data`,

  GET_MAIN_BANNERS: `/general/banners`,

  USER_ZIP_CODE: `/user/zip-code`,

  ADD_TO_CART: `/user/carts`,

  GET_BRANDS: `/general/brands`,

  UPDATE_PROFILE: `/user/update`,

  PRODUCT_PRICE_RANGE: `/general/product-range-price`,

  ADD_REMOVE_PRODUCT_TO_FAVORITES: `/user/products/favorites`,

  USER_ADDRESS: `/user/addresses`,

  USER_DELIVERY_FEE: `/user/carts/delivery-fee?`,

  CHECKOUT_API: `/user/orders`,

  ORDERS_STATUSES: `/user/orders/statuses`,

  GET_ORDERS: `/user/orders`,

  GET_USER_CASH_REQUESTS: `/user/cash-requests`,

  USER_CASH_REQUEST: `/user/cash-requests`,

  USER_CREDIT: `/user/credit`,

  GET_SINGLE_ORDER: (id: string | null | number) => `/user/orders/${id}`,

  GET_DISPOSABLES: `/user/carts/deposit-items`,

  AU11: (param: string | number) => `/user/forget-password/options?auth_param=${param}`,

  BUSSINESSES_API: `/businesses`,

  SINGLE_BUSSINESSES_API: (id: string | number) => `/businesses/${id}`,

  SINGLE_BUSSINESSES_BRANDS: (id: string | number) => `/businesses/${id}/brands`,

  GET_USER_ADDRESS: (type: "shipping" | "billing") => `/user/addresses?type=${type}`,

  DELETE_ADDRESS: (id: string | number | null) => `/user/addresses/${id}`,

  SINGLE_BUSSINESSES_BANNERS_API: (id: string | number) => `/businesses/${id}/banners`,

  SINGLE_BUSSINESSES_Products_API: (id: string | number) => `/businesses/${id}/products`,

  SINGLE_BUSSINESSES_SEND_COMMENT_API: (id: string | number) => `/user/businesses/${id}/comments`,

  SINGLE_PRODUCT_SEND_COMMENT_API: (id: string | number) => `/user/products/${id}/comments`,

  SINGLE_BUSSINESSES_COMMENTS_API: (id: string | number) => `/businesses/${id}/comments`,

  SINGLE_BUSSINESSES_RATE_RANGES_API: (id: string | number) => `/businesses/${id}/range`,

  SINGLE_PRODUCT_API: (id: string | number) => `/products/${id}`,

  SINGLE_BUSSINESSES_PRODUCTS_API: (id: string | number) => `/businesses/${id}/products`,

  SINGLE_BUSSINESSES_PRODUCT_API: (id: string | number, product_id: string | number) =>
    `/businesses/${id}/products/${product_id}`,

  SINGLE_BUSSINESSES_PRODUCT_SIMILARS_API: (product_id: string | number) => `/products/${product_id}/similar`,

  SINGLE_BUSSINESSES_PRODUCT_COMMENTS_API: (business_id: string | number, product_id: string | number) =>
    `/businesses/${business_id}/products/${product_id}/comments`,

  SINGLE_BUSSINESSES_PRODUCT_RATE_RANGE_API: (business_id: string | number, product_id: string | number) =>
    `/businesses/${business_id}/products/${product_id}/range`,

  BASE_CONTENT: (key_name: string) => {
    return `/Base/Category?content_name=${key_name}`;
  },
  SITE_CONTENT_CATEGORY: function (content_name: string) {
    return `/site-categories?content_name=${content_name}`;
  }, //deprecated
  SITE_CONTENT: function (content_name: string, page?: string | number) {
    return `/site-contents?content_name=${content_name}&page=${page}`;
  },
};

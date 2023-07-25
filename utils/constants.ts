export const acl = [
  {
    route: "/transaction/receive",
    accessDenied: ["normal"],
  },
  {
    route: "/transaction/buy",
    accessDenied: ["normal"],
  },
  {
    route: "/transaction/sell",
    accessDenied: ["*"],
  },
  {
    route: "/transaction/transfer",
    accessDenied: ["normal"],
  },
];

export const footerLinks = [
  [
    { id: 22, title: "About Us", route: "/about-us" },
    { id: 21, title: "Why Choose us", route: "/faq" },
    { id: 23, title: "Pricing", route: "/contact-us" },
    { id: 24, title: "Testimonial", route: "/terms" },
  ],
  [
    { id: 24, title: "Privacy Policy", route: "/terms" },
    { id: 22, title: "Blog", route: "/blog" },
    { id: 21, title: "Terms and Condition", route: "/terms" },
    { id: 23, title: "Contact Us", route: "/contact-us" },
  ],
  [
    { id: 24, title: "Project managment", route: "/project-managment" },
    { id: 22, title: "Time tracker", route: "/time-tracker" },
    { id: 21, title: "Time schedule", route: "/faq" },
    { id: 23, title: "Lead generate", route: "/contact-us" },
    { id: 254, title: "Remote Collaboration", route: "/contact-us" },
  ],
];
export const SORT_TYPES = [
  { id: "cheapest", title: "Cheapest" },
  { id: "most_sale", title: "" },
  { id: "most_date", title: "جدیدترین" },
  { id: "discount", title: "تخفیف ها" },
];
export const GENDERS_LIST = [
  { id: "Mrs", title: "Mrs" },
  { id: "Ms", title: "Ms" },
  { id: "Mr", title: "Mr" },
];
export const shareLinks = [
  {
    id: 0,
    icon: "/assets/icons/share/telegram.svg",
    link: (address: string) => `https://t.me/share/url?url=${address}&text=${address}`,
  },
  {
    id: 1,
    icon: "/assets/icons/share/whatsapp.svg",
    link: (address: string) => `https://api.whatsapp.com/send?text=${address}`,
  },
  {
    id: 2,
    icon: "/assets/icons/share/twitter.svg",
    link: (address: string) => `https://twitter.com/intent/tweet?text=${address}&hashtags=digihagh`,
  },
  {
    id: 3,
    icon: "/assets/icons/share/linkdin.svg",
    link: (address: string) => `https://www.linkedin.com/shareArticle?mini=true&title=دیجی حق&url=${address}`,
  },
];

export const userProifleItems = [
  { title: "D60", key: "first_name", direction: "rtl" },

  { title: "D61", key: "last_name", disabled: false, direction: "ltr" },

  { title: "D63", key: "mobile_number", disabled: false, direction: "ltr", keyboard: "number" },
];

export const profileItems = [
  {
    id: 12552,
    title: "D49",
    route: "/profile/user",
    imgSrc: "/assets/icons/sidebar/profile.svg",
  },
  {
    id: 1424,
    title: "D50",
    route: "/profile/orders",
    imgSrc: "/assets/icons/sidebar/receipt-square.svg",
  },
  {
    id: 79,
    title: "D51",
    route: "/profile/fixed-orders",
    imgSrc: "/assets/icons/sidebar/archive-tick.svg",
  },
  {
    id: 69,
    title: "D52",
    route: "/profile/favorites",
    imgSrc: "/assets/icons/sidebar/heart.svg",
  },
  {
    id: 1241,
    title: "D53",
    route: "/profile/wallet",
    imgSrc: "/assets/icons/sidebar/wallet.svg",
  },
  {
    id: 232,
    title: "D54",
    route: "/profile/addresses",
    imgSrc: "/assets/icons/sidebar/location.svg",
  },
  {
    id: 36,
    title: "D55",
    route: "/profile/language",
    imgSrc: "/assets/icons/sidebar/translate.svg",
  },
  {
    id: 123,
    title: "D56",
    route: "/profile/support",
    imgSrc: "/assets/icons/sidebar/tag-2.svg",
  },
  {
    id: 423,
    title: "D57",
    route: "/profile/contact-us",
    imgSrc: "/assets/icons/sidebar/call.svg",
  },
];

export const ordersFinal = {
  title: "E42",
  key: "final_payment",
  unit: "€",
};
export const ordersPaymentlist = [
  {
    title: "E38",
    key: "total_price",
    unit: "€",
  },
  {
    title: "E40",
    key: "deposite",
    unit: "€",
  },

  // {
  //   title: "9% مالیات بر ارزش افزوده",
  //   key: "tax",
  //   unit: "تومان",
  // },
];

export const walletHistoryItems = [
  {
    id: 1,
    step: 1,
    title: "D93",
    description: null,
    color: "string",
    count: 0,
  },
  {
    id: 2,
    step: 2,
    title: "D94",
    description: null,
    color: "string",
    count: 0,
  },
  {
    id: 3,
    step: 3,
    title: "D95",
    description: null,
    color: "string",
    count: 0,
  },
  {
    id: 4,
    step: 3,
    title: "D96",
    description: null,
    color: "string",
    count: 0,
  },
];

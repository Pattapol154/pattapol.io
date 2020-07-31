const title = "pattapol | portfolio – Student";
const description = "My Website 🚀.";

const SEO = {
  title,
  description,
  canonical: "https://pattapol.io",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://pattapol.io",
    title,
    description,
    images: [
      {
        url: "https://pattapol.io/static/images/og.jpg",
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
};

export default SEO;

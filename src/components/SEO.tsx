import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description?: string;
}

const SEO = ({ title, description }: SEOProps) => (
  <Helmet>
    <title>{title} | ABROB</title>
    {description && <meta name="description" content={description} />}
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    {/* Open Graph defaults */}
    <meta property="og:title" content={title} />
    {description && <meta property="og:description" content={description} />}
    <meta property="og:type" content="website" />
    <meta property="og:url" content={window.location.href} />
  </Helmet>
);

export default SEO;

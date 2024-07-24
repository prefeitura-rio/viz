import React from "react";
import { Helmet } from "react-helmet";

const MetaTags = ({ title, description, thumbnail }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={thumbnail} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={thumbnail} />
    </Helmet>
  );
};

export default MetaTags;

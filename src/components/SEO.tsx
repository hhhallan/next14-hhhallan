import { DATA } from "@/data/resume";
import Head from "next/head";

type SEOProps = {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
};

export default function SEO({ title, description, url, image }: SEOProps) {
  const defaultTitle = DATA.name;
  const defaultDescription = DATA.description;
  const defaultURL = DATA.url;
  const linkedInProfile = DATA.contact.social.LinkedIn.url;
  const githubProfile = DATA.contact.social.GitHub.url;

  return (
    <Head>
      <title>{title ? `${title} | hhhallan.fr` : defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta property="og:url" content={url || defaultURL} />
      {image && <meta property="og:image" content={image} />}
      <meta property="og:site_name" content="hhhallan.fr" />
      <meta property="og:type" content="website" />

      <link rel="me" href={linkedInProfile} />
      <link rel="me" href={githubProfile} />

      <meta name="robots" content="index, follow" />
    </Head>
  );
}

import { MetadataRoute } from 'next';
import { meta } from '@/content/meta';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${meta.default.siteUrl}/sitemap.xml`,
  };
}

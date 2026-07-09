import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://two-year-residency-visa.vercel.app', // UPDATED
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
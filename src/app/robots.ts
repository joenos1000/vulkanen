import { type MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://vulkanenmors.dk' // Update this to your actual domain
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/private/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
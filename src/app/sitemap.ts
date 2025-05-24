import { MetadataRoute } from 'next';

// Blog yazıları için veri yapısı - sitemap için kullanılacak
const blogPosts = [
  {
    slug: 'responsive-tasarimin-isletmeniz-icin-onemi',
    lastModified: new Date('2023-05-12'),
  },
  {
    slug: 'seo-optimizasyonu-dijital-gorunurlugunuzu-artirmanin-yollari',
    lastModified: new Date('2023-06-24'),
  },
  {
    slug: 'whatsapp-business-api-ile-musteri-iletisimini-guclendirme',
    lastModified: new Date('2023-07-10'),
  },
  {
    slug: 'e-ticaret-siteleri-icin-donusum-optimizasyonu',
    lastModified: new Date('2023-08-15'),
  },
  {
    slug: 'web-sitenizin-yukleme-hizini-artirmanin-10-yolu',
    lastModified: new Date('2023-09-03'),
  }
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.webimza.com';
  
  // Ana sayfalar
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/hizmetler`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hakkimizda`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/neden-biz`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/iletisim`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];

  // Blog yazıları
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...blogRoutes];
} 
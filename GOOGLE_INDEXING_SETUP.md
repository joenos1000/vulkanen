# Google Indexing Setup Guide for Vulkanen Mors

This guide will help you get your site indexed on Google and set up Google Search Console.

## ✅ What's Already Done

The following files have been created and configured:

1. **Sitemap** (`/src/app/sitemap.ts`)
   - Automatically generates a sitemap at `/sitemap.xml`
   - Includes all main sections of your site
   - Updates automatically when you deploy

2. **Robots.txt** (`/src/app/robots.ts`)
   - Automatically generates robots.txt at `/robots.txt`
   - Allows search engines to crawl your site
   - Points to your sitemap

3. **SEO Metadata** (`/src/app/layout.tsx`)
   - Comprehensive meta tags for SEO
   - Canonical URL for `https://www.vulkanen.dk`
   - Open Graph tags for social media sharing
   - Twitter Card support
   - `WebSite` and `Organization` structured data

4. **Site identity** (`/src/lib/site.ts`)
   - Keeps the public domain, title, description, and address consistent
   - Sitemap, robots, metadata, and structured data all use this source

The canonical public URL is `https://www.vulkanen.dk`. Update
`/src/lib/site.ts` if the canonical domain or site identity changes later.

## 📋 Google Search Console Setup

### Step 1: Verify Your Site

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add Property"
3. Choose **Domain** and enter `vulkanen.dk`, or choose **URL prefix** and enter
   `https://www.vulkanen.dk/`
4. Choose a verification method:

#### Option A: HTML Tag (Recommended)
1. Google will provide a meta tag like: `<meta name="google-site-verification" content="YOUR_CODE" />`
2. Copy the verification code (the part after `content="`)
3. Add it to `/src/app/layout.tsx` in the metadata:
   ```typescript
   verification: {
     google: 'YOUR_CODE_HERE',
   },
   ```
4. Deploy your site
5. Click "Verify" in Google Search Console

#### Option B: HTML File
1. Download the verification file from Google
2. Place it in `/public/` directory
3. Deploy your site
4. Click "Verify" in Google Search Console

### Step 2: Submit Your Sitemap

1. In Google Search Console, go to "Sitemaps" in the left menu
2. Enter `sitemap.xml` in the "Add a new sitemap" field
3. Click "Submit"

### Step 3: Request Indexing

1. In Google Search Console, use the URL Inspection tool
2. Enter your homepage URL
3. Click "Request Indexing"
4. Repeat for important pages if needed

## 🚀 After Deployment

Once your site is deployed, verify these URLs work:

- `https://www.vulkanen.dk/sitemap.xml` - Production sitemap
- `https://www.vulkanen.dk/robots.txt` - Production crawler rules

## 📊 Monitoring

After setup, you can monitor:

- **Coverage**: Which pages are indexed
- **Performance**: Search impressions and clicks
- **Enhancements**: Mobile usability and Core Web Vitals
- **Links**: Who's linking to your site

## ⏱️ Timeline

- **Verification**: Immediate
- **Sitemap Processing**: 1-2 days
- **Initial Indexing**: 3-7 days
- **Full Indexing**: 1-4 weeks

## 🎯 SEO Best Practices Implemented

✅ Semantic HTML structure
✅ Meta descriptions
✅ Open Graph tags
✅ Twitter Cards
✅ Proper heading hierarchy
✅ Alt text for images
✅ Mobile-responsive design
✅ Fast loading times
✅ HTTPS (when deployed)
✅ Sitemap
✅ Robots.txt

## 📝 Additional Recommendations

1. **Add Event Structured Data**: Add JSON-LD for public events when their details are published
2. **Google Analytics**: Set up GA4 for traffic monitoring
3. **Performance**: Monitor Core Web Vitals in Search Console
4. **Content Updates**: Keep your content fresh and update lastModified dates
5. **Internal Linking**: Ensure all important pages are linked from your navigation

## 🔗 Useful Links

- [Google Search Console](https://search.google.com/search-console)
- [Google Search Central](https://developers.google.com/search)
- [Next.js SEO Documentation](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)

## 🆘 Troubleshooting

### Sitemap not showing up
- Ensure your site is deployed
- Check that the domain in sitemap.ts matches your actual domain
- Wait 24-48 hours after submission

### Pages not being indexed
- Check Coverage report in Search Console
- Ensure robots.txt allows crawling
- Check for any crawl errors
- Make sure pages have unique, descriptive content

### Verification failing
- Double-check the verification code
- Ensure the code is in the correct location
- Clear your browser cache and try again
- Wait a few minutes and retry

## 📞 Need Help?

If you encounter issues, check:
1. Google Search Console Help Center
2. Next.js documentation
3. Your hosting provider's documentation

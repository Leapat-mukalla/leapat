# Google Analytics Integration for Leapat

This document outlines the Google Analytics implementation that was added to the Leapat project, similar to the implementation in Haseen.

## Setup

### 1. Dependencies
The following package was added to `package.json`:
- `@next/third-parties`: For Next.js Google Analytics integration

### 2. Environment Variables
Add your Google Analytics Measurement ID to your environment file:

```bash
# .env.local
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 3. Files Added/Modified

#### Core Analytics Files:
- `/src/lib/analytics.ts` - Main analytics utility functions
- `/src/components/blog/BlogTracker.tsx` - Blog-specific tracking component
- `/src/components/AnalyticsLink.tsx` - Link component with tracking
- `/src/app/test-analytics/page.tsx` - Test page for analytics

#### Modified Files:
- `/src/app/layout.tsx` - Added Google Analytics component
- `/src/components/contactUsForm/contactUsForm.tsx` - Added form tracking
- `/src/app/(dynamic)/blog/posts/[id]/page.tsx` - Added blog tracking
- `.env.local.example` - Added GA environment variable example

## Features Implemented

### 1. Basic Tracking
- Page views
- Custom events
- User engagement metrics

### 2. Form Tracking
- Contact form submissions
- Form success/error tracking
- Form completion analytics

### 3. Content Tracking
- Blog post views
- Reading time tracking
- Project view tracking

### 4. Link Tracking
- External link clicks
- Download tracking (for CVs/documents)

## Usage Examples

### Track a Custom Event
```typescript
import { trackEvent } from '@/lib/analytics';

trackEvent('button_click', 'navigation', 'header_menu');
```

### Track Form Submission
```typescript
import { trackContactFormSubmit } from '@/lib/analytics';

trackContactFormSubmit({
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+1234567890'
});
```

### Track Blog Reading
```tsx
import { BlogTracker } from '@/components/blog/BlogTracker';

// In your blog post component
<BlogTracker
  blogTitle="Blog Post Title"
  category="technology"
  readingTime={5}
/>
```

### Track External Links
```tsx
import { AnalyticsLink } from '@/components/AnalyticsLink';

<AnalyticsLink
  href="https://external-site.com"
  trackingLabel="external_partner_link"
>
  Visit External Site
</AnalyticsLink>
```

## Testing

Visit `/test-analytics` to test the analytics integration. This page will:
- Send test events to Google Analytics
- Show you what analytics features are implemented
- Display the current GA configuration status

## Available Tracking Functions

### General Events
- `trackEvent(action, category, label?, value?, customParameters?)`
- `trackPageView(pagePath, pageTitle)`

### Form Events
- `trackContactFormSubmit(formData)`
- `trackContactFormSuccess(formType?)`
- `trackContactFormError(error, formType?)`

### Content Events
- `trackProjectView(projectTitle, projectCategory?)`
- `trackBlogView(blogTitle, category, readingTime?)`
- `trackBlogReadTime(blogTitle, timeSpent)`

### Interaction Events
- `trackDownload(fileName, fileType)`
- `trackExternalLink(url, linkText?)`

## Event Categories

The analytics are organized into these main categories:
- `form` - All form-related events
- `content` - Blog posts, projects, and other content
- `engagement` - User interaction events
- `navigation` - Link clicks and page navigation
- `download` - File downloads

## Notes

- Analytics only work in production or when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set
- All tracking functions safely handle cases where gtag is not available
- Personal data is anonymized - only email domains and aggregated data are tracked
- Reading time tracking automatically starts/stops based on page visibility

## Troubleshooting

1. **Events not showing in GA**: Check that your GA Measurement ID is correctly set in environment variables
2. **Console errors**: Make sure you've installed `@next/third-parties` dependency
3. **Testing**: Use the `/test-analytics` page to verify implementation

## Migration from Haseen

This implementation mirrors the Haseen project's GA setup with these differences:
- Event names adapted for Leapat's use cases (projects instead of security checks)
- Form tracking adapted to Leapat's contact form structure
- Additional tracking for project views and portfolio interactions
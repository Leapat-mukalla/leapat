// Google Analytics event tracking utility

declare global {
  interface Window {
    gtag: (
      command: "config" | "event",
      targetId: string,
      config?: Record<string, string | number | boolean>,
    ) => void;
  }
}

// Event categories for Leapat
export const GA_EVENTS = {
  // Form submission events
  CONTACT_FORM_SUBMIT: "contact_form_submit",
  CONTACT_FORM_SUCCESS: "contact_form_success",
  CONTACT_FORM_ERROR: "contact_form_error",

  // Navigation events
  PROJECT_VIEW: "project_view",
  BLOG_VIEW: "blog_view",
  BLOG_READ_TIME: "blog_read_time",

  // User engagement
  PAGE_VIEW: "page_view",
  USER_ENGAGEMENT: "user_engagement",

  // Download/External link events
  DOWNLOAD_CV: "download_cv",
  EXTERNAL_LINK: "external_link",
} as const;

// Track a custom event
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number,
  customParameters?: Record<string, string | number | boolean>,
): void => {
  if (typeof window !== "undefined" && window.gtag) {
    const eventParams: Record<string, string | number | boolean> = {
      event_category: category,
      ...(label && { event_label: label }),
      ...(value !== undefined && { value }),
      ...customParameters,
    };
    window.gtag("event", action, eventParams);
  }
};

// Specific tracking functions for Leapat

export const trackContactFormSubmit = (formData: {
  name?: string;
  email?: string;
  phone?: string;
}): void => {
  trackEvent(GA_EVENTS.CONTACT_FORM_SUBMIT, "form", "contact_form", undefined, {
    has_name: formData.name ? true : false,
    has_email: formData.email ? true : false,
    has_phone: formData.phone ? true : false,
    email_domain: formData.email?.split("@")[1] || "unknown",
  });
};

export const trackContactFormSuccess = (formType: string = "contact"): void => {
  trackEvent(
    GA_EVENTS.CONTACT_FORM_SUCCESS,
    "form",
    "contact_form_success",
    undefined,
    {
      form_type: formType,
    },
  );
};

export const trackContactFormError = (
  error: string,
  formType: string = "contact",
): void => {
  trackEvent(
    GA_EVENTS.CONTACT_FORM_ERROR,
    "form",
    "contact_form_error",
    undefined,
    {
      form_type: formType,
      error_type: error.includes("شبكة") ? "network_error" : "validation_error",
      error_message: error.substring(0, 100), // Limit error message length
    },
  );
};

export const trackProjectView = (
  projectTitle: string,
  projectCategory?: string,
): void => {
  trackEvent(GA_EVENTS.PROJECT_VIEW, "content", "project_view", undefined, {
    project_title: projectTitle.substring(0, 100),
    project_category: projectCategory || "general",
    content_type: "project",
  });
};

export const trackBlogView = (
  blogTitle: string,
  category: string,
  readingTime?: number,
): void => {
  trackEvent(GA_EVENTS.BLOG_VIEW, "content", "blog_post", undefined, {
    blog_title: blogTitle.substring(0, 100),
    blog_category: category,
    ...(readingTime && { estimated_reading_time: readingTime }),
    content_type: "blog_post",
  });
};

export const trackBlogReadTime = (
  blogTitle: string,
  timeSpent: number,
): void => {
  trackEvent(
    GA_EVENTS.BLOG_READ_TIME,
    "engagement",
    "blog_reading",
    timeSpent,
    {
      blog_title: blogTitle.substring(0, 100),
      time_spent_seconds: timeSpent,
      engagement_level:
        timeSpent < 30 ? "low" : timeSpent < 120 ? "medium" : "high",
    },
  );
};

export const trackDownload = (fileName: string, fileType: string): void => {
  trackEvent(GA_EVENTS.DOWNLOAD_CV, "download", fileName, undefined, {
    file_type: fileType,
    file_name: fileName,
  });
};

export const trackExternalLink = (url: string, linkText?: string): void => {
  trackEvent(
    GA_EVENTS.EXTERNAL_LINK,
    "navigation",
    "external_link",
    undefined,
    {
      external_url: url,
      link_text: linkText?.substring(0, 50) || "unknown",
    },
  );
};

// Page view tracking
export const trackPageView = (pagePath: string, pageTitle: string): void => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!, {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }
};

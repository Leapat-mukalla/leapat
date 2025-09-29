"use client";

import { useEffect } from "react";
import { trackEvent, trackPageView } from "@/lib/analytics";

export default function TestAnalytics() {
  useEffect(() => {
    // Test page view tracking
    trackPageView("/test-analytics", "Test Analytics Page - Leapat");

    // Test custom event
    trackEvent("test_event", "test_category", "test_label", 1);
  }, []);

  const handleTestEvent = () => {
    trackEvent("manual_test", "button_click", "test_button_clicked");
    alert("Test event sent! Check your browser console for gtag calls.");
  };

  return (
    <div className="min-h-screen bg-white p-8 text-black">
      <h1 className="mb-4 text-2xl font-bold">
        Google Analytics Test Page - Leapat
      </h1>
      <p className="mb-4">
        This page tests Google Analytics integration for Leapat. Open browser
        dev tools to see gtag calls.
      </p>
      <button
        onClick={handleTestEvent}
        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Send Test Event
      </button>

      <div className="mt-8 rounded bg-gray-100 p-4">
        <h2 className="mb-2 font-bold">
          Analytics Features Implemented for Leapat:
        </h2>
        <ul className="list-inside list-disc space-y-1">
          <li>✅ Google Analytics basic setup</li>
          <li>✅ Contact form submit tracking</li>
          <li>✅ Contact form success/error tracking</li>
          <li>✅ Project view tracking</li>
          <li>✅ Blog post view tracking</li>
          <li>✅ Blog reading time tracking</li>
          <li>✅ Download tracking (CV/documents)</li>
          <li>✅ External link tracking</li>
          <li>✅ Custom event parameters for detailed analysis</li>
        </ul>
      </div>

      <div className="mt-4 rounded bg-yellow-100 p-4">
        <h3 className="mb-2 font-bold">Environment Setup:</h3>
        <p>
          Make sure to set <code>NEXT_PUBLIC_GA_MEASUREMENT_ID</code> in your
          environment variables.
        </p>
        <p>
          Current GA ID:{" "}
          {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "Not configured"}
        </p>
      </div>
    </div>
  );
}

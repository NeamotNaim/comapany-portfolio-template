import { analyticsAPI } from '../services/api';

// Analytics tracking utility
class AnalyticsTracker {
  private sessionId: string;
  private isEnabled: boolean;

  constructor() {
    this.sessionId = this.generateSessionId();
    this.isEnabled = true; // Can be controlled by environment variables
  }

  private generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  // Track page view
  async trackPageView(pagePath: string, metadata?: any) {
    if (!this.isEnabled) return;

    try {
      await analyticsAPI.trackEvent({
        event_type: 'page_view',
        page_path: pagePath,
        session_id: this.sessionId,
        metadata,
      });
    } catch (error) {
      console.error('Failed to track page view:', error);
    }
  }

  // Track form submission
  async trackFormSubmission(
    formType: string,
    pagePath: string,
    metadata?: any
  ) {
    if (!this.isEnabled) return;

    try {
      await analyticsAPI.trackEvent({
        event_type: 'form_submission',
        page_path: pagePath,
        session_id: this.sessionId,
        metadata: {
          form_type: formType,
          ...metadata,
        },
      });
    } catch (error) {
      console.error('Failed to track form submission:', error);
    }
  }

  // Track button click
  async trackButtonClick(buttonName: string, pagePath: string, metadata?: any) {
    if (!this.isEnabled) return;

    try {
      await analyticsAPI.trackEvent({
        event_type: 'button_click',
        page_path: pagePath,
        session_id: this.sessionId,
        metadata: {
          button_name: buttonName,
          ...metadata,
        },
      });
    } catch (error) {
      console.error('Failed to track button click:', error);
    }
  }

  // Track download
  async trackDownload(fileName: string, pagePath: string, metadata?: any) {
    if (!this.isEnabled) return;

    try {
      await analyticsAPI.trackEvent({
        event_type: 'download',
        page_path: pagePath,
        session_id: this.sessionId,
        metadata: {
          file_name: fileName,
          ...metadata,
        },
      });
    } catch (error) {
      console.error('Failed to track download:', error);
    }
  }

  // Track custom event
  async trackCustomEvent(eventType: string, pagePath: string, metadata?: any) {
    if (!this.isEnabled) return;

    try {
      await analyticsAPI.trackEvent({
        event_type: eventType,
        page_path: pagePath,
        session_id: this.sessionId,
        metadata,
      });
    } catch (error) {
      console.error('Failed to track custom event:', error);
    }
  }

  // Enable/disable tracking
  setEnabled(enabled: boolean) {
    this.isEnabled = enabled;
  }

  // Get session ID
  getSessionId(): string {
    return this.sessionId;
  }

  // Reset session (useful for new visits)
  resetSession() {
    this.sessionId = this.generateSessionId();
  }
}

// Create singleton instance
const analytics = new AnalyticsTracker();

// React hook for analytics
export const useAnalytics = () => {
  return {
    trackPageView: analytics.trackPageView.bind(analytics),
    trackFormSubmission: analytics.trackFormSubmission.bind(analytics),
    trackButtonClick: analytics.trackButtonClick.bind(analytics),
    trackDownload: analytics.trackDownload.bind(analytics),
    trackCustomEvent: analytics.trackCustomEvent.bind(analytics),
    setEnabled: analytics.setEnabled.bind(analytics),
    getSessionId: analytics.getSessionId.bind(analytics),
    resetSession: analytics.resetSession.bind(analytics),
  };
};

export default analytics;

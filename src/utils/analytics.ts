import { AnalyticsEvent } from '../types';

interface AnalyticsState {
  downloadCount: number;
  eventsLog: Array<{ event: AnalyticsEvent; details?: string; timestamp: string }>;
}

const STORAGE_KEY = 'vmc_analytics_data';

export const getStoredAnalytics = (): AnalyticsState => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch (e) {
    // Ignore error
  }
  return {
    downloadCount: 4850, // Initial realistic base downloads for social proof
    eventsLog: [],
  };
};

export const trackEvent = (event: AnalyticsEvent, details?: string): void => {
  try {
    const current = getStoredAnalytics();
    let newDownloadCount = current.downloadCount;
    
    if (event === 'download_apk') {
      newDownloadCount += 1;
    }

    const updatedLog = [
      {
        event,
        details,
        timestamp: new Date().toISOString(),
      },
      ...current.eventsLog.slice(0, 50),
    ];

    const updated: AnalyticsState = {
      downloadCount: newDownloadCount,
      eventsLog: updatedLog,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

    // Log to console for developer inspection
    console.log(`[VMC Analytics] Event Tracked: ${event}`, details || '');

    // Dispatch custom DOM event in case third-party scripts or Google Tag Manager listen
    window.dispatchEvent(
      new CustomEvent('vmc_analytics_event', {
        detail: { event, details, timestamp: new Date().toISOString() },
      })
    );
  } catch (e) {
    console.error('Failed to track event:', e);
  }
};

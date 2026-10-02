export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  screenshotDimensions: string;
  screenshotLabel: string;
}

export interface PrivacyPoint {
  title: string;
  detail: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SupportTopic {
  title: string;
  solution: string;
}

export const siteConfig = {
  name: 'Stitch',
  fullName: 'Stitch: Private Video Editor',
  tagline: 'Edit your videos. Keep them yours.',
  url: 'https://stitch.gloryolaifa.xyz',
  appStoreUrl: '[APP STORE URL]',
  appId: '[APP ID]',
  pricingLine: 'Free on iPhone',
  supportEmail: 'gloryolaifa@gmail.com',
  developerName: 'Glory Olaifa',
  developerLocation: 'Nigeria',
  copyrightYear: '2025',
  minIosVersion: 'iOS 16.0',
  captionsModelHost: 'huggingface.co',

  hero: {
    headline: 'Edit your videos. Keep them yours.',
    subhead: 'Stitch is a video editor that runs entirely on your iPhone. No account, no uploads, no tracking.',
    pricing: 'Free on iPhone',
    screenshotDimensions: '1200 × 800 px',
    screenshotLabel: 'Stitch Editor Main Canvas & Timeline'
  },

  features: [
    {
      id: 'timeline',
      title: 'Cut, trim, and arrange.',
      description: 'Split, trim, merge, reorder, and change speed on a clean timeline. Formats for every platform: 9:16, 16:9, 1:1, 4:5.',
      screenshotDimensions: '1170 × 2532 px',
      screenshotLabel: 'Multi-Track Timeline & Formatting Tools'
    },
    {
      id: 'transitions',
      title: 'Transitions that just work.',
      description: 'Crossfade, fade to black, slide, wipe, and zoom. Set the duration or apply one to every cut.',
      screenshotDimensions: '1170 × 2532 px',
      screenshotLabel: 'Transition Selector & Timing Controls'
    },
    {
      id: 'captions',
      title: 'Captions, without the internet.',
      description: 'Auto captions generated on your phone. Edit the words and timing, then pick a clean style.',
      screenshotDimensions: '1170 × 2532 px',
      screenshotLabel: 'On-Device Speech Recognition & Subtitle Styling'
    },
    {
      id: 'audio',
      title: 'Music and voiceover.',
      description: 'Add music from your files or the built-in library, record voiceovers on the timeline, and balance them against the original sound.',
      screenshotDimensions: '1170 × 2532 px',
      screenshotLabel: 'Audio Track Mixer & Voiceover Recorder'
    },
    {
      id: 'export',
      title: 'Export up to 4K.',
      description: 'Save to Photos or share anywhere, at 24, 30, or 60 fps.',
      screenshotDimensions: '1170 × 2532 px',
      screenshotLabel: 'High-Resolution 4K Export Settings'
    }
  ] as FeatureItem[],

  privacySection: {
    heading: 'Private by design, not by promise.',
    intro: 'Most editors upload your footage to process it. Stitch does not need to.',
    points: [
      {
        title: 'No account.',
        detail: 'Open the app and start editing.'
      },
      {
        title: 'Nothing uploaded.',
        detail: 'Your videos, music, and voice never leave your phone.'
      },
      {
        title: 'No tracking.',
        detail: 'No analytics, no ads, no third-party SDKs.'
      },
      {
        title: 'One optional download.',
        detail: 'The captions model is fetched once onto your device, then everything runs offline.'
      }
    ] as PrivacyPoint[]
  },

  faq: [
    {
      question: 'Do I need an internet connection?',
      answer: 'Only once, if you want auto captions, to download the speech model. Everything else works offline.'
    },
    {
      question: 'Where are my projects stored?',
      answer: 'On your iPhone, inside the app. Deleting the app deletes them.'
    },
    {
      question: 'Do you see my videos?',
      answer: 'No. They never leave your device, so there is nothing for us to see.'
    },
    {
      question: 'Which iPhones are supported?',
      answer: 'iPhone running iOS 16.0 or later. 4K export depends on your device.'
    },
    {
      question: 'Is it free?',
      answer: 'Stitch is free on iPhone.'
    },
    {
      question: 'Is there an Android version?',
      answer: 'An Android version is currently in development.'
    }
  ] as FaqItem[],

  finalCta: {
    headline: 'Your next video, on your terms.'
  },

  supportTopics: [
    {
      title: 'Captions model will not download',
      solution: 'Ensure your device has an active internet connection and at least 200MB of free storage. Restart the app and try initiating the download again.'
    },
    {
      title: 'Export failed or stopped',
      solution: 'Free up storage space on your device. High resolution 4K exports require temporary workspace buffer. If the issue persists, try exporting at 1080p.'
    },
    {
      title: 'App cannot see my videos',
      solution: 'Open iOS Settings > Privacy & Security > Photos > Stitch, and ensure access is set to Full Access or Selected Photos.'
    },
    {
      title: 'Project displays missing media',
      solution: 'If original video clips were deleted from your iPhone Photos library or iCloud sync, Stitch cannot access them. Restore the clips to your library.'
    },
    {
      title: 'How to delete all app data',
      solution: 'All projects and assets exist solely in Stitch local sandbox. Uninstalling the app from your device completely removes all data.'
    }
  ] as SupportTopic[]
};

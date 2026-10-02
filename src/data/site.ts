export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  screenshotDimensions: string;
  screenshotLabel: string;
  screenshotSrc?: string;
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
  googlePlayUrl: '[GOOGLE PLAY URL]',
  appId: '[APP ID]',
  pricingLine: 'Free on iOS & Android',
  supportEmail: 'gloryolaifa@gmail.com',
  developerName: 'Glory Olaifa',
  developerLocation: 'Nigeria',
  copyrightYear: '2025',
  minIosVersion: 'iOS 16.0 / Android 10',
  captionsModelHost: 'huggingface.co',

  hero: {
    headline: 'Edit your videos. Keep them yours.',
    subhead: 'Stitch is a video editor that runs entirely on your device. No account, no uploads, no tracking.',
    pricing: 'Free on iOS & Android',
    screenshotDimensions: '1170 × 2532 px',
    screenshotLabel: 'Stitch Multi-Track Timeline & Editor Canvas',
    screenshotSrc: '/screenshots/hero-editor.png'
  },

  features: [
    {
      id: 'timeline',
      title: 'Cut, trim, and arrange.',
      description: 'Split, trim, merge, reorder, and change speed on a clean timeline. Formats for every platform: 9:16, 16:9, 1:1, 4:5.',
      screenshotDimensions: '1170 × 2532 px',
      screenshotLabel: 'Timeline & Speed Editing Tools',
      screenshotSrc: '/screenshots/hero-editor.png'
    },
    {
      id: 'projects',
      title: 'Organize your projects cleanly.',
      description: 'Create, manage, and edit multiple video projects stored privately on your device. Instant access without cloud sync delays.',
      screenshotDimensions: '1170 × 2532 px',
      screenshotLabel: 'Private Local Projects Dashboard',
      screenshotSrc: '/screenshots/projects-dashboard.png'
    },
    {
      id: 'captions',
      title: 'Captions, without the internet.',
      description: 'Auto captions generated on your phone. Edit the words and timing, then pick a clean style.',
      screenshotDimensions: '1170 × 2532 px',
      screenshotLabel: 'On-Device Speech Model & Caption Generator',
      screenshotSrc: '/screenshots/captions.png'
    },
    {
      id: 'media',
      title: 'Music, voiceover, and media.',
      description: 'Add music from your files, select clips seamlessly from your photo library, and balance voiceovers against the original audio.',
      screenshotDimensions: '1170 × 2532 px',
      screenshotLabel: 'On-Device Photo & Video Picker',
      screenshotSrc: '/screenshots/media-picker.png'
    },
    {
      id: 'export',
      title: 'Export up to 4K.',
      description: 'Save to Photos or share anywhere, at 24, 30, or 60 fps.',
      screenshotDimensions: '1170 × 2532 px',
      screenshotLabel: 'Custom Resolution & Frame-Rate Export Settings',
      screenshotSrc: '/screenshots/export.png'
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
      answer: 'On your phone, inside the app. Deleting the app deletes them.'
    },
    {
      question: 'Do you see my videos?',
      answer: 'No. They never leave your device, so there is nothing for us to see.'
    },
    {
      question: 'Which devices are supported?',
      answer: 'iPhones running iOS 16.0 or later, and Android phones running Android 10 or later. 4K export depends on your device.'
    },
    {
      question: 'Is it free?',
      answer: 'Stitch is free on both iOS and Android.'
    },
    {
      question: 'Is there an Android version?',
      answer: 'Yes! Stitch is available for both iOS and Android. Everything runs 100% locally on your phone regardless of platform.'
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
      solution: 'Open device Settings > Privacy & Security > Photos / Media > Stitch, and ensure full media access permission is granted.'
    },
    {
      title: 'Project displays missing media',
      solution: 'If original video clips were deleted from your device media library, Stitch cannot access them. Restore the clips to your library.'
    },
    {
      title: 'How to delete all app data',
      solution: 'All projects and assets exist solely in Stitch local sandbox. Uninstalling the app from your device completely removes all data.'
    }
  ] as SupportTopic[]
};

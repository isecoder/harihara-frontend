// app/[page]/head.tsx
'use client'
import { useRouter } from 'next/router';

// Optional: Create a mapping of page-specific metadata
const pageMetadata: { [key: string]: { title: string; description: string } } = {
  events: {
    title: 'Temple Events - Shri Harihareshwara Temple',
    description: 'Stay updated on the latest events, festivals, and ceremonies at Shri Harihareshwara Temple.',
  },
  sevas: {
    title: 'Sevas - Shri Harihareshwara Temple',
    description: 'Explore the various Sevas offered at Shri Harihareshwara Temple to connect with the divine.',
  },
  gallery: {
    title: 'Gallery - Shri Harihareshwara Temple',
    description: 'View the beautiful gallery of Shri Harihareshwara Temple, showcasing its heritage and culture.',
  },
};

export default function Head() {
  const router = useRouter();
  const page = router.query.page as string; // Get the page from the URL

  const metadata = pageMetadata[page] || {
    title: 'Shri Harihareshwara Temple',
    description: 'Welcome to the Shri Harihareshwara Temple, a sacred place for devotees.',
  };

  return (
    <>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`http://www.shriharihareshwara.org/${page}`} />
    </>
  );
}

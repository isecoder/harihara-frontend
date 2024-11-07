// app/[page]/page.tsx
'use client'
import { useRouter } from 'next/router';

const pageContent: { [key: string]: string } = {
  events: 'Welcome to the Events page! Here you can find upcoming temple events and ceremonies.',
  sevas: 'This is the Sevas page. Discover different types of Sevas available at Shri Harihareshwara Temple.',
  gallery: 'Browse the Gallery of Shri Harihareshwara Temple to view its beauty and heritage.',
};

export default function DynamicPage() {
  const router = useRouter();
  const page = router.query.page as string;

  const content = pageContent[page] || 'Welcome to Shri Harihareshwara Temple.';

  return (
    <main>
      <h1>{page.charAt(0).toUpperCase() + page.slice(1)}</h1>
      <p>{content}</p>
    </main>
  );
}

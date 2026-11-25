import { useEffect } from 'react';

interface PageMetaOptions {
  title: string;
  description: string;
}

export function usePageMeta({ title, description }: PageMetaOptions) {
  useEffect(() => {
    document.title = title;

    let metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    let ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.content = title;
    }

    let ogDesc = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.content = description;
    }
  }, [title, description]);
}

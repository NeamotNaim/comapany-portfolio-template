import { useEffect } from 'react';

export function useDocumentTitle(
  title: string,
  options?: { appName?: string }
) {
  useEffect(() => {
    const previous = document.title;
    const appName = options?.appName ?? 'RecursionSoft';
    document.title = title ? `${title} · ${appName}` : appName;
    return () => {
      document.title = previous;
    };
  }, [title, options?.appName]);
}

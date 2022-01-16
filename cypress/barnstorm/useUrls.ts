export function useUrls() {
  const baseUrl = 'http://localhost:3000';

  return {
    baseUrl,
    entryUrl: `${baseUrl}/`,
    counterUrl: `${baseUrl}/counter`
  };
}

export type AppUrls = ReturnType<typeof useUrls>;

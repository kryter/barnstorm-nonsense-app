export function useUrls() {
  const baseUrl = 'http://localhost:3000';

  return {
    baseUrl,
    entryUrl: `${baseUrl}/`,
    counterUrl: `${baseUrl}/counter`,
    loginUrl: `${baseUrl}/login`,
    documentsUrl: `${baseUrl}/documents`
  };
}

export type AppUrls = ReturnType<typeof useUrls>;

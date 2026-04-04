export const queryKeys = {
  me: ["me"] as const,
  salarySessions: {
    root: ["salary-sessions"] as const,
    list: (limit: number) => [...queryKeys.salarySessions.root, "list", limit] as const,
    detail: (id: string) => [...queryKeys.salarySessions.root, "detail", id] as const,
  },
  offerSessions: {
    root: ["offer-sessions"] as const,
    list: (limit: number) => [...queryKeys.offerSessions.root, "list", limit] as const,
    detail: (id: string) => [...queryKeys.offerSessions.root, "detail", id] as const,
  },
};

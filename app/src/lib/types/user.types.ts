export interface UserProfile {
  id: string;
  email: string;
  displayName: string;
  company: string;
  /** Optional — designation / title */
  role?: string;
}

/** Stored credential record (demo/local only — replace with server auth in production). */
export interface LocalAccountRecord {
  password: string;
  profile: UserProfile;
}

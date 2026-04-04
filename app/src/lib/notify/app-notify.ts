import { toast } from "sonner";

/** Default visibility for standard toasts (ms). */
const DEFAULT_MS = 3200 as const;
/** Autosave toasts stay shorter and quieter. */
const AUTOSAVE_MS = 2200 as const;
const AUTOSAVE_THROTTLE_MS = 50_000;

const COPY = {
  salarySession: {
    opened: {
      title: "Salary session ready",
      description: "Continuing from your saved breakdown.",
    },
    deleted: {
      title: "Salary session removed",
      description: "It’s no longer in your account.",
    },
    created: {
      title: "Salary session saved",
      description: "Synced to your account.",
    },
    autosaved: {
      title: "Saved",
      description: "Salary breakdown synced in the background.",
    },
  },
  offerComparison: {
    opened: {
      title: "Offer comparison ready",
      description: "Your saved comparison is open.",
    },
    deleted: {
      title: "Offer comparison removed",
      description: "It’s no longer in your account.",
    },
    autosaved: {
      title: "Saved",
      description: "Offer comparison synced in the background.",
    },
  },
  monthlyPlan: {
    autosaved: {
      title: "Saved",
      description: "Monthly plan synced in the background.",
    },
  },
  profile: {
    updated: {
      title: "Profile updated",
      description: "Your details were saved.",
    },
  },
  persistence: {
    removedFromDevice: {
      title: "Removed from this device",
      description: "This item is no longer stored here.",
    },
    cloudUnavailableLocalFallback: {
      title: "Saved on this device",
      description: "We couldn’t reach the cloud—try again when you’re online.",
    },
  },
  errors: {
    salarySessionDelete: {
      title: "Couldn’t delete salary session",
      description: "Check your connection and try again.",
    },
    offerComparisonDelete: {
      title: "Couldn’t delete offer comparison",
      description: "Check your connection and try again.",
    },
  },
} as const;

function showSuccess(title: string, description?: string, duration = DEFAULT_MS) {
  toast.success(title, { duration, description });
}

function showError(title: string, description?: string, duration = DEFAULT_MS) {
  toast.error(title, { duration, description });
}

function showInfo(title: string, description?: string, duration = DEFAULT_MS) {
  toast.info(title, { duration, description });
}

const autosaveLastAt = new Map<string, number>();

function shouldFireAutosaveToast(channel: string): boolean {
  const now = Date.now();
  const last = autosaveLastAt.get(channel) ?? 0;
  if (now - last < AUTOSAVE_THROTTLE_MS) return false;
  autosaveLastAt.set(channel, now);
  return true;
}

function fireAutosaveToast(
  channel: "salary" | "offer" | "plan",
  title: string,
  description: string
) {
  if (!shouldFireAutosaveToast(channel)) return;
  toast.success(title, {
    id: `autosave-${channel}`,
    description,
    duration: AUTOSAVE_MS,
  });
}

/**
 * Application toasts — one semantic method per user-visible outcome.
 * All copy lives in `COPY`; feature code should not pass arbitrary strings here.
 */
export const appToast = {
  salarySession: {
    opened: () =>
      showInfo(
        COPY.salarySession.opened.title,
        COPY.salarySession.opened.description
      ),

    deleted: () =>
      showSuccess(
        COPY.salarySession.deleted.title,
        COPY.salarySession.deleted.description
      ),

    created: () =>
      showSuccess(
        COPY.salarySession.created.title,
        COPY.salarySession.created.description
      ),

    autosaved: () =>
      fireAutosaveToast(
        "salary",
        COPY.salarySession.autosaved.title,
        COPY.salarySession.autosaved.description
      ),
  },

  offerComparison: {
    opened: () =>
      showInfo(
        COPY.offerComparison.opened.title,
        COPY.offerComparison.opened.description
      ),

    deleted: () =>
      showSuccess(
        COPY.offerComparison.deleted.title,
        COPY.offerComparison.deleted.description
      ),

    autosaved: () =>
      fireAutosaveToast(
        "offer",
        COPY.offerComparison.autosaved.title,
        COPY.offerComparison.autosaved.description
      ),
  },

  monthlyPlan: {
    autosaved: () =>
      fireAutosaveToast(
        "plan",
        COPY.monthlyPlan.autosaved.title,
        COPY.monthlyPlan.autosaved.description
      ),
  },

  profile: {
    updated: () =>
      showSuccess(
        COPY.profile.updated.title,
        COPY.profile.updated.description
      ),
  },

  persistence: {
    removedFromDevice: () =>
      showSuccess(
        COPY.persistence.removedFromDevice.title,
        COPY.persistence.removedFromDevice.description
      ),

    cloudUnavailableLocalFallback: () =>
      showInfo(
        COPY.persistence.cloudUnavailableLocalFallback.title,
        COPY.persistence.cloudUnavailableLocalFallback.description
      ),
  },

  errors: {
    salarySessionDeleteFailed: () =>
      showError(
        COPY.errors.salarySessionDelete.title,
        COPY.errors.salarySessionDelete.description
      ),

    offerComparisonDeleteFailed: () =>
      showError(
        COPY.errors.offerComparisonDelete.title,
        COPY.errors.offerComparisonDelete.description
      ),
  },
} as const;

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  profileUpdateSchema,
  type ProfileUpdateFormData,
} from "@/lib/schemas/auth.schema";
import { useAuthStore } from "@/lib/stores/use-auth-store";
import { ProfilePageSkeleton } from "@/components/shared/loading-skeletons";
import { appToast } from "@/lib/notify/app-notify";
import { hasPremiumProductAccess } from "@/lib/access/product-access";
import { openPremiumPlansModal } from "@/lib/stores/use-premium-plans-modal-store";
import { PremiumWelcomeDialog } from "@/components/features/billing/premium-welcome-dialog";

export default function ProfilePage() {
  const router = useRouter();
  const user = useAuthStore((s) => s.user);
  const authReady = useAuthStore((s) => s.authReady);
  const updateProfile = useAuthStore((s) => s.updateProfile);
  const logout = useAuthStore((s) => s.logout);
  const [welcomeDismissed, setWelcomeDismissed] = useState(false);

  const form = useForm<ProfileUpdateFormData>({
    resolver: zodResolver(profileUpdateSchema),
    defaultValues: {
      displayName: "",
      company: "",
      role: "",
    },
  });

  useEffect(() => {
    if (!user) {
      router.replace("/login?from=/profile");
      return;
    }
    form.reset({
      displayName: user.displayName,
      company: user.company ?? "",
      role: user.role ?? "",
    });
  }, [user, router, form]);

  const isPremium = hasPremiumProductAccess(user?.planTier);

  const shouldShowWelcome =
    Boolean(authReady && user && isPremium) &&
    typeof globalThis !== "undefined" &&
    typeof globalThis.window !== "undefined" &&
    new URLSearchParams(globalThis.window.location.search).get("welcome") ===
      "premium" &&
    !welcomeDismissed;

  if (!authReady || !user) {
    return <ProfilePageSkeleton />;
  }

  // `isPremium` already computed above.

  const onSave = async (data: ProfileUpdateFormData) => {
    const result = await updateProfile({
      displayName: data.displayName,
      company: data.company ?? "",
      role: data.role || undefined,
    });
    if (!result.ok) {
      form.setError("root", { message: result.error });
      return;
    }
    form.reset(data);
    appToast.profile.updated();
  };

  return (
    <PageShell narrow className="py-8 md:py-10">
      <SectionHeader
        title="Profile"
        subtitle="Identity and workplace — keep it light; salary tools stay one click away."
      />

      <div className="mt-8 rounded-2xl border border-navy-200/50 bg-white p-6 md:p-8 shadow-sm space-y-8">
        <div>
          <p className="text-label text-navy-400 mb-1">Plan</p>
          <p className="text-sm font-medium text-navy-800 capitalize">
            {user.planTier}
          </p>
          {!isPremium ? (
            <div className="mt-3">
              <button
                type="button"
                className="inline-flex items-center text-sm font-semibold text-teal-700 hover:underline"
                onClick={() => openPremiumPlansModal()}
              >
                Upgrade to Premium →
              </button>
            </div>
          ) : (
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <p className="text-xs text-navy-500">
                Premium is active. Your advanced metrics and tools are unlocked.
              </p>
              <Link
                href="/profile/billing"
                className="text-xs font-semibold text-teal-700 hover:underline"
              >
                Manage plan →
              </Link>
            </div>
          )}
        </div>

        <div>
          <p className="text-label text-navy-400 mb-1">Email</p>
          <p className="text-sm font-medium text-navy-800">{user.email}</p>
          <p className="text-xs text-navy-400 mt-1">
            Sign-in email can&apos;t be changed here.
          </p>
        </div>

        <form onSubmit={form.handleSubmit(onSave)} className="space-y-5">
          {form.formState.errors.root && (
            <p className="text-sm text-danger-600 bg-danger-50 rounded-lg px-3 py-2">
              {form.formState.errors.root.message}
            </p>
          )}
          <div className="space-y-2">
            <Label htmlFor="pf-name">Name</Label>
            <Input
              id="pf-name"
              className="rounded-xl h-10"
              {...form.register("displayName")}
            />
            {form.formState.errors.displayName && (
              <p className="text-xs text-danger-600">
                {form.formState.errors.displayName.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="pf-company">Company</Label>
            <Input
              id="pf-company"
              placeholder="e.g. Acme India Pvt Ltd"
              className="rounded-xl h-10"
              {...form.register("company")}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="pf-role">Role / designation (optional)</Label>
            <Input
              id="pf-role"
              placeholder="e.g. Senior Product Manager"
              className="rounded-xl h-10"
              {...form.register("role")}
            />
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="rounded-full bg-teal-600 hover:bg-teal-700 px-6"
            >
              {form.formState.isSubmitting ? (
                <>
                  <Loader2 className="mr-2 size-4 animate-spin" aria-hidden />
                  Saving…
                </>
              ) : (
                "Save changes"
              )}
            </Button>
            <Button
              type="button"
              variant="outline"
              className="rounded-full border-navy-200"
              onClick={() => {
                logout();
                router.replace("/login");
                router.refresh();
              }}
            >
              Sign out
            </Button>
            <Link
              href="/salary"
              className="inline-flex items-center text-sm font-medium text-teal-600 hover:underline py-2"
            >
              Back to salary
            </Link>
          </div>
        </form>
      </div>

      <PremiumWelcomeDialog
        open={shouldShowWelcome}
        onOpenChange={(open) => {
          if (open) return;
          setWelcomeDismissed(true);
          router.replace("/profile");
        }}
        onPrimary={() => router.push("/salary/premium/offer-comparison")}
        onSecondary={() => router.push("/profile/billing")}
      />
    </PageShell>
  );
}

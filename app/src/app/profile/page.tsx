"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
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

export default function ProfilePage() {
  const router = useRouter();
  const user = useAuthStore((s) => s.user);
  const updateProfile = useAuthStore((s) => s.updateProfile);
  const logout = useAuthStore((s) => s.logout);

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

  if (!user) {
    return (
      <PageShell narrow className="py-16">
        <p className="text-center text-navy-500">Loading…</p>
      </PageShell>
    );
  }

  const onSave = (data: ProfileUpdateFormData) => {
    updateProfile({
      displayName: data.displayName,
      company: data.company ?? "",
      role: data.role || undefined,
    });
    form.reset(data);
  };

  return (
    <PageShell narrow className="py-8 md:py-10">
      <SectionHeader
        title="Profile"
        subtitle="Identity and workplace — keep it light; salary tools stay one click away."
      />

      <div className="mt-8 rounded-2xl border border-navy-200/50 bg-white p-6 md:p-8 shadow-sm space-y-8">
        <div>
          <p className="text-label text-navy-400 mb-1">Email</p>
          <p className="text-sm font-medium text-navy-800">{user.email}</p>
          <p className="text-xs text-navy-400 mt-1">
            Sign-in email can&apos;t be changed here.
          </p>
        </div>

        <form onSubmit={form.handleSubmit(onSave)} className="space-y-5">
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
              className="rounded-full bg-teal-600 hover:bg-teal-700 px-6"
            >
              Save changes
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
    </PageShell>
  );
}

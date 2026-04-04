export function ConfigureSupabaseMessage() {
  return (
    <ul className="mt-4 list-disc space-y-2 pl-5 text-left text-sm text-navy-600">
      <li>
        <code className="rounded bg-navy-100 px-1.5 py-0.5 text-xs">
          NEXT_PUBLIC_SUPABASE_URL
        </code>
      </li>
      <li>
        <code className="rounded bg-navy-100 px-1.5 py-0.5 text-xs">
          NEXT_PUBLIC_SUPABASE_ANON_KEY
        </code>
      </li>
    </ul>
  );
}

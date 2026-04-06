import { NextResponse } from "next/server";

export async function middleware() {
  // Temporary safety middleware: never 500 the site on Edge.
  // We’ll reintroduce auth gating once the Vercel Edge `__dirname` crash source is removed.
  return NextResponse.next();
}

export const config = {
  matcher: [String.raw`/((?!_next/static|_next/image|.*\..*).*)`],
};

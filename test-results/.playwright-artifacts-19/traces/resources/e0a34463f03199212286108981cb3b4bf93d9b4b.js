(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/tooltip.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tooltip",
    ()=>Tooltip,
    "TooltipContent",
    ()=>TooltipContent,
    "TooltipProvider",
    ()=>TooltipProvider,
    "TooltipTrigger",
    ()=>TooltipTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Tooltip$3e$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/react/esm/tooltip/index.parts.js [app-client] (ecmascript) <export * as Tooltip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function TooltipProvider({ delay = 0, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Tooltip$3e$__["Tooltip"].Provider, {
        "data-slot": "tooltip-provider",
        delay: delay,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tooltip.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = TooltipProvider;
function Tooltip({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Tooltip$3e$__["Tooltip"].Root, {
        "data-slot": "tooltip",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tooltip.tsx",
        lineNumber: 21,
        columnNumber: 10
    }, this);
}
_c1 = Tooltip;
function TooltipTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Tooltip$3e$__["Tooltip"].Trigger, {
        "data-slot": "tooltip-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tooltip.tsx",
        lineNumber: 25,
        columnNumber: 10
    }, this);
}
_c2 = TooltipTrigger;
function TooltipContent({ className, side = "top", sideOffset = 4, align = "center", alignOffset = 0, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Tooltip$3e$__["Tooltip"].Portal, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Tooltip$3e$__["Tooltip"].Positioner, {
            align: align,
            alignOffset: alignOffset,
            side: side,
            sideOffset: sideOffset,
            className: "isolate z-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Tooltip$3e$__["Tooltip"].Popup, {
                "data-slot": "tooltip-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("z-50 inline-flex w-fit max-w-xs origin-(--transform-origin) items-center gap-1.5 rounded-md bg-foreground px-3 py-1.5 text-xs text-background has-data-[slot=kbd]:pr-1.5 data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 **:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-sm data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$tooltip$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Tooltip$3e$__["Tooltip"].Arrow, {
                        className: "z-50 size-2.5 translate-y-[calc(-50%-2px)] rotate-45 rounded-[2px] bg-foreground fill-foreground data-[side=bottom]:top-1 data-[side=inline-end]:top-1/2! data-[side=inline-end]:-left-1 data-[side=inline-end]:-translate-y-1/2 data-[side=inline-start]:top-1/2! data-[side=inline-start]:-right-1 data-[side=inline-start]:-translate-y-1/2 data-[side=left]:top-1/2! data-[side=left]:-right-1 data-[side=left]:-translate-y-1/2 data-[side=right]:top-1/2! data-[side=right]:-left-1 data-[side=right]:-translate-y-1/2 data-[side=top]:-bottom-2.5"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/tooltip.tsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/tooltip.tsx",
                lineNumber: 50,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/tooltip.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/tooltip.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_c3 = TooltipContent;
;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "TooltipProvider");
__turbopack_context__.k.register(_c1, "Tooltip");
__turbopack_context__.k.register(_c2, "TooltipTrigger");
__turbopack_context__.k.register(_c3, "TooltipContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/sonner.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toaster",
    ()=>Toaster
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
"use client";
;
;
function Toaster() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toaster"], {
        position: "top-right",
        offset: {
            top: "4.25rem",
            right: "1rem"
        },
        mobileOffset: {
            top: "4.25rem",
            right: "0.75rem"
        },
        visibleToasts: 4,
        expand: false,
        gap: 10,
        richColors: false,
        closeButton: false,
        toastOptions: {
            duration: 3200,
            classNames: {
                toast: "group/toast flex w-[min(100vw-1.5rem,20rem)] rounded-2xl border border-navy-200/90 " + "bg-white p-3.5 shadow-lg shadow-navy-900/[0.07] !gap-3 !items-start " + "font-sans backdrop-blur-[2px]",
                content: "!gap-2",
                title: "font-heading !font-semibold !text-[0.8125rem] !leading-snug !text-navy-800 !tracking-tight",
                description: "!text-xs !leading-snug !text-navy-500 !font-normal !mt-0.5",
                icon: "!size-[1.125rem] !shrink-0",
                default: "!border-navy-200/95 !bg-white [&_[data-icon]]:!text-teal-600",
                success: "!border-teal-200/95 !bg-gradient-to-b !from-teal-50/98 !to-white " + "!shadow-md !shadow-teal-900/[0.06] [&_[data-icon]]:!text-teal-600",
                error: "!border-danger-200/95 !bg-gradient-to-b !from-danger-50/90 !to-white " + "[&_[data-icon]]:!text-danger-600",
                info: "!border-teal-200/70 !bg-gradient-to-b !from-teal-50/40 !to-white " + "[&_[data-icon]]:!text-teal-600",
                warning: "!border-amber-200/90 !bg-gradient-to-b !from-amber-50/80 !to-white " + "[&_[data-icon]]:!text-amber-600"
            }
        }
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sonner.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = Toaster;
var _c;
__turbopack_context__.k.register(_c, "Toaster");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/supabase/env.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Supports either Next.js public env names or plain SUPABASE_* (e.g. server-only setups).
 * The browser bundle only receives NEXT_PUBLIC_* variables at build time.
 */ __turbopack_context__.s([
    "getSupabaseAnonKey",
    ()=>getSupabaseAnonKey,
    "getSupabaseUrl",
    ()=>getSupabaseUrl,
    "isSupabaseConfigured",
    ()=>isSupabaseConfigured
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
function getSupabaseUrl() {
    return ("TURBOPACK compile-time value", "https://gytvzmfsutufhkmdrosf.supabase.co")?.trim() || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.SUPABASE_URL?.trim() || "";
}
function getSupabaseAnonKey() {
    return ("TURBOPACK compile-time value", "sb_publishable_k8SD2kgzUujOpXzTUrYZoA_tXjm6aPd")?.trim() || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.SUPABASE_ANON_KEY?.trim() || "";
}
function isSupabaseConfigured() {
    return Boolean(getSupabaseUrl() && getSupabaseAnonKey());
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/supabase/client/browser.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createBrowserSupabaseClient",
    ()=>createBrowserSupabaseClient,
    "getBrowserSupabase",
    ()=>getBrowserSupabase,
    "tryGetBrowserSupabase",
    ()=>tryGetBrowserSupabase
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/ssr/dist/module/createBrowserClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/env.ts [app-client] (ecmascript)");
;
;
let browserClient = null;
function getBrowserSupabase() {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])()) {
        throw new Error("Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.");
    }
    if (!browserClient) {
        browserClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$ssr$2f$dist$2f$module$2f$createBrowserClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBrowserClient"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSupabaseUrl"])(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSupabaseAnonKey"])());
    }
    return browserClient;
}
function tryGetBrowserSupabase() {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])()) return null;
    try {
        return getBrowserSupabase();
    } catch  {
        return null;
    }
}
const createBrowserSupabaseClient = getBrowserSupabase;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/supabase/query-keys.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "queryKeys",
    ()=>queryKeys
]);
const queryKeys = {
    me: [
        "me"
    ],
    salarySessions: {
        root: [
            "salary-sessions"
        ],
        list: (limit)=>[
                ...queryKeys.salarySessions.root,
                "list",
                limit
            ],
        detail: (id)=>[
                ...queryKeys.salarySessions.root,
                "detail",
                id
            ]
    },
    offerSessions: {
        root: [
            "offer-sessions"
        ],
        list: (limit)=>[
                ...queryKeys.offerSessions.root,
                "list",
                limit
            ],
        detail: (id)=>[
                ...queryKeys.offerSessions.root,
                "detail",
                id
            ]
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/supabase/auth/map-user.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mapProfileToUser",
    ()=>mapProfileToUser
]);
function mapProfileToUser(authUser, row) {
    const planTier = row?.plan_tier === "premium" ? "premium" : "free";
    const metaName = authUser.user_metadata?.display_name;
    const emailLocal = authUser.email?.split("@")[0];
    return {
        id: authUser.id,
        email: authUser.email ?? "",
        displayName: row?.display_name ?? (typeof metaName === "string" ? metaName : undefined) ?? emailLocal ?? "User",
        company: row?.company ?? "",
        role: row?.role ?? undefined,
        planTier,
        profileUpdatedAt: row?.updated_at
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/supabase/queries/profile.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchProfileRow",
    ()=>fetchProfileRow,
    "updateProfileRow",
    ()=>updateProfileRow
]);
async function fetchProfileRow(supabase, userId) {
    const { data, error } = await supabase.from("profiles").select("*").eq("id", userId).maybeSingle();
    if (error) throw error;
    return data;
}
async function updateProfileRow(supabase, userId, patch) {
    const { data, error } = await supabase.from("profiles").update(patch).eq("id", userId).select("*").single();
    if (error) throw error;
    return data;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/persistence/workspace-session-cookies.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * First-party cookies: last active salary session (local or cloud UUID) and
 * offer-comparison workspace. Cleared on sign-out; long max-age survives restarts.
 */ __turbopack_context__.s([
    "SALARY_SESSION_COOKIE_PRIMARY",
    ()=>SALARY_SESSION_COOKIE_PRIMARY,
    "clearAllWorkspaceSessionCookies",
    ()=>clearAllWorkspaceSessionCookies,
    "clearOfferWorkspaceCookie",
    ()=>clearOfferWorkspaceCookie,
    "clearSalarySessionIdCookie",
    ()=>clearSalarySessionIdCookie,
    "getOfferWorkspaceCookie",
    ()=>getOfferWorkspaceCookie,
    "isLikelyUuid",
    ()=>isLikelyUuid,
    "readSalarySessionIdFromCookie",
    ()=>readSalarySessionIdFromCookie,
    "setOfferWorkspaceCookie",
    ()=>setOfferWorkspaceCookie,
    "writeSalarySessionIdCookie",
    ()=>writeSalarySessionIdCookie
]);
const SALARY_SESSION_COOKIE_PRIMARY = "inhand_last_salary_session";
const LEGACY_SALARY_LOCAL = "inhand_active_salary_local";
const LEGACY_SALARY_CLOUD = "inhand_active_salary_cloud";
const OFFER_COOKIE = "inhand_active_offer_workspace";
const MAX_AGE_SEC = 60 * 60 * 24 * 180;
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
function readRaw(name) {
    if (typeof document === "undefined") return null;
    const prefix = `${name}=`;
    for (const part of document.cookie.split(";")){
        const p = part.trim();
        if (p.startsWith(prefix)) {
            try {
                return decodeURIComponent(p.slice(prefix.length));
            } catch  {
                return null;
            }
        }
    }
    return null;
}
function writeRaw(name, value) {
    if (typeof document === "undefined") return;
    document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=${MAX_AGE_SEC}; SameSite=Lax`;
}
function expireRaw(name) {
    if (typeof document === "undefined") return;
    document.cookie = `${name}=; path=/; max-age=0`;
}
function readSalarySessionIdFromCookie() {
    const primary = readRaw(SALARY_SESSION_COOKIE_PRIMARY);
    if (primary && primary.length > 0) return primary;
    const local = readRaw(LEGACY_SALARY_LOCAL);
    if (local && local.length > 0) {
        writeRaw(SALARY_SESSION_COOKIE_PRIMARY, local);
        expireRaw(LEGACY_SALARY_LOCAL);
        return local;
    }
    const cloud = readRaw(LEGACY_SALARY_CLOUD);
    if (cloud && cloud.length > 0) {
        writeRaw(SALARY_SESSION_COOKIE_PRIMARY, cloud);
        expireRaw(LEGACY_SALARY_CLOUD);
        return cloud;
    }
    return null;
}
function writeSalarySessionIdCookie(id) {
    writeRaw(SALARY_SESSION_COOKIE_PRIMARY, id);
    expireRaw(LEGACY_SALARY_LOCAL);
    expireRaw(LEGACY_SALARY_CLOUD);
}
function clearSalarySessionIdCookie() {
    expireRaw(SALARY_SESSION_COOKIE_PRIMARY);
    expireRaw(LEGACY_SALARY_LOCAL);
    expireRaw(LEGACY_SALARY_CLOUD);
}
function getOfferWorkspaceCookie() {
    const v = readRaw(OFFER_COOKIE);
    return v && v.length > 0 ? v : null;
}
function setOfferWorkspaceCookie(id) {
    writeRaw(OFFER_COOKIE, id);
}
function clearOfferWorkspaceCookie() {
    expireRaw(OFFER_COOKIE);
}
function clearAllWorkspaceSessionCookies() {
    clearSalarySessionIdCookie();
    expireRaw(OFFER_COOKIE);
}
function isLikelyUuid(id) {
    return UUID_RE.test(id);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/stores/use-lifestyle-store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLifestyleStore",
    ()=>useLifestyleStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const defaultExpenses = {
    rent: 45_000,
    food: 12_000,
    transport: 8_500,
    misc: 5_000,
    utilities: 0,
    shopping: 0,
    savings: 0,
    investments: 0
};
const useLifestyleStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        expenses: defaultExpenses,
        setExpense: (key, value)=>set((state)=>({
                    expenses: {
                        ...state.expenses,
                        [key]: Math.max(0, Math.round(value))
                    }
                })),
        hydrateFromJson: (patch)=>set((state)=>({
                    expenses: {
                        ...state.expenses,
                        ...patch ?? {}
                    }
                })),
        calculateSurplus: (monthlyInHand)=>{
            const e = get().expenses;
            const livingExpenses = e.rent + e.food + e.transport + e.misc + e.utilities + e.shopping;
            const plannedSavings = e.savings;
            const plannedInvestments = e.investments;
            const totalMonthlyOutflow = livingExpenses + plannedSavings + plannedInvestments;
            const surplus = monthlyInHand - totalMonthlyOutflow;
            const surplusPercent = monthlyInHand > 0 ? Number((surplus / monthlyInHand * 100).toFixed(1)) : 0;
            return {
                livingExpenses,
                plannedSavings,
                plannedInvestments,
                totalMonthlyOutflow,
                totalExpenses: livingExpenses,
                netIncome: monthlyInHand,
                surplus,
                surplusPercent,
                isDeficit: surplus < 0
            };
        },
        reset: ()=>set({
                expenses: defaultExpenses
            })
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/constants/city-tiers.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CITY_TIERS",
    ()=>CITY_TIERS
]);
const CITY_TIERS = [
    {
        value: "tier1",
        label: "Tier 1",
        sublabel: "Metro",
        hraPercent: 0.5
    },
    {
        value: "tier2",
        label: "Tier 2",
        sublabel: "Urban",
        hraPercent: 0.4
    },
    {
        value: "tier3",
        label: "Tier 3",
        sublabel: "Semi-Urban",
        hraPercent: 0.3
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/constants/tax-slabs.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Indian Income Tax Slabs — FY 2025-26 (AY 2026-27)
 * Source: Income Tax Act. Update these when new budget is announced.
 */ __turbopack_context__.s([
    "CESS_RATE",
    ()=>CESS_RATE,
    "EPF_RATE",
    ()=>EPF_RATE,
    "EPF_WAGE_CEILING",
    ()=>EPF_WAGE_CEILING,
    "NEW_REGIME_SLABS",
    ()=>NEW_REGIME_SLABS,
    "OLD_REGIME_SLABS",
    ()=>OLD_REGIME_SLABS,
    "PROFESSIONAL_TAX_MONTHLY",
    ()=>PROFESSIONAL_TAX_MONTHLY,
    "REBATE_MAX_NEW",
    ()=>REBATE_MAX_NEW,
    "REBATE_MAX_OLD",
    ()=>REBATE_MAX_OLD,
    "REBATE_THRESHOLD_NEW",
    ()=>REBATE_THRESHOLD_NEW,
    "REBATE_THRESHOLD_OLD",
    ()=>REBATE_THRESHOLD_OLD,
    "STANDARD_DEDUCTION",
    ()=>STANDARD_DEDUCTION
]);
const OLD_REGIME_SLABS = [
    {
        min: 0,
        max: 250000,
        rate: 0
    },
    {
        min: 250001,
        max: 500000,
        rate: 0.05
    },
    {
        min: 500001,
        max: 1000000,
        rate: 0.2
    },
    {
        min: 1000001,
        max: Infinity,
        rate: 0.3
    }
];
const NEW_REGIME_SLABS = [
    {
        min: 0,
        max: 400000,
        rate: 0
    },
    {
        min: 400001,
        max: 800000,
        rate: 0.05
    },
    {
        min: 800001,
        max: 1200000,
        rate: 0.1
    },
    {
        min: 1200001,
        max: 1600000,
        rate: 0.15
    },
    {
        min: 1600001,
        max: 2000000,
        rate: 0.2
    },
    {
        min: 2000001,
        max: 2400000,
        rate: 0.25
    },
    {
        min: 2400001,
        max: Infinity,
        rate: 0.3
    }
];
const STANDARD_DEDUCTION = 75000;
const REBATE_THRESHOLD_NEW = 1200000;
const REBATE_MAX_NEW = 60000;
const REBATE_THRESHOLD_OLD = 500000;
const REBATE_MAX_OLD = 12500;
const CESS_RATE = 0.04;
const PROFESSIONAL_TAX_MONTHLY = 200;
const EPF_RATE = 0.12;
const EPF_WAGE_CEILING = 15000;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils/calculate-tax.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "allocateTaxableIncomeAcrossSlabs",
    ()=>allocateTaxableIncomeAcrossSlabs,
    "buildRegimeVisualizationModel",
    ()=>buildRegimeVisualizationModel,
    "calculateIncomeTax",
    ()=>calculateIncomeTax,
    "slabBracketSpanRupees",
    ()=>slabBracketSpanRupees
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$tax$2d$slabs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants/tax-slabs.ts [app-client] (ecmascript)");
;
/**
 * Calculate tax using progressive slab method.
 */ function calculateSlabTax(taxableIncome, slabs) {
    let tax = 0;
    for (const slab of slabs){
        if (taxableIncome <= 0) break;
        const taxableInSlab = Math.min(taxableIncome, slab.max - slab.min + 1);
        tax += taxableInSlab * slab.rate;
        taxableIncome -= taxableInSlab;
    }
    return tax;
}
function allocateTaxableIncomeAcrossSlabs(taxableIncome, slabs) {
    let remaining = taxableIncome;
    const amounts = [];
    for (const slab of slabs){
        if (remaining <= 0) {
            amounts.push(0);
            continue;
        }
        const inSlab = Math.min(remaining, slab.max - slab.min + 1);
        amounts.push(inSlab);
        remaining -= inSlab;
    }
    return amounts;
}
function slabBracketSpanRupees(slab, opts) {
    if (slab.max !== Number.POSITIVE_INFINITY) {
        return slab.max - slab.min + 1;
    }
    const cap = opts?.infinityCapRupees ?? 5_000_000;
    return cap;
}
function buildRegimeVisualizationModel(grossAnnualSalary, regime, oldRegimeAdditionalDeductions = 0) {
    const g = Math.max(0, Math.round(grossAnnualSalary));
    if (g <= 0) return null;
    const slabs = regime === "old" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$tax$2d$slabs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OLD_REGIME_SLABS"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$tax$2d$slabs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NEW_REGIME_SLABS"];
    const tax = calculateIncomeTax(g, regime, oldRegimeAdditionalDeductions);
    const taxableIncome = tax.taxableIncome;
    const allocations = allocateTaxableIncomeAcrossSlabs(taxableIncome, slabs);
    let topSlabIndex = -1;
    for(let i = slabs.length - 1; i >= 0; i--){
        if (allocations[i] > 0) {
            topSlabIndex = i;
            break;
        }
    }
    const topAlloc = topSlabIndex >= 0 ? allocations[topSlabIndex] : 0;
    const topSlabIncomeSharePercent = taxableIncome > 0 ? Math.round(topAlloc / taxableIncome * 1000) / 10 : 0;
    const spans = slabs.map((s, i)=>slabBracketSpanRupees(s, {
            infinityCapRupees: Math.max(500_000, Math.min(5_000_000, (allocations[i] ?? 0) * 2 || 500_000))
        }));
    const totalVisualSpan = spans.reduce((a, b)=>a + b, 0);
    return {
        regime,
        taxableIncome,
        estimatedAnnualTax: tax.annualTax,
        effectiveRatePercent: tax.effectiveRate,
        slabs,
        allocations,
        topSlabIndex,
        topSlabIncomeSharePercent,
        totalVisualSpan,
        visualSpans: spans
    };
}
function calculateIncomeTax(grossAnnualIncome, regime, /** Additional deductions for old regime (80C, HRA exemption, etc.) */ additionalDeductions = 0) {
    const slabs = regime === "old" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$tax$2d$slabs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OLD_REGIME_SLABS"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$tax$2d$slabs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NEW_REGIME_SLABS"];
    const rebateThreshold = regime === "old" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$tax$2d$slabs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REBATE_THRESHOLD_OLD"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$tax$2d$slabs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REBATE_THRESHOLD_NEW"];
    // Apply standard deduction
    let taxableIncome = grossAnnualIncome - __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$tax$2d$slabs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STANDARD_DEDUCTION"];
    // Apply additional deductions (old regime only)
    if (regime === "old") {
        taxableIncome -= additionalDeductions;
    }
    taxableIncome = Math.max(0, taxableIncome);
    // Calculate slab tax
    let tax = calculateSlabTax(taxableIncome, slabs);
    // Apply Section 87A rebate
    // Old regime: partial rebate up to ₹12,500 when taxable income ≤ ₹5L
    // New regime: full rebate up to ₹60,000 when taxable income ≤ ₹12L (at ≤12L, slab tax never exceeds ₹60K)
    if (taxableIncome <= rebateThreshold) {
        const maxRebate = regime === "old" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$tax$2d$slabs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REBATE_MAX_OLD"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$tax$2d$slabs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REBATE_MAX_NEW"];
        tax = Math.max(0, tax - maxRebate);
    }
    // Add cess
    const cess = tax * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$tax$2d$slabs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CESS_RATE"];
    const totalTax = Math.round(tax + cess);
    return {
        annualTax: totalTax,
        monthlyTax: Math.round(totalTax / 12),
        effectiveRate: grossAnnualIncome > 0 ? Number((totalTax / grossAnnualIncome * 100).toFixed(1)) : 0,
        taxableIncome
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils/calculate-salary.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "aggregateBreakdownTotals",
    ()=>aggregateBreakdownTotals,
    "calculateSalaryBreakdown",
    ()=>calculateSalaryBreakdown,
    "deriveBreakdownSummaries",
    ()=>deriveBreakdownSummaries,
    "recalculateBreakdownFromComponents",
    ()=>recalculateBreakdownFromComponents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$city$2d$tiers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants/city-tiers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$tax$2d$slabs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants/tax-slabs.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$calculate$2d$tax$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/calculate-tax.ts [app-client] (ecmascript)");
;
;
;
function lineSourceFromMeta(meta) {
    return meta?.resultSource === "document_parsed" ? "parsed" : "estimated";
}
function comp(partial, defaultSource) {
    return {
        ...partial,
        lineSource: partial.lineSource ?? defaultSource
    };
}
function deriveBreakdownSummaries(components, statedAnnualCTC) {
    let fixedMonthly = 0;
    let variableMonthly = 0;
    let fixedAnnual = 0;
    let variableAnnualSum = 0;
    let deductions = 0;
    let annualIncomeTax = 0;
    let employerAnnual = 0;
    let earningsAnnual = 0;
    for (const c of components){
        if (c.group === "deductions") {
            deductions += c.monthlyValue;
            if (c.id === "income_tax") annualIncomeTax = c.annualValue;
            continue;
        }
        if (c.group === "employer_contributions") {
            employerAnnual += c.annualValue;
            continue;
        }
        if (c.group === "earnings" || c.type === "tax-free") {
            earningsAnnual += c.annualValue;
            if (c.section === "variable_pay") {
                variableMonthly += c.monthlyValue;
                variableAnnualSum += c.annualValue;
            } else {
                fixedMonthly += c.monthlyValue;
                fixedAnnual += c.annualValue;
            }
        }
    }
    const monthlyInHandExcludingVariable = Math.round(fixedMonthly - deductions);
    const monthlyInHandIncludingVariable = Math.round(fixedMonthly + variableMonthly - deductions);
    const modeledAnnualPackage = Math.round(earningsAnnual + employerAnnual);
    return {
        monthlyInHand: monthlyInHandExcludingVariable,
        monthlyInHandExcludingVariable,
        monthlyInHandIncludingVariable,
        annualIncomeTax,
        totalMonthlyDeductions: Math.round(deductions),
        takeHomePercent: statedAnnualCTC > 0 ? Number((monthlyInHandExcludingVariable * 12 / statedAnnualCTC * 100).toFixed(1)) : 0,
        annualFixedCashTotal: fixedAnnual,
        annualVariableCashTotal: variableAnnualSum,
        annualCashCompensation: fixedAnnual + variableAnnualSum,
        modeledAnnualPackage,
        statedAnnualCTC
    };
}
function aggregateBreakdownTotals(components, annualCTC) {
    return deriveBreakdownSummaries(components, annualCTC);
}
function calculateSalaryBreakdown(annualCTC, cityTier, regime, metaOverrides, options) {
    const tierConfig = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$city$2d$tiers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CITY_TIERS"].find((t)=>t.value === cityTier);
    const src = lineSourceFromMeta(metaOverrides);
    const variableAnnual = Math.max(0, Math.round(options?.variableAnnual ?? 0));
    const annualBasic = Math.round(annualCTC * 0.4);
    const monthlyBasic = Math.round(annualBasic / 12);
    const annualHRA = Math.round(annualBasic * tierConfig.hraPercent);
    const monthlyHRA = Math.round(annualHRA / 12);
    const pfBase = Math.min(monthlyBasic, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$tax$2d$slabs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EPF_WAGE_CEILING"]);
    const monthlyPFEmployee = Math.round(pfBase * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$tax$2d$slabs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EPF_RATE"]);
    const monthlyPFEmployer = Math.round(pfBase * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$tax$2d$slabs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EPF_RATE"]);
    const annualPFEmployee = monthlyPFEmployee * 12;
    const annualPFEmployer = monthlyPFEmployer * 12;
    // Common CTC packaging: gratuity accrual shown as ~4.81% of annual basic (illustrative).
    const annualGratuityAccrual = Math.round(annualBasic * 0.0481);
    const monthlyMeal = 3000;
    const monthlyTelecom = 2000;
    const annualMeal = monthlyMeal * 12;
    const annualTelecom = monthlyTelecom * 12;
    const monthlyVariable = variableAnnual > 0 ? Math.round(variableAnnual / 12) : 0;
    const annualDA = 0;
    const monthlyDA = 0;
    const annualFixedParts = annualBasic + annualHRA + annualDA + annualMeal + annualTelecom + variableAnnual + annualPFEmployer + annualGratuityAccrual;
    const annualSpecialAllowance = Math.max(0, annualCTC - annualFixedParts);
    const monthlySpecialAllowance = Math.round(annualSpecialAllowance / 12);
    const grossAnnualSalary = Math.max(0, annualCTC - annualPFEmployer - annualGratuityAccrual);
    const oldRegimeDeductions = regime === "old" ? annualPFEmployee + 150000 : 0;
    const taxResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$calculate$2d$tax$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateIncomeTax"])(grossAnnualSalary, regime, oldRegimeDeductions);
    const monthlyTax = taxResult.monthlyTax;
    const monthlyProfTax = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$tax$2d$slabs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROFESSIONAL_TAX_MONTHLY"];
    const components = [];
    components.push(comp({
        id: "basic",
        name: "Basic Salary",
        description: "Core fixed pay — many heads are linked to this",
        monthlyValue: monthlyBasic,
        annualValue: annualBasic,
        type: "earning",
        group: "earnings",
        section: "fixed_core",
        removable: false,
        tags: [
            "recurring"
        ]
    }, src), comp({
        id: "hra",
        name: "House Rent Allowance (HRA)",
        description: `${(tierConfig.hraPercent * 100).toFixed(0)}% of basic (${tierConfig.sublabel})`,
        monthlyValue: monthlyHRA,
        annualValue: annualHRA,
        type: "earning",
        group: "earnings",
        section: "fixed_core",
        removable: false,
        tags: [
            "tax_sensitive",
            "recurring"
        ]
    }, src), comp({
        id: "da",
        name: "Dearness Allowance (DA)",
        description: "Common in PSU / legacy structures — 0 if not applicable",
        monthlyValue: monthlyDA,
        annualValue: annualDA,
        type: "earning",
        group: "earnings",
        section: "fixed_core",
        removable: false,
        tags: [
            "conditional",
            "recurring"
        ]
    }, src), comp({
        id: "meal_allowance",
        name: "Meal / food allowance",
        description: "Rename or remove if your employer uses a different head",
        monthlyValue: monthlyMeal,
        annualValue: annualMeal,
        type: "tax-free",
        group: "earnings",
        section: "allowance",
        removable: true,
        tags: [
            "recurring",
            "tax_sensitive"
        ]
    }, src), comp({
        id: "telecom_reimbursement",
        name: "Telecom / internet reimbursement",
        description: "Illustrative — edit to match your offer",
        monthlyValue: monthlyTelecom,
        annualValue: annualTelecom,
        type: "tax-free",
        group: "earnings",
        section: "allowance",
        removable: true,
        tags: [
            "recurring",
            "tax_sensitive"
        ]
    }, src), comp({
        id: "special_allowance",
        name: "Special Allowance",
        description: "Residual fixed pay after other CTC slices — add custom rows above as needed",
        monthlyValue: monthlySpecialAllowance,
        annualValue: annualSpecialAllowance,
        type: "earning",
        group: "earnings",
        section: "allowance",
        removable: false,
        tags: [
            "recurring",
            "tax_sensitive"
        ]
    }, src));
    if (variableAnnual > 0) {
        components.push(comp({
            id: "variable_pay",
            name: "Variable pay",
            description: "From your fixed + variable split (monthly = annual ÷ 12 for display)",
            monthlyValue: monthlyVariable,
            annualValue: variableAnnual,
            type: "earning",
            group: "earnings",
            section: "variable_pay",
            removable: false,
            tags: [
                "conditional",
                "one_time"
            ]
        }, src));
    }
    components.push(comp({
        id: "employer_pf",
        name: "Employer PF contribution",
        description: "Company PF (CTC — not monthly cash in-hand)",
        monthlyValue: monthlyPFEmployer,
        annualValue: annualPFEmployer,
        type: "employer",
        group: "employer_contributions",
        tags: [
            "employer_side",
            "recurring"
        ]
    }, src), comp({
        id: "gratuity_accrual",
        name: "Gratuity (accrual in CTC)",
        description: "Long-term benefit — illustrative % on basic",
        monthlyValue: Math.round(annualGratuityAccrual / 12),
        annualValue: annualGratuityAccrual,
        type: "employer",
        group: "employer_contributions",
        tags: [
            "employer_side",
            "conditional"
        ]
    }, src), comp({
        id: "employee_pf",
        name: "Employee PF contribution",
        description: "Your PF deduction (eligible wages × rate, capped)",
        monthlyValue: monthlyPFEmployee,
        annualValue: annualPFEmployee,
        type: "deduction",
        group: "deductions",
        tags: [
            "recurring"
        ]
    }, src), comp({
        id: "professional_tax",
        name: "Professional Tax",
        description: "State levy (illustrative fixed amount)",
        monthlyValue: monthlyProfTax,
        annualValue: monthlyProfTax * 12,
        type: "deduction",
        group: "deductions",
        tags: [
            "recurring"
        ]
    }, src), comp({
        id: "income_tax",
        name: "Income Tax (TDS)",
        description: "Estimated from regime + modeled gross",
        monthlyValue: monthlyTax,
        annualValue: taxResult.annualTax,
        type: "deduction",
        group: "deductions",
        tags: [
            "conditional",
            "tax_sensitive"
        ]
    }, src));
    const totals = deriveBreakdownSummaries(components, annualCTC);
    const meta = {
        resultSource: metaOverrides?.resultSource ?? "manual_estimated",
        documentFileName: metaOverrides?.documentFileName,
        componentsAdjusted: metaOverrides?.componentsAdjusted ?? false
    };
    return {
        ...totals,
        components,
        meta
    };
}
function rowById(prev, id) {
    return prev.find((c)=>c.id === id);
}
function isRowOverridden(row) {
    return row?.lineSource === "user_edited";
}
function monthlyOf(prev, id) {
    return Math.max(0, Math.round(rowById(prev, id)?.monthlyValue ?? 0));
}
function copyTags(prev, id, fallback) {
    return rowById(prev, id)?.tags ?? fallback;
}
function hasRow(prev, id) {
    return prev.some((c)=>c.id === id);
}
function customAllowances(prev) {
    return prev.filter((c)=>c.isCustom && c.section === "allowance");
}
function customVariableRows(prev) {
    return prev.filter((c)=>c.isCustom && c.section === "variable_pay");
}
function cloneCustomFromPrev(prev, row, base) {
    const p = rowById(prev, row.id);
    const ls = p.lineSource === "user_edited" ? "user_edited" : base;
    return comp({
        ...p,
        lineSource: ls
    }, base);
}
function recalculateBreakdownFromComponents(prev, ctx) {
    const tierConfig = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$city$2d$tiers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CITY_TIERS"].find((t)=>t.value === ctx.cityTier);
    const base = ctx.baseLineSource;
    const lineSrc = (id)=>isRowOverridden(rowById(prev, id)) ? "user_edited" : base;
    let monthlyBasic;
    let annualBasic;
    if (isRowOverridden(rowById(prev, "basic"))) {
        monthlyBasic = monthlyOf(prev, "basic");
        annualBasic = monthlyBasic * 12;
    } else {
        annualBasic = Math.round(ctx.annualCTC * 0.4);
        monthlyBasic = Math.round(annualBasic / 12);
    }
    let monthlyHRA;
    let annualHRA;
    if (isRowOverridden(rowById(prev, "hra"))) {
        monthlyHRA = monthlyOf(prev, "hra");
        annualHRA = monthlyHRA * 12;
    } else {
        annualHRA = Math.round(annualBasic * tierConfig.hraPercent);
        monthlyHRA = Math.round(annualHRA / 12);
    }
    let monthlyDA;
    let annualDA;
    if (!hasRow(prev, "da")) {
        monthlyDA = 0;
        annualDA = 0;
    } else if (isRowOverridden(rowById(prev, "da"))) {
        monthlyDA = monthlyOf(prev, "da");
        annualDA = monthlyDA * 12;
    } else {
        monthlyDA = 0;
        annualDA = 0;
    }
    const DEF_MEAL = 3000;
    const DEF_TELE = 2000;
    let monthlyMeal = 0;
    let annualMeal = 0;
    if (hasRow(prev, "meal_allowance")) {
        if (isRowOverridden(rowById(prev, "meal_allowance"))) {
            monthlyMeal = monthlyOf(prev, "meal_allowance");
            annualMeal = monthlyMeal * 12;
        } else {
            monthlyMeal = DEF_MEAL;
            annualMeal = DEF_MEAL * 12;
        }
    }
    let monthlyTelecom = 0;
    let annualTelecom = 0;
    if (hasRow(prev, "telecom_reimbursement")) {
        if (isRowOverridden(rowById(prev, "telecom_reimbursement"))) {
            monthlyTelecom = monthlyOf(prev, "telecom_reimbursement");
            annualTelecom = monthlyTelecom * 12;
        } else {
            monthlyTelecom = DEF_TELE;
            annualTelecom = DEF_TELE * 12;
        }
    }
    const ctxVariableAnnual = Math.max(0, Math.round(ctx.variableAnnual));
    let monthlyVariable = 0;
    let variableAnnualStandard = 0;
    if (hasRow(prev, "variable_pay")) {
        if (ctxVariableAnnual > 0 && !isRowOverridden(rowById(prev, "variable_pay"))) {
            variableAnnualStandard = ctxVariableAnnual;
            monthlyVariable = Math.round(ctxVariableAnnual / 12);
        } else {
            monthlyVariable = monthlyOf(prev, "variable_pay");
            variableAnnualStandard = monthlyVariable * 12;
        }
    } else if (ctxVariableAnnual > 0) {
        variableAnnualStandard = ctxVariableAnnual;
        monthlyVariable = Math.round(ctxVariableAnnual / 12);
    }
    const allowCustoms = customAllowances(prev);
    const customAllowAnnualSum = allowCustoms.reduce((s, c)=>s + (rowById(prev, c.id)?.annualValue ?? 0), 0);
    const varCustoms = customVariableRows(prev);
    const customVarAnnualSum = varCustoms.reduce((s, c)=>s + (rowById(prev, c.id)?.annualValue ?? 0), 0);
    const variableBlockAnnual = variableAnnualStandard + customVarAnnualSum;
    const pfBase = Math.min(monthlyBasic, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$tax$2d$slabs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EPF_WAGE_CEILING"]);
    let monthlyPFEmployee;
    let annualPFEmployee;
    if (isRowOverridden(rowById(prev, "employee_pf"))) {
        monthlyPFEmployee = monthlyOf(prev, "employee_pf");
        annualPFEmployee = monthlyPFEmployee * 12;
    } else {
        monthlyPFEmployee = Math.round(pfBase * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$tax$2d$slabs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EPF_RATE"]);
        annualPFEmployee = monthlyPFEmployee * 12;
    }
    let monthlyPFEmployer;
    let annualPFEmployer;
    if (isRowOverridden(rowById(prev, "employer_pf"))) {
        monthlyPFEmployer = monthlyOf(prev, "employer_pf");
        annualPFEmployer = monthlyPFEmployer * 12;
    } else {
        monthlyPFEmployer = Math.round(pfBase * __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$tax$2d$slabs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EPF_RATE"]);
        annualPFEmployer = monthlyPFEmployer * 12;
    }
    let annualGratuityAccrual;
    let monthlyGratuity;
    if (isRowOverridden(rowById(prev, "gratuity_accrual"))) {
        monthlyGratuity = monthlyOf(prev, "gratuity_accrual");
        annualGratuityAccrual = monthlyGratuity * 12;
    } else {
        annualGratuityAccrual = Math.round(annualBasic * 0.0481);
        monthlyGratuity = Math.round(annualGratuityAccrual / 12);
    }
    let monthlySpecial;
    let annualSpecial;
    if (isRowOverridden(rowById(prev, "special_allowance"))) {
        monthlySpecial = monthlyOf(prev, "special_allowance");
        annualSpecial = monthlySpecial * 12;
    } else {
        annualSpecial = Math.max(0, ctx.annualCTC - annualBasic - annualHRA - annualDA - annualMeal - annualTelecom - customAllowAnnualSum - variableBlockAnnual - annualPFEmployer - annualGratuityAccrual);
        monthlySpecial = Math.round(annualSpecial / 12);
    }
    const grossAnnualSalary = Math.max(0, ctx.annualCTC - annualPFEmployer - annualGratuityAccrual);
    const oldRegimeDeductions = ctx.regime === "old" ? annualPFEmployee + 150000 : 0;
    const taxResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$calculate$2d$tax$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateIncomeTax"])(grossAnnualSalary, ctx.regime, oldRegimeDeductions);
    let monthlyTax;
    let annualTax;
    if (isRowOverridden(rowById(prev, "income_tax"))) {
        monthlyTax = monthlyOf(prev, "income_tax");
        annualTax = monthlyTax * 12;
    } else {
        monthlyTax = taxResult.monthlyTax;
        annualTax = taxResult.annualTax;
    }
    let monthlyProfTax;
    let annualProfTax;
    if (isRowOverridden(rowById(prev, "professional_tax"))) {
        monthlyProfTax = monthlyOf(prev, "professional_tax");
        annualProfTax = monthlyProfTax * 12;
    } else {
        monthlyProfTax = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$tax$2d$slabs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PROFESSIONAL_TAX_MONTHLY"];
        annualProfTax = monthlyProfTax * 12;
    }
    const daRow = rowById(prev, "da");
    const components = [
        comp({
            id: "basic",
            name: "Basic Salary",
            description: "Core fixed pay — many heads are linked to this",
            monthlyValue: monthlyBasic,
            annualValue: annualBasic,
            type: "earning",
            group: "earnings",
            section: "fixed_core",
            removable: false,
            tags: copyTags(prev, "basic", [
                "recurring"
            ]),
            lineSource: lineSrc("basic")
        }, base),
        comp({
            id: "hra",
            name: "House Rent Allowance (HRA)",
            description: `${(tierConfig.hraPercent * 100).toFixed(0)}% of basic (${tierConfig.sublabel})`,
            monthlyValue: monthlyHRA,
            annualValue: annualHRA,
            type: "earning",
            group: "earnings",
            section: "fixed_core",
            removable: false,
            tags: copyTags(prev, "hra", [
                "tax_sensitive",
                "recurring"
            ]),
            lineSource: lineSrc("hra")
        }, base),
        comp({
            id: "da",
            name: daRow?.name ?? "Dearness Allowance (DA)",
            description: daRow?.description ?? "Common in PSU / legacy structures — 0 if not applicable",
            monthlyValue: monthlyDA,
            annualValue: annualDA,
            type: "earning",
            group: "earnings",
            section: "fixed_core",
            removable: false,
            tags: copyTags(prev, "da", [
                "conditional",
                "recurring"
            ]),
            lineSource: lineSrc("da")
        }, base)
    ];
    if (hasRow(prev, "meal_allowance")) {
        components.push(comp({
            id: "meal_allowance",
            name: rowById(prev, "meal_allowance")?.name ?? "Meal / food allowance",
            description: rowById(prev, "meal_allowance")?.description ?? "Rename or remove if your employer uses a different head",
            monthlyValue: monthlyMeal,
            annualValue: annualMeal,
            type: "tax-free",
            group: "earnings",
            section: "allowance",
            removable: true,
            tags: copyTags(prev, "meal_allowance", [
                "recurring",
                "tax_sensitive"
            ]),
            lineSource: lineSrc("meal_allowance")
        }, base));
    }
    if (hasRow(prev, "telecom_reimbursement")) {
        components.push(comp({
            id: "telecom_reimbursement",
            name: rowById(prev, "telecom_reimbursement")?.name ?? "Telecom / internet reimbursement",
            description: rowById(prev, "telecom_reimbursement")?.description ?? "Illustrative — edit to match your offer",
            monthlyValue: monthlyTelecom,
            annualValue: annualTelecom,
            type: "tax-free",
            group: "earnings",
            section: "allowance",
            removable: true,
            tags: copyTags(prev, "telecom_reimbursement", [
                "recurring",
                "tax_sensitive"
            ]),
            lineSource: lineSrc("telecom_reimbursement")
        }, base));
    }
    for (const c of allowCustoms){
        components.push(cloneCustomFromPrev(prev, c, base));
    }
    components.push(comp({
        id: "special_allowance",
        name: rowById(prev, "special_allowance")?.name ?? "Special Allowance",
        description: isRowOverridden(rowById(prev, "special_allowance")) ? "Your entered amount" : "Residual after other CTC slices — add custom allowance rows above",
        monthlyValue: monthlySpecial,
        annualValue: annualSpecial,
        type: "earning",
        group: "earnings",
        section: "allowance",
        removable: false,
        tags: copyTags(prev, "special_allowance", [
            "recurring",
            "tax_sensitive"
        ]),
        lineSource: lineSrc("special_allowance")
    }, base));
    if (ctxVariableAnnual > 0 || hasRow(prev, "variable_pay")) {
        components.push(comp({
            id: "variable_pay",
            name: rowById(prev, "variable_pay")?.name ?? "Variable pay",
            description: ctxVariableAnnual > 0 ? "From your fixed + variable split (monthly = annual ÷ 12 for display)" : "Variable / performance component (edit annual or monthly)",
            monthlyValue: monthlyVariable,
            annualValue: variableAnnualStandard,
            type: "earning",
            group: "earnings",
            section: "variable_pay",
            removable: false,
            tags: copyTags(prev, "variable_pay", [
                "conditional",
                "one_time"
            ]),
            lineSource: lineSrc("variable_pay")
        }, base));
    }
    for (const c of varCustoms){
        components.push(cloneCustomFromPrev(prev, c, base));
    }
    components.push(comp({
        id: "employer_pf",
        name: "Employer PF contribution",
        description: "Company PF (CTC — not monthly cash in-hand)",
        monthlyValue: monthlyPFEmployer,
        annualValue: annualPFEmployer,
        type: "employer",
        group: "employer_contributions",
        tags: copyTags(prev, "employer_pf", [
            "employer_side",
            "recurring"
        ]),
        lineSource: lineSrc("employer_pf")
    }, base), comp({
        id: "gratuity_accrual",
        name: "Gratuity (accrual in CTC)",
        description: "Long-term benefit — illustrative % on basic",
        monthlyValue: monthlyGratuity,
        annualValue: annualGratuityAccrual,
        type: "employer",
        group: "employer_contributions",
        tags: copyTags(prev, "gratuity_accrual", [
            "employer_side",
            "conditional"
        ]),
        lineSource: lineSrc("gratuity_accrual")
    }, base), comp({
        id: "employee_pf",
        name: "Employee PF contribution",
        description: "Your PF deduction (eligible wages × rate, capped)",
        monthlyValue: monthlyPFEmployee,
        annualValue: annualPFEmployee,
        type: "deduction",
        group: "deductions",
        tags: copyTags(prev, "employee_pf", [
            "recurring"
        ]),
        lineSource: lineSrc("employee_pf")
    }, base), comp({
        id: "professional_tax",
        name: "Professional Tax",
        description: "State levy (illustrative fixed amount)",
        monthlyValue: monthlyProfTax,
        annualValue: annualProfTax,
        type: "deduction",
        group: "deductions",
        tags: copyTags(prev, "professional_tax", [
            "recurring"
        ]),
        lineSource: lineSrc("professional_tax")
    }, base), comp({
        id: "income_tax",
        name: "Income Tax (TDS)",
        description: isRowOverridden(rowById(prev, "income_tax")) ? "Your entered monthly TDS" : "Estimated from regime + modeled gross",
        monthlyValue: monthlyTax,
        annualValue: annualTax,
        type: "deduction",
        group: "deductions",
        tags: copyTags(prev, "income_tax", [
            "conditional",
            "tax_sensitive"
        ]),
        lineSource: lineSrc("income_tax")
    }, base));
    const totals = deriveBreakdownSummaries(components, ctx.annualCTC);
    const editBasis = ctx.salaryResultSource === "document_parsed" ? "user_edited_after_parse" : "user_edited_after_estimate";
    const meta = {
        resultSource: ctx.salaryResultSource,
        documentFileName: ctx.documentFileName,
        componentsAdjusted: true,
        breakdownEditBasis: editBasis
    };
    return {
        ...totals,
        components,
        meta
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/scheduling/defer-execution.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Central place for delayed (wall-clock) work. Feature code should import from
 * here instead of calling `setTimeout` / `clearTimeout` directly so scheduling
 * stays consistent and easy to audit.
 */ __turbopack_context__.s([
    "deferExecution",
    ()=>deferExecution,
    "waitForMs",
    ()=>waitForMs
]);
function deferExecution(delayMs, callback) {
    const handle = globalThis.setTimeout(callback, delayMs);
    return ()=>globalThis.clearTimeout(handle);
}
function waitForMs(ms) {
    return new Promise((resolve)=>{
        deferExecution(ms, ()=>resolve());
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/mocks/parse-salary-document.mock.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * ASSUMPTION: No server-side OCR/PDF parsing yet. This simulates extraction from
 * filename patterns and returns the same tax engine as manual entry, labeled as document-based.
 */ __turbopack_context__.s([
    "mockParseSalaryDocument",
    ()=>mockParseSalaryDocument
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scheduling$2f$defer$2d$execution$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/scheduling/defer-execution.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$calculate$2d$salary$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/calculate-salary.ts [app-client] (ecmascript)");
;
;
function inferAnnualCTCFromFileName(name) {
    const lakh = name.match(/(\d+(?:\.\d+)?)\s*l(?:akh)?/i);
    if (lakh) return Math.round(parseFloat(lakh[1]) * 100_000);
    const digits = name.match(/(\d{6,9})/);
    if (digits) return Math.min(parseInt(digits[1], 10), 999_999_999);
    return 1_800_000;
}
async function mockParseSalaryDocument(file, defaults) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scheduling$2f$defer$2d$execution$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["waitForMs"])(750);
    const annualCTC = inferAnnualCTCFromFileName(file.name);
    const taxRegime = file.name.toLowerCase().includes("old") ? "old" : file.name.toLowerCase().includes("new") ? "new" : defaults.taxRegime;
    const input = {
        fullName: "",
        email: "",
        annualCTC,
        compensationMode: "total_only",
        fixedAnnual: 0,
        variableAnnual: 0,
        cityTier: defaults.cityTier,
        taxRegime,
        resultSource: "document_parsed",
        documentFileName: file.name
    };
    const breakdown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$calculate$2d$salary$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateSalaryBreakdown"])(annualCTC, input.cityTier, input.taxRegime, {
        resultSource: "document_parsed",
        documentFileName: file.name
    });
    return {
        input,
        breakdown
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/stores/salary-breakdown-recalc-context.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildBreakdownRecalcContext",
    ()=>buildBreakdownRecalcContext
]);
function buildBreakdownRecalcContext(input) {
    const salaryResultSource = input.resultSource ?? "manual_estimated";
    return {
        annualCTC: input.annualCTC,
        cityTier: input.cityTier,
        regime: input.taxRegime,
        variableAnnual: input.compensationMode === "fixed_variable" ? input.variableAnnual ?? 0 : 0,
        baseLineSource: salaryResultSource === "document_parsed" ? "parsed" : "estimated",
        salaryResultSource,
        documentFileName: input.documentFileName
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/stores/use-salary-store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "emptySalaryInput",
    ()=>emptySalaryInput,
    "useSalaryStore",
    ()=>useSalaryStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$calculate$2d$salary$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/calculate-salary.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2f$parse$2d$salary$2d$document$2e$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mocks/parse-salary-document.mock.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$salary$2d$breakdown$2d$recalc$2d$context$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/salary-breakdown-recalc-context.ts [app-client] (ecmascript)");
;
;
;
;
const emptySalaryInput = {
    fullName: "",
    email: "",
    annualCTC: 0,
    compensationMode: "total_only",
    fixedAnnual: 0,
    variableAnnual: 0,
    cityTier: "tier1",
    taxRegime: "old",
    resultSource: "manual_estimated",
    documentFileName: undefined
};
const useSalaryStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        input: {
            ...emptySalaryInput
        },
        breakdown: null,
        activeSalaryHistoryId: null,
        setActiveSalaryHistoryId: (id)=>set({
                activeSalaryHistoryId: id
            }),
        setInput: (partial)=>set((state)=>({
                    input: {
                        ...state.input,
                        ...partial
                    }
                })),
        setTaxRegime: (taxRegime)=>set((state)=>{
                const nextInput = {
                    ...state.input,
                    taxRegime
                };
                return {
                    input: nextInput,
                    breakdown: state.breakdown != null ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$calculate$2d$salary$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recalculateBreakdownFromComponents"])(state.breakdown.components, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$salary$2d$breakdown$2d$recalc$2d$context$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildBreakdownRecalcContext"])(nextInput)) : state.breakdown
                };
            }),
        calculateBreakdown: ()=>{
            const { input } = get();
            if (input.annualCTC <= 0) return;
            const isDoc = input.resultSource === "document_parsed";
            const variableAnnual = input.compensationMode === "fixed_variable" ? input.variableAnnual ?? 0 : 0;
            const breakdown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$calculate$2d$salary$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateSalaryBreakdown"])(input.annualCTC, input.cityTier, input.taxRegime, {
                resultSource: isDoc ? "document_parsed" : "manual_estimated",
                documentFileName: isDoc ? input.documentFileName : undefined,
                componentsAdjusted: false
            }, {
                variableAnnual
            });
            set({
                breakdown
            });
        },
        applyParsedSalaryDocument: async (file)=>{
            const { input: current } = get();
            const { input, breakdown } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mocks$2f$parse$2d$salary$2d$document$2e$mock$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockParseSalaryDocument"])(file, {
                cityTier: current.cityTier,
                taxRegime: current.taxRegime
            });
            set({
                input,
                breakdown
            });
        },
        updateBreakdownComponentMonthly: (id, monthlyValue)=>{
            get().patchBreakdownComponent(id, {
                monthlyValue
            });
        },
        patchBreakdownComponent: (id, patch)=>{
            const { breakdown, input } = get();
            if (!breakdown) return;
            const next = breakdown.components.map((c)=>{
                if (c.id !== id) return c;
                let monthly = c.monthlyValue;
                let annual = c.annualValue;
                if (patch.monthlyValue !== undefined) {
                    monthly = Math.max(0, Math.round(patch.monthlyValue));
                    annual = monthly * 12;
                } else if (patch.annualValue !== undefined) {
                    annual = Math.max(0, Math.round(patch.annualValue));
                    monthly = Math.round(annual / 12);
                }
                const name = patch.name !== undefined ? patch.name.trim() || c.name : c.name;
                return {
                    ...c,
                    name,
                    monthlyValue: monthly,
                    annualValue: annual,
                    lineSource: "user_edited"
                };
            });
            set({
                breakdown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$calculate$2d$salary$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recalculateBreakdownFromComponents"])(next, (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$salary$2d$breakdown$2d$recalc$2d$context$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildBreakdownRecalcContext"])(input))
            });
        },
        addBreakdownAllowanceRow: ()=>{
            const { breakdown, input } = get();
            if (!breakdown) return;
            const id = `allow_${crypto.randomUUID().replace(/-/g, "").slice(0, 10)}`;
            const row = {
                id,
                name: "Custom allowance",
                description: "Rename to match your payslip (e.g. vehicle, washing)",
                monthlyValue: 0,
                annualValue: 0,
                type: "earning",
                group: "earnings",
                section: "allowance",
                lineSource: "user_edited",
                isCustom: true,
                removable: true,
                tags: [
                    "recurring",
                    "tax_sensitive"
                ]
            };
            set({
                breakdown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$calculate$2d$salary$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recalculateBreakdownFromComponents"])([
                    ...breakdown.components,
                    row
                ], (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$salary$2d$breakdown$2d$recalc$2d$context$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildBreakdownRecalcContext"])(input))
            });
        },
        addBreakdownVariableRow: ()=>{
            const { breakdown, input } = get();
            if (!breakdown) return;
            const id = `var_${crypto.randomUUID().replace(/-/g, "").slice(0, 10)}`;
            const row = {
                id,
                name: "Variable / bonus line",
                description: "Joining bonus, retention, profit share, etc.",
                monthlyValue: 0,
                annualValue: 0,
                type: "earning",
                group: "earnings",
                section: "variable_pay",
                lineSource: "user_edited",
                isCustom: true,
                removable: true,
                tags: [
                    "conditional",
                    "one_time"
                ]
            };
            set({
                breakdown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$calculate$2d$salary$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recalculateBreakdownFromComponents"])([
                    ...breakdown.components,
                    row
                ], (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$salary$2d$breakdown$2d$recalc$2d$context$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildBreakdownRecalcContext"])(input))
            });
        },
        removeBreakdownComponent: (id)=>{
            const { breakdown, input } = get();
            if (!breakdown) return;
            const row = breakdown.components.find((c)=>c.id === id);
            if (!row?.removable) return;
            set({
                breakdown: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$calculate$2d$salary$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recalculateBreakdownFromComponents"])(breakdown.components.filter((c)=>c.id !== id), (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$salary$2d$breakdown$2d$recalc$2d$context$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildBreakdownRecalcContext"])(input))
            });
        },
        reset: ()=>set({
                input: {
                    ...emptySalaryInput
                },
                breakdown: null,
                activeSalaryHistoryId: null
            })
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/salary/session-save/salary-session-save-logic.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "baselineFromSalarySessionRow",
    ()=>baselineFromSalarySessionRow,
    "salaryDraftSignature",
    ()=>salaryDraftSignature,
    "salaryStoreMatchesServerPayload",
    ()=>salaryStoreMatchesServerPayload
]);
function salaryDraftSignature(input, breakdown) {
    return `${JSON.stringify(input)}|${JSON.stringify(breakdown)}`;
}
function baselineFromSalarySessionRow(row) {
    return {
        input: row.input_json,
        breakdown: row.breakdown_json
    };
}
function salaryStoreMatchesServerPayload(storeInput, storeBreakdown, serverInput, serverBreakdown) {
    return {
        input: JSON.stringify(storeInput) === JSON.stringify(serverInput),
        breakdown: storeBreakdown != null && JSON.stringify(storeBreakdown) === JSON.stringify(serverBreakdown)
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/salary/apply-salary-session-detail-to-stores.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applySalarySessionDetailToStores",
    ()=>applySalarySessionDetailToStores,
    "consumeSkipNextSalaryFlush",
    ()=>consumeSkipNextSalaryFlush,
    "resetSalarySessionClientHydration",
    ()=>resetSalarySessionClientHydration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$lifestyle$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/use-lifestyle-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/use-salary-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$salary$2f$session$2d$save$2f$salary$2d$session$2d$save$2d$logic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/salary/session-save/salary-session-save-logic.ts [app-client] (ecmascript)");
;
;
;
let lastAppliedHydrationSig = null;
let pendingSkipNextSalaryFlush = false;
function resetSalarySessionClientHydration() {
    lastAppliedHydrationSig = null;
    pendingSkipNextSalaryFlush = false;
}
function consumeSkipNextSalaryFlush() {
    const v = pendingSkipNextSalaryFlush;
    pendingSkipNextSalaryFlush = false;
    return v;
}
function applySalarySessionDetailToStores(detail, effectiveId) {
    if (!detail?.session || detail.session.id !== effectiveId) return;
    const sig = `${detail.session.id}:${detail.session.updated_at}`;
    if (lastAppliedHydrationSig === sig) return;
    lastAppliedHydrationSig = sig;
    pendingSkipNextSalaryFlush = true;
    const nextInput = detail.session.input_json;
    const nextBreakdown = detail.session.breakdown_json;
    const storeInput = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"].getState().input;
    const storeBreakdown = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"].getState().breakdown;
    const { input: sameInput, breakdown: sameBreakdown } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$salary$2f$session$2d$save$2f$salary$2d$session$2d$save$2d$logic$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["salaryStoreMatchesServerPayload"])(storeInput, storeBreakdown, nextInput, nextBreakdown);
    if (!sameInput || !sameBreakdown) {
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"].setState({
            input: nextInput,
            breakdown: nextBreakdown
        });
    }
    const lj = detail.planning?.lifestyle_json;
    if (lj && typeof lj === "object" && !Array.isArray(lj)) {
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$lifestyle$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLifestyleStore"].getState().hydrateFromJson(lj);
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/stores/use-auth-store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuthStore",
    ()=>useAuthStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/client/browser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$auth$2f$map$2d$user$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/auth/map-user.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$queries$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/queries/profile.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/env.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$persistence$2f$workspace$2d$session$2d$cookies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/persistence/workspace-session-cookies.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$salary$2f$apply$2d$salary$2d$session$2d$detail$2d$to$2d$stores$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/salary/apply-salary-session-detail-to-stores.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
const useAuthStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        user: null,
        authReady: false,
        setSessionUser: (user)=>set({
                user
            }),
        markAuthReady: ()=>set({
                authReady: true
            }),
        refreshProfileFromAuthUser: async ()=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])()) {
                set({
                    user: null,
                    authReady: true
                });
                return;
            }
            try {
                const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBrowserSupabase"])();
                const { data: { user: authUser } } = await supabase.auth.getUser();
                if (!authUser) {
                    set({
                        user: null,
                        authReady: true
                    });
                    return;
                }
                const row = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$queries$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchProfileRow"])(supabase, authUser.id);
                set({
                    user: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$auth$2f$map$2d$user$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapProfileToUser"])(authUser, row),
                    authReady: true
                });
            } catch  {
                set({
                    user: null,
                    authReady: true
                });
            }
        },
        login: async (email, password)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])()) {
                return {
                    ok: false,
                    error: "Supabase is not configured."
                };
            }
            try {
                const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBrowserSupabase"])();
                const { data, error } = await supabase.auth.signInWithPassword({
                    email: email.trim().toLowerCase(),
                    password
                });
                if (error) return {
                    ok: false,
                    error: error.message
                };
                if (!data.user) return {
                    ok: false,
                    error: "No user returned."
                };
                const row = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$queries$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchProfileRow"])(supabase, data.user.id);
                set({
                    user: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$auth$2f$map$2d$user$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapProfileToUser"])(data.user, row),
                    authReady: true
                });
                return {
                    ok: true
                };
            } catch (e) {
                return {
                    ok: false,
                    error: e instanceof Error ? e.message : "Sign in failed."
                };
            }
        },
        signup: async (email, password, displayName)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])()) {
                return {
                    ok: false,
                    error: "Supabase is not configured."
                };
            }
            try {
                const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBrowserSupabase"])();
                const { data, error } = await supabase.auth.signUp({
                    email: email.trim().toLowerCase(),
                    password,
                    options: {
                        data: {
                            display_name: displayName.trim()
                        }
                    }
                });
                if (error) return {
                    ok: false,
                    error: error.message
                };
                if (!data.session?.user) {
                    return {
                        ok: false,
                        error: "Check your email to confirm your account, then sign in."
                    };
                }
                const row = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$queries$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchProfileRow"])(supabase, data.session.user.id);
                set({
                    user: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$auth$2f$map$2d$user$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapProfileToUser"])(data.session.user, row),
                    authReady: true
                });
                return {
                    ok: true
                };
            } catch (e) {
                return {
                    ok: false,
                    error: e instanceof Error ? e.message : "Sign up failed."
                };
            }
        },
        logout: async ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$persistence$2f$workspace$2d$session$2d$cookies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearAllWorkspaceSessionCookies"])();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$salary$2f$apply$2d$salary$2d$session$2d$detail$2d$to$2d$stores$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetSalarySessionClientHydration"])();
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])()) {
                const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBrowserSupabase"])();
                await supabase.auth.signOut();
            }
            set({
                user: null
            });
        },
        updateProfile: async (patch)=>{
            const u = get().user;
            if (!u) return {
                ok: false,
                error: "Not signed in."
            };
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])()) {
                return {
                    ok: false,
                    error: "Supabase is not configured."
                };
            }
            try {
                const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBrowserSupabase"])();
                const row = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$queries$2f$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateProfileRow"])(supabase, u.id, {
                    display_name: patch.displayName ?? u.displayName,
                    company: patch.company ?? u.company,
                    role: patch.role === undefined ? u.role ?? null : patch.role || null
                });
                const { data: { user: authUser } } = await supabase.auth.getUser();
                if (!authUser) return {
                    ok: false,
                    error: "Session lost."
                };
                set({
                    user: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$auth$2f$map$2d$user$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mapProfileToUser"])(authUser, row)
                });
                return {
                    ok: true
                };
            } catch (e) {
                return {
                    ok: false,
                    error: e instanceof Error ? e.message : "Update failed."
                };
            }
        }
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/providers/auth-sync.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthSync",
    ()=>AuthSync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/client/browser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/env.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$query$2d$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/query-keys.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/use-auth-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/use-salary-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$persistence$2f$workspace$2d$session$2d$cookies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/persistence/workspace-session-cookies.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$salary$2f$apply$2d$salary$2d$session$2d$detail$2d$to$2d$stores$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/salary/apply-salary-session-detail-to-stores.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function AuthSync() {
    _s();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthSync.useEffect": ()=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])()) {
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().markAuthReady();
                return;
            }
            const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBrowserSupabase"])();
            void __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().refreshProfileFromAuthUser();
            const { data: { subscription } } = supabase.auth.onAuthStateChange({
                "AuthSync.useEffect": (event, session)=>{
                    if (event === "SIGNED_OUT" || !session?.user) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$persistence$2f$workspace$2d$session$2d$cookies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearAllWorkspaceSessionCookies"])();
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$salary$2f$apply$2d$salary$2d$session$2d$detail$2d$to$2d$stores$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetSalarySessionClientHydration"])();
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().setSessionUser(null);
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"].getState().reset();
                        queryClient.removeQueries({
                            queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$query$2d$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].salarySessions.root
                        });
                        queryClient.removeQueries({
                            queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$query$2d$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].offerSessions.root
                        });
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().markAuthReady();
                        return;
                    }
                    void __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().refreshProfileFromAuthUser();
                    if (event === "TOKEN_REFRESHED") {
                        return;
                    }
                    queryClient.invalidateQueries({
                        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$query$2d$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].salarySessions.root
                    });
                    queryClient.invalidateQueries({
                        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$query$2d$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].offerSessions.root
                    });
                }
            }["AuthSync.useEffect"]);
            return ({
                "AuthSync.useEffect": ()=>subscription.unsubscribe()
            })["AuthSync.useEffect"];
        }
    }["AuthSync.useEffect"], [
        queryClient
    ]);
    return null;
}
_s(AuthSync, "aixO0mo1bdM1nWLRolCdKzppx/I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"]
    ];
});
_c = AuthSync;
var _c;
__turbopack_context__.k.register(_c, "AuthSync");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/config/salary-premium-paths.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Canonical premium planner URLs under the salary workspace.
 * Legacy `/lifestyle`, `/salary/breakdown`, and `/premium/*` redirect here (see next.config).
 */ __turbopack_context__.s([
    "SALARY_PREMIUM_BREAKDOWN",
    ()=>SALARY_PREMIUM_BREAKDOWN,
    "SALARY_PREMIUM_EMI_ANALYZER",
    ()=>SALARY_PREMIUM_EMI_ANALYZER,
    "SALARY_PREMIUM_HUB",
    ()=>SALARY_PREMIUM_HUB,
    "SALARY_PREMIUM_LIFESTYLE",
    ()=>SALARY_PREMIUM_LIFESTYLE,
    "SALARY_PREMIUM_OFFER_COMPARISON",
    ()=>SALARY_PREMIUM_OFFER_COMPARISON,
    "SALARY_PREMIUM_WEALTH_FORECAST",
    ()=>SALARY_PREMIUM_WEALTH_FORECAST,
    "isSalaryPremiumBreakdownPath",
    ()=>isSalaryPremiumBreakdownPath,
    "isSalaryPremiumOfferComparisonPath",
    ()=>isSalaryPremiumOfferComparisonPath,
    "salaryPremiumBreakdownHref",
    ()=>salaryPremiumBreakdownHref,
    "salaryPremiumOfferComparisonHref",
    ()=>salaryPremiumOfferComparisonHref
]);
const SALARY_PREMIUM_BREAKDOWN = "/salary/premium/breakdown";
const SALARY_PREMIUM_LIFESTYLE = "/salary/premium/lifestyle";
const SALARY_PREMIUM_WEALTH_FORECAST = "/salary/premium/wealth-forecast";
const SALARY_PREMIUM_EMI_ANALYZER = "/salary/premium/emi-analyzer";
const SALARY_PREMIUM_OFFER_COMPARISON = "/salary/premium/offer-comparison";
const SALARY_PREMIUM_HUB = SALARY_PREMIUM_OFFER_COMPARISON;
function salaryPremiumOfferComparisonHref(sessionId) {
    return `${SALARY_PREMIUM_OFFER_COMPARISON}?session=${encodeURIComponent(sessionId)}`;
}
function salaryPremiumBreakdownHref(sessionId) {
    if (sessionId != null && sessionId.length > 0) {
        return `${SALARY_PREMIUM_BREAKDOWN}?session=${encodeURIComponent(sessionId)}`;
    }
    return SALARY_PREMIUM_BREAKDOWN;
}
function isSalaryPremiumBreakdownPath(pathname) {
    return pathname === SALARY_PREMIUM_BREAKDOWN || pathname.startsWith(`${SALARY_PREMIUM_BREAKDOWN}/`);
}
function isSalaryPremiumOfferComparisonPath(pathname) {
    return pathname === SALARY_PREMIUM_OFFER_COMPARISON || pathname.startsWith(`${SALARY_PREMIUM_OFFER_COMPARISON}/`);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/config/access-mode.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ACCESS_MODE",
    ()=>ACCESS_MODE,
    "PREMIUM_UNLOCKED",
    ()=>PREMIUM_UNLOCKED,
    "getPremiumUnlockedFromEnv",
    ()=>getPremiumUnlockedFromEnv,
    "premiumHubHref",
    ()=>premiumHubHref,
    "premiumToolHref",
    ()=>premiumToolHref
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * Env-only override (`NEXT_PUBLIC_ACCESS_MODE=premium`).
 *
 * For **feature gating**, use `hasPremiumProductAccess` / `userHasPremiumEntitlement`
 * so database `plan_tier` is respected when this is unset.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$salary$2d$premium$2d$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/config/salary-premium-paths.ts [app-client] (ecmascript)");
;
const raw = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_ACCESS_MODE?.toLowerCase().trim();
function getPremiumUnlockedFromEnv() {
    if (raw === "premium") return true;
    return false;
}
const ACCESS_MODE = getPremiumUnlockedFromEnv() ? "premium" : "default";
const PREMIUM_UNLOCKED = ACCESS_MODE === "premium";
function premiumHubHref() {
    return PREMIUM_UNLOCKED ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$salary$2d$premium$2d$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SALARY_PREMIUM_OFFER_COMPARISON"] : "/paywall";
}
function premiumToolHref(tool) {
    if (PREMIUM_UNLOCKED) {
        const paths = {
            offers: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$salary$2d$premium$2d$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SALARY_PREMIUM_OFFER_COMPARISON"],
            forecast: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$salary$2d$premium$2d$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SALARY_PREMIUM_WEALTH_FORECAST"],
            emi: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$salary$2d$premium$2d$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SALARY_PREMIUM_EMI_ANALYZER"],
            monthly: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$salary$2d$premium$2d$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SALARY_PREMIUM_LIFESTYLE"]
        };
        return paths[tool];
    }
    return `/paywall?tool=${tool}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/access/product-access.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasPremiumProductAccess",
    ()=>hasPremiumProductAccess
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$access$2d$mode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/config/access-mode.ts [app-client] (ecmascript)");
;
function hasPremiumProductAccess(planTier) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$access$2d$mode$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPremiumUnlockedFromEnv"])()) return true;
    return planTier === "premium";
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/supabase/persistence-gate.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "shouldPersistSessions",
    ()=>shouldPersistSessions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$access$2f$product$2d$access$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/access/product-access.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/env.ts [app-client] (ecmascript)");
;
;
function shouldPersistSessions(user) {
    if (!user || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$env$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSupabaseConfigured"])()) return false;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$access$2f$product$2d$access$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasPremiumProductAccess"])(user.planTier);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/supabase/queries/salary-sessions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSalarySession",
    ()=>createSalarySession,
    "deleteSalarySession",
    ()=>deleteSalarySession,
    "diffSalarySessionRow",
    ()=>diffSalarySessionRow,
    "getSalarySession",
    ()=>getSalarySession,
    "listSalarySessions",
    ()=>listSalarySessions,
    "patchSalarySession",
    ()=>patchSalarySession,
    "salaryRowToHistoryEntry",
    ()=>salaryRowToHistoryEntry,
    "touchSalarySessionOpened",
    ()=>touchSalarySessionOpened,
    "updateSalarySession",
    ()=>updateSalarySession,
    "upsertSalarySessionPlanning",
    ()=>upsertSalarySessionPlanning
]);
function salaryRowToHistoryEntry(row) {
    const input = row.input_json;
    return {
        kind: "salary",
        id: row.id,
        at: new Date(row.updated_at).getTime(),
        title: row.title,
        annualCTC: row.annual_ctc,
        monthlyInHand: row.monthly_in_hand,
        regimeLabel: row.regime_label,
        snapshot: input,
        resultSource: row.result_source ?? undefined
    };
}
function deriveTitle(input) {
    return input.fullName?.trim() || `₹${(input.annualCTC / 100_000).toFixed(1)}L CTC`;
}
async function listSalarySessions(supabase, limit = 40) {
    const { data, error } = await supabase.from("salary_sessions").select("*").order("updated_at", {
        ascending: false
    }).limit(limit);
    if (error) throw error;
    return data ?? [];
}
async function getSalarySession(supabase, id) {
    const { data: session, error: sErr } = await supabase.from("salary_sessions").select("*").eq("id", id).maybeSingle();
    if (sErr) throw sErr;
    if (!session) return null;
    const { data: planning, error: pErr } = await supabase.from("salary_session_planning").select("*").eq("salary_session_id", id).maybeSingle();
    if (pErr) throw pErr;
    return {
        session,
        planning
    };
}
async function createSalarySession(supabase, input, breakdown, planning) {
    const title = deriveTitle(input);
    const { data: session, error: sErr } = await supabase.from("salary_sessions").insert({
        title,
        annual_ctc: input.annualCTC,
        monthly_in_hand: breakdown.monthlyInHand,
        regime_label: input.taxRegime === "old" ? "Old regime" : "New regime",
        result_source: input.resultSource ?? null,
        input_json: input,
        breakdown_json: breakdown,
        last_opened_at: new Date().toISOString()
    }).select("*").single();
    if (sErr) throw sErr;
    const hasPlanning = planning && (planning.lifestyle != null || planning.emi != null || planning.wealth != null);
    if (hasPlanning) {
        const { error: pErr } = await supabase.from("salary_session_planning").insert({
            salary_session_id: session.id,
            lifestyle_json: planning?.lifestyle ?? null,
            emi_json: planning?.emi ?? null,
            wealth_json: planning?.wealth ?? null
        });
        if (pErr) throw pErr;
    }
    return session;
}
function diffSalarySessionRow(baselineInput, baselineBreakdown, input, breakdown) {
    const inputChanged = JSON.stringify(baselineInput) !== JSON.stringify(input);
    const breakdownChanged = JSON.stringify(baselineBreakdown) !== JSON.stringify(breakdown);
    if (!inputChanged && !breakdownChanged) return null;
    const patch = {};
    if (inputChanged) {
        patch.title = deriveTitle(input);
        patch.annual_ctc = input.annualCTC;
        patch.regime_label = input.taxRegime === "old" ? "Old regime" : "New regime";
        patch.result_source = input.resultSource ?? null;
        patch.input_json = input;
    }
    if (breakdownChanged) {
        patch.breakdown_json = breakdown;
    }
    if (inputChanged || breakdownChanged) {
        patch.monthly_in_hand = breakdown.monthlyInHand;
    }
    return patch;
}
async function patchSalarySession(supabase, id, patch) {
    const { data, error } = await supabase.from("salary_sessions").update(patch).eq("id", id).select("*").single();
    if (error) throw error;
    return data;
}
async function updateSalarySession(supabase, id, input, breakdown) {
    const title = deriveTitle(input);
    const { data, error } = await supabase.from("salary_sessions").update({
        title,
        annual_ctc: input.annualCTC,
        monthly_in_hand: breakdown.monthlyInHand,
        regime_label: input.taxRegime === "old" ? "Old regime" : "New regime",
        result_source: input.resultSource ?? null,
        input_json: input,
        breakdown_json: breakdown
    }).eq("id", id).select("*").single();
    if (error) throw error;
    return data;
}
async function touchSalarySessionOpened(supabase, id) {
    await supabase.from("salary_sessions").update({
        last_opened_at: new Date().toISOString()
    }).eq("id", id);
}
async function deleteSalarySession(supabase, id) {
    const { error } = await supabase.from("salary_sessions").delete().eq("id", id);
    if (error) throw error;
}
async function upsertSalarySessionPlanning(supabase, salarySessionId, patch) {
    const { error } = await supabase.from("salary_session_planning").upsert({
        salary_session_id: salarySessionId,
        ...patch
    }, {
        onConflict: "salary_session_id"
    });
    if (error) throw error;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils/salary-input-profile.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mergeSalaryInputWithProfile",
    ()=>mergeSalaryInputWithProfile,
    "salarySessionListTitle",
    ()=>salarySessionListTitle
]);
function mergeSalaryInputWithProfile(input, user) {
    if (!user) {
        return {
            ...input,
            fullName: input.fullName?.trim() ?? "",
            email: input.email?.trim() ?? ""
        };
    }
    return {
        ...input,
        fullName: input.fullName?.trim() || user.displayName?.trim() || "",
        email: input.email?.trim() || user.email?.trim() || ""
    };
}
function salarySessionListTitle(input, user) {
    const fromInput = input.fullName?.trim();
    if (fromInput) return fromInput;
    const fromProfile = user?.displayName?.trim();
    if (fromProfile) return fromProfile;
    return `₹${(input.annualCTC / 100_000).toFixed(1)}L CTC`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/supabase/hooks/use-salary-sessions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCreateSalarySessionMutation",
    ()=>useCreateSalarySessionMutation,
    "useDeleteSalarySessionMutation",
    ()=>useDeleteSalarySessionMutation,
    "useSalarySessionDetailQuery",
    ()=>useSalarySessionDetailQuery,
    "useSalarySessionsListQuery",
    ()=>useSalarySessionsListQuery,
    "useTouchSalarySessionMutation",
    ()=>useTouchSalarySessionMutation,
    "useUpdateSalarySessionMutation",
    ()=>useUpdateSalarySessionMutation,
    "useUpsertSalaryPlanningMutation",
    ()=>useUpsertSalaryPlanningMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/client/browser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$query$2d$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/query-keys.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$queries$2f$salary$2d$sessions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/queries/salary-sessions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/use-auth-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$salary$2d$input$2d$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/salary-input-profile.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const LIST_LIMIT = 40;
const LIST_STALE_MS = 5 * 60 * 1000;
const DETAIL_STALE_MS = 5 * 60 * 1000;
const calmSessionQueryOptions = {
    staleTime: LIST_STALE_MS,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false
};
function useSalarySessionsListQuery(enabled) {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$query$2d$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].salarySessions.list(LIST_LIMIT),
        queryFn: {
            "useSalarySessionsListQuery.useQuery": async ()=>{
                const sb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBrowserSupabase"])();
                const rows = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$queries$2f$salary$2d$sessions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listSalarySessions"])(sb, LIST_LIMIT);
                return rows.map(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$queries$2f$salary$2d$sessions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["salaryRowToHistoryEntry"]);
            }
        }["useSalarySessionsListQuery.useQuery"],
        enabled,
        ...calmSessionQueryOptions
    });
}
_s(useSalarySessionsListQuery, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useSalarySessionDetailQuery(sessionId, enabled) {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: sessionId ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$query$2d$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].salarySessions.detail(sessionId) : [
            "salary-sessions",
            "detail",
            "none"
        ],
        queryFn: {
            "useSalarySessionDetailQuery.useQuery": async ()=>{
                const sb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBrowserSupabase"])();
                const d = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$queries$2f$salary$2d$sessions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSalarySession"])(sb, sessionId);
                if (!d) throw new Error("Salary session not found");
                return d;
            }
        }["useSalarySessionDetailQuery.useQuery"],
        enabled: Boolean(sessionId && enabled),
        staleTime: DETAIL_STALE_MS,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false
    });
}
_s1(useSalarySessionDetailQuery, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useCreateSalarySessionMutation() {
    _s2();
    const qc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useCreateSalarySessionMutation.useMutation": async (args)=>{
                const sb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBrowserSupabase"])();
                const input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$salary$2d$input$2d$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeSalaryInputWithProfile"])(args.input, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$queries$2f$salary$2d$sessions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSalarySession"])(sb, input, args.breakdown, args.planning);
            }
        }["useCreateSalarySessionMutation.useMutation"],
        onSuccess: {
            "useCreateSalarySessionMutation.useMutation": (row)=>{
                const detail = {
                    session: row,
                    planning: null
                };
                qc.setQueryData(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$query$2d$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].salarySessions.detail(row.id), detail);
                qc.setQueryData(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$query$2d$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].salarySessions.list(LIST_LIMIT), {
                    "useCreateSalarySessionMutation.useMutation": (prev)=>{
                        const entry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$queries$2f$salary$2d$sessions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["salaryRowToHistoryEntry"])(row);
                        if (!prev?.length) return [
                            entry
                        ];
                        const without = prev.filter({
                            "useCreateSalarySessionMutation.useMutation.without": (e)=>e.id !== row.id
                        }["useCreateSalarySessionMutation.useMutation.without"]);
                        return [
                            entry,
                            ...without
                        ];
                    }
                }["useCreateSalarySessionMutation.useMutation"]);
            }
        }["useCreateSalarySessionMutation.useMutation"]
    });
}
_s2(useCreateSalarySessionMutation, "ec0A66mtyLA0kdwNsMUsaWj/EHM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useUpdateSalarySessionMutation() {
    _s3();
    const qc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useUpdateSalarySessionMutation.useMutation": async (args)=>{
                const sb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBrowserSupabase"])();
                const user = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user;
                const input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$salary$2d$input$2d$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeSalaryInputWithProfile"])(args.input, user);
                const baselineInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$salary$2d$input$2d$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeSalaryInputWithProfile"])(args.baselineInput, user);
                const patch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$queries$2f$salary$2d$sessions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["diffSalarySessionRow"])(baselineInput, args.baselineBreakdown, input, args.breakdown);
                if (!patch) {
                    const cached = qc.getQueryData(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$query$2d$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].salarySessions.detail(args.id));
                    if (cached?.session) {
                        return {
                            row: cached.session,
                            didWrite: false
                        };
                    }
                    const d = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$queries$2f$salary$2d$sessions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSalarySession"])(sb, args.id);
                    if (!d?.session) throw new Error("Salary session not found");
                    return {
                        row: d.session,
                        didWrite: false
                    };
                }
                const row = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$queries$2f$salary$2d$sessions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["patchSalarySession"])(sb, args.id, patch);
                return {
                    row,
                    didWrite: true
                };
            }
        }["useUpdateSalarySessionMutation.useMutation"],
        onSuccess: {
            "useUpdateSalarySessionMutation.useMutation": ({ row })=>{
                qc.setQueryData(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$query$2d$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].salarySessions.detail(row.id), {
                    "useUpdateSalarySessionMutation.useMutation": (prev)=>{
                        if (!prev) {
                            return {
                                session: row,
                                planning: null
                            };
                        }
                        return {
                            ...prev,
                            session: row
                        };
                    }
                }["useUpdateSalarySessionMutation.useMutation"]);
                qc.setQueryData(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$query$2d$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].salarySessions.list(LIST_LIMIT), {
                    "useUpdateSalarySessionMutation.useMutation": (prev)=>{
                        if (!prev?.length) return prev;
                        const entry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$queries$2f$salary$2d$sessions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["salaryRowToHistoryEntry"])(row);
                        const idx = prev.findIndex({
                            "useUpdateSalarySessionMutation.useMutation.idx": (e)=>e.id === row.id
                        }["useUpdateSalarySessionMutation.useMutation.idx"]);
                        if (idx === -1) return prev;
                        const next = [
                            ...prev
                        ];
                        next[idx] = entry;
                        return next;
                    }
                }["useUpdateSalarySessionMutation.useMutation"]);
            }
        }["useUpdateSalarySessionMutation.useMutation"]
    });
}
_s3(useUpdateSalarySessionMutation, "ec0A66mtyLA0kdwNsMUsaWj/EHM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useDeleteSalarySessionMutation() {
    _s4();
    const qc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useDeleteSalarySessionMutation.useMutation": async (id)=>{
                const sb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBrowserSupabase"])();
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$queries$2f$salary$2d$sessions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteSalarySession"])(sb, id);
                return id;
            }
        }["useDeleteSalarySessionMutation.useMutation"],
        onSuccess: {
            "useDeleteSalarySessionMutation.useMutation": (id)=>{
                qc.removeQueries({
                    queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$query$2d$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].salarySessions.detail(id)
                });
                qc.setQueryData(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$query$2d$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].salarySessions.list(LIST_LIMIT), {
                    "useDeleteSalarySessionMutation.useMutation": (prev)=>prev?.filter({
                            "useDeleteSalarySessionMutation.useMutation": (e)=>e.id !== id
                        }["useDeleteSalarySessionMutation.useMutation"])
                }["useDeleteSalarySessionMutation.useMutation"]);
            }
        }["useDeleteSalarySessionMutation.useMutation"]
    });
}
_s4(useDeleteSalarySessionMutation, "ec0A66mtyLA0kdwNsMUsaWj/EHM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useTouchSalarySessionMutation() {
    _s5();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useTouchSalarySessionMutation.useMutation": async (id)=>{
                const sb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBrowserSupabase"])();
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$queries$2f$salary$2d$sessions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["touchSalarySessionOpened"])(sb, id);
            }
        }["useTouchSalarySessionMutation.useMutation"]
    });
}
_s5(useTouchSalarySessionMutation, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useUpsertSalaryPlanningMutation() {
    _s6();
    const qc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useUpsertSalaryPlanningMutation.useMutation": async (args)=>{
                const sb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBrowserSupabase"])();
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$queries$2f$salary$2d$sessions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["upsertSalarySessionPlanning"])(sb, args.salarySessionId, {
                    lifestyle_json: args.lifestyle
                });
            }
        }["useUpsertSalaryPlanningMutation.useMutation"],
        onSuccess: {
            "useUpsertSalaryPlanningMutation.useMutation": (_void, args)=>{
                const lj = args.lifestyle;
                const now = new Date().toISOString();
                qc.setQueryData(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$query$2d$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].salarySessions.detail(args.salarySessionId), {
                    "useUpsertSalaryPlanningMutation.useMutation": (prev)=>{
                        if (!prev) return prev;
                        if (prev.planning) {
                            return {
                                ...prev,
                                planning: {
                                    ...prev.planning,
                                    lifestyle_json: lj,
                                    updated_at: now
                                }
                            };
                        }
                        return {
                            ...prev,
                            planning: {
                                salary_session_id: args.salarySessionId,
                                lifestyle_json: lj,
                                emi_json: null,
                                wealth_json: null,
                                updated_at: now
                            }
                        };
                    }
                }["useUpsertSalaryPlanningMutation.useMutation"]);
            }
        }["useUpsertSalaryPlanningMutation.useMutation"]
    });
}
_s6(useUpsertSalaryPlanningMutation, "ec0A66mtyLA0kdwNsMUsaWj/EHM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/providers/cloud-salary-workspace-sync.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CloudSalaryWorkspaceSync",
    ()=>CloudSalaryWorkspaceSync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/use-auth-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/use-salary-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$persistence$2d$gate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/persistence-gate.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$hooks$2f$use$2d$salary$2d$sessions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/hooks/use-salary-sessions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$salary$2f$apply$2d$salary$2d$session$2d$detail$2d$to$2d$stores$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/salary/apply-salary-session-detail-to-stores.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$salary$2d$premium$2d$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/config/salary-premium-paths.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$persistence$2f$workspace$2d$session$2d$cookies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/persistence/workspace-session-cookies.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function CloudSalaryWorkspaceSync() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])({
        "CloudSalaryWorkspaceSync.useAuthStore[user]": (s)=>s.user
    }["CloudSalaryWorkspaceSync.useAuthStore[user]"]);
    const authReady = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])({
        "CloudSalaryWorkspaceSync.useAuthStore[authReady]": (s)=>s.authReady
    }["CloudSalaryWorkspaceSync.useAuthStore[authReady]"]);
    const persist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$persistence$2d$gate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldPersistSessions"])(user);
    const urlSession = searchParams.get("session");
    const activeId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"])({
        "CloudSalaryWorkspaceSync.useSalaryStore[activeId]": (s)=>s.activeSalaryHistoryId
    }["CloudSalaryWorkspaceSync.useSalaryStore[activeId]"]);
    const setActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"])({
        "CloudSalaryWorkspaceSync.useSalaryStore[setActive]": (s)=>s.setActiveSalaryHistoryId
    }["CloudSalaryWorkspaceSync.useSalaryStore[setActive]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CloudSalaryWorkspaceSync.useEffect": ()=>{
            if (!persist || !authReady) return;
            if (urlSession) {
                setActive(urlSession);
                return;
            }
            const fromCookie = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$persistence$2f$workspace$2d$session$2d$cookies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readSalarySessionIdFromCookie"])();
            if (fromCookie && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$persistence$2f$workspace$2d$session$2d$cookies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLikelyUuid"])(fromCookie) && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"].getState().activeSalaryHistoryId == null) {
                setActive(fromCookie);
            }
        }
    }["CloudSalaryWorkspaceSync.useEffect"], [
        persist,
        authReady,
        urlSession,
        setActive
    ]);
    const effectiveId = persist && urlSession ? urlSession : activeId;
    const { data: detail, isError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$hooks$2f$use$2d$salary$2d$sessions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalarySessionDetailQuery"])(effectiveId, Boolean(persist && effectiveId));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CloudSalaryWorkspaceSync.useEffect": ()=>{
            if (!persist || !effectiveId || !isError) return;
            setActive(null);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$persistence$2f$workspace$2d$session$2d$cookies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearSalarySessionIdCookie"])();
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$salary$2d$premium$2d$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSalaryPremiumBreakdownPath"])(pathname)) {
                router.replace("/salary");
            }
        }
    }["CloudSalaryWorkspaceSync.useEffect"], [
        persist,
        effectiveId,
        isError,
        setActive,
        router,
        pathname
    ]);
    const sessionSig = detail?.session ? `${detail.session.id}:${detail.session.updated_at}` : "";
    const planningUpdatedAt = detail?.planning?.updated_at ?? "";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CloudSalaryWorkspaceSync.useEffect": ()=>{
            if (!persist || !effectiveId || !detail?.session) return;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$salary$2f$apply$2d$salary$2d$session$2d$detail$2d$to$2d$stores$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applySalarySessionDetailToStores"])(detail, effectiveId);
        }
    }["CloudSalaryWorkspaceSync.useEffect"], [
        persist,
        effectiveId,
        sessionSig,
        planningUpdatedAt
    ]);
    return null;
}
_s(CloudSalaryWorkspaceSync, "CNvKYJEphRCMw2i8n2Tir6snDUc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$hooks$2f$use$2d$salary$2d$sessions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalarySessionDetailQuery"]
    ];
});
_c = CloudSalaryWorkspaceSync;
var _c;
__turbopack_context__.k.register(_c, "CloudSalaryWorkspaceSync");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/stores/use-history-store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SALARY_HISTORY_MAX_ENTRIES",
    ()=>SALARY_HISTORY_MAX_ENTRIES,
    "useHistoryStore",
    ()=>useHistoryStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/use-auth-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$salary$2d$input$2d$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/salary-input-profile.ts [app-client] (ecmascript)");
;
;
;
;
const MAX_MIXED_ENTRIES = 5;
const SALARY_HISTORY_MAX_ENTRIES = 40;
function regimeLabel(regime) {
    return regime === "old" ? "Old regime" : "New regime";
}
const useHistoryStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
        entries: [],
        salaryContexts: [],
        removeSalaryContext: (id)=>set((s)=>({
                    salaryContexts: s.salaryContexts.filter((e)=>e.id !== id),
                    entries: s.entries.filter((e)=>!(e.kind === "salary" && e.id === id))
                })),
        removeOfferComparisonEntry: (id)=>set((s)=>({
                    entries: s.entries.filter((e)=>!(e.kind === "offer_comparison" && e.id === id))
                })),
        pushSalaryCalculation: (input, monthlyInHand)=>{
            const { salaryContexts } = get();
            if (salaryContexts.length >= SALARY_HISTORY_MAX_ENTRIES) {
                return null;
            }
            const id = crypto.randomUUID();
            const title = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$salary$2d$input$2d$profile$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["salarySessionListTitle"])(input, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user);
            const entry = {
                kind: "salary",
                id,
                at: Date.now(),
                title,
                annualCTC: input.annualCTC,
                monthlyInHand,
                regimeLabel: regimeLabel(input.taxRegime),
                snapshot: {
                    ...input
                },
                resultSource: input.resultSource
            };
            set((s)=>({
                    entries: [
                        entry,
                        ...s.entries
                    ].slice(0, MAX_MIXED_ENTRIES),
                    salaryContexts: [
                        entry,
                        ...s.salaryContexts
                    ].slice(0, SALARY_HISTORY_MAX_ENTRIES)
                }));
            return id;
        },
        pushOfferComparison: (offers, validCompanies)=>{
            if (validCompanies.length < 2) return undefined;
            const first = validCompanies[0];
            const bestHand = validCompanies.reduce((a, b)=>b.monthlyInHand > a.monthlyInHand ? b : a, first);
            const bestVal = validCompanies.reduce((a, b)=>b.firstYearValue > a.firstYearValue ? b : a, first);
            let winnerSummary;
            if (bestHand.companyName === bestVal.companyName) {
                winnerSummary = `${bestHand.companyName} leads on in-hand & 1Y value`;
            } else {
                winnerSummary = `${bestHand.companyName} best in-hand · ${bestVal.companyName} best 1Y value`;
            }
            const id = crypto.randomUUID();
            const entry = {
                kind: "offer_comparison",
                id,
                at: Date.now(),
                title: `Compare ${validCompanies.length} offers`,
                offerCount: validCompanies.length,
                winnerSummary,
                offersSnapshot: offers.map((o)=>({
                        ...o
                    }))
            };
            set((s)=>({
                    entries: [
                        entry,
                        ...s.entries
                    ].slice(0, MAX_MIXED_ENTRIES)
                }));
            return id;
        }
    }), {
    name: "inhand-history",
    partialize: (s)=>({
            entries: s.entries,
            salaryContexts: s.salaryContexts
        }),
    merge: (persisted, current)=>{
        const p = persisted;
        const entries = p?.entries ?? current.entries;
        const salaryContextsRaw = p?.salaryContexts && p.salaryContexts.length > 0 ? p.salaryContexts : entries.filter((e)=>e.kind === "salary");
        const salaryContexts = salaryContextsRaw.slice(0, SALARY_HISTORY_MAX_ENTRIES);
        return {
            ...current,
            ...p,
            entries,
            salaryContexts
        };
    }
}));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils/coerce-salary-snapshot.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "coerceSalarySnapshot",
    ()=>coerceSalarySnapshot
]);
function coerceSalarySnapshot(snapshot) {
    return {
        ...snapshot,
        compensationMode: snapshot.compensationMode ?? "total_only",
        fixedAnnual: snapshot.fixedAnnual ?? 0,
        variableAnnual: snapshot.variableAnnual ?? 0
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/providers/workspace-session-cookies-sync.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WorkspaceSessionCookiesSync",
    ()=>WorkspaceSessionCookiesSync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/use-auth-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$history$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/use-history-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/use-salary-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$persistence$2d$gate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/persistence-gate.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$persistence$2f$workspace$2d$session$2d$cookies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/persistence/workspace-session-cookies.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$salary$2d$premium$2d$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/config/salary-premium-paths.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$coerce$2d$salary$2d$snapshot$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/coerce-salary-snapshot.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
/** Match salary workspace / nav: meaningful CTC for breakdown. */ const MIN_CTC_BREAKDOWN = 100_000;
const LOCAL_SALARY_RESTORE_EXACT = new Set([
    "/salary",
    "/salary/detailed"
]);
function shouldAttemptLocalSalaryRestore(pathname) {
    if (LOCAL_SALARY_RESTORE_EXACT.has(pathname)) return true;
    if (pathname === "/salary/premium" || pathname.startsWith("/salary/premium/")) return true;
    return false;
}
function WorkspaceSessionCookiesSync() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])({
        "WorkspaceSessionCookiesSync.useAuthStore[user]": (s)=>s.user
    }["WorkspaceSessionCookiesSync.useAuthStore[user]"]);
    const authReady = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])({
        "WorkspaceSessionCookiesSync.useAuthStore[authReady]": (s)=>s.authReady
    }["WorkspaceSessionCookiesSync.useAuthStore[authReady]"]);
    const activeSalaryHistoryId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"])({
        "WorkspaceSessionCookiesSync.useSalaryStore[activeSalaryHistoryId]": (s)=>s.activeSalaryHistoryId
    }["WorkspaceSessionCookiesSync.useSalaryStore[activeSalaryHistoryId]"]);
    const restoredRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    /**
   * Until auth + profile are resolved, `shouldPersistSessions(null)` is false.
   * Treating that as "local" used to run `clearSalarySessionIdCookie()` while
   * `activeSalaryHistoryId` was still null — wiping `inhand_last_salary_session`
   * before `CloudSalaryWorkspaceSync` could read it (breakdown often "worked"
   * only due to timing / `?session=`). Never clear or local-restore until we
   * know the signed-in tier.
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WorkspaceSessionCookiesSync.useEffect": ()=>{
            if (!authReady) return;
            const cloud = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$persistence$2d$gate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldPersistSessions"])(user);
            if (cloud) {
                if (activeSalaryHistoryId != null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$persistence$2f$workspace$2d$session$2d$cookies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isLikelyUuid"])(activeSalaryHistoryId)) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$persistence$2f$workspace$2d$session$2d$cookies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeSalarySessionIdCookie"])(activeSalaryHistoryId);
                }
                return;
            }
            if (user == null) return;
            if (activeSalaryHistoryId == null) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$persistence$2f$workspace$2d$session$2d$cookies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearSalarySessionIdCookie"])();
                return;
            }
            const ok = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$history$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHistoryStore"].getState().salaryContexts.some({
                "WorkspaceSessionCookiesSync.useEffect.ok": (e)=>e.id === activeSalaryHistoryId
            }["WorkspaceSessionCookiesSync.useEffect.ok"]);
            if (!ok) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$persistence$2f$workspace$2d$session$2d$cookies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearSalarySessionIdCookie"])();
                return;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$persistence$2f$workspace$2d$session$2d$cookies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["writeSalarySessionIdCookie"])(activeSalaryHistoryId);
        }
    }["WorkspaceSessionCookiesSync.useEffect"], [
        authReady,
        user,
        activeSalaryHistoryId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WorkspaceSessionCookiesSync.useEffect": ()=>{
            function tryRestore() {
                if (restoredRef.current) return;
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().authReady) return;
                if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$history$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHistoryStore"].persist.hasHydrated()) return;
                if (!shouldAttemptLocalSalaryRestore(pathname)) return;
                const u = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"].getState().user;
                if (u == null) return;
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$persistence$2d$gate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldPersistSessions"])(u)) return;
                const cookieId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$persistence$2f$workspace$2d$session$2d$cookies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readSalarySessionIdFromCookie"])();
                if (!cookieId) return;
                const entry = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$history$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHistoryStore"].getState().salaryContexts.find({
                    "WorkspaceSessionCookiesSync.useEffect.tryRestore.entry": (e)=>e.id === cookieId
                }["WorkspaceSessionCookiesSync.useEffect.tryRestore.entry"]);
                if (!entry) {
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$persistence$2f$workspace$2d$session$2d$cookies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearSalarySessionIdCookie"])();
                    return;
                }
                restoredRef.current = true;
                const store = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"].getState();
                store.setInput((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$coerce$2d$salary$2d$snapshot$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coerceSalarySnapshot"])(entry.snapshot));
                store.calculateBreakdown();
                store.setActiveSalaryHistoryId(cookieId);
                if (pathname === "/salary" && entry.annualCTC >= MIN_CTC_BREAKDOWN) {
                    router.replace(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$salary$2d$premium$2d$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SALARY_PREMIUM_BREAKDOWN"]);
                }
            }
            const unsub = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$history$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHistoryStore"].persist.onFinishHydration({
                "WorkspaceSessionCookiesSync.useEffect.unsub": ()=>{
                    tryRestore();
                }
            }["WorkspaceSessionCookiesSync.useEffect.unsub"]);
            tryRestore();
            return unsub;
        }
    }["WorkspaceSessionCookiesSync.useEffect"], [
        pathname,
        router
    ]);
    return null;
}
_s(WorkspaceSessionCookiesSync, "YMzQmKbagRyU3SAbi1H9mOuVh2I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"]
    ];
});
_c = WorkspaceSessionCookiesSync;
var _c;
__turbopack_context__.k.register(_c, "WorkspaceSessionCookiesSync");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/providers/query-provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "QueryProvider",
    ()=>QueryProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function QueryProvider({ children }) {
    _s();
    const [client] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "QueryProvider.useState": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClient"]({
                defaultOptions: {
                    queries: {
                        staleTime: 90 * 1000,
                        gcTime: 30 * 60 * 1000,
                        refetchOnWindowFocus: false,
                        refetchOnReconnect: false
                    }
                }
            })
    }["QueryProvider.useState"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: client,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/providers/query-provider.tsx",
        lineNumber: 20,
        columnNumber: 10
    }, this);
}
_s(QueryProvider, "ZcGCEUQpMLk7XX58z5VL5THlMKU=");
_c = QueryProvider;
var _c;
__turbopack_context__.k.register(_c, "QueryProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/react/esm/button/Button.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("group/button inline-flex shrink-0 cursor-pointer items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
            outline: "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
            ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
            destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
            xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
            sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
            lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
            icon: "size-8",
            "icon-xs": "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
            "icon-sm": "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
            "icon-lg": "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant = "default", size = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$button$2f$Button$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/features/pricing/salary-pricing-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SalaryPricingSection",
    ()=>SalaryPricingSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/minus.js [app-client] (ecmascript) <export default as Minus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const MONTHLY_LIST = 199;
const YEARLY_DISCOUNT = 0.2;
const YEARLY_TOTAL = Math.round(MONTHLY_LIST * 12 * (1 - YEARLY_DISCOUNT));
const YEARLY_PER_MONTH = Math.round(YEARLY_TOTAL / 12);
const SAVE_PCT = Math.round(YEARLY_DISCOUNT * 100);
const FREE_FEATURES = [
    "Editable fixed & variable salary inputs",
    "Estimated in-hand (guaranteed vs illustrative)",
    "Monthly & annual deduction / TDS-style view",
    "Regime-aware tax estimate (Old / New)",
    "Simple result cards & package composition",
    "Basic salary view—fast, no sign-in required"
];
const PREMIUM_FEATURES = [
    "Everything in Free",
    "Detailed salary breakdown & component table",
    "Offer comparison (in-hand, tax, first-year value)",
    "Wealth forecast (multi-year scenarios)",
    "EMI analyzer vs your in-hand",
    "Monthly lifestyle planner & surplus view",
    "Deeper insights across planning screens"
];
const COMPARE_ROWS = [
    {
        label: "Basic salary calculator",
        free: true,
        premium: true
    },
    {
        label: "Fixed vs variable in-hand clarity",
        free: true,
        premium: true
    },
    {
        label: "Regime-aware TDS-style estimates",
        free: true,
        premium: true
    },
    {
        label: "Component-wise breakdown",
        free: false,
        premium: true
    },
    {
        label: "Offer comparison",
        free: false,
        premium: true
    },
    {
        label: "Wealth forecast",
        free: false,
        premium: true
    },
    {
        label: "EMI affordability analyzer",
        free: false,
        premium: true
    },
    {
        label: "Monthly planner",
        free: false,
        premium: true
    },
    {
        label: "Dedicated planning workspace (breakdown, lifestyle, tools)",
        free: false,
        premium: true
    }
];
function Cell({ ok, compact }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-center align-middle", compact ? "px-3 py-2" : "px-4 py-3"),
        children: ok ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mx-auto text-teal-600", compact ? "size-4" : "size-5"),
            strokeWidth: compact ? 2 : 2.25,
            "aria-label": "Included"
        }, void 0, false, {
            fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
            lineNumber: 66,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minus$3e$__["Minus"], {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mx-auto text-navy-300", compact ? "size-4" : "size-5"),
            strokeWidth: 2,
            "aria-label": "Not included"
        }, void 0, false, {
            fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
            lineNumber: 75,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, this);
}
_c = Cell;
function SalaryPricingSection({ premiumHref, freeHref, className, id = "pricing", embedded = false }) {
    _s();
    const [billing, setBilling] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("yearly");
    const compact = embedded;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: id,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(embedded ? "scroll-mt-4" : "scroll-mt-24", className),
        "aria-labelledby": "pricing-heading",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-center mx-auto", compact ? "max-w-lg" : "max-w-2xl"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        id: "pricing-heading",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-display font-bold tracking-tight text-navy-900", compact ? "text-base sm:text-lg leading-snug" : "text-2xl sm:text-3xl md:text-4xl"),
                        children: "Plans built around how you actually use salary"
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-navy-600", compact ? "mt-2 text-xs leading-relaxed sm:text-[13px]" : "mt-3 text-sm leading-relaxed sm:text-base md:mt-4"),
                        children: "Start free with credible in-hand estimates. Upgrade when you want breakdowns, comparisons, and planning tools that stay tied to your numbers—not generic advice."
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col items-center justify-center", compact ? "mt-5 gap-2 sm:mt-6" : "mt-8 gap-3 sm:mt-10"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex rounded-full border border-navy-200/80 bg-navy-50/50 shadow-inner", compact ? "p-0.5" : "p-1"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setBilling("monthly"),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-full font-semibold transition-colors", compact ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm", billing === "monthly" ? "bg-white text-navy-900 shadow-sm" : "text-navy-500 hover:text-navy-700"),
                                children: "Monthly"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setBilling("yearly"),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center gap-1.5 rounded-full font-semibold transition-colors", compact ? "px-3 py-1.5 text-xs" : "px-4 py-2 text-sm gap-2", billing === "yearly" ? "bg-white text-navy-900 shadow-sm" : "text-navy-500 hover:text-navy-700"),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Yearly"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                                            lineNumber: 187,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-full bg-emerald-100 font-bold uppercase tracking-wide text-emerald-800", compact ? "px-1.5 py-px text-[9px]" : "px-2 py-0.5 text-[10px]"),
                                            children: [
                                                "Save ",
                                                SAVE_PCT,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                                            lineNumber: 188,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                                    lineNumber: 186,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                                lineNumber: 175,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-navy-500", compact ? "text-[11px] leading-snug" : "text-xs"),
                        children: billing === "yearly" ? `Yearly is ${SAVE_PCT}% less than twelve monthly payments.` : "Switch to yearly anytime—same features."
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("grid lg:grid-cols-2 lg:items-stretch max-w-5xl mx-auto", compact ? "mt-6 gap-4 lg:gap-5" : "mt-10 gap-6 lg:gap-8"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col rounded-2xl border border-navy-200/70 bg-white shadow-sm", compact ? "rounded-xl p-4 sm:p-5" : "p-6 sm:p-8"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-semibold uppercase tracking-[0.12em] text-navy-400", compact ? "text-[9px]" : "text-[10px]"),
                                children: "Essentials"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                                lineNumber: 226,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-0.5 font-display font-bold text-navy-900", compact ? "text-base sm:text-lg" : "text-xl sm:text-2xl"),
                                children: "Free"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                                lineNumber: 234,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-baseline gap-1", compact ? "mt-2" : "mt-3"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-display font-bold tabular-nums text-navy-900", compact ? "text-2xl sm:text-3xl" : "text-4xl sm:text-5xl"),
                                        children: "₹0"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                                        lineNumber: 248,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-medium text-navy-500", compact ? "text-xs" : "text-sm"),
                                        children: "/ month"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                                        lineNumber: 256,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                                lineNumber: 242,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-navy-500", compact ? "mt-0.5 text-[11px]" : "mt-1 text-xs"),
                                children: "Full calculator—no card required."
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                                lineNumber: 265,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-1 flex-col text-navy-700", compact ? "mt-4 gap-2 text-xs sm:text-[13px]" : "mt-6 gap-3 text-sm"),
                                children: FREE_FEATURES.map((line)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-0.5 shrink-0 text-teal-600", compact ? "size-3.5" : "size-4"),
                                                strokeWidth: 2.5,
                                                "aria-hidden": true
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                                                lineNumber: 281,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "leading-snug",
                                                children: line
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                                                lineNumber: 289,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, line, true, {
                                        fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                                        lineNumber: 280,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                                lineNumber: 273,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: freeHref,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"])({
                                    variant: "outline"
                                }), "w-full rounded-full border-navy-200 font-semibold text-navy-800 hover:bg-navy-50", compact ? "mt-5 h-9 text-xs sm:text-sm" : "mt-8 h-11"),
                                children: "Continue free"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                                lineNumber: 293,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex flex-col rounded-2xl border-2 border-teal-500/35 bg-gradient-to-b from-white via-teal-50/20 to-white shadow-md ring-1 ring-teal-200/50", compact ? "rounded-xl p-4 sm:p-5" : "p-6 sm:p-8"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute left-1/2 -translate-x-1/2 rounded-full bg-teal-700 font-bold uppercase tracking-wide text-white shadow-sm", compact ? "-top-2.5 px-2.5 py-0.5 text-[9px]" : "-top-3 px-3 py-1 text-[10px]"),
                                children: "Recommended"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                                lineNumber: 312,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-semibold uppercase tracking-[0.12em] text-teal-800", compact ? "text-[9px]" : "text-[10px]"),
                                children: "Full planning"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                                lineNumber: 322,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-0.5 font-display font-bold text-teal-900", compact ? "text-base sm:text-lg" : "text-xl sm:text-2xl"),
                                children: "Premium"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                                lineNumber: 330,
                                columnNumber: 11
                            }, this),
                            billing === "yearly" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-baseline gap-1", compact ? "mt-2" : "mt-3"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-display font-bold tabular-nums text-navy-900", compact ? "text-2xl sm:text-3xl" : "text-4xl sm:text-5xl"),
                                                children: [
                                                    "₹",
                                                    YEARLY_PER_MONTH.toLocaleString("en-IN")
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                                                lineNumber: 346,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-medium text-navy-500", compact ? "text-xs" : "text-sm"),
                                                children: "/ month"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                                                lineNumber: 354,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                                        lineNumber: 340,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-navy-600", compact ? "mt-0.5 text-[11px] sm:text-xs leading-snug" : "mt-1 text-sm"),
                                        children: [
                                            "Billed",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold tabular-nums text-navy-800",
                                                children: [
                                                    "₹",
                                                    YEARLY_TOTAL.toLocaleString("en-IN")
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                                                lineNumber: 370,
                                                columnNumber: 17
                                            }, this),
                                            " ",
                                            "per year · save ",
                                            SAVE_PCT,
                                            "% vs monthly"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                                        lineNumber: 363,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-baseline gap-1", compact ? "mt-2" : "mt-3"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-display font-bold tabular-nums text-navy-900", compact ? "text-2xl sm:text-3xl" : "text-4xl sm:text-5xl"),
                                                children: [
                                                    "₹",
                                                    MONTHLY_LIST.toLocaleString("en-IN")
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                                                lineNumber: 384,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-medium text-navy-500", compact ? "text-xs" : "text-sm"),
                                                children: "/ month"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                                                lineNumber: 392,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                                        lineNumber: 378,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-navy-600", compact ? "mt-0.5 text-[11px] sm:text-xs leading-snug" : "mt-1 text-sm"),
                                        children: [
                                            "₹",
                                            (MONTHLY_LIST * 12).toLocaleString("en-IN"),
                                            " if paid monthly for a year—",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium text-teal-800",
                                                children: [
                                                    " ",
                                                    "yearly saves ",
                                                    SAVE_PCT,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                                                lineNumber: 409,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                                        lineNumber: 401,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-1 flex-col text-navy-800", compact ? "mt-4 gap-2 text-xs sm:text-[13px]" : "mt-6 gap-3 text-sm"),
                                children: PREMIUM_FEATURES.map((line)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-0.5 shrink-0 text-teal-600", compact ? "size-3.5" : "size-4"),
                                                strokeWidth: 2.5,
                                                "aria-hidden": true
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                                                lineNumber: 424,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("leading-snug", !compact && "font-medium"),
                                                children: line
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                                                lineNumber: 432,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, line, true, {
                                        fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                                        lineNumber: 423,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                                lineNumber: 416,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: premiumHref,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"])({
                                    variant: "default"
                                }), "w-full rounded-full border-0 bg-teal-700 font-semibold text-white shadow-sm hover:bg-teal-800", compact ? "mt-5 h-9 text-xs sm:text-sm" : "mt-8 h-11"),
                                children: "Upgrade to Premium"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                                lineNumber: 443,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                        lineNumber: 306,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                lineNumber: 213,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("max-w-5xl mx-auto", compact ? "mt-8" : "mt-14"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-center font-display font-bold text-navy-900", compact ? "text-sm sm:text-base" : "text-lg sm:text-xl"),
                        children: "Compare at a glance"
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                        lineNumber: 459,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("overflow-x-auto rounded-2xl border border-navy-200/60 bg-white shadow-sm", compact ? "mt-3 rounded-xl" : "mt-4"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full min-w-[280px]", compact ? "text-xs" : "text-sm"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "border-b border-navy-100 bg-navy-50/50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                scope: "col",
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-left font-semibold uppercase tracking-wide text-navy-500", compact ? "px-3 py-2 text-[10px]" : "px-4 py-3 text-xs"),
                                                children: "Capability"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                                                lineNumber: 481,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                scope: "col",
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-center font-semibold uppercase tracking-wide text-navy-500", compact ? "px-3 py-2 text-[10px]" : "px-4 py-3 text-xs"),
                                                children: "Free"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                                                lineNumber: 492,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                scope: "col",
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-center font-semibold uppercase tracking-wide text-teal-800", compact ? "px-3 py-2 text-[10px]" : "px-4 py-3 text-xs"),
                                                children: "Premium"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                                                lineNumber: 503,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                                        lineNumber: 480,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                                    lineNumber: 479,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    className: "divide-y divide-navy-100",
                                    children: COMPARE_ROWS.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "hover:bg-navy-50/30",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    scope: "row",
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-left text-navy-800", compact ? "px-3 py-2 text-[11px] font-medium leading-snug sm:text-xs" : "px-4 py-3 font-medium"),
                                                    children: row.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                                                    lineNumber: 519,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Cell, {
                                                    ok: row.free,
                                                    compact: compact
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                                                    lineNumber: 530,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Cell, {
                                                    ok: row.premium,
                                                    compact: compact
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                                                    lineNumber: 531,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, row.label, true, {
                                            fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                                            lineNumber: 518,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                                    lineNumber: 516,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                            lineNumber: 473,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                        lineNumber: 467,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                lineNumber: 456,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-2xl border border-navy-200/60 bg-navy-50/40 max-w-5xl mx-auto", compact ? "mt-8 rounded-xl px-4 py-4 sm:px-5" : "mt-12 px-5 py-6 sm:px-8 sm:py-7"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-display font-bold text-navy-900", compact ? "text-sm" : "text-base sm:text-lg"),
                        children: "Straightforward & transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                        lineNumber: 547,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-navy-600 max-w-3xl", compact ? "mt-1.5 text-xs leading-relaxed" : "mt-2 text-sm leading-relaxed"),
                        children: "You control what you enter. Estimates are for planning, not tax filing. Premium tools read from the same salary context you already trust in the free calculator—so upgrades feel like a natural next step, not a reset."
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                        lineNumber: 555,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-wrap font-semibold uppercase tracking-wide text-navy-500", compact ? "mt-3 gap-x-4 gap-y-1 text-[10px]" : "mt-4 gap-x-6 gap-y-2 text-xs"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "No ads in product flows"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                                lineNumber: 576,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "No bank linking required"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                                lineNumber: 577,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "Built for Indian payroll context"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                                lineNumber: 578,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                        lineNumber: 568,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
                lineNumber: 539,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/features/pricing/salary-pricing-section.tsx",
        lineNumber: 114,
        columnNumber: 5
    }, this);
}
_s(SalaryPricingSection, "khWas0ioRgXQur5Yc9jYraSpYuM=");
_c1 = SalaryPricingSection;
var _c, _c1;
__turbopack_context__.k.register(_c, "Cell");
__turbopack_context__.k.register(_c1, "SalaryPricingSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/stores/use-premium-plans-modal-store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "closePremiumPlansModal",
    ()=>closePremiumPlansModal,
    "openPremiumPlansModal",
    ()=>openPremiumPlansModal,
    "usePremiumPlansModalStore",
    ()=>usePremiumPlansModalStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const usePremiumPlansModalStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        isOpen: false,
        fromPremium: false,
        openPremiumPlansModal: (opts)=>set({
                isOpen: true,
                fromPremium: Boolean(opts?.fromPremium)
            }),
        closePremiumPlansModal: ()=>set({
                isOpen: false,
                fromPremium: false
            })
    }));
function openPremiumPlansModal(opts) {
    usePremiumPlansModalStore.getState().openPremiumPlansModal(opts);
}
function closePremiumPlansModal() {
    usePremiumPlansModalStore.getState().closePremiumPlansModal();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/features/pricing/premium-plans-modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PremiumPlansModal",
    ()=>PremiumPlansModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/crown.js [app-client] (ecmascript) <export default as Crown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$pricing$2f$salary$2d$pricing$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/pricing/salary-pricing-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/use-auth-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$premium$2d$plans$2d$modal$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/use-premium-plans-modal-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function PremiumPlansModal() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const isOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$premium$2d$plans$2d$modal$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePremiumPlansModalStore"])({
        "PremiumPlansModal.usePremiumPlansModalStore[isOpen]": (s)=>s.isOpen
    }["PremiumPlansModal.usePremiumPlansModalStore[isOpen]"]);
    const fromPremium = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$premium$2d$plans$2d$modal$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePremiumPlansModalStore"])({
        "PremiumPlansModal.usePremiumPlansModalStore[fromPremium]": (s)=>s.fromPremium
    }["PremiumPlansModal.usePremiumPlansModalStore[fromPremium]"]);
    const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])({
        "PremiumPlansModal.useAuthStore[user]": (s)=>s.user
    }["PremiumPlansModal.useAuthStore[user]"]);
    const loggedIn = Boolean(user);
    const premiumHref = loggedIn ? "/profile" : "/login?from=%2Fpaywall";
    const handleClose = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PremiumPlansModal.useCallback[handleClose]": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$premium$2d$plans$2d$modal$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["closePremiumPlansModal"])();
            if (pathname === "/paywall") {
                router.replace("/salary");
            }
        }
    }["PremiumPlansModal.useCallback[handleClose]"], [
        pathname,
        router
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PremiumPlansModal.useEffect": ()=>{
            if (!isOpen) return;
            const prev = document.body.style.overflow;
            document.body.style.overflow = "hidden";
            return ({
                "PremiumPlansModal.useEffect": ()=>{
                    document.body.style.overflow = prev;
                }
            })["PremiumPlansModal.useEffect"];
        }
    }["PremiumPlansModal.useEffect"], [
        isOpen
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PremiumPlansModal.useEffect": ()=>{
            if (!isOpen) return;
            function onKey(e) {
                if (e.key === "Escape") handleClose();
            }
            document.addEventListener("keydown", onKey);
            return ({
                "PremiumPlansModal.useEffect": ()=>document.removeEventListener("keydown", onKey)
            })["PremiumPlansModal.useEffect"];
        }
    }["PremiumPlansModal.useEffect"], [
        isOpen,
        handleClose
    ]);
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[100] flex flex-col",
        role: "presentation",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: "absolute inset-0 bg-navy-950/70 backdrop-blur-md",
                "aria-label": "Close premium plans",
                onClick: handleClose
            }, void 0, false, {
                fileName: "[project]/src/components/features/pricing/premium-plans-modal.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_55%_at_50%_0%,rgba(13,148,136,0.14),transparent_55%)]",
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/src/components/features/pricing/premium-plans-modal.tsx",
                lineNumber: 68,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex min-h-0 flex-1 flex-col items-center justify-center overflow-y-auto p-4 sm:p-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pointer-events-auto my-auto w-full max-w-6xl max-h-[min(92dvh,calc(100dvh-2rem))] overflow-y-auto overscroll-y-contain rounded-[1.75rem]", "border border-navy-200/70 bg-white/95 shadow-[0_28px_90px_-24px_rgba(15,23,42,0.45)]", "ring-1 ring-white/70 backdrop-blur-xl supports-[backdrop-filter]:bg-white/90"),
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-labelledby": "premium-plans-modal-title",
                    onClick: (e)=>e.stopPropagation(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sticky top-0 z-10 flex items-start justify-between gap-3 border-b border-navy-100/90 bg-white/90 px-4 py-3 backdrop-blur-md sm:px-6 sm:py-3.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex min-w-0 items-center gap-2.5 sm:gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex size-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-teal-50 to-teal-100/90 text-teal-700 shadow-sm ring-1 ring-teal-200/60 sm:size-10 sm:rounded-xl",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__["Crown"], {
                                                className: "size-[18px] sm:size-5",
                                                strokeWidth: 1.75,
                                                "aria-hidden": true
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/pricing/premium-plans-modal.tsx",
                                                lineNumber: 88,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/pricing/premium-plans-modal.tsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[9px] font-semibold uppercase tracking-[0.14em] text-teal-700 sm:text-[10px]",
                                                    children: "InHand"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/pricing/premium-plans-modal.tsx",
                                                    lineNumber: 91,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    id: "premium-plans-modal-title",
                                                    className: "font-display text-base font-bold leading-tight tracking-tight text-navy-900 sm:text-lg",
                                                    children: "Premium plans"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/pricing/premium-plans-modal.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/features/pricing/premium-plans-modal.tsx",
                                            lineNumber: 90,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/features/pricing/premium-plans-modal.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleClose,
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"])({
                                        variant: "ghost",
                                        size: "sm"
                                    }), "shrink-0 gap-1.5 rounded-full text-navy-600 hover:bg-navy-100/80 hover:text-navy-900"),
                                    "aria-label": "Close",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "size-4",
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/pricing/premium-plans-modal.tsx",
                                            lineNumber: 111,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "hidden sm:inline",
                                            children: "Close"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/pricing/premium-plans-modal.tsx",
                                            lineNumber: 112,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/features/pricing/premium-plans-modal.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/features/pricing/premium-plans-modal.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-4 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-5",
                            children: [
                                fromPremium ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mb-4 rounded-lg border border-teal-200/60 bg-teal-50/50 px-3 py-2.5 text-xs text-teal-950/90 leading-relaxed sm:text-sm sm:px-4 sm:py-3",
                                    children: "That screen needs Premium. Pick a plan below—or continue with the free calculator."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/features/pricing/premium-plans-modal.tsx",
                                    lineNumber: 118,
                                    columnNumber: 15
                                }, this) : null,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$pricing$2f$salary$2d$pricing$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SalaryPricingSection"], {
                                    premiumHref: premiumHref,
                                    freeHref: "/salary",
                                    id: "pricing-modal",
                                    embedded: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/features/pricing/premium-plans-modal.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 flex flex-col gap-2 border-t border-navy-100 pt-6 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: premiumHref,
                                            onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$premium$2d$plans$2d$modal$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["closePremiumPlansModal"])(),
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"])({
                                                variant: "default"
                                            }), "h-10 rounded-full border-0 bg-teal-700 px-5 text-xs font-semibold text-white shadow-sm hover:bg-teal-800 sm:h-10 sm:min-w-[200px] sm:text-sm"),
                                            children: loggedIn ? "Account & Premium" : "Sign in for Premium"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/pricing/premium-plans-modal.tsx",
                                            lineNumber: 132,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/salary",
                                            onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$premium$2d$plans$2d$modal$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["closePremiumPlansModal"])(),
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"])({
                                                variant: "outline"
                                            }), "h-10 rounded-full border-navy-200 bg-white px-5 text-xs font-semibold text-navy-800 hover:bg-navy-50 sm:h-10 sm:min-w-[200px] sm:text-sm"),
                                            children: "Continue with Basic Salary Calculator"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/pricing/premium-plans-modal.tsx",
                                            lineNumber: 142,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/features/pricing/premium-plans-modal.tsx",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/features/pricing/premium-plans-modal.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/features/pricing/premium-plans-modal.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/features/pricing/premium-plans-modal.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/features/pricing/premium-plans-modal.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_s(PremiumPlansModal, "PS+YfSlmXWSkfp1YQB/yirmg36Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$premium$2d$plans$2d$modal$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePremiumPlansModalStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$premium$2d$plans$2d$modal$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePremiumPlansModalStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"]
    ];
});
_c = PremiumPlansModal;
var _c;
__turbopack_context__.k.register(_c, "PremiumPlansModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/hooks/use-premium-product-access.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePremiumProductAccess",
    ()=>usePremiumProductAccess
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$access$2f$product$2d$access$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/access/product-access.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/use-auth-store.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function usePremiumProductAccess() {
    _s();
    const planTier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])({
        "usePremiumProductAccess.useAuthStore[planTier]": (s)=>s.user?.planTier
    }["usePremiumProductAccess.useAuthStore[planTier]"]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$access$2f$product$2d$access$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasPremiumProductAccess"])(planTier);
}
_s(usePremiumProductAccess, "VOIecMwsi94VVdjyit9MgndvDzo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/providers/premium-plans-modal-host.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PremiumPlansModalHost",
    ()=>PremiumPlansModalHost
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$pricing$2f$premium$2d$plans$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/pricing/premium-plans-modal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$premium$2d$product$2d$access$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/hooks/use-premium-product-access.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$premium$2d$plans$2d$modal$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/use-premium-plans-modal-store.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function PremiumPlansModalHost() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const prevPathRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(pathname);
    const hasPremium = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$premium$2d$product$2d$access$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePremiumProductAccess"])();
    const fromPremium = searchParams.get("from") === "premium";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PremiumPlansModalHost.useEffect": ()=>{
            if (hasPremium) return;
            if (pathname === "/paywall") {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$premium$2d$plans$2d$modal$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openPremiumPlansModal"])({
                    fromPremium
                });
            }
        }
    }["PremiumPlansModalHost.useEffect"], [
        pathname,
        fromPremium,
        hasPremium
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PremiumPlansModalHost.useEffect": ()=>{
            if (hasPremium) return;
            const prev = prevPathRef.current;
            if (prev === "/paywall" && pathname !== "/paywall") {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$premium$2d$plans$2d$modal$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["closePremiumPlansModal"])();
            }
            prevPathRef.current = pathname;
        }
    }["PremiumPlansModalHost.useEffect"], [
        pathname,
        hasPremium
    ]);
    if (hasPremium) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$pricing$2f$premium$2d$plans$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PremiumPlansModal"], {}, void 0, false, {
        fileName: "[project]/src/components/providers/premium-plans-modal-host.tsx",
        lineNumber: 42,
        columnNumber: 10
    }, this);
}
_s(PremiumPlansModalHost, "Xk5op6QYH8oxQPiWeyfUjmr0lm4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$premium$2d$product$2d$access$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePremiumProductAccess"]
    ];
});
_c = PremiumPlansModalHost;
var _c;
__turbopack_context__.k.register(_c, "PremiumPlansModalHost");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils/format-currency.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Format number to Indian currency: ₹1,42,500
 * Uses en-IN locale for proper lakhs/crores grouping.
 */ __turbopack_context__.s([
    "formatCTCAsLPA",
    ()=>formatCTCAsLPA,
    "formatCurrency",
    ()=>formatCurrency,
    "formatCurrencyCompact",
    ()=>formatCurrencyCompact,
    "formatIndianNumber",
    ()=>formatIndianNumber,
    "formatPercentage",
    ()=>formatPercentage
]);
function formatCurrency(amount) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        maximumFractionDigits: 0
    }).format(amount);
}
function formatCurrencyCompact(amount) {
    const abs = Math.abs(amount);
    const sign = amount < 0 ? "-" : "";
    if (abs >= 10000000) {
        return `${sign}₹${(abs / 10000000).toFixed(1)}Cr`;
    }
    if (abs >= 100000) {
        return `${sign}₹${(abs / 100000).toFixed(1)}L`;
    }
    if (abs >= 1000) {
        return `${sign}₹${(abs / 1000).toFixed(0)}K`;
    }
    return `${sign}₹${abs.toLocaleString("en-IN")}`;
}
function formatIndianNumber(num) {
    return new Intl.NumberFormat("en-IN", {
        maximumFractionDigits: 0
    }).format(num);
}
function formatPercentage(value, decimals = 1) {
    return `${value.toFixed(decimals)}%`;
}
function formatCTCAsLPA(annualCTC) {
    if (annualCTC <= 0) return "";
    const abs = Math.abs(annualCTC);
    if (abs >= 10_000_000) {
        const cr = abs / 10_000_000;
        const formatted = cr % 1 === 0 ? cr.toFixed(0) : parseFloat(cr.toFixed(2)).toString();
        return `${formatted} Cr`;
    }
    const lpa = abs / 100_000;
    const formatted = lpa % 1 === 0 ? lpa.toFixed(0) : parseFloat(lpa.toFixed(1)).toString();
    return `${formatted} LPA`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils/format-relative-time.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** Lightweight relative labels (no date-fns). */ __turbopack_context__.s([
    "formatRelativeTime",
    ()=>formatRelativeTime
]);
function formatRelativeTime(timestampMs) {
    const sec = Math.floor((Date.now() - timestampMs) / 1000);
    if (sec < 45) return "Just now";
    if (sec < 3600) return `${Math.floor(sec / 60)}m ago`;
    if (sec < 86400) return `${Math.floor(sec / 3600)}h ago`;
    if (sec < 604800) return `${Math.floor(sec / 86400)}d ago`;
    return new Date(timestampMs).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: new Date(timestampMs).getFullYear() === new Date().getFullYear() ? undefined : "numeric"
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils/salary-context-match.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isSalaryInputEquivalent",
    ()=>isSalaryInputEquivalent
]);
function isSalaryInputEquivalent(a, b) {
    return a.annualCTC === b.annualCTC && a.taxRegime === b.taxRegime && a.cityTier === b.cityTier && (a.compensationMode ?? "total_only") === (b.compensationMode ?? "total_only") && (a.fixedAnnual ?? 0) === (b.fixedAnnual ?? 0) && (a.variableAnnual ?? 0) === (b.variableAnnual ?? 0) && (a.resultSource ?? "manual_estimated") === (b.resultSource ?? "manual_estimated");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/hooks/use-salary-breakdown-scroll-restoration.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearSalaryBreakdownScrollSave",
    ()=>clearSalaryBreakdownScrollSave,
    "persistSalaryBreakdownScrollNow",
    ()=>persistSalaryBreakdownScrollNow,
    "useSalaryBreakdownScrollRestoration",
    ()=>useSalaryBreakdownScrollRestoration
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const SCROLL_KEY = "inhand.salaryBreakdown.scrollY";
function isBrowser() {
    return globalThis.window !== undefined;
}
function clearSalaryBreakdownScrollSave() {
    if (!isBrowser()) return;
    try {
        globalThis.sessionStorage.removeItem(SCROLL_KEY);
    } catch  {
    /* ignore */ }
}
function peekSavedScrollY() {
    if (!isBrowser()) return null;
    try {
        const raw = globalThis.sessionStorage.getItem(SCROLL_KEY);
        if (raw == null) return null;
        const y = Number.parseInt(raw, 10);
        return Number.isFinite(y) && y >= 0 ? y : null;
    } catch  {
        return null;
    }
}
function writeSavedScroll(y) {
    if (!isBrowser()) return;
    try {
        globalThis.sessionStorage.setItem(SCROLL_KEY, String(Math.round(y)));
    } catch  {
    /* quota / private mode */ }
}
function persistSalaryBreakdownScrollNow() {
    if (!isBrowser()) return;
    try {
        const y = Math.round(globalThis.window.scrollY ?? 0);
        if (y >= 0) writeSavedScroll(y);
    } catch  {
    /* ignore */ }
}
function useSalaryBreakdownScrollRestoration(enabled, options) {
    _s();
    const scrollYRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const skipRef = options?.skipNextPersistRef;
    const restoreTargetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "useSalaryBreakdownScrollRestoration.useLayoutEffect": ()=>{
            if (!enabled) return;
            const y = peekSavedScrollY();
            if (y == null || y <= 8) {
                restoreTargetRef.current = null;
                return;
            }
            restoreTargetRef.current = y;
            globalThis.window.scrollTo({
                top: y,
                behavior: "auto"
            });
            scrollYRef.current = y;
            try {
                globalThis.sessionStorage.removeItem(SCROLL_KEY);
            } catch  {
            /* ignore */ }
        }
    }["useSalaryBreakdownScrollRestoration.useLayoutEffect"], [
        enabled
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSalaryBreakdownScrollRestoration.useEffect": ()=>{
            if (!enabled) return;
            const target = restoreTargetRef.current;
            if (target == null) return;
            restoreTargetRef.current = null;
            let raf = 0;
            const fix = {
                "useSalaryBreakdownScrollRestoration.useEffect.fix": ()=>{
                    if (Math.abs(globalThis.window.scrollY - target) > 12) {
                        globalThis.window.scrollTo({
                            top: target,
                            behavior: "auto"
                        });
                        scrollYRef.current = target;
                    }
                }
            }["useSalaryBreakdownScrollRestoration.useEffect.fix"];
            raf = globalThis.requestAnimationFrame({
                "useSalaryBreakdownScrollRestoration.useEffect": ()=>{
                    globalThis.requestAnimationFrame(fix);
                }
            }["useSalaryBreakdownScrollRestoration.useEffect"]);
            return ({
                "useSalaryBreakdownScrollRestoration.useEffect": ()=>globalThis.cancelAnimationFrame(raf)
            })["useSalaryBreakdownScrollRestoration.useEffect"];
        }
    }["useSalaryBreakdownScrollRestoration.useEffect"], [
        enabled
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSalaryBreakdownScrollRestoration.useEffect": ()=>{
            if (!enabled) return;
            const win = globalThis.window;
            const onScroll = {
                "useSalaryBreakdownScrollRestoration.useEffect.onScroll": ()=>{
                    scrollYRef.current = win.scrollY;
                }
            }["useSalaryBreakdownScrollRestoration.useEffect.onScroll"];
            onScroll();
            win.addEventListener("scroll", onScroll, {
                passive: true
            });
            return ({
                "useSalaryBreakdownScrollRestoration.useEffect": ()=>{
                    win.removeEventListener("scroll", onScroll);
                    if (skipRef?.current) {
                        skipRef.current = false;
                        return;
                    }
                    const stored = peekSavedScrollY();
                    const live = scrollYRef.current;
                    const best = Math.max(live, stored ?? 0);
                    writeSavedScroll(best);
                }
            })["useSalaryBreakdownScrollRestoration.useEffect"];
        }
    }["useSalaryBreakdownScrollRestoration.useEffect"], [
        enabled,
        skipRef
    ]);
}
_s(useSalaryBreakdownScrollRestoration, "IfxFEyK/S3RquVg1a0JvosYe/9E=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/separator.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Separator",
    ()=>Separator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$separator$2f$Separator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/react/esm/separator/Separator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Separator({ className, orientation = "horizontal", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$separator$2f$Separator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "separator",
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/separator.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Separator;
;
var _c;
__turbopack_context__.k.register(_c, "Separator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/react/esm/dialog/index.parts.js [app-client] (ecmascript) <export * as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
"use client";
;
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Root, {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 11,
        columnNumber: 10
    }, this);
}
_c = Dialog;
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Trigger, {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 15,
        columnNumber: 10
    }, this);
}
_c1 = DialogTrigger;
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Portal, {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 19,
        columnNumber: 10
    }, this);
}
_c2 = DialogPortal;
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Close, {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 23,
        columnNumber: 10
    }, this);
}
_c3 = DialogClose;
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Backdrop, {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 isolate z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_c4 = DialogOverlay;
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/dialog.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Popup, {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-popover p-4 text-sm text-popover-foreground ring-1 ring-foreground/10 duration-100 outline-none sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Close, {
                        "data-slot": "dialog-close",
                        render: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            className: "absolute top-2 right-2",
                            size: "icon-sm"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/dialog.tsx",
                            lineNumber: 66,
                            columnNumber: 15
                        }, this),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/src/components/ui/dialog.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/dialog.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/dialog.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/dialog.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c5 = DialogContent;
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-2", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_c6 = DialogHeader;
function DialogFooter({ className, showCloseButton = false, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 sm:flex-row sm:justify-end", className),
        ...props,
        children: [
            children,
            showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Close, {
                render: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline"
                }, void 0, false, {
                    fileName: "[project]/src/components/ui/dialog.tsx",
                    lineNumber: 112,
                    columnNumber: 40
                }, this),
                children: "Close"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/dialog.tsx",
                lineNumber: 112,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
_c7 = DialogFooter;
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Title, {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-heading text-base leading-none font-medium", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 122,
        columnNumber: 5
    }, this);
}
_c8 = DialogTitle;
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Description, {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/dialog.tsx",
        lineNumber: 138,
        columnNumber: 5
    }, this);
}
_c9 = DialogDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Dialog");
__turbopack_context__.k.register(_c1, "DialogTrigger");
__turbopack_context__.k.register(_c2, "DialogPortal");
__turbopack_context__.k.register(_c3, "DialogClose");
__turbopack_context__.k.register(_c4, "DialogOverlay");
__turbopack_context__.k.register(_c5, "DialogContent");
__turbopack_context__.k.register(_c6, "DialogHeader");
__turbopack_context__.k.register(_c7, "DialogFooter");
__turbopack_context__.k.register(_c8, "DialogTitle");
__turbopack_context__.k.register(_c9, "DialogDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/remove-salary-entry-dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemoveSalaryEntryDialog",
    ()=>RemoveSalaryEntryDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/format-currency.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function RemoveSalaryEntryDialog({ entry, open, onOpenChange, onConfirm, variant = "nav" }) {
    _s();
    const secondaryHint = variant === "sheet" ? "If this was your active salary, we’ll load the next saved entry or take you to a clean salary form." : "Your current workspace is unchanged until you pick another entry or start a new check.";
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RemoveSalaryEntryDialog.useEffect": ()=>{
            if (!open) setBusy(false);
        }
    }["RemoveSalaryEntryDialog.useEffect"], [
        open
    ]);
    const handleConfirm = async ()=>{
        setBusy(true);
        try {
            await Promise.resolve(onConfirm());
        } finally{
            setBusy(false);
            onOpenChange(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            showCloseButton: true,
            className: "sm:max-w-[420px] gap-0 p-6 pt-7",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    className: "space-y-3 text-left pr-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            className: "text-base font-semibold text-navy-800 font-heading leading-snug",
                            children: "Remove this saved salary?"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/remove-salary-entry-dialog.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                            className: "text-sm leading-relaxed text-navy-600",
                            children: entry ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-navy-800 tabular-nums",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCTCAsLPA"])(entry.annualCTC)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/remove-salary-entry-dialog.tsx",
                                                lineNumber: 65,
                                                columnNumber: 19
                                            }, this),
                                            " ",
                                            "will be permanently removed from saved salaries on this device. This cannot be undone."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/remove-salary-entry-dialog.tsx",
                                        lineNumber: 64,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mt-3 block text-xs leading-relaxed text-navy-500",
                                        children: secondaryHint
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/remove-salary-entry-dialog.tsx",
                                        lineNumber: 71,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true) : null
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/remove-salary-entry-dialog.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/remove-salary-entry-dialog.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 flex flex-col-reverse gap-2.5 border-t border-navy-100 pt-5 sm:flex-row sm:justify-end",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            variant: "outline",
                            className: "h-10 rounded-full px-5",
                            disabled: busy,
                            onClick: ()=>onOpenChange(false),
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/remove-salary-entry-dialog.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            variant: "default",
                            className: "h-10 rounded-full bg-danger-600 px-5 hover:bg-danger-700",
                            disabled: busy,
                            onClick: ()=>void handleConfirm(),
                            children: busy ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "mr-2 size-4 animate-spin",
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/remove-salary-entry-dialog.tsx",
                                        lineNumber: 97,
                                        columnNumber: 17
                                    }, this),
                                    "Removing…"
                                ]
                            }, void 0, true) : "Remove saved salary"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/remove-salary-entry-dialog.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/remove-salary-entry-dialog.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/remove-salary-entry-dialog.tsx",
            lineNumber: 53,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/remove-salary-entry-dialog.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_s(RemoveSalaryEntryDialog, "jyqPIKDXdE5g/nNgU+6ZFCXmsvY=");
_c = RemoveSalaryEntryDialog;
var _c;
__turbopack_context__.k.register(_c, "RemoveSalaryEntryDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/notify/app-notify.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "appToast",
    ()=>appToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
/** Default visibility for standard toasts (ms). */ const DEFAULT_MS = 3200;
/** Autosave toasts stay shorter and quieter. */ const AUTOSAVE_MS = 2200;
const AUTOSAVE_THROTTLE_MS = 50_000;
const COPY = {
    salarySession: {
        opened: {
            title: "Salary session ready",
            description: "Continuing from your saved breakdown."
        },
        deleted: {
            title: "Salary session removed",
            description: "It’s no longer in your account."
        },
        created: {
            title: "Salary session saved",
            description: "Synced to your account."
        },
        autosaved: {
            title: "Saved",
            description: "Salary breakdown synced in the background."
        }
    },
    offerComparison: {
        opened: {
            title: "Offer comparison ready",
            description: "Your saved comparison is open."
        },
        deleted: {
            title: "Offer comparison removed",
            description: "It’s no longer in your account."
        },
        autosaved: {
            title: "Saved",
            description: "Offer comparison synced in the background."
        },
        workspaceReset: {
            title: "Workspace cleared",
            description: "Starting a fresh offer comparison."
        }
    },
    monthlyPlan: {
        autosaved: {
            title: "Saved",
            description: "Monthly plan synced in the background."
        }
    },
    profile: {
        updated: {
            title: "Profile updated",
            description: "Your details were saved."
        }
    },
    persistence: {
        removedFromDevice: {
            title: "Removed from this device",
            description: "This item is no longer stored here."
        },
        cloudUnavailableLocalFallback: {
            title: "Saved on this device",
            description: "We couldn’t reach the cloud—try again when you’re online."
        }
    },
    errors: {
        salarySessionDelete: {
            title: "Couldn’t delete salary session",
            description: "Check your connection and try again."
        },
        offerComparisonDelete: {
            title: "Couldn’t delete offer comparison",
            description: "Check your connection and try again."
        }
    }
};
function showSuccess(title, description, duration = DEFAULT_MS) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(title, {
        duration,
        description
    });
}
function showError(title, description, duration = DEFAULT_MS) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(title, {
        duration,
        description
    });
}
function showInfo(title, description, duration = DEFAULT_MS) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].info(title, {
        duration,
        description
    });
}
const autosaveLastAt = new Map();
function shouldFireAutosaveToast(channel) {
    const now = Date.now();
    const last = autosaveLastAt.get(channel) ?? 0;
    if (now - last < AUTOSAVE_THROTTLE_MS) return false;
    autosaveLastAt.set(channel, now);
    return true;
}
function fireAutosaveToast(channel, title, description) {
    if (!shouldFireAutosaveToast(channel)) return;
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(title, {
        id: `autosave-${channel}`,
        description,
        duration: AUTOSAVE_MS
    });
}
const appToast = {
    salarySession: {
        opened: ()=>showInfo(COPY.salarySession.opened.title, COPY.salarySession.opened.description),
        deleted: ()=>showSuccess(COPY.salarySession.deleted.title, COPY.salarySession.deleted.description),
        created: ()=>showSuccess(COPY.salarySession.created.title, COPY.salarySession.created.description),
        autosaved: ()=>fireAutosaveToast("salary", COPY.salarySession.autosaved.title, COPY.salarySession.autosaved.description)
    },
    offerComparison: {
        opened: ()=>showInfo(COPY.offerComparison.opened.title, COPY.offerComparison.opened.description),
        deleted: ()=>showSuccess(COPY.offerComparison.deleted.title, COPY.offerComparison.deleted.description),
        autosaved: ()=>fireAutosaveToast("offer", COPY.offerComparison.autosaved.title, COPY.offerComparison.autosaved.description),
        workspaceReset: ()=>showSuccess(COPY.offerComparison.workspaceReset.title, COPY.offerComparison.workspaceReset.description)
    },
    monthlyPlan: {
        autosaved: ()=>fireAutosaveToast("plan", COPY.monthlyPlan.autosaved.title, COPY.monthlyPlan.autosaved.description)
    },
    profile: {
        updated: ()=>showSuccess(COPY.profile.updated.title, COPY.profile.updated.description)
    },
    persistence: {
        removedFromDevice: ()=>showSuccess(COPY.persistence.removedFromDevice.title, COPY.persistence.removedFromDevice.description),
        cloudUnavailableLocalFallback: ()=>showInfo(COPY.persistence.cloudUnavailableLocalFallback.title, COPY.persistence.cloudUnavailableLocalFallback.description)
    },
    errors: {
        salarySessionDeleteFailed: ()=>showError(COPY.errors.salarySessionDelete.title, COPY.errors.salarySessionDelete.description),
        offerComparisonDeleteFailed: ()=>showError(COPY.errors.offerComparisonDelete.title, COPY.errors.offerComparisonDelete.description)
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/hooks/use-salary-history-delete.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSalaryHistoryDelete",
    ()=>useSalaryHistoryDelete
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/use-auth-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$history$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/use-history-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/use-salary-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$hooks$2f$use$2d$salary$2d$sessions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/hooks/use-salary-sessions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$query$2d$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/query-keys.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$persistence$2d$gate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/persistence-gate.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$coerce$2d$salary$2d$snapshot$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/coerce-salary-snapshot.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$salary$2d$context$2d$match$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/salary-context-match.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$salary$2d$breakdown$2d$scroll$2d$restoration$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/hooks/use-salary-breakdown-scroll-restoration.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$app$2d$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/notify/app-notify.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$salary$2d$premium$2d$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/config/salary-premium-paths.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$persistence$2f$workspace$2d$session$2d$cookies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/persistence/workspace-session-cookies.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const LIST_LIMIT = 40;
function useSalaryHistoryDelete(onAfterRemove) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])({
        "useSalaryHistoryDelete.useAuthStore[user]": (s)=>s.user
    }["useSalaryHistoryDelete.useAuthStore[user]"]);
    const cloud = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$persistence$2d$gate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldPersistSessions"])(user);
    const deleteSalarySession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$hooks$2f$use$2d$salary$2d$sessions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeleteSalarySessionMutation"])();
    const removeSalaryContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$history$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHistoryStore"])({
        "useSalaryHistoryDelete.useHistoryStore[removeSalaryContext]": (s)=>s.removeSalaryContext
    }["useSalaryHistoryDelete.useHistoryStore[removeSalaryContext]"]);
    const input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"])({
        "useSalaryHistoryDelete.useSalaryStore[input]": (s)=>s.input
    }["useSalaryHistoryDelete.useSalaryStore[input]"]);
    const resetSalary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"])({
        "useSalaryHistoryDelete.useSalaryStore[resetSalary]": (s)=>s.reset
    }["useSalaryHistoryDelete.useSalaryStore[resetSalary]"]);
    const setInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"])({
        "useSalaryHistoryDelete.useSalaryStore[setInput]": (s)=>s.setInput
    }["useSalaryHistoryDelete.useSalaryStore[setInput]"]);
    const calculateBreakdown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"])({
        "useSalaryHistoryDelete.useSalaryStore[calculateBreakdown]": (s)=>s.calculateBreakdown
    }["useSalaryHistoryDelete.useSalaryStore[calculateBreakdown]"]);
    const activeSalaryHistoryId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"])({
        "useSalaryHistoryDelete.useSalaryStore[activeSalaryHistoryId]": (s)=>s.activeSalaryHistoryId
    }["useSalaryHistoryDelete.useSalaryStore[activeSalaryHistoryId]"]);
    const setActiveSalaryHistoryId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"])({
        "useSalaryHistoryDelete.useSalaryStore[setActiveSalaryHistoryId]": (s)=>s.setActiveSalaryHistoryId
    }["useSalaryHistoryDelete.useSalaryStore[setActiveSalaryHistoryId]"]);
    const applyRemove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useSalaryHistoryDelete.useCallback[applyRemove]": async (entry)=>{
            const wasActive = entry.id === activeSalaryHistoryId || activeSalaryHistoryId == null && (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$salary$2d$context$2d$match$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSalaryInputEquivalent"])(entry.snapshot, input);
            const finishLocal = {
                "useSalaryHistoryDelete.useCallback[applyRemove].finishLocal": ()=>{
                    removeSalaryContext(entry.id);
                    onAfterRemove?.();
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$app$2d$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appToast"].persistence.removedFromDevice();
                    const remaining = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$history$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHistoryStore"].getState().salaryContexts;
                    if (wasActive) {
                        const next = remaining[0];
                        if (next) {
                            setInput((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$coerce$2d$salary$2d$snapshot$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coerceSalarySnapshot"])(next.snapshot));
                            calculateBreakdown();
                            setActiveSalaryHistoryId(next.id);
                            router.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$salary$2d$premium$2d$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["salaryPremiumBreakdownHref"])());
                        } else {
                            resetSalary();
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$persistence$2f$workspace$2d$session$2d$cookies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearSalarySessionIdCookie"])();
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$salary$2d$breakdown$2d$scroll$2d$restoration$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearSalaryBreakdownScrollSave"])();
                            router.push("/salary");
                        }
                    }
                }
            }["useSalaryHistoryDelete.useCallback[applyRemove].finishLocal"];
            if (cloud) {
                try {
                    await deleteSalarySession.mutateAsync(entry.id);
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$app$2d$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appToast"].salarySession.deleted();
                    const mapped = queryClient.getQueryData(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$query$2d$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].salarySessions.list(LIST_LIMIT)) ?? [];
                    onAfterRemove?.();
                    if (wasActive) {
                        const next = mapped[0];
                        if (next) {
                            setActiveSalaryHistoryId(next.id);
                            router.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$salary$2d$premium$2d$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["salaryPremiumBreakdownHref"])(next.id));
                        } else {
                            resetSalary();
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$salary$2d$breakdown$2d$scroll$2d$restoration$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearSalaryBreakdownScrollSave"])();
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$persistence$2f$workspace$2d$session$2d$cookies$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearSalarySessionIdCookie"])();
                            setActiveSalaryHistoryId(null);
                            router.push("/salary");
                        }
                    }
                } catch  {
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$app$2d$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appToast"].errors.salarySessionDeleteFailed();
                }
                return;
            }
            finishLocal();
        }
    }["useSalaryHistoryDelete.useCallback[applyRemove]"], [
        activeSalaryHistoryId,
        input,
        removeSalaryContext,
        onAfterRemove,
        setInput,
        calculateBreakdown,
        setActiveSalaryHistoryId,
        resetSalary,
        router,
        cloud,
        deleteSalarySession,
        queryClient
    ]);
    return {
        applyRemove
    };
}
_s(useSalaryHistoryDelete, "nyxTkEriqmP6a0B9IdxAAesAFZQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$hooks$2f$use$2d$salary$2d$sessions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeleteSalarySessionMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$history$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHistoryStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/salary-nav-item.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SalaryNavItem",
    ()=>SalaryNavItem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/use-salary-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$history$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/use-history-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/use-auth-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$access$2f$product$2d$access$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/access/product-access.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$persistence$2d$gate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/persistence-gate.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$hooks$2f$use$2d$salary$2d$sessions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/hooks/use-salary-sessions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/format-currency.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$relative$2d$time$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/format-relative-time.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$coerce$2d$salary$2d$snapshot$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/coerce-salary-snapshot.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$salary$2d$context$2d$match$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/salary-context-match.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$salary$2d$breakdown$2d$scroll$2d$restoration$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/hooks/use-salary-breakdown-scroll-restoration.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/separator.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$remove$2d$salary$2d$entry$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/remove-salary-entry-dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$salary$2d$history$2d$delete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/hooks/use-salary-history-delete.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$app$2d$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/notify/app-notify.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$salary$2d$premium$2d$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/config/salary-premium-paths.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const DROPDOWN_LIMIT = 5;
/** Match CTC form floor — below this, treat as no meaningful salary for nav label. */ const MIN_CTC_FOR_LABEL = 100_000;
/**
 * Premium salary entry switcher. Mounted with `key={pathname}` so `open` resets on
 * navigation without syncing state in an effect (avoids cascading render lint).
 */ function SalaryNavHistoryDropdown({ open, onOpenChange, recentSalaries, isEntryActive, onSelectEntry, containerRef, hasMeaningfulCtc, breakdownExists, salaryWorkspaceHref, historySource }) {
    _s();
    const [pendingDelete, setPendingDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const resetSalary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"])({
        "SalaryNavHistoryDropdown.useSalaryStore[resetSalary]": (s)=>s.reset
    }["SalaryNavHistoryDropdown.useSalaryStore[resetSalary]"]);
    const { applyRemove } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$salary$2d$history$2d$delete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryHistoryDelete"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SalaryNavHistoryDropdown.useSalaryHistoryDelete.useCallback": ()=>{
            onOpenChange(false);
        }
    }["SalaryNavHistoryDropdown.useSalaryHistoryDelete.useCallback"], [
        onOpenChange
    ]));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SalaryNavHistoryDropdown.useEffect": ()=>{
            if (!open) return;
            function handleClick(e) {
                if (containerRef.current && !containerRef.current.contains(e.target)) {
                    onOpenChange(false);
                }
            }
            document.addEventListener("mousedown", handleClick);
            return ({
                "SalaryNavHistoryDropdown.useEffect": ()=>document.removeEventListener("mousedown", handleClick)
            })["SalaryNavHistoryDropdown.useEffect"];
        }
    }["SalaryNavHistoryDropdown.useEffect"], [
        open,
        containerRef,
        onOpenChange
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SalaryNavHistoryDropdown.useEffect": ()=>{
            if (!open) return;
            function handleKey(e) {
                if (e.key === "Escape") onOpenChange(false);
            }
            document.addEventListener("keydown", handleKey);
            return ({
                "SalaryNavHistoryDropdown.useEffect": ()=>document.removeEventListener("keydown", handleKey)
            })["SalaryNavHistoryDropdown.useEffect"];
        }
    }["SalaryNavHistoryDropdown.useEffect"], [
        open,
        onOpenChange
    ]);
    const handleStartNew = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SalaryNavHistoryDropdown.useCallback[handleStartNew]": ()=>{
            resetSalary();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$salary$2d$breakdown$2d$scroll$2d$restoration$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearSalaryBreakdownScrollSave"])();
            onOpenChange(false);
            router.push("/salary");
        }
    }["SalaryNavHistoryDropdown.useCallback[handleStartNew]"], [
        resetSalary,
        router,
        onOpenChange
    ]);
    const confirmRemoveEntry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SalaryNavHistoryDropdown.useCallback[confirmRemoveEntry]": async ()=>{
            if (!pendingDelete) return;
            await applyRemove(pendingDelete);
        }
    }["SalaryNavHistoryDropdown.useCallback[confirmRemoveEntry]"], [
        pendingDelete,
        applyRemove
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "salary-entry-menu",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute left-0 top-full z-50 mt-3 w-[min(100vw-2rem,320px)]", "rounded-2xl border border-navy-200/60 bg-white py-2 shadow-lg", "animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-150"),
                role: "listbox",
                "aria-label": "Salary entry menu",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-3 pb-2 pt-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] font-semibold uppercase tracking-wide text-navy-400",
                                children: "New check"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/salary-nav-item.tsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                role: "option",
                                "aria-selected": false,
                                onClick: handleStartNew,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-1.5 w-full rounded-xl border border-dashed border-teal-200/90 bg-teal-50/40 px-3 py-2.5 text-left transition-colors", "hover:bg-teal-50/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-semibold text-teal-800",
                                        children: "New in-hand check"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/salary-nav-item.tsx",
                                        lineNumber: 140,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mt-0.5 block text-[11px] text-navy-500 leading-snug",
                                        children: "Clear the form and start a fresh CTC from zero—nothing carried over."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/salary-nav-item.tsx",
                                        lineNumber: 143,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/salary-nav-item.tsx",
                                lineNumber: 130,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/salary-nav-item.tsx",
                        lineNumber: 126,
                        columnNumber: 11
                    }, this),
                    breakdownExists && hasMeaningfulCtc ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-3 pb-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: salaryWorkspaceHref,
                            className: "block rounded-lg px-3 py-2 text-xs font-semibold text-teal-700 transition-colors hover:bg-teal-50/80",
                            onClick: ()=>onOpenChange(false),
                            children: "Open current workspace →"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/salary-nav-item.tsx",
                            lineNumber: 152,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/salary-nav-item.tsx",
                        lineNumber: 151,
                        columnNumber: 13
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Separator"], {
                        className: "my-1 bg-navy-100"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/salary-nav-item.tsx",
                        lineNumber: 162,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "px-3 pt-2 text-[10px] font-semibold uppercase tracking-wide text-navy-400",
                        children: historySource === "cloud" ? "Saved to your account" : "Saved on this device"
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/salary-nav-item.tsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "px-3 pb-1 text-[11px] text-navy-400 leading-snug",
                        children: [
                            "Last five shown here (newest first).",
                            hasMeaningfulCtc ? " Your LPA in the nav is the run you’re on." : " Pick a saved run below or keep entering a new CTC on this page."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/salary-nav-item.tsx",
                        lineNumber: 167,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "max-h-[min(50vh,280px)] overflow-y-auto py-1 px-1",
                        children: recentSalaries.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "px-3 py-3 text-center text-xs text-navy-500 leading-relaxed",
                            children: historySource === "cloud" ? "No saved sessions yet. Run a breakdown to create one in your account." : "No saved entries yet. Run another breakdown to add one—up to 40 are kept on this device."
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/salary-nav-item.tsx",
                            lineNumber: 175,
                            columnNumber: 15
                        }, this) : recentSalaries.map((entry)=>{
                            const current = isEntryActive(entry);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "px-0.5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-stretch gap-1 rounded-lg pr-1 hover:bg-navy-50/50",
                                    children: [
                                        historySource === "cloud" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$salary$2d$premium$2d$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["salaryPremiumBreakdownHref"])(entry.id),
                                            scroll: false,
                                            role: "option",
                                            "aria-selected": current,
                                            onClick: ()=>{
                                                onSelectEntry(entry);
                                                onOpenChange(false);
                                            },
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("min-w-0 flex-1 px-2 py-2.5 text-left transition-colors rounded-lg", "hover:bg-teal-50/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-teal-400", current && "bg-teal-50/40"),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-between gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex min-w-0 items-center gap-2",
                                                        children: [
                                                            current ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                className: "mt-0.5 size-3.5 shrink-0 text-teal-600",
                                                                "aria-hidden": true
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/salary-nav-item.tsx",
                                                                lineNumber: 205,
                                                                columnNumber: 33
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-3.5 shrink-0",
                                                                "aria-hidden": true
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/salary-nav-item.tsx",
                                                                lineNumber: 210,
                                                                columnNumber: 33
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "min-w-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("block text-sm font-semibold tabular-nums", current ? "text-teal-800" : "text-navy-800"),
                                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCTCAsLPA"])(entry.annualCTC)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/layout/salary-nav-item.tsx",
                                                                        lineNumber: 213,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[11px] text-navy-500",
                                                                        children: [
                                                                            current ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-medium text-teal-700",
                                                                                children: [
                                                                                    "Active ·",
                                                                                    " "
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/layout/salary-nav-item.tsx",
                                                                                lineNumber: 223,
                                                                                columnNumber: 37
                                                                            }, this) : null,
                                                                            entry.regimeLabel,
                                                                            " · In-hand",
                                                                            " ",
                                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(entry.monthlyInHand),
                                                                            "/mo"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/layout/salary-nav-item.tsx",
                                                                        lineNumber: 221,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/layout/salary-nav-item.tsx",
                                                                lineNumber: 212,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/layout/salary-nav-item.tsx",
                                                        lineNumber: 203,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "shrink-0 text-[10px] font-medium uppercase tracking-wide text-navy-400 tabular-nums",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$relative$2d$time$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRelativeTime"])(entry.at)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/salary-nav-item.tsx",
                                                        lineNumber: 232,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/salary-nav-item.tsx",
                                                lineNumber: 202,
                                                columnNumber: 27
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/salary-nav-item.tsx",
                                            lineNumber: 187,
                                            columnNumber: 25
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            role: "option",
                                            "aria-selected": current,
                                            onClick: ()=>{
                                                onSelectEntry(entry);
                                                onOpenChange(false);
                                            },
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("min-w-0 flex-1 px-2 py-2.5 text-left transition-colors rounded-lg", "hover:bg-teal-50/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-teal-400", current && "bg-teal-50/40"),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-between gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex min-w-0 items-center gap-2",
                                                        children: [
                                                            current ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                className: "mt-0.5 size-3.5 shrink-0 text-teal-600",
                                                                "aria-hidden": true
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/salary-nav-item.tsx",
                                                                lineNumber: 255,
                                                                columnNumber: 33
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "w-3.5 shrink-0",
                                                                "aria-hidden": true
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/layout/salary-nav-item.tsx",
                                                                lineNumber: 260,
                                                                columnNumber: 33
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "min-w-0",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("block text-sm font-semibold tabular-nums", current ? "text-teal-800" : "text-navy-800"),
                                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCTCAsLPA"])(entry.annualCTC)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/layout/salary-nav-item.tsx",
                                                                        lineNumber: 263,
                                                                        columnNumber: 33
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-[11px] text-navy-500",
                                                                        children: [
                                                                            current ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "font-medium text-teal-700",
                                                                                children: [
                                                                                    "Active ·",
                                                                                    " "
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/layout/salary-nav-item.tsx",
                                                                                lineNumber: 273,
                                                                                columnNumber: 37
                                                                            }, this) : null,
                                                                            entry.regimeLabel,
                                                                            " · In-hand",
                                                                            " ",
                                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(entry.monthlyInHand),
                                                                            "/mo"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/layout/salary-nav-item.tsx",
                                                                        lineNumber: 271,
                                                                        columnNumber: 33
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/layout/salary-nav-item.tsx",
                                                                lineNumber: 262,
                                                                columnNumber: 31
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/layout/salary-nav-item.tsx",
                                                        lineNumber: 253,
                                                        columnNumber: 29
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "shrink-0 text-[10px] font-medium uppercase tracking-wide text-navy-400 tabular-nums",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$relative$2d$time$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRelativeTime"])(entry.at)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/salary-nav-item.tsx",
                                                        lineNumber: 282,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/layout/salary-nav-item.tsx",
                                                lineNumber: 252,
                                                columnNumber: 27
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/salary-nav-item.tsx",
                                            lineNumber: 238,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            "aria-label": `Remove saved salary ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCTCAsLPA"])(entry.annualCTC)}`,
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("shrink-0 self-center rounded-lg p-2.5 text-navy-400 transition-colors", "hover:bg-danger-50 hover:text-danger-600", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"),
                                            onClick: (e)=>{
                                                e.preventDefault();
                                                e.stopPropagation();
                                                setPendingDelete(entry);
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                className: "size-4",
                                                strokeWidth: 2,
                                                "aria-hidden": true
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/salary-nav-item.tsx",
                                                lineNumber: 302,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/salary-nav-item.tsx",
                                            lineNumber: 288,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/salary-nav-item.tsx",
                                    lineNumber: 185,
                                    columnNumber: 21
                                }, this)
                            }, entry.id, false, {
                                fileName: "[project]/src/components/layout/salary-nav-item.tsx",
                                lineNumber: 184,
                                columnNumber: 19
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/salary-nav-item.tsx",
                        lineNumber: 173,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-navy-100 px-3 pt-2 pb-1",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/salary/history",
                            className: "block py-2 text-xs font-semibold text-teal-700 transition-colors hover:text-teal-800",
                            onClick: ()=>onOpenChange(false),
                            children: "Manage saved salaries"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/salary-nav-item.tsx",
                            lineNumber: 312,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/salary-nav-item.tsx",
                        lineNumber: 311,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/salary-nav-item.tsx",
                lineNumber: 116,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$remove$2d$salary$2d$entry$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemoveSalaryEntryDialog"], {
                entry: pendingDelete,
                open: pendingDelete != null,
                onOpenChange: (next)=>{
                    if (!next) setPendingDelete(null);
                },
                onConfirm: confirmRemoveEntry,
                variant: "nav"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/salary-nav-item.tsx",
                lineNumber: 323,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(SalaryNavHistoryDropdown, "6lVRYogmB9+jJ/kBVi32vtqx9NE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$salary$2d$history$2d$delete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryHistoryDelete"]
    ];
});
_c = SalaryNavHistoryDropdown;
function SalaryNavItem() {
    _s1();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])({
        "SalaryNavItem.useAuthStore[user]": (s)=>s.user
    }["SalaryNavItem.useAuthStore[user]"]);
    const persist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$persistence$2d$gate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldPersistSessions"])(user);
    const annualCTC = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"])({
        "SalaryNavItem.useSalaryStore[annualCTC]": (s)=>s.input.annualCTC
    }["SalaryNavItem.useSalaryStore[annualCTC]"]);
    const input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"])({
        "SalaryNavItem.useSalaryStore[input]": (s)=>s.input
    }["SalaryNavItem.useSalaryStore[input]"]);
    const breakdown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"])({
        "SalaryNavItem.useSalaryStore[breakdown]": (s)=>s.breakdown
    }["SalaryNavItem.useSalaryStore[breakdown]"]);
    const setInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"])({
        "SalaryNavItem.useSalaryStore[setInput]": (s)=>s.setInput
    }["SalaryNavItem.useSalaryStore[setInput]"]);
    const calculateBreakdown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"])({
        "SalaryNavItem.useSalaryStore[calculateBreakdown]": (s)=>s.calculateBreakdown
    }["SalaryNavItem.useSalaryStore[calculateBreakdown]"]);
    const activeSalaryHistoryId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"])({
        "SalaryNavItem.useSalaryStore[activeSalaryHistoryId]": (s)=>s.activeSalaryHistoryId
    }["SalaryNavItem.useSalaryStore[activeSalaryHistoryId]"]);
    const setActiveSalaryHistoryId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"])({
        "SalaryNavItem.useSalaryStore[setActiveSalaryHistoryId]": (s)=>s.setActiveSalaryHistoryId
    }["SalaryNavItem.useSalaryStore[setActiveSalaryHistoryId]"]);
    const salaryContexts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$history$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHistoryStore"])({
        "SalaryNavItem.useHistoryStore[salaryContexts]": (s)=>s.salaryContexts
    }["SalaryNavItem.useHistoryStore[salaryContexts]"]);
    const { data: cloudSalaries = [] } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$hooks$2f$use$2d$salary$2d$sessions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalarySessionsListQuery"])(persist);
    /** Offer comparison lives under `/salary/premium/…` but is its own primary nav item. */ const isActive = (pathname === "/salary" || pathname.startsWith("/salary/")) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$salary$2d$premium$2d$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSalaryPremiumOfferComparisonPath"])(pathname);
    const hasMeaningfulCtc = breakdown != null && annualCTC >= MIN_CTC_FOR_LABEL;
    const ctcLabel = hasMeaningfulCtc ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCTCAsLPA"])(annualCTC) : "";
    const recentSalaries = (persist ? cloudSalaries : salaryContexts).slice(0, DROPDOWN_LIMIT);
    const historySource = persist ? "cloud" : "local";
    /** Env premium or account premium — same as other premium chrome. */ const hasDropdown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$access$2f$product$2d$access$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasPremiumProductAccess"])(user?.planTier);
    const salaryHref = breakdown && activeSalaryHistoryId && persist ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$salary$2d$premium$2d$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["salaryPremiumBreakdownHref"])(activeSalaryHistoryId) : breakdown ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$salary$2d$premium$2d$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["salaryPremiumBreakdownHref"])() : "/salary";
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SalaryNavItem.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startTransition"])({
                "SalaryNavItem.useEffect": ()=>{
                    setMenuOpen(false);
                }
            }["SalaryNavItem.useEffect"]);
        }
    }["SalaryNavItem.useEffect"], [
        pathname
    ]);
    const isEntryActive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SalaryNavItem.useCallback[isEntryActive]": (entry)=>{
            if (entry.id === activeSalaryHistoryId) return true;
            if (activeSalaryHistoryId == null) {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$salary$2d$context$2d$match$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSalaryInputEquivalent"])(entry.snapshot, input);
            }
            return false;
        }
    }["SalaryNavItem.useCallback[isEntryActive]"], [
        activeSalaryHistoryId,
        input
    ]);
    const handleSelectEntry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SalaryNavItem.useCallback[handleSelectEntry]": (entry)=>{
            setActiveSalaryHistoryId(entry.id);
            if (persist) {
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$app$2d$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appToast"].salarySession.opened();
                return;
            }
            setInput((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$coerce$2d$salary$2d$snapshot$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coerceSalarySnapshot"])(entry.snapshot));
            calculateBreakdown();
            router.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$salary$2d$premium$2d$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["salaryPremiumBreakdownHref"])());
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$app$2d$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appToast"].salarySession.opened();
        }
    }["SalaryNavItem.useCallback[handleSelectEntry]"], [
        setInput,
        calculateBreakdown,
        setActiveSalaryHistoryId,
        router,
        persist
    ]);
    const linkClass = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm font-medium transition-colors rounded px-0.5 -mx-0.5", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2", isActive ? "text-navy-800 underline decoration-2 underline-offset-[20px] decoration-teal-600" : "text-navy-500 hover:text-navy-800");
    const labelText = ctcLabel ? `Salary (${ctcLabel})` : "Salary";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "relative inline-flex items-center",
        children: [
            hasDropdown ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setMenuOpen((o)=>!o),
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(linkClass, "inline-flex items-center gap-1 cursor-pointer border-0 bg-transparent p-0"),
                "aria-expanded": menuOpen,
                "aria-haspopup": "listbox",
                "aria-controls": "salary-entry-menu",
                id: "salary-nav-menu-trigger",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: labelText
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/salary-nav-item.tsx",
                        lineNumber: 447,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("size-3.5 shrink-0 text-navy-500 transition-transform duration-150", menuOpen && "rotate-180", isActive ? "text-navy-600" : "text-navy-400"),
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/salary-nav-item.tsx",
                        lineNumber: 448,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/layout/salary-nav-item.tsx",
                lineNumber: 435,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: salaryHref,
                className: linkClass,
                children: labelText
            }, void 0, false, {
                fileName: "[project]/src/components/layout/salary-nav-item.tsx",
                lineNumber: 458,
                columnNumber: 9
            }, this),
            hasDropdown ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SalaryNavHistoryDropdown, {
                open: menuOpen,
                onOpenChange: setMenuOpen,
                recentSalaries: recentSalaries,
                isEntryActive: isEntryActive,
                onSelectEntry: handleSelectEntry,
                containerRef: containerRef,
                hasMeaningfulCtc: hasMeaningfulCtc,
                breakdownExists: breakdown != null,
                salaryWorkspaceHref: salaryHref,
                historySource: historySource
            }, pathname, false, {
                fileName: "[project]/src/components/layout/salary-nav-item.tsx",
                lineNumber: 464,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/layout/salary-nav-item.tsx",
        lineNumber: 433,
        columnNumber: 5
    }, this);
}
_s1(SalaryNavItem, "Nz6P+atQEBMm6RFn25OEhIg5e3I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$history$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHistoryStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$hooks$2f$use$2d$salary$2d$sessions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalarySessionsListQuery"]
    ];
});
_c1 = SalaryNavItem;
var _c, _c1;
__turbopack_context__.k.register(_c, "SalaryNavHistoryDropdown");
__turbopack_context__.k.register(_c1, "SalaryNavItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/sheet.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sheet",
    ()=>Sheet,
    "SheetClose",
    ()=>SheetClose,
    "SheetContent",
    ()=>SheetContent,
    "SheetDescription",
    ()=>SheetDescription,
    "SheetFooter",
    ()=>SheetFooter,
    "SheetHeader",
    ()=>SheetHeader,
    "SheetTitle",
    ()=>SheetTitle,
    "SheetTrigger",
    ()=>SheetTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/react/esm/dialog/index.parts.js [app-client] (ecmascript) <export * as Dialog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
"use client";
;
;
;
;
;
function Sheet({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Root, {
        "data-slot": "sheet",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 11,
        columnNumber: 10
    }, this);
}
_c = Sheet;
function SheetTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Trigger, {
        "data-slot": "sheet-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 15,
        columnNumber: 10
    }, this);
}
_c1 = SheetTrigger;
function SheetClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Close, {
        "data-slot": "sheet-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 19,
        columnNumber: 10
    }, this);
}
_c2 = SheetClose;
function SheetPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Portal, {
        "data-slot": "sheet-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 23,
        columnNumber: 10
    }, this);
}
_c3 = SheetPortal;
function SheetOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Backdrop, {
        "data-slot": "sheet-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed inset-0 z-50 bg-black/10 transition-opacity duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0 supports-backdrop-filter:backdrop-blur-xs", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c4 = SheetOverlay;
function SheetContent({ className, children, side = "right", showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetOverlay, {}, void 0, false, {
                fileName: "[project]/src/components/ui/sheet.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Popup, {
                "data-slot": "sheet-content",
                "data-side": side,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("fixed z-50 flex flex-col gap-4 bg-popover bg-clip-padding text-sm text-popover-foreground shadow-lg transition duration-200 ease-in-out data-ending-style:opacity-0 data-starting-style:opacity-0 data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=bottom]:data-ending-style:translate-y-[2.5rem] data-[side=bottom]:data-starting-style:translate-y-[2.5rem] data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=left]:data-ending-style:translate-x-[-2.5rem] data-[side=left]:data-starting-style:translate-x-[-2.5rem] data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=right]:data-ending-style:translate-x-[2.5rem] data-[side=right]:data-starting-style:translate-x-[2.5rem] data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=top]:data-ending-style:translate-y-[-2.5rem] data-[side=top]:data-starting-style:translate-y-[-2.5rem] data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm", className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Close, {
                        "data-slot": "sheet-close",
                        render: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "ghost",
                            className: "absolute top-3 right-3",
                            size: "icon-sm"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/sheet.tsx",
                            lineNumber: 66,
                            columnNumber: 15
                        }, this),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/src/components/ui/sheet.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/sheet.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/sheet.tsx",
                        lineNumber: 63,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/sheet.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 50,
        columnNumber: 5
    }, this);
}
_c5 = SheetContent;
function SheetHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "sheet-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col gap-0.5 p-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_c6 = SheetHeader;
function SheetFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "sheet-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-auto flex flex-col gap-2 p-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_c7 = SheetFooter;
function SheetTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Title, {
        "data-slot": "sheet-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-heading text-base font-medium text-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
}
_c8 = SheetTitle;
function SheetDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$dialog$2f$index$2e$parts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__Dialog$3e$__["Dialog"].Description, {
        "data-slot": "sheet-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/sheet.tsx",
        lineNumber: 121,
        columnNumber: 5
    }, this);
}
_c9 = SheetDescription;
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9;
__turbopack_context__.k.register(_c, "Sheet");
__turbopack_context__.k.register(_c1, "SheetTrigger");
__turbopack_context__.k.register(_c2, "SheetClose");
__turbopack_context__.k.register(_c3, "SheetPortal");
__turbopack_context__.k.register(_c4, "SheetOverlay");
__turbopack_context__.k.register(_c5, "SheetContent");
__turbopack_context__.k.register(_c6, "SheetHeader");
__turbopack_context__.k.register(_c7, "SheetFooter");
__turbopack_context__.k.register(_c8, "SheetTitle");
__turbopack_context__.k.register(_c9, "SheetDescription");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/remove-offer-comparison-entry-dialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RemoveOfferComparisonEntryDialog",
    ()=>RemoveOfferComparisonEntryDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function RemoveOfferComparisonEntryDialog({ entry, open, onOpenChange, onConfirm }) {
    _s();
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RemoveOfferComparisonEntryDialog.useEffect": ()=>{
            if (!open) setBusy(false);
        }
    }["RemoveOfferComparisonEntryDialog.useEffect"], [
        open
    ]);
    const handleConfirm = async ()=>{
        setBusy(true);
        try {
            await Promise.resolve(onConfirm());
        } finally{
            setBusy(false);
            onOpenChange(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
        open: open,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            showCloseButton: true,
            className: "sm:max-w-[420px] gap-0 p-6 pt-7",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    className: "space-y-3 text-left pr-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            className: "text-base font-semibold text-navy-800 font-heading leading-snug",
                            children: "Remove this offer comparison?"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/remove-offer-comparison-entry-dialog.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                            className: "text-sm leading-relaxed text-navy-600",
                            children: entry ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-navy-800",
                                                children: entry.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/remove-offer-comparison-entry-dialog.tsx",
                                                lineNumber: 56,
                                                columnNumber: 19
                                            }, this),
                                            " ",
                                            "will be permanently removed from recent activity on this device. This cannot be undone."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/remove-offer-comparison-entry-dialog.tsx",
                                        lineNumber: 55,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mt-3 block text-xs leading-relaxed text-navy-500",
                                        children: "You can run a new comparison anytime from Offer comparison."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/remove-offer-comparison-entry-dialog.tsx",
                                        lineNumber: 62,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true) : null
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/remove-offer-comparison-entry-dialog.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/remove-offer-comparison-entry-dialog.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 flex flex-col-reverse gap-2.5 border-t border-navy-100 pt-5 sm:flex-row sm:justify-end",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            variant: "outline",
                            className: "h-10 rounded-full px-5",
                            disabled: busy,
                            onClick: ()=>onOpenChange(false),
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/remove-offer-comparison-entry-dialog.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            variant: "default",
                            className: "h-10 rounded-full bg-danger-600 px-5 hover:bg-danger-700",
                            disabled: busy,
                            onClick: ()=>void handleConfirm(),
                            children: busy ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                        className: "mr-2 size-4 animate-spin",
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/remove-offer-comparison-entry-dialog.tsx",
                                        lineNumber: 88,
                                        columnNumber: 17
                                    }, this),
                                    "Removing…"
                                ]
                            }, void 0, true) : "Remove comparison"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/remove-offer-comparison-entry-dialog.tsx",
                            lineNumber: 79,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/remove-offer-comparison-entry-dialog.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/remove-offer-comparison-entry-dialog.tsx",
            lineNumber: 44,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/remove-offer-comparison-entry-dialog.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(RemoveOfferComparisonEntryDialog, "jyqPIKDXdE5g/nNgU+6ZFCXmsvY=");
_c = RemoveOfferComparisonEntryDialog;
var _c;
__turbopack_context__.k.register(_c, "RemoveOfferComparisonEntryDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/hooks/use-tiered-premium-links.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useTieredPremiumLinks",
    ()=>useTieredPremiumLinks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/use-auth-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$access$2f$product$2d$access$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/access/product-access.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$salary$2d$premium$2d$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/config/salary-premium-paths.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const TOOL_PATHS = {
    offers: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$salary$2d$premium$2d$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SALARY_PREMIUM_OFFER_COMPARISON"],
    forecast: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$salary$2d$premium$2d$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SALARY_PREMIUM_WEALTH_FORECAST"],
    emi: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$salary$2d$premium$2d$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SALARY_PREMIUM_EMI_ANALYZER"],
    monthly: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$salary$2d$premium$2d$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SALARY_PREMIUM_LIFESTYLE"]
};
function useTieredPremiumLinks() {
    _s();
    const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])({
        "useTieredPremiumLinks.useAuthStore[user]": (s)=>s.user
    }["useTieredPremiumLinks.useAuthStore[user]"]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useTieredPremiumLinks.useMemo": ()=>{
            const loggedIn = Boolean(user);
            const premium = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$access$2f$product$2d$access$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasPremiumProductAccess"])(user?.planTier);
            function toolHref(tool) {
                if (premium) return TOOL_PATHS[tool];
                const paywall = `/paywall?tool=${tool}`;
                if (loggedIn) return paywall;
                return `/login?from=${encodeURIComponent(paywall)}`;
            }
            function hubHref() {
                if (premium) return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$salary$2d$premium$2d$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SALARY_PREMIUM_OFFER_COMPARISON"];
                if (loggedIn) return "/paywall";
                return `/login?from=${encodeURIComponent("/paywall")}`;
            }
            return {
                loggedIn,
                premium,
                toolHref,
                hubHref
            };
        }
    }["useTieredPremiumLinks.useMemo"], [
        user
    ]);
}
_s(useTieredPremiumLinks, "JTrvTJJARpJ9+nDmYIseUae9+po=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/supabase/queries/offer-sessions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createOfferSession",
    ()=>createOfferSession,
    "deleteOfferSession",
    ()=>deleteOfferSession,
    "getOfferSession",
    ()=>getOfferSession,
    "hydrateOfferComparisonFromDetail",
    ()=>hydrateOfferComparisonFromDetail,
    "listOfferSessions",
    ()=>listOfferSessions,
    "offerListRowToHistoryEntry",
    ()=>offerListRowToHistoryEntry,
    "replaceOfferSessionContent",
    ()=>replaceOfferSessionContent
]);
function offerListRowToHistoryEntry(row) {
    return {
        kind: "offer_comparison",
        id: row.id,
        at: new Date(row.updated_at).getTime(),
        title: row.title,
        offerCount: row.offer_count,
        winnerSummary: row.winner_summary,
        offersSnapshot: [],
        hydrateFromServer: true
    };
}
async function listOfferSessions(supabase, limit = 40) {
    const { data, error } = await supabase.from("offer_sessions").select("*").order("updated_at", {
        ascending: false
    }).limit(limit);
    if (error) throw error;
    return data ?? [];
}
async function getOfferSession(supabase, id) {
    const { data: session, error: sErr } = await supabase.from("offer_sessions").select("*").eq("id", id).maybeSingle();
    if (sErr) throw sErr;
    if (!session) return null;
    const { data: offers, error: oErr } = await supabase.from("offer_session_offers").select("*").eq("offer_session_id", id).order("sort_order", {
        ascending: true
    });
    if (oErr) throw oErr;
    return {
        session,
        offers: offers ?? []
    };
}
function buildChildRows(sessionId, payload) {
    return payload.offers.map((draft, index)=>{
        const currentKey = makeOfferInputKeyFromDraft(draft);
        const ed = payload.breakdownEdits[draft.id];
        const useOverride = ed && ed.inputKey === currentKey;
        return {
            offer_session_id: sessionId,
            sort_order: index,
            draft_json: draft,
            breakdown_override_json: useOverride && ed ? ed.breakdown : null
        };
    });
}
async function createOfferSession(supabase, payload) {
    const { data: session, error: sErr } = await supabase.from("offer_sessions").insert({
        title: payload.summary.title,
        offer_count: payload.summary.offerCount,
        winner_summary: payload.summary.winnerSummary
    }).select("*").single();
    if (sErr) throw sErr;
    const children = buildChildRows(session.id, payload);
    let offers = [];
    if (children.length) {
        const { data, error: cErr } = await supabase.from("offer_session_offers").insert(children).select("*");
        if (cErr) throw cErr;
        offers = data ?? [];
    }
    return {
        session,
        offers
    };
}
async function replaceOfferSessionContent(supabase, sessionId, payload) {
    const { data: session, error: uErr } = await supabase.from("offer_sessions").update({
        title: payload.summary.title,
        offer_count: payload.summary.offerCount,
        winner_summary: payload.summary.winnerSummary
    }).eq("id", sessionId).select("*").single();
    if (uErr) throw uErr;
    const { error: dErr } = await supabase.from("offer_session_offers").delete().eq("offer_session_id", sessionId);
    if (dErr) throw dErr;
    const children = buildChildRows(sessionId, payload);
    let offers = [];
    if (children.length) {
        const { data, error: cErr } = await supabase.from("offer_session_offers").insert(children).select("*");
        if (cErr) throw cErr;
        offers = data ?? [];
    }
    return {
        session,
        offers
    };
}
async function deleteOfferSession(supabase, id) {
    const { error } = await supabase.from("offer_sessions").delete().eq("id", id);
    if (error) throw error;
}
function hydrateOfferComparisonFromDetail(detail) {
    const breakdownEdits = {};
    const offers = detail.offers.map((row)=>{
        const draft = row.draft_json;
        if (row.breakdown_override_json) {
            const bd = row.breakdown_override_json;
            const inputKey = makeOfferInputKeyFromDraft(draft);
            breakdownEdits[draft.id] = {
                breakdown: bd,
                inputKey
            };
        }
        return draft;
    });
    return {
        offers,
        breakdownEdits
    };
}
function makeOfferInputKeyFromDraft(o) {
    return [
        o.annualCTC,
        o.cityTier,
        o.taxRegime,
        o.compensationMode,
        o.fixedAnnual ?? 0,
        o.variableAnnual ?? 0,
        o.documentFileName ?? ""
    ].join("|");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/supabase/hooks/use-offer-sessions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDeleteOfferSessionMutation",
    ()=>useDeleteOfferSessionMutation,
    "useOfferSessionDetailQuery",
    ()=>useOfferSessionDetailQuery,
    "useOfferSessionsListQuery",
    ()=>useOfferSessionsListQuery,
    "useUpsertOfferSessionMutation",
    ()=>useUpsertOfferSessionMutation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/client/browser.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$query$2d$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/query-keys.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$queries$2f$offer$2d$sessions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/queries/offer-sessions.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const LIST_LIMIT = 40;
const LIST_STALE_MS = 5 * 60 * 1000;
const DETAIL_STALE_MS = 5 * 60 * 1000;
const calmSessionQueryOptions = {
    staleTime: LIST_STALE_MS,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false
};
function useOfferSessionsListQuery(enabled) {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$query$2d$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].offerSessions.list(LIST_LIMIT),
        queryFn: {
            "useOfferSessionsListQuery.useQuery": async ()=>{
                const sb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBrowserSupabase"])();
                const rows = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$queries$2f$offer$2d$sessions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listOfferSessions"])(sb, LIST_LIMIT);
                return rows.map(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$queries$2f$offer$2d$sessions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["offerListRowToHistoryEntry"]);
            }
        }["useOfferSessionsListQuery.useQuery"],
        enabled,
        ...calmSessionQueryOptions
    });
}
_s(useOfferSessionsListQuery, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useOfferSessionDetailQuery(sessionId, enabled) {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: sessionId ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$query$2d$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].offerSessions.detail(sessionId) : [
            "offer-sessions",
            "detail",
            "none"
        ],
        queryFn: {
            "useOfferSessionDetailQuery.useQuery": async ()=>{
                const sb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBrowserSupabase"])();
                const d = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$queries$2f$offer$2d$sessions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getOfferSession"])(sb, sessionId);
                if (!d) throw new Error("Offer session not found");
                return d;
            }
        }["useOfferSessionDetailQuery.useQuery"],
        enabled: Boolean(sessionId && enabled),
        staleTime: DETAIL_STALE_MS,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false
    });
}
_s1(useOfferSessionDetailQuery, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
function useUpsertOfferSessionMutation() {
    _s2();
    const qc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useUpsertOfferSessionMutation.useMutation": async (args)=>{
                const sb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBrowserSupabase"])();
                if (args.sessionId) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$queries$2f$offer$2d$sessions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replaceOfferSessionContent"])(sb, args.sessionId, args.payload);
                }
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$queries$2f$offer$2d$sessions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createOfferSession"])(sb, args.payload);
            }
        }["useUpsertOfferSessionMutation.useMutation"],
        onSuccess: {
            "useUpsertOfferSessionMutation.useMutation": (detail)=>{
                const listKey = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$query$2d$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].offerSessions.list(LIST_LIMIT);
                qc.setQueryData(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$query$2d$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].offerSessions.detail(detail.session.id), detail);
                qc.setQueryData(listKey, {
                    "useUpsertOfferSessionMutation.useMutation": (prev)=>{
                        const entry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$queries$2f$offer$2d$sessions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["offerListRowToHistoryEntry"])(detail.session);
                        if (!prev?.length) return [
                            entry
                        ];
                        const idx = prev.findIndex({
                            "useUpsertOfferSessionMutation.useMutation.idx": (e)=>e.id === detail.session.id
                        }["useUpsertOfferSessionMutation.useMutation.idx"]);
                        if (idx === -1) return [
                            entry,
                            ...prev
                        ];
                        const next = prev.filter({
                            "useUpsertOfferSessionMutation.useMutation.next": (_, i)=>i !== idx
                        }["useUpsertOfferSessionMutation.useMutation.next"]);
                        return [
                            entry,
                            ...next
                        ];
                    }
                }["useUpsertOfferSessionMutation.useMutation"]);
            }
        }["useUpsertOfferSessionMutation.useMutation"]
    });
}
_s2(useUpsertOfferSessionMutation, "ec0A66mtyLA0kdwNsMUsaWj/EHM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
function useDeleteOfferSessionMutation() {
    _s3();
    const qc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        mutationFn: {
            "useDeleteOfferSessionMutation.useMutation": async (id)=>{
                const sb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$client$2f$browser$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBrowserSupabase"])();
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$queries$2f$offer$2d$sessions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteOfferSession"])(sb, id);
                return id;
            }
        }["useDeleteOfferSessionMutation.useMutation"],
        onSuccess: {
            "useDeleteOfferSessionMutation.useMutation": (id)=>{
                qc.removeQueries({
                    queryKey: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$query$2d$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].offerSessions.detail(id)
                });
                qc.setQueryData(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$query$2d$keys$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryKeys"].offerSessions.list(LIST_LIMIT), {
                    "useDeleteOfferSessionMutation.useMutation": (prev)=>prev?.filter({
                            "useDeleteOfferSessionMutation.useMutation": (e)=>e.id !== id
                        }["useDeleteOfferSessionMutation.useMutation"])
                }["useDeleteOfferSessionMutation.useMutation"]);
            }
        }["useDeleteOfferSessionMutation.useMutation"]
    });
}
_s3(useDeleteOfferSessionMutation, "ec0A66mtyLA0kdwNsMUsaWj/EHM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQueryClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/hooks/use-recent-activity-entries.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FETCH_LIMIT",
    ()=>FETCH_LIMIT,
    "useRecentActivityEntries",
    ()=>useRecentActivityEntries
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$history$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/use-history-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$hooks$2f$use$2d$offer$2d$sessions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/hooks/use-offer-sessions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$hooks$2f$use$2d$salary$2d$sessions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/hooks/use-salary-sessions.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const MIXED_LIMIT = 5;
const FETCH_LIMIT = 8;
function useRecentActivityEntries(cloud) {
    _s();
    const localEntries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$history$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHistoryStore"])({
        "useRecentActivityEntries.useHistoryStore[localEntries]": (s)=>s.entries
    }["useRecentActivityEntries.useHistoryStore[localEntries]"]);
    const salaryQ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$hooks$2f$use$2d$salary$2d$sessions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalarySessionsListQuery"])(cloud);
    const offerQ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$hooks$2f$use$2d$offer$2d$sessions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOfferSessionsListQuery"])(cloud);
    const merged = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useRecentActivityEntries.useMemo[merged]": ()=>{
            if (!cloud) return localEntries;
            const salaryRows = salaryQ.data ?? [];
            const offerRows = offerQ.data ?? [];
            const combined = [
                ...salaryRows,
                ...offerRows
            ];
            combined.sort({
                "useRecentActivityEntries.useMemo[merged]": (a, b)=>b.at - a.at
            }["useRecentActivityEntries.useMemo[merged]"]);
            return combined.slice(0, MIXED_LIMIT);
        }
    }["useRecentActivityEntries.useMemo[merged]"], [
        cloud,
        localEntries,
        salaryQ.data,
        offerQ.data
    ]);
    const isLoading = cloud && (salaryQ.isPending || offerQ.isPending);
    return {
        entries: merged,
        isLoading
    };
}
_s(useRecentActivityEntries, "qvQbmCyuMK+MgUk7Q8f0trytXFk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$history$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHistoryStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$hooks$2f$use$2d$salary$2d$sessions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalarySessionsListQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$hooks$2f$use$2d$offer$2d$sessions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOfferSessionsListQuery"]
    ];
});
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/stores/use-offer-comparison-restore-store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useOfferComparisonRestoreStore",
    ()=>useOfferComparisonRestoreStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const useOfferComparisonRestoreStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        pendingOffers: null,
        queueRestore: (offers)=>set({
                pendingOffers: offers.map((o)=>({
                        ...o
                    }))
            }),
        takeRestore: ()=>{
            const p = get().pendingOffers;
            set({
                pendingOffers: null
            });
            return p;
        }
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/page-shell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PageShell",
    ()=>PageShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
function PageShell({ children, className, narrow }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mx-auto w-full px-6 py-10", narrow ? "max-w-3xl" : "max-w-7xl", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/layout/page-shell.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = PageShell;
var _c;
__turbopack_context__.k.register(_c, "PageShell");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/loading-skeletons.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthFormSkeleton",
    ()=>AuthFormSkeleton,
    "NavbarAuthSkeleton",
    ()=>NavbarAuthSkeleton,
    "NavbarSuspenseFallback",
    ()=>NavbarSuspenseFallback,
    "OfferComparisonSkeleton",
    ()=>OfferComparisonSkeleton,
    "PremiumPlannerSalaryContextSkeleton",
    ()=>PremiumPlannerSalaryContextSkeleton,
    "ProfilePageSkeleton",
    ()=>ProfilePageSkeleton,
    "RecentHistoryRowsSkeleton",
    ()=>RecentHistoryRowsSkeleton,
    "SalaryBreakdownSkeleton",
    ()=>SalaryBreakdownSkeleton,
    "SalaryHistoryListSkeleton",
    ()=>SalaryHistoryListSkeleton,
    "SalaryHistoryRowsSkeleton",
    ()=>SalaryHistoryRowsSkeleton,
    "SalaryRecentsPanelsSkeleton",
    ()=>SalaryRecentsPanelsSkeleton,
    "ShimmerBlock",
    ()=>ShimmerBlock,
    "WealthForecastBodySkeleton",
    ()=>WealthForecastBodySkeleton,
    "WealthForecastPlannerSkeleton",
    ()=>WealthForecastPlannerSkeleton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$page$2d$shell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/page-shell.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
function ShimmerBlock({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inhand-skeleton-shimmer rounded-xl", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/shared/loading-skeletons.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = ShimmerBlock;
function AuthFormSkeleton({ fields = 3 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                className: "mx-auto mb-2 h-8 w-40 max-w-full rounded-lg"
            }, void 0, false, {
                fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                className: "mx-auto mb-8 h-4 w-full max-w-[280px] rounded-md"
            }, void 0, false, {
                fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-5",
                children: [
                    Array.from({
                        length: fields
                    }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                                    className: "h-3.5 w-16 rounded"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                                    className: "h-10 w-full rounded-xl"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                        className: "h-11 w-full rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c1 = AuthFormSkeleton;
function NavbarAuthSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
        className: "h-9 w-24 shrink-0 rounded-full",
        "aria-hidden": true
    }, void 0, false, {
        fileName: "[project]/src/components/shared/loading-skeletons.tsx",
        lineNumber: 37,
        columnNumber: 10
    }, this);
}
_c2 = NavbarAuthSkeleton;
function NavbarSuspenseFallback() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50 w-full border-b border-navy-200/60 bg-white shadow-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                    className: "h-9 w-36 rounded-lg"
                }, void 0, false, {
                    fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden gap-8 md:flex",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                            className: "h-4 w-20 rounded"
                        }, void 0, false, {
                            fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                            className: "h-4 w-28 rounded"
                        }, void 0, false, {
                            fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavbarAuthSkeleton, {}, void 0, false, {
                    fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/loading-skeletons.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/shared/loading-skeletons.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
_c3 = NavbarSuspenseFallback;
function ProfilePageSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$page$2d$shell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageShell"], {
        narrow: true,
        className: "py-8 md:py-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8 space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                        className: "h-9 w-40 rounded-lg"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                        className: "h-4 w-full max-w-md rounded"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-8 rounded-2xl border border-navy-200/50 bg-white p-6 shadow-sm md:p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                                className: "h-3 w-12 rounded"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                                className: "h-5 w-24 rounded"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                                className: "h-3 w-full max-w-sm rounded"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                                className: "h-3 w-14 rounded"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                                className: "h-5 w-48 rounded"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                lineNumber: 71,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-5",
                        children: [
                            [
                                1,
                                2,
                                3
                            ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                                            className: "h-3.5 w-20 rounded"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                            lineNumber: 76,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                                            className: "h-10 w-full rounded-xl"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                            lineNumber: 77,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-3 pt-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                                        className: "h-10 w-32 rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                                        className: "h-10 w-28 rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shared/loading-skeletons.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_c4 = ProfilePageSkeleton;
function SalaryBreakdownSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$page$2d$shell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageShell"], {
        className: "py-8 md:py-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                    className: "h-8 w-44 rounded-lg"
                }, void 0, false, {
                    fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-5 rounded-2xl border border-navy-200/50 bg-white p-4 shadow-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                                    className: "size-10 shrink-0 rounded-xl"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-0 flex-1 space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                                            className: "h-4 w-40 rounded"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                            lineNumber: 102,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                                            className: "h-3 w-full max-w-md rounded"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                            lineNumber: 103,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                            className: "h-9 w-28 shrink-0 rounded-full self-end sm:self-center"
                        }, void 0, false, {
                            fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                            lineNumber: 106,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                    lineNumber: 98,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                className: "mb-6 h-14 w-full rounded-xl"
            }, void 0, false, {
                fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-10 flex flex-col gap-6 lg:flex-row lg:justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-2xl flex-1 space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                                className: "h-10 w-56 rounded-lg"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                                className: "h-4 w-full max-w-lg rounded"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                                className: "h-4 w-4/5 max-w-lg rounded"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                        className: "h-28 w-full max-w-sm shrink-0 rounded-xl lg:mt-1"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-5 md:grid-cols-2 xl:grid-cols-4",
                children: [
                    1,
                    2,
                    3,
                    4
                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl border border-navy-200/50 bg-white p-4 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                                className: "mb-3 h-3 w-24 rounded"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                                className: "h-8 w-36 rounded-md"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                                className: "mt-2 h-3 w-28 rounded"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                        lineNumber: 120,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 rounded-2xl border border-navy-200/50 bg-white px-5 py-4 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                        className: "mb-4 h-3 w-28 rounded"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
                        children: [
                            1,
                            2,
                            3,
                            4
                        ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                                className: "h-16 rounded-lg"
                            }, i, false, {
                                fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 space-y-3 rounded-2xl border border-navy-200/50 bg-white p-4 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                        className: "h-4 w-48 rounded"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    [
                        1,
                        2,
                        3,
                        4,
                        5
                    ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                            className: "h-12 w-full rounded-lg"
                        }, i, false, {
                            fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shared/loading-skeletons.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_c5 = SalaryBreakdownSkeleton;
function OfferComparisonSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$page$2d$shell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageShell"], {
        className: "py-0 pt-2 pb-28 md:pt-3 md:pb-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-3xl border border-navy-200/60 bg-white shadow-[0_1px_0_rgba(15,23,42,0.04),0_20px_50px_-24px_rgba(15,23,42,0.1)]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-t-3xl border-b border-navy-100/90 px-4 py-2.5 md:px-6 md:py-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-3 md:flex-row md:items-start md:justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "min-w-0 flex-1 space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                                        className: "h-3 w-40 rounded"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                        lineNumber: 156,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                                        className: "h-6 w-56 rounded-md"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                        lineNumber: 157,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                                        className: "h-4 w-48 rounded"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                        lineNumber: 158,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                                        className: "hidden h-3 w-full max-w-xl rounded sm:block"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                        lineNumber: 159,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                                        className: "h-11 w-36 rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                        lineNumber: 162,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                                        className: "h-11 w-28 rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                        lineNumber: 163,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                lineNumber: 161,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                        lineNumber: 154,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                    lineNumber: 153,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-4 p-4 md:grid-cols-2 md:p-6",
                    children: [
                        1,
                        2
                    ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl border border-navy-200/50 bg-navy-50/20 p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                                    className: "mb-4 h-5 w-32 rounded"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                    lineNumber: 173,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                                            className: "h-10 w-full rounded-xl"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                            lineNumber: 175,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                                            className: "h-10 w-full rounded-xl"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                            lineNumber: 176,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                                            className: "h-24 w-full rounded-xl"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                            lineNumber: 177,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                    lineNumber: 174,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, i, true, {
                            fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                            lineNumber: 169,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                    lineNumber: 167,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/shared/loading-skeletons.tsx",
            lineNumber: 152,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/shared/loading-skeletons.tsx",
        lineNumber: 151,
        columnNumber: 5
    }, this);
}
_c6 = OfferComparisonSkeleton;
function SalaryHistoryRowsSkeleton({ rows = 4 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
        className: "mt-8 max-w-xl space-y-3",
        "aria-busy": true,
        "aria-label": "Loading saved salaries",
        children: Array.from({
            length: rows
        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                    className: "h-[5.5rem] w-full rounded-xl"
                }, void 0, false, {
                    fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                    lineNumber: 193,
                    columnNumber: 11
                }, this)
            }, i, false, {
                fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                lineNumber: 192,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/shared/loading-skeletons.tsx",
        lineNumber: 190,
        columnNumber: 5
    }, this);
}
_c7 = SalaryHistoryRowsSkeleton;
function SalaryHistoryListSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$page$2d$shell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageShell"], {
        className: "py-8 md:py-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                className: "mb-6 h-8 w-36 rounded-lg"
            }, void 0, false, {
                fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-2xl space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                        className: "h-10 w-64 rounded-lg"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                        lineNumber: 206,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                        className: "h-4 w-full max-w-lg rounded"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                        lineNumber: 207,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                lineNumber: 205,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                className: "mt-8 h-10 w-full max-w-xs rounded-full"
            }, void 0, false, {
                fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                lineNumber: 209,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "mt-8 max-w-xl space-y-3",
                children: [
                    1,
                    2,
                    3,
                    4
                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 rounded-xl border border-navy-200/50 bg-white p-4 shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "min-w-0 flex-1 space-y-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                                            className: "h-4 w-[72%] max-w-xs rounded"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                            lineNumber: 215,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                                            className: "h-3 w-[88%] max-w-sm rounded"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                            lineNumber: 216,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                    lineNumber: 214,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                                    className: "size-9 shrink-0 rounded-lg"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                    lineNumber: 218,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                            lineNumber: 213,
                            columnNumber: 13
                        }, this)
                    }, i, false, {
                        fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                        lineNumber: 212,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                lineNumber: 210,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shared/loading-skeletons.tsx",
        lineNumber: 203,
        columnNumber: 5
    }, this);
}
_c8 = SalaryHistoryListSkeleton;
function RecentHistoryRowsSkeleton({ rows = 5 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2 px-1 py-2",
        "aria-busy": true,
        "aria-label": "Loading recent activity",
        children: Array.from({
            length: rows
        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-stretch gap-1 rounded-xl border border-transparent pr-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0 flex-1 space-y-2 rounded-xl px-3 py-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                                        className: "h-4 flex-1 rounded"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                        lineNumber: 238,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                                        className: "h-3 w-14 shrink-0 rounded"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                        lineNumber: 239,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                lineNumber: 237,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                                className: "h-3 w-full max-w-[280px] rounded"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                lineNumber: 241,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                                className: "h-3 w-24 rounded"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                lineNumber: 242,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                        lineNumber: 236,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                        className: "size-10 shrink-0 self-center rounded-lg"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                        lineNumber: 244,
                        columnNumber: 11
                    }, this)
                ]
            }, i, true, {
                fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                lineNumber: 232,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/shared/loading-skeletons.tsx",
        lineNumber: 230,
        columnNumber: 5
    }, this);
}
_c9 = RecentHistoryRowsSkeleton;
function PremiumPlannerSalaryContextSkeleton({ className, layout = "monthly" }) {
    const grid = layout === "emi" ? "mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start lg:gap-12" : "mt-10 grid gap-8 lg:grid-cols-[1fr_420px] lg:items-start lg:gap-8";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(grid, className),
        "aria-busy": true,
        "aria-label": "Loading salary context",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                        className: "h-3 w-28 rounded-md"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                        lineNumber: 277,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                        className: "h-4 w-full max-w-xl rounded-md"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                        lineNumber: 278,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                        className: "h-72 w-full rounded-2xl"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                        lineNumber: 279,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                        className: "h-52 w-full rounded-2xl"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                        lineNumber: 280,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                lineNumber: 276,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "space-y-5 lg:sticky lg:top-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                        className: "h-48 w-full rounded-2xl"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                        lineNumber: 283,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                        className: "h-56 w-full rounded-2xl"
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                        lineNumber: 284,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                lineNumber: 282,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shared/loading-skeletons.tsx",
        lineNumber: 271,
        columnNumber: 5
    }, this);
}
_c10 = PremiumPlannerSalaryContextSkeleton;
function WealthForecastBodySkeleton({ className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-10 grid gap-10 lg:grid-cols-2", className),
        "aria-busy": true,
        "aria-label": "Loading salary context",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                className: "h-80 w-full rounded-2xl"
            }, void 0, false, {
                fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                lineNumber: 298,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                className: "h-80 w-full rounded-2xl"
            }, void 0, false, {
                fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                lineNumber: 299,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shared/loading-skeletons.tsx",
        lineNumber: 293,
        columnNumber: 5
    }, this);
}
_c11 = WealthForecastBodySkeleton;
function WealthForecastPlannerSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-1 space-y-8",
        "aria-busy": true,
        "aria-label": "Loading salary context",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-8 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-xl space-y-2.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                                className: "h-9 w-52 rounded-lg"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                lineNumber: 314,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                                className: "h-4 w-full rounded-md"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                lineNumber: 315,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                                className: "h-4 w-[92%] rounded-md"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                lineNumber: 316,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                        lineNumber: 313,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex shrink-0 gap-2 lg:pt-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                                className: "h-10 w-14 rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                lineNumber: 319,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                                className: "h-10 w-14 rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                lineNumber: 320,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                                className: "h-10 w-14 rounded-full"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                lineNumber: 321,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                        lineNumber: 318,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                lineNumber: 312,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WealthForecastBodySkeleton, {
                className: "mt-0"
            }, void 0, false, {
                fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                lineNumber: 324,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/shared/loading-skeletons.tsx",
        lineNumber: 307,
        columnNumber: 5
    }, this);
}
_c12 = WealthForecastPlannerSkeleton;
function SalaryRecentsPanelsSkeleton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-12 grid gap-8 lg:grid-cols-2",
        children: [
            1,
            2
        ].map((col)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                                className: "size-4 rounded"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                lineNumber: 336,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                                className: "h-4 w-40 rounded"
                            }, void 0, false, {
                                fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                lineNumber: 337,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                        lineNumber: 335,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "space-y-2",
                        children: [
                            1,
                            2,
                            3
                        ].map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShimmerBlock, {
                                    className: "h-[4.5rem] w-full rounded-xl"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                    lineNumber: 342,
                                    columnNumber: 17
                                }, this)
                            }, row, false, {
                                fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                                lineNumber: 341,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                        lineNumber: 339,
                        columnNumber: 11
                    }, this)
                ]
            }, col, true, {
                fileName: "[project]/src/components/shared/loading-skeletons.tsx",
                lineNumber: 334,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/shared/loading-skeletons.tsx",
        lineNumber: 332,
        columnNumber: 5
    }, this);
}
_c13 = SalaryRecentsPanelsSkeleton;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11, _c12, _c13;
__turbopack_context__.k.register(_c, "ShimmerBlock");
__turbopack_context__.k.register(_c1, "AuthFormSkeleton");
__turbopack_context__.k.register(_c2, "NavbarAuthSkeleton");
__turbopack_context__.k.register(_c3, "NavbarSuspenseFallback");
__turbopack_context__.k.register(_c4, "ProfilePageSkeleton");
__turbopack_context__.k.register(_c5, "SalaryBreakdownSkeleton");
__turbopack_context__.k.register(_c6, "OfferComparisonSkeleton");
__turbopack_context__.k.register(_c7, "SalaryHistoryRowsSkeleton");
__turbopack_context__.k.register(_c8, "SalaryHistoryListSkeleton");
__turbopack_context__.k.register(_c9, "RecentHistoryRowsSkeleton");
__turbopack_context__.k.register(_c10, "PremiumPlannerSalaryContextSkeleton");
__turbopack_context__.k.register(_c11, "WealthForecastBodySkeleton");
__turbopack_context__.k.register(_c12, "WealthForecastPlannerSkeleton");
__turbopack_context__.k.register(_c13, "SalaryRecentsPanelsSkeleton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/recent-history-sheet.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RecentHistoryNavButton",
    ()=>RecentHistoryNavButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/history.js [app-client] (ecmascript) <export default as History>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/sheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$remove$2d$offer$2d$comparison$2d$entry$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/remove-offer-comparison-entry-dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$remove$2d$salary$2d$entry$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/remove-salary-entry-dialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$salary$2d$premium$2d$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/config/salary-premium-paths.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$tiered$2d$premium$2d$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/hooks/use-tiered-premium-links.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$recent$2d$activity$2d$entries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/hooks/use-recent-activity-entries.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$salary$2d$history$2d$delete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/hooks/use-salary-history-delete.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/use-auth-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$history$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/use-history-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$persistence$2d$gate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/persistence-gate.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$hooks$2f$use$2d$offer$2d$sessions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/hooks/use-offer-sessions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$offer$2d$comparison$2d$restore$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/use-offer-comparison-restore-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/use-salary-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$coerce$2d$salary$2d$snapshot$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/coerce-salary-snapshot.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/format-currency.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$relative$2d$time$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/format-relative-time.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$loading$2d$skeletons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/loading-skeletons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$app$2d$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/notify/app-notify.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function RecentHistoryNavButton() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setOpen(true),
                className: "p-2 text-navy-400 hover:text-navy-600 transition-colors rounded-lg hover:bg-navy-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2",
                "aria-label": "Recent activity",
                "aria-expanded": open,
                "aria-haspopup": "dialog",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$history$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__History$3e$__["History"], {
                    className: "size-5",
                    strokeWidth: 1.75
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/recent-history-sheet.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/recent-history-sheet.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RecentHistorySheet, {
                open: open,
                onOpenChange: setOpen
            }, void 0, false, {
                fileName: "[project]/src/components/layout/recent-history-sheet.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(RecentHistoryNavButton, "xG1TONbKtDWtdOTrXaTAsNhPg/Q=");
_c = RecentHistoryNavButton;
function RecentHistorySheet({ open, onOpenChange }) {
    _s1();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { toolHref } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$tiered$2d$premium$2d$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTieredPremiumLinks"])();
    const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])({
        "RecentHistorySheet.useAuthStore[user]": (s)=>s.user
    }["RecentHistorySheet.useAuthStore[user]"]);
    const cloud = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$persistence$2d$gate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldPersistSessions"])(user);
    const { entries, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$recent$2d$activity$2d$entries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecentActivityEntries"])(cloud);
    const removeOfferComparisonEntry = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$history$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHistoryStore"])({
        "RecentHistorySheet.useHistoryStore[removeOfferComparisonEntry]": (s)=>s.removeOfferComparisonEntry
    }["RecentHistorySheet.useHistoryStore[removeOfferComparisonEntry]"]);
    const deleteOfferSession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$hooks$2f$use$2d$offer$2d$sessions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeleteOfferSessionMutation"])();
    const setInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"])({
        "RecentHistorySheet.useSalaryStore[setInput]": (s)=>s.setInput
    }["RecentHistorySheet.useSalaryStore[setInput]"]);
    const calculateBreakdown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"])({
        "RecentHistorySheet.useSalaryStore[calculateBreakdown]": (s)=>s.calculateBreakdown
    }["RecentHistorySheet.useSalaryStore[calculateBreakdown]"]);
    const setActiveSalaryHistoryId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"])({
        "RecentHistorySheet.useSalaryStore[setActiveSalaryHistoryId]": (s)=>s.setActiveSalaryHistoryId
    }["RecentHistorySheet.useSalaryStore[setActiveSalaryHistoryId]"]);
    const queueOfferRestore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$offer$2d$comparison$2d$restore$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOfferComparisonRestoreStore"])({
        "RecentHistorySheet.useOfferComparisonRestoreStore[queueOfferRestore]": (s)=>s.queueRestore
    }["RecentHistorySheet.useOfferComparisonRestoreStore[queueOfferRestore]"]);
    const [pendingSalaryDelete, setPendingSalaryDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pendingOfferDelete, setPendingOfferDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const { applyRemove } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$salary$2d$history$2d$delete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryHistoryDelete"])();
    const handleSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RecentHistorySheet.useCallback[handleSelect]": (entry)=>{
            if (entry.kind === "salary") {
                setActiveSalaryHistoryId(entry.id);
                if (cloud) {
                    router.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$salary$2d$premium$2d$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["salaryPremiumBreakdownHref"])(entry.id));
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$app$2d$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appToast"].salarySession.opened();
                } else {
                    setInput((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$coerce$2d$salary$2d$snapshot$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coerceSalarySnapshot"])(entry.snapshot));
                    calculateBreakdown();
                    router.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$salary$2d$premium$2d$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["salaryPremiumBreakdownHref"])());
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$app$2d$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appToast"].salarySession.opened();
                }
            } else {
                if (entry.hydrateFromServer) {
                    router.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$salary$2d$premium$2d$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["salaryPremiumOfferComparisonHref"])(entry.id));
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$app$2d$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appToast"].offerComparison.opened();
                } else {
                    queueOfferRestore(entry.offersSnapshot);
                    router.push(toolHref("offers"));
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$app$2d$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appToast"].offerComparison.opened();
                }
            }
            onOpenChange(false);
        }
    }["RecentHistorySheet.useCallback[handleSelect]"], [
        calculateBreakdown,
        cloud,
        onOpenChange,
        queueOfferRestore,
        router,
        setActiveSalaryHistoryId,
        setInput,
        toolHref
    ]);
    const confirmSheetSalaryDelete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RecentHistorySheet.useCallback[confirmSheetSalaryDelete]": async ()=>{
            if (!pendingSalaryDelete) return;
            await applyRemove(pendingSalaryDelete);
        }
    }["RecentHistorySheet.useCallback[confirmSheetSalaryDelete]"], [
        pendingSalaryDelete,
        applyRemove
    ]);
    const confirmSheetOfferDelete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RecentHistorySheet.useCallback[confirmSheetOfferDelete]": async ()=>{
            if (!pendingOfferDelete) return;
            if (pendingOfferDelete.hydrateFromServer) {
                try {
                    await deleteOfferSession.mutateAsync(pendingOfferDelete.id);
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$app$2d$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appToast"].offerComparison.deleted();
                } catch  {
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$app$2d$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appToast"].errors.offerComparisonDeleteFailed();
                }
            } else {
                removeOfferComparisonEntry(pendingOfferDelete.id);
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$app$2d$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appToast"].persistence.removedFromDevice();
            }
        }
    }["RecentHistorySheet.useCallback[confirmSheetOfferDelete]"], [
        pendingOfferDelete,
        removeOfferComparisonEntry,
        deleteOfferSession
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sheet"], {
                open: open,
                onOpenChange: onOpenChange,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetContent"], {
                    side: "right",
                    className: "w-full sm:max-w-[420px] gap-0 border-l border-navy-200 p-0 flex flex-col bg-white",
                    showCloseButton: true,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetHeader"], {
                            className: "border-b border-navy-100 px-5 py-4 text-left space-y-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTitle"], {
                                    className: "text-h3 text-navy-800 font-semibold",
                                    children: "Recent activity"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/recent-history-sheet.tsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetDescription"], {
                                    className: "text-xs text-navy-500",
                                    children: [
                                        cloud ? "Your last five salary sessions and offer comparisons from your account." : "Your last five salary runs and offer comparisons on this device.",
                                        " ",
                                        "Remove saved salaries here or from the Salary menu—same list—or remove offer comparisons with the trash control."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/recent-history-sheet.tsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/recent-history-sheet.tsx",
                            lineNumber: 159,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto px-3 py-3",
                            children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$loading$2d$skeletons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RecentHistoryRowsSkeleton"], {
                                rows: 5
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/recent-history-sheet.tsx",
                                lineNumber: 174,
                                columnNumber: 15
                            }, this) : entries.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center justify-center text-center px-4 py-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex size-12 items-center justify-center rounded-2xl bg-navy-50 text-navy-300 mb-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                            className: "size-6"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/recent-history-sheet.tsx",
                                            lineNumber: 178,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/recent-history-sheet.tsx",
                                        lineNumber: 177,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold text-navy-800",
                                        children: "No recent activity yet"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/recent-history-sheet.tsx",
                                        lineNumber: 180,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 text-xs text-navy-500 max-w-[240px] leading-relaxed",
                                        children: "Run a salary breakdown or compare offers — your last five actions will show up here."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/recent-history-sheet.tsx",
                                        lineNumber: 183,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/recent-history-sheet.tsx",
                                lineNumber: 176,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-2",
                                children: entries.map((entry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HistoryRow, {
                                        entry: entry,
                                        onSelect: ()=>handleSelect(entry),
                                        onRequestDeleteSalary: entry.kind === "salary" ? ()=>setPendingSalaryDelete(entry) : undefined,
                                        onRequestDeleteOffer: entry.kind === "offer_comparison" ? ()=>setPendingOfferDelete(entry) : undefined
                                    }, entry.id, false, {
                                        fileName: "[project]/src/components/layout/recent-history-sheet.tsx",
                                        lineNumber: 191,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/recent-history-sheet.tsx",
                                lineNumber: 189,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/recent-history-sheet.tsx",
                            lineNumber: 172,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/recent-history-sheet.tsx",
                    lineNumber: 154,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/layout/recent-history-sheet.tsx",
                lineNumber: 153,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$remove$2d$salary$2d$entry$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemoveSalaryEntryDialog"], {
                entry: pendingSalaryDelete,
                open: pendingSalaryDelete != null,
                onOpenChange: (next)=>{
                    if (!next) setPendingSalaryDelete(null);
                },
                onConfirm: confirmSheetSalaryDelete,
                variant: "sheet"
            }, void 0, false, {
                fileName: "[project]/src/components/layout/recent-history-sheet.tsx",
                lineNumber: 213,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$remove$2d$offer$2d$comparison$2d$entry$2d$dialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RemoveOfferComparisonEntryDialog"], {
                entry: pendingOfferDelete,
                open: pendingOfferDelete != null,
                onOpenChange: (next)=>{
                    if (!next) setPendingOfferDelete(null);
                },
                onConfirm: confirmSheetOfferDelete
            }, void 0, false, {
                fileName: "[project]/src/components/layout/recent-history-sheet.tsx",
                lineNumber: 223,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s1(RecentHistorySheet, "2f9sa5MlJurp8aVitJWMb61Ve9c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$tiered$2d$premium$2d$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTieredPremiumLinks"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$recent$2d$activity$2d$entries$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRecentActivityEntries"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$history$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHistoryStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$hooks$2f$use$2d$offer$2d$sessions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDeleteOfferSessionMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$offer$2d$comparison$2d$restore$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOfferComparisonRestoreStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$salary$2d$history$2d$delete$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryHistoryDelete"]
    ];
});
_c1 = RecentHistorySheet;
function HistoryRow({ entry, onSelect, onRequestDeleteSalary, onRequestDeleteOffer }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-stretch gap-1 rounded-xl border border-transparent pr-1 transition-colors", "hover:bg-teal-50/60 hover:border-teal-100"),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: onSelect,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("min-w-0 flex-1 text-left rounded-xl px-3 py-3", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-1"),
                    children: entry.kind === "salary" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-semibold text-navy-800 line-clamp-1",
                                        children: entry.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/recent-history-sheet.tsx",
                                        lineNumber: 265,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-medium uppercase tracking-wide text-navy-400 shrink-0 tabular-nums",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$relative$2d$time$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRelativeTime"])(entry.at)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/recent-history-sheet.tsx",
                                        lineNumber: 268,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/recent-history-sheet.tsx",
                                lineNumber: 264,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-xs text-navy-500",
                                children: [
                                    "CTC ",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(entry.annualCTC),
                                    " · In-hand",
                                    " ",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(entry.monthlyInHand),
                                    "/mo · ",
                                    entry.regimeLabel
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/recent-history-sheet.tsx",
                                lineNumber: 272,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-2 inline-flex items-center gap-1 text-xs font-semibold text-teal-600",
                                children: [
                                    "Open breakdown",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "size-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/recent-history-sheet.tsx",
                                        lineNumber: 278,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/recent-history-sheet.tsx",
                                lineNumber: 276,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-semibold text-navy-800 flex items-center gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                                className: "size-3.5 text-teal-600 shrink-0"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/recent-history-sheet.tsx",
                                                lineNumber: 285,
                                                columnNumber: 19
                                            }, this),
                                            entry.title
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/recent-history-sheet.tsx",
                                        lineNumber: 284,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] font-medium uppercase tracking-wide text-navy-400 shrink-0",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$relative$2d$time$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRelativeTime"])(entry.at)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/recent-history-sheet.tsx",
                                        lineNumber: 288,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/recent-history-sheet.tsx",
                                lineNumber: 283,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-xs text-navy-500",
                                children: [
                                    entry.offerCount,
                                    " offers · ",
                                    entry.winnerSummary
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/recent-history-sheet.tsx",
                                lineNumber: 292,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-2 inline-flex items-center gap-1 text-xs font-semibold text-teal-600",
                                children: [
                                    "Resume comparison",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "size-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/layout/recent-history-sheet.tsx",
                                        lineNumber: 297,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/layout/recent-history-sheet.tsx",
                                lineNumber: 295,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/recent-history-sheet.tsx",
                    lineNumber: 254,
                    columnNumber: 9
                }, this),
                entry.kind === "salary" && onRequestDeleteSalary ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    "aria-label": `Remove saved salary ${entry.title}`,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("shrink-0 self-center rounded-lg p-2.5 text-navy-400 transition-colors", "hover:bg-danger-50 hover:text-danger-600", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"),
                    onClick: (e)=>{
                        e.preventDefault();
                        e.stopPropagation();
                        onRequestDeleteSalary();
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                        className: "size-4",
                        strokeWidth: 2,
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/recent-history-sheet.tsx",
                        lineNumber: 317,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/recent-history-sheet.tsx",
                    lineNumber: 303,
                    columnNumber: 11
                }, this) : null,
                entry.kind === "offer_comparison" && onRequestDeleteOffer ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    "aria-label": `Remove offer comparison ${entry.title}`,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("shrink-0 self-center rounded-lg p-2.5 text-navy-400 transition-colors", "hover:bg-danger-50 hover:text-danger-600", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"),
                    onClick: (e)=>{
                        e.preventDefault();
                        e.stopPropagation();
                        onRequestDeleteOffer();
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                        className: "size-4",
                        strokeWidth: 2,
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/layout/recent-history-sheet.tsx",
                        lineNumber: 335,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/recent-history-sheet.tsx",
                    lineNumber: 321,
                    columnNumber: 11
                }, this) : null
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/recent-history-sheet.tsx",
            lineNumber: 248,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/recent-history-sheet.tsx",
        lineNumber: 247,
        columnNumber: 5
    }, this);
}
_c2 = HistoryRow;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "RecentHistoryNavButton");
__turbopack_context__.k.register(_c1, "RecentHistorySheet");
__turbopack_context__.k.register(_c2, "HistoryRow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/inhand-logo-mark.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INHAND_MARK_SRC",
    ()=>INHAND_MARK_SRC,
    "InhandLogoMark",
    ()=>InhandLogoMark
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
const INHAND_MARK_SRC = "/brand/inhand-logo.svg";
const VIEWBOX_W = 50;
const VIEWBOX_H = 52;
function InhandLogoMark({ className, height = 36, ...imgProps }) {
    const width = Math.round(height * VIEWBOX_W / VIEWBOX_H);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: INHAND_MARK_SRC,
        alt: "",
        width: width,
        height: height,
        decoding: "async",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("shrink-0 select-none", className),
        ...imgProps
    }, void 0, false, {
        fileName: "[project]/src/components/layout/inhand-logo-mark.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c = InhandLogoMark;
var _c;
__turbopack_context__.k.register(_c, "InhandLogoMark");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/crown.js [app-client] (ecmascript) <export default as Crown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$salary$2d$nav$2d$item$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/salary-nav-item.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$recent$2d$history$2d$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/recent-history-sheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/use-auth-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$tiered$2d$premium$2d$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/hooks/use-tiered-premium-links.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$inhand$2d$logo$2d$mark$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/inhand-logo-mark.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$loading$2d$skeletons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/loading-skeletons.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$salary$2d$premium$2d$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/config/salary-premium-paths.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
function navOfferComparisonActive(pathname, paywallTool, premiumUnlocked) {
    const href = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$salary$2d$premium$2d$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SALARY_PREMIUM_OFFER_COMPARISON"];
    const onRoute = pathname === href || pathname.startsWith(`${href}/`);
    if (premiumUnlocked) return onRoute;
    /** Plain `/paywall` (e.g. hub or global pricing modal route) must not imply “offers”. */ return pathname === "/paywall" && paywallTool === "offers";
}
function NavbarInner() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const paywallTool = searchParams.get("tool");
    const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])({
        "NavbarInner.useAuthStore[user]": (s)=>s.user
    }["NavbarInner.useAuthStore[user]"]);
    const authReady = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])({
        "NavbarInner.useAuthStore[authReady]": (s)=>s.authReady
    }["NavbarInner.useAuthStore[authReady]"]);
    const { premium, toolHref } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$tiered$2d$premium$2d$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTieredPremiumLinks"])();
    const onAuthPath = pathname === "/login" || pathname === "/signup" || pathname === "/forgot-password";
    const showProductChrome = !onAuthPath;
    const showPremiumHeader = authReady && Boolean(user) && premium;
    const showHistory = showProductChrome && showPremiumHeader;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50 w-full border-b border-navy-200/70 bg-white/95 shadow-[0_1px_0_rgba(15,23,42,0.04)] backdrop-blur-sm supports-[backdrop-filter]:bg-white/90",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto flex h-[3.75rem] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    "aria-label": "InHand home",
                    className: "flex items-center gap-2.5 shrink-0 rounded-md outline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-600",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$inhand$2d$logo$2d$mark$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InhandLogoMark"], {
                            height: 34,
                            className: "h-[34px] w-auto",
                            "aria-hidden": true
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/navbar.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex min-w-0 flex-col leading-tight",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-display text-lg font-bold tracking-tight text-navy-900 sm:text-xl",
                                    children: "InHand"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/navbar.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden text-[9px] font-semibold uppercase tracking-[0.16em] text-navy-500 sm:block",
                                    children: "Know your real take-home"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/navbar.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/navbar.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/navbar.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "hidden min-w-0 flex-1 justify-center md:flex",
                    "aria-label": "Primary",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-7 lg:gap-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$salary$2d$nav$2d$item$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SalaryNavItem"], {}, void 0, false, {
                                fileName: "[project]/src/components/layout/navbar.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this),
                            showProductChrome && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: toolHref("offers"),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm font-medium transition-colors duration-150", "rounded px-0.5 -mx-0.5", "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2", navOfferComparisonActive(pathname, paywallTool, premium) ? "text-navy-800 underline decoration-2 underline-offset-[18px] decoration-teal-600" : "text-navy-500 hover:text-navy-800"),
                                children: "Offer comparison"
                            }, void 0, false, {
                                fileName: "[project]/src/components/layout/navbar.tsx",
                                lineNumber: 75,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/layout/navbar.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/layout/navbar.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex min-w-0 shrink-0 items-center gap-2 sm:gap-2.5 md:gap-3",
                    children: [
                        showPremiumHeader && showProductChrome && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex max-w-full items-center gap-1 rounded-full border border-teal-200/70", "bg-gradient-to-b from-teal-50/95 to-teal-50/50 px-2 py-0.5", "text-[11px] font-medium leading-none tracking-tight text-teal-900/85", "ring-1 ring-teal-100/80 select-none", "pointer-events-none"),
                                    "aria-label": "Premium plan",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__["Crown"], {
                                            className: "size-3 shrink-0 text-teal-600/90",
                                            strokeWidth: 2,
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/navbar.tsx",
                                            lineNumber: 106,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Premium"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/navbar.tsx",
                                            lineNumber: 111,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/navbar.tsx",
                                    lineNumber: 96,
                                    columnNumber: 15
                                }, this),
                                showHistory ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden h-5 w-px shrink-0 bg-navy-200/80 sm:block",
                                    "aria-hidden": true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/navbar.tsx",
                                    lineNumber: 114,
                                    columnNumber: 17
                                }, this) : null
                            ]
                        }, void 0, true),
                        showHistory ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$recent$2d$history$2d$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RecentHistoryNavButton"], {}, void 0, false, {
                            fileName: "[project]/src/components/layout/navbar.tsx",
                            lineNumber: 121,
                            columnNumber: 26
                        }, this) : null,
                        authReady ? user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/profile",
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"])({
                                variant: "outline",
                                size: "sm"
                            }), "rounded-full border-navy-200/90 gap-1.5 px-3 text-xs font-semibold text-navy-700", "transition-[color,background-color,border-color,box-shadow] duration-150", "hover:border-navy-300/90 hover:bg-navy-50/50"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                    className: "size-4 shrink-0"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/navbar.tsx",
                                    lineNumber: 133,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "max-w-[100px] truncate hidden sm:inline",
                                    children: user.displayName.split(" ")[0] || "Profile"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/navbar.tsx",
                                    lineNumber: 134,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sm:hidden",
                                    children: "Profile"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/navbar.tsx",
                                    lineNumber: 137,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/navbar.tsx",
                            lineNumber: 124,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/login",
                                    className: "rounded-md px-2 text-xs font-semibold text-navy-600 transition-colors duration-150 hover:text-navy-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2",
                                    children: "Log in"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/navbar.tsx",
                                    lineNumber: 141,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/signup",
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"])({
                                        variant: "default",
                                        size: "sm"
                                    }), "rounded-full bg-teal-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-teal-700"),
                                    children: "Sign up"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/navbar.tsx",
                                    lineNumber: 147,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/navbar.tsx",
                            lineNumber: 140,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$loading$2d$skeletons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavbarAuthSkeleton"], {}, void 0, false, {
                            fileName: "[project]/src/components/layout/navbar.tsx",
                            lineNumber: 159,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/navbar.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/navbar.tsx",
            lineNumber: 48,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/navbar.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_s(NavbarInner, "J6nRcJCpLKwoviD0sZqhDXRtHSY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$tiered$2d$premium$2d$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTieredPremiumLinks"]
    ];
});
_c = NavbarInner;
function Navbar() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$loading$2d$skeletons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NavbarSuspenseFallback"], {}, void 0, false, {
            fileName: "[project]/src/components/layout/navbar.tsx",
            lineNumber: 169,
            columnNumber: 25
        }, this),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavbarInner, {}, void 0, false, {
            fileName: "[project]/src/components/layout/navbar.tsx",
            lineNumber: 170,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/navbar.tsx",
        lineNumber: 169,
        columnNumber: 5
    }, this);
}
_c1 = Navbar;
var _c, _c1;
__turbopack_context__.k.register(_c, "NavbarInner");
__turbopack_context__.k.register(_c1, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/layout/footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/receipt.js [app-client] (ecmascript) <export default as Receipt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/scale.js [app-client] (ecmascript) <export default as Scale>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$inhand$2d$logo$2d$mark$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/inhand-logo-mark.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$tiered$2d$premium$2d$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/hooks/use-tiered-premium-links.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const legalLinks = [
    {
        href: "#",
        label: "Privacy"
    },
    {
        href: "#",
        label: "Terms"
    },
    {
        href: "#",
        label: "Security"
    }
];
function Footer() {
    _s();
    const { toolHref } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$tiered$2d$premium$2d$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTieredPremiumLinks"])();
    const productLinks = [
        {
            href: "/salary",
            label: "Calculator"
        },
        {
            href: "/#pricing",
            label: "Pricing"
        },
        {
            href: toolHref("forecast"),
            label: "Forecast"
        },
        {
            href: toolHref("offers"),
            label: "Compare"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "border-t border-navy-200/60 bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl px-6 py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row justify-between gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$inhand$2d$logo$2d$mark$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InhandLogoMark"], {
                                            height: 32,
                                            className: "h-8 w-auto",
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/footer.tsx",
                                            lineNumber: 32,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col leading-tight",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-display text-lg font-bold tracking-tight text-navy-900",
                                                    children: "InHand"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                    lineNumber: 34,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[9px] font-semibold uppercase tracking-[0.14em] text-navy-500",
                                                    children: "Know your real take-home"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                    lineNumber: 37,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/layout/footer.tsx",
                                            lineNumber: 33,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/footer.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-sm text-navy-500 leading-relaxed",
                                    children: "Salary intelligence for Indian employees—in-hand clarity, breakups, tax context, and decisions without the fluff."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/footer.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/footer.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-16",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-label text-navy-400 mb-3",
                                            children: "Product"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/footer.tsx",
                                            lineNumber: 51,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2",
                                            children: productLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: link.href,
                                                        className: "text-sm text-navy-500 hover:text-navy-800 transition-colors",
                                                        children: link.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/footer.tsx",
                                                        lineNumber: 55,
                                                        columnNumber: 21
                                                    }, this)
                                                }, link.label, false, {
                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                    lineNumber: 54,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/footer.tsx",
                                            lineNumber: 52,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/footer.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-label text-navy-400 mb-3",
                                            children: "Legal"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/footer.tsx",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-2",
                                            children: legalLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: link.href,
                                                        className: "text-sm text-navy-500 hover:text-navy-800 transition-colors",
                                                        children: link.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/layout/footer.tsx",
                                                        lineNumber: 70,
                                                        columnNumber: 21
                                                    }, this)
                                                }, link.label, false, {
                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/footer.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/footer.tsx",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/footer.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/footer.tsx",
                    lineNumber: 28,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-12 border-t border-navy-200/60 pt-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[10px] font-bold uppercase tracking-[0.16em] text-teal-700",
                            children: "Why InHand"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/footer.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mt-2 font-display text-xl font-bold tracking-tight text-navy-900 sm:text-2xl",
                            children: "Real take-home clarity—not a generic CTC guess"
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/footer.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 max-w-2xl text-sm leading-relaxed text-navy-600",
                            children: "Every figure below matches what the app actually helps you do: line-level salary math, regime choice, and privacy without bank linking."
                        }, void 0, false, {
                            fileName: "[project]/src/components/layout/footer.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-full rounded-2xl border border-navy-200/50 bg-gradient-to-b from-white to-teal-50/25 p-5 shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mb-4 inline-flex rounded-lg p-2.5 ring-1 ring-inset", "bg-teal-100/85 text-teal-700 ring-teal-200/60"),
                                                "aria-hidden": true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"], {
                                                    className: "size-5",
                                                    strokeWidth: 2
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                    lineNumber: 105,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/footer.tsx",
                                                lineNumber: 98,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-base font-bold leading-snug text-navy-900",
                                                children: "Full pay breakup"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/footer.tsx",
                                                lineNumber: 107,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-sm leading-relaxed text-navy-600",
                                                children: "PF, deductions, professional tax, and income-tax estimates on your CTC—so you see estimated monthly in-hand, not just the package headline."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/footer.tsx",
                                                lineNumber: 110,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/footer.tsx",
                                        lineNumber: 97,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/footer.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-full rounded-2xl border border-navy-200/50 bg-gradient-to-b from-white to-teal-50/20 p-5 shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mb-4 inline-flex rounded-lg p-2.5 ring-1 ring-inset", "bg-teal-100/85 text-teal-700 ring-teal-200/60"),
                                                "aria-hidden": true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$scale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Scale$3e$__["Scale"], {
                                                    className: "size-5",
                                                    strokeWidth: 2
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/footer.tsx",
                                                lineNumber: 119,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-base font-bold leading-snug text-navy-900",
                                                children: "Old vs new regime"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/footer.tsx",
                                                lineNumber: 128,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-sm leading-relaxed text-navy-600",
                                                children: "Model Old and New tax treatment in the same flow. Handy for comparing which structure you’re using—not a full ITR filing wizard."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/footer.tsx",
                                                lineNumber: 131,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/footer.tsx",
                                        lineNumber: 118,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/footer.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-full rounded-2xl border border-navy-200/50 bg-gradient-to-b from-white to-navy-50/40 p-5 shadow-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mb-4 inline-flex rounded-lg p-2.5 ring-1 ring-inset", "bg-navy-100/80 text-navy-600 ring-navy-200/55"),
                                                "aria-hidden": true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                    className: "size-5",
                                                    strokeWidth: 2
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/layout/footer.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/footer.tsx",
                                                lineNumber: 140,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-base font-bold leading-snug text-navy-900",
                                                children: "Private by design"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/footer.tsx",
                                                lineNumber: 149,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-2 text-sm leading-relaxed text-navy-600",
                                                children: "Enter CTC and assumptions yourself—no bank linking or payroll import. On premium, you can keep a saved list on this device to jump between scenarios without retyping everything."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/layout/footer.tsx",
                                                lineNumber: 152,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/layout/footer.tsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/layout/footer.tsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/footer.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/footer.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-10 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-navy-200/60 pt-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-6 text-xs text-navy-400",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                            className: "size-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/footer.tsx",
                                            lineNumber: 166,
                                            columnNumber: 15
                                        }, this),
                                        " 256-BIT SSL"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/footer.tsx",
                                    lineNumber: 165,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                            className: "size-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/footer.tsx",
                                            lineNumber: 169,
                                            columnNumber: 15
                                        }, this),
                                        " ISO CERTIFIED"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/footer.tsx",
                                    lineNumber: 168,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "flex items-center gap-1.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                            className: "size-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/layout/footer.tsx",
                                            lineNumber: 172,
                                            columnNumber: 15
                                        }, this),
                                        " GDPR COMPLIANT"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/layout/footer.tsx",
                                    lineNumber: 171,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/footer.tsx",
                            lineNumber: 164,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-navy-400",
                            children: [
                                "© ",
                                new Date().getFullYear(),
                                " InHand. All rights reserved."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/layout/footer.tsx",
                            lineNumber: 175,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/layout/footer.tsx",
                    lineNumber: 163,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layout/footer.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layout/footer.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
_s(Footer, "0l6HNCqb593r/bUBytLYq367v4U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$tiered$2d$premium$2d$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTieredPremiumLinks"]
    ];
});
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0q4oiox._.js.map
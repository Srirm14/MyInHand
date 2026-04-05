(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/shared/segmented-selector.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SegmentedSelector",
    ()=>SegmentedSelector
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
function SegmentedSelector({ options, value, onChange, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex gap-3", className),
        children: options.map((option)=>{
            const isSelected = option.value === value;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>onChange(option.value),
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 px-6 py-3 text-sm font-medium transition-all min-w-[100px]", isSelected ? "border-teal-600 bg-teal-100 text-teal-900 shadow-sm" : "border-navy-200 bg-white text-navy-600 hover:border-navy-300 hover:bg-navy-50"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(isSelected ? "font-semibold" : "font-medium"),
                        children: option.label
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/segmented-selector.tsx",
                        lineNumber: 40,
                        columnNumber: 13
                    }, this),
                    option.sublabel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-xs mt-0.5", isSelected ? "text-teal-800" : "text-navy-400"),
                        children: option.sublabel
                    }, void 0, false, {
                        fileName: "[project]/src/components/shared/segmented-selector.tsx",
                        lineNumber: 44,
                        columnNumber: 15
                    }, this)
                ]
            }, option.value, true, {
                fileName: "[project]/src/components/shared/segmented-selector.tsx",
                lineNumber: 29,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/shared/segmented-selector.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c = SegmentedSelector;
var _c;
__turbopack_context__.k.register(_c, "SegmentedSelector");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/features/salary/salary-recents-panels.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SalaryRecentsPanels",
    ()=>SalaryRecentsPanels
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileStack$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-stack.js [app-client] (ecmascript) <export default as FileStack>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$offer$2d$comparison$2d$restore$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/use-offer-comparison-restore-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/use-salary-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$history$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/use-history-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/use-auth-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$salary$2d$premium$2d$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/config/salary-premium-paths.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$tiered$2d$premium$2d$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/hooks/use-tiered-premium-links.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$hooks$2f$use$2d$offer$2d$sessions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/hooks/use-offer-sessions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$hooks$2f$use$2d$salary$2d$sessions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/hooks/use-salary-sessions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$persistence$2d$gate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/persistence-gate.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$coerce$2d$salary$2d$snapshot$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/coerce-salary-snapshot.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/format-currency.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$relative$2d$time$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/format-relative-time.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$app$2d$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/notify/app-notify.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$loading$2d$skeletons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/loading-skeletons.tsx [app-client] (ecmascript)");
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
;
;
;
;
;
const MAX_ROWS = 3;
function SalaryRecentsPanels() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])({
        "SalaryRecentsPanels.useAuthStore[user]": (s)=>s.user
    }["SalaryRecentsPanels.useAuthStore[user]"]);
    const cloud = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$persistence$2d$gate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldPersistSessions"])(user);
    const localEntries = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$history$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHistoryStore"])({
        "SalaryRecentsPanels.useHistoryStore[localEntries]": (s)=>s.entries
    }["SalaryRecentsPanels.useHistoryStore[localEntries]"]);
    const salaryListQ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$hooks$2f$use$2d$salary$2d$sessions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalarySessionsListQuery"])(cloud);
    const offerListQ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$hooks$2f$use$2d$offer$2d$sessions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOfferSessionsListQuery"])(cloud);
    const { data: cloudSalaries = [] } = salaryListQ;
    const { data: cloudOffers = [] } = offerListQ;
    const cloudRecentsLoading = cloud && (salaryListQ.isPending || offerListQ.isPending);
    const setInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"])({
        "SalaryRecentsPanels.useSalaryStore[setInput]": (s)=>s.setInput
    }["SalaryRecentsPanels.useSalaryStore[setInput]"]);
    const calculateBreakdown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"])({
        "SalaryRecentsPanels.useSalaryStore[calculateBreakdown]": (s)=>s.calculateBreakdown
    }["SalaryRecentsPanels.useSalaryStore[calculateBreakdown]"]);
    const setActiveSalaryHistoryId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"])({
        "SalaryRecentsPanels.useSalaryStore[setActiveSalaryHistoryId]": (s)=>s.setActiveSalaryHistoryId
    }["SalaryRecentsPanels.useSalaryStore[setActiveSalaryHistoryId]"]);
    const queueRestore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$offer$2d$comparison$2d$restore$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOfferComparisonRestoreStore"])({
        "SalaryRecentsPanels.useOfferComparisonRestoreStore[queueRestore]": (s)=>s.queueRestore
    }["SalaryRecentsPanels.useOfferComparisonRestoreStore[queueRestore]"]);
    const { toolHref } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$tiered$2d$premium$2d$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTieredPremiumLinks"])();
    const salaryRows = (cloud ? cloudSalaries : localEntries.filter((e)=>e.kind === "salary")).slice(0, MAX_ROWS);
    const offerRows = (cloud ? cloudOffers : localEntries.filter((e)=>e.kind === "offer_comparison")).slice(0, MAX_ROWS);
    if (cloudRecentsLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$loading$2d$skeletons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SalaryRecentsPanelsSkeleton"], {}, void 0, false, {
            fileName: "[project]/src/components/features/salary/salary-recents-panels.tsx",
            lineNumber: 64,
            columnNumber: 12
        }, this);
    }
    if (salaryRows.length === 0 && offerRows.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-12 rounded-2xl border border-dashed border-navy-200/80 bg-navy-50/30 px-6 py-10 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm font-medium text-navy-700",
                    children: "No tracked salaries or offer comparisons yet"
                }, void 0, false, {
                    fileName: "[project]/src/components/features/salary/salary-recents-panels.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 text-xs text-navy-500 max-w-md mx-auto leading-relaxed",
                    children: "Run a breakdown or compare offers — your last few runs will appear here for quick access."
                }, void 0, false, {
                    fileName: "[project]/src/components/features/salary/salary-recents-panels.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/salary/salary-recents-panels.tsx",
            lineNumber: 69,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-12 grid gap-8 lg:grid-cols-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$stack$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileStack$3e$__["FileStack"], {
                                className: "size-4 text-teal-600"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/salary/salary-recents-panels.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-sm font-semibold text-navy-800",
                                children: "Last tracked salaries"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/salary/salary-recents-panels.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/salary/salary-recents-panels.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    salaryRows.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-navy-500 py-4",
                        children: "Complete a salary run to see it listed here."
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/salary/salary-recents-panels.tsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "space-y-2",
                        children: salaryRows.map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        setActiveSalaryHistoryId(e.id);
                                        if (cloud) {
                                            router.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$salary$2d$premium$2d$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["salaryPremiumBreakdownHref"])(e.id));
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$app$2d$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appToast"].salarySession.opened();
                                            return;
                                        }
                                        setInput((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$coerce$2d$salary$2d$snapshot$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["coerceSalarySnapshot"])({
                                            ...e.snapshot,
                                            resultSource: e.snapshot.resultSource,
                                            documentFileName: e.snapshot.documentFileName
                                        }));
                                        calculateBreakdown();
                                        router.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$salary$2d$premium$2d$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["salaryPremiumBreakdownHref"])());
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$app$2d$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appToast"].salarySession.opened();
                                    },
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full text-left rounded-xl border border-navy-200/60 bg-white px-4 py-3 shadow-sm", "hover:border-teal-200 hover:bg-teal-50/40 transition-colors"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-semibold text-navy-800 truncate",
                                                    children: e.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/salary/salary-recents-panels.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] uppercase tracking-wide text-navy-400 shrink-0",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$relative$2d$time$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRelativeTime"])(e.at)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/salary/salary-recents-panels.tsx",
                                                    lineNumber: 127,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/features/salary/salary-recents-panels.tsx",
                                            lineNumber: 123,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-xs text-navy-500",
                                            children: [
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(e.monthlyInHand),
                                                "/mo · ",
                                                e.regimeLabel,
                                                e.resultSource === "document_parsed" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-1.5 text-teal-700 font-medium",
                                                    children: "· Document"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/salary/salary-recents-panels.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-1.5 text-navy-400",
                                                    children: "· Estimated"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/salary/salary-recents-panels.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/features/salary/salary-recents-panels.tsx",
                                            lineNumber: 131,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mt-2 inline-flex items-center gap-1 text-xs font-semibold text-teal-600",
                                            children: [
                                                "Open breakdown",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    className: "size-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/salary/salary-recents-panels.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/features/salary/salary-recents-panels.tsx",
                                            lineNumber: 141,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/features/salary/salary-recents-panels.tsx",
                                    lineNumber: 98,
                                    columnNumber: 17
                                }, this)
                            }, e.id, false, {
                                fileName: "[project]/src/components/features/salary/salary-recents-panels.tsx",
                                lineNumber: 97,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/salary/salary-recents-panels.tsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/salary/salary-recents-panels.tsx",
                lineNumber: 83,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                className: "size-4 text-teal-600"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/salary/salary-recents-panels.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-sm font-semibold text-navy-800",
                                children: "Last compared offers"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/salary/salary-recents-panels.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/salary/salary-recents-panels.tsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    offerRows.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-navy-500 py-4",
                        children: "Compare two or three offers to see recent comparisons here."
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/salary/salary-recents-panels.tsx",
                        lineNumber: 160,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "space-y-2",
                        children: offerRows.map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        if (e.hydrateFromServer) {
                                            router.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$salary$2d$premium$2d$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["salaryPremiumOfferComparisonHref"])(e.id));
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$app$2d$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appToast"].offerComparison.opened();
                                        } else {
                                            queueRestore(e.offersSnapshot);
                                            router.push(toolHref("offers"));
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$app$2d$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appToast"].offerComparison.opened();
                                        }
                                    },
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full text-left rounded-xl border border-navy-200/60 bg-white px-4 py-3 shadow-sm", "hover:border-teal-200 hover:bg-teal-50/40 transition-colors"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-semibold text-navy-800",
                                                    children: e.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/salary/salary-recents-panels.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] uppercase tracking-wide text-navy-400 shrink-0",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$relative$2d$time$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatRelativeTime"])(e.at)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/salary/salary-recents-panels.tsx",
                                                    lineNumber: 190,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/features/salary/salary-recents-panels.tsx",
                                            lineNumber: 186,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 text-xs text-navy-500 line-clamp-2",
                                            children: e.winnerSummary
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/salary/salary-recents-panels.tsx",
                                            lineNumber: 194,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mt-2 inline-flex items-center gap-1 text-xs font-semibold text-teal-600",
                                            children: [
                                                "Resume comparison",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    className: "size-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/salary/salary-recents-panels.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/features/salary/salary-recents-panels.tsx",
                                            lineNumber: 197,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/features/salary/salary-recents-panels.tsx",
                                    lineNumber: 167,
                                    columnNumber: 17
                                }, this)
                            }, e.id, false, {
                                fileName: "[project]/src/components/features/salary/salary-recents-panels.tsx",
                                lineNumber: 166,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/salary/salary-recents-panels.tsx",
                        lineNumber: 164,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        variant: "ghost",
                        className: "mt-4 h-auto p-0 text-xs font-semibold text-teal-600 hover:text-teal-700 hover:bg-transparent",
                        onClick: ()=>router.push(toolHref("offers")),
                        children: "New offer comparison →"
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/salary/salary-recents-panels.tsx",
                        lineNumber: 206,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/salary/salary-recents-panels.tsx",
                lineNumber: 152,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/features/salary/salary-recents-panels.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
_s(SalaryRecentsPanels, "q6ApRrDJpckP5r8DOeuNzxmIMsg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$history$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHistoryStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$hooks$2f$use$2d$salary$2d$sessions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalarySessionsListQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$hooks$2f$use$2d$offer$2d$sessions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOfferSessionsListQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$offer$2d$comparison$2d$restore$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useOfferComparisonRestoreStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$tiered$2d$premium$2d$links$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTieredPremiumLinks"]
    ];
});
_c = SalaryRecentsPanels;
var _c;
__turbopack_context__.k.register(_c, "SalaryRecentsPanels");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/schemas/ctc-input.schema.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CTC_MIN_FOR_BREAKDOWN_ISSUE",
    ()=>CTC_MIN_FOR_BREAKDOWN_ISSUE,
    "MIN_ANNUAL_CTC_RUPEES",
    ()=>MIN_ANNUAL_CTC_RUPEES,
    "ctcInputSchema",
    ()=>ctcInputSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
;
const MIN_ANNUAL_CTC_RUPEES = 100_000;
const CTC_MIN_FOR_BREAKDOWN_ISSUE = "CTC_MIN_FOR_BREAKDOWN";
const ctcInputSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    annualCTC: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number({
        error: "Annual CTC is required"
    }).min(0, "Enter a valid amount").max(100_000_000, "CTC cannot exceed ₹10,00,00,000"),
    compensationMode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "total_only",
        "fixed_variable"
    ]),
    fixedAnnual: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0),
    variableAnnual: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].number().min(0),
    cityTier: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "tier1",
        "tier2",
        "tier3"
    ], {
        error: "Select a city tier"
    }),
    taxRegime: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "old",
        "new"
    ], {
        error: "Select a tax regime"
    })
}).superRefine((data, ctx)=>{
    if (data.annualCTC > 0 && data.annualCTC < MIN_ANNUAL_CTC_RUPEES) {
        ctx.addIssue({
            code: "custom",
            message: CTC_MIN_FOR_BREAKDOWN_ISSUE,
            path: [
                "annualCTC"
            ]
        });
    }
    if (data.compensationMode !== "fixed_variable") return;
    const sum = data.fixedAnnual + data.variableAnnual;
    if (Math.abs(sum - data.annualCTC) > 1) {
        ctx.addIssue({
            code: "custom",
            message: "Fixed + variable must equal total CTC. Adjust one field — the other updates automatically.",
            path: [
                "variableAnnual"
            ]
        });
    }
    if (data.fixedAnnual > data.annualCTC) {
        ctx.addIssue({
            code: "custom",
            message: "Fixed pay can’t exceed total CTC.",
            path: [
                "fixedAnnual"
            ]
        });
    }
    if (data.variableAnnual > data.annualCTC) {
        ctx.addIssue({
            code: "custom",
            message: "Variable pay can’t exceed total CTC.",
            path: [
                "variableAnnual"
            ]
        });
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils/compensation-split.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyFixedInSplit",
    ()=>applyFixedInSplit,
    "applyTotalInSplit",
    ()=>applyTotalInSplit,
    "applyVariableInSplit",
    ()=>applyVariableInSplit,
    "initialSplitFromTotal",
    ()=>initialSplitFromTotal,
    "isSplitBalanced",
    ()=>isSplitBalanced
]);
function applyTotalInSplit(total) {
    const t = Math.max(0, Math.floor(total));
    return {
        annualCTC: t,
        fixedAnnual: t,
        variableAnnual: 0,
        derived: "variable"
    };
}
function applyFixedInSplit(total, fixed) {
    const t = Math.max(0, Math.floor(total));
    const f = Math.min(Math.max(0, Math.floor(fixed)), t);
    return {
        annualCTC: t,
        fixedAnnual: f,
        variableAnnual: t - f,
        derived: "variable"
    };
}
function applyVariableInSplit(total, variable) {
    const t = Math.max(0, Math.floor(total));
    const v = Math.min(Math.max(0, Math.floor(variable)), t);
    return {
        annualCTC: t,
        fixedAnnual: t - v,
        variableAnnual: v,
        derived: "fixed"
    };
}
function initialSplitFromTotal(total) {
    const t = Math.max(0, Math.floor(total));
    return {
        fixedAnnual: t,
        variableAnnual: 0
    };
}
function isSplitBalanced(mode, total, fixed, variable) {
    if (mode === "total_only") return true;
    return Math.abs(fixed + variable - total) <= 1;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/features/salary/compensation-ctc-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompensationCtcSectionControlled",
    ()=>CompensationCtcSectionControlled,
    "CompensationCtcSectionForm",
    ()=>CompensationCtcSectionForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schemas$2f$ctc$2d$input$2e$schema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/schemas/ctc-input.schema.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$compensation$2d$split$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/compensation-split.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/format-currency.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function CompensationCtcSectionForm({ control, setValue, errors, annualCtcInputRef }) {
    _s();
    const mode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])({
        control,
        name: "compensationMode"
    });
    const annualCTC = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])({
        control,
        name: "annualCTC"
    }) ?? 0;
    const fixedAnnual = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])({
        control,
        name: "fixedAnnual"
    }) ?? 0;
    const variableAnnual = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"])({
        control,
        name: "variableAnnual"
    }) ?? 0;
    const [derived, setDerived] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("variable");
    const sync = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CompensationCtcSectionForm.useCallback[sync]": (patch)=>{
            Object.entries(patch).forEach({
                "CompensationCtcSectionForm.useCallback[sync]": ([key, val])=>{
                    setValue(key, val, {
                        shouldDirty: true,
                        shouldValidate: true
                    });
                }
            }["CompensationCtcSectionForm.useCallback[sync]"]);
        }
    }["CompensationCtcSectionForm.useCallback[sync]"], [
        setValue
    ]);
    const onModeChange = (next)=>{
        if (next === "fixed_variable") {
            const { fixedAnnual: f, variableAnnual: v } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$compensation$2d$split$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialSplitFromTotal"])(annualCTC);
            sync({
                compensationMode: next,
                fixedAnnual: f,
                variableAnnual: v
            });
            setDerived("variable");
        } else {
            sync({
                compensationMode: next,
                fixedAnnual: 0,
                variableAnnual: 0
            });
        }
    };
    const onTotalChange = (raw)=>{
        const n = Math.max(0, raw);
        if (mode === "total_only") {
            sync({
                annualCTC: n
            });
            return;
        }
        const out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$compensation$2d$split$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyTotalInSplit"])(n);
        sync({
            annualCTC: out.annualCTC,
            fixedAnnual: out.fixedAnnual,
            variableAnnual: out.variableAnnual
        });
        setDerived(out.derived);
    };
    const onFixedChange = (raw)=>{
        if (mode !== "fixed_variable") return;
        const out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$compensation$2d$split$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyFixedInSplit"])(annualCTC, raw);
        sync({
            annualCTC: out.annualCTC,
            fixedAnnual: out.fixedAnnual,
            variableAnnual: out.variableAnnual
        });
        setDerived(out.derived);
    };
    const onVariableChange = (raw)=>{
        if (mode !== "fixed_variable") return;
        const out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$compensation$2d$split$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyVariableInSplit"])(annualCTC, raw);
        sync({
            annualCTC: out.annualCTC,
            fixedAnnual: out.fixedAnnual,
            variableAnnual: out.variableAnnual
        });
        setDerived(out.derived);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CompensationCtcInputs, {
        mode: mode,
        annualCTC: annualCTC,
        fixedAnnual: fixedAnnual,
        variableAnnual: variableAnnual,
        derived: derived,
        onModeChange: onModeChange,
        onTotalChange: onTotalChange,
        onFixedChange: onFixedChange,
        onVariableChange: onVariableChange,
        errors: errors,
        compact: false,
        annualCtcInputRef: annualCtcInputRef
    }, void 0, false, {
        fileName: "[project]/src/components/features/salary/compensation-ctc-section.tsx",
        lineNumber: 122,
        columnNumber: 5
    }, this);
}
_s(CompensationCtcSectionForm, "5nHyWHAoZfGM0fWX7Hj9a56PaPg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatch"]
    ];
});
_c = CompensationCtcSectionForm;
function CompensationCtcSectionControlled({ offer, onPatch, compact = true }) {
    _s1();
    const { compensationMode: mode, annualCTC, fixedAnnual, variableAnnual } = offer;
    const [derived, setDerived] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("variable");
    const onModeChange = (next)=>{
        if (next === "fixed_variable") {
            const init = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$compensation$2d$split$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initialSplitFromTotal"])(annualCTC);
            onPatch({
                compensationMode: next,
                fixedAnnual: init.fixedAnnual,
                variableAnnual: init.variableAnnual
            });
            setDerived("variable");
        } else {
            onPatch({
                compensationMode: next,
                fixedAnnual: 0,
                variableAnnual: 0
            });
        }
    };
    const onTotalChange = (raw)=>{
        const n = Math.max(0, raw);
        if (mode === "total_only") {
            onPatch({
                annualCTC: n
            });
            return;
        }
        const out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$compensation$2d$split$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyTotalInSplit"])(n);
        onPatch({
            annualCTC: out.annualCTC,
            fixedAnnual: out.fixedAnnual,
            variableAnnual: out.variableAnnual
        });
        setDerived(out.derived);
    };
    const onFixedChange = (raw)=>{
        if (mode !== "fixed_variable") return;
        const out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$compensation$2d$split$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyFixedInSplit"])(annualCTC, raw);
        onPatch({
            annualCTC: out.annualCTC,
            fixedAnnual: out.fixedAnnual,
            variableAnnual: out.variableAnnual
        });
        setDerived(out.derived);
    };
    const onVariableChange = (raw)=>{
        if (mode !== "fixed_variable") return;
        const out = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$compensation$2d$split$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["applyVariableInSplit"])(annualCTC, raw);
        onPatch({
            annualCTC: out.annualCTC,
            fixedAnnual: out.fixedAnnual,
            variableAnnual: out.variableAnnual
        });
        setDerived(out.derived);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CompensationCtcInputs, {
        mode: mode,
        annualCTC: annualCTC,
        fixedAnnual: fixedAnnual,
        variableAnnual: variableAnnual,
        derived: derived,
        onModeChange: onModeChange,
        onTotalChange: onTotalChange,
        onFixedChange: onFixedChange,
        onVariableChange: onVariableChange,
        compact: compact
    }, void 0, false, {
        fileName: "[project]/src/components/features/salary/compensation-ctc-section.tsx",
        lineNumber: 209,
        columnNumber: 5
    }, this);
}
_s1(CompensationCtcSectionControlled, "GkzFVvdoBYZ+29e70drd+o3/Y9M=");
_c1 = CompensationCtcSectionControlled;
function CompensationCtcInputs({ mode, annualCTC, fixedAnnual, variableAnnual, derived, onModeChange, onTotalChange, onFixedChange, onVariableChange, errors, compact, annualCtcInputRef }) {
    _s2();
    const annualCtcMsg = errors?.annualCTC?.message;
    const totalErr = annualCtcMsg && annualCtcMsg !== __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schemas$2f$ctc$2d$input$2e$schema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CTC_MIN_FOR_BREAKDOWN_ISSUE"] ? annualCtcMsg : undefined;
    const showMinCtcBadge = annualCTC > 0 && annualCTC < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schemas$2f$ctc$2d$input$2e$schema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_ANNUAL_CTC_RUPEES"];
    const fixedErr = errors?.fixedAnnual?.message;
    const varErr = errors?.variableAnnual?.message;
    const [totalFocused, setTotalFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [totalDraft, setTotalDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const totalInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const setTotalInputNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CompensationCtcInputs.useCallback[setTotalInputNode]": (node)=>{
            totalInputRef.current = node;
            annualCtcInputRef?.(node);
        }
    }["CompensationCtcInputs.useCallback[setTotalInputNode]"], [
        annualCtcInputRef
    ]);
    const displayTotal = totalFocused ? totalDraft : annualCTC > 0 ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatIndianNumber"])(annualCTC) : "";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LabelRow, {
                                compact: compact,
                                htmlFor: "comp-total",
                                children: "Annual CTC"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/salary/compensation-ctc-section.tsx",
                                lineNumber: 283,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[11px] text-navy-400 mt-0.5 max-w-md leading-snug",
                                children: "Know your salary split? Use fixed + variable — totals stay in sync automatically."
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/salary/compensation-ctc-section.tsx",
                                lineNumber: 286,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/salary/compensation-ctc-section.tsx",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-flex rounded-lg border border-navy-200 bg-navy-50/50 p-0.5 shrink-0",
                        children: [
                            {
                                id: "total_only",
                                label: "Total only"
                            },
                            {
                                id: "fixed_variable",
                                label: "Fixed + variable"
                            }
                        ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>onModeChange(tab.id),
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("cursor-pointer rounded-md px-3 py-1.5 text-xs font-semibold transition-colors", mode === tab.id ? "border border-teal-600/30 bg-teal-100 text-teal-900 shadow-sm" : "text-navy-500 hover:bg-white/70 hover:text-navy-700"),
                                children: tab.label
                            }, tab.id, false, {
                                fileName: "[project]/src/components/features/salary/compensation-ctc-section.tsx",
                                lineNumber: 298,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/salary/compensation-ctc-section.tsx",
                        lineNumber: 291,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/salary/compensation-ctc-section.tsx",
                lineNumber: 281,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-stretch gap-3 rounded-xl border border-navy-200 bg-white px-4 py-3 focus-within:ring-2 focus-within:ring-teal-200 focus-within:border-teal-400", compact && "py-2.5"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center font-semibold text-navy-600", compact ? "text-lg" : "text-xl"),
                        children: "₹"
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/salary/compensation-ctc-section.tsx",
                        lineNumber: 321,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        ref: setTotalInputNode,
                        id: "comp-total",
                        type: "text",
                        inputMode: "numeric",
                        autoComplete: "off",
                        placeholder: "00,00,000",
                        "aria-label": "Annual CTC in rupees",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("min-w-0 flex-1 border-0 bg-transparent font-bold text-navy-800 outline-none placeholder:text-navy-300 placeholder:font-semibold", compact ? "text-xl" : "text-2xl md:text-3xl"),
                        value: displayTotal,
                        onFocus: ()=>{
                            setTotalFocused(true);
                            setTotalDraft(annualCTC > 0 ? String(annualCTC) : "");
                            requestAnimationFrame(()=>{
                                const el = totalInputRef.current;
                                if (el && document.activeElement === el) {
                                    const len = el.value.length;
                                    el.setSelectionRange(len, len);
                                }
                            });
                        },
                        onBlur: (e)=>{
                            setTotalFocused(false);
                            const raw = e.target.value.replace(/\D/g, "");
                            const n = Number.parseInt(raw || "0", 10);
                            onTotalChange(Number.isFinite(n) ? n : 0);
                        },
                        onChange: (e)=>{
                            const raw = e.target.value.replace(/\D/g, "");
                            if (totalFocused) {
                                setTotalDraft(raw);
                            }
                            onTotalChange(raw ? Number(raw) : 0);
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/salary/compensation-ctc-section.tsx",
                        lineNumber: 329,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center rounded-full bg-teal-50 px-3 text-[10px] font-semibold text-teal-700 uppercase tracking-wide",
                        children: "INR / Year"
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/salary/compensation-ctc-section.tsx",
                        lineNumber: 367,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/salary/compensation-ctc-section.tsx",
                lineNumber: 315,
                columnNumber: 7
            }, this),
            showMinCtcBadge ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1.5",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "inline-flex items-center rounded-full border border-navy-200/70 bg-navy-50/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-navy-500",
                    children: "From ₹1L / yr for breakdown"
                }, void 0, false, {
                    fileName: "[project]/src/components/features/salary/compensation-ctc-section.tsx",
                    lineNumber: 373,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/features/salary/compensation-ctc-section.tsx",
                lineNumber: 372,
                columnNumber: 9
            }, this) : null,
            totalErr ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-danger-500 mt-1",
                children: totalErr
            }, void 0, false, {
                fileName: "[project]/src/components/features/salary/compensation-ctc-section.tsx",
                lineNumber: 379,
                columnNumber: 9
            }, this) : null,
            mode === "fixed_variable" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-xl border border-navy-100 bg-navy-50/40 p-4 space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] font-medium text-navy-500 uppercase tracking-wide",
                        children: "Salary structure"
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/salary/compensation-ctc-section.tsx",
                        lineNumber: 384,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-3 sm:grid-cols-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SplitField, {
                                id: "comp-fixed",
                                label: "Fixed (annual)",
                                hint: derived === "fixed" ? "Auto" : "You edit",
                                muted: derived === "fixed",
                                value: fixedAnnual,
                                onChange: onFixedChange,
                                error: fixedErr,
                                compact: compact
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/salary/compensation-ctc-section.tsx",
                                lineNumber: 388,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SplitField, {
                                id: "comp-variable",
                                label: "Variable (annual)",
                                hint: derived === "variable" ? "Auto" : "You edit",
                                muted: derived === "variable",
                                value: variableAnnual,
                                onChange: onVariableChange,
                                error: varErr,
                                compact: compact
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/salary/compensation-ctc-section.tsx",
                                lineNumber: 398,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/salary/compensation-ctc-section.tsx",
                        lineNumber: 387,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] text-navy-400 tabular-nums",
                        children: [
                            "Fixed + variable =",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-navy-600",
                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatIndianNumber"])(fixedAnnual + variableAnnual)
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/salary/compensation-ctc-section.tsx",
                                lineNumber: 411,
                                columnNumber: 13
                            }, this),
                            annualCTC > 0 && Math.abs(fixedAnnual + variableAnnual - annualCTC) <= 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-emerald-600 font-medium ml-1",
                                children: "✓ matches total"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/salary/compensation-ctc-section.tsx",
                                lineNumber: 416,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/salary/compensation-ctc-section.tsx",
                        lineNumber: 409,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/salary/compensation-ctc-section.tsx",
                lineNumber: 383,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/features/salary/compensation-ctc-section.tsx",
        lineNumber: 280,
        columnNumber: 5
    }, this);
}
_s2(CompensationCtcInputs, "bF5cGDCUv7fAWPwZKuwadh57zHM=");
_c2 = CompensationCtcInputs;
function LabelRow({ htmlFor, children, compact }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        htmlFor: htmlFor,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-semibold text-navy-800", compact ? "text-sm" : "text-base"),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/features/salary/compensation-ctc-section.tsx",
        lineNumber: 437,
        columnNumber: 5
    }, this);
}
_c3 = LabelRow;
function SplitField({ id, label, hint, muted, value, onChange, error, compact, amountPlaceholder = "00,00,000" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-1.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: id,
                        className: "text-xs font-semibold text-navy-700",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/salary/compensation-ctc-section.tsx",
                        lineNumber: 473,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full", muted ? "bg-navy-100 text-navy-500" : "bg-teal-100 text-teal-800"),
                        children: hint
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/salary/compensation-ctc-section.tsx",
                        lineNumber: 476,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/salary/compensation-ctc-section.tsx",
                lineNumber: 472,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-stretch gap-2 rounded-lg border bg-white px-3 py-2", muted ? "border-navy-100 bg-navy-50/30" : "border-navy-200", "focus-within:ring-2 focus-within:ring-teal-200"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-medium text-navy-500",
                        children: "₹"
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/salary/compensation-ctc-section.tsx",
                        lineNumber: 494,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: id,
                        type: "text",
                        inputMode: "numeric",
                        autoComplete: "off",
                        placeholder: value > 0 ? undefined : amountPlaceholder,
                        "aria-label": label,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("min-w-0 flex-1 border-0 bg-transparent text-sm font-semibold tabular-nums outline-none placeholder:text-navy-300 placeholder:font-semibold", compact ? "text-sm" : "text-base"),
                        value: value ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatIndianNumber"])(value) : "",
                        onChange: (e)=>{
                            const raw = e.target.value.replace(/\D/g, "");
                            onChange(raw ? Number(raw) : 0);
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/salary/compensation-ctc-section.tsx",
                        lineNumber: 495,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/salary/compensation-ctc-section.tsx",
                lineNumber: 487,
                columnNumber: 9
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-danger-500",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/features/salary/compensation-ctc-section.tsx",
                lineNumber: 513,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/features/salary/compensation-ctc-section.tsx",
        lineNumber: 471,
        columnNumber: 5
    }, this);
}
_c4 = SplitField;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "CompensationCtcSectionForm");
__turbopack_context__.k.register(_c1, "CompensationCtcSectionControlled");
__turbopack_context__.k.register(_c2, "CompensationCtcInputs");
__turbopack_context__.k.register(_c3, "LabelRow");
__turbopack_context__.k.register(_c4, "SplitField");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/shared/tax-regime-toggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TaxRegimeToggle",
    ()=>TaxRegimeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
const OPTIONS = [
    {
        id: "old",
        label: "Old Regime"
    },
    {
        id: "new",
        label: "New Regime"
    }
];
function TaxRegimeToggle({ value, onChange, size = "default", className }) {
    const compact = size === "compact";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex rounded-xl border border-navy-200 bg-navy-100/40 p-1", className),
        role: "group",
        "aria-label": "Tax regime",
        children: OPTIONS.map((opt)=>{
            const active = value === opt.id;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>onChange(opt.id),
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("cursor-pointer rounded-lg font-semibold transition-all", compact ? "px-3 py-1.5 text-xs min-w-[5.5rem] sm:min-w-[6.25rem]" : "px-8 py-2.5 text-sm min-w-[120px]", active ? "border border-teal-600 bg-teal-100 text-teal-900 shadow-sm" : "text-navy-600 hover:bg-white/60 hover:text-navy-800"),
                children: opt.label
            }, opt.id, false, {
                fileName: "[project]/src/components/shared/tax-regime-toggle.tsx",
                lineNumber: 36,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/shared/tax-regime-toggle.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c = TaxRegimeToggle;
var _c;
__turbopack_context__.k.register(_c, "TaxRegimeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/dom/smooth-focus-input.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "smoothScrollInputIntoViewAndFocus",
    ()=>smoothScrollInputIntoViewAndFocus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scheduling$2f$defer$2d$execution$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/scheduling/defer-execution.ts [app-client] (ecmascript)");
;
function prefersReducedMotion() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
function smoothScrollInputIntoViewAndFocus(el) {
    if (!el || typeof el.focus !== "function") return ()=>{};
    let finished = false;
    const finish = ()=>{
        if (finished) return;
        finished = true;
        try {
            el.focus({
                preventScroll: true
            });
        } catch  {
            el.focus();
        }
    };
    const reduce = prefersReducedMotion();
    el.scrollIntoView({
        behavior: reduce ? "instant" : "smooth",
        block: "center",
        inline: "nearest"
    });
    if (reduce) {
        finish();
        return ()=>{};
    }
    let cancelFallback;
    function onScrollEnd() {
        cancelFallback?.();
        cancelFallback = undefined;
        window.removeEventListener("scrollend", onScrollEnd);
        finish();
    }
    cancelFallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scheduling$2f$defer$2d$execution$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deferExecution"])(600, ()=>{
        window.removeEventListener("scrollend", onScrollEnd);
        finish();
    });
    window.addEventListener("scrollend", onScrollEnd, {
        once: true
    });
    return ()=>{
        cancelFallback?.();
        cancelFallback = undefined;
        window.removeEventListener("scrollend", onScrollEnd);
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/motion/marketing-motion.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Framer Motion presets shared with the marketing landing and salary flows.
 * Keep easing, viewport, and variant shapes aligned for a consistent feel.
 */ __turbopack_context__.s([
    "EASE",
    ()=>EASE,
    "VIEWPORT",
    ()=>VIEWPORT,
    "fadeIn",
    ()=>fadeIn,
    "fadeUp",
    ()=>fadeUp,
    "staggerContainer",
    ()=>staggerContainer
]);
const EASE = [
    0.22,
    1,
    0.36,
    1
];
const VIEWPORT = {
    once: true,
    margin: "-64px"
};
const fadeUp = {
    hidden: {
        opacity: 0,
        y: 28
    },
    show: (i = 0)=>({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.55,
                delay: i * 0.07,
                ease: EASE
            }
        })
};
const fadeIn = {
    hidden: {
        opacity: 0
    },
    show: (i = 0)=>({
            opacity: 1,
            transition: {
                duration: 0.5,
                delay: i * 0.07,
                ease: EASE
            }
        })
};
const staggerContainer = (stagger = 0.08)=>({
        hidden: {},
        show: {
            transition: {
                staggerChildren: stagger
            }
        }
    });
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/features/salary/ctc-input-form.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CtcInputForm",
    ()=>CtcInputForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@hookform/resolvers/zod/dist/zod.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$page$2d$shell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/page-shell.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$segmented$2d$selector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/segmented-selector.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$salary$2f$salary$2d$recents$2d$panels$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/salary/salary-recents-panels.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/tooltip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$city$2d$tiers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants/city-tiers.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schemas$2f$ctc$2d$input$2e$schema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/schemas/ctc-input.schema.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$salary$2d$breakdown$2d$scroll$2d$restoration$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/hooks/use-salary-breakdown-scroll-restoration.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$salary$2d$premium$2d$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/config/salary-premium-paths.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$hooks$2f$use$2d$salary$2d$sessions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/hooks/use-salary-sessions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$persistence$2d$gate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase/persistence-gate.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/use-auth-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$lifestyle$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/use-lifestyle-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$history$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/use-history-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$app$2d$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/notify/app-notify.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/use-salary-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$salary$2f$compensation$2d$ctc$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/salary/compensation-ctc-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$tax$2d$regime$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/shared/tax-regime-toggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dom$2f$smooth$2d$focus$2d$input$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/dom/smooth-focus-input.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2f$marketing$2d$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/motion/marketing-motion.ts [app-client] (ecmascript)");
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
const tierOptions = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$city$2d$tiers$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CITY_TIERS"].map((t)=>({
        value: t.value,
        label: t.label,
        sublabel: t.sublabel
    }));
function CtcInputForm() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const fileRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const annualCtcInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const setAnnualCtcInputNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CtcInputForm.useCallback[setAnnualCtcInputNode]": (node)=>{
            annualCtcInputRef.current = node;
        }
    }["CtcInputForm.useCallback[setAnnualCtcInputNode]"], []);
    const premiumCtcFocusCleanupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const manualCtcFocusOnceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])({
        "CtcInputForm.useAuthStore[user]": (s)=>s.user
    }["CtcInputForm.useAuthStore[user]"]);
    const persist = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$persistence$2d$gate$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["shouldPersistSessions"])(user);
    const createSalarySession = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$hooks$2f$use$2d$salary$2d$sessions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateSalarySessionMutation"])();
    const { data: cloudSalaryList = [] } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$hooks$2f$use$2d$salary$2d$sessions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalarySessionsListQuery"])(persist);
    const input = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"])({
        "CtcInputForm.useSalaryStore[input]": (s)=>s.input
    }["CtcInputForm.useSalaryStore[input]"]);
    const setInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"])({
        "CtcInputForm.useSalaryStore[setInput]": (s)=>s.setInput
    }["CtcInputForm.useSalaryStore[setInput]"]);
    const calculateBreakdown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"])({
        "CtcInputForm.useSalaryStore[calculateBreakdown]": (s)=>s.calculateBreakdown
    }["CtcInputForm.useSalaryStore[calculateBreakdown]"]);
    const applyParsedSalaryDocument = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"])({
        "CtcInputForm.useSalaryStore[applyParsedSalaryDocument]": (s)=>s.applyParsedSalaryDocument
    }["CtcInputForm.useSalaryStore[applyParsedSalaryDocument]"]);
    const [entryMode, setEntryMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("manual");
    const [docParsing, setDocParsing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [docError, setDocError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CtcInputForm.useEffect": ()=>{
            if (entryMode !== "manual") {
                manualCtcFocusOnceRef.current = false;
            }
        }
    }["CtcInputForm.useEffect"], [
        entryMode
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CtcInputForm.useEffect": ()=>({
                "CtcInputForm.useEffect": ()=>{
                    premiumCtcFocusCleanupRef.current?.();
                    premiumCtcFocusCleanupRef.current = null;
                }
            })["CtcInputForm.useEffect"]
    }["CtcInputForm.useEffect"], []);
    const localSalaryCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$history$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHistoryStore"])({
        "CtcInputForm.useHistoryStore[localSalaryCount]": (s)=>s.salaryContexts.length
    }["CtcInputForm.useHistoryStore[localSalaryCount]"]);
    const salaryHistoryCount = persist ? cloudSalaryList.length : localSalaryCount;
    const historyLimitReached = salaryHistoryCount >= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$history$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SALARY_HISTORY_MAX_ENTRIES"];
    const form = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"])({
        resolver: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hookform$2f$resolvers$2f$zod$2f$dist$2f$zod$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["zodResolver"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schemas$2f$ctc$2d$input$2e$schema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ctcInputSchema"]),
        defaultValues: {
            annualCTC: Math.max(0, input.annualCTC),
            compensationMode: input.compensationMode ?? "total_only",
            fixedAnnual: input.fixedAnnual ?? 0,
            variableAnnual: input.variableAnnual ?? 0,
            cityTier: input.cityTier,
            taxRegime: input.taxRegime
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CtcInputForm.useEffect": ()=>{
            form.reset({
                annualCTC: Math.max(0, input.annualCTC),
                compensationMode: input.compensationMode ?? "total_only",
                fixedAnnual: input.fixedAnnual ?? 0,
                variableAnnual: input.variableAnnual ?? 0,
                cityTier: input.cityTier,
                taxRegime: input.taxRegime
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps -- sync store → form when returning to this screen
        }
    }["CtcInputForm.useEffect"], [
        input.annualCTC,
        input.compensationMode,
        input.fixedAnnual,
        input.variableAnnual,
        input.cityTier,
        input.taxRegime
    ]);
    const watchedAnnualCtc = form.watch("annualCTC");
    const ctcMeetsMinimum = typeof watchedAnnualCtc === "number" && Number.isFinite(watchedAnnualCtc) && watchedAnnualCtc >= __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$schemas$2f$ctc$2d$input$2e$schema$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MIN_ANNUAL_CTC_RUPEES"];
    const pushSalaryHistory = async ()=>{
        const { input: nextInput, breakdown } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"].getState();
        if (!breakdown) return;
        if (persist) {
            try {
                const row = await createSalarySession.mutateAsync({
                    input: nextInput,
                    breakdown,
                    planning: {
                        lifestyle: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$lifestyle$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLifestyleStore"].getState().expenses
                    }
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"].getState().setActiveSalaryHistoryId(row.id);
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$app$2d$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appToast"].salarySession.created();
            } catch  {
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$notify$2f$app$2d$notify$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["appToast"].persistence.cloudUnavailableLocalFallback();
                const id = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$history$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHistoryStore"].getState().pushSalaryCalculation(nextInput, breakdown.monthlyInHand);
                if (id != null) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"].getState().setActiveSalaryHistoryId(id);
                }
            }
        } else {
            const id = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$history$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHistoryStore"].getState().pushSalaryCalculation(nextInput, breakdown.monthlyInHand);
            if (id != null) {
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"].getState().setActiveSalaryHistoryId(id);
            }
        }
    };
    const onSubmit = async (data)=>{
        if (historyLimitReached) return;
        setInput({
            fullName: "",
            email: "",
            annualCTC: data.annualCTC,
            compensationMode: data.compensationMode,
            fixedAnnual: data.compensationMode === "fixed_variable" ? data.fixedAnnual : 0,
            variableAnnual: data.compensationMode === "fixed_variable" ? data.variableAnnual : 0,
            cityTier: data.cityTier,
            taxRegime: data.taxRegime,
            resultSource: "manual_estimated",
            documentFileName: undefined
        });
        calculateBreakdown();
        await pushSalaryHistory();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$salary$2d$breakdown$2d$scroll$2d$restoration$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearSalaryBreakdownScrollSave"])();
        const sid = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"].getState().activeSalaryHistoryId;
        router.push(persist && sid ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$salary$2d$premium$2d$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["salaryPremiumBreakdownHref"])(sid) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$salary$2d$premium$2d$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["salaryPremiumBreakdownHref"])());
    };
    const onDocumentSelected = async (fileList)=>{
        const file = fileList?.[0];
        if (!file) return;
        if (historyLimitReached) return;
        setDocError(null);
        setDocParsing(true);
        try {
            await applyParsedSalaryDocument(file);
            await pushSalaryHistory();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$salary$2d$breakdown$2d$scroll$2d$restoration$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearSalaryBreakdownScrollSave"])();
            const sid = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"].getState().activeSalaryHistoryId;
            router.push(persist && sid ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$salary$2d$premium$2d$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["salaryPremiumBreakdownHref"])(sid) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$salary$2d$premium$2d$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["salaryPremiumBreakdownHref"])());
        } catch  {
            setDocError("We couldn’t parse that file. Try a clear PDF or image, or use manual entry.");
        } finally{
            setDocParsing(false);
            if (fileRef.current) fileRef.current.value = "";
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-[calc(100vh-8rem)] overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-teal-100/50 blur-3xl",
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/src/components/features/salary/ctc-input-form.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-emerald-100/40 blur-3xl",
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/src/components/features/salary/ctc-input-form.tsx",
                lineNumber: 222,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$page$2d$shell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageShell"], {
                narrow: true,
                className: "relative py-10 md:py-14",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-display text-3xl md:text-5xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-primary",
                                        children: "Your CTC"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/salary/ctc-input-form.tsx",
                                        lineNumber: 230,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-navy-800",
                                        children: ", two ways"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/salary/ctc-input-form.tsx",
                                        lineNumber: 231,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/features/salary/ctc-input-form.tsx",
                                lineNumber: 229,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-base md:text-lg text-navy-500 max-w-2xl mx-auto leading-relaxed",
                                children: [
                                    "Enter your CTC for an",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "font-semibold text-navy-700",
                                        children: "estimated"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/salary/ctc-input-form.tsx",
                                        lineNumber: 235,
                                        columnNumber: 13
                                    }, this),
                                    " in-hand and breakup, or upload an offer or salary structure for a",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "font-semibold text-navy-700",
                                        children: "document-assisted"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/salary/ctc-input-form.tsx",
                                        lineNumber: 237,
                                        columnNumber: 13
                                    }, this),
                                    " draft. Extracted fields are a starting point—review and adjust on the next screen."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/features/salary/ctc-input-form.tsx",
                                lineNumber: 233,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/salary/ctc-input-form.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center mb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-flex rounded-xl border border-navy-200 bg-navy-50/40 p-1",
                            children: [
                                {
                                    id: "manual",
                                    label: "Manual CTC"
                                },
                                {
                                    id: "document",
                                    label: "Upload document"
                                }
                            ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>{
                                        setEntryMode(tab.id);
                                        setDocError(null);
                                    },
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("cursor-pointer rounded-lg px-5 py-2.5 text-sm font-semibold transition-all min-w-[140px]", entryMode === tab.id ? "border border-teal-600/25 bg-teal-100 text-teal-900 shadow-sm" : "text-navy-500 hover:bg-white/70 hover:text-navy-700"),
                                    children: tab.label
                                }, tab.id, false, {
                                    fileName: "[project]/src/components/features/salary/ctc-input-form.tsx",
                                    lineNumber: 250,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/salary/ctc-input-form.tsx",
                            lineNumber: 243,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/salary/ctc-input-form.tsx",
                        lineNumber: 242,
                        columnNumber: 9
                    }, this),
                    historyLimitReached ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8 rounded-xl border border-amber-200/90 bg-amber-50/85 px-4 py-3.5 text-left shadow-sm shadow-amber-900/[0.03]",
                        "aria-live": "polite",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-semibold text-amber-950",
                                children: "History limit reached"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/salary/ctc-input-form.tsx",
                                lineNumber: 275,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1.5 text-xs text-amber-900/90 leading-relaxed max-w-xl",
                                children: [
                                    "You already have ",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$history$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SALARY_HISTORY_MAX_ENTRIES"],
                                    " saved salaries on this device. Remove one from",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/salary/history",
                                        className: "font-semibold text-teal-800 underline-offset-2 hover:underline",
                                        children: "Saved salaries"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/salary/ctc-input-form.tsx",
                                        lineNumber: 281,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    "to save a new run."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/features/salary/ctc-input-form.tsx",
                                lineNumber: 278,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/salary/ctc-input-form.tsx",
                        lineNumber: 271,
                        columnNumber: 11
                    }, this) : null,
                    entryMode === "document" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-2xl border border-navy-200/50 bg-white p-6 md:p-8 shadow-sm space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-3 rounded-xl bg-teal-50/80 border border-teal-100 px-4 py-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                        className: "size-5 text-teal-600 shrink-0 mt-0.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/salary/ctc-input-form.tsx",
                                        lineNumber: 295,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-navy-700 leading-relaxed",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-navy-800",
                                                children: "PDF or image"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/salary/ctc-input-form.tsx",
                                                lineNumber: 297,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-xs text-navy-600",
                                                children: "Offer letter, compensation summary, or salary structure. We extract a CTC hint from the filename and run the same tax engine; replace with real OCR/API when your backend is ready."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/salary/ctc-input-form.tsx",
                                                lineNumber: 298,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/features/salary/ctc-input-form.tsx",
                                        lineNumber: 296,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/features/salary/ctc-input-form.tsx",
                                lineNumber: 294,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                ref: fileRef,
                                type: "file",
                                accept: ".pdf,.png,.jpg,.jpeg,image/*,application/pdf",
                                className: "hidden",
                                onChange: (e)=>onDocumentSelected(e.target.files)
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/salary/ctc-input-form.tsx",
                                lineNumber: 305,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                disabled: docParsing || historyLimitReached,
                                onClick: ()=>fileRef.current?.click(),
                                className: "w-full h-12 rounded-full text-base font-semibold",
                                children: docParsing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "mr-2 size-5 animate-spin",
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/salary/ctc-input-form.tsx",
                                            lineNumber: 320,
                                            columnNumber: 19
                                        }, this),
                                        "Reading document…"
                                    ]
                                }, void 0, true) : "Choose file"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/salary/ctc-input-form.tsx",
                                lineNumber: 312,
                                columnNumber: 13
                            }, this),
                            docError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-danger-600 text-center",
                                children: docError
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/salary/ctc-input-form.tsx",
                                lineNumber: 328,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center text-xs text-navy-400",
                                children: [
                                    "Tip: include CTC in the filename (e.g. ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        className: "text-navy-600",
                                        children: "24L_offer.pdf"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/salary/ctc-input-form.tsx",
                                        lineNumber: 331,
                                        columnNumber: 54
                                    }, this),
                                    ") for better mock extraction."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/features/salary/ctc-input-form.tsx",
                                lineNumber: 330,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/salary/ctc-input-form.tsx",
                        lineNumber: 293,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].form, {
                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2f$marketing$2d$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                        initial: "hidden",
                        animate: "show",
                        onSubmit: form.handleSubmit(onSubmit),
                        className: "rounded-2xl border border-navy-200/50 bg-white p-6 md:p-8 shadow-sm",
                        onAnimationComplete: ()=>{
                            if (manualCtcFocusOnceRef.current) return;
                            manualCtcFocusOnceRef.current = true;
                            premiumCtcFocusCleanupRef.current?.();
                            premiumCtcFocusCleanupRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dom$2f$smooth$2d$focus$2d$input$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["smoothScrollInputIntoViewAndFocus"])(annualCtcInputRef.current);
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-semibold uppercase tracking-wide text-navy-400 mb-6",
                                children: "Estimated from your inputs"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/salary/ctc-input-form.tsx",
                                lineNumber: 350,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$salary$2f$compensation$2d$ctc$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CompensationCtcSectionForm"], {
                                    control: form.control,
                                    setValue: form.setValue,
                                    errors: form.formState.errors,
                                    annualCtcInputRef: setAnnualCtcInputNode
                                }, void 0, false, {
                                    fileName: "[project]/src/components/features/salary/ctc-input-form.tsx",
                                    lineNumber: 355,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/salary/ctc-input-form.tsx",
                                lineNumber: 354,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold text-navy-800 mb-3",
                                        children: "City Tier (HRA Calculation)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/salary/ctc-input-form.tsx",
                                        lineNumber: 364,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                                        name: "cityTier",
                                        control: form.control,
                                        render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$segmented$2d$selector$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SegmentedSelector"], {
                                                options: tierOptions,
                                                value: field.value,
                                                onChange: field.onChange
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/salary/ctc-input-form.tsx",
                                                lineNumber: 371,
                                                columnNumber: 19
                                            }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/salary/ctc-input-form.tsx",
                                        lineNumber: 367,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/features/salary/ctc-input-form.tsx",
                                lineNumber: 363,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 mb-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold text-navy-800",
                                                children: "Tax Regime"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/salary/ctc-input-form.tsx",
                                                lineNumber: 382,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipTrigger"], {
                                                        type: "button",
                                                        className: "text-navy-400 hover:text-navy-600",
                                                        "aria-label": "Tax regime info",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                            className: "size-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/features/salary/ctc-input-form.tsx",
                                                            lineNumber: 389,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/features/salary/ctc-input-form.tsx",
                                                        lineNumber: 384,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$tooltip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TooltipContent"], {
                                                        side: "top",
                                                        className: "max-w-xs text-left",
                                                        children: "Old regime allows deductions like 80C and HRA exemption where applicable. New regime uses lower slabs with fewer deductions."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/features/salary/ctc-input-form.tsx",
                                                        lineNumber: 391,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/features/salary/ctc-input-form.tsx",
                                                lineNumber: 383,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/features/salary/ctc-input-form.tsx",
                                        lineNumber: 381,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Controller"], {
                                        name: "taxRegime",
                                        control: form.control,
                                        render: ({ field })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$shared$2f$tax$2d$regime$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TaxRegimeToggle"], {
                                                value: field.value,
                                                onChange: field.onChange,
                                                size: "default"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/salary/ctc-input-form.tsx",
                                                lineNumber: 401,
                                                columnNumber: 19
                                            }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/salary/ctc-input-form.tsx",
                                        lineNumber: 397,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/features/salary/ctc-input-form.tsx",
                                lineNumber: 380,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                type: "submit",
                                disabled: historyLimitReached || form.formState.isSubmitting || !ctcMeetsMinimum,
                                className: "mt-10 h-12 w-full rounded-full text-base font-semibold shadow-md hover:shadow-lg disabled:pointer-events-none disabled:opacity-50",
                                children: form.formState.isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "mr-2 size-5 animate-spin",
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/salary/ctc-input-form.tsx",
                                            lineNumber: 421,
                                            columnNumber: 19
                                        }, this),
                                        "Saving & opening…"
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        "Show estimated breakdown",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "ml-2 size-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/salary/ctc-input-form.tsx",
                                            lineNumber: 427,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/salary/ctc-input-form.tsx",
                                lineNumber: 410,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/salary/ctc-input-form.tsx",
                        lineNumber: 336,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$salary$2f$salary$2d$recents$2d$panels$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SalaryRecentsPanels"], {}, void 0, false, {
                        fileName: "[project]/src/components/features/salary/ctc-input-form.tsx",
                        lineNumber: 434,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/salary/ctc-input-form.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/features/salary/ctc-input-form.tsx",
        lineNumber: 217,
        columnNumber: 5
    }, this);
}
_s(CtcInputForm, "N7INkuE9oG+ucdWbbKFZ5o97l7g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$auth$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$hooks$2f$use$2d$salary$2d$sessions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCreateSalarySessionMutation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2f$hooks$2f$use$2d$salary$2d$sessions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalarySessionsListQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$history$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useHistoryStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = CtcInputForm;
var _c;
__turbopack_context__.k.register(_c, "CtcInputForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/features/salary-calculator/fixed-variable-in-hand-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FixedVariableInHandPanel",
    ()=>FixedVariableInHandPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/format-currency.ts [app-client] (ecmascript)");
"use client";
;
;
;
function MetricCell({ title, subtitle, amount, emphasize, sentiment = "neutral" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative min-w-0 flex flex-col rounded-xl border p-3 sm:p-3.5 overflow-hidden", emphasize ? "border-teal-200/80 bg-teal-50/40 shadow-sm ring-1 ring-teal-100/60" : "border-navy-200/60 bg-white"),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[10px] font-semibold uppercase tracking-wide text-navy-500 leading-snug",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/features/salary-calculator/fixed-variable-in-hand-panel.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            subtitle ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-0.5 text-[10px] leading-snug text-navy-400",
                children: subtitle
            }, void 0, false, {
                fileName: "[project]/src/components/features/salary-calculator/fixed-variable-in-hand-panel.tsx",
                lineNumber: 49,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-1.5 break-words font-display text-lg font-bold tabular-nums leading-tight sm:text-xl", emphasize ? "text-teal-800" : "text-navy-800"),
                "aria-live": "polite",
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(amount)
            }, void 0, false, {
                fileName: "[project]/src/components/features/salary-calculator/fixed-variable-in-hand-panel.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-auto pt-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-0.5 w-8 rounded-full", sentiment === "positive" ? "bg-teal-500" : "bg-navy-300")
                }, void 0, false, {
                    fileName: "[project]/src/components/features/salary-calculator/fixed-variable-in-hand-panel.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/features/salary-calculator/fixed-variable-in-hand-panel.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/features/salary-calculator/fixed-variable-in-hand-panel.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c = MetricCell;
function FixedVariableInHandPanel({ taxRegime, monthlyInHandFixedOnly, monthlyInHandIncludingVariable, annualInHandFixedOnly, annualInHandIncludingVariable, monthlyIncomeTaxFixedBasis, monthlyIncomeTaxIncludingVariable, annualIncomeTaxFixedBasis, annualIncomeTaxIncludingVariable, effectiveTaxRateFixedBasis, effectiveTaxRateIncludingVariable, annualVariablePay, className }) {
    const regimeShort = taxRegime === "new" ? "New" : "Old";
    const regimeBadge = taxRegime === "new" ? "New regime" : "Old regime";
    const hasVariable = annualVariablePay > 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("min-w-0 overflow-hidden rounded-2xl border border-navy-200/60 bg-white p-4 shadow-sm sm:p-5", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-start justify-between gap-2 border-b border-navy-100 pb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-[10px] font-semibold uppercase tracking-[0.12em] text-navy-400",
                                children: "Summary"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/salary-calculator/fixed-variable-in-hand-panel.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "mt-1 text-sm font-semibold text-navy-800 sm:text-base",
                                children: "Estimated in-hand"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/salary-calculator/fixed-variable-in-hand-panel.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/salary-calculator/fixed-variable-in-hand-panel.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "shrink-0 rounded-full border border-navy-200/80 bg-navy-50/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-navy-700",
                        title: `Income tax calculated using the ${regimeBadge}`,
                        children: regimeBadge
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/salary-calculator/fixed-variable-in-hand-panel.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/salary-calculator/fixed-variable-in-hand-panel.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-3 text-[11px] leading-relaxed text-navy-600 sm:text-xs",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold text-teal-800",
                        children: "Guaranteed"
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/salary-calculator/fixed-variable-in-hand-panel.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    " figures use ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-medium text-navy-800",
                        children: "fixed pay only"
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/salary-calculator/fixed-variable-in-hand-panel.tsx",
                        lineNumber: 118,
                        columnNumber: 13
                    }, this),
                    "—what you can typically count on each month.",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold text-navy-800",
                        children: "Illustrative"
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/salary-calculator/fixed-variable-in-hand-panel.tsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    " numbers add variable pay spread over 12 months; they are a broader estimate only (variable may be lumpy, conditional, or not guaranteed)."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/salary-calculator/fixed-variable-in-hand-panel.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCell, {
                        title: "Guaranteed monthly in-hand",
                        subtitle: "Fixed pay only — dependable baseline",
                        amount: monthlyInHandFixedOnly,
                        emphasize: true,
                        sentiment: "positive"
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/salary-calculator/fixed-variable-in-hand-panel.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCell, {
                        title: "Illustrative monthly in-hand",
                        subtitle: "Including variable, averaged per month",
                        amount: monthlyInHandIncludingVariable,
                        sentiment: "positive"
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/salary-calculator/fixed-variable-in-hand-panel.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCell, {
                        title: "Guaranteed annual in-hand",
                        subtitle: "Fixed pay basis, ×12",
                        amount: annualInHandFixedOnly
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/salary-calculator/fixed-variable-in-hand-panel.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MetricCell, {
                        title: "Illustrative annual in-hand",
                        subtitle: "Including variable, full year view",
                        amount: annualInHandIncludingVariable
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/salary-calculator/fixed-variable-in-hand-panel.tsx",
                        lineNumber: 144,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/salary-calculator/fixed-variable-in-hand-panel.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 rounded-xl border border-navy-200/70 bg-navy-50/35 p-3.5 sm:p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] font-semibold uppercase tracking-wide text-navy-500",
                        children: "Regime-aware TDS estimate"
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/salary-calculator/fixed-variable-in-hand-panel.tsx",
                        lineNumber: 152,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-[10px] leading-snug text-navy-500 sm:text-[11px]",
                        children: [
                            "Income tax below follows the",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-semibold text-navy-700",
                                children: [
                                    regimeShort,
                                    " regime"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/features/salary-calculator/fixed-variable-in-hand-panel.tsx",
                                lineNumber: 157,
                                columnNumber: 11
                            }, this),
                            " ",
                            "slabs used in this calculator (standard deduction; no 80C/HRA in this quick view). Same regime applies to both guaranteed and illustrative views—only the gross base changes when variable is included."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/salary-calculator/fixed-variable-in-hand-panel.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                        className: "mt-3 space-y-2.5 border-t border-navy-200/50 pt-3 text-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-baseline justify-between gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        className: "font-medium text-navy-700",
                                        children: "Monthly tax (fixed gross)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/salary-calculator/fixed-variable-in-hand-panel.tsx",
                                        lineNumber: 165,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        className: "tabular-nums font-semibold text-navy-900",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(monthlyIncomeTaxFixedBasis)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/salary-calculator/fixed-variable-in-hand-panel.tsx",
                                        lineNumber: 168,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/features/salary-calculator/fixed-variable-in-hand-panel.tsx",
                                lineNumber: 164,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-baseline justify-between gap-2 text-[11px] text-navy-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                        children: "Annual (fixed)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/salary-calculator/fixed-variable-in-hand-panel.tsx",
                                        lineNumber: 173,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                        className: "tabular-nums",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(annualIncomeTaxFixedBasis)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/salary-calculator/fixed-variable-in-hand-panel.tsx",
                                        lineNumber: 174,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/features/salary-calculator/fixed-variable-in-hand-panel.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this),
                            hasVariable ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-baseline justify-between gap-2 border-t border-navy-100/80 pt-2.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                className: "font-medium text-navy-700",
                                                children: "Monthly tax (fixed + variable)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/salary-calculator/fixed-variable-in-hand-panel.tsx",
                                                lineNumber: 181,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                className: "tabular-nums font-semibold text-navy-900",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(monthlyIncomeTaxIncludingVariable)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/salary-calculator/fixed-variable-in-hand-panel.tsx",
                                                lineNumber: 184,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/features/salary-calculator/fixed-variable-in-hand-panel.tsx",
                                        lineNumber: 180,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-baseline justify-between gap-2 text-[11px] text-navy-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                children: "Annual (incl. variable)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/salary-calculator/fixed-variable-in-hand-panel.tsx",
                                                lineNumber: 189,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                className: "tabular-nums",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(annualIncomeTaxIncludingVariable)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/salary-calculator/fixed-variable-in-hand-panel.tsx",
                                                lineNumber: 190,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/features/salary-calculator/fixed-variable-in-hand-panel.tsx",
                                        lineNumber: 188,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/salary-calculator/fixed-variable-in-hand-panel.tsx",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 flex flex-wrap gap-x-3 gap-y-1 border-t border-navy-200/50 pt-3 text-[10px] text-navy-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium text-navy-600",
                                children: "Effective rate on gross:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/salary-calculator/fixed-variable-in-hand-panel.tsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "tabular-nums",
                                children: [
                                    "Fixed ",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPercentage"])(effectiveTaxRateFixedBasis, 1)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/features/salary-calculator/fixed-variable-in-hand-panel.tsx",
                                lineNumber: 200,
                                columnNumber: 11
                            }, this),
                            hasVariable ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "tabular-nums",
                                children: [
                                    "· Fixed + variable",
                                    " ",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPercentage"])(effectiveTaxRateIncludingVariable, 1)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/features/salary-calculator/fixed-variable-in-hand-panel.tsx",
                                lineNumber: 204,
                                columnNumber: 13
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/salary-calculator/fixed-variable-in-hand-panel.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/salary-calculator/fixed-variable-in-hand-panel.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[10px] text-navy-500",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex items-center rounded-full border border-teal-200/80 bg-teal-50/80 px-2 py-0.5 font-medium text-teal-900",
                        children: "Live estimate"
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/salary-calculator/fixed-variable-in-hand-panel.tsx",
                        lineNumber: 213,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "leading-snug",
                        children: "Updates as you edit fixed, variable, deductions, or regime."
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/salary-calculator/fixed-variable-in-hand-panel.tsx",
                        lineNumber: 216,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/salary-calculator/fixed-variable-in-hand-panel.tsx",
                lineNumber: 212,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/features/salary-calculator/fixed-variable-in-hand-panel.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_c1 = FixedVariableInHandPanel;
var _c, _c1;
__turbopack_context__.k.register(_c, "MetricCell");
__turbopack_context__.k.register(_c1, "FixedVariableInHandPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SalaryCalculatorPremiumTeaser",
    ()=>SalaryCalculatorPremiumTeaser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/crown.js [app-client] (ecmascript) <export default as Crown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$premium$2d$plans$2d$modal$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/use-premium-plans-modal-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
/** Payslip-shaped abstract layer + grid — suggests component rows without readable text. */ function AbstractBreakdownPreviewLayer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pointer-events-none absolute inset-0 overflow-hidden",
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[linear-gradient(175deg,rgb(240_253_250/0.88)_0%,rgb(241_245_249/0.92)_38%,rgb(248_250_252/0.96)_100%)]"
            }, void 0, false, {
                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-[0.2]",
                style: {
                    backgroundImage: `linear-gradient(rgba(15,23,42,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,23,42,0.05) 1px, transparent 1px)`,
                    backgroundSize: "12px 12px"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-[5%] top-[6%] h-[70%] w-[56%] rotate-[-1.5deg] rounded-lg border border-navy-200/50 bg-gradient-to-b from-white/95 to-navy-50/60 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-[8%] right-[8%] top-[6%] h-2 w-[35%] rounded-full bg-teal-400/35"
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-[8%] right-[8%] top-[14%] space-y-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-1 w-[28%] rounded-full bg-navy-300/40"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-1 w-[55%] rounded-full bg-navy-200/35"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                                lineNumber: 32,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-[8%] right-[8%] top-[26%] space-y-1.5",
                        children: [
                            {
                                op: 0.85,
                                w: 40,
                                id: "e1"
                            },
                            {
                                op: 0.72,
                                w: 46,
                                id: "e2"
                            },
                            {
                                op: 0.9,
                                w: 52,
                                id: "e3"
                            },
                            {
                                op: 0.68,
                                w: 58,
                                id: "e4"
                            },
                            {
                                op: 0.8,
                                w: 64,
                                id: "e5"
                            }
                        ].map(({ op, w, id })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between gap-2 border-b border-navy-100/60 pb-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-1.5 rounded-full bg-navy-200/50",
                                        style: {
                                            width: `${w}%`,
                                            opacity: op
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                                        lineNumber: 48,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-1.5 w-[22%] rounded-full bg-teal-300/40",
                                        style: {
                                            opacity: op
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, id, true, {
                                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-[12%] left-[8%] right-[8%] top-[58%] rounded-md bg-teal-50/50",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-3 top-2 h-1 w-20 rounded-full bg-navy-300/35"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-3 top-5 space-y-1",
                                children: [
                                    "d1",
                                    "d2",
                                    "d3"
                                ].map((id)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-1 w-[45%] rounded-full bg-navy-200/40"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                                                lineNumber: 64,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "h-1 w-[18%] rounded-full bg-navy-200/35"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                                                lineNumber: 65,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, id, true, {
                                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-[6%] top-[10%] h-[48%] w-[30%] rotate-[1deg] rounded-lg border border-teal-200/45 bg-gradient-to-b from-teal-50/90 to-white/50 shadow-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-[10%] right-[10%] top-[8%] space-y-2",
                        children: [
                            {
                                h: 72,
                                id: "c1"
                            },
                            {
                                h: 48,
                                id: "c2"
                            },
                            {
                                h: 88,
                                id: "c3"
                            },
                            {
                                h: 56,
                                id: "c4"
                            }
                        ].map(({ h, id })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-auto rounded-md bg-gradient-to-t from-teal-100 to-teal-200/70",
                                style: {
                                    height: `${h * 0.22}px`,
                                    width: "48%",
                                    opacity: h / 100
                                }
                            }, id, false, {
                                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-[10%] left-[10%] right-[10%] space-y-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-1 w-full rounded-full bg-navy-200/30"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-1 w-[70%] rounded-full bg-navy-200/25"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-[18%] left-[22%] h-6 w-28 rounded-lg bg-navy-300/18 blur-[3px]"
            }, void 0, false, {
                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-[18%] top-[10%] h-4 w-20 rounded-full bg-teal-400/20 blur-[4px]"
            }, void 0, false, {
                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = AbstractBreakdownPreviewLayer;
function BlurredBreakdownForeground() {
    const bars = [
        {
            h: 72,
            id: "b1"
        },
        {
            h: 45,
            id: "b2"
        },
        {
            h: 88,
            id: "b3"
        },
        {
            h: 52,
            id: "b4"
        },
        {
            h: 68,
            id: "b5"
        },
        {
            h: 40,
            id: "b6"
        }
    ];
    const rows = [
        {
            id: "f1",
            labelW: 32
        },
        {
            id: "f2",
            labelW: 40
        },
        {
            id: "f3",
            labelW: 48
        },
        {
            id: "f4",
            labelW: 38
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative z-[1] select-none px-2.5 py-2 sm:px-3 sm:py-2.5", "opacity-[0.55] blur-[5px] sm:blur-[6px]"),
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-1.5 w-[62%] max-w-[180px] rounded-full bg-navy-300/60"
            }, void 0, false, {
                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 grid grid-cols-3 gap-1.5 sm:gap-2",
                children: bars.map(({ h, id })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-10 rounded-md bg-gradient-to-t from-teal-100 to-teal-200/80 sm:h-11",
                        style: {
                            opacity: h / 100
                        }
                    }, id, false, {
                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                        lineNumber: 127,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-2 space-y-1.5 border-t border-navy-100/80 pt-1.5",
                children: rows.map(({ id, labelW })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between gap-2 border-b border-navy-100/70 pb-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-2 rounded bg-navy-200/70",
                                style: {
                                    width: `${labelW}%`
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                                lineNumber: 140,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-2 w-14 rounded bg-navy-200/60"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                                lineNumber: 144,
                                columnNumber: 13
                            }, this)
                        ]
                    }, id, true, {
                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                        lineNumber: 136,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
        lineNumber: 117,
        columnNumber: 5
    }, this);
}
_c1 = BlurredBreakdownForeground;
function SalaryCalculatorPremiumTeaser({ locked, onRequestUnlock, className }) {
    if (!locked) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative overflow-hidden rounded-2xl border border-teal-200/50 bg-white shadow-sm ring-1 ring-teal-100/40", "p-5 sm:p-6", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex items-center gap-1.5 rounded-full border border-navy-200/80 bg-white px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-navy-600 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                className: "size-3 text-navy-500",
                                strokeWidth: 2,
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this),
                            "Premium"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                        lineNumber: 171,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__["Crown"], {
                        className: "size-[18px] shrink-0 text-teal-600/80 sm:size-5",
                        strokeWidth: 1.75,
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "mt-3 font-display text-base font-bold tracking-tight text-navy-900 sm:text-lg",
                children: "Unlock detailed salary breakdown"
            }, void 0, false, {
                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1.5 text-[13px] text-navy-600 leading-snug sm:text-sm sm:leading-relaxed",
                children: "Get a more precise read on your compensation with component-level breakup and deeper payroll insights—when you are ready to go further."
            }, void 0, false, {
                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                lineNumber: 185,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative mt-4 h-[132px] overflow-hidden rounded-xl border border-navy-200/60 shadow-inner sm:mt-5 sm:h-[142px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AbstractBreakdownPreviewLayer, {}, void 0, false, {
                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                        lineNumber: 191,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BlurredBreakdownForeground, {}, void 0, false, {
                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                        lineNumber: 192,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[42%] bg-gradient-to-t from-white via-white/65 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                lineNumber: 190,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "mt-4 space-y-2 text-[13px] text-navy-600 leading-snug sm:text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-1.5 size-1.5 shrink-0 rounded-full bg-teal-500",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                                lineNumber: 198,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "View component-level breakup and allowances in context"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                                lineNumber: 199,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                        lineNumber: 197,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-1.5 size-1.5 shrink-0 rounded-full bg-teal-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                                lineNumber: 202,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Understand deductions and cash path with richer detail"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                                lineNumber: 203,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "flex gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-1.5 size-1.5 shrink-0 rounded-full bg-teal-500"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Connect this salary to premium planning when you upgrade"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                                lineNumber: 207,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                lineNumber: 196,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 flex flex-col gap-2 sm:mt-6 sm:flex-row sm:flex-wrap",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        className: "h-10 w-full rounded-full bg-teal-700 text-sm font-semibold text-white shadow-sm hover:bg-teal-800 sm:min-w-[200px] sm:flex-1",
                        onClick: onRequestUnlock,
                        children: "Unlock Premium"
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"])({
                            variant: "outline",
                            size: "lg"
                        }), "h-10 w-full rounded-full border-navy-200 text-sm font-semibold text-teal-800 hover:bg-teal-50 sm:min-w-[200px] sm:flex-1"),
                        onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$premium$2d$plans$2d$modal$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openPremiumPlansModal"])(),
                        children: "Compare Free & Premium plans"
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
                lineNumber: 211,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx",
        lineNumber: 163,
        columnNumber: 5
    }, this);
}
_c2 = SalaryCalculatorPremiumTeaser;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "AbstractBreakdownPreviewLayer");
__turbopack_context__.k.register(_c1, "BlurredBreakdownForeground");
__turbopack_context__.k.register(_c2, "SalaryCalculatorPremiumTeaser");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/config/premium-planning-tools.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PREMIUM_PLANNING_TOOLS",
    ()=>PREMIUM_PLANNING_TOOLS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calculator.js [app-client] (ecmascript) <export default as Calculator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-grid.js [app-client] (ecmascript) <export default as LayoutGrid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
;
const PREMIUM_PLANNING_TOOLS = [
    {
        id: "wealth_forecast",
        title: "Wealth Forecast",
        valueStatement: "See how your salary can turn into savings and net worth over the next few years.",
        sheetDescription: "Model salary growth, savings rate, and investment returns to project corpus over 5–20 years—grounded in your in-hand baseline.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"]
    },
    {
        id: "emi_analyzer",
        title: "EMI Analyzer",
        valueStatement: "Check what EMI is realistically affordable based on your actual in-hand salary.",
        sheetDescription: "Stress-test loan amounts and tenures against post-EMI disposable income so new debt stays within a safe band.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"]
    },
    {
        id: "monthly_planner",
        title: "Monthly Planner",
        valueStatement: "Turn your salary into a realistic monthly spending and savings plan.",
        sheetDescription: "Allocate rent, essentials, and discretionary spend with sliders—see monthly surplus or shortfall before you commit.",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__["LayoutGrid"]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/features/salary-calculator/premium-feature-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PremiumFeatureCard",
    ()=>PremiumFeatureCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/crown.js [app-client] (ecmascript) <export default as Crown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function PreviewSparklines() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-4 flex h-14 items-end justify-center gap-1.5 opacity-80",
        children: [
            40,
            65,
            48,
            78,
            55,
            90,
            62
        ].map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-1.5 rounded-full bg-gradient-to-t from-teal-200 to-teal-500",
                style: {
                    height: `${h}%`
                },
                "aria-hidden": true
            }, i, false, {
                fileName: "[project]/src/components/features/salary-calculator/premium-feature-card.tsx",
                lineNumber: 21,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/features/salary-calculator/premium-feature-card.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c = PreviewSparklines;
function PremiumFeatureCard({ meta, locked, hrefWhenUnlocked, onRequestUpgrade, className }) {
    const Icon = meta.icon;
    const body = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex size-11 items-center justify-center rounded-xl bg-navy-50 text-navy-500",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            className: "size-5",
                            strokeWidth: 2,
                            "aria-hidden": true
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/salary-calculator/premium-feature-card.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/salary-calculator/premium-feature-card.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    locked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex items-center gap-1 rounded-full border border-navy-200 bg-navy-50/80 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-navy-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                className: "size-3",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/salary-calculator/premium-feature-card.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this),
                            "Premium"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/salary-calculator/premium-feature-card.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex items-center gap-1 rounded-full border border-teal-200 bg-teal-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-teal-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__["Crown"], {
                                className: "size-3",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/salary-calculator/premium-feature-card.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this),
                            "Included"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/salary-calculator/premium-feature-card.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/salary-calculator/premium-feature-card.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "mt-4 text-base font-semibold text-navy-800",
                children: meta.title
            }, void 0, false, {
                fileName: "[project]/src/components/features/salary-calculator/premium-feature-card.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-sm text-navy-500 leading-relaxed",
                children: meta.valueStatement
            }, void 0, false, {
                fileName: "[project]/src/components/features/salary-calculator/premium-feature-card.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PreviewSparklines, {}, void 0, false, {
                fileName: "[project]/src/components/features/salary-calculator/premium-feature-card.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
    if (!locked) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: hrefWhenUnlocked,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group flex flex-col rounded-2xl border border-navy-200/50 bg-white p-5 shadow-sm transition-all", "hover:border-teal-200 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2", className),
            children: [
                body,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "mt-4 inline-flex items-center gap-1 text-sm font-semibold text-teal-600",
                    children: [
                        "Open tool",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                            className: "size-4 transition-transform group-hover:translate-x-0.5",
                            "aria-hidden": true
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/salary-calculator/premium-feature-card.tsx",
                            lineNumber: 80,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/features/salary-calculator/premium-feature-card.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/salary-calculator/premium-feature-card.tsx",
            lineNumber: 69,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex flex-col rounded-2xl border border-dashed border-navy-200/70 bg-navy-50/30 p-5", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/40 to-transparent",
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/src/components/features/salary-calculator/premium-feature-card.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: body
            }, void 0, false, {
                fileName: "[project]/src/components/features/salary-calculator/premium-feature-card.tsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                type: "button",
                variant: "outline",
                className: "relative mt-4 h-10 w-full rounded-full border-teal-200 bg-white text-teal-800 hover:bg-teal-50",
                onClick: onRequestUpgrade,
                children: [
                    "Go Premium",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                        className: "size-4",
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/salary-calculator/premium-feature-card.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/salary-calculator/premium-feature-card.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/features/salary-calculator/premium-feature-card.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
_c1 = PremiumFeatureCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "PreviewSparklines");
__turbopack_context__.k.register(_c1, "PremiumFeatureCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/features/salary-calculator/premium-feature-section.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PremiumFeatureSection",
    ()=>PremiumFeatureSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$salary$2d$premium$2d$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/config/salary-premium-paths.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$premium$2d$planning$2d$tools$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/config/premium-planning-tools.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2f$marketing$2d$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/motion/marketing-motion.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$salary$2d$calculator$2f$premium$2d$feature$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/salary-calculator/premium-feature-card.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
const HREF_BY_ID = {
    wealth_forecast: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$salary$2d$premium$2d$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SALARY_PREMIUM_WEALTH_FORECAST"],
    emi_analyzer: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$salary$2d$premium$2d$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SALARY_PREMIUM_EMI_ANALYZER"],
    monthly_planner: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$salary$2d$premium$2d$paths$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SALARY_PREMIUM_LIFESTYLE"]
};
function PremiumFeatureSection({ locked, onRequestUpgrade }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mt-14 md:mt-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: "hidden",
            whileInView: "show",
            viewport: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2f$marketing$2d$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VIEWPORT"],
            variants: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2f$marketing$2d$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerContainer"])(0.09),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2f$marketing$2d$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                    className: "mb-6 max-w-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[11px] font-semibold uppercase tracking-[0.14em] text-navy-400",
                            children: "Premium planning"
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/salary-calculator/premium-feature-section.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mt-2 font-display text-xl font-bold text-navy-800 md:text-2xl",
                            children: "What you can do with this salary"
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/salary-calculator/premium-feature-section.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-sm text-navy-500 leading-relaxed",
                            children: "Forecasts, debt fit, and monthly allocation build on your in-hand estimate—available on Premium when you are ready."
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/salary-calculator/premium-feature-section.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/features/salary-calculator/premium-feature-section.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    variants: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2f$marketing$2d$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerContainer"])(0.1),
                    className: "grid gap-5 md:grid-cols-3",
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2f$premium$2d$planning$2d$tools$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PREMIUM_PLANNING_TOOLS"].map((meta)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2f$marketing$2d$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$salary$2d$calculator$2f$premium$2d$feature$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PremiumFeatureCard"], {
                                meta: meta,
                                locked: locked,
                                hrefWhenUnlocked: HREF_BY_ID[meta.id],
                                onRequestUpgrade: ()=>onRequestUpgrade(meta)
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/salary-calculator/premium-feature-section.tsx",
                                lineNumber: 63,
                                columnNumber: 15
                            }, this)
                        }, meta.id, false, {
                            fileName: "[project]/src/components/features/salary-calculator/premium-feature-section.tsx",
                            lineNumber: 62,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/features/salary-calculator/premium-feature-section.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/salary-calculator/premium-feature-section.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/features/salary-calculator/premium-feature-section.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c = PremiumFeatureSection;
var _c;
__turbopack_context__.k.register(_c, "PremiumFeatureSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/label.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = Label;
;
var _c;
__turbopack_context__.k.register(_c, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$input$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/react/esm/input/Input.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$input$2f$Input$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/input.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = Input;
;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/inr-money-input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InrMoneyInput",
    ()=>InrMoneyInput,
    "formatInrTwoDecimals",
    ()=>formatInrTwoDecimals,
    "splitInrFormattedParts",
    ()=>splitInrFormattedParts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scheduling$2f$defer$2d$execution$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/scheduling/defer-execution.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function formatInrTwoDecimals(rupees) {
    return new Intl.NumberFormat("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(Number.isFinite(rupees) ? rupees : 0);
}
function splitInrFormattedParts(rupees) {
    const s = formatInrTwoDecimals(rupees);
    const i = s.lastIndexOf(".");
    if (i < 0) return {
        whole: s,
        decimals: ""
    };
    return {
        whole: s.slice(0, i),
        decimals: s.slice(i)
    };
}
function digitsToRupeeInt(s) {
    const d = s.replace(/\D/g, "");
    if (!d) return 0;
    const n = Number.parseInt(d, 10);
    if (!Number.isFinite(n)) return 0;
    return Math.min(Math.max(0, n), Number.MAX_SAFE_INTEGER);
}
const InrMoneyInput = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = _s(function InrMoneyInput({ value, onCommit, debounceMs = 160, deductionStyle, className, disabled, "aria-label": ariaLabel, onFocus: onFocusProp, onBlur: onBlurProp, onChange: onChangeProp, ...rest }, ref) {
    _s();
    const [focused, setFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const focusedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const [draft, setDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "InrMoneyInput.InrMoneyInput.useState": ()=>value === 0 ? "" : String(value)
    }["InrMoneyInput.InrMoneyInput.useState"]);
    const pendingCommitCancel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InrMoneyInput.InrMoneyInput.useEffect": ()=>{
            if (focusedRef.current) return;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startTransition"])({
                "InrMoneyInput.InrMoneyInput.useEffect": ()=>{
                    setDraft(value === 0 ? "" : String(value));
                }
            }["InrMoneyInput.InrMoneyInput.useEffect"]);
        }
    }["InrMoneyInput.InrMoneyInput.useEffect"], [
        value,
        focused
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InrMoneyInput.InrMoneyInput.useEffect": ()=>({
                "InrMoneyInput.InrMoneyInput.useEffect": ()=>{
                    pendingCommitCancel.current?.();
                    pendingCommitCancel.current = null;
                }
            })["InrMoneyInput.InrMoneyInput.useEffect"]
    }["InrMoneyInput.InrMoneyInput.useEffect"], []);
    const shown = focused ? draft : formatInrTwoDecimals(value);
    const flush = (raw)=>{
        const n = digitsToRupeeInt(raw);
        if (n !== value) onCommit(n);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative flex min-w-[7.5rem] items-center justify-end", disabled && "opacity-60 pointer-events-none", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pointer-events-none absolute left-2.5 text-xs font-semibold tabular-nums", deductionStyle ? "text-danger-400" : "text-navy-400"),
                "aria-hidden": true,
                children: "₹"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/inr-money-input.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ...rest,
                type: "text",
                inputMode: "numeric",
                disabled: disabled,
                "aria-label": ariaLabel,
                value: shown,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-full rounded-md border border-navy-200/90 bg-white/95 py-2 pr-2.5 pl-7 text-sm font-semibold tabular-nums outline-none", "shadow-sm shadow-navy-900/[0.02] transition-[border-color,box-shadow,background-color] duration-200", "hover:border-navy-300/90 hover:bg-white", "focus:border-teal-400/80 focus:bg-white focus:shadow-md focus:shadow-teal-900/[0.04] focus:ring-2 focus:ring-teal-200/70", deductionStyle ? "text-danger-600 border-danger-200/70 hover:border-danger-300/80" : "text-navy-800"),
                onFocus: (e)=>{
                    onFocusProp?.(e);
                    focusedRef.current = true;
                    setFocused(true);
                    setDraft(value === 0 ? "" : String(value));
                },
                onBlur: (e)=>{
                    onBlurProp?.(e);
                    pendingCommitCancel.current?.();
                    pendingCommitCancel.current = null;
                    focusedRef.current = false;
                    setFocused(false);
                    const n = digitsToRupeeInt(e.target.value);
                    setDraft(n === 0 ? "" : String(n));
                    flush(e.target.value);
                },
                onChange: (e)=>{
                    onChangeProp?.(e);
                    if (!focusedRef.current) return;
                    const cleaned = e.target.value.replace(/\D/g, "");
                    setDraft(cleaned);
                    pendingCommitCancel.current?.();
                    pendingCommitCancel.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$scheduling$2f$defer$2d$execution$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deferExecution"])(debounceMs, ()=>{
                        pendingCommitCancel.current = null;
                        flush(cleaned);
                    });
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ui/inr-money-input.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/inr-money-input.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}, "LIa6XQ32hPZehosS+kVYTai2ANg=")), "LIa6XQ32hPZehosS+kVYTai2ANg=");
_c1 = InrMoneyInput;
InrMoneyInput.displayName = "InrMoneyInput";
var _c, _c1;
__turbopack_context__.k.register(_c, "InrMoneyInput$forwardRef");
__turbopack_context__.k.register(_c1, "InrMoneyInput");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/simple-salary-calculator/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultSimpleSalaryInput",
    ()=>defaultSimpleSalaryInput
]);
const defaultSimpleSalaryInput = {
    annualFixedPay: 1_800_000,
    annualVariablePay: 0,
    monthlyProfessionalTax: 200,
    monthlyEmployerPf: 1_800,
    monthlyEmployeePf: 1_800,
    extraDeductions: [],
    taxRegime: "new"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/simple-salary-calculator/sync-compensation-split.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "annualPackageTotal",
    ()=>annualPackageTotal,
    "reconcileAfterFixedPay",
    ()=>reconcileAfterFixedPay,
    "reconcileAfterTotalCtc",
    ()=>reconcileAfterTotalCtc,
    "reconcileAfterVariablePay",
    ()=>reconcileAfterVariablePay
]);
/** Keep fixed + variable aligned with total CTC edits (free calculator). */ function clampRupee(n) {
    if (!Number.isFinite(n)) return 0;
    return Math.max(0, Math.round(n));
}
function reconcileAfterTotalCtc(totalCtc) {
    const t = clampRupee(totalCtc);
    return {
        annualFixedPay: t,
        annualVariablePay: 0
    };
}
function reconcileAfterFixedPay(newFixed, currentFixed, currentVariable) {
    const F = clampRupee(newFixed);
    const total = clampRupee(currentFixed) + clampRupee(currentVariable);
    if (F <= total) {
        return {
            annualFixedPay: F,
            annualVariablePay: total - F
        };
    }
    return {
        annualFixedPay: F,
        annualVariablePay: 0
    };
}
function reconcileAfterVariablePay(newVariable, currentFixed, currentVariable) {
    const V = clampRupee(newVariable);
    const total = clampRupee(currentFixed) + clampRupee(currentVariable);
    if (V <= total) {
        return {
            annualFixedPay: total - V,
            annualVariablePay: V
        };
    }
    return {
        annualFixedPay: 0,
        annualVariablePay: V
    };
}
function annualPackageTotal(fixed, variable) {
    return clampRupee(fixed) + clampRupee(variable);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/features/salary-calculator/salary-calculator-form.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SalaryCalculatorForm",
    ()=>SalaryCalculatorForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$inr$2d$money$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/inr-money-input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simple$2d$salary$2d$calculator$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/simple-salary-calculator/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simple$2d$salary$2d$calculator$2f$sync$2d$compensation$2d$split$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/simple-salary-calculator/sync-compensation-split.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/format-currency.ts [app-client] (ecmascript)");
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
function RegimeSwitcher({ value, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-navy-200 bg-white p-1 shadow-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-1",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>onChange("old"),
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg px-3 py-2.5 text-left transition-colors", value === "old" ? "bg-teal-600 text-white shadow-sm" : "text-navy-600 hover:bg-navy-50"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block text-sm font-semibold",
                            children: "Old regime"
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-0.5 block text-[10px] leading-snug", value === "old" ? "text-white/90" : "text-navy-400"),
                            children: "Slabs + rebates (no 80C/HRA in this quick calc)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>onChange("new"),
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg px-3 py-2.5 text-left transition-colors", value === "new" ? "bg-teal-600 text-white shadow-sm" : "text-navy-600 hover:bg-navy-50"),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block text-sm font-semibold",
                            children: "New regime"
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-0.5 block text-[10px] leading-snug", value === "new" ? "text-white/90" : "text-navy-400"),
                            children: "Lower slabs; standard deduction only here"
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                    lineNumber: 62,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_c = RegimeSwitcher;
function SalaryCalculatorForm({ value, onChange, className, annualCtcInputRef }) {
    const patch = (partial)=>onChange({
            ...value,
            ...partial
        });
    const addDeduction = ()=>{
        const row = {
            id: crypto.randomUUID(),
            label: "Other deduction",
            monthlyAmount: 0
        };
        onChange({
            ...value,
            extraDeductions: [
                ...value.extraDeductions,
                row
            ]
        });
    };
    const updateRow = (id, partial)=>{
        onChange({
            ...value,
            extraDeductions: value.extraDeductions.map((r)=>r.id === id ? {
                    ...r,
                    ...partial
                } : r)
        });
    };
    const removeRow = (id)=>{
        onChange({
            ...value,
            extraDeductions: value.extraDeductions.filter((r)=>r.id !== id)
        });
    };
    const resetToDefaults = ()=>{
        onChange({
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simple$2d$salary$2d$calculator$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultSimpleSalaryInput"],
            extraDeductions: []
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-2xl border border-navy-200/60 bg-white p-5 shadow-sm md:p-7", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "min-w-0 flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "font-display text-lg font-bold text-navy-800 md:text-xl",
                                children: "Salary details"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                                lineNumber: 137,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-xs text-navy-500 leading-relaxed",
                                children: [
                                    "Enter ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "font-semibold text-navy-700",
                                        children: "total CTC"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                                        lineNumber: 141,
                                        columnNumber: 19
                                    }, this),
                                    " ",
                                    "to fill fixed pay and clear variable; add variable if part of your package—or edit fixed/variable directly so totals stay in sync."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        variant: "ghost",
                        size: "xs",
                        onClick: resetToDefaults,
                        className: "shrink-0 gap-1 text-[11px] font-semibold text-navy-400 hover:bg-navy-100/80 hover:text-navy-700",
                        "aria-label": "Reset salary details to defaults",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                className: "size-3 opacity-80",
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                                lineNumber: 154,
                                columnNumber: 11
                            }, this),
                            "Reset"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                        lineNumber: 146,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 space-y-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                        className: "text-navy-700",
                        children: "Tax regime"
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RegimeSwitcher, {
                        value: value.taxRegime,
                        onChange: (taxRegime)=>patch({
                                taxRegime
                            })
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[11px] leading-snug text-navy-500",
                        children: [
                            "In-hand and ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium text-navy-700",
                                children: "TDS estimates"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                                lineNumber: 166,
                                columnNumber: 23
                            }, this),
                            " ",
                            "in the summary follow this regime (Old vs New slabs)."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-navy-200/80 bg-navy-50/40 p-4 md:p-5",
                        "aria-labelledby": "total-ctc-heading",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                id: "total-ctc-heading",
                                className: "text-sm font-bold text-navy-900",
                                children: "Total package (CTC)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-[11px] text-navy-500 leading-snug",
                                children: "Annual cash compensation (fixed + variable). Updating this sets fixed to the full amount and clears variable until you add it."
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "annual-ctc-total",
                                        className: "text-navy-800",
                                        children: "Annual CTC"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                                        lineNumber: 187,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$inr$2d$money$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InrMoneyInput"], {
                                        ref: annualCtcInputRef,
                                        id: "annual-ctc-total",
                                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simple$2d$salary$2d$calculator$2f$sync$2d$compensation$2d$split$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["annualPackageTotal"])(value.annualFixedPay, value.annualVariablePay),
                                        onCommit: (n)=>{
                                            const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simple$2d$salary$2d$calculator$2f$sync$2d$compensation$2d$split$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reconcileAfterTotalCtc"])(n);
                                            onChange({
                                                ...value,
                                                annualFixedPay: next.annualFixedPay,
                                                annualVariablePay: next.annualVariablePay
                                            });
                                        },
                                        className: "mt-1.5",
                                        "aria-label": "Annual total CTC"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                                        lineNumber: 190,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1.5 text-[11px] tabular-nums text-navy-400",
                                        children: [
                                            "Fixed ₹",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatIndianNumber"])(value.annualFixedPay),
                                            " + variable ₹",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatIndianNumber"])(value.annualVariablePay),
                                            " = ₹",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatIndianNumber"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simple$2d$salary$2d$calculator$2f$sync$2d$compensation$2d$split$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["annualPackageTotal"])(value.annualFixedPay, value.annualVariablePay))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                                        lineNumber: 208,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                                lineNumber: 186,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-teal-200/80 bg-teal-50/25 p-4 md:p-5",
                        "aria-labelledby": "fixed-pay-heading",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                id: "fixed-pay-heading",
                                className: "text-sm font-bold text-teal-900",
                                children: "Fixed pay"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                                lineNumber: 225,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-[11px] text-teal-900/70 leading-snug",
                                children: "Core salary you can treat as dependable monthly cash (before statutory deductions and TDS)."
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                                lineNumber: 231,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "annual-fixed",
                                        className: "text-navy-800",
                                        children: "Annual fixed pay"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                                        lineNumber: 236,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$inr$2d$money$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InrMoneyInput"], {
                                        id: "annual-fixed",
                                        value: value.annualFixedPay,
                                        onCommit: (n)=>{
                                            const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simple$2d$salary$2d$calculator$2f$sync$2d$compensation$2d$split$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reconcileAfterFixedPay"])(n, value.annualFixedPay, value.annualVariablePay);
                                            onChange({
                                                ...value,
                                                annualFixedPay: next.annualFixedPay,
                                                annualVariablePay: next.annualVariablePay
                                            });
                                        },
                                        className: "mt-1.5",
                                        "aria-label": "Annual fixed pay"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                                        lineNumber: 239,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                                lineNumber: 235,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-xl border border-dashed border-amber-300/90 bg-amber-50/30 p-4 md:p-5",
                        "aria-labelledby": "variable-pay-heading",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                id: "variable-pay-heading",
                                className: "text-sm font-bold text-amber-950",
                                children: "Variable pay"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                                lineNumber: 264,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-[11px] text-amber-950/75 leading-snug",
                                children: 'Variable CTC, performance bonus, or incentives—often not paid every month and not guaranteed. We still spread it over 12 months for an "illustrative" in-hand next to your fixed-only number.'
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                                lineNumber: 270,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "annual-variable",
                                        className: "text-navy-800",
                                        children: "Annual variable pay (expected)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                                        lineNumber: 276,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$inr$2d$money$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InrMoneyInput"], {
                                        id: "annual-variable",
                                        value: value.annualVariablePay,
                                        onCommit: (n)=>{
                                            const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simple$2d$salary$2d$calculator$2f$sync$2d$compensation$2d$split$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reconcileAfterVariablePay"])(n, value.annualFixedPay, value.annualVariablePay);
                                            onChange({
                                                ...value,
                                                annualFixedPay: next.annualFixedPay,
                                                annualVariablePay: next.annualVariablePay
                                            });
                                        },
                                        className: "mt-1.5",
                                        "aria-label": "Annual variable pay"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                                        lineNumber: 279,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                                lineNumber: 275,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                        lineNumber: 260,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-navy-100 pt-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-semibold text-navy-800",
                                children: "Standard monthly deductions"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                                lineNumber: 301,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 grid gap-4 sm:grid-cols-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "prof-tax",
                                                className: "text-navy-700",
                                                children: "Professional tax"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                                                lineNumber: 306,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$inr$2d$money$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InrMoneyInput"], {
                                                id: "prof-tax",
                                                value: value.monthlyProfessionalTax,
                                                onCommit: (n)=>patch({
                                                        monthlyProfessionalTax: n
                                                    }),
                                                deductionStyle: true,
                                                className: "mt-1.5",
                                                "aria-label": "Monthly professional tax"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                                                lineNumber: 309,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                                        lineNumber: 305,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "emp-pf",
                                                className: "text-navy-700",
                                                children: "Employee PF"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                                                lineNumber: 319,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$inr$2d$money$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InrMoneyInput"], {
                                                id: "emp-pf",
                                                value: value.monthlyEmployeePf,
                                                onCommit: (n)=>patch({
                                                        monthlyEmployeePf: n
                                                    }),
                                                deductionStyle: true,
                                                className: "mt-1.5",
                                                "aria-label": "Monthly employee PF"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                                                lineNumber: 322,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                                        lineNumber: 318,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "er-pf",
                                                className: "text-navy-700",
                                                children: "Employer PF (monthly)"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                                                lineNumber: 332,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$inr$2d$money$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InrMoneyInput"], {
                                                id: "er-pf",
                                                value: value.monthlyEmployerPf,
                                                onCommit: (n)=>patch({
                                                        monthlyEmployerPf: n
                                                    }),
                                                className: "mt-1.5",
                                                "aria-label": "Monthly employer PF contribution"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                                                lineNumber: 335,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mt-1 text-[11px] text-navy-400",
                                                children: "Does not reduce in-hand; shown in the composition chart as part of your package."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                                                lineNumber: 342,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                                        lineNumber: 331,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                                lineNumber: 304,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                        lineNumber: 300,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-navy-100 pt-5",
                        children: [
                            value.extraDeductions.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-4 flex flex-col gap-2 rounded-xl border border-navy-100 bg-navy-50/40 p-3 sm:flex-row sm:items-end",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "min-w-0 flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    className: "text-xs text-navy-600",
                                                    children: "Label"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                                                    lineNumber: 357,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    value: row.label,
                                                    onChange: (e)=>updateRow(row.id, {
                                                            label: e.target.value
                                                        }),
                                                    className: "mt-1",
                                                    "aria-label": "Deduction label"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                                                    lineNumber: 358,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                                            lineNumber: 356,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full sm:w-44",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                    className: "text-xs text-navy-600",
                                                    children: "Monthly"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                                                    lineNumber: 366,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$inr$2d$money$2d$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InrMoneyInput"], {
                                                    value: row.monthlyAmount,
                                                    onCommit: (n)=>updateRow(row.id, {
                                                            monthlyAmount: n
                                                        }),
                                                    deductionStyle: true,
                                                    className: "mt-1",
                                                    "aria-label": `Monthly amount for ${row.label}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                                                    lineNumber: 367,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                                            lineNumber: 365,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>removeRow(row.id),
                                            className: "flex h-8 w-8 shrink-0 items-center justify-center self-end rounded-lg text-navy-400 transition-colors hover:bg-danger-50 hover:text-danger-600",
                                            "aria-label": "Remove deduction",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                className: "size-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                                                lineNumber: 381,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                                            lineNumber: 375,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, row.id, true, {
                                    fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                                    lineNumber: 352,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: addDeduction,
                                className: "inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                        className: "size-4",
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                                        lineNumber: 390,
                                        columnNumber: 13
                                    }, this),
                                    "Add deduction"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                                lineNumber: 385,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                        lineNumber: 350,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
                lineNumber: 171,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-form.tsx",
        lineNumber: 129,
        columnNumber: 5
    }, this);
}
_c1 = SalaryCalculatorForm;
var _c, _c1;
__turbopack_context__.k.register(_c, "RegimeSwitcher");
__turbopack_context__.k.register(_c1, "SalaryCalculatorForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RegimeTaxSlabReferenceCard",
    ()=>RegimeTaxSlabReferenceCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$tax$2d$slabs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/constants/tax-slabs.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$calculate$2d$tax$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/calculate-tax.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/format-currency.ts [app-client] (ecmascript)");
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
function slabIncomeLabel(slab, index) {
    if (slab.max === Number.POSITIVE_INFINITY) {
        return `Above ₹${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatIndianNumber"])(slab.min - 1)}`;
    }
    if (index === 0 && slab.min === 0) {
        return `Up to ₹${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatIndianNumber"])(slab.max)}`;
    }
    return `₹${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatIndianNumber"])(slab.min)} – ₹${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatIndianNumber"])(slab.max)}`;
}
function slabRateLabel(rate) {
    if (rate === 0) return "Nil";
    return `${Math.round(rate * 100)}%`;
}
function slabFillTint(rate, isOld) {
    if (rate <= 0) return "bg-navy-200/80";
    if (isOld) {
        if (rate <= 0.05) return "bg-amber-400/90";
        if (rate <= 0.2) return "bg-amber-500/95";
        return "bg-amber-600/95";
    }
    if (rate <= 0.05) return "bg-teal-400/90";
    if (rate <= 0.1) return "bg-teal-500/90";
    if (rate <= 0.15) return "bg-teal-600/90";
    if (rate <= 0.2) return "bg-teal-700/90";
    if (rate <= 0.25) return "bg-emerald-700/90";
    return "bg-emerald-800/95";
}
const motionFade = {
    initial: {
        opacity: 0,
        y: 8
    },
    animate: {
        opacity: 1,
        y: 0
    },
    exit: {
        opacity: 0,
        y: -6
    },
    transition: {
        duration: 0.22,
        ease: [
            0.22,
            1,
            0.36,
            1
        ]
    }
};
function RegimeTaxSlabReferenceCard({ regime, engineNotes = "simple", className, grossAnnualSalary, oldRegimeAdditionalDeductions = 0 }) {
    _s();
    const isOld = regime === "old";
    const slabs = isOld ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$tax$2d$slabs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OLD_REGIME_SLABS"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$tax$2d$slabs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NEW_REGIME_SLABS"];
    const shell = isOld ? "border-navy-200/70 from-amber-50/45 via-white to-white" : "border-navy-200/70 from-teal-50/40 via-white to-white";
    const accentText = isOld ? "text-amber-950/90" : "text-teal-950/90";
    const title = isOld ? "Old regime" : "New regime";
    const aria = isOld ? "Old tax regime breakdown for FY 2025-26" : "New tax regime breakdown for FY 2025-26";
    const viz = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "RegimeTaxSlabReferenceCard.useMemo[viz]": ()=>{
            if (grossAnnualSalary == null || grossAnnualSalary <= 0) return null;
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$calculate$2d$tax$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildRegimeVisualizationModel"])(grossAnnualSalary, regime, oldRegimeAdditionalDeductions);
        }
    }["RegimeTaxSlabReferenceCard.useMemo[viz]"], [
        grossAnnualSalary,
        regime,
        oldRegimeAdditionalDeductions
    ]);
    const markerPercent = viz && viz.totalVisualSpan > 0 ? Math.min(100, Math.max(0, viz.taxableIncome / viz.totalVisualSpan * 100)) : 0;
    const insight = viz && viz.taxableIncome <= 0 ? "After standard deduction and (for old regime) illustrative adjustments, taxable income is nil in this model." : viz && viz.topSlabIndex >= 0 ? (()=>{
        const s = viz.slabs[viz.topSlabIndex];
        const a = viz.allocations[viz.topSlabIndex];
        const rateLabel = slabRateLabel(s.rate);
        return `Taxable income ends in the ${rateLabel} slab. ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrencyCompact"])(a)} sits in this bracket${viz.topSlabIncomeSharePercent > 0 ? ` — about ${viz.topSlabIncomeSharePercent}% of your taxable income.` : "."}`;
    })() : null;
    const footSimple = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-1 text-[10px] leading-snug text-navy-500",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold text-navy-600",
                        children: "Taxable:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    " cash minus std. deduction ₹",
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatIndianNumber"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$tax$2d$slabs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STANDARD_DEDUCTION"]),
                    engineNotes === "breakdown" && isOld ? ", PF + illustrative ₹1.5L (old)" : "",
                    ".",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-navy-300",
                        children: "·"
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                        lineNumber: 131,
                        columnNumber: 9
                    }, this),
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold text-navy-600",
                        children: "TDS:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this),
                    " slabs +",
                    " ",
                    Math.round(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$tax$2d$slabs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CESS_RATE"] * 100),
                    "% cess; 87A if below",
                    " ",
                    isOld ? `₹${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatIndianNumber"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$tax$2d$slabs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REBATE_THRESHOLD_OLD"])}` : `₹${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatIndianNumber"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$tax$2d$slabs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REBATE_THRESHOLD_NEW"])}`,
                    "."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[9px] text-navy-400",
                children: "Indicative — not tax advice."
            }, void 0, false, {
                fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
    const footBreakdown = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-1 text-[10px] leading-snug text-navy-500",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold text-navy-600",
                        children: "Model:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this),
                    " cash earnings → std. deduction",
                    isOld ? ` → PF + ₹${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatIndianNumber"])(150_000)} → slabs` : " → slabs",
                    ".",
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-navy-300",
                        children: "·"
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this),
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold text-navy-600",
                        children: "TDS card:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    " same walk +",
                    " ",
                    Math.round(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$tax$2d$slabs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CESS_RATE"] * 100),
                    "% cess",
                    isOld ? `; 87A ≤₹${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatIndianNumber"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$tax$2d$slabs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REBATE_MAX_OLD"])} below ₹${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatIndianNumber"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$tax$2d$slabs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REBATE_THRESHOLD_OLD"])}` : `; 87A ≤₹${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatIndianNumber"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$tax$2d$slabs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REBATE_MAX_NEW"])} below ₹${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatIndianNumber"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$tax$2d$slabs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REBATE_THRESHOLD_NEW"])}`,
                    "."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[9px] text-navy-400",
                children: "Estimates — not tax advice."
            }, void 0, false, {
                fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                lineNumber: 162,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
        lineNumber: 146,
        columnNumber: 5
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-xl border bg-gradient-to-b p-3 shadow-sm shadow-navy-900/[0.03] sm:p-3.5", shell, className),
        "aria-label": aria,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    mode: "wait",
                    initial: false,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        ...motionFade,
                        className: "min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-[11px] font-bold uppercase tracking-[0.07em] leading-none", accentText),
                                children: [
                                    title,
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-navy-500",
                                        children: "· FY 2025-26"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                                        lineNumber: 185,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                                lineNumber: 178,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1.5 text-[10px] leading-snug text-navy-500",
                                children: "AY 2026-27 · resident slabs = in-app TDS basis"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                                lineNumber: 187,
                                columnNumber: 15
                            }, this),
                            !viz ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-[9px] leading-snug text-navy-500",
                                children: isOld ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium text-navy-600",
                                            children: "Old regime"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                                            lineNumber: 195,
                                            columnNumber: 23
                                        }, this),
                                        " ",
                                        "— four taxable-income slabs (deductions in real life are wider than this calculator path)."
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium text-navy-600",
                                            children: "New regime"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                                            lineNumber: 203,
                                            columnNumber: 23
                                        }, this),
                                        " ",
                                        "— seven concessional slabs; no separate deduction stack in this model beyond std. deduction."
                                    ]
                                }, void 0, true)
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                                lineNumber: 192,
                                columnNumber: 17
                            }, this) : null,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 min-w-0",
                                children: viz ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-stretch gap-2.5 rounded-md bg-white/70 px-2.5 py-2 ring-1 ring-navy-900/[0.05]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "min-w-0 flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[9px] font-semibold uppercase tracking-wide text-navy-500",
                                                            children: "Taxable income"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                                                            lineNumber: 218,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[13px] font-bold tabular-nums leading-tight text-navy-900",
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(viz.taxableIncome)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                                                            lineNumber: 221,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-px shrink-0 bg-navy-200/60",
                                                    "aria-hidden": true
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                                                    lineNumber: 225,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "min-w-0 flex-1 text-right",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[9px] font-semibold uppercase tracking-wide text-navy-500",
                                                            children: "Est. tax / yr"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                                                            lineNumber: 227,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[13px] font-bold tabular-nums leading-tight text-navy-900",
                                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(viz.estimatedAnnualTax)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                                                            lineNumber: 230,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-0.5 text-[9px] leading-none text-navy-500",
                                                            children: [
                                                                "~",
                                                                viz.effectiveRatePercent,
                                                                "% gross"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                                                            lineNumber: 233,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                                                    lineNumber: 226,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                                            lineNumber: 216,
                                            columnNumber: 15
                                        }, this),
                                        insight ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-2.5 rounded-md px-2.5 py-1.5 text-[10px] font-medium leading-snug", isOld ? "bg-amber-100/40 text-amber-950/95" : "bg-teal-100/35 text-teal-950/95"),
                                            children: insight
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                                            lineNumber: 240,
                                            columnNumber: 17
                                        }, this) : null,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-1.5 text-[9px] font-semibold uppercase tracking-wide text-navy-400",
                                                    children: [
                                                        "Utilization",
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-normal normal-case text-navy-400",
                                                            children: "· bracket width · fill · line = income end"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                                                            lineNumber: 255,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                                                    lineNumber: 253,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex h-6 w-full overflow-hidden rounded border border-navy-200/50 bg-navy-100/40",
                                                            role: "img",
                                                            "aria-label": "Tax slab utilization",
                                                            children: viz.slabs.map((slab, i)=>{
                                                                const span = viz.visualSpans[i] ?? 1;
                                                                const alloc = viz.allocations[i] ?? 0;
                                                                const pctOfBar = span / viz.totalVisualSpan * 100;
                                                                const fillPct = span > 0 ? Math.min(100, alloc / span * 100) : 0;
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "relative h-full border-r border-navy-200/40 last:border-r-0",
                                                                    style: {
                                                                        width: `${pctOfBar}%`
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute bottom-0 left-0 top-0 opacity-35", slabFillTint(slab.rate, isOld)),
                                                                            style: {
                                                                                width: "100%"
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                                                                            lineNumber: 277,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute bottom-0 left-0 top-0 transition-[width] duration-300", slabFillTint(slab.rate, isOld)),
                                                                            style: {
                                                                                width: `${fillPct}%`
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                                                                            lineNumber: 284,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, `seg-${slab.min}-${slab.max}-${i}`, true, {
                                                                    fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                                                                    lineNumber: 272,
                                                                    columnNumber: 25
                                                                }, this);
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                                                            lineNumber: 260,
                                                            columnNumber: 19
                                                        }, this),
                                                        viz.taxableIncome > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "pointer-events-none absolute -top-1 bottom-0 w-px bg-navy-900",
                                                            style: {
                                                                left: `calc(${markerPercent}% - 0.5px)`,
                                                                boxShadow: "0 0 0 2px rgba(255,255,255,0.95)"
                                                            },
                                                            "aria-hidden": true
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                                                            lineNumber: 296,
                                                            columnNumber: 21
                                                        }, this) : null
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                                                    lineNumber: 259,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                                            lineNumber: 252,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2.5 border-t border-navy-100/90 pt-2.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-2 flex items-baseline justify-between gap-2 text-[9px] font-semibold uppercase tracking-wide text-navy-500",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Slab"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                                                            lineNumber: 310,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Rate · Used"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                                                            lineNumber: 311,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                                                    lineNumber: 309,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("space-y-0.5 overflow-y-auto overscroll-contain", "max-h-[8.75rem] min-h-0 sm:max-h-[9.25rem]"),
                                                    children: viz.slabs.map((slab, i)=>{
                                                        const alloc = viz.allocations[i] ?? 0;
                                                        const active = alloc > 0;
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-between gap-2 rounded-md px-1.5 py-1 text-[10px] leading-snug", active ? isOld ? "bg-amber-50/70" : "bg-teal-50/55" : "text-navy-600/75"),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "min-w-0 font-medium tabular-nums text-navy-800",
                                                                    children: slabIncomeLabel(slab, i)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                                                                    lineNumber: 334,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("shrink-0 text-right font-semibold tabular-nums", active ? isOld ? "text-amber-950" : "text-teal-900" : "text-navy-500"),
                                                                    children: [
                                                                        slabRateLabel(slab.rate),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "font-medium text-navy-500",
                                                                            children: " · "
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                                                                            lineNumber: 348,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: active ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrencyCompact"])(alloc) : "—"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                                                                            lineNumber: 349,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                                                                    lineNumber: 337,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, `row-${slab.min}-${slab.max}-${i}`, true, {
                                                            fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                                                            lineNumber: 323,
                                                            columnNumber: 23
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                                                    lineNumber: 313,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                                            lineNumber: 308,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex min-h-[16.5rem] flex-col rounded-lg bg-white/75 px-3 py-2.5 shadow-sm shadow-navy-900/[0.04]", "ring-1 ring-navy-900/[0.06]"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-2 flex items-baseline justify-between gap-3 border-b border-navy-100/90 pb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[9px] font-semibold uppercase tracking-wide text-navy-500",
                                                    children: "Slab (₹/yr)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                                                    lineNumber: 367,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[9px] font-semibold uppercase tracking-wide text-navy-500",
                                                    children: "Rate"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                                                    lineNumber: 370,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                                            lineNumber: 366,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("min-h-[9.75rem] flex-1 space-y-px overflow-y-auto overscroll-contain", "max-h-[10.5rem] sm:max-h-[11rem]"),
                                            children: slabs.map((slab, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-between gap-2 rounded-md px-2 py-1.5 text-[10px] leading-snug", i % 2 === 1 ? "bg-navy-50/45" : "bg-transparent"),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "min-w-0 font-medium tabular-nums text-navy-800",
                                                            children: slabIncomeLabel(slab, i)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                                                            lineNumber: 388,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "shrink-0 font-semibold tabular-nums text-navy-700",
                                                            children: slabRateLabel(slab.rate)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                                                            lineNumber: 391,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, `ref-${slab.min}-${slab.max}-${slab.rate}`, true, {
                                                    fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                                                    lineNumber: 381,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                                            lineNumber: 374,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-auto shrink-0 border-t border-navy-100/90 pt-2.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-[10px] leading-snug text-navy-600",
                                                    children: engineNotes === "simple" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold text-navy-700",
                                                                children: "FY 2025-26 reference."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                                                                lineNumber: 401,
                                                                columnNumber: 23
                                                            }, this),
                                                            " ",
                                                            "In-hand and tax above follow these slabs after ₹",
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatIndianNumber"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$constants$2f$tax$2d$slabs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STANDARD_DEDUCTION"]),
                                                            " standard deduction."
                                                        ]
                                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold text-navy-700",
                                                                children: "Premium breakdown."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                                                                lineNumber: 409,
                                                                columnNumber: 23
                                                            }, this),
                                                            " ",
                                                            "Set cash earnings in the table to see taxable income, annual tax, and slab utilization in this card."
                                                        ]
                                                    }, void 0, true)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                                                    lineNumber: 398,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1.5 text-[9px] leading-snug text-navy-400",
                                                    children: engineNotes === "simple" ? "Slab rates shown are before cess; your summary applies 4% cess and eligible rebate." : "Regime updates this reference; utilization appears when the breakdown has cash earnings."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                                                    lineNumber: 417,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                                            lineNumber: 397,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                                    lineNumber: 360,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                                lineNumber: 213,
                                columnNumber: 15
                            }, this)
                        ]
                    }, regime, true, {
                        fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                        lineNumber: 177,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                    lineNumber: 176,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                lineNumber: 175,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 border-t border-navy-100/70 pt-2.5",
                children: engineNotes === "breakdown" ? footBreakdown : footSimple
            }, void 0, false, {
                fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
                lineNumber: 430,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx",
        lineNumber: 167,
        columnNumber: 5
    }, this);
}
_s(RegimeTaxSlabReferenceCard, "MsP36KRWnYKVE2CKzs/K0bUXvy0=");
_c = RegimeTaxSlabReferenceCard;
var _c;
__turbopack_context__.k.register(_c, "RegimeTaxSlabReferenceCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/features/salary-calculator/simple-regime-tax-reference-card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SimpleRegimeTaxReferenceCard",
    ()=>SimpleRegimeTaxReferenceCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$salary$2f$regime$2d$tax$2d$slab$2d$reference$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/salary/regime-tax-slab-reference-card.tsx [app-client] (ecmascript)");
"use client";
;
;
function SimpleRegimeTaxReferenceCard({ regime, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$salary$2f$regime$2d$tax$2d$slab$2d$reference$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RegimeTaxSlabReferenceCard"], {
        regime: regime,
        engineNotes: "simple",
        className: className
    }, void 0, false, {
        fileName: "[project]/src/components/features/salary-calculator/simple-regime-tax-reference-card.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = SimpleRegimeTaxReferenceCard;
var _c;
__turbopack_context__.k.register(_c, "SimpleRegimeTaxReferenceCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/features/salary-calculator/salary-composition-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SalaryCompositionPanel",
    ()=>SalaryCompositionPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/format-currency.ts [app-client] (ecmascript)");
"use client";
;
;
;
const COLORS = {
    takeHome: "#0d9488",
    deductions: "#fb7185",
    employer: "#a78bfa"
};
function DonutChart({ takeHomePct, deductionsPct, employerPct, size = 88 }) {
    const a = Math.max(0, takeHomePct);
    const b = Math.max(0, deductionsPct);
    const c = Math.max(0, employerPct);
    const sum = a + b + c;
    if (sum < 0.001) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "shrink-0 rounded-full border-2 border-dashed border-navy-200 bg-navy-50/50",
            style: {
                width: size,
                height: size
            },
            "aria-hidden": true
        }, void 0, false, {
            fileName: "[project]/src/components/features/salary-calculator/salary-composition-panel.tsx",
            lineNumber: 37,
            columnNumber: 7
        }, this);
    }
    const p1 = a / sum * 100;
    const p2 = (a + b) / sum * 100;
    // SVG donut approach — more control over stroke width and gaps
    const strokeWidth = 10;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const center = size / 2;
    const seg = (from, to)=>{
        const start = from / 100 * circumference;
        const length = (to - from) / 100 * circumference;
        // Small gap between segments
        const gap = circumference * 0.012;
        return {
            dasharray: `${Math.max(0, length - gap)} ${circumference - Math.max(0, length - gap)}`,
            dashoffset: -start
        };
    };
    const segs = [
        {
            id: "take",
            color: COLORS.takeHome,
            ...seg(0, p1)
        },
        {
            id: "ded",
            color: COLORS.deductions,
            ...seg(p1, p2)
        },
        {
            id: "er",
            color: COLORS.employer,
            ...seg(p2, 100)
        }
    ].filter((s)=>Number(s.dasharray.split(" ")[0]) > 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative shrink-0",
        style: {
            width: size,
            height: size
        },
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                width: size,
                height: size,
                viewBox: `0 0 ${size} ${size}`,
                className: "-rotate-90",
                style: {
                    display: "block"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: center,
                        cy: center,
                        r: radius,
                        fill: "none",
                        stroke: "#e2e8f0",
                        strokeWidth: strokeWidth
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/salary-calculator/salary-composition-panel.tsx",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this),
                    segs.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: center,
                            cy: center,
                            r: radius,
                            fill: "none",
                            stroke: s.color,
                            strokeWidth: strokeWidth,
                            strokeDasharray: s.dasharray,
                            strokeDashoffset: s.dashoffset,
                            strokeLinecap: "butt"
                        }, s.id, false, {
                            fileName: "[project]/src/components/features/salary-calculator/salary-composition-panel.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/salary-calculator/salary-composition-panel.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-full bg-white shadow-sm ring-1 ring-navy-100/60",
                    style: {
                        width: size * 0.52,
                        height: size * 0.52
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/features/salary-calculator/salary-composition-panel.tsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/features/salary-calculator/salary-composition-panel.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/features/salary-calculator/salary-composition-panel.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
_c = DonutChart;
function SalaryCompositionPanel({ takeHomeShare, employeeDeductionsShare, employerPfShare, className }) {
    const t = Math.max(0, takeHomeShare);
    const d = Math.max(0, employeeDeductionsShare);
    const e = Math.max(0, employerPfShare);
    const sum = t + d + e;
    const safe = sum > 0 ? 1 / sum : 0;
    const pt = t * safe * 100;
    const pd = d * safe * 100;
    const pe = e * safe * 100;
    const rows = [
        {
            key: "take",
            label: "Take-home",
            sub: "of monthly viz. total",
            pct: pt,
            color: COLORS.takeHome,
            dotClass: "bg-teal-500"
        },
        {
            key: "ded",
            label: "Deductions + tax",
            sub: "of monthly viz. total",
            pct: pd,
            color: COLORS.deductions,
            dotClass: "bg-rose-400"
        },
        {
            key: "er",
            label: "Employer PF",
            sub: "in package (viz. total)",
            pct: pe,
            color: COLORS.employer,
            dotClass: "bg-violet-400"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-2xl border border-navy-200/50 bg-white p-5 shadow-sm", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-sm font-semibold text-navy-800",
                children: "Package composition"
            }, void 0, false, {
                fileName: "[project]/src/components/features/salary-calculator/salary-composition-panel.tsx",
                lineNumber: 170,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-0.5 text-[10px] leading-snug text-navy-400",
                children: "Uses the same monthly basis as your illustrative in-hand (fixed + variable gross + employer PF). Visual split only—not a payslip."
            }, void 0, false, {
                fileName: "[project]/src/components/features/salary-calculator/salary-composition-panel.tsx",
                lineNumber: 173,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex h-2.5 w-full overflow-hidden rounded-full bg-navy-100",
                role: "img",
                "aria-label": "Package split: take-home, deductions including tax, employer PF",
                children: [
                    pt > 0.5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-full transition-[width] duration-500 ease-out",
                        style: {
                            width: `${pt}%`,
                            backgroundColor: COLORS.takeHome
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/salary-calculator/salary-composition-panel.tsx",
                        lineNumber: 185,
                        columnNumber: 11
                    }, this),
                    pd > 0.5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-full transition-[width] duration-500 ease-out",
                        style: {
                            width: `${pd}%`,
                            backgroundColor: COLORS.deductions
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/salary-calculator/salary-composition-panel.tsx",
                        lineNumber: 191,
                        columnNumber: 11
                    }, this),
                    pe > 0.5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-full transition-[width] duration-500 ease-out",
                        style: {
                            width: `${pe}%`,
                            backgroundColor: COLORS.employer
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/salary-calculator/salary-composition-panel.tsx",
                        lineNumber: 197,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/salary-calculator/salary-composition-panel.tsx",
                lineNumber: 179,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DonutChart, {
                        takeHomePct: pt,
                        deductionsPct: pd,
                        employerPct: pe,
                        size: 88
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/salary-calculator/salary-composition-panel.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "min-w-0 flex-1 space-y-2.5 self-center",
                        children: rows.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex items-center justify-between gap-3 border-b border-navy-50 pb-2 last:border-0 last:pb-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex min-w-0 items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("size-2 shrink-0 rounded-full", row.dotClass),
                                                "aria-hidden": true
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/features/salary-calculator/salary-composition-panel.tsx",
                                                lineNumber: 219,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-semibold text-navy-800 leading-tight",
                                                        children: row.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/features/salary-calculator/salary-composition-panel.tsx",
                                                        lineNumber: 224,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-[10px] text-navy-400 leading-tight truncate",
                                                        children: row.sub
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/features/salary-calculator/salary-composition-panel.tsx",
                                                        lineNumber: 227,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/features/salary-calculator/salary-composition-panel.tsx",
                                                lineNumber: 223,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/features/salary-calculator/salary-composition-panel.tsx",
                                        lineNumber: 218,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "shrink-0 text-sm font-bold tabular-nums text-navy-700",
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$format$2d$currency$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPercentage"])(row.pct, 0)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/salary-calculator/salary-composition-panel.tsx",
                                        lineNumber: 232,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, row.key, true, {
                                fileName: "[project]/src/components/features/salary-calculator/salary-composition-panel.tsx",
                                lineNumber: 214,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/salary-calculator/salary-composition-panel.tsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/salary-calculator/salary-composition-panel.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/features/salary-calculator/salary-composition-panel.tsx",
        lineNumber: 164,
        columnNumber: 5
    }, this);
}
_c1 = SalaryCompositionPanel;
var _c, _c1;
__turbopack_context__.k.register(_c, "DonutChart");
__turbopack_context__.k.register(_c1, "SalaryCompositionPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/features/salary-calculator/upgrade-sheet.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UpgradeSheet",
    ()=>UpgradeSheet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/crown.js [app-client] (ecmascript) <export default as Crown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/sheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
function UpgradeSheet({ open, onOpenChange, tool, paywallHref }) {
    const Icon = tool?.icon ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sheet"], {
        open: open,
        onOpenChange: onOpenChange,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetContent"], {
            side: "right",
            className: "w-full sm:max-w-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetHeader"], {
                    className: "border-b border-navy-100 pb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex size-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-600",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                className: "size-6",
                                strokeWidth: 2,
                                "aria-hidden": true
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/salary-calculator/upgrade-sheet.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/salary-calculator/upgrade-sheet.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetTitle"], {
                            className: "text-h3 text-navy-800 pr-8",
                            children: tool ? `Unlock ${tool.title}` : "Unlock Premium"
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/salary-calculator/upgrade-sheet.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetDescription"], {
                            className: "text-sm text-navy-600 leading-relaxed",
                            children: tool ? tool.sheetDescription : "Premium adds planning tools that build on your in-hand estimate—forecasts, EMI fit, and monthly allocation."
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/salary-calculator/upgrade-sheet.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/features/salary-calculator/upgrade-sheet.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-1 flex-col gap-4 px-4 py-4 text-sm text-navy-600",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl border border-dashed border-teal-200/80 bg-teal-50/40 p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2 text-teal-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__["Crown"], {
                                            className: "size-4 shrink-0",
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/salary-calculator/upgrade-sheet.tsx",
                                            lineNumber: 52,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-sm",
                                            children: "What you get"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/salary-calculator/upgrade-sheet.tsx",
                                            lineNumber: 53,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/features/salary-calculator/upgrade-sheet.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "mt-3 space-y-2 text-xs leading-relaxed text-navy-600",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Wealth forecast with growth and savings sliders"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/salary-calculator/upgrade-sheet.tsx",
                                            lineNumber: 56,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "EMI analyzer tied to your in-hand baseline"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/salary-calculator/upgrade-sheet.tsx",
                                            lineNumber: 57,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Monthly planner for spend vs surplus"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/salary-calculator/upgrade-sheet.tsx",
                                            lineNumber: 58,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/features/salary-calculator/upgrade-sheet.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/features/salary-calculator/upgrade-sheet.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-navy-500 leading-relaxed",
                            children: "Your free calculator stays fully usable—upgrade only when you want deeper planning on top of these numbers."
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/salary-calculator/upgrade-sheet.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/features/salary-calculator/upgrade-sheet.tsx",
                    lineNumber: 49,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SheetFooter"], {
                    className: "border-t border-navy-100 gap-2 sm:flex-col sm:space-x-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: paywallHref,
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"])({
                                variant: "default"
                            }), "h-11 w-full justify-center rounded-full bg-teal-600 hover:bg-teal-700"),
                            onClick: ()=>onOpenChange(false),
                            children: "View upgrade options"
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/salary-calculator/upgrade-sheet.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            type: "button",
                            variant: "ghost",
                            className: "w-full text-navy-600",
                            onClick: ()=>onOpenChange(false),
                            children: "Continue with free calculator"
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/salary-calculator/upgrade-sheet.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/features/salary-calculator/upgrade-sheet.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/features/salary-calculator/upgrade-sheet.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/features/salary-calculator/upgrade-sheet.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c = UpgradeSheet;
var _c;
__turbopack_context__.k.register(_c, "UpgradeSheet");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/simple-salary-calculator/calculate-simple-salary.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateSimpleSalarySummary",
    ()=>calculateSimpleSalarySummary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$calculate$2d$tax$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils/calculate-tax.ts [app-client] (ecmascript)");
;
function clampNonNegative(n) {
    if (!Number.isFinite(n)) return 0;
    return Math.max(0, n);
}
function calculateSimpleSalarySummary(input) {
    const fixedAnnual = clampNonNegative(input.annualFixedPay);
    const variableAnnual = clampNonNegative(input.annualVariablePay);
    const totalAnnual = fixedAnnual + variableAnnual;
    const monthlyGrossFixedOnly = fixedAnnual > 0 ? fixedAnnual / 12 : 0;
    const monthlyGrossIncludingVariable = totalAnnual > 0 ? totalAnnual / 12 : 0;
    const taxFixed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$calculate$2d$tax$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateIncomeTax"])(fixedAnnual, input.taxRegime, 0);
    const taxTotal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2f$calculate$2d$tax$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateIncomeTax"])(totalAnnual, input.taxRegime, 0);
    const monthlyTaxFixed = taxFixed.monthlyTax;
    const monthlyTaxTotal = taxTotal.monthlyTax;
    const monthlyAdditionalTaxFromVariable = Math.max(0, monthlyTaxTotal - monthlyTaxFixed);
    const pt = clampNonNegative(input.monthlyProfessionalTax);
    const epf = clampNonNegative(input.monthlyEmployeePf);
    const monthlyEmployerPf = clampNonNegative(input.monthlyEmployerPf);
    const extraMonthly = input.extraDeductions.reduce((s, r)=>s + clampNonNegative(r.monthlyAmount), 0);
    const monthlyTotalDeductionsFixedBasis = pt + epf + monthlyTaxFixed + extraMonthly;
    const monthlyTotalDeductionsIncludingVariable = pt + epf + monthlyTaxTotal + extraMonthly;
    const monthlyInHandFixedOnly = clampNonNegative(monthlyGrossFixedOnly - monthlyTotalDeductionsFixedBasis);
    const monthlyInHandIncludingVariable = clampNonNegative(monthlyGrossIncludingVariable - monthlyTotalDeductionsIncludingVariable);
    const annualInHandFixedOnly = monthlyInHandFixedOnly * 12;
    const annualInHandIncludingVariable = monthlyInHandIncludingVariable * 12;
    const annualTotalDeductionsFixedBasis = monthlyTotalDeductionsFixedBasis * 12;
    const annualTotalDeductionsIncludingVariable = monthlyTotalDeductionsIncludingVariable * 12;
    const annualEmployerPf = monthlyEmployerPf * 12;
    const vizTotal = monthlyGrossIncludingVariable + monthlyEmployerPf;
    let compositionTakeHome = 0;
    let compositionEmployeeDeductions = 0;
    let compositionEmployerPf = 0;
    if (vizTotal > 0) {
        compositionTakeHome = monthlyInHandIncludingVariable / vizTotal;
        compositionEmployeeDeductions = monthlyTotalDeductionsIncludingVariable / vizTotal;
        compositionEmployerPf = monthlyEmployerPf / vizTotal;
    }
    return {
        annualFixedPay: fixedAnnual,
        annualVariablePay: variableAnnual,
        annualTotalCashComp: totalAnnual,
        monthlyGrossFixedOnly,
        monthlyGrossIncludingVariable,
        monthlyInHandFixedOnly,
        annualInHandFixedOnly,
        monthlyInHandIncludingVariable,
        annualInHandIncludingVariable,
        monthlyTotalDeductionsFixedBasis,
        monthlyTotalDeductionsIncludingVariable,
        annualTotalDeductionsFixedBasis,
        annualTotalDeductionsIncludingVariable,
        monthlyEmployerPf,
        annualEmployerPf,
        annualIncomeTaxFixedBasis: taxFixed.annualTax,
        monthlyIncomeTaxFixedBasis: monthlyTaxFixed,
        annualIncomeTaxIncludingVariable: taxTotal.annualTax,
        monthlyIncomeTaxIncludingVariable: monthlyTaxTotal,
        monthlyAdditionalTaxFromVariable,
        effectiveTaxRateFixedBasis: taxFixed.effectiveRate,
        effectiveTaxRateIncludingVariable: taxTotal.effectiveRate,
        compositionTakeHome,
        compositionEmployeeDeductions,
        compositionEmployerPf
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PremiumBlurOfferTeaser",
    ()=>PremiumBlurOfferTeaser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
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
const COPY = {
    eyebrow: "Offer comparison",
    title: "Got two offers? See which one actually pays more.",
    bodyFull: "Stop guessing. Paste both CTCs and instantly see real in-hand, tax drag, and first-year value — side by side. Know your answer before the call.",
    bodyCompact: "Stop guessing. Paste both CTCs—see in-hand, tax, and first-year value side by side before the call.",
    unlock: "Premium unlocks live offer comparison.",
    cta: "Compare My Offers"
};
const OFFER_DEMO_SCENARIOS = [
    {
        a: {
            short: "Series B",
            ctc: "₹24 LPA",
            inHand: "₹1,42,500",
            taxMo: "₹38.1K",
            y1: "₹19.2L"
        },
        b: {
            short: "Enterprise",
            ctc: "₹26 LPA",
            inHand: "₹1,38,200",
            taxMo: "₹41.4K",
            y1: "₹18.9L"
        },
        verdict: "Higher in-hand · A",
        deltaY1: "+₹4.3L"
    },
    {
        a: {
            short: "Fintech",
            ctc: "₹32 LPA",
            inHand: "₹1,88,400",
            taxMo: "₹52.2K",
            y1: "₹25.1L"
        },
        b: {
            short: "Retail HQ",
            ctc: "₹30 LPA",
            inHand: "₹1,79,800",
            taxMo: "₹48.9K",
            y1: "₹23.7L"
        },
        verdict: "Best 1Y value · A",
        deltaY1: "+₹1.4L"
    },
    {
        a: {
            short: "Growth SaaS",
            ctc: "₹45 LPA",
            inHand: "₹2,54,200",
            taxMo: "₹71.5K",
            y1: "₹33.8L"
        },
        b: {
            short: "Consulting",
            ctc: "₹42 LPA",
            inHand: "₹2,61,100",
            taxMo: "₹68.2K",
            y1: "₹34.6L"
        },
        verdict: "Tie-break on regime",
        deltaY1: "₹8.2K/mo"
    },
    {
        a: {
            short: "Unicorn",
            ctc: "₹38 LPA",
            inHand: "₹2,12,800",
            taxMo: "₹61.0K",
            y1: "₹28.4L"
        },
        b: {
            short: "MNC India",
            ctc: "₹36 LPA",
            inHand: "₹2,05,400",
            taxMo: "₹57.3K",
            y1: "₹27.1L"
        },
        verdict: "ESOP notional incl.",
        deltaY1: "+₹1.3L"
    }
];
/** Deterministic “random” demo per URL — stable SSR/client, no hydration flip. */ function scenarioIndexForPath(pathname) {
    let h = 0;
    for (const ch of pathname){
        const cp = ch.codePointAt(0) ?? 0;
        h = Math.imul(31, h) + cp;
    }
    return Math.abs(h) % OFFER_DEMO_SCENARIOS.length;
}
/** Non-readable structure: “two letters + metrics” without legible text. */ function AbstractOfferPreviewLayer({ compact }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "pointer-events-none absolute inset-0 overflow-hidden",
        "aria-hidden": true,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-[linear-gradient(165deg,rgb(240_253_250/0.85)_0%,rgb(241_245_249/0.9)_42%,rgb(248_250_252/0.95)_100%)]"
            }, void 0, false, {
                fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-[0.22]",
                style: {
                    backgroundImage: `linear-gradient(rgba(15,23,42,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(15,23,42,0.05) 1px, transparent 1px)`,
                    backgroundSize: compact ? "10px 10px" : "14px 14px"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute rounded-lg border border-navy-200/45 bg-gradient-to-b from-white/90 to-navy-100/50 shadow-sm", "left-[6%] top-[10%] w-[34%] rotate-[-2.5deg]", compact ? "h-[68%]" : "h-[52%]"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-[12%] right-[12%] top-[14%] space-y-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-1.5 w-[55%] rounded-full bg-navy-300/45"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                                lineNumber: 89,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-1 w-[88%] rounded-full bg-navy-200/40"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-1 w-[72%] rounded-full bg-navy-200/35"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-1 w-[80%] rounded-full bg-navy-200/30"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                        lineNumber: 88,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-[18%] left-[12%] right-[12%] flex gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-5 flex-1 rounded-md bg-teal-200/35"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-5 w-5 rounded-md bg-navy-200/30"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute rounded-lg border border-teal-200/50 bg-gradient-to-b from-teal-50/95 to-white/55 shadow-sm", "right-[7%] top-[16%] w-[32%] rotate-[2deg]", compact ? "h-[60%]" : "h-[46%]"),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute left-[11%] right-[11%] top-[12%] space-y-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-1.5 w-[48%] rounded-full bg-teal-400/30"
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                            lineNumber: 107,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-1 w-[90%] rounded-full bg-navy-200/38"
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-1 w-[68%] rounded-full bg-navy-200/32"
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-1 w-[76%] rounded-full bg-navy-200/28"
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-1 w-[84%] rounded-full bg-navy-200/25"
                        }, void 0, false, {
                            fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                            lineNumber: 111,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                    lineNumber: 106,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-[28%] top-[8%] h-7 w-20 rounded-lg bg-teal-300/25 blur-[3px]"
            }, void 0, false, {
                fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-[22%] bottom-[38%] h-6 w-16 rounded-md bg-navy-300/20 blur-[2px]"
            }, void 0, false, {
                fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-1/2 top-[6%] h-4 w-24 -translate-x-1/2 rounded-full bg-navy-400/15 blur-[4px]"
            }, void 0, false, {
                fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                lineNumber: 118,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-[12%] left-[20%] top-[28%] w-px bg-gradient-to-b from-transparent via-navy-300/25 to-transparent"
            }, void 0, false, {
                fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-[12%] right-[24%] top-[28%] w-px bg-gradient-to-b from-transparent via-teal-400/20 to-transparent"
            }, void 0, false, {
                fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_c = AbstractOfferPreviewLayer;
/** Peripheral “dashboard” lines — heavily blurred; suggest depth around the main table. */ function BlurredSideRail({ side, compact, seed }) {
    const nudge = (i)=>(seed + i * 7) % 5 * 1.2;
    const leftRows = [
        {
            label: "HRA / mo",
            value: `₹${(18 + nudge(0)).toFixed(1)}K`
        },
        {
            label: "PF (employee)",
            value: `${(11.2 + nudge(1) * 0.1).toFixed(1)}%`
        },
        {
            label: "Gratuity (yr)",
            value: `₹${(3.8 + nudge(2) * 0.2).toFixed(1)}L`
        },
        {
            label: "Variable weight",
            value: `${12 + nudge(3)}%`
        },
        {
            label: "Special allowance",
            value: `₹${(42 + nudge(4)).toFixed(0)}K`
        },
        {
            label: "LTA (annual)",
            value: `₹${(96 + nudge(5)).toFixed(0)}K`
        }
    ];
    const rightRows = [
        {
            label: "Joining bonus",
            value: `₹${(1.5 + nudge(0) * 0.1).toFixed(1)}L`
        },
        {
            label: "ESOP (1Y notional)",
            value: `₹${(2.4 + nudge(1) * 0.15).toFixed(1)}L`
        },
        {
            label: "TDS effective",
            value: `${(21 + nudge(2) * 0.3).toFixed(1)}%`
        },
        {
            label: "Tax regime",
            value: nudge(3) % 2 === 0 ? "New" : "Old"
        },
        {
            label: "City tier",
            value: `T${1 + nudge(4) % 3}`
        },
        {
            label: "Employer PF",
            value: `₹${(28 + nudge(5)).toFixed(0)}K/mo`
        }
    ];
    const rows = side === "left" ? leftRows : rightRows;
    const shown = compact ? rows.slice(0, 4) : rows;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pointer-events-none flex shrink-0 flex-col justify-center gap-y-2 rounded-lg border border-navy-200/50 bg-navy-100/40 px-1.5 py-2 sm:px-2", "select-none opacity-[0.62]", "blur-[4px] sm:blur-[5px]", compact ? "w-[2.65rem] sm:w-[3.25rem]" : "w-[3.1rem] sm:w-[4.75rem]", side === "right" && "items-end text-right"),
        "aria-hidden": true,
        children: shown.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(side === "right" ? "text-right" : "text-left"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("font-semibold uppercase tracking-wide text-navy-400", compact ? "text-[6px] leading-tight" : "text-[7px] sm:text-[8px]"),
                        children: row.label
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                        lineNumber: 173,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("tabular-nums font-semibold text-navy-700", compact ? "text-[8px] leading-tight" : "text-[9px] sm:text-[11px]"),
                        children: row.value
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                        lineNumber: 181,
                        columnNumber: 11
                    }, this)
                ]
            }, `${side}-${row.label}`, true, {
                fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                lineNumber: 169,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
        lineNumber: 158,
        columnNumber: 5
    }, this);
}
_c1 = BlurredSideRail;
function PremiumBlurOfferTeaser({ className, compact = false }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])() ?? "";
    const scenarioIdx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PremiumBlurOfferTeaser.useMemo[scenarioIdx]": ()=>scenarioIndexForPath(pathname)
    }["PremiumBlurOfferTeaser.useMemo[scenarioIdx]"], [
        pathname
    ]);
    const demo = OFFER_DEMO_SCENARIOS[scenarioIdx];
    const titleId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative overflow-hidden rounded-2xl border border-teal-200/50 bg-white shadow-sm", "ring-1 ring-teal-100/40", compact ? "p-4" : "p-6 sm:p-7", className),
        "aria-labelledby": titleId,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[10px] font-semibold uppercase tracking-[0.14em] text-teal-800",
                children: COPY.eyebrow
            }, void 0, false, {
                fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                id: titleId,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-2 font-display font-bold tracking-tight text-navy-900", compact ? "text-base leading-snug sm:text-lg" : "text-lg leading-snug sm:text-xl md:text-2xl"),
                children: COPY.title
            }, void 0, false, {
                fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                lineNumber: 223,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-3 text-navy-600 leading-relaxed", compact ? "text-xs sm:text-[13px]" : "text-sm sm:text-base"),
                children: compact ? COPY.bodyCompact : COPY.bodyFull
            }, void 0, false, {
                fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                lineNumber: 232,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative overflow-hidden rounded-xl border border-navy-200/60 shadow-inner", compact ? "mt-4 min-h-[15.25rem] py-2 pl-1 pr-1 sm:min-h-[16.5rem] sm:py-2.5 sm:pl-1.5 sm:pr-1.5" : "mt-5 p-2 sm:mt-6 sm:p-3"),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AbstractOfferPreviewLayer, {
                        compact: compact
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                        lineNumber: 249,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute -left-6 top-1/2 z-[2] h-24 w-16 -translate-y-1/2 rounded-full bg-teal-300/30 blur-2xl",
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                        lineNumber: 252,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute -right-5 top-1/3 z-[2] h-20 w-14 rounded-full bg-navy-300/25 blur-2xl",
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                        lineNumber: 256,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative z-[1] flex items-stretch gap-1 sm:gap-2", compact ? "min-h-[11.75rem] sm:min-h-[13.25rem]" : "min-h-[9.5rem] sm:min-h-[11rem]"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BlurredSideRail, {
                                side: "left",
                                compact: compact,
                                seed: scenarioIdx
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                                lineNumber: 269,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("relative min-w-0 flex-1 overflow-hidden rounded-lg", compact ? "py-2" : "py-3"),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("select-none px-1.5 opacity-[0.68] sm:px-3", "blur-[5px] sm:blur-[6px]"),
                                    "aria-hidden": true,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("grid grid-cols-[1fr_1fr] gap-x-2 gap-y-1 text-center", compact ? "text-[9px]" : "text-[10px] sm:text-xs"),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "col-span-2 pb-1 text-[9px] font-semibold uppercase tracking-wide text-navy-400",
                                                    children: "Sample comparison · not your data"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-lg bg-navy-50/80 py-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-semibold text-navy-500",
                                                            children: "Offer A"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                                                            lineNumber: 293,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-0.5 text-navy-600",
                                                            children: demo.a.short
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                                                            lineNumber: 294,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "tabular-nums text-navy-500",
                                                            children: demo.a.ctc
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                                                            lineNumber: 295,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                                                    lineNumber: 292,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-lg bg-navy-50/80 py-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "font-semibold text-navy-500",
                                                            children: "Offer B"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                                                            lineNumber: 298,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-0.5 text-navy-600",
                                                            children: demo.b.short
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                                                            lineNumber: 299,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "tabular-nums text-navy-500",
                                                            children: demo.b.ctc
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                                                            lineNumber: 300,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                                                    lineNumber: 297,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                                            lineNumber: 283,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("mt-2 w-full border-collapse text-center tabular-nums text-navy-800 sm:mt-3", compact ? "text-[10px]" : "text-xs sm:text-sm"),
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                className: "divide-y divide-navy-100/80",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                scope: "row",
                                                                className: "py-1.5 pr-2 text-left font-medium text-navy-500",
                                                                children: "In-hand / mo"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                                                                lineNumber: 312,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "py-1.5 font-display font-bold",
                                                                children: demo.a.inHand
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                                                                lineNumber: 318,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "py-1.5 font-display font-bold",
                                                                children: demo.b.inHand
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                                                                lineNumber: 321,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                                                        lineNumber: 311,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                scope: "row",
                                                                className: "py-1.5 pr-2 text-left font-medium text-navy-500",
                                                                children: "Est. tax / mo"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                                                                lineNumber: 326,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "py-1.5",
                                                                children: demo.a.taxMo
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                                                                lineNumber: 332,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "py-1.5",
                                                                children: demo.b.taxMo
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                                                                lineNumber: 333,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                                                        lineNumber: 325,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                scope: "row",
                                                                className: "py-1.5 pr-2 text-left font-medium text-navy-500",
                                                                children: "1st year value"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                                                                lineNumber: 336,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "py-1.5 font-semibold",
                                                                children: demo.a.y1
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                                                                lineNumber: 342,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "py-1.5 font-semibold",
                                                                children: demo.b.y1
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                                                                lineNumber: 343,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                                                        lineNumber: 335,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "text-teal-800",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                scope: "row",
                                                                className: "py-1.5 pr-2 text-left font-medium text-navy-500",
                                                                children: "Lens"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                                                                lineNumber: 346,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "py-1.5 font-semibold",
                                                                colSpan: 2,
                                                                children: [
                                                                    demo.verdict,
                                                                    " · ",
                                                                    demo.deltaY1
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                                                                lineNumber: 352,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                                                        lineNumber: 345,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                                                lineNumber: 310,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                                            lineNumber: 304,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                                    lineNumber: 276,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                                lineNumber: 270,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BlurredSideRail, {
                                side: "right",
                                compact: compact,
                                seed: scenarioIdx
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                                lineNumber: 360,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                        lineNumber: 261,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("pointer-events-none absolute inset-x-0 bottom-0 z-[2] bg-gradient-to-t from-white via-white/75 to-transparent", compact ? "h-[38%] sm:h-[36%]" : "h-[46%] sm:h-[42%]")
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                        lineNumber: 364,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 z-[3] flex flex-col items-center justify-end px-3 pb-3", compact ? "gap-2 pt-14 pb-3.5 sm:gap-2.5 sm:pt-16 sm:pb-4" : "gap-2.5 pt-10 pb-3 sm:gap-3 sm:pb-4 sm:pt-12"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "pointer-events-none text-center text-[11px] font-medium text-navy-600 sm:text-sm",
                                children: COPY.unlock
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                                lineNumber: 379,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                type: "button",
                                className: "pointer-events-auto h-10 gap-1.5 rounded-full bg-teal-700 px-6 text-xs font-semibold text-white shadow-sm hover:bg-teal-800 sm:h-11 sm:text-sm",
                                onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$premium$2d$plans$2d$modal$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openPremiumPlansModal"])(),
                                children: [
                                    COPY.cta,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                        className: "size-4 shrink-0",
                                        "aria-hidden": true
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                                        lineNumber: 388,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                                lineNumber: 382,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                        lineNumber: 371,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
                lineNumber: 241,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx",
        lineNumber: 211,
        columnNumber: 5
    }, this);
}
_s(PremiumBlurOfferTeaser, "SyO2VzW1jEFaoAexuQt6mIFiPsA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c2 = PremiumBlurOfferTeaser;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "AbstractOfferPreviewLayer");
__turbopack_context__.k.register(_c1, "BlurredSideRail");
__turbopack_context__.k.register(_c2, "PremiumBlurOfferTeaser");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/features/salary-calculator/salary-calculator-screen.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SalaryCalculatorScreen",
    ()=>SalaryCalculatorScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$page$2d$shell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layout/page-shell.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$salary$2d$calculator$2f$fixed$2d$variable$2d$in$2d$hand$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/salary-calculator/fixed-variable-in-hand-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$salary$2d$calculator$2f$salary$2d$calculator$2d$premium$2d$teaser$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/salary-calculator/salary-calculator-premium-teaser.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$salary$2d$calculator$2f$premium$2d$feature$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/salary-calculator/premium-feature-section.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$salary$2d$calculator$2f$salary$2d$calculator$2d$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/salary-calculator/salary-calculator-form.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$salary$2d$calculator$2f$simple$2d$regime$2d$tax$2d$reference$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/salary-calculator/simple-regime-tax-reference-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$salary$2d$calculator$2f$salary$2d$composition$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/salary-calculator/salary-composition-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$salary$2d$calculator$2f$upgrade$2d$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/salary-calculator/upgrade-sheet.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simple$2d$salary$2d$calculator$2f$calculate$2d$simple$2d$salary$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/simple-salary-calculator/calculate-simple-salary.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simple$2d$salary$2d$calculator$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/simple-salary-calculator/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$pricing$2f$premium$2d$blur$2d$offer$2d$teaser$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/features/pricing/premium-blur-offer-teaser.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$premium$2d$product$2d$access$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/hooks/use-premium-product-access.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stores/use-salary-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2f$marketing$2d$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/motion/marketing-motion.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dom$2f$smooth$2d$focus$2d$input$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/dom/smooth-focus-input.ts [app-client] (ecmascript)");
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
;
;
;
;
function paywallHrefForTool(id) {
    if (id === "wealth_forecast") return "/paywall?tool=forecast";
    if (id === "emi_analyzer") return "/paywall?tool=emi";
    if (id === "monthly_planner") return "/paywall?from=premium";
    return "/paywall";
}
function SalaryCalculatorScreen() {
    _s();
    const hasPremium = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$premium$2d$product$2d$access$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePremiumProductAccess"])();
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simple$2d$salary$2d$calculator$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultSimpleSalaryInput"]);
    const [upgradeOpen, setUpgradeOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [upgradeTool, setUpgradeTool] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const annualCtcInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const setAnnualCtcInputNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SalaryCalculatorScreen.useCallback[setAnnualCtcInputNode]": (node)=>{
            annualCtcInputRef.current = node;
        }
    }["SalaryCalculatorScreen.useCallback[setAnnualCtcInputNode]"], []);
    const ctcFocusCleanupRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ctcFocusScheduledRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const setStoreInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"])({
        "SalaryCalculatorScreen.useSalaryStore[setStoreInput]": (s)=>s.setInput
    }["SalaryCalculatorScreen.useSalaryStore[setStoreInput]"]);
    const summary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SalaryCalculatorScreen.useMemo[summary]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$simple$2d$salary$2d$calculator$2f$calculate$2d$simple$2d$salary$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["calculateSimpleSalarySummary"])(input)
    }["SalaryCalculatorScreen.useMemo[summary]"], [
        input
    ]);
    const totalCtc = input.annualFixedPay + input.annualVariablePay;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SalaryCalculatorScreen.useEffect": ()=>{
            setStoreInput({
                annualCTC: totalCtc,
                taxRegime: input.taxRegime,
                compensationMode: "fixed_variable",
                fixedAnnual: input.annualFixedPay,
                variableAnnual: input.annualVariablePay
            });
        }
    }["SalaryCalculatorScreen.useEffect"], [
        totalCtc,
        input.taxRegime,
        input.annualFixedPay,
        input.annualVariablePay,
        setStoreInput
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SalaryCalculatorScreen.useEffect": ()=>({
                "SalaryCalculatorScreen.useEffect": ()=>{
                    ctcFocusCleanupRef.current?.();
                    ctcFocusCleanupRef.current = null;
                }
            })["SalaryCalculatorScreen.useEffect"]
    }["SalaryCalculatorScreen.useEffect"], []);
    const premiumLocked = !hasPremium;
    const openUpgrade = (tool)=>{
        setUpgradeTool(tool);
        setUpgradeOpen(true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-[calc(100vh-6rem)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-teal-100/40 blur-3xl",
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-screen.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute -right-32 bottom-40 h-80 w-80 rounded-full bg-emerald-100/35 blur-3xl",
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-screen.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layout$2f$page$2d$shell$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageShell"], {
                className: "relative py-8 md:py-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].header, {
                        className: "mb-8 max-w-3xl md:mb-10",
                        initial: "hidden",
                        animate: "show",
                        variants: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2f$marketing$2d$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerContainer"])(0.06),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2f$marketing$2d$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                                custom: 0,
                                className: "text-[11px] font-semibold uppercase tracking-[0.14em] text-teal-700",
                                children: "Calculator"
                            }, void 0, false, {
                                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-screen.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                                variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2f$marketing$2d$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                                custom: 1,
                                className: "mt-2 font-display text-3xl font-bold tracking-tight text-navy-800 md:text-4xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-teal-700",
                                        children: "Salary"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-screen.tsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this),
                                    " calculator"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-screen.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2f$marketing$2d$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                                custom: 2,
                                className: "mt-3 text-sm text-navy-500 leading-relaxed md:text-base",
                                children: [
                                    "Enter ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "font-semibold text-navy-700",
                                        children: "guaranteed"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-screen.tsx",
                                        lineNumber: 130,
                                        columnNumber: 19
                                    }, this),
                                    " ",
                                    "fixed pay and optional",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "font-semibold text-navy-700",
                                        children: "variable"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-screen.tsx",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, this),
                                    " pay. The summary shows what is dependable every month versus an illustrative view if variable is included, plus",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "font-semibold text-navy-700",
                                        children: "regime-aware TDS"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-screen.tsx",
                                        lineNumber: 135,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    "tied to your Old / New regime selection."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-screen.tsx",
                                lineNumber: 125,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-screen.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(280px,420px)] xl:items-start xl:gap-10 2xl:gap-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "flex min-w-0 flex-col gap-8",
                                initial: "hidden",
                                animate: "show",
                                variants: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2f$marketing$2d$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerContainer"])(0.1),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2f$marketing$2d$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                                        onAnimationComplete: ()=>{
                                            if (ctcFocusScheduledRef.current) return;
                                            ctcFocusScheduledRef.current = true;
                                            ctcFocusCleanupRef.current?.();
                                            ctcFocusCleanupRef.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$dom$2f$smooth$2d$focus$2d$input$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["smoothScrollInputIntoViewAndFocus"])(annualCtcInputRef.current);
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$salary$2d$calculator$2f$salary$2d$calculator$2d$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SalaryCalculatorForm"], {
                                            value: input,
                                            onChange: setInput,
                                            annualCtcInputRef: setAnnualCtcInputNode
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/salary-calculator/salary-calculator-screen.tsx",
                                            lineNumber: 160,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-screen.tsx",
                                        lineNumber: 149,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2f$marketing$2d$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$salary$2d$calculator$2f$salary$2d$calculator$2d$premium$2d$teaser$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SalaryCalculatorPremiumTeaser"], {
                                            locked: premiumLocked,
                                            onRequestUnlock: ()=>openUpgrade(null)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/salary-calculator/salary-calculator-screen.tsx",
                                            lineNumber: 167,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-screen.tsx",
                                        lineNumber: 166,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-screen.tsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].aside, {
                                className: "flex min-w-0 w-full max-w-full flex-col gap-4 xl:max-w-[420px] xl:justify-self-end",
                                initial: "hidden",
                                animate: "show",
                                variants: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2f$marketing$2d$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["staggerContainer"])(0.12),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2f$marketing$2d$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$salary$2d$calculator$2f$fixed$2d$variable$2d$in$2d$hand$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FixedVariableInHandPanel"], {
                                            taxRegime: input.taxRegime,
                                            monthlyInHandFixedOnly: summary.monthlyInHandFixedOnly,
                                            monthlyInHandIncludingVariable: summary.monthlyInHandIncludingVariable,
                                            annualInHandFixedOnly: summary.annualInHandFixedOnly,
                                            annualInHandIncludingVariable: summary.annualInHandIncludingVariable,
                                            monthlyIncomeTaxFixedBasis: summary.monthlyIncomeTaxFixedBasis,
                                            monthlyIncomeTaxIncludingVariable: summary.monthlyIncomeTaxIncludingVariable,
                                            annualIncomeTaxFixedBasis: summary.annualIncomeTaxFixedBasis,
                                            annualIncomeTaxIncludingVariable: summary.annualIncomeTaxIncludingVariable,
                                            effectiveTaxRateFixedBasis: summary.effectiveTaxRateFixedBasis,
                                            effectiveTaxRateIncludingVariable: summary.effectiveTaxRateIncludingVariable,
                                            annualVariablePay: input.annualVariablePay
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/salary-calculator/salary-calculator-screen.tsx",
                                            lineNumber: 181,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-screen.tsx",
                                        lineNumber: 180,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2f$marketing$2d$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$salary$2d$calculator$2f$simple$2d$regime$2d$tax$2d$reference$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SimpleRegimeTaxReferenceCard"], {
                                            regime: input.taxRegime
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/salary-calculator/salary-calculator-screen.tsx",
                                            lineNumber: 207,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-screen.tsx",
                                        lineNumber: 206,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2f$marketing$2d$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$salary$2d$calculator$2f$salary$2d$composition$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SalaryCompositionPanel"], {
                                            takeHomeShare: summary.compositionTakeHome,
                                            employeeDeductionsShare: summary.compositionEmployeeDeductions,
                                            employerPfShare: summary.compositionEmployerPf
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/salary-calculator/salary-calculator-screen.tsx",
                                            lineNumber: 210,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-screen.tsx",
                                        lineNumber: 209,
                                        columnNumber: 13
                                    }, this),
                                    premiumLocked ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        variants: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$motion$2f$marketing$2d$motion$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fadeUp"],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$pricing$2f$premium$2d$blur$2d$offer$2d$teaser$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PremiumBlurOfferTeaser"], {
                                            compact: true,
                                            className: "shadow-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/features/salary-calculator/salary-calculator-screen.tsx",
                                            lineNumber: 218,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-screen.tsx",
                                        lineNumber: 217,
                                        columnNumber: 15
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-screen.tsx",
                                lineNumber: 174,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-screen.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$salary$2d$calculator$2f$premium$2d$feature$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PremiumFeatureSection"], {
                        locked: premiumLocked,
                        onRequestUpgrade: openUpgrade
                    }, void 0, false, {
                        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-screen.tsx",
                        lineNumber: 224,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-screen.tsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$features$2f$salary$2d$calculator$2f$upgrade$2d$sheet$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UpgradeSheet"], {
                open: upgradeOpen,
                onOpenChange: setUpgradeOpen,
                tool: upgradeTool,
                paywallHref: paywallHrefForTool(upgradeTool?.id ?? null)
            }, void 0, false, {
                fileName: "[project]/src/components/features/salary-calculator/salary-calculator-screen.tsx",
                lineNumber: 230,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/features/salary-calculator/salary-calculator-screen.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
_s(SalaryCalculatorScreen, "p2EAgH4QDT2KzjuJIYQdzkWYnb4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$hooks$2f$use$2d$premium$2d$product$2d$access$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePremiumProductAccess"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stores$2f$use$2d$salary$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSalaryStore"]
    ];
});
_c = SalaryCalculatorScreen;
var _c;
__turbopack_context__.k.register(_c, "SalaryCalculatorScreen");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0e3chyj._.js.map
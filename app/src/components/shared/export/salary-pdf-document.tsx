/**
 * Salary PDF document — rendered by @react-pdf/renderer.
 *
 * This file MUST only use @react-pdf primitives (Document, Page, View, Text, StyleSheet).
 * No Tailwind, no HTML elements, no browser APIs.
 */
import {
  Document,
  Page,
  View,
  Text,
  StyleSheet,
} from "@react-pdf/renderer";
import type { SalaryBreakdown, SalaryInput } from "@/lib/types/salary.types";

// ── Fonts ────────────────────────────────────────────────────────────────────
// Use built-in Helvetica to avoid external font fetching complexity.
// For production, register Inter/Plus Jakarta Sans via Font.register with CDN URLs.

// ── Styles ───────────────────────────────────────────────────────────────────
const C = {
  teal: "#0D9488",
  tealLight: "#F0FDFA",
  tealMid: "#CCFBF1",
  navy: "#1E293B",
  navyMid: "#334155",
  navyLight: "#64748B",
  navyBorder: "#E2E8F0",
  navyBg: "#F8FAFC",
  white: "#FFFFFF",
  red: "#EF4444",
  redLight: "#FEF2F2",
  green: "#10B981",
  greenLight: "#ECFDF5",
  amber: "#F59E0B",
  amberLight: "#FFFBEB",
  neutral: "#F9F9FB",
} as const;

const styles = StyleSheet.create({
  page: {
    backgroundColor: C.white,
    paddingTop: 40,
    paddingBottom: 48,
    paddingHorizontal: 40,
    fontFamily: "Helvetica",
    fontSize: 9,
    color: C.navy,
  },

  // ── Header ──────────────────────────────────────────────────────────────────
  headerRow: { flexDirection: "row", alignItems: "center", marginBottom: 20 },
  logoText: {
    fontFamily: "Helvetica-Bold",
    fontSize: 14,
    color: C.teal,
    letterSpacing: 0.5,
  },
  headerRight: { marginLeft: "auto", alignItems: "flex-end" },
  headerLabel: { fontSize: 7, color: C.navyLight, textTransform: "uppercase", letterSpacing: 0.8 },
  headerValue: { fontSize: 9, color: C.navyMid, marginTop: 1 },

  divider: { borderBottomWidth: 1, borderBottomColor: C.navyBorder, marginVertical: 10 },
  dividerThin: { borderBottomWidth: 0.5, borderBottomColor: C.navyBorder, marginVertical: 6 },

  // ── Section title ────────────────────────────────────────────────────────────
  sectionTitle: {
    fontFamily: "Helvetica-Bold",
    fontSize: 7,
    color: C.navyLight,
    textTransform: "uppercase",
    letterSpacing: 1.2,
    marginBottom: 8,
    marginTop: 14,
  },

  // ── Summary KPI cards ────────────────────────────────────────────────────────
  kpiRow: { flexDirection: "row", gap: 8, marginBottom: 4 },
  kpiCard: {
    flex: 1,
    backgroundColor: C.navyBg,
    borderRadius: 6,
    padding: 10,
    borderWidth: 0.5,
    borderColor: C.navyBorder,
  },
  kpiLabel: { fontSize: 7, color: C.navyLight, textTransform: "uppercase", letterSpacing: 0.8 },
  kpiAmount: { fontFamily: "Helvetica-Bold", fontSize: 13, color: C.navy, marginTop: 3 },
  kpiSub: { fontSize: 7, color: C.navyLight, marginTop: 2 },
  kpiAccentBar: { height: 2.5, width: 24, borderRadius: 2, marginTop: 8 },

  // ── Two-column stats ─────────────────────────────────────────────────────────
  twoCol: { flexDirection: "row", gap: 12, marginBottom: 10 },
  statBox: {
    flex: 1,
    backgroundColor: C.navyBg,
    borderRadius: 5,
    padding: 8,
    borderWidth: 0.5,
    borderColor: C.navyBorder,
  },
  statLabel: { fontSize: 7, color: C.navyLight, textTransform: "uppercase", letterSpacing: 0.8 },
  statVal: { fontFamily: "Helvetica-Bold", fontSize: 10, color: C.navy, marginTop: 2 },
  statSub: { fontSize: 7, color: C.navyLight, marginTop: 1 },

  // ── Component table ───────────────────────────────────────────────────────────
  tableHeader: {
    flexDirection: "row",
    backgroundColor: C.navyBg,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: C.navyBorder,
  },
  tableHeaderText: {
    fontSize: 7,
    fontFamily: "Helvetica-Bold",
    color: C.navyLight,
    textTransform: "uppercase",
    letterSpacing: 0.8,
  },
  tableRow: {
    flexDirection: "row",
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderBottomWidth: 0.5,
    borderBottomColor: C.navyBorder,
  },
  tableRowAlt: { backgroundColor: C.neutral },
  colName: { flex: 3.2 },
  colMonthly: { flex: 1.8, textAlign: "right" },
  colAnnual: { flex: 1.8, textAlign: "right" },
  colType: { flex: 1.4, textAlign: "center" },
  cellText: { fontSize: 8.5, color: C.navyMid },
  cellTextBold: { fontSize: 8.5, fontFamily: "Helvetica-Bold", color: C.navy },
  cellDesc: { fontSize: 6.5, color: C.navyLight, marginTop: 1 },

  // ── Badges ────────────────────────────────────────────────────────────────────
  badge: {
    borderRadius: 3,
    paddingVertical: 1.5,
    paddingHorizontal: 4,
    alignSelf: "center",
  },
  badgeText: { fontSize: 6, fontFamily: "Helvetica-Bold", textTransform: "uppercase", letterSpacing: 0.6 },

  // ── Net row ───────────────────────────────────────────────────────────────────
  netRow: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 8,
    backgroundColor: C.tealLight,
    borderRadius: 5,
    marginTop: 6,
    borderWidth: 0.5,
    borderColor: C.tealMid,
  },

  // ── Footer ────────────────────────────────────────────────────────────────────
  footer: {
    position: "absolute",
    bottom: 24,
    left: 40,
    right: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  footerText: { fontSize: 7, color: C.navyLight },
  footerRight: { marginLeft: "auto" },
  footerPage: { fontSize: 7, color: C.navyLight },

  // ── Disclaimer ────────────────────────────────────────────────────────────────
  disclaimer: {
    marginTop: 16,
    backgroundColor: C.navyBg,
    borderRadius: 5,
    padding: 8,
    borderWidth: 0.5,
    borderColor: C.navyBorder,
  },
  disclaimerText: { fontSize: 7, color: C.navyLight, lineHeight: 1.5 },
});

// ── Helpers ───────────────────────────────────────────────────────────────────
function inr(amount: number): string {
  // Manual Indian formatting without Intl (not available in @react-pdf context)
  const abs = Math.abs(amount);
  const sign = amount < 0 ? "-" : "";
  const s = Math.round(abs).toString();
  if (s.length <= 3) return `${sign}₹${s}`;
  const last3 = s.slice(-3);
  const rest = s.slice(0, -3);
  const grouped = rest.replace(/\B(?=(\d{2})+(?!\d))/g, ",");
  return `${sign}₹${grouped},${last3}`;
}

function badgeColors(type: string): { bg: string; text: string } {
  if (type === "earning") return { bg: C.greenLight, text: C.green };
  if (type === "deduction") return { bg: C.redLight, text: C.red };
  if (type === "tax-free") return { bg: C.tealLight, text: C.teal };
  return { bg: C.navyBg, text: C.navyLight };
}

function badgeLabel(type: string): string {
  if (type === "earning") return "Earning";
  if (type === "deduction") return "Deduction";
  if (type === "tax-free") return "Tax Free";
  return "Employer";
}

// ── Main Document ─────────────────────────────────────────────────────────────
interface SalaryPDFDocumentProps {
  breakdown: SalaryBreakdown;
  input: SalaryInput;
}

export function SalaryPDFDocument({ breakdown, input }: SalaryPDFDocumentProps) {
  const date = new Date().toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  const regime = input.taxRegime === "old" ? "Old Regime" : "New Regime";
  const tier =
    input.cityTier === "tier1"
      ? "Tier 1 – Metro"
      : input.cityTier === "tier2"
        ? "Tier 2 – Urban"
        : "Tier 3 – Semi-Urban";

  const allRows = breakdown.components.filter(
    (c) => c.monthlyValue > 0 || c.annualValue > 0
  );

  return (
    <Document
      title={`InHand Salary Report — ${date}`}
      author="InHand"
      subject="Salary Breakdown"
      creator="InHand · inhand.app"
    >
      <Page size="A4" style={styles.page}>
        {/* ── Brand header ── */}
        <View style={styles.headerRow}>
          <Text style={styles.logoText}>InHand</Text>
          <View style={styles.headerRight}>
            <Text style={styles.headerLabel}>Salary Report</Text>
            <Text style={styles.headerValue}>{date}</Text>
            {input.fullName?.trim() ? (
              <Text style={[styles.headerValue, { marginTop: 1 }]}>{input.fullName.trim()}</Text>
            ) : null}
          </View>
        </View>
        <View style={styles.divider} />

        {/* ── Context row ── */}
        <View style={styles.twoCol}>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Annual CTC</Text>
            <Text style={styles.statVal}>{inr(breakdown.statedAnnualCTC)}</Text>
            <Text style={styles.statSub}>Stated CTC</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Tax Regime</Text>
            <Text style={styles.statVal}>{regime}</Text>
            <Text style={styles.statSub}>{tier}</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Take-home %</Text>
            <Text style={styles.statVal}>{breakdown.takeHomePercent}%</Text>
            <Text style={styles.statSub}>of stated CTC</Text>
          </View>
        </View>

        {/* ── KPI cards ── */}
        <Text style={styles.sectionTitle}>Monthly Summary</Text>
        <View style={styles.kpiRow}>
          <View style={styles.kpiCard}>
            <Text style={styles.kpiLabel}>In-hand (excl. variable)</Text>
            <Text style={styles.kpiAmount}>{inr(breakdown.monthlyInHandExcludingVariable)}</Text>
            <Text style={styles.kpiSub}>per month</Text>
            <View style={[styles.kpiAccentBar, { backgroundColor: C.teal }]} />
          </View>
          <View style={styles.kpiCard}>
            <Text style={styles.kpiLabel}>Annual Income Tax</Text>
            <Text style={[styles.kpiAmount, { color: C.red }]}>{inr(breakdown.annualIncomeTax)}</Text>
            <Text style={styles.kpiSub}>{inr(Math.round(breakdown.annualIncomeTax / 12))}/mo (TDS)</Text>
            <View style={[styles.kpiAccentBar, { backgroundColor: C.red }]} />
          </View>
          <View style={styles.kpiCard}>
            <Text style={styles.kpiLabel}>Total Deductions</Text>
            <Text style={[styles.kpiAmount, { color: C.navyMid }]}>{inr(breakdown.totalMonthlyDeductions)}</Text>
            <Text style={styles.kpiSub}>per month</Text>
            <View style={[styles.kpiAccentBar, { backgroundColor: C.navyLight }]} />
          </View>
        </View>

        {/* ── Annual summary ── */}
        <View style={[styles.twoCol, { marginTop: 4 }]}>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Fixed Cash (Annual)</Text>
            <Text style={styles.statVal}>{inr(breakdown.annualFixedCashTotal)}</Text>
          </View>
          {breakdown.annualVariableCashTotal > 0 && (
            <View style={styles.statBox}>
              <Text style={styles.statLabel}>Variable Cash (Annual)</Text>
              <Text style={styles.statVal}>{inr(breakdown.annualVariableCashTotal)}</Text>
            </View>
          )}
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Total Cash (Annual)</Text>
            <Text style={styles.statVal}>{inr(breakdown.annualCashCompensation)}</Text>
          </View>
        </View>

        {/* ── Component table ── */}
        <Text style={[styles.sectionTitle, { marginTop: 16 }]}>Salary Components</Text>

        {/* Table header */}
        <View style={styles.tableHeader}>
          <View style={styles.colName}>
            <Text style={styles.tableHeaderText}>Component</Text>
          </View>
          <View style={styles.colMonthly}>
            <Text style={[styles.tableHeaderText, { textAlign: "right" }]}>Monthly</Text>
          </View>
          <View style={styles.colAnnual}>
            <Text style={[styles.tableHeaderText, { textAlign: "right" }]}>Annual</Text>
          </View>
          <View style={styles.colType}>
            <Text style={[styles.tableHeaderText, { textAlign: "center" }]}>Type</Text>
          </View>
        </View>

        {/* Table rows */}
        {allRows.map((c, idx) => {
          const { bg, text } = badgeColors(c.type);
          const isAlt = idx % 2 === 1;
          const isDeduction = c.group === "deductions";
          return (
            <View
              key={c.id}
              style={[styles.tableRow, isAlt ? styles.tableRowAlt : {}]}
            >
              <View style={styles.colName}>
                <Text style={styles.cellTextBold}>{c.name}</Text>
                <Text style={styles.cellDesc}>{c.description}</Text>
              </View>
              <View style={styles.colMonthly}>
                <Text style={[styles.cellText, { textAlign: "right", color: isDeduction ? C.red : C.navyMid }]}>
                  {isDeduction ? `-${inr(c.monthlyValue)}` : inr(c.monthlyValue)}
                </Text>
              </View>
              <View style={styles.colAnnual}>
                <Text style={[styles.cellText, { textAlign: "right", color: isDeduction ? C.red : C.navyMid }]}>
                  {isDeduction ? `-${inr(c.annualValue)}` : inr(c.annualValue)}
                </Text>
              </View>
              <View style={styles.colType}>
                <View style={[styles.badge, { backgroundColor: bg, alignSelf: "center" }]}>
                  <Text style={[styles.badgeText, { color: text }]}>{badgeLabel(c.type)}</Text>
                </View>
              </View>
            </View>
          );
        })}

        {/* Net in-hand row */}
        <View style={styles.netRow}>
          <View style={styles.colName}>
            <Text style={[styles.cellTextBold, { color: C.teal }]}>Est. Monthly In-hand</Text>
            <Text style={[styles.cellDesc, { color: C.teal }]}>Fixed components, excl. variable pay</Text>
          </View>
          <View style={styles.colMonthly}>
            <Text style={[styles.cellTextBold, { textAlign: "right", color: C.teal, fontSize: 10 }]}>
              {inr(breakdown.monthlyInHandExcludingVariable)}
            </Text>
          </View>
          <View style={styles.colAnnual}>
            <Text style={[styles.cellTextBold, { textAlign: "right", color: C.teal, fontSize: 10 }]}>
              {inr(breakdown.monthlyInHandExcludingVariable * 12)}
            </Text>
          </View>
          <View style={styles.colType} />
        </View>

        {/* ── Disclaimer ── */}
        <View style={styles.disclaimer}>
          <Text style={styles.disclaimerText}>
            {"Figures are estimates based on a standard CTC structure (40% basic, HRA by city tier, PF at ₹15,000 ceiling, professional tax ₹200/mo). " +
              "Actual salary components may differ. Verify with your offer letter or payslip. Tax calculated per FY 2025-26 slabs including 4% health & education cess."}
          </Text>
        </View>

        {/* ── Footer ── */}
        <View style={styles.footer} fixed>
          <Text style={styles.footerText}>
            InHand · inhand.app · Generated {date}
          </Text>
          <View style={styles.footerRight}>
            <Text
              style={styles.footerPage}
              render={({ pageNumber, totalPages }) =>
                `Page ${pageNumber} of ${totalPages}`
              }
            />
          </View>
        </View>
      </Page>
    </Document>
  );
}

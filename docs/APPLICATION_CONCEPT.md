# APPLICATION_CONCEPT.md — InHand

## What It Is

A desktop-first SaaS that gives Indian salaried employees complete clarity on their salary, taxes, deductions, lifestyle affordability, and long-term wealth trajectory.

## Who It's For

Indian salaried professionals (tech, corporate, startup) earning ₹5L–₹50L+ CTC who want to:
- Understand their actual in-hand salary before or after joining
- Compare multiple job offers with real take-home numbers
- Plan lifestyle expenses against actual disposable income
- Forecast long-term wealth based on current salary and habits

## The Problem

CTC ≠ in-hand pay. Tax regimes are confusing. HRA, PF, professional tax, and reimbursements create a gap between what's promised and what's deposited. Existing calculators are basic, ugly, and don't connect salary to lifestyle decisions.

## Primary User Questions

1. "What will my actual monthly in-hand salary be?"
2. "Old regime or new regime — which saves me more?"
3. "Can I afford this rent/EMI on my salary?"
4. "Which of these two offers is actually better?"
5. "How much will I be worth in 10 years at this salary?"

## Free vs Premium

Access is driven by **`NEXT_PUBLIC_ACCESS_MODE`** and **`profiles.plan_tier`** (see `app/src/lib/config/access-mode.ts` and middleware). In the **default** product mode, **`/salary`** is the public calculator; **detailed breakdown, lifestyle plan, and premium tools** require a **signed-in user with premium** (or `NEXT_PUBLIC_ACCESS_MODE=premium` for local full-app testing). Screen-by-screen behavior: **`PRODUCT_FLOW.md`**.

## Value Proposition

"From CTC to in-hand clarity." — Breakups, deductions, tax impact, lifestyle affordability, offer comparison, and wealth scenarios built for Indian payroll.

## Product Personality

Premium, calm, intelligent, trustworthy. Financial clarity as empowerment, not anxiety.

## Desktop-First

Financial planning is a focused, sit-down activity. Desktop-first ensures optimal data density, readability, and interaction quality. Mobile responsive is secondary.

## Why More Than a Calculator

Calculators give one number. InHand connects salary → taxes → editable components → lifestyle → affordability → wealth trajectory → offer decisions into a single coherent journey.

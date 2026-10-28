"use client";

import React, { useState } from "react";
import {
  FileText,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Download,
  Share2,
  Check,
  ChevronRight,
  Menu,
  X,
  Printer,
  Camera,
  PhoneCall,
  ClipboardList,
  ExternalLink,
  HelpCircle,
  ArrowRight,
  Clock,
  Sparkles,
} from "lucide-react";

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  const toggleCheck = (stepNum: number) => {
    setCheckedItems((prev) => ({
      ...prev,
      [stepNum]: !prev[stepNum],
    }));
  };

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleDownloadChecklist = () => {
    const checklistText = `FIZA WARRANTY CLAIM GUIDE
A practical checklist for anyone preparing to file a warranty claim.
Prepared by: Fiza

WHO THIS IS FOR
Anyone whose phone, TV, laptop or appliance stopped working while it is still under warranty,
and who wants the claim to be decided on facts, in writing.

THE IDEA IN ONE LINE
A warranty claim is decided on records. Keep yours, and ask for theirs in writing.

KEY NUMBERS FOR THE PAGE
- 15 steps in the checklist.
- 4 records to keep before anything goes wrong.
- 1 rule: if it is not in writing, it did not happen.

BEFORE ANYTHING GOES WRONG
[ ] 1. Keep the invoice. Save the original bill and a photo or PDF copy. The warranty normally starts on the invoice date.
[ ] 2. Register the product. Many brands ask you to register on their website or app; some add extra warranty when you do.
[ ] 3. Read the warranty card once. Note how long it lasts, what it covers, and what it excludes.
[ ] 4. Record the condition. Take a few dated photos of the product once it is installed or unboxed.

WHEN THE FAULT APPEARS
[ ] 5. Record the fault. Take a clear photo or short video of the problem as soon as you see it, with the date visible if you can.
[ ] 6. Raise the complaint in writing. Use email, the brand's website or its app, not only a phone call, so there is a record.
[ ] 7. Note every reference number. Write down the complaint or ticket number, the date and the name of anyone you speak to.

WHEN A TECHNICIAN VISITS
[ ] 8. Ask for the job sheet. Ask the technician for a copy of the visit report or job sheet before they leave.
[ ] 9. Ask what was tested. Ask which test or instrument was used to reach the diagnosis.
[ ] 10. Take your own photos. Photograph the product and anything the technician points to, during the visit.

IF THE CLAIM IS REFUSED
[ ] 11. Ask for the reason in writing. Request a written explanation that names the exact cause and the evidence for it.
[ ] 12. Ask for the technical report. If the refusal rests on an inspection, ask for that inspection report.
[ ] 13. Escalate inside the company. Most brands list a grievance or escalation contact on their website. Write to it, quoting your complaint number.
[ ] 14. Keep it factual. Stick to dates, documents and photos. Calm, written records are what a consumer forum or regulator will look at.
[ ] 15. Know your consumer helpline. Most countries run a free consumer helpline or online complaint portal that can guide you on the next step.

CALL TO ACTION
- Download the checklist and keep it with your invoices.
- Share it with a friend who just bought something expensive.

FOOTER NOTE
Fiza Warranty Claim Guide is a free, general guide. It is not legal advice. For your own case, check the warranty terms for your product and your country's consumer rules.

Prepared by: Fiza
`;

    const blob = new Blob([checklistText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Fiza-Warranty-Claim-Guide.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-white text-on-surface antialiased selection:bg-primary-soft-2 selection:text-primary-ink flex flex-col">
      {/* 1. TICKER STRIP */}
      <div className="bg-primary-soft border-b border-primary-border py-3 overflow-hidden select-none">
        <div className="flex whitespace-nowrap animate-ticker">
          <div className="flex items-center space-x-10 text-[10px] font-mono font-medium tracking-mono text-primary-ink uppercase shrink-0 px-5">
            <span>FIZA WARRANTY CLAIM GUIDE</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
            <span>DECIDED ON FACTS, IN WRITING</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
            <span>15-STEP CHECKLIST</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
            <span>KEEP YOUR RECORDS, ASK FOR THEIRS</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
            <span>PREPARED BY: FIZA</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
            <span>FREE CONSUMER ACTION GUIDE</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
          </div>
          <div className="flex items-center space-x-10 text-[10px] font-mono font-medium tracking-mono text-primary-ink uppercase shrink-0 px-5" aria-hidden="true">
            <span>FIZA WARRANTY CLAIM GUIDE</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
            <span>DECIDED ON FACTS, IN WRITING</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
            <span>15-STEP CHECKLIST</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
            <span>KEEP YOUR RECORDS, ASK FOR THEIRS</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
            <span>PREPARED BY: FIZA</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
            <span>FREE CONSUMER ACTION GUIDE</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
          </div>
        </div>
      </div>

      {/* 2. STICKY HEADER */}
      <header className="sticky top-0 z-50 h-[72px] bg-white/92 backdrop-blur-md border-b border-outline transition-colors">
        <div className="max-w-shell mx-auto h-full px-5 sm:px-8 md:px-10 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group focus-visible:outline-primary">
            <span className="w-9 h-9 rounded-full bg-primary-soft border border-primary-border flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
              <ShieldCheck className="w-5 h-5" />
            </span>
            <div className="flex flex-col">
              <span className="font-extrabold text-[15px] tracking-tight text-secondary leading-none">
                FIZA WARRANTY CLAIM GUIDE
              </span>
              <span className="font-mono text-[9px] uppercase tracking-mono text-on-surface-muted mt-1 leading-none">
                BY FIZA // CONSUMER ACTION
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 text-[15px] font-medium text-on-surface-variant">
            <a href="#who-this-is-for" className="hover:text-secondary transition-colors py-1">
              Who This Is For
            </a>
            <a href="#key-numbers" className="hover:text-secondary transition-colors py-1">
              Key Numbers
            </a>
            <a href="#checklist-steps" className="hover:text-secondary transition-colors py-1">
              Checklist
            </a>
            <a href="#refusal-guide" className="hover:text-secondary transition-colors py-1">
              If Refused
            </a>
            <a href="#download-cta" className="hover:text-secondary transition-colors py-1">
              Get Guide
            </a>
          </nav>

          {/* Right Header Action */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={handleDownloadChecklist}
              className="bg-secondary text-white hover:bg-primary font-medium text-[13.5px] py-[10px] px-5 rounded-full transition-all duration-300 shadow-sm hover:shadow-md flex items-center gap-2"
              title="Download text checklist"
            >
              <Download className="w-4 h-4" />
              <span>Download Checklist</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-full border border-outline hover:bg-surface-muted transition-colors text-secondary"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-outline px-5 py-6 shadow-raised flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <a
              href="#who-this-is-for"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[16px] font-medium text-secondary py-2 border-b border-outline/50"
            >
              Who This Is For
            </a>
            <a
              href="#key-numbers"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[16px] font-medium text-secondary py-2 border-b border-outline/50"
            >
              Key Numbers
            </a>
            <a
              href="#checklist-steps"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[16px] font-medium text-secondary py-2 border-b border-outline/50"
            >
              15-Step Checklist
            </a>
            <a
              href="#refusal-guide"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[16px] font-medium text-secondary py-2 border-b border-outline/50"
            >
              If The Claim Is Refused
            </a>
            <a
              href="#download-cta"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[16px] font-medium text-secondary py-2 border-b border-outline/50"
            >
              Call To Action
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleDownloadChecklist();
                }}
                className="w-full bg-primary text-white font-semibold text-[15px] py-3 px-5 rounded-full flex items-center justify-center gap-2 shadow-raised"
              >
                <Download className="w-4 h-4" />
                <span>Download Checklist</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handlePrint();
                }}
                className="w-full bg-surface text-secondary border border-outline font-semibold text-[15px] py-3 px-5 rounded-full flex items-center justify-center gap-2 hover:bg-surface-muted"
              >
                <Printer className="w-4 h-4" />
                <span>Print Guide</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION */}
      <section className="bg-white py-16 sm:py-20 md:py-28 lg:py-32 border-b border-outline">
        <div className="max-w-shell mx-auto px-5 sm:px-8 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column (~58%) */}
            <div className="lg:col-span-7 flex flex-col">
              {/* Mono Pill Label (Eyebrow) */}
              <div className="inline-flex items-center gap-2 self-start bg-primary-soft border border-primary-border text-primary-ink text-[10px] font-mono font-medium tracking-mono uppercase px-[14px] py-[6px] rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                <span>CONSUMER CAMPAIGN // VERIFIED CHECKLIST</span>
              </div>

              {/* Title & Headline Display */}
              <div className="mt-4">
                <span className="font-mono text-[11px] font-semibold text-primary uppercase tracking-mono block mb-2">
                  FIZA WARRANTY CLAIM GUIDE
                </span>
                <h1 className="text-[34px] sm:text-[44px] md:text-[52px] lg:text-[58px] font-extrabold text-secondary tracking-tighter leading-tightest text-balance">
                  A practical checklist for anyone preparing to file a warranty claim.
                </h1>
              </div>

              {/* Sub-author / Byline */}
              <div className="mt-4 flex items-center gap-2 text-on-surface-muted font-mono text-[11px] uppercase tracking-mono">
                <span className="font-semibold text-secondary">Prepared by:</span>
                <span className="bg-surface-sunken px-2.5 py-1 rounded-full text-secondary font-semibold border border-outline">
                  Fiza
                </span>
                <span className="text-on-surface-variant">•</span>
                <span>Updated 2026</span>
              </div>

              {/* Lead Paragraph / Who this is for */}
              <div className="mt-6 p-6 rounded-md bg-surface-2 border border-outline">
                <div className="text-[11px] font-mono font-semibold uppercase tracking-mono text-primary mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  WHO THIS IS FOR
                </div>
                <p className="text-[17.5px] sm:text-[19px] text-on-surface leading-relaxed2 font-normal">
                  Anyone whose phone, TV, laptop or appliance stopped working while it is still under warranty,
                  and who wants the claim to be decided on facts, in writing.
                </p>
              </div>

              {/* Actions row */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={handleDownloadChecklist}
                  className="bg-primary hover:bg-primary-strong text-white font-semibold text-[15px] py-[14px] px-7 rounded-full shadow-raised hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 group"
                >
                  <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                  <span>Download Checklist</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <a
                  href="#checklist-steps"
                  className="bg-surface hover:bg-surface-muted text-on-surface-strong border border-outline-strong font-semibold text-[15px] py-[14px] px-7 rounded-full transition-all duration-300 flex items-center gap-2"
                >
                  <span>Explore 15 Steps</span>
                  <ChevronRight className="w-4 h-4 text-on-surface-variant" />
                </a>
              </div>

              {/* Micro badge proof */}
              <div className="mt-6 flex items-center gap-6 text-[12px] text-on-surface-variant font-medium">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  15 actionable checkpoints
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  Free & neutral advice
                </span>
              </div>
            </div>

            {/* Right Column (~42%): The Headline Card */}
            <div className="lg:col-span-5 flex flex-col">
              {/* HEADLINE-CARD as defined in DESIGN.md:
                  backgroundColor '{colors.secondary}', textColor '{colors.primary-bright}', rounded '{rounded.lg}' (26px),
                  padding 48px, holding one short sentence in large mono type with a faint horizontal scanline texture. */}
              <div className="bg-secondary text-primary-bright rounded-lg p-8 sm:p-11 shadow-raised relative overflow-hidden scanline-texture border border-white/10">
                {/* Decorative Pill inside Headline Card */}
                <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 text-primary-bright text-[10px] font-mono uppercase tracking-mono px-3 py-1 rounded-full mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-bright animate-pulse"></span>
                  <span>THE IDEA IN ONE LINE</span>
                </div>

                <blockquote className="font-mono text-[20px] sm:text-[23px] md:text-[25px] font-medium leading-snug tracking-tight text-white">
                  &ldquo;A warranty claim is decided on records. Keep yours, and ask for theirs in writing.&rdquo;
                </blockquote>

                <div className="mt-8 pt-6 border-t border-white/15 flex items-center justify-between text-[11px] font-mono tracking-mono text-white/70">
                  <span className="uppercase text-primary-bright font-semibold">CORE PRINCIPLE</span>
                  <span className="uppercase">PREPARED BY: FIZA</span>
                </div>

                {/* Subcard snippet inside Headline Card */}
                <div className="mt-6 bg-white/5 rounded-sm p-4 border border-white/10 text-[13px] text-white/80 leading-relaxed font-sans">
                  <span className="font-mono text-[10px] uppercase text-primary-bright block mb-1">
                    WHY THIS WORKS
                  </span>
                  Companies handle hundreds of claims daily. Verbal promises vanish, but dated logs, email trails, and job sheets cannot be dismissed.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION: KEY NUMBERS FOR THE PAGE */}
      <section id="key-numbers" className="bg-surface-muted py-20 md:py-28 border-b border-outline">
        <div className="max-w-shell mx-auto px-5 sm:px-8 md:px-10">
          {/* Section Header Stack */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary-soft border border-primary-border text-primary-ink text-[10px] font-mono font-medium tracking-mono uppercase px-[14px] py-[6px] rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              <span>METRICS & CORE PRINCIPLES</span>
            </div>
            <h2 className="mt-4 text-[29px] sm:text-[38px] md:text-[44px] font-extrabold text-secondary tracking-tighter leading-tightest">
              KEY NUMBERS FOR THE PAGE
            </h2>
            <p className="mt-4 text-[18px] text-on-surface-variant leading-relaxed2 font-normal max-w-[62ch]">
              Three critical realities that summarize everything you need to remember when filing a warranty claim.
            </p>
          </div>

          {/* Stat Grid: 3 joined cells with 1px hairline gaps inside one rounded card */}
          <div className="mt-12 bg-outline rounded-md p-[1px] shadow-card overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-outline">
              {/* Stat Cell 1 */}
              <div className="bg-surface p-7 sm:p-9 flex flex-col justify-between hover:bg-surface-2 transition-colors">
                <span className="font-mono text-[10px] uppercase tracking-mono text-on-surface-muted font-medium mb-3">
                  METRIC // 01
                </span>
                <div>
                  <div className="text-[52px] font-extrabold text-on-surface-strong leading-none tracking-tighter tnum">
                    15
                  </div>
                  <p className="mt-3 text-[14px] sm:text-[15px] font-medium text-on-surface-variant leading-snug">
                    steps in the checklist.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-outline flex items-center text-[12px] text-on-surface-muted font-mono uppercase tracking-mono">
                  Full lifecycle coverage
                </div>
              </div>

              {/* Stat Cell 2 */}
              <div className="bg-surface p-7 sm:p-9 flex flex-col justify-between hover:bg-surface-2 transition-colors">
                <span className="font-mono text-[10px] uppercase tracking-mono text-on-surface-muted font-medium mb-3">
                  METRIC // 02
                </span>
                <div>
                  <div className="text-[52px] font-extrabold text-on-surface-strong leading-none tracking-tighter tnum">
                    4
                  </div>
                  <p className="mt-3 text-[14px] sm:text-[15px] font-medium text-on-surface-variant leading-snug">
                    records to keep before anything goes wrong.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-outline flex items-center text-[12px] text-on-surface-muted font-mono uppercase tracking-mono">
                  Preventive documentation
                </div>
              </div>

              {/* Stat Cell 3: HOT CELL with blue stat! */}
              <div className="bg-surface p-7 sm:p-9 flex flex-col justify-between hover:bg-surface-2 transition-colors relative overflow-hidden">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] uppercase tracking-mono text-primary font-semibold">
                    GOLDEN RULE // HOT
                  </span>
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                </div>
                <div>
                  <div className="text-[52px] font-extrabold text-primary leading-none tracking-tighter tnum">
                    1
                  </div>
                  <p className="mt-3 text-[14px] sm:text-[15px] font-semibold text-secondary leading-snug">
                    rule: if it is not in writing, it did not happen.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-primary-border/60 flex items-center text-[12px] text-primary-ink font-mono uppercase tracking-mono font-medium">
                  The cardinal legal standard
                </div>
              </div>
            </div>
          </div>

          {/* Callout Card */}
          <div className="mt-8 bg-primary-soft border border-primary-border rounded-md p-7 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary-soft-2 text-primary shrink-0 flex items-center justify-center font-bold">
                !
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-mono text-primary-ink font-semibold block mb-1">
                  REMEMBER THIS PRINCIPLE
                </span>
                <p className="text-[17px] text-primary-ink font-medium leading-relaxed">
                  &ldquo;A warranty claim is decided on records. Keep yours, and ask for theirs in writing.&rdquo;
                </p>
              </div>
            </div>
            <button
              onClick={handleCopyLink}
              className="bg-white hover:bg-primary-soft-2 text-primary-ink border border-primary-border font-semibold text-[13.5px] py-2.5 px-5 rounded-full transition-colors flex items-center gap-2 shrink-0 self-start md:self-auto shadow-sm"
            >
              {copiedLink ? <Check className="w-4 h-4 text-primary" /> : <Share2 className="w-4 h-4 text-primary" />}
              <span>{copiedLink ? "Link Copied!" : "Share Rule"}</span>
            </button>
          </div>
        </div>
      </section>

      {/* 5. SECTION: BEFORE ANYTHING GOES WRONG (Steps 1-4) */}
      <section id="checklist-steps" className="bg-white py-20 md:py-28 border-b border-outline">
        <div className="max-w-shell mx-auto px-5 sm:px-8 md:px-10">
          {/* Header Stack */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary-soft border border-primary-border text-primary-ink text-[10px] font-mono font-medium tracking-mono uppercase px-[14px] py-[6px] rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              <span>PHASE 01 // STEPS 1 TO 4</span>
            </div>
            <h2 className="mt-4 text-[29px] sm:text-[38px] md:text-[44px] font-extrabold text-secondary tracking-tighter leading-tightest">
              BEFORE ANYTHING GOES WRONG
            </h2>
            <p className="mt-4 text-[18px] text-on-surface-variant leading-relaxed2 font-normal max-w-[62ch]">
              Take these four critical steps the week you buy any appliance or gadget, long before any defect appears.
            </p>
          </div>

          {/* 4 Cards in 2x2 Grid with hairline dividers */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Step 1 */}
            <div className="bg-surface rounded-md p-7 sm:p-8 border border-outline shadow-card hover:shadow-raised hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold tracking-mono text-primary bg-primary-soft px-3 py-1 rounded-full border border-primary-border">
                    STEP 01
                  </span>
                  <button
                    onClick={() => toggleCheck(1)}
                    className={`w-7 h-7 rounded-full flex items-center justify-center border transition-colors ${
                      checkedItems[1] ? "bg-primary border-primary text-white" : "border-outline text-transparent hover:border-primary"
                    }`}
                    aria-label="Mark step 1 complete"
                  >
                    <Check className="w-4 h-4 stroke-[3]" />
                  </button>
                </div>
                <h3 className="text-[22px] sm:text-[24px] font-extrabold text-secondary tracking-tight">
                  1. Keep the invoice.
                </h3>
                <p className="mt-3 text-[16.5px] text-on-surface leading-relaxed2 font-normal">
                  Save the original bill and a photo or PDF copy. The warranty normally starts on the invoice date.
                </p>
              </div>

              {/* Document card style note */}
              <div className="mt-6 bg-surface-2 p-4 rounded-sm border border-outline flex items-center justify-between text-[13px] text-on-surface-variant font-mono">
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-primary" />
                  Format: Physical Bill + Digital Scan
                </span>
                <span className="text-primary font-medium text-[11px] uppercase">Record 1 of 4</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-surface rounded-md p-7 sm:p-8 border border-outline shadow-card hover:shadow-raised hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold tracking-mono text-primary bg-primary-soft px-3 py-1 rounded-full border border-primary-border">
                    STEP 02
                  </span>
                  <button
                    onClick={() => toggleCheck(2)}
                    className={`w-7 h-7 rounded-full flex items-center justify-center border transition-colors ${
                      checkedItems[2] ? "bg-primary border-primary text-white" : "border-outline text-transparent hover:border-primary"
                    }`}
                    aria-label="Mark step 2 complete"
                  >
                    <Check className="w-4 h-4 stroke-[3]" />
                  </button>
                </div>
                <h3 className="text-[22px] sm:text-[24px] font-extrabold text-secondary tracking-tight">
                  2. Register the product.
                </h3>
                <p className="mt-3 text-[16.5px] text-on-surface leading-relaxed2 font-normal">
                  Many brands ask you to register on their website or app; some add extra warranty when you do.
                </p>
              </div>

              <div className="mt-6 bg-surface-2 p-4 rounded-sm border border-outline flex items-center justify-between text-[13px] text-on-surface-variant font-mono">
                <span className="flex items-center gap-2">
                  <ExternalLink className="w-4 h-4 text-primary" />
                  Channel: Brand Official Website / App
                </span>
                <span className="text-primary font-medium text-[11px] uppercase">Record 2 of 4</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-surface rounded-md p-7 sm:p-8 border border-outline shadow-card hover:shadow-raised hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold tracking-mono text-primary bg-primary-soft px-3 py-1 rounded-full border border-primary-border">
                    STEP 03
                  </span>
                  <button
                    onClick={() => toggleCheck(3)}
                    className={`w-7 h-7 rounded-full flex items-center justify-center border transition-colors ${
                      checkedItems[3] ? "bg-primary border-primary text-white" : "border-outline text-transparent hover:border-primary"
                    }`}
                    aria-label="Mark step 3 complete"
                  >
                    <Check className="w-4 h-4 stroke-[3]" />
                  </button>
                </div>
                <h3 className="text-[22px] sm:text-[24px] font-extrabold text-secondary tracking-tight">
                  3. Read the warranty card once.
                </h3>
                <p className="mt-3 text-[16.5px] text-on-surface leading-relaxed2 font-normal">
                  Note how long it lasts, what it covers, and what it excludes.
                </p>
              </div>

              <div className="mt-6 bg-surface-2 p-4 rounded-sm border border-outline flex items-center justify-between text-[13px] text-on-surface-variant font-mono">
                <span className="flex items-center gap-2">
                  <ClipboardList className="w-4 h-4 text-primary" />
                  Key check: Exclusions & coverage dates
                </span>
                <span className="text-primary font-medium text-[11px] uppercase">Record 3 of 4</span>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-surface rounded-md p-7 sm:p-8 border border-outline shadow-card hover:shadow-raised hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold tracking-mono text-primary bg-primary-soft px-3 py-1 rounded-full border border-primary-border">
                    STEP 04
                  </span>
                  <button
                    onClick={() => toggleCheck(4)}
                    className={`w-7 h-7 rounded-full flex items-center justify-center border transition-colors ${
                      checkedItems[4] ? "bg-primary border-primary text-white" : "border-outline text-transparent hover:border-primary"
                    }`}
                    aria-label="Mark step 4 complete"
                  >
                    <Check className="w-4 h-4 stroke-[3]" />
                  </button>
                </div>
                <h3 className="text-[22px] sm:text-[24px] font-extrabold text-secondary tracking-tight">
                  4. Record the condition.
                </h3>
                <p className="mt-3 text-[16.5px] text-on-surface leading-relaxed2 font-normal">
                  Take a few dated photos of the product once it is installed or unboxed.
                </p>
              </div>

              <div className="mt-6 bg-surface-2 p-4 rounded-sm border border-outline flex items-center justify-between text-[13px] text-on-surface-variant font-mono">
                <span className="flex items-center gap-2">
                  <Camera className="w-4 h-4 text-primary" />
                  Proof: Timestamped photos / unboxing
                </span>
                <span className="text-primary font-medium text-[11px] uppercase">Record 4 of 4</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION: WHEN THE FAULT APPEARS (Steps 5-7) */}
      <section className="bg-surface-muted py-20 md:py-28 border-b border-outline">
        <div className="max-w-shell mx-auto px-5 sm:px-8 md:px-10">
          {/* Header Stack */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary-soft border border-primary-border text-primary-ink text-[10px] font-mono font-medium tracking-mono uppercase px-[14px] py-[6px] rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              <span>PHASE 02 // STEPS 5 TO 7</span>
            </div>
            <h2 className="mt-4 text-[29px] sm:text-[38px] md:text-[44px] font-extrabold text-secondary tracking-tighter leading-tightest">
              WHEN THE FAULT APPEARS
            </h2>
            <p className="mt-4 text-[18px] text-on-surface-variant leading-relaxed2 font-normal max-w-[62ch]">
              Act quickly and build an undeniable paper trail as soon as an issue occurs.
            </p>
          </div>

          {/* 3 Steps in responsive 3-column grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 5 */}
            <div className="bg-surface rounded-md p-7 sm:p-8 border border-outline shadow-card hover:shadow-raised hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-semibold tracking-mono text-primary bg-primary-soft px-3 py-1 rounded-full border border-primary-border">
                    STEP 05
                  </span>
                  <button
                    onClick={() => toggleCheck(5)}
                    className={`w-7 h-7 rounded-full flex items-center justify-center border transition-colors ${
                      checkedItems[5] ? "bg-primary border-primary text-white" : "border-outline text-transparent hover:border-primary"
                    }`}
                    aria-label="Mark step 5 complete"
                  >
                    <Check className="w-4 h-4 stroke-[3]" />
                  </button>
                </div>
                <h3 className="text-[21px] font-extrabold text-secondary tracking-tight">
                  5. Record the fault.
                </h3>
                <p className="mt-3 text-[16px] text-on-surface leading-relaxed2 font-normal">
                  Take a clear photo or short video of the problem as soon as you see it, with the date visible if you can.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-outline text-[12px] font-mono text-on-surface-variant flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>Date-stamped footage or metadata</span>
              </div>
            </div>

            {/* Step 6 */}
            <div className="bg-surface rounded-md p-7 sm:p-8 border border-outline shadow-card hover:shadow-raised hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-semibold tracking-mono text-primary bg-primary-soft px-3 py-1 rounded-full border border-primary-border">
                    STEP 06
                  </span>
                  <button
                    onClick={() => toggleCheck(6)}
                    className={`w-7 h-7 rounded-full flex items-center justify-center border transition-colors ${
                      checkedItems[6] ? "bg-primary border-primary text-white" : "border-outline text-transparent hover:border-primary"
                    }`}
                    aria-label="Mark step 6 complete"
                  >
                    <Check className="w-4 h-4 stroke-[3]" />
                  </button>
                </div>
                <h3 className="text-[21px] font-extrabold text-secondary tracking-tight">
                  6. Raise the complaint in writing.
                </h3>
                <p className="mt-3 text-[16px] text-on-surface leading-relaxed2 font-normal">
                  Use email, the brand&apos;s website or its app, not only a phone call, so there is a record.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-outline text-[12px] font-mono text-on-surface-variant flex items-center gap-2">
                <FileText className="w-4 h-4 text-primary" />
                <span>Email / Ticket / Online Form</span>
              </div>
            </div>

            {/* Step 7 */}
            <div className="bg-surface rounded-md p-7 sm:p-8 border border-outline shadow-card hover:shadow-raised hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-semibold tracking-mono text-primary bg-primary-soft px-3 py-1 rounded-full border border-primary-border">
                    STEP 07
                  </span>
                  <button
                    onClick={() => toggleCheck(7)}
                    className={`w-7 h-7 rounded-full flex items-center justify-center border transition-colors ${
                      checkedItems[7] ? "bg-primary border-primary text-white" : "border-outline text-transparent hover:border-primary"
                    }`}
                    aria-label="Mark step 7 complete"
                  >
                    <Check className="w-4 h-4 stroke-[3]" />
                  </button>
                </div>
                <h3 className="text-[21px] font-extrabold text-secondary tracking-tight">
                  7. Note every reference number.
                </h3>
                <p className="mt-3 text-[16px] text-on-surface leading-relaxed2 font-normal">
                  Write down the complaint or ticket number, the date and the name of anyone you speak to.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-outline text-[12px] font-mono text-on-surface-variant flex items-center gap-2">
                <ClipboardList className="w-4 h-4 text-primary" />
                <span>Ticket # + Agent Name + Date</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION: WHEN A TECHNICIAN VISITS (Steps 8-10) */}
      <section className="bg-white py-20 md:py-28 border-b border-outline">
        <div className="max-w-shell mx-auto px-5 sm:px-8 md:px-10">
          {/* Header Stack */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary-soft border border-primary-border text-primary-ink text-[10px] font-mono font-medium tracking-mono uppercase px-[14px] py-[6px] rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              <span>PHASE 03 // STEPS 8 TO 10</span>
            </div>
            <h2 className="mt-4 text-[29px] sm:text-[38px] md:text-[44px] font-extrabold text-secondary tracking-tighter leading-tightest">
              WHEN A TECHNICIAN VISITS
            </h2>
            <p className="mt-4 text-[18px] text-on-surface-variant leading-relaxed2 font-normal max-w-[62ch]">
              Service visits are official diagnostics. Maintain clarity and obtain concrete documentation on the spot.
            </p>
          </div>

          {/* 3 Steps in responsive 3-column grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Step 8 */}
            <div className="bg-surface rounded-md p-7 sm:p-8 border border-outline shadow-card hover:shadow-raised hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-semibold tracking-mono text-primary bg-primary-soft px-3 py-1 rounded-full border border-primary-border">
                    STEP 08
                  </span>
                  <button
                    onClick={() => toggleCheck(8)}
                    className={`w-7 h-7 rounded-full flex items-center justify-center border transition-colors ${
                      checkedItems[8] ? "bg-primary border-primary text-white" : "border-outline text-transparent hover:border-primary"
                    }`}
                    aria-label="Mark step 8 complete"
                  >
                    <Check className="w-4 h-4 stroke-[3]" />
                  </button>
                </div>
                <h3 className="text-[21px] font-extrabold text-secondary tracking-tight">
                  8. Ask for the job sheet.
                </h3>
                <p className="mt-3 text-[16px] text-on-surface leading-relaxed2 font-normal">
                  Ask the technician for a copy of the visit report or job sheet before they leave.
                </p>
              </div>

              <div className="mt-6 p-3 bg-surface-2 rounded-sm border border-outline text-[12px] font-mono text-on-surface-variant">
                CRITICAL: Do not let them leave without a signed copy.
              </div>
            </div>

            {/* Step 9 */}
            <div className="bg-surface rounded-md p-7 sm:p-8 border border-outline shadow-card hover:shadow-raised hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-semibold tracking-mono text-primary bg-primary-soft px-3 py-1 rounded-full border border-primary-border">
                    STEP 09
                  </span>
                  <button
                    onClick={() => toggleCheck(9)}
                    className={`w-7 h-7 rounded-full flex items-center justify-center border transition-colors ${
                      checkedItems[9] ? "bg-primary border-primary text-white" : "border-outline text-transparent hover:border-primary"
                    }`}
                    aria-label="Mark step 9 complete"
                  >
                    <Check className="w-4 h-4 stroke-[3]" />
                  </button>
                </div>
                <h3 className="text-[21px] font-extrabold text-secondary tracking-tight">
                  9. Ask what was tested.
                </h3>
                <p className="mt-3 text-[16px] text-on-surface leading-relaxed2 font-normal">
                  Ask which test or instrument was used to reach the diagnosis.
                </p>
              </div>

              <div className="mt-6 p-3 bg-surface-2 rounded-sm border border-outline text-[12px] font-mono text-on-surface-variant">
                VERIFICATION: Ensure tests are documented in writing.
              </div>
            </div>

            {/* Step 10 */}
            <div className="bg-surface rounded-md p-7 sm:p-8 border border-outline shadow-card hover:shadow-raised hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-semibold tracking-mono text-primary bg-primary-soft px-3 py-1 rounded-full border border-primary-border">
                    STEP 10
                  </span>
                  <button
                    onClick={() => toggleCheck(10)}
                    className={`w-7 h-7 rounded-full flex items-center justify-center border transition-colors ${
                      checkedItems[10] ? "bg-primary border-primary text-white" : "border-outline text-transparent hover:border-primary"
                    }`}
                    aria-label="Mark step 10 complete"
                  >
                    <Check className="w-4 h-4 stroke-[3]" />
                  </button>
                </div>
                <h3 className="text-[21px] font-extrabold text-secondary tracking-tight">
                  10. Take your own photos.
                </h3>
                <p className="mt-3 text-[16px] text-on-surface leading-relaxed2 font-normal">
                  Photograph the product and anything the technician points to, during the visit.
                </p>
              </div>

              <div className="mt-6 p-3 bg-surface-2 rounded-sm border border-outline text-[12px] font-mono text-on-surface-variant">
                CORROBORATION: Capture parts, screens, and diagnostic tools.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SECTION: IF THE CLAIM IS REFUSED (Steps 11-15) - DARK SECTION */}
      {/* Follows DESIGN.md specifications for section-dark:
          backgroundColor '{colors.secondary}' (#0D1117), textColor '{colors.on-secondary}' (#FFFFFF),
          padding 148px (fluid), bright blue labels and key number, inner panels in white at 10% opacity. */}
      <section id="refusal-guide" className="bg-secondary text-on-secondary py-20 md:py-28 lg:py-36 relative overflow-hidden">
        <div className="max-w-shell mx-auto px-5 sm:px-8 md:px-10 relative z-10">
          {/* Header Stack */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-primary-bright/30 text-primary-bright text-[10px] font-mono font-medium tracking-mono uppercase px-[14px] py-[6px] rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-bright"></span>
              <span>PHASE 04 // ESCALATION & DISPUTE</span>
            </div>
            <h2 className="mt-4 text-[29px] sm:text-[38px] md:text-[44px] font-extrabold text-white tracking-tighter leading-tightest">
              IF THE CLAIM IS REFUSED
            </h2>
            <p className="mt-4 text-[18px] text-white/75 leading-relaxed2 font-normal max-w-[62ch]">
              A refusal is an opening statement, not the final word. Ground your response entirely on technical evidence and factual paper trails.
            </p>
          </div>

          {/* Steps 11 to 15 in dark cards (inner panels in white at 10% opacity) */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Step 11 */}
            <div className="bg-white/10 rounded-md p-7 sm:p-8 border border-white/10 hover:border-primary-bright/40 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-semibold tracking-mono text-primary-bright bg-white/10 px-3 py-1 rounded-full border border-primary-bright/20">
                    STEP 11
                  </span>
                  <button
                    onClick={() => toggleCheck(11)}
                    className={`w-7 h-7 rounded-full flex items-center justify-center border transition-colors ${
                      checkedItems[11] ? "bg-primary-bright border-primary-bright text-secondary font-bold" : "border-white/20 text-transparent hover:border-primary-bright"
                    }`}
                    aria-label="Mark step 11 complete"
                  >
                    <Check className="w-4 h-4 stroke-[3]" />
                  </button>
                </div>
                <h3 className="text-[21px] font-extrabold text-white tracking-tight">
                  11. Ask for the reason in writing.
                </h3>
                <p className="mt-3 text-[16px] text-white/80 leading-relaxed2 font-normal">
                  Request a written explanation that names the exact cause and the evidence for it.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-[12px] font-mono text-primary-bright">
                No verbal dismissals accepted.
              </div>
            </div>

            {/* Step 12 */}
            <div className="bg-white/10 rounded-md p-7 sm:p-8 border border-white/10 hover:border-primary-bright/40 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-semibold tracking-mono text-primary-bright bg-white/10 px-3 py-1 rounded-full border border-primary-bright/20">
                    STEP 12
                  </span>
                  <button
                    onClick={() => toggleCheck(12)}
                    className={`w-7 h-7 rounded-full flex items-center justify-center border transition-colors ${
                      checkedItems[12] ? "bg-primary-bright border-primary-bright text-secondary font-bold" : "border-white/20 text-transparent hover:border-primary-bright"
                    }`}
                    aria-label="Mark step 12 complete"
                  >
                    <Check className="w-4 h-4 stroke-[3]" />
                  </button>
                </div>
                <h3 className="text-[21px] font-extrabold text-white tracking-tight">
                  12. Ask for the technical report.
                </h3>
                <p className="mt-3 text-[16px] text-white/80 leading-relaxed2 font-normal">
                  If the refusal rests on an inspection, ask for that inspection report.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-[12px] font-mono text-primary-bright">
                Require technician findings & test data.
              </div>
            </div>

            {/* Step 13 */}
            <div className="bg-white/10 rounded-md p-7 sm:p-8 border border-white/10 hover:border-primary-bright/40 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-semibold tracking-mono text-primary-bright bg-white/10 px-3 py-1 rounded-full border border-primary-bright/20">
                    STEP 13
                  </span>
                  <button
                    onClick={() => toggleCheck(13)}
                    className={`w-7 h-7 rounded-full flex items-center justify-center border transition-colors ${
                      checkedItems[13] ? "bg-primary-bright border-primary-bright text-secondary font-bold" : "border-white/20 text-transparent hover:border-primary-bright"
                    }`}
                    aria-label="Mark step 13 complete"
                  >
                    <Check className="w-4 h-4 stroke-[3]" />
                  </button>
                </div>
                <h3 className="text-[21px] font-extrabold text-white tracking-tight">
                  13. Escalate inside the company.
                </h3>
                <p className="mt-3 text-[16px] text-white/80 leading-relaxed2 font-normal">
                  Most brands list a grievance or escalation contact on their website. Write to it, quoting your complaint number.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-[12px] font-mono text-primary-bright">
                Appellate & grievance officers.
              </div>
            </div>

            {/* Step 14 */}
            <div className="bg-white/10 rounded-md p-7 sm:p-8 border border-white/10 hover:border-primary-bright/40 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-semibold tracking-mono text-primary-bright bg-white/10 px-3 py-1 rounded-full border border-primary-bright/20">
                    STEP 14
                  </span>
                  <button
                    onClick={() => toggleCheck(14)}
                    className={`w-7 h-7 rounded-full flex items-center justify-center border transition-colors ${
                      checkedItems[14] ? "bg-primary-bright border-primary-bright text-secondary font-bold" : "border-white/20 text-transparent hover:border-primary-bright"
                    }`}
                    aria-label="Mark step 14 complete"
                  >
                    <Check className="w-4 h-4 stroke-[3]" />
                  </button>
                </div>
                <h3 className="text-[21px] font-extrabold text-white tracking-tight">
                  14. Keep it factual.
                </h3>
                <p className="mt-3 text-[16px] text-white/80 leading-relaxed2 font-normal">
                  Stick to dates, documents and photos. Calm, written records are what a consumer forum or regulator will look at.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 text-[12px] font-mono text-primary-bright">
                Evidence over emotions always.
              </div>
            </div>

            {/* Step 15 */}
            <div className="bg-white/10 rounded-md p-7 sm:p-8 border border-white/10 hover:border-primary-bright/40 hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between md:col-span-2 lg:col-span-2">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-semibold tracking-mono text-primary-bright bg-white/10 px-3 py-1 rounded-full border border-primary-bright/20">
                    STEP 15 // FINAL ARBITRATION
                  </span>
                  <button
                    onClick={() => toggleCheck(15)}
                    className={`w-7 h-7 rounded-full flex items-center justify-center border transition-colors ${
                      checkedItems[15] ? "bg-primary-bright border-primary-bright text-secondary font-bold" : "border-white/20 text-transparent hover:border-primary-bright"
                    }`}
                    aria-label="Mark step 15 complete"
                  >
                    <Check className="w-4 h-4 stroke-[3]" />
                  </button>
                </div>
                <h3 className="text-[21px] font-extrabold text-white tracking-tight">
                  15. Know your consumer helpline.
                </h3>
                <p className="mt-3 text-[16px] text-white/80 leading-relaxed2 font-normal">
                  Most countries run a free consumer helpline or online complaint portal that can guide you on the next step.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[12px] font-mono text-primary-bright">
                <span>Free statutory rights & regulatory arbitration</span>
                <span className="hidden sm:inline-block">CHECKLIST COMPLETE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SECTION: CALL TO ACTION */}
      <section id="download-cta" className="bg-surface-muted py-20 md:py-28 border-b border-outline">
        <div className="max-w-shell-narrow mx-auto px-5 sm:px-8 md:px-10">
          {/* Header Stack */}
          <div className="text-center max-w-xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary-soft border border-primary-border text-primary-ink text-[10px] font-mono font-medium tracking-mono uppercase px-[14px] py-[6px] rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              <span>TAKE ACTION TODAY</span>
            </div>
            <h2 className="mt-4 text-[29px] sm:text-[38px] md:text-[44px] font-extrabold text-secondary tracking-tighter leading-tightest text-balance">
              CALL TO ACTION
            </h2>
            <p className="mt-4 text-[18px] text-on-surface-variant leading-relaxed2 font-normal">
              Two simple things you can do right now to safeguard your consumer purchases.
            </p>
          </div>

          {/* Action Cards */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* CTA 1: Download */}
            <div className="bg-white rounded-md p-8 border border-outline shadow-card flex flex-col justify-between hover:shadow-raised hover:-translate-y-0.5 transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-full bg-primary-soft border border-primary-border flex items-center justify-center text-primary mb-5">
                  <Download className="w-6 h-6" />
                </div>
                <h3 className="text-[20px] font-extrabold text-secondary tracking-tight">
                  Download the checklist and keep it with your invoices.
                </h3>
                <p className="mt-3 text-[15px] text-on-surface-variant leading-relaxed">
                  Save a digital text file or print a copy to store alongside your receipts, guarantee certificates, and warranty cards.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <button
                  onClick={handleDownloadChecklist}
                  className="w-full bg-primary hover:bg-primary-strong text-white font-semibold text-[15px] py-[14px] px-6 rounded-full shadow-raised hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Plain Text Checklist</span>
                </button>
                <button
                  onClick={handlePrint}
                  className="w-full bg-surface-2 hover:bg-surface-sunken text-on-surface-strong border border-outline font-semibold text-[14px] py-[10px] px-5 rounded-full transition-colors flex items-center justify-center gap-2"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Friendly Checklist</span>
                </button>
              </div>
            </div>

            {/* CTA 2: Share */}
            <div className="bg-white rounded-md p-8 border border-outline shadow-card flex flex-col justify-between hover:shadow-raised hover:-translate-y-0.5 transition-all duration-300">
              <div>
                <div className="w-12 h-12 rounded-full bg-primary-soft border border-primary-border flex items-center justify-center text-primary mb-5">
                  <Share2 className="w-6 h-6" />
                </div>
                <h3 className="text-[20px] font-extrabold text-secondary tracking-tight">
                  Share it with a friend who just bought something expensive.
                </h3>
                <p className="mt-3 text-[15px] text-on-surface-variant leading-relaxed">
                  Help someone protect their new TV, smartphone, laptop or household appliance before something unexpectedly breaks.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                <button
                  onClick={handleCopyLink}
                  className="w-full bg-secondary hover:bg-primary text-white font-semibold text-[15px] py-[14px] px-6 rounded-full shadow-raised hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {copiedLink ? <Check className="w-4 h-4 text-white" /> : <Share2 className="w-4 h-4" />}
                  <span>{copiedLink ? "Link Copied to Clipboard!" : "Copy & Share Guide Link"}</span>
                </button>

                <div className="text-center">
                  <span className="text-[12px] font-mono text-on-surface-muted uppercase tracking-mono">
                    Free • No sign-up required • 100% open
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FOOTER NOTE & FOOTER */}
      {/* Follows DESIGN.md footer:
          backgroundColor '{colors.surface-muted}' (#F7F8FA), textColor '{colors.on-surface-variant}' (#5B6472),
          typography '{typography.body-sm}', padding 64px, 1px top hairline. */}
      <footer className="bg-surface-muted text-on-surface-variant border-t border-outline py-16">
        <div className="max-w-shell mx-auto px-5 sm:px-8 md:px-10">
          {/* Main Footer Grid: 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            {/* Col 1: About & Footer Note */}
            <div className="md:col-span-6 flex flex-col">
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs">
                  F
                </span>
                <span className="font-extrabold text-secondary text-[16px] tracking-tight">
                  FIZA WARRANTY CLAIM GUIDE
                </span>
              </div>

              {/* Exact wording from content.txt FOOTER NOTE */}
              <div className="mt-5 p-5 bg-white rounded-md border border-outline shadow-card">
                <span className="text-[11px] font-mono font-semibold text-primary uppercase tracking-mono block mb-2">
                  FOOTER NOTE
                </span>
                <p className="text-[13.5px] leading-relaxed text-on-surface font-normal">
                  Fiza Warranty Claim Guide is a free, general guide. It is not legal advice. For your own case, check the warranty terms for your product and your country&apos;s consumer rules.
                </p>
                <div className="mt-3 pt-3 border-t border-outline flex items-center justify-between text-[11px] font-mono text-on-surface-muted uppercase">
                  <span>Prepared by: Fiza</span>
                  <span>Consumer Defense</span>
                </div>
              </div>
            </div>

            {/* Col 2: Sections Navigation */}
            <div className="md:col-span-3 flex flex-col">
              <span className="text-[12px] font-mono uppercase tracking-mono font-semibold text-secondary mb-4">
                CHECKLIST SECTIONS
              </span>
              <ul className="space-y-2 text-[13.5px]">
                <li>
                  <a href="#checklist-steps" className="hover:text-primary transition-colors">
                    Before Anything Goes Wrong (1–4)
                  </a>
                </li>
                <li>
                  <a href="#checklist-steps" className="hover:text-primary transition-colors">
                    When The Fault Appears (5–7)
                  </a>
                </li>
                <li>
                  <a href="#checklist-steps" className="hover:text-primary transition-colors">
                    When A Technician Visits (8–10)
                  </a>
                </li>
                <li>
                  <a href="#refusal-guide" className="hover:text-primary transition-colors">
                    If The Claim Is Refused (11–15)
                  </a>
                </li>
                <li>
                  <a href="#key-numbers" className="hover:text-primary transition-colors">
                    Key Numbers & Metrics
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Key Principles */}
            <div className="md:col-span-3 flex flex-col">
              <span className="text-[12px] font-mono uppercase tracking-mono font-semibold text-secondary mb-4">
                THE FOUNDATION
              </span>
              <p className="text-[13.5px] text-on-surface-variant leading-relaxed">
                A warranty claim is decided on records. Keep yours, and ask for theirs in writing.
              </p>
              <div className="mt-4 p-3 bg-surface-2 rounded-sm border border-outline text-[12px] font-mono text-primary-ink">
                1 rule: if it is not in writing, it did not happen.
              </div>
            </div>
          </div>

          {/* Sub-footer bottom legal line */}
          <div className="mt-12 pt-8 border-t border-outline flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-on-surface-muted">
            <p>
              Prepared by: Fiza • Fiza Warranty Claim Guide
            </p>
            <p className="font-mono text-[11px] uppercase tracking-mono">
              BLUE EDITORIAL DESIGN SYSTEM // LIGHT THEME ONLY
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

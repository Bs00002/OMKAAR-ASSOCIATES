import { ServiceItem, PillarInfo, FaqItem } from '../types';

export const FINANCIAL_SERVICES: ServiceItem[] = [
  {
    id: 'financial-assistance',
    slug: 'financial-assistance',
    pillarId: 'financial',
    title: 'Financial Guidance & Assistance',
    shortDesc: 'End-to-end guidance for financial planning, loan documentation, and lender eligibility matching.',
    iconName: 'ShieldCheck',
    tag: 'Financial Facilitation',
    highlightText: 'Structured guidance based on your profile and eligibility criteria.',
    route: '/financial/financial-assistance',
    overview: 'Omkaar Associates offers end-to-end guidance for individuals and business entities seeking financial assistance, gold loan evaluation, home loan paperwork, mortgage advisory, and balance transfer options. We assist you in evaluating your eligibility across banks and financial institutions, streamlining paperwork, and navigating application procedures smoothly.',
    whatWeAssistWith: [
      'Comprehensive profile evaluation and debt-to-income analysis',
      'Assistance in identifying eligible lenders suited to your income profile',
      'Verification and organization of KYC and income documents',
      'Guidance through digital or branch application workflows',
      'Follow-up and coordination until application review is finalized'
    ],
    requiredDocuments: [
      'Identity Proof (Aadhaar Card, PAN Card, Passport, or Voter ID)',
      'Current Address Proof (Utility bill, Rent agreement, or Aadhaar)',
      'Income Proof: Last 3 to 6 months bank statements reflecting income or business cash flow',
      'Latest 3 months salary slips & Form 16 (for Salaried applicants)',
      'Last 2 years ITR with computation, Balance Sheet & P&L statement (for Self-Employed)',
      'Passport size photographs'
    ],
    processSteps: [
      { step: '01', title: 'Consultation & Profile Check', description: 'We evaluate your requirement, income structure, and financial status to understand suitable options.' },
      { step: '02', title: 'Document Collation & Review', description: 'We assist in reviewing and organizing all mandatory documentation to minimize processing queries.' },
      { step: '03', title: 'Application Submission Guidance', description: 'We help you lodge the formal application with the chosen financial institution.' },
      { step: '04', title: 'Verification Assistance', description: 'We guide you through lender verification calls, address verification, and query resolution.' },
      { step: '05', title: 'Disbursement Coordination', description: 'Assistance in reviewing sanction terms before finalization.' }
    ],
    faqs: [
      { q: 'Is Omkaar Associates a direct lender?', a: 'No. Omkaar Associates is a professional service assistance and consultancy firm. We provide application guidance, documentation support, and process facilitation. Final credit decisions rest exclusively with the respective banks/NBFCs.' },
      { q: 'Do you guarantee loan approval?', a: 'No. We never guarantee loan approval. Approval depends solely on the lending institution’s underwriting criteria, applicant credit history, and document validation.' }
    ]
  },
  {
    id: 'gold-loan-assistance',
    slug: 'gold-loan-assistance',
    pillarId: 'financial',
    title: 'Gold Loan Assistance',
    shortDesc: 'Step-by-step assistance for gold valuation, documentation, and prompt processing.',
    iconName: 'Coins',
    tag: 'Secured Asset Assistance',
    highlightText: 'Immediate liquidity guidance against physical gold jewelry with transparent terms.',
    route: '/financial/gold-loan-assistance',
    overview: 'When urgent liquidity is needed, gold loans represent one of the most accessible secured borrowing options. Omkaar Associates helps you navigate gold loan evaluation, comparing loan-to-value (LTV) limits, interest structures, and documentation requirements across reputed banks and authorized gold finance institutions.',
    whatWeAssistWith: [
      'Guidance on evaluating pure gold weight vs stones/deductions',
      'Assisting in identifying branches with transparent valuation and secure vaults',
      'Preparation of essential KYC and bank account documentation',
      'Explanation of repayment schemes (bullet repayment vs regular EMI)',
      'Guidance on loan closure and pledge redemption procedures'
    ],
    requiredDocuments: [
      'Proof of Identity (PAN Card, Aadhaar Card, Passport)',
      'Proof of Residential Address (Aadhaar, Electricity Bill, Voter ID)',
      'Bank Account Details / Cancelled Cheque for funds transfer',
      'Recent Passport Size Photographs'
    ],
    processSteps: [
      { step: '01', title: 'Initial Consultation', description: 'Assess required fund amount and approximate gold ornaments available.' },
      { step: '02', title: 'Lender & Scheme Guidance', description: 'Identify appropriate authorized institutions offering favorable terms and transparent locker security.' },
      { step: '03', title: 'Valuation & Documentation', description: 'Guidance during formal purity assessment and KYC verification at the institution.' },
      { step: '04', title: 'Pledge Receipt & Fund Transfer', description: 'Ensuring you receive an accurate pledge receipt with recorded weight and instant account transfer.' }
    ],
    faqs: [
      { q: 'What purity of gold is accepted by financial institutions?', a: 'Most banks and NBFCs accept hallmarked gold jewelry of 18 to 22 carats. Gold coins issued by banks are also accepted up to specified RBI limits.' },
      { q: 'Is income proof mandatory for gold loans?', a: 'In most standard gold loan applications, primary security is the gold ornament; hence detailed income proof is often minimal compared to personal loans.' }
    ]
  },
  {
    id: 'home-loan-assistance',
    slug: 'home-loan-assistance',
    pillarId: 'financial',
    title: 'Home Loan Assistance',
    shortDesc: 'Complete guidance for home purchase, construction, plot purchase and balance transfer.',
    iconName: 'Home',
    tag: 'Property & Housing Support',
    highlightText: 'Navigating technical and legal property documentation for seamless housing finance.',
    route: '/financial/home-loan-assistance',
    overview: 'Purchasing a home or constructing property involves complex financial calculations, legal property clearance, and technical valuations. Omkaar Associates acts as your dedicated documentation and process guide, helping you understand eligibility, co-applicant benefits, interest types (fixed vs floating), and legal verification workflows.',
    whatWeAssistWith: [
      'Home loan eligibility assessment based on income and existing obligations',
      'Guidance on property legal title chain, occupancy certificate, and NOC check',
      'Guidance for Pradhan Mantri Awas Yojana (PMAY) / government subsidy eligibility if applicable',
      'Assistance with balance transfer and top-up loan documentation',
      'Coordination between buyer, seller/builder, and the financing institution'
    ],
    requiredDocuments: [
      'KYC documents of Applicant and Co-applicant (Aadhaar, PAN, Photos)',
      'Income Proof: Last 6 months bank statements, 3 months salary slips, Form 16 (Salaried)',
      'Business KYC, 3 years ITR, P&L, Balance Sheet, GST returns (Self-Employed)',
      'Property Documents: Agreement to sale, title deed chain, sanctioned floor plan, encumbrance certificate (EC)',
      'Tax receipts of property and builder NOC where applicable'
    ],
    processSteps: [
      { step: '01', title: 'Eligibility & Requirement Assessment', description: 'Analyze joint income, tenure, and property purchase value to establish feasible budgets.' },
      { step: '02', title: 'Property Paperwork Review', description: 'Check completeness of legal chain documents required by lender legal teams.' },
      { step: '03', title: 'Application & In-principle Sanction', description: 'Submit formal application and follow through credit underwriting evaluation.' },
      { step: '04', title: 'Legal & Technical Valuation Support', description: 'Facilitate site visit by bank valuers and legal report clearances.' },
      { step: '05', title: 'Agreement Signing & Disbursement', description: 'Guidance through MODTD registration and step-wise disbursement stages.' }
    ],
    faqs: [
      { q: 'Can I add a co-applicant to increase loan eligibility?', a: 'Yes, adding an earning spouse, parent, or child as a co-applicant generally enhances total household eligibility.' },
      { q: 'What is the typical maximum tenure for a home loan?', a: 'Most housing finance companies offer tenures up to 20 to 30 years, subject to the retirement age of the applicant.' }
    ]
  },
  {
    id: 'mortgage-loan-assistance',
    slug: 'mortgage-loan-assistance',
    pillarId: 'financial',
    title: 'Mortgage Loan (LAP) Assistance',
    shortDesc: 'Guidance on unlocking the financial potential of your residential or commercial property.',
    iconName: 'Building',
    tag: 'Loan Against Property',
    highlightText: 'Leverage property equity for business expansion or substantial long-term requirements.',
    route: '/financial/mortgage-loan-assistance',
    overview: 'A Loan Against Property (LAP) allows property owners to access substantial funds at competitive interest rates by pledging fully owned residential, commercial, or industrial real estate. Omkaar Associates assists you in collating intricate property title records, business financial records, and navigating lender property evaluations.',
    whatWeAssistWith: [
      'Property market value vs loan requirement assessment',
      'Assistance for self-employed businessmen, manufacturers, traders, and professionals',
      'Guidance on clear title documentation, mutation records, and freehold status',
      'Structuring customized repayment tenures aligned with business cash flows',
      'Assistance with debt consolidation and existing high-cost loan restructuring'
    ],
    requiredDocuments: [
      'KYC documents of all property co-owners and business partners/directors',
      'Original title deeds, registered sale deed, partition deed, conveyance deed',
      'Approved municipal sanction plan, mutation copy, and property tax paid receipts',
      'Past 3 years audited financials (P&L, Balance Sheet, Audit Report)',
      '12 months primary current bank account statements'
    ],
    processSteps: [
      { step: '01', title: 'Property & Financial Evaluation', description: 'Review property type, location, ownership title, and business balance sheet.' },
      { step: '02', title: 'Document Compilation', description: 'Assemble complete legal chain, tax receipts, and audited business records.' },
      { step: '03', title: 'Lender Processing Coordination', description: 'Facilitate lender property valuation and legal search report across registrar offices.' },
      { step: '04', title: 'Sanction & Execution', description: 'Assist with mortgage registration (Equitable/Registered) and fund release.' }
    ],
    faqs: [
      { q: 'Can commercial or industrial properties be mortgaged?', a: 'Yes, most lenders accept approved commercial premises, offices, shops, and selected industrial units with clear municipal approvals.' },
      { q: 'Can joint-property owners apply?', a: 'Yes, all co-owners of the pledged property must be co-applicants on the loan application.' }
    ]
  },
  {
    id: 'gst',
    slug: 'gst',
    pillarId: 'financial',
    title: 'GST Services & Assistance',
    shortDesc: 'Assistance with GST registration, monthly/quarterly return filings, and compliance.',
    iconName: 'FileSpreadsheet',
    tag: 'Business Tax Compliance',
    highlightText: 'Timely GST filings, reconciliation, and documentation support for enterprises.',
    route: '/financial/gst',
    overview: 'Goods and Services Tax (GST) compliance is crucial for every growing business in India. Omkaar Associates provides organized assistance for new GST registration, composition scheme applications, monthly GSTR-1 & GSTR-3B return compilation, input tax credit (ITC) reconciliation, and cancellation/amendment workflows.',
    whatWeAssistWith: [
      'New GST registration for Proprietorships, Partnerships, LLPs, and Private Limited companies',
      'Compilation of sales and purchase invoices for monthly/quarterly return preparation',
      'Guidance on GSTR-1, GSTR-3B, and GSTR-9 annual return filings',
      'Assistance with Input Tax Credit (ITC) reconciliation and vendor follow-up guidance',
      'Guidance on replying to GST notices, amendment of business premises, and LUT filing for exports'
    ],
    requiredDocuments: [
      'PAN Card of Business entity & Proprietor / Partners / Directors',
      'Aadhaar Card and Photograph of authorized signatory',
      'Proof of Business Registration (Partnership Deed, Certificate of Incorporation, Shop Act)',
      'Proof of Business Address (Electricity Bill, Rent Agreement, NOC from Owner)',
      'Bank Account Statement / Cancelled Cheque with IFSC & account number',
      'Digital Signature Certificate (DSC) where applicable'
    ],
    processSteps: [
      { step: '01', title: 'Requirement Analysis', description: 'Determine registration type, turnover threshold, and applicable GST category.' },
      { step: '02', title: 'Data & Document Gathering', description: 'Collect business address proofs, authorization letters, and bank credentials.' },
      { step: '03', title: 'Portal Application / Filing Preparation', description: 'Prepare portal draft, verify HSN/SAC codes, and review invoice summaries.' },
      { step: '04', title: 'Filing & ARN Tracking', description: 'Submit with Aadhaar OTP/DSC verification and provide ARN / GST Certificate upon approval.' }
    ],
    faqs: [
      { q: 'Who is required to obtain GST registration?', a: 'Businesses selling goods with annual turnover exceeding Rs 40 Lakhs (Rs 20 Lakhs for special category states) and service providers exceeding Rs 20 Lakhs are required to register, along with inter-state and e-commerce sellers.' },
      { q: 'Do you assist with nil return filings?', a: 'Yes, we assist in compiling and lodging nil returns as well as full invoice returns accurately.' }
    ]
  },
  {
    id: 'itr',
    slug: 'itr',
    pillarId: 'financial',
    title: 'ITR Filing Assistance',
    shortDesc: 'Comprehensive assistance for salaried, freelance, business, and capital gains tax returns.',
    iconName: 'Receipt',
    tag: 'Direct Tax Support',
    highlightText: 'Accurate tax return documentation ensuring claim of all eligible deductions.',
    route: '/financial/itr',
    overview: 'Filing your Income Tax Return accurately and on time ensures financial credibility for loan applications, visa processing, and avoids statutory penalties. Omkaar Associates assists individuals, professionals, and small businesses in organizing Form 16, AIS/TIS data, investment proofs, and choosing the right ITR form (ITR-1 through ITR-4).',
    whatWeAssistWith: [
      'Selection of Old vs New Tax Regime based on your specific deductions and investments',
      'Collation of Form 16, Form 26AS, and AIS/TIS annual information statements',
      'Tax return preparation for Salaried employees, Freelancers, Consultants, and Traders',
      'Assistance with Capital Gains tax documentation from property, mutual funds, or equity',
      'Filing of revised returns, responding to tax intimation queries, and refund tracking'
    ],
    requiredDocuments: [
      'PAN Card and Aadhaar Card (linked together)',
      'Form 16 / 16A provided by employers or deductors',
      'Bank Account Statements for all active bank accounts for the financial year',
      'Proof of Tax-Saving Investments (Section 80C, 80D, 80G, NPS, Home Loan Interest certificate)',
      'Capital Gains summary statements from brokers / Mutual Fund houses if applicable'
    ],
    processSteps: [
      { step: '01', title: 'Document Collection', description: 'Collate Form 16, AIS, interest certificates, and deduction proofs.' },
      { step: '02', title: 'Regime Comparison & Computation', description: 'Compute tax liability under both Old and New Tax Regimes to identify the beneficial path.' },
      { step: '03', title: 'Return Draft Preparation', description: 'Prepare correct ITR form with cross-verified TDS credit details.' },
      { step: '04', title: 'E-Filing & E-Verification', description: 'Submit on Income Tax portal and assist with immediate Aadhaar OTP e-verification.' }
    ],
    faqs: [
      { q: 'Is it beneficial to file ITR even if my income is below taxable limits?', a: 'Yes. A regular ITR serves as an essential income and address proof for bank loans, credit cards, insurance underwriting, and visa applications.' },
      { q: 'What is AIS and why is it important?', a: 'The Annual Information Statement (AIS) captures all financial transactions including bank interest, dividends, securities trading, and high-value purchases reported by third parties to the Income Tax Department.' }
    ]
  },
  {
    id: 'legal-consultancy',
    slug: 'legal-consultancy',
    pillarId: 'financial',
    title: 'Legal Consultancy & Documentation',
    shortDesc: 'Assistance with agreements, property vetting, affidavits, and commercial contracts.',
    iconName: 'Scale',
    tag: 'Contract & Legal Guidance',
    highlightText: 'Drafting clear, enforceable agreements and structured legal consultation.',
    route: '/financial/legal-consultancy',
    overview: 'Solid documentation is the backbone of any commercial transaction, lease, partnership, or property deal. Omkaar Associates assists clients with drafting, reviewing, and formatting legal documents, rent agreements, partnership deeds, affidavits, and facilitating professional legal consultations.',
    whatWeAssistWith: [
      'Drafting and review of Residential & Commercial Rent Agreements / Lease Deeds',
      'Drafting Partnership Deeds, MOU (Memorandum of Understanding), and Vendor Contracts',
      'Assistance with Power of Attorney (POA), Indemnity Bonds, and general affidavits',
      'Property title search assistance and documentation verification guidance',
      'Guidance for corporate compliance documentation and basic dispute resolution consultation'
    ],
    requiredDocuments: [
      'Identity & Address proofs of all executing parties',
      'Property title documents, latest tax receipts, or premise ownership proofs (for leases/agreements)',
      'Terms of agreement, consideration amounts, covenants, and witness identification records'
    ],
    processSteps: [
      { step: '01', title: 'Initial Briefing', description: 'Understand the exact purpose, terms, obligations, and commercial intentions.' },
      { step: '02', title: 'Drafting & Clause Formulation', description: 'Formulate a balanced, comprehensive draft incorporating protective legal clauses.' },
      { step: '03', title: 'Client Review & Revisions', description: 'Share draft with parties for review and make necessary amendments.' },
      { step: '04', title: 'Execution & Notarization / Registration Guidance', description: 'Guide through stamp duty payment, franking, notarization, or sub-registrar registration.' }
    ],
    faqs: [
      { q: 'Do you assist with registered rent agreements?', a: 'Yes, we assist in preparing drafts, scheduling biometric appointments, and completing registered rent agreement procedures.' },
      { q: 'Can customized business contracts be prepared?', a: 'Yes, we provide assistance for tailored service level agreements (SLA), non-disclosure agreements (NDA), and commercial contracts.' }
    ]
  }
];

export const RTO_SERVICES: ServiceItem[] = [
  {
    id: 'rto-services',
    slug: 'rto-services',
    pillarId: 'rto-documentation',
    title: 'Comprehensive RTO Services',
    shortDesc: 'Assistance for all Motor Vehicles Department services, licences, and vehicle transfers.',
    iconName: 'Car',
    tag: 'RTO Facilitation',
    highlightText: 'End-to-end guidance for Sarathi & Vahan portal applications and documentation.',
    route: '/rto-documentation/rto-services',
    overview: 'Navigating RTO processes, Sarathi parivahan portals, appointment booking, and file compilation can be confusing and time-consuming. Omkaar Associates functions as your dedicated service facilitator, guiding you through driving licence applications, vehicle registration changes, fitness certificates, and ownership transfers with complete transparency.',
    whatWeAssistWith: [
      'New Driving Licence (DL) & Learner Licence (LL) applications and slot booking',
      'Driving Licence Renewal, Duplicate Licence, and Address / Mobile Number updates',
      'Driving Test guidance, track simulation knowledge, and mandatory document files',
      'Vehicle Registration Certificate (RC) Transfer, Hypothecation Endorsement & Cancellation (HP HP / HP NOC)',
      'No Objection Certificate (NOC) for inter-state vehicle transfers and address changes',
      'Duplicate RC, Fitness Certificate renewal, and Commercial permit documentation'
    ],
    requiredDocuments: [
      'Proof of Age & Identity (Aadhaar Card, Birth Certificate, School Leaving Certificate, Passport)',
      'Current Address Proof (Aadhaar, Voter ID, Electricity Bill, Registered Rent Agreement)',
      'Medical Certificate Form 1-A (for applicants above 40 years or commercial licences)',
      'Original RC, Form 29 & 30, Pollution Under Control (PUC) certificate, and Valid Insurance (for vehicle transfer)',
      'Recent passport-sized photographs'
    ],
    processSteps: [
      { step: '01', title: 'Requirement Identification', description: 'Determine exact RTO jurisdiction, vehicle category (2-wheeler, 4-wheeler, commercial), and required service.' },
      { step: '02', title: 'Document Audit & Form Filling', description: 'Prepare accurate forms on Sarathi/Vahan portal with proper upload of supporting documents.' },
      { step: '03', title: 'Fee Payment & Slot Booking', description: 'Assist in government fee payment and scheduling convenient RTO visit/test slots.' },
      { step: '04', title: 'RTO Visit Preparation', description: 'Hand over an organized physical file with all required receipts, forms, and guidance for test/biometrics.' },
      { step: '05', title: 'Dispatch & Delivery Tracking', description: 'Track application status until the physical Smart Card DL or RC is dispatched to your registered address.' }
    ],
    faqs: [
      { q: 'Is Omkaar Associates a government RTO office?', a: 'No. Omkaar Associates is a private consultancy and service centre. We assist citizens with online application filing, document preparation, slot booking, and process guidance. All final approvals and test evaluations are conducted solely by government RTO officers.' },
      { q: 'What is the validity of a Learner Licence?', a: 'A Learner Licence is valid across India for 6 months from the date of issue. You can apply for a permanent Driving Licence after 30 days of holding the LL.' },
      { q: 'What is needed to remove loan hypothecation (HP cancel) from RC?', a: 'You need Form 35 (in duplicate) signed by your bank/financier, Bank NOC letter, Original RC, valid Insurance, PUC, and Aadhaar card.' }
    ]
  },
  {
    id: 'aadhaar',
    slug: 'aadhaar',
    pillarId: 'rto-documentation',
    title: 'Aadhaar Seva Assistance',
    shortDesc: 'Guidance for Aadhaar demographic updates, address updates, and document verification.',
    iconName: 'Fingerprint',
    tag: 'Identity Document Support',
    highlightText: 'Streamlined guidance for official UIDAI portal appointments and valid supporting docs.',
    route: '/rto-documentation/aadhaar',
    overview: 'Keeping your Aadhaar updated with your current mobile number, address, and legal name is essential for banking, government schemes, PAN linkage, and telecom services. Omkaar Associates assists you in identifying valid UIDAI-recognized supporting documents and booking appointment slots at authorized Aadhaar Seva Kendras.',
    whatWeAssistWith: [
      'Guidance on valid Proof of Address (PoA) and Proof of Identity (PoI) as per latest UIDAI guidelines',
      'Assistance in booking appointments at authorized Aadhaar Seva Kendras (ASK)',
      'Guidance for mandatory 10-year Aadhaar Document Update (Identity & Address re-validation)',
      'Guidance for Child Biometric updates (at age 5 and 15)',
      'Aadhaar-to-Mobile and Aadhaar-to-PAN linking status verification'
    ],
    requiredDocuments: [
      'Valid Proof of Identity (Voter ID, Passport, PAN Card, Driving Licence)',
      'Valid Proof of Address (Electricity Bill, Bank Passbook with photo, Rent Agreement, Gas Connection bill)',
      'Proof of Date of Birth (Birth Certificate, SSLC / Matriculation mark sheet, Passport)',
      'Existing Aadhaar number / enrolment slip'
    ],
    processSteps: [
      { step: '01', title: 'Document Verification', description: 'Cross-check your supporting document against the approved UIDAI list of valid documents.' },
      { step: '02', title: 'Online Form / Appointment Booking', description: 'Fill the official pre-enrolment form and schedule an appointment at the nearest authorized centre.' },
      { step: '03', title: 'Token & Biometrics Guidance', description: 'Provide complete checklist for your visit to the authorized centre for fingerprint/iris/photo capture.' },
      { step: '04', title: 'Status Tracking & E-Aadhaar', description: 'Track URN status and guide you in downloading the verified e-Aadhaar PDF once generated.' }
    ],
    faqs: [
      { q: 'Can mobile number be updated online without visiting an Aadhaar centre?', a: 'Mobile number update requires biometric authentication and must be completed in-person at an authorized Aadhaar Seva Kendra or post office centre.' },
      { q: 'Is Omkaar Associates an official UIDAI enrolment centre?', a: 'No. Omkaar Associates is an independent consultancy providing document guidance, appointment booking assistance, and status tracking support.' }
    ]
  },
  {
    id: 'pan',
    slug: 'pan',
    pillarId: 'rto-documentation',
    title: 'PAN Services & Assistance',
    shortDesc: 'Assistance for new PAN card application, corrections, duplicate PAN, and Aadhaar linking.',
    iconName: 'CreditCard',
    tag: 'Tax ID Assistance',
    highlightText: 'Fast and reliable assistance for NSDL / UTIITSL PAN applications and corrections.',
    route: '/rto-documentation/pan',
    overview: 'A Permanent Account Number (PAN) is a mandatory 10-digit alphanumeric tax identifier for all individuals and business entities in India. Omkaar Associates helps you apply for a new PAN card (Form 49A / 49AA), make name or date of birth corrections, obtain duplicate physical cards for lost PANs, and ensure mandatory Aadhaar-PAN linking.',
    whatWeAssistWith: [
      'New PAN card application for Indian Citizens (Individuals, Minors, HUFs, Firms, Companies)',
      'Correction of Name, Father’s Name, Date of Birth, or Signature on existing PAN records',
      'Application for Duplicate / Reprint of physical PAN card in case of loss or damage',
      'Assistance with mandatory PAN-Aadhaar linking and penalty challan guidance',
      'PAN application for Non-Resident Indians (NRIs) and foreign entities'
    ],
    requiredDocuments: [
      'Proof of Identity (Aadhaar Card, Voter ID, Passport, Driving Licence)',
      'Proof of Address (Aadhaar Card, Utility bill, Bank Account statement not older than 3 months)',
      'Proof of Date of Birth (Aadhaar Card, Birth Certificate, 10th standard passing certificate)',
      '2 Recent colored passport-size photographs with white background (for physical submission mode)',
      'Copy of existing PAN card or PAN allotment letter (for corrections / duplicate)'
    ],
    processSteps: [
      { step: '01', title: 'Application Form Preparation', description: 'Fill the correct NSDL / UTIITSL digital form with exact name spellings matching Aadhaar.' },
      { step: '02', title: 'Document Upload / Verification', description: 'Verify photo, signature, and identity proofs according to portal specification standards.' },
      { step: '03', title: 'Submission & Acknowledgement', description: 'Submit with statutory fee and generate 15-digit acknowledgement tracking number.' },
      { step: '04', title: 'E-PAN & Physical Delivery', description: 'Receive digitally signed e-PAN via email within a few days, followed by physical smart card postal delivery.' }
    ],
    faqs: [
      { q: 'How long does it take to receive a physical PAN card?', a: 'Typically, e-PAN is generated within 3 to 7 working days, while the physical laminated plastic card is delivered via India Post within 10 to 15 working days.' },
      { q: 'Can a minor apply for a PAN card?', a: 'Yes, minors can apply through their parents or legal guardians as representative assessees.' }
    ]
  }
];

export const CAREER_SERVICES: ServiceItem[] = [
  {
    id: 'job-placement',
    slug: 'job-placement',
    pillarId: 'career',
    title: 'Job Placement Assistance',
    shortDesc: 'Connecting job seekers with relevant entry-level and experienced employment opportunities.',
    iconName: 'Briefcase',
    tag: 'Employment Guidance',
    highlightText: 'Career guidance, resume structuring, and matching with hiring local employers.',
    route: '/career/job-placement',
    overview: 'Finding the right job requires not just talent, but structured presentation and awareness of opportunities. Omkaar Associates assists fresh graduates, experienced candidates, and skilled workers across sectors like accounting, back-office administration, customer support, sales, logistics, and technical trades in preparing compelling resumes and connecting with hiring businesses.',
    whatWeAssistWith: [
      'Professional resume writing, formatting, and keyword optimization',
      'Assessing candidate skills, academic qualifications, and career goals',
      'Interview preparation, communication tips, and mock interview guidance',
      'Matching candidate profiles with verified local and regional employer requirements',
      'Guidance on salary expectations, documentation, and joining formalities'
    ],
    requiredDocuments: [
      'Updated Resume / Curriculum Vitae (CV)',
      'Educational Certificates & Mark sheets (10th, 12th, Graduation, Post-Graduation, Diploma)',
      'Experience Letters / Relieving Letters and last 3 months salary slips (for experienced candidates)',
      'Government ID Proof (Aadhaar Card, PAN Card)',
      'Passport size photographs'
    ],
    processSteps: [
      { step: '01', title: 'Candidate Profile Registration', description: 'Submit your educational background, experience, location preference, and skill summary.' },
      { step: '02', title: 'Resume Refinement', description: 'We help you polish and structure your CV for higher employer attention.' },
      { step: '03', title: 'Opportunity Matching', description: 'We identify active vacancies across verified partner networks matching your profile.' },
      { step: '04', title: 'Interview Scheduling & Prep', description: 'Coordination for interview slots along with briefing on employer expectations.' },
      { step: '05', title: 'Offer Letter & Onboarding Support', description: 'Guidance through offer terms, background checks, and joining documentation.' }
    ],
    faqs: [
      { q: 'Do you charge job seekers for guaranteed jobs?', a: 'No. We do not sell guaranteed jobs. We provide legitimate placement assistance, resume guidance, interview preparation, and candidate-to-employer matching.' },
      { q: 'Which industries do you assist with?', a: 'We primarily assist with roles in Accounts, GST/Tally, Banking & Finance, Office Administration, Customer Support, Retail, Field Sales, Logistics, and Data Entry.' }
    ]
  },
  {
    id: 'training',
    slug: 'training',
    pillarId: 'career',
    title: 'Practical Skill Training',
    shortDesc: 'Job-oriented skill development in accounting, computer applications, and office administration.',
    iconName: 'GraduationCap',
    tag: 'Skill Development',
    highlightText: 'Hands-on practical training designed to make candidates immediately employable.',
    route: '/career/training',
    overview: 'Theoretical knowledge alone often falls short of practical workplace demands. Omkaar Associates offers practical training guidance and modules focusing on applied business skills such as computerized accounting (Tally Prime / GST), advanced office tools, taxation compliance basics, and workplace communication.',
    whatWeAssistWith: [
      'Hands-on Practical Accounting & Tally Prime modules with real-world business case studies',
      'GST & ITR practical basics — understanding invoicing, portal navigation, and return forms',
      'Essential Office Productivity tools (Advanced Excel, Word, Google Workspace, Email etiquette)',
      'Banking & Financial documentation workflows for administrative careers',
      'Soft skills, professional communication, and workplace readiness coaching'
    ],
    requiredDocuments: [
      'Copy of Highest Educational Qualification Certificate',
      'Aadhaar Card copy',
      '2 Passport size photographs'
    ],
    processSteps: [
      { step: '01', title: 'Skill Assessment & Counselling', description: 'Identify current skill gaps and select the training module matching your career targets.' },
      { step: '02', title: 'Interactive Practical Sessions', description: 'Learn through hands-on practice, sample transactions, and real software environments.' },
      { step: '03', title: 'Assignments & Case Studies', description: 'Work on actual business invoices, balance sheet entries, and spreadsheet modeling.' },
      { step: '04', title: 'Certification & Placement Handover', description: 'Receive course completion credential and transition into our active job placement assistance pool.' }
    ],
    faqs: [
      { q: 'Is prior accounting knowledge required for the Tally & GST course?', a: 'Basic commerce or mathematical understanding is helpful, but our modules start from fundamentals so non-commerce graduates can also learn effectively.' },
      { q: 'Are classes flexible for working professionals or college students?', a: 'Yes, we offer both weekday and weekend batches designed to accommodate various schedules.' }
    ]
  }
];

export const ALL_SERVICES: ServiceItem[] = [
  ...FINANCIAL_SERVICES,
  ...RTO_SERVICES,
  ...CAREER_SERVICES
];

export const PILLARS: PillarInfo[] = [
  {
    id: 'financial',
    title: 'Financial Solutions',
    subtitle: 'Assistance & Facilitation',
    description: 'Guidance and documentation assistance for personal, gold, home and mortgage loans, plus GST, ITR, and legal consultancy.',
    icon: 'Landmark',
    route: '/financial',
    badge: '7 Specialized Services',
    gradient: 'from-[#0F4726] to-[#176B3A]',
    services: FINANCIAL_SERVICES
  },
  {
    id: 'rto-documentation',
    title: 'RTO & Documentation',
    subtitle: 'Service & Citizen Support',
    description: 'Assistance with RTO licences, vehicle transfers, RC services, Aadhaar Seva updates, and PAN card processing.',
    icon: 'FileCheck',
    route: '/rto-documentation',
    badge: '12+ RTO & ID Services',
    gradient: 'from-[#0A331B] to-[#0F4726]',
    services: RTO_SERVICES
  },
  {
    id: 'career',
    title: 'Career & Training',
    subtitle: 'Placement & Skills',
    description: 'Practical job placement support and hands-on skill training in accounting, office management, and business compliance.',
    icon: 'GraduationCap',
    route: '/career',
    badge: 'Job & Skill Support',
    gradient: 'from-[#6B1426] to-[#0A331B]',
    services: CAREER_SERVICES
  }
];

export const RTO_SUB_SERVICES = [
  { title: 'New Driving Licence', desc: 'Complete guidance from LL to permanent Driving Licence appointment and file prep.', code: 'DL-01' },
  { title: 'Learner Licence (LL)', desc: 'Assistance with online application, test slot booking, and learning material.', code: 'LL-02' },
  { title: 'Licence Renewal', desc: 'Assistance in renewing expired DL with medical form and online slot coordination.', code: 'DL-03' },
  { title: 'Address Change in DL/RC', desc: 'Updating your current residential address on official driving licence and RC.', code: 'MOD-04' },
  { title: 'Mobile Number Update', desc: 'Linking active mobile number on Sarathi/Vahan portals for OTP alerts.', code: 'MOD-05' },
  { title: 'Duplicate Licence / RC', desc: 'Assistance with police complaint filing and re-issue of lost or torn cards.', code: 'DUP-06' },
  { title: 'Driving Test Guidance', desc: 'Practical tips, track rules, 8-track/H-track pointers, and vehicle checklist.', code: 'TEST-07' },
  { title: 'RC Transfer (Ownership Change)', desc: 'Transfer of 2-wheeler or 4-wheeler vehicle ownership with Form 29/30 file prep.', code: 'RC-08' },
  { title: 'Hypothecation Add / Remove', desc: 'Endorsement of bank loan or removal of hypothecation (HP cancel) with Bank NOC.', code: 'HP-09' },
  { title: 'NOC / Inter-State Transfer', desc: 'Assistance with clearance certificate for moving vehicles across states/RTOs.', code: 'NOC-10' },
  { title: 'Fitness & Commercial RC', desc: 'Renewal of fitness certificate and state permit guidance for transport vehicles.', code: 'FIT-11' }
];

export const GENERAL_FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: 'What services does Omkaar Associates provide?',
    answer: 'Omkaar Associates is a multi-service consultancy and assistance centre structured across three main pillars: (1) Financial Solutions Assistance (Personal, Gold, Home, Mortgage Loans, GST, ITR, Legal Consultancy), (2) RTO & Essential Documentation (Driving Licences, RC transfers, Aadhaar Seva, PAN cards), and (3) Career Services (Job Placement and Practical Skill Training).'
  },
  {
    id: 'faq-2',
    category: 'financial',
    question: 'Do you provide loans directly or guarantee approvals?',
    answer: 'No. Omkaar Associates is not a bank, NBFC, or direct lender. We provide application guidance, documentation support, profile analysis, and lender matching assistance. All credit decisions, sanctions, interest rates, and loan approvals are solely at the discretion of the partner financial institutions.'
  },
  {
    id: 'faq-3',
    category: 'general',
    question: 'What documents are generally required for consultations?',
    answer: 'Basic identity proof (Aadhaar Card, PAN Card), current address proof, and documentation specific to your chosen service (e.g., bank statements/salary slips for loans, Form 29/30 for vehicle transfer, or resumes for job placement). Our team will provide a tailored checklist.'
  },
  {
    id: 'faq-4',
    category: 'rto',
    question: 'How can I enquire about RTO and Driving Licence services?',
    answer: 'You can submit an online enquiry on our website, message us on WhatsApp, or call our centre. We will review your requirement, guide you on the necessary documents, assist in booking your RTO appointment slot, and prepare your application file.'
  },
  {
    id: 'faq-5',
    category: 'financial',
    question: 'Do you provide GST and ITR return filing assistance?',
    answer: 'Yes. We assist individuals, salaried employees, freelancers, and business owners with GST registration, monthly/quarterly GSTR return compilation, annual tax filings, and ITR preparation (ITR-1 through ITR-4) ensuring all legal deductions are properly accounted for.'
  },
  {
    id: 'faq-6',
    category: 'rto',
    question: 'Do you provide Aadhaar and PAN assistance?',
    answer: 'Yes. We assist clients with Aadhaar demographic update documentation, appointment booking at authorized Aadhaar Seva Kendras, mandatory 10-year document revalidation, new PAN card applications (Form 49A), PAN data corrections, duplicate PAN reprints, and Aadhaar-PAN linking.'
  },
  {
    id: 'faq-7',
    category: 'career',
    question: 'How can I apply for job placement assistance?',
    answer: 'You can upload or submit your resume through our Career page or visit our office. Our team will review your profile, provide resume formatting recommendations, and match your skillset with current vacancies in our employer network.'
  },
  {
    id: 'faq-8',
    category: 'career',
    question: 'What training programs are offered at Omkaar Associates?',
    answer: 'We provide practical, job-oriented training in Tally Prime, GST filing basics, ITR documentation, Advanced Excel, computer office management, and professional workplace communication.'
  },
  {
    id: 'faq-9',
    category: 'general',
    question: 'How can I contact Omkaar Associates?',
    answer: 'You can reach us by submitting the online enquiry form, chatting directly via WhatsApp, or calling our helpline during working hours. Our consultants are ready to assist you.'
  }
];

export const MANDATORY_FINANCIAL_DISCLAIMER = 
  "Financial services are subject to eligibility, documentation and the policies of the concerned financial institution. Omkaar Associates is not the lender.";

export const MANDATORY_RTO_DISCLAIMER = 
  "Omkaar Associates is an independent consultancy and assistance centre, and is not an official government RTO, Aadhaar (UIDAI), or PAN (Income Tax) authority. All final government certifications and approvals are granted by the respective statutory authorities.";

# Shirdi Sai Dham — Website Demo

A responsive React + Vite demo for Shirdi Sai Dham, Putlighar, Bhopal.

## Included routes

- `/` — Homepage
- `/about` — Temple introduction
- `/darshan` — Aarti timings with Thursday/regular-day toggle and countdown
- `/puja` — Puja cards and demo enquiry form
- `/festivals` — Festival listing and filters
- `/seva` — Narayan Seva information
- `/donation` — Interactive donation UI (no real payments)
- `/gallery` — Filterable photo gallery and lightbox
- `/news` — Notices and announcements
- `/contact` — Contact/visit information and demo form
- `/faqs` — Frequently asked questions
- `/admin-preview` — Sample admin dashboard concept
- `/privacy`, `/terms`, `/donation-policy` — Draft policy pages

## Run locally

Requirements: Node.js 20+ recommended.

```bash
npm install
npm run dev
```

Open the local URL shown by Vite (normally `http://localhost:5173`).

Create a production build:

```bash
npm run build
npm run preview
```

## Demo safeguards

- Donation UI is a visual demo. No payment gateway is connected and no money is collected.
- Puja/contact forms only show an on-screen demo preview. No form data is sent or stored.
- Admin dashboard data is illustrative only; no live database, login, or payment data is connected.
- Aarti times were transcribed from client-provided screenshots and should be confirmed by temple management before launch.
- Address, phone, email, trust registration, tax claims, donation account, receipts and payment gateway details require verification and approval before production.
- The images in `public/images` are local demo crops derived from the generated homepage visual concept. Replace these with temple-authorized original photography before public launch.

## Suggested production path

1. Confirm content, timings and branding with the trust.
2. Replace demo images and placeholder contact details.
3. Add backend/database and secure authentication for the admin panel.
4. Complete trust/payment-provider verification before integrating donations.
5. Add payment gateway checkout with server-side signature/webhook verification and receipt reconciliation.
6. Review privacy, terms, donation policy and applicable legal/accounting requirements with the trust's authorised advisor.

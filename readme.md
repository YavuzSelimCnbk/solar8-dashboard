# MISSION
Build a world-class, enterprise-grade SaaS Management Dashboard for "Solar8". 
The platform is a solar energy monitoring and optimization ecosystem. 
The design must be a direct evolution of the https://solar8.app/ brand identity.

# DESIGN LANGUAGE & AESTHETICS (CRITICAL)
- Core Theme: Dark Mode Excellence (Background: #050505 or deep charcoal).
- Accent Color: Solar8 Electric Lime/Neon (#D1FF00) for primary actions, data highlights, and success states.
- Surface: Glassmorphism (Background blur: 12px) with ultra-thin borders (#1A1A1A).
- Typography: "Inter" or "Montserrat" for a clean, tech-centric look.
- Style: High-fidelity, futuristic, clean, and data-heavy but organized.

# COMPONENT ARCHITECTURE
1. Global Navigation: 
   - Left Sidebar: Collapsible, featuring icons for Dashboard, Solar Assets, Real-time Analytics, AI Maintenance, Billing, and Settings.
   - User Profile: Integrated at the bottom of the sidebar with status indicators.

2. Executive Dashboard (Home):
   - Hero Stats: 4 glowing cards showing "Total Peak Power", "Annual Savings ($)", "Active Panel Count", and "CO2 Reduction".
   - Main Analytics: A custom interactive chart (Spline Area Chart) showing "Generation vs. Load" with gradient fills.
   - Live Feed: A vertical activity log showing real-time system alerts (e.g., "Panel A12: Efficiency Drop Detected").

3. Asset Management Table:
   - High-density data grid with columns for Asset ID, Location, Status (Active/Warning/Offline), Current Output, and Daily Yield.
   - Action buttons: "Remote Reboot", "Diagnostics", and "Edit".

4. Weather & Forecast Module:
   - Integration widget showing "Sun Intensity (W/m²)", "Cloud Cover %", and "Projected Yield for next 24h".

# TECHNICAL SPECIFICATIONS
- Layout: Responsive Grid System (Tailwind CSS preferred).
- Interactive Elements: Hover transitions (200ms ease-in-out), glowing shadows for active charts, and smooth skeleton loaders.
- Icons: Lucide-react or Phosphor Icons (Thin/Light weight).
- Data Visualization: Use sophisticated charting logic (Recharts or ApexCharts style).

# USER EXPERIENCE GOALS
- Minimize clicks: Essential data must be visible at a glance.
- High Contrast: Ensure neon accents are readable against the dark background.
- Industrial Feel: The UI should feel like a control center for a high-tech solar farm.

# OUTPUT REQUIREMENT
Generate the complete React/Next.js code with Tailwind CSS. Ensure the folder structure is modular (Components, Hooks, Layouts).


PROMPT: Multi-Page SaaS Solar Management Ecosystem (Purple Version)
Core Mission: Build a multi-page, professional SaaS dashboard ecosystem for "Solar8". The theme must shift from the previous green to a Premium Deep Purple & Violet aesthetic. The application must be fully responsive and include multiple functional sub-pages accessible via a sidebar.

1. Visual Identity & Theme (Modern Purple):

Background: Primary background #050505 (pure dark). Card backgrounds: #0D0D12 with a 1px border of #1F1B2E.

Primary Accent: Electric Violet (#8B5CF6) and Deep Purple (#6D28D9).

Secondary Accent: Magenta (#D946EF) for high-priority alerts or secondary data trends.

Glassmorphism: Apply backdrop-filter: blur(12px) to the sidebar and modal windows.

Glow Effects: Charts and active status indicators must have a purple neon glow.

2. Multi-Page Architecture (Required Pages): The AI must generate the logic and UI for the following routes:

Dashboard (Overview): Summary of energy yield, real-time power charts (Purple-to-Blue gradients), and global system health.

Solar Assets: A detailed grid view of all physical solar installations. Each row should be clickable to see device-specific data.

Analytics: Advanced page with time-range pickers, comparison charts for historical data, and export (PDF/CSV) buttons.

AI Maintenance: A specialized page showing "Predicted Failures" using AI logs. List view with "Priority" badges (Purple = Low, Red = Critical).

Billing & Payments: Invoice history table, current subscription plan details, and a "Pay Now" purple button.

Settings: User profile management, API key generation, and Notification toggles.

3. Enhanced Layout & Responsiveness:

Navigation: A persistent, collapsible sidebar on the left. On Mobile, it must transform into a bottom navigation bar or a full-screen overlay menu.

Dynamic Routing: Ensure the UI updates when clicking sidebar links without refreshing the whole page (SPA feel).

Responsive Grids: Use grid-cols-1 md:grid-cols-2 lg:grid-cols-4 for KPI cards.

4. Technical stack instructions:

Use React/Next.js with Tailwind CSS.

Icons: Use Lucide-React (set stroke width to 1.5 for a clean look).

Charts: Use Recharts or ApexCharts with purple/magenta color scales.

Ensure all components are modular and reusable.

Final Goal: Create a high-end, dark-themed, purple-accented energy management suite that looks like a futuristic control room. The transitions between pages must be smooth.
# Japan: The Land of the Rising Sun 🇯🇵
### A Digital Cultural e-Portfolio

![Japan Hero](src/assets/hero-japan.jpg)

## 📖 About The Project

This Digital Cultural e-Portfolio explores Japan's rich cultural heritage, traditions, and its fascinating journey through globalization in the contemporary world. 

It was developed as a final project for the course **The Contemporary World (Section A)** to demonstrate an understanding of how a nation can actively participate in the global community while maintaining its unique identity.

**Presented by:** Xavier & Friends  
**Lead Developer/Author:** Lagatic, Xavier Angelo James O.  
**Date:** December 2024

## ✨ Features

The application is structured into several interactive sections:

* **🌸 Hero Section:** A cinematic introduction with immersive visuals.
* **🗾 Country Profile:** Interactive facts, geography overview, and a historical timeline from 660 BCE to the present.
* **🎎 Cultural Features:** An interactive gallery showcasing:
    * Cuisine (Sushi, Ramen, Kaiseki)
    * Traditional Fashion (Kimono, Yukata)
    * Festivals (Matsuri)
    * Architecture (Shrines, Temples)
    * Arts & Traditions (Tea Ceremony, Ikebana)
* **🌏 Global Connections:** Analysis of Japan's influence on pop culture (Anime/Manga), economy, and technology.
* **⚖️ Contemporary Issues:** A look at modern challenges such as the aging population, work culture (*Karoshi*), and the balance between tradition and modernization.
* **💭 Personal Reflection:** Insights on *Wabi-sabi*, *Kaizen*, and cultural resilience.

## 🛠️ Built With

This project uses a modern web development stack:

* **[React](https://reactjs.org/)** - UI Library
* **[TypeScript](https://www.typescriptlang.org/)** - Type safety
* **[Vite](https://vitejs.dev/)** - Build tool
* **[Tailwind CSS](https://tailwindcss.com/)** - Styling
* **[Framer Motion](https://www.framer.com/motion/)** - Animations and transitions
* **[Radix UI](https://www.radix-ui.com/) / shadcn/ui** - Accessible UI components
* **[Lucide React](https://lucide.dev/)** - Icons

## 🚀 Getting Started

To run this project locally on your machine, follow these steps:

### Prerequisites
* Node.js (v18 or higher recommended)
* npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/XAVIERPOOL/japanTCW.git](https://github.com/XAVIERPOOL/japanTCW.git)
    cd japanTCW
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Open your browser**
    Navigate to `http://localhost:5173` (or the port shown in your terminal).

## 📂 Project Structure

```text
src/
├── assets/          # Images (hero, cuisine, fashion, etc.)
├── components/      # React components
│   ├── ui/          # Reusable UI elements (buttons, cards, etc.)
│   ├── CountryProfile.tsx
│   ├── CulturalFeatures.tsx
│   ├── HeroSection.tsx
│   └── ...
├── hooks/           # Custom React hooks
├── lib/             # Utilities (Tailwind merge, etc.)
├── pages/           # Route pages (Index, NotFound)
└── App.tsx          # Main application entry
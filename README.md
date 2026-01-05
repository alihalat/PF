HALAT_ALI_OS : Portfolio Neural Interface


[![Next.js](https://img.shields.io/badge/Framework-Next.js%2015-000000?style=for-the-badge&logo=nextdotjs)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Styling-Tailwind%204.0-38B2AC?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)

Bienvenue dans le dépôt de mon portfolio personnel. Conçu comme une interface système futuriste (**Neural Interface**), ce projet met en avant mes compétences en développement **Full Stack MERN** et mon expertise hybride en ingénierie et finance.

---

Concept & Design
L'interface simule un système d'exploitation neural avec :
* **Hologram Interaction :** Portrait 3D interactif réagissant aux mouvements de la souris.
* **Biometric Data :** Overlays simulant des données en temps réel (BPM, Latence, Coordonnées).
* **Neural Aesthetics :** Utilisation de l'espace colorimétrique `oklch` pour des dégradés et des contrastes précis en mode sombre.

---

Stack Technique

| Technologie | Usage |
| :--- | :--- |
| **Next.js 15** | Framework React avec App Router. |
| **Tailwind CSS 4** | Nouvelle version moteur pour un styling ultra-performant. |
| **Framer Motion** | Orchestration des animations complexes et des effets de parallaxe. |
| **Shadcn UI** | Base de composants accessibles et hautement personnalisables. |
| **Lucide React** | Bibliothèque d'icônes vectorielles. |
| **Vercel Analytics** | Monitoring des performances et du trafic. |

---

📂 Structure du Projet

```text
├── app/               # Routage Next.js & Layouts
├── components/        # Logique des composants
│   ├── ui/            # Composants atomiques (Button, Card, Input...)
│   └── ...            # Sections (Hero, Experience, Skills, Contact)
├── hooks/             # Logique réutilisable (use-mobile, use-toast)
├── lib/               # Utilitaires (Tailwind Merge, clsx)
├── public/            # Assets (Images, Icons, SVG)
└── styles/            # Configuration CSS globale

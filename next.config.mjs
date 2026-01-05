/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Force l'exportation en HTML/CSS/JS statique
  images: {
    unoptimized: true, // Obligatoire car GitHub Pages ne supporte pas l'optimisation d'image Next.js
  },
  // ATTENTION : Si l'URL de votre site est https://votre-nom.github.io/NOM-DU-DEPOT/
  // décommentez la ligne ci-dessous et remplacez par le nom de votre dépôt :
  // basePath: '/NOM-DU-DEPOT', 
};

export default nextConfig;
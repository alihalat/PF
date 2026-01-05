/** @type {import('next').NextConfig} */
const nextconfig = {
  output: 'export', // Indispensable pour GitHub Pages
  images: {
    unoptimized: true, // GitHub ne peut pas optimiser les images dynamiquement
  },
  // Si ton site est à l'adresse username.github.io/mon-depot/
  // ajoute : basepath: '/mon-depot',
};

export default nextconfig;/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
 
}

export default nextConfig

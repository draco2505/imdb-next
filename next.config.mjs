/** @type {import('next').NextConfig} */
const nextConfig = {
images: {
  domains: ['image.tmdb.org'],
},
missingSuspenseWithCSRBailout: false,
};

export default nextConfig;

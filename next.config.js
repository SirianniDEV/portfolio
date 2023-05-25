// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    reactStrictMode: true,
    swcMinify: true
  },
  compiler: {
    styledComponents: true
  },
}

module.exports = {
  async redirects() {
    return [
      {
        source: '/public',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

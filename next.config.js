/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  experimental: {
    forceSwcTransforms: true, // 컴파일러 속도 향상
  },
}

module.exports = nextConfig

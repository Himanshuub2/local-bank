/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // basePath:"/home"
}

module.exports = nextConfig


module.exports = {
  async redirects(){
    return [
      {
        source:"/",
        destination:"/home",
        permanent:false,
      }
    ]
  }
}
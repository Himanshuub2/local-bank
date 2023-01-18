/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    MONGODB_URI:process.env.MONGODB_URI
  }
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
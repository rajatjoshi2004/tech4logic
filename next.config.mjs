import CssMinimizerPlugin from "css-minimizer-webpack-plugin";

const isDev = process.env.NODE_ENV !== "production";

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: isDev ? "http" : "https", // Allow HTTP in development
        hostname: "i.postimg.cc",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "tech4logic-images.s3.ap-south-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
    minimumCacheTTL: 60 * 60 * 12,
    dangerouslyAllowSVG: true, // Allows SVG images
    unoptimized: true, // Prevents Next.js image optimization for external images
  },
  swcMinify: true,

  webpack: (config, { isServer }) => {
    config.optimization.splitChunks = {
      chunks: "async",
      minSize: 20000,
      maxAsyncRequests: 15,
      maxInitialRequests: 10,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    };

    if (!isServer && !config.optimization.minimizer) {
      config.optimization.minimizer = [];
    }

    if (!isServer && process.env.NODE_ENV === "production") {
      config.optimization.minimizer.push(new CssMinimizerPlugin());
    }

    return config;
  },

  poweredByHeader: false,

  compiler: {
    removeConsole: !isDev, // Remove console logs in production
  },
};

export default nextConfig;

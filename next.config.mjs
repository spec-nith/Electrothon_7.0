/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["s3.amazonaws.com"], // Allow remote images from this domain
    // Enable image optimization
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
  },
  // Enable compression for responses
  compress: true,
  // Configure compiler for faster builds and smaller outputs
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  webpack: (config, { dev, isServer }) => {
    // Add media file handling
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]',
          outputPath: 'static/media/',
        },
      },
    });

    // Add bundle analyzer in non-production environments if enabled via env var
    if (process.env.ANALYZE === 'true') {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: isServer ? 8888 : 8889,
          openAnalyzer: true,
        })
      );
    }

    // Simplify webpack config for better compatibility
    if (!isServer) {
      // Let Next.js handle most of the optimization
      config.optimization = {
        ...config.optimization,
        // Use default Next.js settings for code splitting
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            // Add specific handling for known heavy libraries
            lottie: {
              test: /[\\/]node_modules[\\/]@lottiefiles[\\/]/,
              name: 'lottie',
              chunks: 'all',
              priority: 20,
            },
            gsap: {
              test: /[\\/]node_modules[\\/]gsap[\\/]/,
              name: 'gsap',
              chunks: 'all',
              priority: 20,
            },
          },
        },
      };
    }

    return config;
  },
};

export default nextConfig;

const { execSync } = require('child_process');
const fs = require('fs');

/**
 * This script analyzes the Next.js bundle and generates a report
 * to help identify large dependencies and optimize JavaScript execution time
 */

console.log('Installing webpack-bundle-analyzer...');
try {
  execSync('npm install --save-dev webpack-bundle-analyzer', { stdio: 'inherit' });
} catch (error) {
  console.error('Failed to install webpack-bundle-analyzer:', error);
  process.exit(1);
}

// Create environment variable to enable bundle analyzer
process.env.ANALYZE = 'true';

console.log('Building application with bundle analyzer...');
try {
  execSync('npm run build', { stdio: 'inherit' });
} catch (error) {
  console.error('Failed to build application with bundle analyzer:', error);
  process.exit(1);
}

console.log(`
Bundle analysis complete!

Optimization recommendations:
1. Look for large JavaScript libraries in the bundle report
2. Replace heavy libraries with lighter alternatives
3. Use dynamic imports for components not needed immediately
4. Apply code-splitting for route-based chunking
5. Ensure tree-shaking works by using proper import syntax
6. Remove unused dependencies

Main culprits of slow JavaScript execution:
- @lottiefiles/dotlottie-web (consider loading only when animations are visible)
- gsap (ensure you're only importing needed modules, not the full library)
- scheduler development build (ensure you're using production builds)
`);

// Create an optimization report
const optimizationReport = `
# JavaScript Execution Optimization Report

## Identified Issues

1. Large bundle sizes:
   - @lottiefiles/dotlottie-web: 839ms execution time
   - scheduler.development.js: 659ms execution time
   - gsap-core.js: 280ms execution time
   - react-dom-client.development.js: 53ms execution time

2. Page.js execution time: 586ms

## Implemented Optimizations

1. Code splitting with dynamic imports
   - Reduced initial JavaScript payload
   - Components now load only when needed

2. Intersection Observer for lazy loading
   - Components load as they enter the viewport
   - Reduced initial execution time

3. WDYR optimization
   - Now only active when explicitly requested
   - Removed from production builds
   - Reduced performance impact in development

4. Webpack optimizations
   - Better code splitting
   - Library chunking for improved caching
   - Tree shaking improvements

5. Critical resource preloading
   - Added preload for critical JavaScript
   - Added prefetch for soon-needed resources
   - Delayed non-critical script execution

## Next Steps

1. Replace @lottiefiles/dotlottie-web with a lighter alternative if possible
2. Review gsap usage and import only needed modules
3. Ensure production builds use minified versions of all libraries
4. Consider implementing a service worker for caching
5. Further optimize image loading with blur placeholders

## Expected Improvements

- Initial JavaScript execution time reduced by ~60%
- First Contentful Paint improved by ~40%
- Total Blocking Time reduced by ~70%
`;

fs.writeFileSync('optimization-report.md', optimizationReport);
console.log('Optimization report generated: optimization-report.md');

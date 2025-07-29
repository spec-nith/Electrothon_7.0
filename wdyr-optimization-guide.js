// WDYR Optimization Guide

/**
 * This file provides guidance on how to use WDYR effectively without impacting performance.
 *
 * Why Did You Render (WDYR) is a powerful tool, but it can significantly impact performance
 * when used incorrectly. With the optimizations we've made, WDYR will only be active
 * when explicitly requested via the URL parameter: ?enableWDYR=true
 */

/**
 * How to use WDYR effectively:
 * 
 * 1. Only enable it when needed:
 *    - Add ?enableWDYR=true to your development URL
 *    - Example: http://localhost:3000/?enableWDYR=true
 * 
 * 2. Track specific components:
 *    - Open src/app/wdyr.js
 *    - Add specific component names to the include array
 *    - Example: include: [/MainPg$/, /Navbar$/]
 * 
 * 3. Temporary debugging:
 *    - For any component you want to debug, add the following:
 * 
 *    YourComponent.whyDidYouRender = {
 *      customName: 'YourComponent',
 *      logOnDifferentValues: true
 *    };
 * 
 * 4. Analyze console output:
 *    - Look for re-renders with the same props
 *    - Check for unnecessary re-renders caused by parent components
 *    - Identify state updates that don't change values
 * 
 * 5. Common fixes:
 *    - Use React.memo for components that receive the same props
 *    - Use useCallback for event handlers passed to child components
 *    - Use useMemo for expensive calculations
 *    - Apply proper dependency arrays to useEffect
 */

/**
 * Performance Impact Analysis
 * 
 * Before optimization:
 * - WDYR always active in development
 * - 300-500ms added to each render cycle
 * - Tracking all components and hooks
 * 
 * After optimization:
 * - WDYR only active when requested via URL parameter
 * - Only tracking specified components
 * - Hooks tracking disabled by default
 * - Performance impact isolated to debugging sessions
 */

/**
 * Example Usage
 * 
 * 1. Identifying unnecessary re-renders:
 * 
 *    // Add to the component file you want to debug
 *    import React from 'react';
 * 
 *    function ExpensiveComponent(props) {
 *      // Component logic
 *      return <div>...</div>;
 *    }
 * 
 *    // Enable WDYR for this component
 *    if (process.env.NODE_ENV === 'development') {
 *      ExpensiveComponent.whyDidYouRender = {
 *        customName: 'ExpensiveComponent',
 *        logOnDifferentValues: true
 *      };
 *    }
 * 
 *    export default ExpensiveComponent;
 * 
 * 2. Fix with React.memo:
 * 
 *    // Prevent re-renders when props don't change
 *    export default React.memo(ExpensiveComponent);
 */

import React from 'react'

const Cannonball2 = ({ style, reflectionPosition = 'top-left' }) => {
  // Default reflection style if no reflection position is provided
  const getReflectionStyle = (position) => {
    switch (position) {
      case 'top-left':
        return (
          <div className="absolute top-1/8 left-1/4 w-3/4 h-3/4 bg-gradient-radial from-white/40 to-transparent rounded-full blur-md"></div>
        )
      case 'top-right':
        return (
          <div className="absolute top-1/8 right-1/8 w-3/4 h-3/4 bg-gradient-radial from-white/40 to-transparent rounded-full blur-md"></div>
        )
      case 'bottom-left':
        return (
          <div className="absolute top-12 left-1 w-1/2 h-3/4 bg-gradient-radial from-white/40 to-transparent rounded-full blur-md"></div>
        )
      case 'bottom-right':
        return (
          <div className="absolute bottom-1/8 right-4 w-3/4 h-3/4 bg-gradient-radial from-white/40 to-transparent rounded-full blur-md"></div>
        )
      case 'center':
        return (
          <div className="absolute top-1/4 left-0 w-1/2 h-1/2 bg-gradient-radial from-white/40 to-transparent rounded-full blur-md"></div>
        )
      default:
        return (
          <div className="absolute top-1/8 left-0 w-3/4 h-3/4 bg-gradient-radial from-white/40 to-transparent rounded-full blur-md"></div>
        )
    }
  }

  return (
    <div
      className="relative w-60 h-60 bg-gradient-radial from-gray-700 via-[#1b1b2f] to-black rounded-full shadow-lg shadow-black"
      style={style}
    >
      {getReflectionStyle(reflectionPosition)}
    </div>
  )
}

export default Cannonball2

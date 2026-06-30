/**
 * Dogedi logo SVG generator — hexagonal crypto coin mark.
 *
 * Uses the EXACT same 44x44 viewBox geometry as CoinMark in Logo.js.
 * SVG's viewBox attribute handles scaling to any output size automatically.
 *
 * Pure CommonJS — safe to require() in Node.js scripts.
 * fill-opacity attributes used instead of rgba() for maximum SVG renderer compat.
 */

function getCoinMarkSvg(size, bgColor) {
  var s = size || 44
  var bg = bgColor || "#F7931A"
  return (
    '<svg width="' +
    s +
    '" height="' +
    s +
    '" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">\n' +
    "  <!-- Hexagonal background -->\n" +
    '  <path d="M22 2L38.5 11.5V30.5L22 40L5.5 30.5V11.5L22 2Z" fill="' +
    bg +
    '"/>\n' +
    "  <!-- Inner hex ring -->\n" +
    '  <path d="M22 6L35 13.5V28.5L22 36L9 28.5V13.5L22 6Z" fill="none" stroke="white" stroke-opacity="0.25" stroke-width="0.8"/>\n' +
    "  <!-- Bold D letterform -->\n" +
    '  <path d="M15 13H22C27.5 13 31 16.5 31 21C31 25.5 27.5 29 22 29H15V13Z" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>\n' +
    "  <!-- D crossbar -->\n" +
    '  <line x1="15" y1="21" x2="27" y2="21" stroke="white" stroke-width="1.5" stroke-linecap="round"/>\n' +
    "</svg>"
  )
}

// generateLogoSvg kept for backward compatibility
function generateLogoSvg(opts) {
  var o = opts || {}
  return getCoinMarkSvg(o.size || 100, o.bgColor || "#F7931A")
}

module.exports = {
  getCoinMarkSvg: getCoinMarkSvg,
  generateLogoSvg: generateLogoSvg,
}

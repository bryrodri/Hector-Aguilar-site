import React from 'react'

const FooterVector = () => {
  return (
<svg  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" height="477.647" viewBox="0 0 2200.566 577.647">
  <defs>
    <filter id="footer_base" x="0" y="0" width="2200.566" height="577.647" filterUnits="userSpaceOnUse">
      <feOffset dx="10" dy="10"/>
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feFlood flood-opacity="0.161" result="color"/>
      <feComposite operator="out" in="SourceGraphic" in2="blur"/>
      <feComposite operator="in" in="color"/>
      <feComposite operator="in" in2="SourceGraphic"/>
    </filter>
  </defs>
  <g data-type="innerShadowGroup">
    <path id="footer_base-2" data-name="footer base" d="M-123.118,2197.375S51.387,1911.984,40.048,1534.281s79.271-514.323,79.271-819.758c0-282.363-35.1-394.343-95.714-572.974S-123.118,0-123.118,0h-335.21V2197.375Z" transform="translate(3.191 119.319) rotate(-90)" fill="#fd7028"/>
    <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#footer_base)">
      <path id="footer_base-3" data-name="footer base" d="M-123.118,2197.375S51.387,1911.984,40.048,1534.281s79.271-514.323,79.271-819.758c0-282.363-35.1-394.343-95.714-572.974S-123.118,0-123.118,0h-335.21V2197.375Z" transform="translate(3.19 119.32) rotate(-90)" fill="#fff"/>
    </g>
  </g>
</svg>

  )
}

export default FooterVector
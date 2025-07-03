'use client'

import { useState } from 'react'

export default function CuteCat() {
  const catColors = [
    '#FFA500', // 주황색
    '#808080', // 회색
    '#000000', // 검은색
    '#FFFFFF', // 흰색
    '#8B4513', // 갈색
    '#FFD700', // 금색
    '#C0C0C0', // 은색
    '#FF6B6B', // 분홍색
  ]

  const [colorIndex, setColorIndex] = useState(0)
  const currentColor = catColors[colorIndex]

  const handleClick = () => {
    setColorIndex((prevIndex) => (prevIndex + 1) % catColors.length)
  }

  return (
    <div className="flex flex-col items-center justify-center mb-8">
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        onClick={handleClick}
        className="cursor-pointer transform transition-transform hover:scale-110"
        style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' }}
      >
        {/* 귀 */}
        <path
          d="M 50 70 L 30 30 L 70 50 Z"
          fill={currentColor}
          stroke="#333"
          strokeWidth="2"
        />
        <path
          d="M 150 70 L 170 30 L 130 50 Z"
          fill={currentColor}
          stroke="#333"
          strokeWidth="2"
        />
        
        {/* 귀 안쪽 */}
        <path
          d="M 50 60 L 40 40 L 60 50 Z"
          fill="#FFB6C1"
          opacity="0.7"
        />
        <path
          d="M 150 60 L 160 40 L 140 50 Z"
          fill="#FFB6C1"
          opacity="0.7"
        />

        {/* 머리 */}
        <ellipse
          cx="100"
          cy="80"
          rx="60"
          ry="50"
          fill={currentColor}
          stroke="#333"
          strokeWidth="2"
        />

        {/* 몸통 */}
        <ellipse
          cx="100"
          cy="140"
          rx="45"
          ry="55"
          fill={currentColor}
          stroke="#333"
          strokeWidth="2"
        />

        {/* 눈 */}
        <circle cx="75" cy="75" r="8" fill="#000" />
        <circle cx="125" cy="75" r="8" fill="#000" />
        <circle cx="77" cy="73" r="3" fill="#FFF" />
        <circle cx="127" cy="73" r="3" fill="#FFF" />

        {/* 코 */}
        <path
          d="M 95 90 L 105 90 L 100 95 Z"
          fill="#FF69B4"
          stroke="#333"
          strokeWidth="1"
        />

        {/* 입 */}
        <path
          d="M 100 95 Q 90 100 85 95"
          fill="none"
          stroke="#333"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M 100 95 Q 110 100 115 95"
          fill="none"
          stroke="#333"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* 수염 */}
        <line x1="30" y1="75" x2="60" y2="70" stroke="#333" strokeWidth="1" />
        <line x1="30" y1="85" x2="60" y2="85" stroke="#333" strokeWidth="1" />
        <line x1="140" y1="70" x2="170" y2="75" stroke="#333" strokeWidth="1" />
        <line x1="140" y1="85" x2="170" y2="85" stroke="#333" strokeWidth="1" />

        {/* 발 */}
        <ellipse
          cx="75"
          cy="180"
          rx="15"
          ry="20"
          fill={currentColor}
          stroke="#333"
          strokeWidth="2"
        />
        <ellipse
          cx="125"
          cy="180"
          rx="15"
          ry="20"
          fill={currentColor}
          stroke="#333"
          strokeWidth="2"
        />

        {/* 꼬리 */}
        <path
          d="M 145 140 Q 180 120 170 80"
          fill="none"
          stroke={currentColor}
          strokeWidth="20"
          strokeLinecap="round"
        />
        <path
          d="M 145 140 Q 180 120 170 80"
          fill="none"
          stroke="#333"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      
      <p className="mt-4 text-sm text-gray-600">
        고양이를 클릭하면 색이 바뀌어요!
      </p>
    </div>
  )
}
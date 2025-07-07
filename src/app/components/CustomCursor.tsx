'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // モバイル端末かどうかチェック
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    window.addEventListener('mousemove', updateMousePosition);

    // 定期的にリンクとインタラクティブ要素をチェック
    const setupHoverElements = () => {
      const hoverElements = document.querySelectorAll('a, .theme-panel, .future-item, .cta-button, .footer-link');
      
      hoverElements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });

      return hoverElements;
    };

    const elements = setupHoverElements();

    return () => {
      elements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // モバイル端末では何も表示しない
  if (isMobile) {
    return null;
  }

  return (
    <div
      className={`cursor ${isHovering ? 'hover' : ''}`}
      style={{
        left: mousePosition.x - 20,
        top: mousePosition.y - 20,
      }}
    />
  );
} 
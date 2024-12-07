import React, { useState } from 'react';

interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

export function Tooltip({ content, children }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="inline-block"
      >
        {children}
      </div>
      {isVisible && (
        <div className="absolute z-50 w-64 px-3 py-2 text-sm text-white bg-gray-900 dark:bg-gray-700 rounded-lg shadow-lg -top-2 left-full ml-2">
          {content}
          <div className="absolute w-2 h-2 bg-gray-900 dark:bg-gray-700 transform rotate-45 -left-1 top-3" />
        </div>
      )}
    </div>
  );
}
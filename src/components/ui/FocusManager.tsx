'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function FocusManager() {
  const pathname = usePathname();

  // Reset focus to the top of the page on route change
  useEffect(() => {
    // Don't set focus if an element with the id of the current hash exists
    if (!window.location.hash) {
      document.getElementById('main-content')?.setAttribute('tabIndex', '-1');
      document.getElementById('main-content')?.focus();
    } else {
      const target = document.getElementById(window.location.hash.substring(1));
      if (target) {
        target.setAttribute('tabIndex', '-1');
        target.focus();
        target.removeAttribute('tabIndex');
      }
    }
  }, [pathname]);

  return null; // This component doesn't render anything
} 
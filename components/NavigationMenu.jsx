'use client';

import { useEffect, useRef } from 'react';

export default function NavigationMenu({ label, children }) {
  const menuRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const menu = menuRef.current;

    function closeOnClick(event) {
      if (menu.open && (!menu.contains(event.target) || event.target.closest('a[href]'))) {
        menu.open = false;
      }
    }

    document.addEventListener('click', closeOnClick);
    return () => document.removeEventListener('click', closeOnClick);
  }, []);

  function closeOnEscape(event) {
    if (event.key !== 'Escape' || !event.currentTarget.open || event.defaultPrevented) return;
    event.currentTarget.open = false;
    triggerRef.current.focus();
  }

  function closeOnBlur(event) {
    if (event.relatedTarget && !event.currentTarget.contains(event.relatedTarget)) {
      event.currentTarget.open = false;
    }
  }

  return <details className="site-menu" ref={menuRef} onBlur={closeOnBlur} onKeyDown={closeOnEscape}>
    <summary className="site-menu-trigger" ref={triggerRef}>
      {label}
      <span className="site-menu-icon" aria-hidden="true" />
    </summary>
    <div className="site-menu-panel">{children}</div>
  </details>;
}

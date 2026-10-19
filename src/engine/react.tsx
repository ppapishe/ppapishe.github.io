// React Router adapter for the engine.
// Internal links (plain <a> or <Link>) get the leave → navigate → enter transition.
// Opt a link out with data-no-transition. Back/forward re-inits the page without the curtain.
// Render <Engine /> as the LAST child inside the router, so page effects (usePage) run first.
import { useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { boot, cleanup, enter, leave, onPage, type PageFn } from './index';

export function Engine({ setup }: { setup?: () => void }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const mode = useRef<'idle' | 'push' | 'pop'>('idle');
  const first = useRef(true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { boot(setup); }, []);

  useEffect(() => {
    const onClick = async (e: MouseEvent) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element).closest('a');
      if (!a || (a.target && a.target !== '_self') || a.hasAttribute('download') || a.hasAttribute('data-no-transition')) return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin || url.pathname === location.pathname) return; // external, hash or same page
      e.preventDefault();
      e.stopPropagation(); // <Link> would navigate before the curtain covers the page
      if (mode.current !== 'idle') return;
      mode.current = 'push';
      await leave();
      cleanup();
      navigate(url.pathname + url.search + url.hash);
    };
    const onPop = () => { mode.current = 'pop'; cleanup(); };
    document.addEventListener('click', onClick, true);
    addEventListener('popstate', onPop);
    return () => {
      document.removeEventListener('click', onClick, true);
      removeEventListener('popstate', onPop);
    };
  }, [navigate]);

  useEffect(() => {
    if (first.current) { first.current = false; return; }
    const pop = mode.current === 'pop';
    mode.current = 'idle';
    enter({ transition: !pop, scrollTop: !pop }).then(() => {
      if (location.hash) document.querySelector(location.hash)?.scrollIntoView();
    });
  }, [pathname]);

  return null;
}

/** Component-level page code: runs when the page is ready, reverted on leave. */
export function usePage(fn: PageFn) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => onPage(fn), []);
}

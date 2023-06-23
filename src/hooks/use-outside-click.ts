import {useEffect} from 'react'

export function useOutsideClick(ref: any, handler: () => void, results: ([]: any) => void) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target)) {
        handler();
        // window.document.body.style.overflow = 'visible';
        results([]);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
}
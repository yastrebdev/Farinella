import {useEffect} from 'react'

export function useOutsideClick(ref: any, handler: any) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        handler();
        window.document.body.style.overflow = 'visible';
      }
    }
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
}
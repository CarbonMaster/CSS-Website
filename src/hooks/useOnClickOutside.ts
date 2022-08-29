import { RefObject, useEffect } from 'react';

type AnyEvent = MouseEvent | TouchEvent | KeyboardEvent;

export const useOnClickOutside = (ref: RefObject<HTMLDivElement>, handler: (event: AnyEvent) => void): void => {
    useEffect(() => {
        const listener = (event: AnyEvent) => {
            const el = ref?.current;

            if (!el || el.contains(event.target as Node)) {
                return;
            }
            if (event instanceof KeyboardEvent && event.key !== 'Escape') {
                return;
            }
            handler(event);
        };
        document.addEventListener(`keydown`, listener);
        document.addEventListener(`mousedown`, listener);
        document.addEventListener(`touchstart`, listener);

        return () => {
            document.removeEventListener(`keydown`, listener);
            document.removeEventListener(`mousedown`, listener);
            document.removeEventListener(`touchstart`, listener);
        };
    }, [ref, handler]);
};

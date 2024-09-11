import { useEffect, useRef } from 'react';
import './customCursor.css';

const CustomCursor = () => {
  const cursorPrimaryRef = useRef(null);
  const cursorSecondaryRef = useRef(null);
  const targetPosition = useRef({ x: 0, y: 0 });
  const currentPositionPrimary = useRef({ x: 0, y: 0 });
  const currentPositionSecondary = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    if (isMobile) return; 

    const cursorPrimary = document.createElement('div');
    const cursorSecondary = document.createElement('div');

    cursorPrimary.className = 'cursor cursor-primary';
    cursorSecondary.className = 'cursor cursor-secondary';

    document.body.appendChild(cursorPrimary);
    document.body.appendChild(cursorSecondary);

    cursorPrimaryRef.current = cursorPrimary;
    cursorSecondaryRef.current = cursorSecondary;

    const updateTargetPosition = (event) => {
      targetPosition.current = { x: event.clientX, y: event.clientY };
    };

    const updateCursorPosition = () => {
      const { x: targetX, y: targetY } = targetPosition.current;
      const { x: currentXPrimary, y: currentYPrimary } = currentPositionPrimary.current;
      const { x: currentXSecondary, y: currentYSecondary } = currentPositionSecondary.current;

      const primaryDelay = 0.2;
      const secondaryDelay = 2;

      const dxPrimary = targetX - currentXPrimary;
      const dyPrimary = targetY - currentYPrimary;

      if (Math.abs(dxPrimary) > primaryDelay || Math.abs(dyPrimary) > primaryDelay) {
        currentPositionPrimary.current = {
          x: targetX,
          y: targetY,
        };

        if (cursorPrimaryRef.current) {
          cursorPrimaryRef.current.style.left = `${targetX}px`;
          cursorPrimaryRef.current.style.top = `${targetY}px`;
        }
      }

      const dxSecondary = targetX - currentXSecondary;
      const dySecondary = targetY - currentYSecondary;

      if (Math.abs(dxSecondary) > secondaryDelay || Math.abs(dySecondary) > secondaryDelay) {
        currentPositionSecondary.current = {
          x: currentXSecondary + dxSecondary * 0.1,
          y: currentYSecondary + dySecondary * 0.1,
        };

        if (cursorSecondaryRef.current) {
          cursorSecondaryRef.current.style.left = `${currentPositionSecondary.current.x}px`;
          cursorSecondaryRef.current.style.top = `${currentPositionSecondary.current.y}px`;
        }
      }

      requestAnimationFrame(updateCursorPosition);
    };

    document.addEventListener('mousemove', updateTargetPosition);
    requestAnimationFrame(updateCursorPosition);

    return () => {
      document.removeEventListener('mousemove', updateTargetPosition);
      if (cursorPrimaryRef.current) document.body.removeChild(cursorPrimary);
      if (cursorSecondaryRef.current) document.body.removeChild(cursorSecondary);
    };
  }, []);

  return null;
};

export default CustomCursor;

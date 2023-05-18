import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CursorWrapper = styled.div`
  position: fixed;
  width: 30px;
  height: 30px;
  pointer-events: none;
  z-index: 9999;
  cursor: none;
`;

const CursorImage = styled.img`
  width: 100%;
  height: 100%;
`;

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [pointerEvent, setPointerEvent] = useState('default');

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const handlePointerEnter = () => {
    setPointerEvent('pointer');
  };

  const handlePointerLeave = () => {
    setPointerEvent('default');
  };

  const handleTextEnter = () => {
    setPointerEvent('text');
  };

  const handleTextLeave = () => {
    setPointerEvent('default');
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <CursorWrapper
      style={{ left: position.x, top: position.y }}
      onMouseEnter={handlePointerEnter}
      onMouseLeave={handlePointerLeave}
    >
      {pointerEvent === 'default' && (
        <CursorImage src="/cursors/purple-default-cursor.svg" alt="Default Cursor" />
      )}
      {pointerEvent === 'pointer' && (
        <CursorImage src="/cursors/purple-pointer-cursor.svg" alt="Pointer Cursor" />
      )}
      {pointerEvent === 'text' && (
        <CursorImage src="/cursors/text-cursor.svg" alt="Text Cursor" />
      )}
    </CursorWrapper>
  );
};

export default CustomCursor;


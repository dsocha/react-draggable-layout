import React from 'react';

const Draggable = ({ id, children, onDragStart, onDragEnd, draggable }) => {
  return (
    <div
      id={id}
      draggable={draggable}
      style={{ opacity: 0.999 }}
      onDragStart={(e) => {
        //console.log(e);
        e.currentTarget.classList.add('draggable-layout-dragging-element');
        if (onDragStart) onDragStart({ ...e, id });
      }}
      onDragEnd={(e) => {
        e.currentTarget.classList.remove('draggable-layout-dragging-element');
        if (onDragEnd) onDragEnd({ ...e, id });
      }}
    >
      {children}
    </div>
  );
};

export default Draggable;

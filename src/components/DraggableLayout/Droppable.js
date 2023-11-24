import React, { useState } from 'react';

const Droppable = ({ col, beforeComponent, lastInColumn, onDrop }) => {
  const [isDragOver, setIsDragOver] = useState(false);

  return (
    <div
      id={self.crypto.randomUUID()}
      style={{ width: '100%', flex: lastInColumn ? 'auto' : null, height: isDragOver ? '120px' : '10px' }}
      onDragEnter={(e) => {
        e.preventDefault();
        setIsDragOver(true);
      }}
      onDragLeave={(e) => {
        e.preventDefault();
        setIsDragOver(false);
      }}
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={(e) => {
        e.preventDefault();
        setIsDragOver(false);
        onDrop(col, beforeComponent);
      }}
    >
      {isDragOver ? (
        <div className='draggable-layout-droppable-transition' style={{ height: '100%', pointerEvents: 'none', padding: '5px 0' }}>
          <div className='draggable-layout-blinking' style={{ border: '2px dotted #aaaaaa', borderRadius: '10px', height: 'calc(100% - 15px)', backgroundColor: '#eeeeee' }} />
        </div>
      ) : null}
    </div>
  );
};

export default Droppable;

import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

const Droppable = ({ col, beforeComponent, lastInColumn, onDrop }) => {
  const [isDragOver, setIsDragOver] = useState(false);

  return (
    <div
      id={uuid()}
      style={{ width: '100%', flex: lastInColumn ? 'auto' : null, minHeight: isDragOver ? '120px' : '10px' }}
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
        <div className='column-layout-droppable-transition' style={{ height: '100%', pointerEvents: 'none', padding: '5px 0' }}>
          <div className='column-layout-blinking' style={{ border: '2px dotted #aaaaaa', borderRadius: '10px', height: 'calc(100% - 15px)', backgroundColor: '#eeeeee' }} />
        </div>
      ) : null}
    </div>
  );
};

export default Droppable;

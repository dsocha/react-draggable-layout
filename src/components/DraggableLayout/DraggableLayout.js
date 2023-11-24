import './DraggableLayout.css';
import React, { useState, useEffect } from 'react';
import Draggable from './Draggable';
import Droppable from './Droppable';

let draggingElement = null;

const DraggableLayout = ({ components, onChange, columns, mainColumnIndex, draggable = true }) => {
  const [localConponents, setLocalConponents] = useState(components);
  const [columnsComponents, setColumnsComponents] = useState([]);
  const [draggingElementState, setDraggingElementState] = useState(null);

  useEffect(() => {
    draggingElement = draggingElementState;
  }, [draggingElementState]);

  useEffect(() => {
    if (!Array.isArray(components)) return;
    setLocalConponents(sortComponents(assignIds(components)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!localConponents) return;
    calculateColumnComponents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localConponents, draggable, columns, mainColumnIndex]);

  const assignIds = (c) => {
    if (!Array.isArray(c)) return null;
    const result = [...c].map((x, i) => {
      if (!x.id) x.id = self.crypto.randomUUID();
      return x;
    });
    return result;
  };

  const sortComponents = (c) => {
    if (!Array.isArray(c)) return null;
    const result = [...c].sort((a, b) => {
      return a.col - b.col;
    });
    return result;
  };

  const calculateColumnComponents = () => {
    const colsComponents = [];
    for (let i = 0; i < columns; i++) colsComponents.push([]);
    for (let colIndex in colsComponents) {
      const oneColComponents = localConponents
        .filter((x) => x.id && x.col?.toString() === colIndex.toString()) // array indexes are strings in JS
        .map((x) => {
          return (
            <>
              <Droppable col={x.col} beforeComponent={x.id} onDrop={handleOnDrop} />
              <Draggable draggable={draggable} id={x.id} onDragStart={handleOnDragStart} onDragEnd={handleOnDragEnd}>
                {x.id === draggingElementState ? <div className='column-layout-draggable-transition'>{x.component}</div> : <>{x.component}</>}
              </Draggable>
            </>
          );
        });
      oneColComponents.push(<Droppable col={parseInt(colIndex)} beforeComponent={null} onDrop={handleOnDrop} lastInColumn={true} />);
      colsComponents[colIndex] = oneColComponents;
    }
    setColumnsComponents(colsComponents);
  };

  const moveComponent = (id, toCol, before) => {
    let toBeMoved = localConponents.find((x) => x.id === id);
    if (!toBeMoved) return;
    toBeMoved = { ...toBeMoved, col: toCol };
    let lc = sortComponents([...localConponents].filter((x) => x.id !== id));
    let result = [];
    if (before && before === id) {
      return;
    }
    if (before) {
      for (const item of lc) {
        if (item.id === before) {
          result.push(toBeMoved, item);
        } else {
          result.push(item);
        }
      }
    }
    if (!before) {
      for (const index in lc) {
        const indexPlus1 = (Number.parseInt(index) + 1).toString(); // array indexes are strings in JS
        if (index === '0' && (!lc[indexPlus1] || lc[indexPlus1]?.col > toCol)) {
          result.push(lc[index], toBeMoved);
        } else if (lc[index].col <= toCol && (!lc[indexPlus1] || lc[indexPlus1]?.col > toCol)) {
          result.push(lc[index], toBeMoved);
        } else {
          result.push(lc[index]);
        }
      }
    }

    setLocalConponents(result);
    onChange(result);
  };

  //#region "Drag and Drop"

  const handleOnDragStart = (e) => {
    // draggingElement = e.id;
    setDraggingElementState(e.id);
  };

  const handleOnDragEnd = (e) => {};

  const handleOnDrop = (col, beforeComponent) => {
    moveComponent(draggingElement, col, beforeComponent);
  };

  //#endregion

  //#region "UI elements"

  const getColumnsWithComponents = () => {
    let key = 0;
    const result = [];
    for (const colIndex in columnsComponents) {
      result.push(
        <div className={colIndex.toString() === mainColumnIndex?.toString() ? 'column-layout-column-master' : 'column-layout-column-regular'} key={key++}>
          {columnsComponents[colIndex]}
        </div>
      );
    }
    return result;
  };

  //#endregion

  return (
    <div id='column-layout-containe' className='column-layout-container'>
      {getColumnsWithComponents()}
    </div>
  );
};

export default DraggableLayout;

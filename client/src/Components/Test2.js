
import React, {useState} from 'react';
import { DndContext } from '@dnd-kit/core';
import { Droppable } from './dnd-kit/Droppable'
import { Draggable } from './dnd-kit/Draggable'
import "../ComponentsCSS/Test2.css"

export default function Test2() {
  const [parent, setParent] = useState(null);
  const draggable = (
    <Draggable id="draggable" type='type1'>
      <h2>Go ahead, drag me.</h2>
    </Draggable>
  );

  return (
    <div className='test2-body'>
      <div className='test2-container'>
        <DndContext onDragEnd={handleDragEnd}>
          <Droppable id="droppable">
            DROP HERE
          </Droppable>
          {draggable}
        </DndContext>
      </div>
    </div>

  );

  function handleDragEnd({over}) {
    setParent(over ? over.id : null);
    console.log(over);
  }
}
  
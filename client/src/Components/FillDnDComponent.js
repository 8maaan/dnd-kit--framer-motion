import React, { useState } from 'react'
import "../ComponentsCSS/FillDnDComponent.css"
import { DndContext } from '@dnd-kit/core'
import { Droppable } from './dnd-kit/Droppable'
import { Draggable } from './dnd-kit/Draggable'

const FillDnDComponent = () => {
  const [parent, setParent] = useState(null);
  const [choice, setChoice] = useState(null);
  const choice1 = (
    <Draggable id="choice1" type={'type1'}>
      <h3>10</h3>
    </Draggable>
  );

  const choice2 = (
    <Draggable id="choice2" type={'type2'}>
      <h3>15</h3>
    </Draggable>
  );

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className='fdnd-body'>
        <div className='fdnd-container'>
          {/* S1 */}
          <Droppable id="slot1">
            {parent === "slot1" ? choice1 : 
              "" }
          </Droppable>

          <div className='fdnd-s2'>
            <h1>+</h1>
          </div>

          {/* S3 */}
          <Droppable id="slot2">
            {parent === "slot2" ? choice2 : 
              "" }
          </Droppable>

          <div className='fdnd-s4'>
            <h1>=</h1>
          </div>
          <div className='fdnd-s5'>
            <h1>25</h1>
          </div>
        </div>

        <div className='fdnd-drag-container'>
          
          <div className='fdnd-toDrag'>
            {!parent ? choice1 : null}
          </div>
        
        
          <div className='fdnd-toDrag'>
            {!parent ? choice2 : null}
          </div> 
          
        </div>
      </div>
    </DndContext>
  )

  function handleDragEnd({ over }) {
    setParent(over ? over.id : null);
  }
}

export default FillDnDComponent
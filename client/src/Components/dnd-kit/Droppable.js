
import React from 'react';
import {useDroppable} from '@dnd-kit/core';

export function Droppable(props) {
  const {isOver, setNodeRef} = useDroppable({
    id: props.id,
    data:{
        accepts: ['type1', 'type2']
    },
  });
  const style = {
    opacity: isOver ? 1 : 0.5,
  };

  return (
    <div ref={setNodeRef} style={style} className='fdnd-s1'>
      {props.children}
    </div>
  );
}
  
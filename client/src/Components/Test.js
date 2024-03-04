import React from 'react'
import{ DndContext, closestCenter } from '@dnd-kit/core'
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { SortableItems } from './SortableItems'
import { useState } from 'react'

const Test = () => {
    const [languages, setLanguages] = useState(["Javascript","Python","Typescript"]);
  return (
    <div style={{display:'inline-block'}}>
        <DndContext 
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
        >
            <h3>The best programming languages!</h3>
            <SortableContext
                items={languages}
                strategy={verticalListSortingStrategy}
            >
                {/* WE NEED COMPONENTS THAT USE THE useSortable hook */}
                {languages.map(language => <SortableItems key={language} id={language}/>)}
            </SortableContext>

        </DndContext>

    </div>
  )

    function handleDragEnd(event) {
        const {active, over} = event;
        if(active.id !== over.id) {
            setLanguages((items) => {
                const activeIndex = items.indexOf(active.id);
                const overIndex = items.indexOf(over.id);

                return arrayMove(items, activeIndex, overIndex);
        
            })
        }
    }
}



export default Test;
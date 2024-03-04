import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities"

export function SortableItems(props) {
    // props.id
    // JavaScript

    const { attributes, listeners, setNodeRef,transform, transition } = useSortable({id: props.id});
    
    const style = {
        transform: CSS.Transform.toString(transform),transition
    }

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
        <div style={{border: 'solid black 1px', borderRadius:'15px',marginBottom:'10px', width:'100%', height: '5vh'}}>
            {props.id}
        </div>
    </div>
  )
}

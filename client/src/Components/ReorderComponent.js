import { Reorder } from 'framer-motion'
import { useState, useEffect } from 'react'
import "../ComponentsCSS/ReorderComponent.css"

const ReorderComponent = () => {
    const [items, setItems] = useState([0, 1, 2, 3, 4, 5]);
    const compareItems = [0, 1, 2, 3, 4, 5];

    const [testSuccess, setTestSuccess] = useState(null);

    const checkItemOrder = (arr1, arr2) =>{
        if(JSON.stringify(arr1) === JSON.stringify(arr2)){
            setTestSuccess(true);
        }else{
            setTestSuccess(false);
        }
    }

    // TO CHECK CHANGES OF ITEMS
    useEffect(() =>{
        console.log(items);
    },[items]);


    return (
        <div className='rc-body'>
            {/* FOR REORDERING */}
            <h2 style={{color: '#141a70'}}>RE-ORDER APPROACH</h2>
            <div className='rc-container'>
                <div className='rc-reorder'>
                    <Reorder.Group axis="x" values={items} onReorder={setItems} as="ul" style={{overflowX: "auto"}}>
                        {items.map((item) => (
                            <Reorder.Item key={item} value={item}>
                                <div className='rc-digit-container'>
                                    {item}
                                </div>
                            </Reorder.Item>
                        ))}
                    </Reorder.Group>
                </div>

                <div className='rc-interaction'>
                    {testSuccess ? 
                        <h3 style={{color: 'green'}}> 🎉 SUCCESS 🎉</h3>
                        :
                        <h3 style={{color: 'red'}}>TRY AGAIN</h3>
                    }
                    <button onClick={()=>{checkItemOrder(items, compareItems)}}>SUBMIT</button>
                </div>
            </div>          
         </div>
    )
}

export default ReorderComponent;

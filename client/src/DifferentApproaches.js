import ReorderComponent from './Components/ReorderComponent'
import Test from './Components/Test'
import FillDnDComponent from './Components/FillDnDComponent'
import Test2 from './Components/Test2'

export const DifferentApproaches = () => {
    return (
        <div>
            <div style={{marginBottom:'20px', marginTop:'10px'}}>
                <ReorderComponent/>
            </div>
            <div style={{marginBottom:'20px'}}>
                {/* <Test/> */}
                <FillDnDComponent/>
                {/* <Test2/> */}
            </div>
        </div>
    )
}

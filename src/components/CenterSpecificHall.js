import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/center.css'

import SpecificCard from './SpecificCard';
function Center(){
    return(
        <>
         <div className="container-wrapper">
            <div className="container card">
              <SpecificCard />
            </div>
        </div>
        </>
    )
}
export default Center
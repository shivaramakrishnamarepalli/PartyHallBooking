import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/center.css'
import CardsDisplay from './CardsDisplay';
function Center(){
    return(
        <>
         <div className="container-wrapper">
            <div className="container card">
              <CardsDisplay />
            </div>
        </div>
        </>
    )
}
export default Center
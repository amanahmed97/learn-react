import * as React from 'react';
import {IBuild} from '../../components/PageDisplay';
import {Bigprops} from '../../components/PageDisplay';
import {IPage} from '../../components/PageDisplay';
import './styles.css'
import {T2} from '../../components/PageDisplay';

// export const ImageCardList:React.FC = () => {

// export const Summary:React.FC<Bigprops> = (bgprops) => {
export function Summary(iprops:IBuild,t2props : T2){    
    // bgprops.istate.id = "7";
    // bgprops.istate.name = "test";
    // bgprops.upstate(); 
    // React.useEffect(()=>{bgprops.istate.id = "7";}, [bgprops.istate.id]);
    // const [subm1,setSubm] = React.useState(0);

    return (
    // <p>{bgprops.istate.id}</p>
    // <p></p>

    <div className="summary-body">
        {/* <p>INnn : {iprops.name}</p> */}
        <div className="image-summary">

            <h1 className="section-heading">Image</h1>
            <div className="image-card-s">
                <div className="image-block-s"></div>
                <h2 className="image-title-s">{iprops.name}</h2>
                <p className="image-description-s">{iprops.description}</p> 
            </div>
            <br></br>

            <h1 className="section-heading">Instance</h1>
            <div className="instance-card-s">
                <h2 className="instance-title-s">{t2props.instance}</h2>
                <p className="instance-description-s">{t2props.core}</p>
                <p className="instance-description-s">{t2props.memory}</p>
            </div>

        </div>    

    {/* <button onClick={bgprops.upstate} >Test</button> */}
    </div>
    );

};
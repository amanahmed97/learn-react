import * as React from 'react';
// import './styles.css';
import {IBuild} from '../../components/PageDisplay';
import {Bigprops} from '../../components/PageDisplay';
import {IPage} from '../../components/PageDisplay';
import { stringify } from 'querystring';
import {SPage} from  '../../components/PageDisplay';
import {T2} from '../../components/PageDisplay';

export const ChooseInstance:React.FC<T2> = (t2props:T2,subpage:SPage) => { 

    t2props.core="1core";
    t2props.memory="256MB";
    t2props.t2up(t2props);

    return(
        <p></p>
    );
}

export default ChooseInstance;
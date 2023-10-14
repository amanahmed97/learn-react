import * as React from 'react';
import ImageCardList from '../../components/ChooseImage';
import {Summary} from '../../components/Summary';


export interface IPage{
    dpage: string;
}

export interface SPage{
    spage: number;
    // setSPage:(inpage:number) => void;
}

export interface T2{
    instance: string;
    core: string;
    memory: string;
    cost:number;
    npage:number;
    t2up : (t2upprops:T2) => void;
}

export interface OBuild{
    istate : IBuild;
}

export interface IBuild{
    id: string;
    cost: number;
    name: string;
    description:string;
    version: string;
    instance: string;
    core: string;
    memory: string;
    type: string;
    networks:string;
    securityGroup:string;
}


export interface  Bigprops {
    dpage:string;
    istate:IBuild;
    upstate :(item:Bigprops) => void;
}

// export function PageDisplay(props : IPage,stateprops:OBuild)  {
// export function PageDisplay(bgprops:Bigprops)  {
// // export const PageDisplay:React.FC<Bigprops> = (bgprops) => {        
//     // const nav = props;
//     // bgprops.dpage = "3"; Pass by reference
    
//     bgprops.istate.id = "5";
//     // bgprops.upstate();

//     if(bgprops.dpage=="1"){
//     return(
//         // <ImageCardList dpage={bgprops.dpage} istate={bgprops.istate} upstate={bgprops.upstate}/>
//         ImageCardList(bgprops)
//     );
//     }else if(bgprops.dpage=="2"){
//     return(
//         <h1>HI</h1>
//     );
//     }else if(bgprops.dpage=="3"){
//     return(
//         <h1>HI</h1>
//     );
//     }else if(bgprops.dpage=="4"){
//     return(
//         <h1>HI</h1>
//     );
//     }else if(bgprops.dpage=="5"){
//     return(
//         //  <Summary dpage={bgprops.dpage} istate={bgprops.istate} upstate={bgprops.upstate}/>
//          Summary(bgprops)
//         // <p></p>
//     );

//     }

//     return null;

// };

// export default PageDisplay;

/*
export const PageDisplay = (props : IPage) => {
    
    const nav   = props;
    
    if(nav.dpage=='1'){
    return(
        <ImageCardList/>
    );
    }else if(nav.dpage=='2'){
    return(
        <h1>HI</h1>
    );
    }else if(nav.dpage=='3'){
    return(
        <h1>HI</h1>
    );
    }else if(nav.dpage=='4'){
    return(
        <h1>HI</h1>
    );
    }else if(nav.dpage=='5'){
    return(
        <h1>HI</h1>
    );
    }

};
*/
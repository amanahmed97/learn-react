import * as React from 'react';
import './styles.css';
import {IBuild} from '../../components/PageDisplay';
import {Bigprops} from '../../components/PageDisplay';
import {IPage} from '../../components/PageDisplay';
import { stringify } from 'querystring';
import {SPage} from  '../../components/PageDisplay';

// onSelect={()=>{setInstance(ans1);setInstance2(ans1)}}

// export function ChooseInstance(bgprops:Bigprops){
export const ChooseInstance:React.FC<Bigprops> = (bgprops:Bigprops,subpage:SPage) => {    

    // const [subm1,setSubm] = React.useState(0);
    let subm:number = 1;
    // setSubm(3);
    
    function setCore(ans : string){
        bgprops.istate.core=ans;
        bgprops.upstate(bgprops);
        // bgprops.upstate();
    }
    function setMemory(ans : string){
        bgprops.istate.memory=ans;
        bgprops.upstate(bgprops);
        // bgprops.upstate();
    }

    function InstanceDisplay(){

        
        let ans1 : string;
        if(subm==1){
            return(
                <div className="ddl-out">
                    <select className="ddl-in" name="Cores" id="core">
                        {/* <label for="core">Test</label> */}
                        
                        <option className="core-val" onMouseOver={()=>setCore("1 core")}>1 Core</option>
                        <option className="core-val" onMouseOver={()=>setCore("2 core")}>2 Core</option>
                        <option className="core-val" onMouseOver={()=>setCore("4 core")}>4 Core</option>
                    </select>
                    <select className="ddl-in">
                        <option onMouseOver={()=>setMemory("256MB")}>256MB</option>
                        <option onMouseOver={()=>setMemory("512MB")}>512MB</option>
                        <option onMouseOver={()=>setMemory("1GB")}>1GB</option>
                        <option onMouseOver={()=>setMemory("2GB")}>2GB</option>
                        <option onMouseOver={()=>setMemory("4GB")}>4GB</option>
                    </select>
                </div>
            );
        }else if(subm==2){
            return(
                <div className="ddl-out">
                    <select className="ddl-in" name="Cores" id="core">
                        {/* <label for="core">Test</label> */}
                        
                        <option className="core-val" onMouseOver={()=>setCore("1 core")}>1 Core</option>
                        <option className="core-val" onMouseOver={()=>setCore("8 core")}>8 Core</option>
                        <option className="core-val" onMouseOver={()=>setCore("16 core")}>16 Core</option>
                    </select>
                    <select className="ddl-in">
                        <option onSelect={()=>setMemory("16GB")}>16GB</option>
                        <option onSelect={()=>setMemory("32GB")}>32GB</option>
                        <option onSelect={()=>setMemory("64GB")}>64GB</option>
                    </select>
                </div>
            );
        }else if(subm==3){
            return(
                <div className="ddl-out">
                    <select className="ddl-in" name="Cores" id="core">
                        {/* <label for="core">Test</label> */}
                        
                        <option className="core-val" onSelect={()=>setCore("1 core")}>1 Core</option>
                        <option className="core-val" onSelect={()=>setCore("2 core")}>2 Core</option>
                        <option className="core-val" onSelect={()=>setCore("8 core")}>8 Core</option>
                        <option className="core-val" onSelect={()=>setCore("16 core")}>16 Core</option>
                    </select>
                    <select className="ddl-in">
                    <option onSelect={()=>setMemory("16GB")}>16GB</option>
                    <option onSelect={()=>setMemory("32GB")}>32GB</option>
                    <option onSelect={()=>setMemory("64GB")}>64GB</option>
                    </select>
                </div>
            );
        }else if(subm==4){
            return(
                <div className="ddl-out">
                    <select className="ddl-in" name="Cores" id="core">
                        {/* <label for="core">Test</label> */}
                        
                        <option className="core-val" onSelect={()=>setCore("1 core")}>1 Core</option>
                        <option className="core-val" onSelect={()=>setCore("2 core")}>2 Core</option>
                        <option className="core-val" onSelect={()=>setCore("4 core")}>4 Core</option>
                        <option className="core-val" onSelect={()=>setCore("8 core")}>8 Core</option>
                        <option className="core-val" onSelect={()=>setCore("16 core")}>16 Core</option>
                    </select>
                    <select className="ddl-in">
                        <option onSelect={()=>setMemory("256MB")}>256MB</option>
                        <option onSelect={()=>setMemory("512MB")}>512MB</option>
                        <option onSelect={()=>setMemory("1GB")}>1GB</option>
                        <option onSelect={()=>setMemory("2GB")}>2GB</option>
                        <option onSelect={()=>setMemory("4GB")}>4GB</option>
                        <option onSelect={()=>setMemory("1GB")}>16GB</option>
                        <option onSelect={()=>setMemory("2GB")}>32GB</option>
                        <option onSelect={()=>setMemory("4GB")}>64GB</option>
                    </select>
                </div>
            );
        } 

        return null;
    }

    // function setSm1(){setSubm(1);}
    // function setSm2(){setSubm(2);}
    // function setSm3(){setSubm(3);}
    // function setSm4(){setSubm(4);}

    function setSm1(){subm=1;}
    function setSm2(){subm=2;}
    function setSm3(){subm=3;}
    function setSm4(){subm=4;}

    return(
        <div>
            <nav className="nav-bar">
            <button className="nav-button" onClick={setSm1}>General Purpose</button>
            <button className="nav-button" onClick={setSm2}>CPU Optimized</button>
            <button className="nav-button" onClick={setSm3}>Storage Optimized</button>
            <button className="nav-button" onClick={setSm4}>Network Optimized</button>
            </nav>
          <br></br>
          <h2 className="create-config-header">Create Configuration</h2>
          {InstanceDisplay()}
          <p>{bgprops.istate.name}</p>
          <p>{bgprops.istate.description}</p>
          <button onClick={()=>bgprops.upstate(bgprops)}>Try</button>
        </div>
    );
}

export default ChooseInstance;
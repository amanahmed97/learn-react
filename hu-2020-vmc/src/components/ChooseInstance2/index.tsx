import * as React from 'react';
import './styles.css';
import {IBuild} from '../../components/PageDisplay';
import {Bigprops} from '../../components/PageDisplay';
import {IPage} from '../../components/PageDisplay';
import { stringify } from 'querystring';
import {SPage} from  '../../components/PageDisplay';
import {T2} from '../../components/PageDisplay';

export const ChooseInstance2:React.FC<T2> = (t2props:T2,subpage:number) => { 

    let ansp1:string;let ansp2:string;
    function test(){
    t2props.instance="General Purpose";    
    t2props.core="4 core";
    t2props.memory="4 GB";
    // t2props.core=ansp1;
    t2props.t2up(t2props);
    }
    function setCore(ans:string){
        ansp1=ans;
        t2props.t2up(t2props);
    }
    function setMemory(ans:string){
        ansp2=ans;
        t2props.t2up(t2props);
    }

    function InstanceDisplay(){

        if(subpage===1){
            return(
                <div className="ddl-out">
                    <select className="ddl-in" name="Cores" id="core">
                        {/* <label for="core">Test</label> */}
                        
                        <option className="core-val" value="1c" onChange={()=>setCore("1 core")}>1 Core</option>
                        <option className="core-val" value="2c" onChange={()=>setCore("2 core")}>2 Core</option>
                        <option className="core-val" value="4c" onChange={()=>setCore("4 core")}>4 Core</option>
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
        }else if(subpage==2){
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
        }else if(subpage==3){
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
        }else if(subpage==4){
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
    
    
    return(
        <div>
            {InstanceDisplay()}
            
        <button className="next-btn" onClick={test}>Proceed</button>
        <button className="back-btn" onClick={test}>Back</button>
        </div>
    );
}

export default ChooseInstance2;
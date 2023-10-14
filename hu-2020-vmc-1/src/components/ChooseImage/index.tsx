import * as React from 'react';
import './styles.css';
import {IBuild} from '../../components/PageDisplay';
import {Bigprops} from '../../components/PageDisplay';
import {IPage} from '../../components/PageDisplay';

export interface IImage {
    id:string;
    name: string;
    description: string;
    type: IType[];
    cost: number;
    clickname:(index:string) => void;
    clickcost:(index:number) => void;
    clickdescription:(index:string) => void;
    clickRButton:(index:string) => void;
}

export interface IType {
    name:string;
    selected:boolean;
}

// let imglist : IImage[] = [
// {id:"1",name:"Linux 2 Image",description:"Linux 2 comes with 2 years of support. It provides Linux kernel 4.14 tuned for optimal performance",type:"64 bit (x86)"},

// ];

const imageList = { osimages:
    [
      {
        id: '1',
        name: 'Linux 2 Image',
        description: "Linux 2 comes with 5 years of support.It provides Linux Kernel 4.14 tuned for optimal performance",
        type: [{name:'64-bit (x86)',selected:true,},{name:'64-bit (ARM)',selected:true,}],
        cost: 243.61,
      },
      {
        id: '2',
        name: 'Ubuntu Server 18.04 LTS',
        description: "Linux 2 comes with 5 years of support.It provides Linux Kernel 4.14 tuned for optimal performance",
        type: [{name:'64-bit (x86)',selected:true,},{name:'64-bit (ARM)',selected:true,}],
        cost: 243.61,
      },
      {
        id: '3',
        name: 'Red Hat Enterprise Linux 8',
        description: "Linux 2 comes with 5 years of support.It provides Linux Kernel 4.14 tuned for optimal performance",
        type: [{name:'64-bit (x86)',selected:true,},{name:'64-bit (ARM)',selected:true,}],
        cost: 300,
      },
      {
        id: '4',
        name: 'Microsoft Windows Server 2019 Base',
        description: "Linux 2 comes with 5 years of support.It provides Linux Kernel 4.14 tuned for optimal performance",
        type: [{name:'64-bit (x86)',selected:true,},],
        cost: 338.77,
      },
      {
        id: '5',
        name: 'SUSE Linux Enterprise Server',
        description: "Linux 2 comes with 5 years of support.It provides Linux Kernel 4.14 tuned for optimal performance",
        type: [{name:'64-bit (x86)',selected:true,},{name:'64-bit (ARM)',selected:true,}],
        cost: 200.22,
      },
    ],
  };

export interface IImageList {
    oslist : IImage[];
}

export interface IRegionList {
    regionlist : IImageList[];
}

interface ImageRegionProps{
    rlist : IRegionList;
}

interface ImageListProps{
    // olist : IImageList;
    olist : IImage[];
}

interface ImageCardProps{
    osimage : IImage;
}


// export const ImageCardList:React.FC<Bigprops> = (bgprops) => {
export function ImageCardList(bgprops : Bigprops) {    
    
    // const [subm1,setSubm] = React.useState(1);

    function setName(ans:string){
        bgprops.istate.name=ans;
        bgprops.upstate(bgprops);
    }
    function setCost(ans:number){
        bgprops.istate.cost=ans;
        bgprops.upstate(bgprops);
    }
    function setDescription(ans:string){
        bgprops.istate.description=ans;
        bgprops.upstate(bgprops);
    }
    function setType(ans:string){

    }

    return(

        
        imageList.osimages.map((item,index) =>(
            <ImageCard id={item.id} name={item.name} cost={item.cost} description={item.description} type={item.type} clickname={setName}
            clickcost={setCost} clickdescription={setDescription} clickRButton={setType}/>
        ))
        
    );
};

function ImageCard(iprops : IImage) {

    function setCard(){
        iprops.clickname(iprops.name);
        iprops.clickcost(iprops.cost);
        iprops.clickdescription(iprops.description);
    }

    return(
        <div className="image-card-list">
            
            <div className="image-card">
                <div className="image-block"></div>
                <h2 className="image-title">{iprops.name}</h2>
                <p className="image-description">{iprops.description}</p>
                <div className="radio-btn">
                    <input type="radio"/>64 bit (x86)<br></br>
                    <input type="radio"/>64 bit (ARM)
                </div>
                <div className="select-button-position">
                 <button className="select-button" onClick={setCard}>Select</button>
                 </div>   
            </div>
                
        </div>
    );
}


export default ImageCardList;
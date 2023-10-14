import React from 'react';
import logo from './logo.svg';
import './App.css';
import ImageCardList from './components/ChooseImage';
import {Summary} from './components/Summary';
// import {IPage} from './components/PageDisplay';
import {IBuild} from  './components/PageDisplay';
import {OBuild} from  './components/PageDisplay';
import {Bigprops} from './components/PageDisplay';
import ChooseInstance2 from './components/ChooseInstance2';
import ChooseInstance from './components/ChooseInstance';
import {SPage} from  './components/PageDisplay';
import {T2} from './components/PageDisplay';
// let build:IBuild = {id:"",cost: "",name: "",version: "",instance: "",memory: "",type: "",networks:"",securityGroup:""};
// const [buildstate,setBuildState] = React.useState(build);

// export const setBuildStater = (ibuild : IBuild) => {
//   setBuildState(ibuild);
// }


const regionList = {region: [ {id:1, name:"us-east-1",}, {id:2,name:"us-west-1",},{id:3,name:"us-east-2",} , {id:4,name:"india"},]};

const instanceList = {
  instances:[
  { id:1,name:"General Purpose",
    cores: [{id:1,name:"1 core",},{id:2,name:"2 core"},{id:3,name:"4 core",}],
    memory: [{id:1,name:"256 MB",},{id:2,name:"512 MB"},{id:3,name:"1 GB",},{id:4,name:"4 GB",},{id:5,name:"8 GB",},]
  },
  { id:2,name:"Storage Optimzed",
    cores: [{id:1,name:"1 core",},{id:2,name:"2 core"},{id:3,name:"4 core",},{id:4,name:'8',},{id:5,name:"6 core",},],
    memory: [{id:1,name:"16 GB",},{id:2,name:"32 GB"},{id:3,name:"64 GB",},]
  },
    {id:3,name:"Network Optimized",
    cores:[{id:1,name:"1 core",},{id:2,name:"2 core"},{id:3,name:"4 core",},{id:4,name:'8',},{id:5,name:"6 core",},],
    memory:[ {id:1,name:"256 MB",},{id:2,name:"512 MB"},{id:3,name:"1 GB",},{id:4,name:'2 GB',},{id:5,name:"4 GB",},{id:6,name:"16 GB",},]
  },
  {id:4,name:"Compute Optimized",
    cores:[ {id:1,name:"1 core",},{id:2,name:"2 core"},{id:3,name:'8',},{id:4,name:"6 core",},],
    memory:[ {id:1,name:"16 GB",},{id:2,name:"32 GB"},{id:3,name:"64 GB",}]
  }
  ]
};

const App = () => {
  


  const setTab2func = (t2props:T2) =>{
    setTab2(t2props);
  }


  let build:IBuild = {id:"",cost: 0,name: "",description:"",version: "",instance: "",core:"",memory: "",type: "",networks:"",securityGroup:""};
  let ibuild:OBuild = {istate:build};
  let subnav=1;
  let t2state: T2 = {instance:"",cost:0,memory:"",core:"",npage:0,t2up:setTab2func};//check ()=>setTab2func(t2state)

  const [page,setPage] = React.useState("1");
  const [buildstate,setBuildState] = React.useState(build);
  const [subpage,setSubPage] = React.useState(1);
  const [tab2,setTab2] = React.useState(t2state);

  // const [subm,setSubm] = React.useState(1);
  

  // PageDisplay dpage={page} istate={build} upstate={setBuildStater}


  const setPage1 = () => {
    setPage("1");
  }
  const setPage2 = () => {
    setPage("2");
  }
  const setPage3 = () => {
    setPage("3");
  }
  const setPage4 = () => {
    setPage("4");
  }
  const setPage5 = () => {
    setPage("5");
  }

  function setSm1(){setSubPage(1);}
  function setSm2(){setSubPage(2);}
  function setSm3(){setSubPage(3);}
  function setSm4(){setSubPage(4);}

  // setBuildState(build);

  const setBuildStater = (ssender:Bigprops) => {
    build=ssender.istate;
    setBuildState(build);
    // sender.istate=build;
  }

  

  // const setSubPager =(in :SPage) =>{
  //   setSubPage(in.spage);
    
  // } 
  
  function PageDisplay(){
    
    if(page=="1"){
      return(
          ImageCardList(sender)
      );
      }else if(page=="2"){
      return(
          // {build.istate=buildstate}
          // ChooseInstance(sender)
          // <ChooseInstance dpage={sender.dpage} istate={sender.istate} upstate={sender.upstate}/>
          <div>
            {/* {sender.istate=buildstate} */}
          {/* <ChooseInstance dpage={sender.dpage} istate={buildstate} upstate={() => setBuildStater(sender)}/> */}
          {/*down works */}
              
          <div>
            <nav className="nav-bar">
            <button className="nav-button" onClick={setSm1}>General Purpose</button>
            <button className="nav-button" onClick={setSm2}>CPU Optimized</button>
            <button className="nav-button" onClick={setSm3}>Storage Optimized</button>
            <button className="nav-button" onClick={setSm4}>Network Optimized</button>
            </nav>
          <br></br>
          <h2 className="create-config-header">Create Configuration</h2>
          </div>
              {ChooseInstance2(t2state,subpage)} 
          </div>
      );
      }else if(page=="3"){
      return(
          <h2>Under Maintainance</h2>
      );
      }else if(page=="4"){
      return(
          <h2>Under Maintainance</h2>
      );
      }else if(page=="5"){
      return(
          //  <Summary dpage={bgprops.dpage} istate={bgprops.istate} upstate={bgprops.upstate}/>
           Summary(buildstate,tab2)
          // <p></p>
      );
  
      }
  
      return null;
  }

  function PageHeading()  {   
        if(page=="1"){return(<h1 className="body-title">Choose Image</h1>);
        }else if(page=="2"){return(<h1 className="body-title">Choose Instance Type</h1>);
        }else if(page=="3"){return(<h1 className="body-title">Choose Storage and Network</h1>);
        }else if(page=="4"){return(<h1 className="body-title">Configure Security</h1>);
        }else if(page=="5"){return(<h1 className="body-title">Review and Launch</h1>);  
        }
        return null;
  };

  let sender : Bigprops = { dpage:page,istate:build,upstate:()=>{setBuildStater(sender)}};
  // buildstate.id ="7";

  return (
    <div className="App">
      <main>
      
      <header className="App-header">
        <h3>HVC</h3>        
      </header>
      
      <body>
        
        {/* Main content */}
        <div className="content">
          
          <div style={{display:"inline"}}>
          {/* <h1 className="body-title">Choose Image</h1> */}
          {PageHeading()}
          <select className="region" placeholder="Region">
            <option>us-east-1</option>
            <option>us-east-2</option>
            <option>us-west-1</option>
            <option>india</option>
          </select>
          </div>
          
          {/* <p>{buildstate.id}</p>
          <p>{buildstate.name}</p>
          <p>{buildstate.cost}</p>
          <p>{tab2.instance}</p>
          <p>{tab2.core}</p>
          <p>{tab2.memory}</p> */}

          <nav className="navbar">
            <button className="navbutton" onClick={setPage1}>1.Choose Image</button>
            <button className="navbutton" onClick={setPage2}>2.Choose Instance Type</button>
            <button className="navbutton" onClick={setPage3}>3.Choose Storage and Network</button>
            <button className="navbutton" onClick={setPage4}>4.Configure Security</button>
            <button className="navbutton" onClick={setPage5}>5.Review and Launch</button>
          </nav>  
          
          {/* <PageDisplay dpage={page} istate={build} upstate={setBuildStater}/> */}
          {/* <PageDisplay dpage={page} istate={buildstate}/> */}
          {PageDisplay()}
          {/* {page=="2" && <ChooseInstance> */}

        </div> {/*Main content*/}
        
        {/*Cost card*/}
        <div className="cost-card">
          <h2 className="cost-card-header">Cost Estimates</h2>
          {/*details*/ }
          <p>{buildstate.name}&emsp;&emsp;&emsp;${buildstate.cost}</p>
          <p>{tab2.core}</p>
          <p>{tab2.memory}</p>
          <br></br>
          <hr className="cost-card-line"></hr>
          <h2 className="dollar-cost">${buildstate.cost}/mo</h2>
        </div>{/*Cost card*/} 


      </body>{/*body*/}
      
      </main>
      
      {/* <h1>HI</h1> */}
      
    </div> 
  );
}

export default App;

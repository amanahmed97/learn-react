import * as React from 'react';
// import './styles.css';
import {IBuild} from '../../../components/PageDisplay';
import {Bigprops} from '../../../components/PageDisplay';
import {IPage} from '../../../components/PageDisplay';
import  { ImageCardList } from '../../../components/ChooseImage';
import   ImageCard  from '../../../components/ChooseImage';
import {IImage} from '../../../components/ChooseImage';
import App from '../../../App';
import {render, wait,fireEvent, cleanup,getByTestId} from '@testing-library/react';



const setBuildStater = (ssender:Bigprops) => {
    build=ssender.istate;
    // setBuildState(build);
    // sender.istate=build;
  }
let iprops: IImage = {    id:"",name: "",
    description: "",
    type: [],
    cost: 0,
    clickname:(index:string) => [],
    clickcost:(index:number) => [],
    clickdescription:(index:string) => [],
    clickRButton:(index:string) => []
};  
let page: string="1";
let build:IBuild = {id:"",cost: 0,name: "",description:"",version: "",instance: "",core:"",memory: "",type: "",networks:"",securityGroup:""};
const bgprops : Bigprops = { dpage:page,istate:build,upstate:()=>setBuildStater};


// sender.istate=;

test('renders learn react link', () => {
    // const { getByText } = render(<ImageCardList istate={bgprops.istate} dpage={bgprops.dpage} upstate={bgprops.upstate}/>);
    const {getByText} = render(ImageCard(iprops));
    // const {getByText} = render(<App/>);
    // const linkElement = getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();
  });


describe('Testing our ChooseImage component', () => {

    test('Test if component renders', () => {

        // const {getByText} =render();
        const {getByText} = render(ImageCardList(bgprops));


    })
    
    test('Test if component renders', () => {
      const {getByText} = render(ImageCardList(bgprops));  
    const controlElement = getByText('imgList');
    expect(controlElement).toBeInTheDocument();
    });  
})


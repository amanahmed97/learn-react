import * as React from 'react';
import { render,fireEvent, cleanup, getByTestId, wait } from '@testing-library/react';
import {Summary} from '../../Summary'
import {T2} from '../../../components/PageDisplay';
import {IBuild} from '../../../components/PageDisplay';


const setTab2func = (t2props:T2) =>{
    // setTab2(t2props);
  }
const iprops:IBuild = {id:"",cost: 0,name: "",description:"",version: "",instance: "",core:"",memory: "",type: "",networks:"",securityGroup:""};
const t2props:T2 = {instance:"",cost:0,memory:"",core:"",npage:0,t2up:setTab2func};



test('renders learn react link', () => {
    const { getByText } = render(Summary(iprops,t2props));
    // const linkElement = getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();
  });
  
  afterEach(cleanup);

  describe('Renders Summary', () => {
    test ('First test to check Summary loading',() =>{
        const { getByText } = render(Summary(iprops,t2props));
        
    })

    test ('First test to check Summary loading',() =>{
        const { getByText } = render(Summary(iprops,t2props));
        const controlElement = getByText('Instance');
        expect(controlElement).toBeInTheDocument();
    })


    test ('First test to check Summary loading',() =>{
      const { getByText } = render(Summary(iprops,t2props));
      const controlElement = getByText('Image');
      expect(controlElement).toBeInTheDocument();
     })
  })
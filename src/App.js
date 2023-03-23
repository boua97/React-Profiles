import React from 'react';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BsFillEnvelopeAtFill } from "react-icons/bs";
 

import './App.css';


function App() {
  return (
<div className='container' >
<div className="App">
<div class="container mt-5">    
    <div class="row d-flex justify-content-center">       
        <div class="col-md-7">        
            <div class="card p-3 py-4">                
                <div class="text-center ">                
                <ProfilePhoto/>
                </div>                
                <div class="text-center mt-3">                
                    <FullName/>
                    <BsFillEnvelopeAtFill/>
                    <Address/>            
                </div>           
            </div>            
        </div>        
    </div>   
</div>
    </div>
</div>
  );
}

export default App;

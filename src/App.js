import React from 'react';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFillEnvelopeAtFill} from "react-icons/bs";
 

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
                
                    {/* <span class="bg-secondary p-1 px-4 rounded text-white">Tél:0610130932.</span> */}
                    
                
                    <FullName/>
                    {/* <h5 class="mt-2 mb-0"><FullName/></h5> */}
                    {/* <span>Full Stack Developer</span> */}
                    
                    <div class="px-4 mt-1">
                        {/* <p class="fonts">Jeune étudiant de 25 ans titulaire d'un master en Physique Informatique,
j'aime le challenge et vivre de nouvelles expériences.
 </p> */}
                    
                    </div>
                    
                     <ul class="social-list">
                        <li><i class="fa fa-facebook"></i></li>
                        <li><i class="fa fa-dribbble"></i></li>
                        <li><i class="fa fa-instagram"></i></li>
                        <li><i class="fa fa-linkedin"></i></li>
                        <li><i class="fa fa-google"></i></li>
                    </ul>
                    
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

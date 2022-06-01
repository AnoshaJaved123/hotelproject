import React from 'react';
import Pdf from "react-to-pdf";
import img1 from '../Components/Style/hotel2.png'
import Navbar from './Navbar';
// import { useNavigate } from 'react-router-dom';


const PDF = (props) => {
    // const navigate =useNavigate();
    const ref = React.createRef();

    return (
        <>
        <Navbar/>
       
          <div className="container">
        <div className="Post" ref={ref}>
               
               <div className="card text-center" style={{ width: '18rem' }}>
               <h4>Hotel Bill Receipt</h4>
                   <img src={img1} className="card-img-top" alt="" />
                   <div className="card-body">
                       <h5 className="card-title">{props.name}</h5>
                       <p className="card-text">Thank you for staying in our Hotel. Hope you will visit us again.</p>
                   </div>
                   <ul className="list-group list-group-flush">
                       <li className="list-group-item">ROOM TYPE: {props.roomtype}</li>
                       <li className="list-group-item">Days: {props.days}</li>
                       <li className="list-group-item">Additional Facilities:{props.extra}</li>

                   </ul>
                   <div className="card-body">
                   <li className="list-group-item">Total Bill:{props.bill}</li>

                   </div>
               </div>


           </div>
           <div className="container my-3">
              <div className="row">
              <div className="col-md-3"></div>
                  <div className="col-md-6">
                  <Pdf targetRef={ref} filename="post.pdf">
        {({ toPdf }) => <button type="button" className="btn btn-outline-primary waves-effect" onClick={toPdf}>Capture as PDF</button>}
      </Pdf>
                {/* <button className='btn btn-primary' onClick={navigate('/home')} type='submit'>Home</button> */}
                  </div>
              </div>
          </div>
        </div>
      
          
        </>
    );
}

export default PDF;
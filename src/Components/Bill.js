import React, { useState } from 'react';
import Navbar from './Navbar';
import PDF from './PDF';

const Bill = () => {

    // const [values, setvalues] = useState("");
    const [values, setValues] = useState({ name: "", days: 0, roomtype: "Single Room", extra: 0, formSubmitted: false });
    const { name, roomtype, days, extra } = values;
    const [bill, setbill] = useState(0)

    let charges;
    let day;
    let special;
    // let submission;


    // const onchange = (e)=>{
    //     setvalues(e.target.value);
    //     console.log("onchanged run");

    //     console.log(values);


    // }
    const handlebill = (e) => {
        e.preventDefault();
       setValues({...values,formSubmitted:true})
        console.log(values);
        // window.print();
        

        switch (values.roomtype) {
            case 'Single Room':
                day = values.days;
                special= values.extra;
                charges = (5000 * day + special);
                setbill(charges);
                console.log(charges);
                break;
            case 'Double Room':
                day = values.days;
                special= values.extra;
                charges = (5000 * day + special);
                setbill(charges);
                console.log(charges);
                break;
            case 'Family Room':
                day = values.days;
                special= values.extra;
                charges = (5000 * day + special);
                setbill(charges);
                console.log(charges);
                break;
            case 'Luxury Suite':
                day = values.days;
                special= values.extra;
                charges = (5000 * day + special);
                setbill(charges);
                console.log(charges);
                break;

            default:
                day = values.days;
                special= values.extra;
                charges = (5000 * day + special);
                setbill(charges);
                console.log(charges);
                break;
        }
      

    }


    return (
        <>
       
            { !values.formSubmitted? 
                (
                    <>
                    <Navbar/>
        <div className='container my-5'>

            <div className='row my-4 '>
     <div className='col-md-3'></div>
     <div className='col-md-6  shadow p-3 mb-5 bg-white rounded'>
     <div className="container text-center">
     <h4>Check Out Bill</h4>

     </div>
         <form className="form-horizontal mx-3" method="post">
             <div className="form-group row my-3">
                 <label htmlFor="exampleFormControlSelect1 my-2">Name</label>
                 <div className="col-sm-10">
                     <input name='name' value={name} onChange={(e) => setValues({ ...values, name: e.target.value })} type="text" className="form-control" placeholder="Enter Guest Name here"  />
                 </div>
             </div>
             <div className="form-group row my-3">
                 <label htmlFor="exampleFormControlSelect1 my-2">Stay Days</label>
                 <div className="col-sm-10">
                     <input value={days} onChange={(e) => setValues({ ...values, days: e.target.value})} type="Number" placeholder="Add number of stay days"  className="form-control" />
                 </div>
             </div>


             <div className="form-group row my-3">
                 <label htmlFor="exampleFormControlSelect1 my-2">Room</label>
                 <div className="col-sm-10">
                 <select  value={roomtype} onChange={(e) => setValues({ ...values, roomtype: e.target.value })} className="form-control my-2" >
                     <option value='Single Room'>Single Room</option>
                     <option value='Double Room'>Double Room</option>
                     <option value='Family Room'>Family Room</option>
                     <option value='Luxury Suite'>Luxury Suite</option>

                 </select>
             </div>
             </div>

             <div className="form-group row my-3">
                 <label htmlFor="exampleFormControlSelect1 my-2">Extra Charges</label>
                 <div className="col-sm-10">
                     <input value={extra} onChange={(e) => setValues({ ...values, extra: e.target.value })} placeholder="add extra charges for extra facility"  type="Number" className="form-control" />
                 </div>
             </div>
            
             <div className="form-group row text-center my-4">
                 <div className="col-sm-10 text-center">
                     <button style={{ background: " #873cb3", color:"white" }}  onClick={handlebill} type="submit" className="btn btn-light">Bill</button>
                 </div>
            </div>
    </form>

                </div>
            </div>

        </div>
        </>
        ) : (
            <PDF name={values.name} days={values.days} bill={bill} roomtype={values.roomtype} extra={values.extra}/>
                    )
                }
            </>
    )
}

export default Bill
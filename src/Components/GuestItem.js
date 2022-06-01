import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGuestAll, deleteguest } from '../Redux/features/guestSlice'
import { useNavigate } from 'react-router-dom'
import Spinner from './Spinner';
import Navbar from './Navbar';

// import GuestItem from './GuestItem'


  function GuestItem() {
    const navigate = useNavigate();

  const dispatch = useDispatch()
  const { loading } = useSelector((state) => ({ ...state.app }));

  const guest = useSelector(state => state.app.guest)
  // const [guests, setGuests] = useState({id:"",name:"",email:"",status:"",room:"",cnic:""})
  // const guests = [];
  useEffect(() => {
    dispatch(getGuestAll())

  }, [dispatch])

  // const handledeleteguest = ()=>{
  //   dispatch(deleteguest({id:guests._id}))
  //       window.location.reload();
  //       window.alert("user deleted")
  // }

  return (
    <>
    <Navbar/>
    <div className='container text-center my-4'>
      <h1>Guest Record</h1>
      <button type="button"  style={{ background: " #873cb3", color:"white" }} className="btn btn-light" onClick={()=>{navigate('/createguest')}}>Add Guest</button>


      <hr />
      <div className='container shadow p-3 mb-5 bg-white rounded'>
      <div className='row '>
      {loading? <Spinner/> :(
        <>
        {guest.map((guests) => 
       
          <>
       <div className="card text-center  mx-4 my-4 shadow-sm"  style={{width: '20rem'}} key={guests._id} >
             
             <div className='row'>
             <div className='col-md-6' style={{background:'#873cb3', color:'white'}}><i className="fa-solid fa-check mx-2"></i> {guests.status}</div>
             <div className='col-md-6' style={{background:'#873cb3', color:'white'}} >Room:{guests.room}</div>
             <hr />
             </div>
             <div className="card-body text-center">
             <i className="fa-solid fa-user fa-4x my-2" style={{color:'orange'}} ></i>
               <h5 className="card-title">{guests.name}</h5>
               <p className="card-text">  <i className="fa-solid fa-phone mx-2" style={{color:"green" }}></i>{guests.phone}</p>
               <p className="card-text"><i className="fa-solid fa-at mx-2" style={{color:"blue" }}></i>{guests.email}</p>

               <a onClick={()=>{ dispatch(deleteguest({id:guests._id}));  window.location.reload();  }} className="btn  btn-outline-danger"><i className="fa-solid fa-trash-can mx-1" style={{color:"red" }}></i>Delete</a>
             </div>
             <hr />
             <div className='row'>
             <div className='col-md-12'>
             <i className="fa-solid fa-id-card mx-2" style={{color:"cyan" }}></i>
               {guests.cnic}
               </div>
             </div>
           </div>

        </>
      )}
       
        </>      

              
              
            
            

              
        )}
      </div>
    </div>
    </div>
    </>
  )}

export default GuestItem

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRoomAll,deleteroom } from '../Redux/features/roomSlice'
import { useNavigate } from 'react-router-dom'
import Spinner from './Spinner'
import Navbar from './Navbar'


const Home = () => {

   const { loading } = useSelector((state) => ({ ...state.appTwo }));
  const room = useSelector(state => state.appTwo.room) //for readong data should be same name as of array from slice

  const dispatch = useDispatch();
  let navigate = useNavigate();
  useEffect(() => {
    dispatch(getRoomAll())

  }, [dispatch])


  return (

    
   
    <>
    <Navbar/>
    <div className='container text-center'>
      <h3>Add Booking</h3>
      <a href="/#" onClick={()=>{navigate('/rooms')}} className="btn btn-light" type="button" style={{ background: " #873cb3", color:"white" }}> Reserve</a>
    </div>
    <hr />
    
    <div class="container">
        <div className="row shadow p-3 mb-5 bg-white rounded">
          <h3>Single Room</h3>
          <hr />
        
          {  loading ? <Spinner /> : (
          <>
                    {  
            room
              .filter(rooms => rooms.roomtype === 'Single Room')
              .map(rooms =>
                <>
                <div className="col-md-3 my-2 ">
                  <div className="card shadow-sm " style={{ width: '14rem' }} key={rooms._id}>
                    <div className="row">
                      <div className="col-md-6 ">
                        <p className='card-text mx-2' >Room:  {rooms.roomnumber}</p>
                      </div>
                      <div className="col-md-6">
                        <p className="card-text  ">Member:  {rooms.member}</p>
                      </div>

                    </div>
                    <hr />

                    <div className="card-body text-center" >
                    <i className="fa-solid fa-user fa-2x my-2" style={{color:'orange'}} ></i>
                    <h5 className="card-title">{rooms.name}</h5>
                      <p className="card-text">{rooms.extradisp}</p>

                      <a href="/#"  onClick={()=>{ dispatch(deleteroom({id:rooms._id})); navigate('/bill');  window.location.reload(); }} className="btn  btn-outline-danger btn-sm mx-2"><i class="fa-solid fa-receipt mx-2"></i>Check Out</a>
                    </div>
                  </div>
                </div>
                  </>

              )
          }
          </>
          )
          }
          


        </div>

      
      </div>
      
      <div class="container">
        <div className="row shadow p-3 mb-5 bg-white rounded">
          <h3 >Double Room</h3>
          <hr />
        
          {  loading ? <Spinner /> : (
          <>
                    {  
            room
              .filter(rooms => rooms.roomtype === 'Double Room')
              .map(rooms =>
                <>
                <div className="col-md-3 my-2">
                  <div className="card shadow-sm  " style={{ width: '14rem' }} key={rooms._id}>
                    <div className="row">
                      <div className="col-md-6">
                        <p className='card-text mx-2' >Room:  {rooms.roomnumber}</p>
                      </div>
                      <div className="col-md-6">
                        <p className="card-text  ">Member:  {rooms.member}</p>
                      </div>

                    </div>
                    <hr />

                    <div className="card-body text-center" >
                    <i class="fa-solid fa-user-group fa-2x my-2" style={{color:'orange'}}></i>
                      <h5 className="card-title">{rooms.name}</h5>
                      <p className="card-text">{rooms.extradisp}</p>

                      <a href="/#" onClick={()=>{ dispatch(deleteroom({id:rooms._id})); navigate('/bill');  window.location.reload(); }} className="btn  btn-outline-danger btn-sm mx-2"><i class="fa-solid fa-receipt mx-2"></i>Check Out</a>
                    </div>
                  </div>
                </div>
                  </>

              )
          }
          </>
          )
          }
          


        </div>

      
      </div>

      <div class="container">
        <div className="row shadow p-3 mb-5 bg-white rounded">
          <h3>Family Room</h3>
          <hr />
        
          {  loading ? <Spinner /> : (
          <>
                    {  
            room
              .filter(rooms => rooms.roomtype === 'Family Room')
              .map(rooms =>
                <>
                <div className="col-md-3 my-2">
                  <div className="card shadow-sm  " style={{ width: '14rem' }} key={rooms._id}>
                    <div className="row">
                      <div className="col-md-6">
                        <p className='card-text mx-2' >Room:  {rooms.roomnumber}</p>
                      </div>
                      <div className="col-md-6">
                        <p className="card-text  ">Member:  {rooms.member}</p>
                      </div>

                    </div>
                    <hr />

                    <div className="card-body text-center" >
                    <i class="fa-solid fa-users fa-2x my-2" style={{color:'orange'}}></i>
                      <h5 className="card-title">{rooms.name}</h5>
                      <p className="card-text">{rooms.extradisp}</p>

                      <a href="/#" onClick={()=>{ dispatch(deleteroom({id:rooms._id})); navigate('/bill');  window.location.reload(); }} className="btn  btn-outline-danger btn-sm mx-2"><i class="fa-solid fa-receipt mx-2"></i>Check Out</a>
                    </div>
                  </div>
                </div>
                  </>

              )
          }
          </>
          )
          }
          


        </div>

      
      </div>

      <div class="container">
        <div className="row shadow p-3 mb-5 bg-white rounded">
          <h3>Luxury Suite</h3>
          <hr />
        
          {  loading ? <Spinner /> : (
          <>
                    {  
            room
              .filter(rooms => rooms.roomtype === 'Luxury Suite')
              .map(rooms =>
                <>
                <div className="col-md-3 my-2">
                  <div className="card shadow-sm  " style={{ width: '14rem' }} key={rooms._id}>
                    <div className="row">
                      <div className="col-md-6">
                        <p className='card-text mx-2' >Room:  {rooms.roomnumber}</p>
                      </div>
                      <div className="col-md-6">
                        <p className="card-text  ">Member:  {rooms.member}</p>
                      </div>

                    </div>
                    <hr />

                    <div className="card-body text-center" >
                    <i class="fa-solid fa-crown fa-2x my-2" style={{color:'orange'}}></i>
                      <h5 className="card-title">{rooms.name}</h5>
                      <p className="card-text">{rooms.extradisp}</p>

                      <a href="/#" onClick={()=>{ dispatch(deleteroom({id:rooms._id})); navigate('/bill'); window.location.reload(); }} className="btn  btn-outline-danger btn-sm mx-2"><i class="fa-solid fa-receipt mx-2"></i>Check Out</a>
                    </div>
                  </div>
                </div>
                  </>

              )
          }
          </>
          )
          }
          


        </div>

      
      </div>
    </>
  )
}



export default Home
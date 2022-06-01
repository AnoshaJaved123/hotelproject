import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createhk, deletehk, gethkAll } from '../Redux/features/housekeepingSlice'
import Navbar from './Navbar';

// import GuestItem from './GuestItem'


function HouseKeeping() {


  const dispatch = useDispatch()
  const housekeeping = useSelector(state => state.appThree.housekeeping)
  const [values, setValues] = useState({ name: "", room: "", status: "" });
  const { name, status, room } = values;

  useEffect(() => {
    dispatch(gethkAll())

  }, [dispatch])


  const handlehousekeeping = (e) => {
    e.preventDefault();
    dispatch(createhk({ values }));
    setValues({ name: "", status: "", room: "" });
    window.location.reload();
  };




  return (

    <>
    <Navbar/>

      <div className='container text-center my-4'>
        <h1>House Keeping Record</h1>


        <hr />
        <div className='container'>
          <div className='row'>
            <table className="table table-bordered shadow p-3 mb-5 bg-white rounded" >
              <thead>
                <tr>
                  <th scope="col">House Keeping Name</th>
                  <th scope="col">Room Status</th>
                  <th scope="col">Room Number</th>
                </tr>
              </thead>
              {housekeeping.map((hk) =>

                <>

                  <tbody key={hk._id}>
                    <tr >
                      <td>{hk.name}</td>
                      <td>{hk.status}</td>
                      <td>{hk.room}</td>
                      <td> <i className="fa-solid fa-trash-can mx-2" style={{color:"red" }} onClick={() => { dispatch(deletehk({ id: hk._id })); window.location.reload(); }}></i>
                         </td>
                    </tr>
                  </tbody>


                </>






              )}
            </table>
          </div>
        </div>





      </div>


      <div className='container my-5 '>

        <div className="row ">

          <div className="col-md-3"></div>
          <div className="col-md-6 text-center shadow p-3 mb-5 bg-white rounded">
            <h4>Add New House Keeping</h4>
            <form>
              <div className="form-group my-3">
                <label >House Keeping Name</label>
                <input  placeholder="Enter name"  value={name} onChange={(e) => setValues({ ...values, name: e.target.value })} type="text" className="form-control" />
              </div>
              <div className="form-group my-4">
                <label >Room Status</label>
                <input  placeholder="Enter room status"  value={status} onChange={(e) => setValues({ ...values, status: e.target.value })} type="text" className="form-control" />
              </div>
              <div className="form-group my-4">
                <label>Room Number</label>
                <input  placeholder="Enter room number"  value={room} onChange={(e) => setValues({ ...values, room: e.target.value })} type="Number" className="form-control" />
              </div>


              <div onClick={handlehousekeeping} style={{ background: " #873cb3", color:"white" }} className="btn btn-light my-4" type="button"> Add</div>
            </form>
          </div>
          <div className="col-md-3"></div>
        </div>


      </div>


    </>
  )
}

export default HouseKeeping

import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Image from '../logo.svg'

export default function SingleView({ value }) {
  const [single, setSingle] = useState([])


  const params = useParams()
  console.log(params)






  // console.log(value)


  useEffect(() => {
    // setSingle(value.filter((e) => e.emp_id == params.id))
    setSingle((JSON.parse(localStorage.getItem("Employee"))).filter((item)=>{
      return item.emp_id==params.id
    }))
  }, [])


  console.log(single);


  return (
    <>
    <div>
          <div className="card" style={{ width: "18rem" }}>
            <img src={Image} className="card-img-top" alt="...no image" />
            <div className="card-body">
              <h5 className="card-title">Employee ID : {single[0]?.emp_id}</h5>
              <h5 className="card-title">Name : {single[0]?.name}</h5>
              <h5 className="card-title">Phone : {single[0]?.phone}</h5>
              <h5 className="card-title">Email : {single[0]?.email}</h5>
              <Link to="/" className="btn btn-primary">Go Back</Link>
            </div>
          </div>

    </div>
    </>
  )
}

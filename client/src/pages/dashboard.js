import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";

function Dashboard(props) {
  const history = useHistory();
  useEffect(() => {
    fetch("/api/users/authcheck", {
      method: "GET"
    })
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          console.log("200!!!");
        } else {
          console.log("401!!!");
          history.push("/login");
        }
      })
      .catch(err => {
        console.log(err);
        history.push("/login")
      });
  }, []);

 

  return (
    <div className="container" >
      <div className="row">
        <div className="col-lg-12" style={{ width: '100%' }}>
          <div className="row" style={{ justifyContent: 'center' }}>
            <div className="card text-dark bg-info mb-3" style={{ maxWidth: '18rem' }}>
              <div className="card-header">Welcome {props.name}</div>
            </div>
            {/* <div className="card-body">
          <h5 className="card-title">Info card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div> */}
          </div>
          <div className="row" style={{ justifyContent: 'center' }}>
            <button type="button" className="btn btn-info" onClick={(e) => {
              e.preventDefault();
              window.location.href = './newgroup';
            }} >Create a Group</button>
          </div>
          <div className="row " style={{ justifyContent: "center" }} >
            <div className="card text-dark bg-info mb-3 rounded-circle mt-3" style={{ maxWidth: '13rem', justifyContent: "center" }}>
              <div className="card-body">
                <h5 className="card-title" style={{ textAlign: 'center' }} >Info card title</h5>
                <p className="card-text" style={{ textAlign: 'center' }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className="row" style={{ justifyContent: 'center' }}>
            <div className="card text-dark bg-info mb-3" style={{ maxWidth: '18rem' }}>
              <button type="button" className="btn btn-info" onClick={(e) => {
                e.preventDefault();
                window.location.href = './transaction';
              }}>Transactions</button>
            </div>
            {/* <div className="card-body">
          <h5 className="card-title">Info card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
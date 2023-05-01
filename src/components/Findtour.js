import React from "react";

const Findtour = () => {
  return (
    <>
      <div className="container-fluid find-tour">
        <div className="row">
          <div className="col">
            <div className="find-tour-text">
              <h2>Where you want to go?</h2>
            </div>
          </div>
          <div className="col">
            <div className="container">
              <form className="find-tour-boxes">
                <input type="text" placeholder="Where to go?" />
                <input type="date" placeholder="Date" />
                <input type="text" placeholder="Travel type" />
              </form>
            </div>
          </div>
          <div className="col">
            <div className="find-tour-button">
              <button type="button" className="btn btn-success btn-lg">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Findtour;

import React from "react";

import CountUp from "react-countup";

import '../../assets/Main-card.css';
import '../../assets/Main-card.js';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading....";
  }
  return (
    <>
      <div className="container mb-4">
        <div class="row">

          <div className="col-sm-4 mar">
            <div className="card" id='infected'>
              <div className="card-body">
                <h5 className='card-title text-center text_w'> INFECTED</h5>
                <h5 className="card-title text-center text_n"> <CountUp
                  start={0}
                  end={confirmed.value}
                  duration={2.75}
                  separator=", "
                /></h5>
                <p className="card-text text-center text_d"> {new Date(lastUpdate).toDateString()}</p>
                <p className="card-text text-center text_h">No Of Dathes Case</p>

              </div>
            </div>
          </div>
          <div className="col-sm-4 mar">
            <div className="card" id="recovered">
              <div className="card-body">
                <h5 className="card-title text-center text_w">RECOVERED</h5>
                <h5 className="card-title text-center text_n"> <CountUp
                  start={0}
                  end={recovered.value}
                  duration={2.75}
                  separator=", "
                /></h5>
                <p className="card-text text-center text_d"> {new Date(lastUpdate).toDateString()}</p>
                <p className="card-text text-center text_h">No Of Recoverd Active Case</p>

              </div>
            </div>
          </div>
          <div className="col-sm-4 mar">
            <div className="card" id="deaths">
              <div className="card-body">
                <h5 className="card-title text-center text_w">DEATHS</h5>
                <h5 className="card-title text-center text_n"> <CountUp
                  start={0}
                  end={deaths.value}
                  duration={2.75}
                  separator=", "
                /></h5>
                <p className="card-text text-center text_d">{new Date(lastUpdate).toDateString()}</p>
                <p className="card-text text-center text_h">Total No Of Deaths</p>


              </div>
            </div>
          </div>

        </div>
      </div>




    </>
  );
};

export default Cards;

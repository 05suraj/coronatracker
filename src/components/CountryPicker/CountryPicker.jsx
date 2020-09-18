import React, { useState, useEffect } from "react";


import { fetchCountries } from "../../api";

const CountryPicker = ({ handelCounteryChange }) => {
  const [fetchedCountries, setfetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setfetchedCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setfetchedCountries]);

  console.log(fetchedCountries);

  return (
    <>


      <div class="container mb-5 mt-4">
        <div class="row">

          <div class="form-group col-md-4 text-center m-0 mx-auto mar">

            <select id="inputState" class="form-control " defaultValue=""
              onChange={(e) => handelCounteryChange(e.target.value)}>
              <option > See Global Data</option>
              {fetchedCountries.map((country, i) => (
                <option key={i} value={country}>
                  {country}
                </option>
              ))}
            </select>

          </div>
        </div>
      </div>

    </>
  );
};

export default CountryPicker;

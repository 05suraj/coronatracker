import React, { Component } from "react";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import Image from "./image/coronavirus.png";


class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handelCounteryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;
    return (
      <>
        <div className={styles.container}>

          <img className={styles.image} src={Image} />
          <p>Developed by <span className={styles.text_p }>Suraj</span> </p>
          <Cards data={data} />
          <CountryPicker handelCounteryChange={this.handelCounteryChange} />
          <Chart data={data} country={country} />
        </div>
      </>
    );
  }
}
export default App;

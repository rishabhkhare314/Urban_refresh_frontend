import React, { useState, useEffect } from "react";
import { Header, Dropdown, Icon, Image } from "semantic-ui-react";
import get from "lodash.get";
import { cityData } from "./../../../shared/data.json";
import Service from "./../service.service";
import style from "./style.module.css";
import Offer from "../../../shared/components/offer/Offer";
import Refer from "../../../shared/components/refer/Refer";
import Layout from "../../../core/layout/Layout";

const Services = ({ match, history }) => {
  const cityId = get(match, "params.cityId");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState(cityId);

  const DATA = () => {
    let arr = [];
    cityData.map(city => {
      arr.push({
        text: city.countryName,
        value: city.id,
        disabled: true
      });
      return city.cities.map(c => {
        return arr.push({ text: c.cityName, value: c.id });
      });
    });
    setCities(arr);
  };

  const servicehHandler = id => {
    history.push(`/${selectedCity}/service/${id}/service-categories`);
  };

  const citySelector = (e, data) => {
    const { value } = data;
    setSelectedCity(value);
  };

  const serviceSearch = e => {
    const { value } = e.target;
    value.length > 2 && Service.getServices(value, selectedCity);
  };

  useEffect(() => {
    DATA();
  }, []);

  return (
    <Layout>
      <section className={style.componentBanner}>
        <Header as="h1" className={style.serviceHeading}>
          Home services, on demand
        </Header>
        <div style={{ display: "inline" }}>
          <div className={style.citySearch}>
            <Dropdown
              onChange={citySelector}
              options={cities}
              placeholder="Select City"
              className={style.cities}
              selection
              fluid
              value={selectedCity}
            />
          </div>
          <div className={style.serviceSearch}>
            <span>
              <Icon name="search" className={style.searchIcon} size="tiny" />
            </span>
            <input
              type="text"
              name="search"
              placeholder="Search Services"
              className={style.searchText}
              onChange={serviceSearch}
            />
          </div>
        </div>
      </section>

      <section className={style.serviceBox}>
        {Array(10)
          .fill()
          .map((item, index) => (
            <div
              key={index}
              className={style.services}
              onClick={e => servicehHandler(index)}
            >
              <Image
                src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609755809693-ea7299.png"
                style={{ margin: "auto" }}
              />
              <p style={{ padding: "10px" }}>Salon at Home</p>
            </div>
          ))}
      </section>
      {/* <Border />
      <Offer />
      <Refer /> */}
      <Offer />
      <Refer />
    </Layout>
  );
};

export default Services;

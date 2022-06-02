import React, { useEffect, useState } from "react";
import NavCard from "./NavCard";
import "../style/NavOptions.css";

const NavOptions = ({
  miPhones,
  redmiPhones,
  tv,
  laptop,
  fitnessAndLifeStyle,
  home,
  radio,
  accessories,
}) => {
  const [miPhonesToggle, setMiPhoneToggle] = useState(false);
  const [redmiPhonesToggle, setRedmiPhonesToggle] = useState(false);
  const [tvToggle, setTvToggle] = useState(false);
  const [laptopToggle, setLaptopToggle] = useState(false);
  const [fitnessAndLifeStyleToggle, setFitnessAndLifeStyleToggle] =
    useState(false);
  const [homeToggle, setHomeToggle] = useState(false);
  const [radioToggle, setRadioToggle] = useState(false);
  const [accessoriesToggle, setAccessoriesToggle] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/miphones") {
      setMiPhoneToggle(true);
    }
    if (window.location.pathname === "/redmiphones") {
       setRedmiPhonesToggle(true)
      }
      if (window.location.pathname === "/tv") {
       setTvToggle(true)
      }
      if (window.location.pathname === "/laptops") {
       setLaptopToggle(true)
      }
      if (window.location.pathname === "/lifestyle") {
       setFitnessAndLifeStyleToggle(true)
      }
      if (window.location.pathname === "/home") {
       setHomeToggle(true)
      }
      if (window.location.pathname === "/audio") {
        setRadioToggle(true)
      }
      if (window.location.pathname === "/accessories") {
        setAccessoriesToggle(true)
      }
  },[]);

  return (
    <div className="NavOptions">
      {miPhonesToggle
        ? miPhones.map((item, index) => (
            <NavCard
              key={item.image}
              index={index}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))
        : null}
      {redmiPhonesToggle
        ? redmiPhones.map((item, index) => (
            <NavCard
              key={item.image}
              index={index}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))
        : null}
      {tvToggle
        ? tv.map((item, index) => (
            <NavCard
              key={item.image}
              index={index}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))
        : null}
      {laptopToggle
        ? laptop.map((item, index) => (
            <NavCard
              key={item.image}
              index={index}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))
        : null}
      {fitnessAndLifeStyleToggle
        ? fitnessAndLifeStyle.map((item, index) => (
            <NavCard
              key={item.image}
              index={index}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))
        : null}
      {homeToggle
        ? home.map((item, index) => (
            <NavCard
              key={item.image}
              index={index}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))
        : null}
      {radioToggle
        ? radio.map((item, index) => (
            <NavCard
              key={item.image}
              index={index}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))
        : null}
      {accessoriesToggle
        ? accessories.map((item, index) => (
            <NavCard
              key={item.image}
              index={index}
              name={item.name}
              price={item.price}
              image={item.image}
            />
          ))
        : null}
    </div>
  );
};

export default NavOptions;

import React from "react";
import countryCodes from "../../../countryCode/countryCodes.json";

const CountryCodeSelect = ({ onChange, value }) => (
  <select
    value={value}
    onChange={(e) => onChange(e.target.value)}
    className="block appearance-none bg-white border border-gray-400 hover:border-gray-500 p-4 w-full rounded-2xl  shadow leading-tight focus:outline-none focus:shadow-outline"
  >
    {countryCodes.map((country) => (
      <option key={country.code} value={country.dial_code}>
        {country.name} ({country.dial_code})
      </option>
    ))}
  </select>
);

export default CountryCodeSelect;

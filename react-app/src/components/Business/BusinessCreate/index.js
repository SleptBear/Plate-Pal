import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { postBusinessThunk } from "../../../store/businesses";

import "./BusinessCreate.css";

const BusinessCreate = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [errors, setErrors] = useState([]);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipCode] = useState(0);
  const [phone_number, setPhoneNumber] = useState("");
  const [website, setWebsite] = useState("");
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [hours_of_operation, setHoursOfOperation] = useState("");
  // likely need to separate hours of ops M-Sun + inputs for hours
  // then format input data as string for hours of operations

  // price hover
  const [price, setPrice] = useState(0);
  const [hover, setHover] = useState(0);

  const onSubmit = async (e) => {
    e.preventDefault();
    const newBusiness = {
      name: name,
      category: category,
      address: address,
      city: city,
      state: state,
      zipcode: Number(zipcode),
      phone_number: phone_number,
      website: website,
      lat: lat,
      lng: lng,
      price: price,
      hours_of_operation: hours_of_operation,
    };

    let createdBusiness = await dispatch(postBusinessThunk(newBusiness));

    if (createdBusiness) {
      history.push(`/businesses/${createdBusiness.id}`);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <ul>{/* map errors */}</ul>
        <h2>Hello! Let's begin adding your business</h2>
        <span>
          We'll use this information to help you claim your Yelp page. Your
          business will come up automatically if it is already listed.
        </span>
        <input
          type="text"
          placeholder="Your business name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Business phone number"
          value={phone_number}
          onChange={(e) => setPhoneNumber(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        ></input>
        <span>
          Help customers find your product and service. You can add up to 3
          categories that best describe what your core business is. You can
          always edit and add more later.{" "}
        </span>
        <input
          // switch to do 10 options select field with set categories
          type="text"
          placeholder="Business categories"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="State"
          value={state}
          onChange={(e) => setState(e.target.value)}
        ></input>
        <input
          type="number"
          placeholder="zipcode"
          value={zipcode}
          onChange={(e) => setZipCode(e.target.value)}
        ></input>
        <div className="business-form-price-container">
          {/* Each price value 1-5
            On hover/click, set price value to appropriate number */}
          <span>{` Select your restaurant average price`}</span>
          {[...Array(5)].map((x, index) => {
            index += 1;
            return (
              <button
                type="button"
                key={index}
                className={index <= (hover || price) ? "on" : "off"}
                onClick={() => setPrice(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(price)}
              >
                <span className="price-rating">$</span>
                {/* price ranges? want to tell user somehow?
                0 - 10
                10 - 20
                20 - 50
                50 - 100
                100 +
                 */}
              </button>
            );
          })}
        </div>
        <input
          type="text"
          placeholder="Hours of Operations"
          value={hours_of_operation}
          onChange={(e) => setHoursOfOperation(e.target.value)}
        ></input>
        <div>
          <span>Attach Photos</span>
        </div>
        <button>Add Business</button>
      </form>
    </div>
  );
};

export default BusinessCreate;

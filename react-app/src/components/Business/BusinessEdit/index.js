import "./BusinessEdit.css";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
// import postNewImageThunk? may need in onSubmit after editedReview returned
import {
  getSingleBusinessThunk,
  editBusinessThunk,
} from "../../../store/businesses";

const BusinessEdit = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const currentUser = useSelector((state) => state.session.user);

  const { businessId } = useParams();

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

  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // repopulating input fields
  useEffect(() => {
    dispatch(getSingleBusinessThunk(businessId));

    const restoreBusiness = async () => {
      let restoredBusiness = await dispatch(getSingleBusinessThunk(businessId));

      if (restoredBusiness.owner_id !== currentUser.id) history.push("/");

      setName(restoredBusiness.name);
      setCategory(restoredBusiness.category);
      setAddress(restoredBusiness.address);
      setCity(restoredBusiness.city);
      setState(restoredBusiness.state);
      setZipCode(restoredBusiness.zipcode);
      setPhoneNumber(restoredBusiness.phone_number);
      setWebsite(restoredBusiness.website);
      setLat(restoredBusiness.lat);
      setLng(restoredBusiness.lng);
      setPrice(restoredBusiness.price);
      setHoursOfOperation(restoredBusiness.hours_of_operation);
    };

    restoreBusiness();
  }, [dispatch]);

  // handle frontend error validations
  useEffect(() => {
    const valErrors = {};

    if (name.length < 1) valErrors.name = "Business name is required";
    if (category.length < 1) valErrors.category = "Category is required";
    if (address.length < 1) valErrors.address = "Address is required";
    if (city.length < 1) valErrors.city = "City is required";
    if (state.length < 1) valErrors.state = "State is required";
    if (zipcode.toString().length < 1)
      valErrors.zipcode = "Zip Code is required";
    if (phone_number.length < 1)
      valErrors.phone_number = "Phone number is required";
    if (website.length < 1) valErrors.website = "Website is required";
    if (hours_of_operation.length < 1)
      valErrors.hours_of_operation = "Hours of operations are required";

    setErrors(valErrors);
  }, [
    name,
    category,
    address,
    city,
    state,
    zipcode,
    phone_number,
    website,
    hours_of_operation,
  ]);

  const onSubmit = async (e) => {
    e.preventDefault();

    setHasSubmitted(true);

    if (Object.values(errors).length > 0) return;

    const businessContent = {
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

    let editedBusiness = await dispatch(
      editBusinessThunk(businessContent, businessId)
    );

    if (editedBusiness) {
      history.push(`/businesses/${editedBusiness.id}`);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h2>Edit Business</h2>
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
        {hasSubmitted && errors.name}
        <input
          type="text"
          placeholder="Business phone number"
          value={phone_number}
          onChange={(e) => setPhoneNumber(e.target.value)}
        ></input>
        {hasSubmitted && errors.phone_number}
        <input
          type="text"
          placeholder="Website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        ></input>
        {hasSubmitted && errors.website}
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
        {hasSubmitted && errors.category}
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></input>
        {hasSubmitted && errors.address}
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        ></input>
        {hasSubmitted && errors.city}
        <input
          type="text"
          placeholder="State"
          value={state}
          onChange={(e) => setState(e.target.value)}
        ></input>
        {hasSubmitted && errors.state}
        <input
          type="number"
          placeholder="zipcode"
          value={zipcode}
          onChange={(e) => setZipCode(e.target.value)}
        ></input>
        {hasSubmitted && errors.zipcode}
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
        {hasSubmitted && errors.price}
        <input
          type="text"
          placeholder="Hours of Operations"
          value={hours_of_operation}
          onChange={(e) => setHoursOfOperation(e.target.value)}
        ></input>
        {hasSubmitted && errors.hours_of_operation}
        <div>
          <span>Attach Photos</span>
        </div>
        <button>Add Business</button>
      </form>
    </div>
  );
};

export default BusinessEdit;

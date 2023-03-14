import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { postBusinessThunk } from "../../../store/businesses";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete"
import "./BusinessCreate.css";

const BusinessCreate = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [errors, setErrors] = useState([]);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

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
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null
  });
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

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value.split(', ')[0]);
    setCity(value.split(', ')[1])
    setState(value.split(', ')[2])
    setCoordinates(latLng);
    setLat(latLng.lat)
    setLng(latLng.lng)
    console.log(value.split(', '))
    console.log(latLng)
  };

  return (

    <div className="business-create-container">

      <form onSubmit={onSubmit} className="business-form">
        <ul className="errors">{/* map errors */}</ul>
        <h2 className="form-title">Hello! Let's begin adding your business</h2>
        <span>
          We'll use this information to help you claim your Yelp page. Your
          business will come up automatically if it is already listed.
        </span>
        <div className="business-create-form">
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="autocomplete-container">
            <p>Latitude: {coordinates.lat}</p>
            <p>Longitude: {coordinates.lng}</p>

            <input {...getInputProps({ placeholder: "Type address" })} className="autocomplete-input"/>

            <div className="suggestion-container">
              {loading ? <div>...loading</div> : null}

              {suggestions.map(suggestion => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                };

                return (
                  <div {...getSuggestionItemProps(suggestion, { style })} className="suggestion">
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>

      </div>
        <input
          type="text"
          placeholder="Your business name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="business-form-input"
        ></input>
        <input
          type="text"
          placeholder="Business phone number"
          value={phone_number}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="business-form-input"
        ></input>
        <input
          type="text"
          placeholder="Website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          className="business-form-input"
        ></input>
        <span>
          Help customers find your product and service. You can add up to 3
          categories that best describe what your core business is. You can
          always edit and add more later.{" "}
        </span>
        <select
          value={category}
          placeholder='Select a category'
          onChange={(e) => setCategory(e.target.value)}
          className="business-form-input"
        >
          <option value={null}>Select a Category </option>
          <option value="Afghan">Afghan</option>
          <option value="African">African</option>
          <option value="Senegalese">Senegalese</option>
          <option value="South African">South African</option>
          <option value="American (New)">American (New)</option>
          <option value="American (Traditional)">American (Traditional)</option>
          <option value="Arabian">Arabian</option>
          <option value="Argentine">Argentine</option>
          <option value="Armenian">Armenian</option>
          <option value="Asian Fusion">Asian Fusion</option>
          <option value="Australian">Australian</option>
          <option value="Austrian">Austrian</option>
          <option value="Bangladeshi">Bangladeshi</option>
          <option value="Barbeque">Barbeque</option>
          <option value="Basque">Basque</option>
          <option value="Belgian">Belgian</option>
          <option value="Brasseries">Brasseries</option>
          <option value="Brazilian">Brazilian</option>
          <option value="Breakfast & Brunch">Breakfast & Brunch</option>
          <option value="Pancakes">Pancakes</option>
          <option value="British">British</option>
          <option value="Buffets">Buffets</option>
          <option value="Bulgarian">Bulgarian</option>
          <option value="Burgers">Burgers</option>
          <option value="Burmese">Burmese</option>
          <option value="Cafes">Cafes</option>
          <option value="Themed Cafes">Themed Cafes</option>
          <option value="Cafeteria">Cafeteria</option>
          <option value="Cajun/Creole">Cajun/Creole</option>
          <option value="Cambodian">Cambodian</option>
          <option value="Caribbean">Caribbean</option>
          <option value="Dominican">Dominican</option>
          <option value="Haitian">Haitian</option>
          <option value="Puerto Rican">Puerto Rican</option>
          <option value="Trinidadian">Trinidadian</option>
          <option value="Catalan">Catalan</option>
          <option value="Cheesesteaks">Cheesesteaks</option>
          <option value="Chicken Shop">Chicken Shop</option>
          <option value="Chicken Wings">Chicken Wings</option>
          <option value="Chinese">Chinese</option>
          <option value="Cantonese">Cantonese</option>
          <option value="Dim Sum">Dim Sum</option>
          <option value="Hainan">Hainan</option>
          <option value="Shanghainese">Shanghainese</option>
          <option value="Szechuan">Szechuan</option>
          <option value="Comfort Food">Comfort Food</option>
          <option value="Creperies">Creperies</option>
          <option value="Cuban">Cuban</option>
          <option value="Czech">Czech</option>
          <option value="Delis">Delis</option>
          <option value="Diners">Diners</option>
          <option value="Dinner Theater">Dinner Theater</option>
          <option value="Eritrean">Eritrean</option>
          <option value="Ethiopian">Ethiopian</option>
          <option value="Fast Food">Fast Food</option>
          <option value="Filipino">Filipino</option>
          <option value="Fish &amp; Chips">Fish &amp; Chips</option>
          <option value="Fondue">Fondue</option>
          <option value="Food Court">Food Court</option>
          <option value="Food Stands">Food Stands</option>
          <option value="French">French</option>
          <option value="Mauritius">Mauritius</option>
          <option value="Reunion">Reunion</option>
          <option value="Game Meat">Game Meat</option>
          <option value="Gastropubs">Gastropubs</option>
          <option value="Georgian">Georgian</option>
          <option value="German">German</option>
          <option value="Gluten-Free">Gluten-Free</option>
          <option value="Greek">Greek</option>
          <option value="Guamanian">Guamanian</option>
          <option value="Halal">Halal</option>
          <option value="Hawaiian">Hawaiian</option>
          <option value="Himalayan/Nepalese">Himalayan/Nepalese</option>
          <option value="Honduran">Honduran</option>
          <option value="Hong Kong Style Cafe">Hong Kong Style Cafe</option>
          <option value="Hot Dogs">Hot Dogs</option>
          <option value="Hot Pot">Hot Pot</option>
          <option value="Hungarian">Hungarian</option>
          <option value="Iberian">Iberian</option>
          <option value="Indian">Indian</option>
          <option value="Indonesian">Indonesian</option>
          <option value="Irish">Irish</option>
          <option value="Italian">Italian</option>
          <option value="Calabrian">Calabrian</option>
          <option value="Sardinian">Sardinian</option>
          <option value="Sicilian">Sicilian</option>
          <option value="Tuscan">Tuscan</option>
          <option value="Japanese">Japanese</option>
          <option value="Conveyor Belt Sushi">Conveyor Belt Sushi</option>
          <option value="Izakaya">Izakaya</option>
          <option value="Japanese Curry">Japanese Curry</option>
          <option value="Ramen">Ramen</option>
          <option value="Teppanyaki">Teppanyaki</option>
          <option value="Kebab">Kebab</option>
          <option value="Korean">Korean</option>
          <option value="Kosher">Kosher</option>
          <option value="Laotian">Laotian</option>
          <option value="Latin American">Latin American</option>
          <option value="Colombian">Colombian</option>
          <option value="Salvadoran">Salvadoran</option>
          <option value="Venezuelan">Venezuelan</option>
          <option value="Live/Raw Food">Live/Raw Food</option>
          <option value="Malaysian">Malaysian</option>
          <option value="Mediterranean">Mediterranean</option>
          <option value="Falafel">Falafel</option>
          <option value="Mexican">Mexican</option>
          <option value="Tacos">Tacos</option>
          <option value="Middle Eastern">Middle Eastern</option>
          <option value="Egyptian">Egyptian</option>
          <option value="Lebanese">Lebanese</option>
          <option value="Modern European">Modern European</option>
          <option value="Mongolian">Mongolian</option>
          <option value="Moroccan">Moroccan</option>
          <option value="New Mexican Cuisine">New Mexican Cuisine</option>
          <option value="Nicaraguan">Nicaraguan</option>
          <option value="Noodles">Noodles</option>
          <option value="Pakistani">Pakistani</option>
          <option value="Pan Asia">Pan Asia</option>
          <option value="Persian/Iranian">Persian/Iranian</option>
          <option value="Peruvian">Peruvian</option>
          <option value="Pizza">Pizza</option>
          <option value="Polish">Polish</option>
          <option value="Polynesian">Polynesian</option>
          <option value="Pop-Up Restaurants">Pop-Up Restaurants</option>
          <option value="Portuguese">Portuguese</option>
          <option value="Poutineries">Poutineries</option>
          <option value="Russian">Russian</option>
          <option value="Salad">Salad</option>
          <option value="Sandwiches">Sandwiches</option>
          <option value="Scandinavian">Scandinavian</option>
          <option value="Scottish">Scottish</option>
          <option value="Seafood">Seafood</option>
          <option value="Singaporean">Singaporean</option>
          <option value="Slovakian">Slovakian</option>
          <option value="Somali">Somali</option>
          <option value="Soul Food">Soul Food</option>
          <option value="Soup">Soup</option>
          <option value="Southern">Southern</option>
          <option value="Spanish">Spanish</option>
          <option value="Sri Lankan">Sri Lankan</option>
          <option value="Steakhouses">Steakhouses</option>
          <option value="Supper Clubs">Supper Clubs</option>
          <option value="Sushi Bars">Sushi Bars</option>
          <option value="Syrian">Syrian</option>
          <option value="Taiwanese">Taiwanese</option>
          <option value="Tapas Bars">Tapas Bars</option>
          <option value="Tapas/Small Plates">Tapas/Small Plates</option>
          <option value="Tex-Mex">Tex-Mex</option>
          <option value="Thai">Thai</option>
          <option value="Turkish">Turkish</option>
          <option value="Ukrainian">Ukrainian</option>
          <option value="Uzbek">Uzbek</option>
          <option value="Vegan">Vegan</option>
          <option value="Vegetarian">Vegetarian</option>
          <option value="Vietnamese">Vietnamese</option>
          <option value="Waffles">Waffles</option>
          <option value="Wraps">Wraps</option>
        </select>
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="business-form-input"
        ></input>
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="business-form-input"
        ></input>
        <input
          type="text"
          placeholder="State"
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="business-form-input"
        ></input>
        <input
          type="number"
          placeholder="zipcode"
          value={zipcode}
          onChange={(e) => setZipCode(e.target.value)}
          className="business-form-input"
        ></input>
<div className="business-form-price-container">
  <span>Select your restaurant average price:</span>
  <div className="price-radios">
    <label>
      <input
        type="radio"
        name="price"
        value="$"
        checked={price === 1}
        onChange={() => setPrice(1)}
      />
      $
    </label>
    <label>
      <input
        type="radio"
        name="price"
        value="$$"
        checked={price === 2}
        onChange={() => setPrice(2)}
      />
      $$
    </label>
    <label>
      <input
        type="radio"
        name="price"
        value="$$$"
        checked={price === 3}
        onChange={() => setPrice(3)}
      />
      $$$
    </label>
    <label>
      <input
        type="radio"
        name="price"
        value="$$$$"
        checked={price === 4}
        onChange={() => setPrice(4)}
      />
      $$$$
    </label>
    <label>
      <input
        type="radio"
        name="price"
        value="$$$$$"
        checked={price === 5}
        onChange={() => setPrice(5)}
      />
      $$$$$
    </label>
  </div>
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

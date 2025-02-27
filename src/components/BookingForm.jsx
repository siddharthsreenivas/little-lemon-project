import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const BookingForm = ({availableTimes, dispatch, submitForm}) => {

  const currentDate = new Date().toISOString().split("T")[0];

  // const [date, setDate] = useState(currentDate)
  // const [time, setTime] = useState(availableTimes[0])
  // const [noOfGuests, setNoOfGuests] = useState(1)
  // const [occasion, setOccasion] = useState('')
  
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    noOfGuests: 1,
    occasion: "",
  });

  const [error,setError] = useState({})

  // const handleDateChange = (e) => {
  //   setDate(e.target.value)
  //   dispatch({type: 'UPDATE_TIMES', payload: e.target.value})
  // }
  
  const validateField = (name, value) => {
    let errorMessage = "";
    
    if (name === "date" && !value) {
      errorMessage = "Date is required.";
    }

    if (name === "time" && !value) {
      errorMessage = "Please select a time.";
    }
    
    if (name === "noOfGuests") {
      if (!value || value < 1 || value > 8) {
        errorMessage = "Guests must be between 1 and 8.";
      }
    }

    if (name === "occasion" && !value) {
      errorMessage = "Please select an occasion.";
    }

    setError((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
  };

  const handleChange = (e) => {
    const {name, value} = e.target

    setFormData((prev) => ({...prev, [name]: value}))

    validateField(name, value)

    if(name === 'date'){
      dispatch({type: 'UPDATE_TIMES', payload: e.target.value})
    }

  }

  const handleBlur = (e) => {
    validateField(e.target.name, e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    Object.keys(formData).forEach((key) => validateField(key, formData[key]));
    if (Object.values(error).some((error) => error)) {
      return;
    }

    submitForm(formData)

    setFormData({
      date: "",
      time: "",
      noOfGuests: 1,
      occasion: "",
    })

    setError({})
    
  }
  
  const isFormValid = Object.values(error).every((error) => !error) && Object.values(formData).every((value) => value);
  
  return (
    <form
      className="flex flex-col gap-6 w-full max-w-lg font-Karla"
      onSubmit={handleSubmit}>

    {/* date */}
      <div className="flex flex-col gap-1 ">
        <label htmlFor="date" className="text-theme-green font-semibold">
          Date
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          onBlur={handleBlur}
          className="text-theme-green border-2 border-theme-green px-6 py-2 rounded-2xl hover:shadow-lg focus:ring-2 ring-theme-yellow text-lg "
          min={currentDate}
          required
        />
        {error.date && <p className="text-sm text-red-400">{error.date}</p>}
      </div>

    {/* time */}
      <div className="flex flex-col gap-1 relative">
        <label className="text-theme-green font-semibold" htmlFor="time">
          Time
        </label>
        <select
          id="time"
          className="text-theme-green border-2 border-theme-green px-6 py-2 rounded-2xl appearance-none hover:shadow-lg focus:ring-2 ring-theme-yellow text-lg"
          onChange={handleChange}
          value={formData.time}
          name="time"
          onBlur={handleBlur}
          required
        >
          <option value="" disabled>Choose your time</option>
          {availableTimes.map((time,i)=> <option key={i} value={time}>{time}</option>)}
        </select>
        {error.time && <p className="text-sm text-red-400">{error.time}</p>}
        <div className="absolute inset-y-0 right-3 top-10 pointer-events-none">
          <IoIosArrowDown color="#495e57" size={25} />
        </div>
      </div>

    {/* no of guests */}
      <div className="flex flex-col gap-1">
        <label className="text-theme-green font-semibold" htmlFor="guests">
          Number of guests
        </label>
        <input
          className="text-theme-green border-2 border-theme-green px-6 py-2 rounded-2xl hover:shadow-lg focus:ring-2 ring-theme-yellow placeholder:font-Karla text-lg"
          value={formData.noOfGuests}
          onChange={handleChange}
          type="number"
          name="noOfGuests"
          onBlur={handleBlur}
          placeholder="1"
          min="1"
          max="8"
          id="guests"
          required
        />
        {error.noOfGuests && <p className="text-sm text-red-400">{error.noOfGuests}</p>}
      </div>

    {/* occasion */}
      <div className="flex flex-col gap-1 relative">
        <label className="text-theme-green font-semibold" htmlFor="occasion">
          Occasion
        </label>
        <select
          className="text-theme-green border-2 border-theme-green px-6 py-2 rounded-2xl hover:shadow-lg focus:ring-2 ring-theme-yellow text-lg appearance-none"
          id="occasion"
          value={formData.occasion}
          onChange={handleChange}
          required
          name="occasion"
          onBlur={handleBlur}
        >
          <option value="" disabled>Choose your occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        {error.occasion && <p className="text-sm text-red-400">{error.occasion}</p>}
        <div className="absolute inset-y-0 right-3 top-10 pointer-events-none">
          <IoIosArrowDown color="#495e57" size={25} />
        </div>
      </div>

    {/* submit button */}
      <button
        type="submit"
        // disabled={!isFormValid}
        className={`text-lg  px-4 py-3 mt-3 rounded-2xl font-bold transition-all duration-200   ring-theme-green/50
          ${isFormValid ? 'bg-theme-yellow text-theme-green active:scale-95 hover:shadow-lg hover:-translate-y-1  hover:ring-2 ' : 'bg-black/50 text-theme-gray cursor-not-allowed'} `}
      >
        Book Now
      </button>

    </form>
  );
};

export default BookingForm;

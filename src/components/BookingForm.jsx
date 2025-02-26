import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const BookingForm = ({availableTimes, dispatch, submitForm}) => {

  const currentDate = new Date().toISOString().split("T")[0];

  // const [date, setDate] = useState(currentDate)
  // const [time, setTime] = useState(availableTimes[0])
  // const [noOfGuests, setNoOfGuests] = useState(1)
  // const [occasion, setOccasion] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [noOfGuests, setNoOfGuests] = useState(1)
  const [occasion, setOccasion] = useState('')

  const handleDateChange = (e) => {
    setDate(e.target.value)
    dispatch({type: 'UPDATE_TIMES', payload: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('----------------------------------------')
    console.log('date:', date)
    console.log('time:', time)
    console.log('noOfGuests:', noOfGuests)
    console.log('occasion:', occasion)
    console.log('----------------------------------------')

    submitForm({date, time, noOfGuests, occasion})

    setDate('')
    setTime('')
    setNoOfGuests(1)
    setOccasion('')
  }

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
          value={date}
          onChange={handleDateChange}
          className="text-theme-green border-2 border-theme-green px-6 py-2 rounded-2xl hover:shadow-lg focus:ring-2 ring-theme-yellow text-lg "
          min={currentDate}
          required
        />
      </div>

    {/* time */}
      <div className="flex flex-col gap-1 relative">
        <label className="text-theme-green font-semibold" htmlFor="time">
          Time
        </label>
        <select
          id="time"
          className="text-theme-green border-2 border-theme-green px-6 py-2 rounded-2xl appearance-none hover:shadow-lg focus:ring-2 ring-theme-yellow text-lg"
          onChange={(e)=>setTime(e.target.value)}
          value={time}
          required
        >
          <option value="" disabled>Choose your time</option>
          {availableTimes.map((time,i)=> <option key={i} value={time}>{time}</option>)}
        </select>
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
          value={noOfGuests}
          onChange={(e)=>setNoOfGuests(e.target.value)}
          type="number"
          placeholder="1"
          min="1"
          max="8"
          id="guests"
          required
        />
      </div>

    {/* occasion */}
      <div className="flex flex-col gap-1 relative">
        <label className="text-theme-green font-semibold" htmlFor="occasion">
          Occasion
        </label>
        <select
          className="text-theme-green border-2 border-theme-green px-6 py-2 rounded-2xl hover:shadow-lg focus:ring-2 ring-theme-yellow text-lg appearance-none"
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          required
        >
          <option value="" disabled>Choose your occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        <div className="absolute inset-y-0 right-3 top-10 pointer-events-none">
          <IoIosArrowDown color="#495e57" size={25} />
        </div>
      </div>

    {/* submit button */}
      <button
        type="submit"
        className="text-lg bg-theme-yellow px-4 py-3 mt-3 rounded-2xl font-bold hover:shadow-lg hover:-translate-y-1 transition-all duration-200 active:scale-95 hover:ring-2 ring-theme-green/50 text-theme-green"
      >
        Book Now
      </button>

    </form>
  );
};

export default BookingForm;

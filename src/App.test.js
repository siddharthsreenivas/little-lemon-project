import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./components/BookingForm";
import {initializeTimes, updateTimes} from "./pages/BookingPage";


const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'] 
const dispatch = jest.fn()

test('Renders the BookingForm heading', () => {
  render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
})

test('initializeTimes function returns correctly', () => {
  const result = initializeTimes()
  expect(result).not.toEqual([])
})

describe("updateTimes reducer function", () => {
  test("should return the same state when an unknown action type is provided", () => {
    const initialState = initializeTimes(); // Get the initial available times
    const action = { type: "UNKNOWN_ACTION", payload: "2025-02-25" }; // Unknown action

    const result = updateTimes(initialState, action);

    expect(result).toEqual(initialState); // Ensure state remains unchanged
  });

  test("should return the initialized times when UPDATE_TIMES action is dispatched", () => {
    const mockTimes = ['17:00', '17:30', '19:30', '21:00', '21:30']
    const initialState = initializeTimes();
    const action = { type: "UPDATE_TIMES", payload: "2025-03-03" }; // Simulated date change

    const result = updateTimes(initialState, action);

    expect(result).toEqual(mockTimes); // Expect the same initialized times
  });
});


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

describe("Form Validation", () => {
  test('HTML5 Form validation ', ()=>{
    render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={jest.fn()} />);
    const date = screen.getByTestId('date')
    const time = screen.getByTestId('time')
    const noOfGuests = screen.getByTestId('noOfGuests')
    const occasion = screen.getByTestId('occasion')
    const submitButton = screen.getByTestId("submitButton");

    expect(date).toBeRequired()
    expect(date).toHaveAttribute('type', 'date')
    expect(time).toBeRequired()
    expect(noOfGuests).toBeRequired()
    expect(noOfGuests).toHaveAttribute("type", "number");
    expect(noOfGuests).toHaveAttribute('min','1')
    expect(noOfGuests).toHaveAttribute('max','8')
    expect(occasion).toBeRequired()
    // expect(submitButton).toBeDisabled()
  })

  test('shows error messages with invalid data', ()=>{
    render(<BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={jest.fn()} />);

    const date = screen.getByTestId('date')
    fireEvent.change(date, { target: { value: ''}})
    fireEvent.blur(date)
    expect(screen.getByText("Date is required.")).toBeInTheDocument();

    const noOfGuests = screen.getByTestId('noOfGuests')
    fireEvent.change(noOfGuests, { target: { value: "9" } }); 
    expect(screen.getByText("Guests must be between 1 and 8.")).toBeInTheDocument();
  })

  test("calls submitForm function with valid data", async () => {

    const submitForm = jest.fn();

    render(
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
    );

    fireEvent.change(screen.getByLabelText("Select a date"), { target: { value: "2025-03-03" } });
    fireEvent.change(screen.getByLabelText("Select a time"), { target: { value: "19:30" } });
    fireEvent.change(screen.getByLabelText("Number of guests"), { target: { value: "3" } });
    fireEvent.change(screen.getByLabelText("Select an occasion"), { target: { value: "Birthday" } });

  
    const submitButton = screen.getByTestId("submitButton");
    fireEvent.click(submitButton)

    expect(submitButton).toBeEnabled()

    // expect(submitForm).toHaveBeenCalled({
    //   date: "2025-12-25",
    //   time: "19:00",
    //   noOfGuests: 3,
    //   occasion: "Anniversary",
    // })

  });

})
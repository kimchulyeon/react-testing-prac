import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("the counter starts at 0", () => {
	render(<App />);
	const counterElement = screen.getByTestId("counter");
	expect(counterElement).toHaveTextContent(0);
});

test('minus button has correct text', () => {
  render(<App />)
  const buttonElement = screen.getByTestId("minus-button")
  expect(buttonElement).toHaveTextContent("-")
})

test('plus button has correct text', () => {
  render(<App />)
  const buttonElement = screen.getByTestId("plus-button")
  expect(buttonElement).toHaveTextContent("+")
})

test('click minus button', () => {
  render(<App />)
  const minusButton = screen.getByTestId("minus-button")
  userEvent.click(minusButton)
  const counterElement = screen.getByTestId('counter')
  expect(counterElement).toHaveTextContent(-1)
})

test('click plus button', () => {
  render(<App />)
  const plusButton = screen.getByTestId("plus-button")
  userEvent.click(plusButton)
  const counterElement = screen.getByTestId('counter')
  expect(counterElement).toHaveTextContent(1)
})
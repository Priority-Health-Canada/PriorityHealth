import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import Homepage from '../../Components/Homepage'
import Redirect from '../../Components/Redirect';

// 1- Mocking the hook using jest.fn
const mockedUsedNavigate = jest.fn();

// 2- Mock the library
jest.mock("react-router-dom", () => ({

// 3- Import non-mocked library and use other functionalities and hooks
  ...(jest.requireActual("react-router-dom")),

// 4- Mock the required hook
  useNavigate: () => mockedUsedNavigate
}));

describe('Homepage', () => {

  test('Homepage renders correctly', () => {
    render( 
        <BrowserRouter>
             <Homepage/> 
        </BrowserRouter>
    )
    expect(screen.getByText("Connecting to a doctor just got simpler!")).toBeInTheDocument()
  })

  test('should show patient form when Register for Healthcare button clicked', async () => {
    render( 
      <BrowserRouter>
           <Redirect /> 
      </BrowserRouter>
    )
    
    // 1 - Verify that the button is existing in the DOM
    expect(
      screen.getByText('Register for Healthcare')
    ).toBeInTheDocument();
    
    // 2 - Find the button, click the button
    const button = screen.getByRole('button', { name: 'Register for Healthcare' });
    userEvent.click(button);

    // 3 - Verify that the mockedUsedNavigate function is being called the exact route /registration-form.
    expect(mockedUsedNavigate).toHaveBeenCalledWith('/registration-form');
  })

});
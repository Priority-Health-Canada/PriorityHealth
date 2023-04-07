import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
// import Redirect from '../../Components/Redirect';
import Homepage from '../../Components/Homepage'

describe('Homepage', () => {

  test('Homepage renders correctly', () => {
    render( 
        <BrowserRouter>
             <Homepage/> 
        </BrowserRouter>
    )
    expect(screen.getByText("Connecting to a doctor just got simpler!")).toBeInTheDocument()
  })

});
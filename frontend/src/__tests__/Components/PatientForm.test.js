import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import PatientForm from '../../Components/PatientForm';

describe('PatientForm', () => {
    
    test('Patient Form renders correctly', () =>{
        render(
            <BrowserRouter>
             <PatientForm/> 
        </BrowserRouter>
        )
        expect(screen.getByText("Medical History")).toBeInTheDocument()
    })
    
})


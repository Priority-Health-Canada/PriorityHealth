import React, { useState } from "react";
import PatientData from "../services/patientData";
import { Form, Button } from "react-bootstrap";
import NavBar from "./NavBar";
import { Feedback } from "./Feedback";

function PatientForm() {

  // Patient data states
  const [PHN, setPHN] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [indigenous, setIndigenous] = useState("");
  const [mhq1, setMHQ1] = useState("");
  const [mhq2, setMHQ2] = useState("");
  const [mhq3, setMHQ3] = useState("");
  const [mhq4, setMHQ4] = useState("");
  const [mhq5, setMHQ5] = useState("");
  const [mhq6, setMHQ6] = useState("");
  const [adl1, setADL1] = useState("");
  const [adl2, setADL2] = useState("");
  const [adl3, setADL3] = useState("");
  const [adl4, setADL4] = useState("");

  // Form Submit button state - Determines visibility of Admin Login button
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmit(true);

    //Send Data to Server and then to Save in Database
    const data = {
      name,
      dob,
      gender,
      email,
      indigenous,
      mhq1,
      mhq2,
      mhq3,
      mhq4,
      mhq5,
      mhq6,
      adl1,
      adl2,
      adl3,
      adl4,
    };

    try {
      await PatientData.sendData(data);
    } catch (error) {
      console.log(error);
    }

    console.log(
      `Name: ${name}\nDate of Birth: ${dob}\nGender: ${gender}\nEmail: ${email}`
    );
  };

  return (
    <>
      <NavBar isSubmitProp={isSubmit}/>
      {isSubmit ? (<Feedback />): (
        <div className="container mt-4 mx-4">
          <h1 className="mb-4">Personal Information</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicPHN" className="my-3">
              <Form.Label className="fw-bold">Personal Health Number</Form.Label>
              <Form.Control
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="Enter PHN"
                value={PHN}
                onChange={(e) => setPHN(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicName" className="my-3">
              <Form.Label className="fw-bold">Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formBasicDOB" className="my-3">
              <Form.Label className="fw-bold">Date of Birth</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter date of birth"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="my-3">
              <Form.Label className="fw-bold">Gender</Form.Label>
              <div>
                <Form.Check
                  inline
                  label="Male"
                  type="radio"
                  id="maleRadio"
                  value="male"
                  checked={gender === "male"}
                  onChange={(e) => setGender(e.target.value)}
                  required
                />
                <Form.Check
                  inline
                  label="Female"
                  type="radio"
                  id="femaleRadio"
                  value="female"
                  checked={gender === "female"}
                  onChange={(e) => setGender(e.target.value)}
                  required
                />
                <Form.Check
                  inline
                  label="Other"
                  type="radio"
                  id="otherRadio"
                  value="other"
                  checked={gender === "other"}
                  onChange={(e) => setGender(e.target.value)}
                  required
                />
              </div>
            </Form.Group>

            <Form.Group controlId="formBasicEmail" className="my-3">
              <Form.Label className="fw-bold">Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group className="my-3">
              <Form.Label className="fw-bold">
                Do you identify as an Indigenous person?
              </Form.Label>
              <div>
                <Form.Check
                  label="Yes, I identify as an Indigenous person"
                  type="radio"
                  id="indigenousYes"
                  value="Yes"
                  checked={indigenous === "Yes"}
                  onChange={(e) => setIndigenous(e.target.value)}
                  required
                />
                <Form.Check
                  label="No, I do not identify as an Indigenous person"
                  type="radio"
                  id="indigenousNo"
                  value="No"
                  checked={indigenous === "No"}
                  onChange={(e) => setIndigenous(e.target.value)}
                  required
                />
                <Form.Check
                  label="Prefer not to say"
                  type="radio"
                  id="indigenousNotSay"
                  value="Prefer not to say"
                  checked={indigenous === "Prefer not to say"}
                  onChange={(e) => setIndigenous(e.target.value)}
                  required
                />
              </div>
            </Form.Group>
            <hr />
            <h1 className="mb-4">Medical History</h1>
            <Form.Group className="my-3">
              <Form.Label className="fw-bold">
                Are you living with pain?
              </Form.Label>
              <div>
                <Form.Check
                  inline
                  label="Yes"
                  type="radio"
                  id="yesPainRadio"
                  value="yes"
                  checked={mhq1 === "yes"}
                  onChange={(e) => setMHQ1(e.target.value)}
                  required
                />
                <Form.Check
                  inline
                  label="No"
                  type="radio"
                  id="noPainRadio"
                  value="no"
                  checked={mhq1 === "no"}
                  onChange={(e) => setMHQ1(e.target.value)}
                  required
                />
              </div>
            </Form.Group>
            <Form.Group className="my-3">
              <Form.Label className="fw-bold">
                Do you have social supports?
              </Form.Label>
              <div>
                <Form.Check
                  inline
                  label="Yes"
                  type="radio"
                  id="yesSocialRadio"
                  value="yes"
                  checked={mhq2 === "yes"}
                  onChange={(e) => setMHQ2(e.target.value)}
                  required
                />
                <Form.Check
                  inline
                  label="No"
                  type="radio"
                  id="noSocialRadio"
                  value="no"
                  checked={mhq2 === "no"}
                  onChange={(e) => setMHQ2(e.target.value)}
                  required
                />
              </div>
            </Form.Group>
            <Form.Group className="my-3">
              <Form.Label className="fw-bold">
                Do you think there are any conditions or illness which run in your
                family?
              </Form.Label>
              <div>
                <Form.Check
                  inline
                  label="Yes"
                  type="radio"
                  id="yesConditionsRadio"
                  value="yes"
                  checked={mhq3 === "yes"}
                  onChange={(e) => setMHQ3(e.target.value)}
                  required
                />
                <Form.Check
                  inline
                  label="No"
                  type="radio"
                  id="noConditionRadio"
                  value="no"
                  checked={mhq3 === "no"}
                  onChange={(e) => setMHQ3(e.target.value)}
                  required
                />
              </div>
            </Form.Group>
            <Form.Group className="my-3">
              <Form.Label className="fw-bold">
                Do you take any prescription medication?
              </Form.Label>
              <div>
                <Form.Check
                  label="Yes, 1-3 medications"
                  type="radio"
                  id="yesMed1-3Radio"
                  value="Yes, 1-3 medications"
                  checked={mhq4 === "Yes, 1-3 medications"}
                  onChange={(e) => setMHQ1(e.target.value)}
                  required
                />
                <Form.Check
                  label="Yes, 4-7 medications"
                  type="radio"
                  id="yesMed4-7Radio"
                  value="Yes, 4-7 medications"
                  checked={mhq4 === "Yes, 4-7 medications"}
                  onChange={(e) => setMHQ1(e.target.value)}
                  required
                />
                <Form.Check
                  label="Yes, 8 or more medications"
                  type="radio"
                  id="yesMed8Radio"
                  value="Yes, 8 or more medications"
                  checked={mhq4 === "Yes, 8 or more medications"}
                  onChange={(e) => setMHQ1(e.target.value)}
                  required
                />
                <Form.Check
                  label="No"
                  type="radio"
                  id="noMedRadio"
                  value="no"
                  checked={mhq4 === "no"}
                  onChange={(e) => setMHQ4(e.target.value)}
                  required
                />
              </div>
            </Form.Group>
            <Form.Group className="my-3">
              <Form.Label className="fw-bold">
                Have you ever been diagnosed with a mental health illness?
              </Form.Label>
              <div>
                <Form.Check
                  inline
                  label="Yes"
                  type="radio"
                  id="yesMentalRadio"
                  value="yes"
                  checked={mhq5 === "yes"}
                  onChange={(e) => setMHQ5(e.target.value)}
                  required
                />
                <Form.Check
                  inline
                  label="No"
                  type="radio"
                  id="noMentalRadio"
                  value="no"
                  checked={mhq5 === "no"}
                  onChange={(e) => setMHQ5(e.target.value)}
                  required
                />
              </div>
            </Form.Group>
            <Form.Group className="my-3">
              <Form.Label className="fw-bold">
                In the past 12 months, how often have you used the following drug?
                (tobacco, alcohol, marijuana, recreational drugs)?
              </Form.Label>
              <div>
                <Form.Check
                  label="Once or Twice"
                  type="radio"
                  id="drugOnceRadio"
                  value="Once or Twice"
                  checked={mhq6 === "Once or Twice"}
                  onChange={(e) => setMHQ6(e.target.value)}
                  required
                />
                <Form.Check
                  label="Daily"
                  type="radio"
                  id="drugDailyRadio"
                  value="Daily"
                  checked={mhq6 === "Daily"}
                  onChange={(e) => setMHQ6(e.target.value)}
                  required
                />
                <Form.Check
                  label="Weekly"
                  type="radio"
                  id="drugWeeklyRadio"
                  value="Weekly"
                  checked={mhq6 === "Weekly"}
                  onChange={(e) => setMHQ6(e.target.value)}
                  required
                />
                <Form.Check
                  label="Monthly"
                  type="radio"
                  id="drugMonthlyRadio"
                  value="Monthly"
                  checked={mhq6 === "Monthly"}
                  onChange={(e) => setMHQ6(e.target.value)}
                  required
                />
                <Form.Check
                  label="Never"
                  type="radio"
                  id="drugNeverRadio"
                  value="Never"
                  checked={mhq6 === "Never"}
                  onChange={(e) => setMHQ6(e.target.value)}
                  required
                />
              </div>
            </Form.Group>
            <hr />
            <h1 className="mb-4">
              Questions about Activities of Daily Living (ADL)
            </h1>
            <Form.Group className="my-3">
              <Form.Label className="fw-bold">
                Are you able to move from one place to another idependently?
              </Form.Label>
              <div>
                <Form.Check
                  inline
                  label="Yes"
                  type="radio"
                  id="yesindependentRadio"
                  value="yes"
                  checked={adl1 === "yes"}
                  onChange={(e) => setADL1(e.target.value)}
                  required
                />
                <Form.Check
                  inline
                  label="No"
                  type="radio"
                  id="ynoindependentRadio"
                  value="no"
                  checked={adl1 === "no"}
                  onChange={(e) => setADL1(e.target.value)}
                  required
                />
              </div>
            </Form.Group>
            <Form.Group className="my-3">
              <Form.Label className="fw-bold">
                Are you able to feed yourself?
              </Form.Label>
              <div>
                <Form.Check
                  inline
                  label="Yes"
                  type="radio"
                  id="yesFeedRadio"
                  value="yes"
                  checked={adl2 === "yes"}
                  onChange={(e) => setADL2(e.target.value)}
                  required
                />
                <Form.Check
                  inline
                  label="No"
                  type="radio"
                  id="noFeedRadio"
                  value="no"
                  checked={adl2 === "no"}
                  onChange={(e) => setADL2(e.target.value)}
                  required
                />
              </div>
            </Form.Group>
            <Form.Group className="my-3">
              <Form.Label className="fw-bold">
                Are you able to take care of all your hygiene and personal care
                needs?
              </Form.Label>
              <div>
                <Form.Check
                  inline
                  label="Yes"
                  type="radio"
                  id="yesCareRadio"
                  value="yes"
                  checked={adl3 === "yes"}
                  onChange={(e) => setADL3(e.target.value)}
                  required
                />
                <Form.Check
                  inline
                  label="No"
                  type="radio"
                  id="noCareRadio"
                  value="no"
                  checked={adl3 === "no"}
                  onChange={(e) => setADL3(e.target.value)}
                  required
                />
              </div>
            </Form.Group>
            <Form.Group className="my-3">
              <Form.Label className="fw-bold">
                Are you able to control your bladder and bowel functions?
              </Form.Label>
              <div>
                <Form.Check
                  inline
                  label="Yes"
                  type="radio"
                  id="yesControlRadio"
                  value="yes"
                  checked={adl4 === "yes"}
                  onChange={(e) => setADL4(e.target.value)}
                  required
                />
                <Form.Check
                  inline
                  label="No"
                  type="radio"
                  id="noControlRadio"
                  value="no"
                  checked={adl4 === "no"}
                  onChange={(e) => setADL4(e.target.value)}
                  required
                />
              </div>
            </Form.Group>

            <Button variant="warning" type="submit" className="my-3">
              Submit
            </Button>
          </Form>
        </div>
      )} 

      <div className="container2 mt-4 mx-4"></div>
    </>
  );
}

export default PatientForm;

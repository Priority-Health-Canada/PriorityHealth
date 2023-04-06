import React, { useState } from "react";
import PatientData from "../services/patientData";
import { Form, Button, Alert } from "react-bootstrap";
import NavBar from "./NavBar";
import { Feedback } from "./Feedback";

function PatientForm() {
  // Patient data states
  const [phn, setPHN] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [indigenous, setIndigenous] = useState("");
  const [pain, setpain] = useState("");
  const [socialSupport, setsocialSupport] = useState("");
  const [familyIllness, setfamilyIllness] = useState("");
  const [prescriptionMed, setprescriptionMed] = useState("");
  const [mentalHealth, setmentalHealth] = useState("");
  const [otherDrugUse, setotherDrugUse] = useState("");
  const [movingAbility, setmovingAbility] = useState("");
  const [feedingAbility, setfeedingAbility] = useState("");
  const [takeCareAbility, settakeCareAbility] = useState("");
  const [controlBladderFunction, setcontrolBladderFunction] = useState("");

  // Warning state
  const [showWarning, setShowWarning] = useState(false);

  // Form Submit button state
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !movingAbility ||
      !feedingAbility ||
      !takeCareAbility ||
      !controlBladderFunction ||
      !pain ||
      !socialSupport ||
      !familyIllness ||
      !prescriptionMed ||
      !mentalHealth ||
      !otherDrugUse ||
      !indigenous ||
      !gender
    ) {
      setShowWarning(true);
      window.scrollTo(0, 0); //Scrolls to the top of the page
    } else {
      setShowWarning(false);
      //Send Data to Server to Save in Database
      const data = {
        phn,
        name,
        dob,
        gender,
        email,
        indigenous,
        pain,
        socialSupport,
        familyIllness,
        prescriptionMed,
        mentalHealth,
        otherDrugUse,
        movingAbility,
        feedingAbility,
        takeCareAbility,
        controlBladderFunction,
      };

      try {
        await PatientData.sendData(data);
      } catch (error) {
        console.log(error);
      }

      setIsSubmit(true);

      console.log(
        `Name: ${name}\nDate of Birth: ${dob}\nGender: ${gender}\nEmail: ${email}`
      );
    }
  };

  return (
    <>
      <NavBar isHomePage={false} />
      {isSubmit ? (
        <Feedback />
      ) : (
        <div className="container mt-4 mx-4">
          <h1 className="mb-4">Personal Information</h1>
          <Form onSubmit={handleSubmit}>
            {showWarning && (
              <Alert variant="danger">
                Please select an option for all the questions.
              </Alert>
            )}
            <Form.Group controlId="formBasicPHN" className="my-3">
              <Form.Label className="fw-bold">
                Personal Health Number
              </Form.Label>
              <Form.Control
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                placeholder="Enter PHN"
                value={phn}
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

            <Form.Group controlId="formBasicIndigenous" className="my-3">
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
            <Form.Group controlId="formBasicPain" className="my-3">
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
                  checked={pain === "yes"}
                  onChange={(e) => setpain(e.target.value)}
                  required
                />
                <Form.Check
                  inline
                  label="No"
                  type="radio"
                  id="noPainRadio"
                  value="no"
                  checked={pain === "no"}
                  onChange={(e) => setpain(e.target.value)}
                  required
                />
              </div>
            </Form.Group>
            <Form.Group controlId="formBasicSocial" className="my-3">
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
                  checked={socialSupport === "yes"}
                  onChange={(e) => setsocialSupport(e.target.value)}
                  required
                />
                <Form.Check
                  inline
                  label="No"
                  type="radio"
                  id="noSocialRadio"
                  value="no"
                  checked={socialSupport === "no"}
                  onChange={(e) => setsocialSupport(e.target.value)}
                  required
                />
              </div>
            </Form.Group>
            <Form.Group controlId="formBasicFam" className="my-3">
              <Form.Label className="fw-bold">
                Do you think there are any conditions or illness which run in
                your family?
              </Form.Label>
              <div>
                <Form.Check
                  inline
                  label="Yes"
                  type="radio"
                  id="yesConditionsRadio"
                  value="yes"
                  checked={familyIllness === "yes"}
                  onChange={(e) => setfamilyIllness(e.target.value)}
                  required
                />
                <Form.Check
                  inline
                  label="No"
                  type="radio"
                  id="noConditionRadio"
                  value="no"
                  checked={familyIllness === "no"}
                  onChange={(e) => setfamilyIllness(e.target.value)}
                  required
                />
              </div>
            </Form.Group>
            <Form.Group controlId="formBasicMedication" className="my-3">
              <Form.Label className="fw-bold">
                Do you take any prescription medication?
              </Form.Label>
              <div>
                <Form.Check
                  label="Yes, 1-3 medications"
                  type="radio"
                  id="yesMed1-3Radio"
                  value="1-3"
                  checked={prescriptionMed === "1-3"}
                  onChange={(e) => setprescriptionMed(e.target.value)}
                  required
                />
                <Form.Check
                  label="Yes, 4-7 medications"
                  type="radio"
                  id="yesMed4-7Radio"
                  value="4-7"
                  checked={prescriptionMed === "4-7"}
                  onChange={(e) => setprescriptionMed(e.target.value)}
                  required
                />
                <Form.Check
                  label="Yes, 8 or more medications"
                  type="radio"
                  id="yesMed8Radio"
                  value="8"
                  checked={prescriptionMed === "8"}
                  onChange={(e) => setprescriptionMed(e.target.value)}
                  required
                />
                <Form.Check
                  label="No"
                  type="radio"
                  id="noMedRadio"
                  value="no"
                  checked={prescriptionMed === "no"}
                  onChange={(e) => setprescriptionMed(e.target.value)}
                  required
                />
              </div>
            </Form.Group>
            <Form.Group controlId="formBasicMHI" className="my-3">
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
                  checked={mentalHealth === "yes"}
                  onChange={(e) => setmentalHealth(e.target.value)}
                  required
                />
                <Form.Check
                  inline
                  label="No"
                  type="radio"
                  id="noMentalRadio"
                  value="no"
                  checked={mentalHealth === "no"}
                  onChange={(e) => setmentalHealth(e.target.value)}
                  required
                />
              </div>
            </Form.Group>
            <Form.Group controlId="formBasicDrugs" className="my-3">
              <Form.Label className="fw-bold">
                In the past 12 months, how often have you used the following
                drug? (tobacco, alcohol, marijuana, recreational drugs)?
              </Form.Label>
              <div>
                <Form.Check
                  label="Once or Twice"
                  type="radio"
                  id="drugOnceRadio"
                  value="Once or Twice"
                  checked={otherDrugUse === "Once or Twice"}
                  onChange={(e) => setotherDrugUse(e.target.value)}
                  required
                />
                <Form.Check
                  label="Daily"
                  type="radio"
                  id="drugDailyRadio"
                  value="Daily"
                  checked={otherDrugUse === "Daily"}
                  onChange={(e) => setotherDrugUse(e.target.value)}
                  required
                />
                <Form.Check
                  label="Weekly"
                  type="radio"
                  id="drugWeeklyRadio"
                  value="Weekly"
                  checked={otherDrugUse === "Weekly"}
                  onChange={(e) => setotherDrugUse(e.target.value)}
                  required
                />
                <Form.Check
                  label="Monthly"
                  type="radio"
                  id="drugMonthlyRadio"
                  value="Monthly"
                  checked={otherDrugUse === "Monthly"}
                  onChange={(e) => setotherDrugUse(e.target.value)}
                  required
                />
                <Form.Check
                  label="Never"
                  type="radio"
                  id="drugNeverRadio"
                  value="Never"
                  checked={otherDrugUse === "Never"}
                  onChange={(e) => setotherDrugUse(e.target.value)}
                  required
                />
              </div>
            </Form.Group>
            <hr />
            <h1 className="mb-4">
              Questions about Activities of Daily Living (ADL)
            </h1>
            <Form.Group controlId="formBasicMove" className="my-3">
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
                  checked={movingAbility === "yes"}
                  onChange={(e) => setmovingAbility(e.target.value)}
                  required
                />
                <Form.Check
                  inline
                  label="No"
                  type="radio"
                  id="ynoindependentRadio"
                  value="no"
                  checked={movingAbility === "no"}
                  onChange={(e) => setmovingAbility(e.target.value)}
                  required
                />
              </div>
            </Form.Group>
            <Form.Group controlId="formBasicFeed" className="my-3">
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
                  checked={feedingAbility === "yes"}
                  onChange={(e) => setfeedingAbility(e.target.value)}
                  required
                />
                <Form.Check
                  inline
                  label="No"
                  type="radio"
                  id="noFeedRadio"
                  value="no"
                  checked={feedingAbility === "no"}
                  onChange={(e) => setfeedingAbility(e.target.value)}
                  required
                />
              </div>
            </Form.Group>
            <Form.Group controlId="formBasicHygiene" className="my-3">
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
                  checked={takeCareAbility === "yes"}
                  onChange={(e) => settakeCareAbility(e.target.value)}
                  required
                />
                <Form.Check
                  inline
                  label="No"
                  type="radio"
                  id="noCareRadio"
                  value="no"
                  checked={takeCareAbility === "no"}
                  onChange={(e) => settakeCareAbility(e.target.value)}
                  required
                />
              </div>
            </Form.Group>
            <Form.Group controlId="formBasicBladder" className="my-3">
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
                  checked={controlBladderFunction === "yes"}
                  onChange={(e) => setcontrolBladderFunction(e.target.value)}
                  required
                />
                <Form.Check
                  inline
                  label="No"
                  type="radio"
                  id="noControlRadio"
                  value="no"
                  checked={controlBladderFunction === "no"}
                  onChange={(e) => setcontrolBladderFunction(e.target.value)}
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

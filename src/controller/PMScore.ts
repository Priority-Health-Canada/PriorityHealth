import PatientData from "../types/patientInfo";

export default new (class PMScore {
  // 1
  indigenous(indigenousResponse: string): number {
    let indigenousMetric = 0;

    if (indigenousResponse === "Yes") {
      indigenousMetric += 0.6;
    } else if (indigenousResponse === "No") {
      indigenousMetric += 0.3;
    } else if (indigenousResponse === "Prefer not to say") {
      indigenousMetric += 0;
    }
    return indigenousMetric;
  }

  // 2
  pain(painResponse: string): number {
    let painMetric = 0;

    if (painResponse === "yes") {
      painMetric += 0.7;
    }
    return painMetric;
  }

  // 3
  socialSupport(supportResponse: string): number {
    let socialSupportMetric = 0;

    if (supportResponse === "yes") {
      socialSupportMetric += 0.2; // Has support means requires support, so 0.2 points
    } else if (supportResponse === "no") {
      socialSupportMetric += 0.5;
    }
    return socialSupportMetric;
  }

  // 4
  familyIllness(familyIllnessResponse: string): number {
    let familyIllnessMetric = 0;

    if (familyIllnessResponse === "yes") {
      familyIllnessMetric += 0.5;
    }
    return familyIllnessMetric;
  }

  // 5
  prescriptionMed(prescriptionMedResponse: string): number {
    let prescriptionMedMetric = 0;

    if (prescriptionMedResponse === "1-3") {
      prescriptionMedMetric += 0.5;
    } else if (prescriptionMedResponse === "4-7") {
      prescriptionMedMetric += 1;
    } else if (prescriptionMedResponse === "8") {
      prescriptionMedMetric += 1.5;
    }
    return prescriptionMedMetric;
  }

  // 6
  mentalHealth(mentalHealthResponse: string): number {
    let mentalHealthMetric = 0;

    if (mentalHealthResponse === "yes") {
      mentalHealthMetric += 0.7;
    }
    return mentalHealthMetric;
  }

  // 7
  otherDrugUse(otherDrugUseResponse: string): number {
    let otherDrugUseMedMetric = 0;

    if (otherDrugUseResponse === "Once or Twice") {
      otherDrugUseMedMetric += 0.1;
    } else if (otherDrugUseResponse === "Daily") {
      otherDrugUseMedMetric += 1.5;
    } else if (otherDrugUseResponse === "Weekly") {
      otherDrugUseMedMetric += 0.7;
    } else if (otherDrugUseResponse === "Monthly") {
      otherDrugUseMedMetric += 0.4;
    }
    return otherDrugUseMedMetric;
  }

  // 8
  movingAbility(movingAbilityResponse: string): number {
    let movingAbilityMetric = 0;

    if (movingAbilityResponse === "no") {
      movingAbilityMetric += 1;
    }
    return movingAbilityMetric;
  }

  // 9
  feedingAbility(feedingAbilityResponse: string): number {
    let feedingAbilityMetric = 0;

    if (feedingAbilityResponse === "no") {
      feedingAbilityMetric += 1;
    }
    return feedingAbilityMetric;
  }

  // 10
  takeCareAbility(takeCareAbilityResponse: string): number {
    let takeCareAbilityMetric = 0;

    if (takeCareAbilityResponse === "no") {
      takeCareAbilityMetric += 1;
    }
    return takeCareAbilityMetric;
  }

  // 11
  controlBladderFunction(controlBladderFunctionResponse: string): number {
    let controlBladderFunctionMetric = 0;

    if (controlBladderFunctionResponse === "no") {
      controlBladderFunctionMetric += 1;
    }
    return controlBladderFunctionMetric;
  }

  calcultePMS(patientData: PatientData): number {
    let pmsScore = 0;

    pmsScore += this.indigenous(patientData.indigenous);
    pmsScore += this.pain(patientData.pain);
    pmsScore += this.socialSupport(patientData.socialSupport);
    pmsScore += this.familyIllness(patientData.familyIllness);
    pmsScore += this.prescriptionMed(patientData.prescriptionMed);
    pmsScore += this.mentalHealth(patientData.mentalHealth);
    pmsScore += this.otherDrugUse(patientData.otherDrugUse);
    pmsScore += this.movingAbility(patientData.movingAbility);
    pmsScore += this.feedingAbility(patientData.feedingAbility);
    pmsScore += this.takeCareAbility(patientData.takeCareAbility);
    pmsScore += this.controlBladderFunction(patientData.controlBladderFunction);

    return Number(pmsScore.toFixed(1));
  }
})();

import PatientData from "../types/patientInfo";

export default new class PMScore{
    
    // 1
    indigenous(indigenousResponse: string): number {
        let indigenousMetric = 0;

        if(indigenousResponse === "Yes"){
            indigenousMetric += 0.6;
        }else if(indigenousResponse === "No"){
            indigenousMetric += 0.3;
        }else if(indigenousResponse === "Prefer not to say"){
            indigenousMetric += 0;
        }
        return indigenousMetric;
    }

    // 2
    pain(painResponse: string): number {
        let painMetric = 0;

        if(painResponse === "yes"){
            painMetric += 0.7;
        }
        return painMetric;
    }

    // 3
    socialSupport(supportResponse: string): number {

        let socialSupportMetric = 0;

        if(supportResponse === "yes"){
            socialSupportMetric += 0.2;     // Has support means requires support, so 0.2 points
        }else if(supportResponse === "no"){
            socialSupportMetric += 0.5;
        }
        return socialSupportMetric;
        
    }
    
    // 4
    familyIllness(familyIllnessResponse: string): number {
        let familyIllnessMetric = 0;

        if(familyIllnessResponse === "yes"){
            familyIllnessMetric += 0.5;
        }
        return familyIllnessMetric;
    }

    // 5
    prescriptionMed(prescriptionMedResponse: string): number {
        let prescriptionMedMetric = 0;

        if(prescriptionMedResponse === "Yes, 1-3 medications"){
            prescriptionMedMetric += 0.5;
        }else if(prescriptionMedResponse === "Yes, 4-7 medications"){
            prescriptionMedMetric += 1;
        }else if(prescriptionMedResponse === "Yes, 8 or more medications"){
            prescriptionMedMetric += 1.5;
        }
        return prescriptionMedMetric;
    }

    // 6
    mentalHealth(mentalHealthResponse: string): number {
        let mentalHealthMetric = 0;

        if(mentalHealthResponse === "yes"){
            mentalHealthMetric += 0.7;
        }
        return mentalHealthMetric;
    }

    // 7
    otherDrugUse(otherDrugUseResponse: string): number {
        let otherDrugUseMedMetric = 0;

        if(otherDrugUseResponse === "Once or Twice"){
            otherDrugUseMedMetric += 0.1;
        }else if(otherDrugUseResponse === "Daily"){
            otherDrugUseMedMetric += 1.5;
        }else if(otherDrugUseResponse === "Weekly"){
            otherDrugUseMedMetric += 0.7;
        }else if(otherDrugUseResponse === "Monthly"){
            otherDrugUseMedMetric += 0.4;
        }
        return otherDrugUseMedMetric;
    }

    // 8
    movingAbility(movingAbilityResponse: string): number {
        let movingAbilityMetric = 0;

        if(movingAbilityResponse === "no"){
            movingAbilityMetric += 1;
        }
        return movingAbilityMetric;
    }

    // 9
    feedingAbility(feedingAbilityResponse: string): number {
        let feedingAbilityMetric = 0;

        if(feedingAbilityResponse === "no"){
            feedingAbilityMetric += 1;
        }
        return feedingAbilityMetric;
    }

    // 10
    takeCareAbility(takeCareAbilityResponse: string): number {
        let takeCareAbilityMetric = 0;

        if(takeCareAbilityResponse === "no"){
            takeCareAbilityMetric += 1;
        }
        return takeCareAbilityMetric;
    }

    // 11
    controlGenitalsFunction(controlGenitalsFunctionResponse: string): number {
        let controlGenitalsFunctionMetric = 0;

        if(controlGenitalsFunctionResponse === "no"){
            controlGenitalsFunctionMetric += 1;
        }
        return controlGenitalsFunctionMetric;
    }



    calcultePMS(patientData: PatientData): number {
    
        let pmsScore = 0;
        
        pmsScore += this.indigenous(patientData.indigenous);
        pmsScore += this.pain(patientData.mhq1);
        pmsScore += this.socialSupport(patientData.mhq2);
        pmsScore += this.familyIllness(patientData.mhq3);
        pmsScore += this.prescriptionMed(patientData.mhq4);
        pmsScore += this.mentalHealth(patientData.mhq5);
        pmsScore += this.otherDrugUse(patientData.mhq6);
        pmsScore += this.movingAbility(patientData.adl1);
        pmsScore += this.feedingAbility(patientData.adl2);
        pmsScore += this.takeCareAbility(patientData.adl3);
        pmsScore += this.controlGenitalsFunction(patientData.adl4);

        return pmsScore;
    }
}
interface IEmployee {
    id?: number;
    fullName: string;
    jobTitle: string;
    phoneNumber: string;
    emailId: string;
    address: string;
    city: string;
    state: string;
    primaryEmergencyContact?: {
        phoneNumber: string;
        relationship: string;
    };
    secondaryEmergencyContact?: {
        phoneNumber: string;
        relationship: string;
    };
    createdAt?: Date;
    updatedAt?: Date;
}

export default IEmployee;
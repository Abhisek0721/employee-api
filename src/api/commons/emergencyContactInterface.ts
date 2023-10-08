

interface IEmergenceContact {
  employeeId: number;
  name: string;
  phoneNumber: string;
  relationship: string;
  isPrimary: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export default IEmergenceContact;
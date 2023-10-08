import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from "../../config/sequalizerConfig";
import EmergencyContact from "./emergencyContactModel";
import IEmployee from "../commons/EmployeeInterface";

type IEmployeeInput = Optional<IEmployee, 'id'|'createdAt'>;

class Employee extends Model<IEmployee, IEmployeeInput> implements IEmployee {
  public id!: number;
  public fullName!: string;
  public jobTitle!: string;
  public phoneNumber!: string;
  public emailId!: string;
  public address!: string;
  public city!: string;
  public state!: string;
  public readonly createdAt!: Date;
  public updatedAt!: Date;
}

Employee.init(
  {
    id: { 
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    jobTitle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    emailId: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.TEXT,
      defaultValue: ""
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  },
  {
    sequelize,
    modelName: "Employee"
  }
);

// foreign key in EmergencyContact.id which references Employee.id
Employee.hasMany(EmergencyContact, { foreignKey: 'employeeId' });
// establishes many to one relationship
// EmergencyContact.belongsTo(Employee, { foreignKey: "id" });

export default Employee;

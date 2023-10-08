import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../../config/sequalizerConfig";
import Employee from "./employeeModel";
import IEmergenceContact from "../commons/emergencyContactInterface";

type IEmergencyContactInput = Optional<IEmergenceContact, "employeeId" | "createdAt">;

class EmergencyContact
  extends Model<IEmergenceContact, IEmergencyContactInput>
  implements IEmergenceContact
{
  public employeeId!: number;
  public name!: string;
  public phoneNumber!: string;
  public relationship!: string;
  public isPrimary!: boolean;
  public readonly createdAt!: Date;
  public updatedAt!: Date;
}

EmergencyContact.init(
  {
    employeeId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    relationship: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isPrimary: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "EmergencyContact",
  }
);

export default EmergencyContact;

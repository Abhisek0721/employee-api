import { Request, Response } from "express";
import Employee from "../models/employeeModel";
import EmergencyContact from "../models/emergencyContactModel";
import IEmployee from "../commons/EmployeeInterface";

class EmployeeController {
  //API : /api/employees/createEmployee
  //Method : POST
  //Access : Public
  //Description : create new employee
  public createEmployee = async (req: Request, res: Response) => {
    try {
      const {
        fullName,
        jobTitle,
        phoneNumber,
        emailId,
        address,
        city,
        state,
        primaryEmergencyContact,
        secondaryEmergencyContact,
      }: IEmployee = req.body;

      if (
        !fullName ||
        !jobTitle ||
        !phoneNumber ||
        !emailId ||
        !address ||
        !city ||
        !state ||
        !primaryEmergencyContact ||
        !secondaryEmergencyContact
      ) {
        return res.status(400).json({
          status: false,
          message: "Some fields are missing in payload!",
        });
      }

      const employee = await Employee.create({
        fullName: fullName,
        jobTitle: jobTitle,
        phoneNumber: phoneNumber,
        emailId: emailId,
        address: address,
        city: city,
        state: state,
      });

      await EmergencyContact.create({
        name: employee.fullName,
        phoneNumber: primaryEmergencyContact.phoneNumber,
        relationship: primaryEmergencyContact.relationship,
        isPrimary: true,
        employeeId: employee.id,
      });

      await EmergencyContact.create({
        name: employee.fullName,
        phoneNumber: secondaryEmergencyContact.phoneNumber,
        relationship: secondaryEmergencyContact.relationship,
        isPrimary: false,
        employeeId: employee.id,
      });

      return res.status(200).json({
        status: true,
        message: "New employee has been created",
      });
    } catch (error) {
      return res.status(500).json({
        status: false,
        message: "Technical Server Error!",
        error: error?.stack,
      });
    }
  };

  //API : /api/employees/getEmployeeList?page={pageNo}&limit={limit}
  //Method : GET
  //Access : Public
  //Description : fetch employee list at once
  getEmployeeList = async (req: Request, res: Response) => {
    try {
      const pageNumber = Number(req.query?.page) || 1;
      const limit = Number(req.query?.limit) || 20;

      const employeesList = await Employee.findAll({
        limit: limit,
        offset: limit * (pageNumber - 1),
        order: [["createdAt", "DESC"]],
        include: [
          {
            model: EmergencyContact,
            attributes: { exclude: ["name", "employeeId"] },
          },
        ],
      });

      return res.status(200).json({
        status: true,
        data: employeesList,
      });
    } catch (error) {
      return res.status(500).json({
        status: false,
        message: "Technical Server Error!",
        error: error?.stack,
      });
    }
  };

  //API : /api/employees/updateEmployee/:employeeId
  //Method : PUT
  //Access : Public
  //Description : update data of an employee
  updateEmployee = async (req: Request, res: Response) => {
    try {
      const employeeId: number = Number(req.params.employeeId);
      const {
        fullName,
        jobTitle,
        phoneNumber,
        emailId,
        address,
        city,
        state,
        primaryEmergencyContact,
        secondaryEmergencyContact,
      }: IEmployee = req.body;

      await Employee.update(
        {
          fullName: fullName,
          jobTitle: jobTitle,
          phoneNumber: phoneNumber,
          emailId: emailId,
          address: address,
          city: city,
          state: state,
          updatedAt: new Date(),
        },
        {
          where: {
            id: employeeId,
          },
        }
      );

      await EmergencyContact.update(
        {
          phoneNumber: primaryEmergencyContact.phoneNumber,
          relationship: primaryEmergencyContact.relationship,
          updatedAt: new Date(),
          name: fullName,
        },
        {
          where: {
            employeeId: employeeId,
            isPrimary: true,
          },
        }
      );

      await EmergencyContact.update(
        {
          phoneNumber: secondaryEmergencyContact.phoneNumber,
          relationship: secondaryEmergencyContact.relationship,
          updatedAt: new Date(),
          name: fullName,
        },
        {
          where: {
            employeeId: employeeId,
            isPrimary: false,
          },
        }
      );

      return res.status(200).json({
        status: true,
        message: "Employee data has been updated!",
      });
    } catch (error) {
      return res.status(500).json({
        status: false,
        message: "Technical Server Error!",
        error: error?.stack,
      });
    }
  };

  //API : /api/employees/deleteEmployee/:employeeId
  //Method : DELETE
  //Access : Public
  //Description : delete employee data by its id
  deleteEmployee = async (req: Request, res: Response) => {
    const employeeId = Number(req.params.employeeId);
    try {
      await Employee.destroy({
        where: {
          id: employeeId,
        },
      });

      return res.status(200).json({
        status: true,
        message: "Employee data has been delete!",
      });
    } catch (error) {
      return res.status(500).json({
        status: false,
        message: "Technical Server Error!",
        error: error?.stack,
      });
    }
  };

  //API : /api/employees/getEmployee/:employeeId
  //Method : GET
  //Access : Public
  //Description : fetch employee data by its id
  getEmployee = async (req: Request, res: Response) => {
    const employeeId = Number(req.params.employeeId);
    try {
      const getEmployee = await Employee.findOne({
        order: [["createdAt", "DESC"]],
        include: [
          {
            model: EmergencyContact,
            attributes: { exclude: ["name", "employeeId"] },
          },
        ],
        where: {
            id: employeeId
        }
      });

      return res.status(200).json({
        status: true,
        data: getEmployee,
      });
    } catch (error) {
      return res.status(500).json({
        status: false,
        message: "Technical Server Error!",
        error: error?.stack,
      });
    }
  };
}

export default new EmployeeController();

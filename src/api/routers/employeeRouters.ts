import express from "express";
import EmployeeController from "../controllers/EmployeeController";
const router = express.Router();

router.route("/createEmployee").post(EmployeeController.createEmployee);

router.route("/getEmployeeList").get(EmployeeController.getEmployeeList);

router
  .route("/updateEmployee/:employeeId")
  .put(EmployeeController.updateEmployee);

router
  .route("/deleteEmployee/:employeeId")
  .delete(EmployeeController.deleteEmployee);

router.route("/getEmployee/:employeeId").get(EmployeeController.getEmployee);

export default router;

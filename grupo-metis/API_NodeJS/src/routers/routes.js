const express = require("express");
const routes = express.Router();

//Controllers
const UserController = require("../controllers/UserController");
const AdressController = require("../controllers/AdressController");
const ClassController = require("../controllers/ClassController");
const DisciplineController = require("../controllers/DisciplineController");
const TeacherController = require("../controllers/TeacherController");
const AdministratorController = require("../controllers/AdministratorController");
const StudentController = require("../controllers/StudentController");
const ResponsibleController = require("../controllers/ResponsibleController");
const FrequencyController = require("../controllers/FrequencyController");
const EnrollmentController = require("../controllers/EnrollmentController");
const DisciplineClassController = require("../controllers/DisciplineClassController");
const DisciplineTeacherController = require("../controllers/DisciplineTeacherController");
const AttendanceController = require("../controllers/AttendanceController");
const StudentResponsibleController = require("../controllers/StudentResponsibleController");
const StudentCardController = require("../controllers/StudentCardController");
const ScheduleController = require("../controllers/ScheduleController");

//QRCode
const QRGenerator = require("../functions/QRCodeGenerator");


//Route QRCode Generator
routes.get('/qrCode/:id', QRGenerator.createQR);

//Route User
routes.post('/user', UserController.create);
routes.get('/user/:id', UserController.readOne);
routes.get('/users', UserController.readAll);
routes.delete('/users/:delete', UserController.delete);

//Route Adress
routes.post('/adress', AdressController.create);
routes.get('/adress/:id', AdressController.readOne);
routes.get('/adresses', AdressController.readAll);
routes.delete('/adress/:delete', AdressController.delete);

// Route Class
routes.post('/class', ClassController.create);
routes.get('/class/:id', ClassController.readOne);
routes.get('/classes', ClassController.readAll);
routes.delete('/class/:delete', ClassController.delete);


// Route Administrator
routes.post('/administrator', AdministratorController.create);
routes.get('/administrator/:id', AdministratorController.readOne);
routes.get('/administrators', AdministratorController.readAll);
routes.delete('/administrator/:delete', AdministratorController.delete);

// Route Teacher
routes.post('/teacher', TeacherController.create);
routes.get('/teacher/:id', TeacherController.readOne);
routes.get('/teachers', TeacherController.readAll);
routes.delete('/teacher/:delete', TeacherController.delete);

// Route Discipline
routes.post('/discipline', DisciplineController.create);
routes.get('/discipline/:id', DisciplineController.readOne);
routes.get('/disciplines', DisciplineController.readAll);
routes.delete('/discipline/:delete', DisciplineController.delete);

//Routes Responsible
routes.post('/responsible', ResponsibleController.create);
routes.get('/responsible/:id', ResponsibleController.readOne);
routes.get('/responsibles', ResponsibleController.readAll);
routes.delete('/responsible/:delete', ResponsibleController.delete);

//Routes Student
routes.post('/student', StudentController.create);
routes.get('/student/:id', StudentController.readOne);
routes.get('/students', StudentController.readAll);
routes.delete('/student/:delete', StudentController.delete);

//Routes Frequency
routes.post('/frequency', FrequencyController.create);
routes.get('/frequency/:id', FrequencyController.readOne);
routes.get('/frequencies', FrequencyController.readAll);
routes.delete('/frequency/:delete', FrequencyController.delete);

//Routes Enrollment
routes.post('/enrollment', EnrollmentController.create);
routes.get('/enrollment/:id', EnrollmentController.readOne);
routes.get('/enrollments', EnrollmentController.readAll);
routes.delete('/enrollment/:delete', EnrollmentController.delete);

//Routes DisciplineCLass
routes.post('/disciplineClass', DisciplineClassController.create);
routes.get('/disciplineClass/:id', DisciplineClassController.readOne);
routes.get('/disciplineClasses', DisciplineClassController.readAll);
routes.delete('/disciplineClass/:delete', DisciplineClassController.delete);

//Routes DisciplineTeacher
routes.post('/disciplineTeacher', DisciplineTeacherController.create);
routes.get('/disciplineTeacher/:id', DisciplineTeacherController.readOne);
routes.get('/disciplineTeachers', DisciplineTeacherController.readAll);
routes.delete('/disciplineTeacher/:delete', DisciplineTeacherController.delete);

//Routes StudentResponsible
routes.post('/studentResponsible', StudentResponsibleController.create);
routes.get('/studentResponsible/:id', StudentResponsibleController.readOne);
routes.get('/studentResponsibles', StudentResponsibleController.readAll);
routes.delete('/studentResponsible/:delete', StudentResponsibleController.delete);

//Routes StudentCard
routes.post('/studentCard', StudentCardController.create);
routes.get('/studentCard/:id', StudentCardController.readOne);
routes.get('/studentCards', StudentCardController.readAll);
routes.delete('/studentCard/:delete', StudentCardController.delete);

//Routes Schedule
routes.post('/schedule', ScheduleController.create);
routes.get('/schedule/:id', ScheduleController.readOne);
routes.get('/schedules', ScheduleController.readAll);
routes.delete('/schedule/:delete', ScheduleController.delete);

//Routes Attendance
routes.post('/attendance', AttendanceController.create);
routes.get('/attendance/:id', AttendanceController.readOne);
routes.get('/attendances', AttendanceController.readAll);
routes.delete('/attendance/:delete', AttendanceController.delete);

module.exports = routes;
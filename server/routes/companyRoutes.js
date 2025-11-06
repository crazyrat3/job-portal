import express from 'express'
import { ChangeJobApplicationStatus, changeVisibility, getCompanyData, getCompanyJobApplicants, getCompanyPostedJobs, loginCompany, postJob, registerCompany } from '../controllers/companyController.js'
import upload from '../config/multer.js'
import { protectCompany } from '../middlewares/authMiddleware.js'

const router =express.Router()

//Register a company

router.post('/register',upload.single('image'),registerCompany)


//Company login
router.post('/login',loginCompany)

//Get company Data
router.get('/company',protectCompany,getCompanyData)

//Post a job

router.post('/post-job',protectCompany,postJob)

//Get Applicants Data of Company

router.get('/applicants',protectCompany,getCompanyJobApplicants)

//get Company job list 
router.get('/list-jobs',protectCompany,getCompanyPostedJobs)

//change applications status
router.post('/change-status',protectCompany,ChangeJobApplicationStatus)

//Change Application Visibility
router.post('/change-visibility',protectCompany,changeVisibility)

export default router 
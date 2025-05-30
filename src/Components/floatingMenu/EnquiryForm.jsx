import React, { useState } from 'react'
import Select from 'react-select'
import { Input, Label, Modal, ModalBody, ModalHeader } from 'reactstrap'
import './floating.css'
import toast from 'react-hot-toast'
import sendEmail from '../mail/sendMail'

export const categoryOptions=[
    {label:"Test Preparation",value:"test_preparation"},
    {label:"Study Abroad",value:"study_abroad"},
    {label:"Language",value:"language"},
  ]

  export const testPreparationOptions =[
    {label:"IELTS",value:"IELTS"},
    {label:"PTE",value:"PTE"},
    {label:"DELF",value:"DELF"},
    {label:"Duolingo",value:"Duolingo"},
]

export const languageOption = [
    {label:"English",value:"English"},
    {label:"French",value:"French"},
    {label:"Hindi",value:"Hindi"},
]
  
export const countryOptions=[
    {label:"UK",value:"UK"},
    {label:"USA",value:"USA"},
    {label:"Canada",value:"Canada"},
    {label:"Germany",value:"Germany"},
    {label:"Ireland",value:"Ireland"},
    {label:"Australia",value:"Australia"},
    {label:"France",value:"France"},
  ]

  export const degreeOption=[
    {label:"Bachelor's Degree",value:"Bachelor's Degree"},
    {label:"Master's Degree",value:"Master's Degree"},
    {label:"Doctorate Degree",value:"Doctorate Degree"}
  ]

  export const branchOption=[
    {label:"MBA",value:"MBA"},
    {label:"Computer Science",value:"Computer Science"},
    {label:"Biotechnology",value:"Biotechnology"},
    {label:"Logistics and Supply Chain",value:"Logistics and Supply Chain"},
    {label:"Mechanical Engineering",value:"Mechanical Engineering"},
    {label:"Automotive Engineering",value:"Automotive Engineering"},
    {label:"Civil and Construction",value:"Civil and Construction"},
    {label:"Finance and Accounts",value:"Finance and Accounts"},
    {label:"Arts",value:"Arts"},
    {label:"Economics",value:"Economics"},
    {label:"Political Science",value:"Political Science"},
    {label:"Healthcare",value:"Healthcare"},
    {label:"Pyschology",value:"Pyschology"},
    {label:"Electrical Engineering",value:"Electrical Engineering"},
    {label:"Instrumentation",value:"Instrumentation"},
    {label:"Law",value:"Law"},
    {label:"Others",value:"Others"},
  ]
  
  export const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused ? '#8f1409' : 'white', // Change hover color
      color: state.isFocused ? 'white' : '#8f1409', // Change text color on hover
      padding: 10,
      fontFamily:"Metropolis-Medium",
    }),
    control: (provided,state) => ({
      ...provided,
      margin: '10px 0',
      borderColor:'#8f1409'
    }),
    menu: (provided) => ({
      ...provided,
      zIndex: 9999,
    }),
  };

function EnquiryForm({isEnquiry,setIsEnquiry}) {
    // const [isEnquiry, setIsEnquiry] = useState(false);
    const [branchOptions,setBranchOptions]=useState(branchOption)
    const [enquiryData,setEnquiryData]= useState({
      country:"",
      degree:"",
      branch:"",
      name:"",
      email:"",
      mobile:"",
      location:""
    })
  

    const handleDegree=(e)=>{
      console.log(e)
      if(e.value==="Bachelor's Degree"){
        setEnquiryData({...enquiryData,degree:e.value})
        let filterResult =branchOptions.filter((op)=>op.value!=='MBA')
        setBranchOptions([...filterResult])
      }else{
        setEnquiryData({...enquiryData,degree:e.value})
        setBranchOptions([...branchOption])
      }
    }

    const validateEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    };
  
    const validateMobile = (number) => {
      const pattern = /^[6789]\d{9}$/;
      return pattern.test(number);
    };

    const handleSubmit=()=>{
      if(enquiryData.country===""){
        return toast.error("Country Required")
      }
      if(enquiryData.degree===""){
        return toast.error("Select Degree Field")
      }
      if(enquiryData.branch===""){
        return toast.error("Select Branch Field")
      }
      if(enquiryData.name===""){
        return toast.error("Name required")
      }
      if(enquiryData.email===""){
        return toast.error("Email required")
      }
      if(!validateEmail(enquiryData.email)){
        return toast.error("Please Enter valid Email")
      }
      if(!validateMobile(enquiryData.mobile)){
        return toast.error("Please Enter valid Mobile Number")
      }
      if(enquiryData.mobile===""){
        return toast.error("Mobile required")
      }
      if(enquiryData.location===""){
        return toast.error("Location required")
      }
      sendEmail(enquiryData)
      setIsEnquiry(!isEnquiry)
      toast.success("Thank you for reaching out! We'll be in touch shortly.")
      setEnquiryData({
        country:"",
        degree:"",
        branch:"",
        name:"",
        email:"",
        mobile:"",
        location:""
      })
    }
  return (
    <Modal
    isOpen={isEnquiry}
    toggle={() => setIsEnquiry(!isEnquiry)}
    className="modal-content-des"
    centered
    size='md'
    zIndex={'999999'}
  >
    <ModalHeader toggle={() => setIsEnquiry(!isEnquiry)}>
      Enquiry Form
    </ModalHeader>
    <ModalBody>
      <div className="container form-font">
        <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <Label for="category" className="fm-lb">Country</Label>
            <Select
              id="category"
              name="name"
              placeholder="Choose Country"
              options={countryOptions}
              styles={customStyles}
              onChange={(e)=>setEnquiryData({...enquiryData,country:e.value})}
            />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <Label for="country" className="fm-lb">Academic Degree</Label>
            <Select
              id="country"
              name="name"
              placeholder="Choose Degree"
              options={degreeOption}
              styles={customStyles}
              onChange={(e)=>handleDegree(e)}
            />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <Label for="country" className="fm-lb">Branch</Label>
            <Select
              id="country"
              name="name"
              placeholder="Choose Branch"
              options={enquiryData.degree?branchOptions:[]}
              styles={customStyles}
              onChange={(e)=>setEnquiryData({...enquiryData,branch:e.value})}
            />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 my-2">
            <Label for="name" className="fm-lb">Name</Label>
            <Input
              id="name"
              name="name"
              placeholder="Enter Name"
              type="text"
              onChange={(e)=>setEnquiryData({...enquiryData,name:e.target.value})}
              valid={enquiryData.name.length>3}
            />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12  my-2">
            <Label for="email" className="fm-lb">Email</Label>
            <Input
              id="email"
              name="email"
              placeholder="Enter Email"
              type="email"
              onChange={(e)=>setEnquiryData({...enquiryData,email:e.target.value})}
              valid={enquiryData.email.length>0 && validateEmail(enquiryData.email) }
            />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 my-2">
            <Label for="mobile" className="fm-lb">Mobile</Label>
            <Input
              id="mobile"
              name="mobile"
              placeholder="Enter Mobile"
              type="phone"
              onChange={(e)=>setEnquiryData({...enquiryData,mobile:e.target.value})}
              valid={enquiryData.mobile.length<=10 && validateMobile(enquiryData.mobile) }
            />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 my-2">
            <Label for="name" className="fm-lb">Location</Label>
            <Input
              id="location"
              name="location"
              placeholder="Enter Location"
              type="text"
              onChange={(e)=>setEnquiryData({...enquiryData,location:e.target.value})}
              valid={enquiryData.location.length>0}
            />
          </div>
        </div>
        <div className="text-center">
            <button className='submit-btn' onClick={()=>handleSubmit()}>Submit</button>
        </div>
      </div>
    </ModalBody>
  </Modal>
  )
}

export default EnquiryForm
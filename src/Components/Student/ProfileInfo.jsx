// ProfileInfo.js
import React, { useEffect, useState } from 'react';
import Select from 'react-select'
import { format } from 'date-fns';
import './profile.css'
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css';
import {
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Row,
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    Button,
} from 'reactstrap';
import classnames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../redux/features/profileSlice';
import request from '../../api/api';
import toast from 'react-hot-toast';


export const countryOptions = [
    { label: "India", value: "India" },
    { label: "UK", value: "UK" },
    { label: "USA", value: "USA" },
    { label: "Canada", value: "Canada" },
    { label: "Germany", value: "Germany" },
    { label: "Ireland", value: "Ireland" },
    { label: "Australia", value: "Australia" },
    { label: "France", value: "France" },

]

export const qualificationOption = [
    { label: "Undergraduate", value: "Undergraduate" },
    { label: "Postgraduate", value: "Postgraduate" },
    { label: "Diploma", value: "Diploma" },
    { label: "Doctorate", value: "Doctorate" },
]

export const englishTestOption = [
    { label: "TOEFL", value: "TOEFL" },
    { label: "IELTS", value: "IELTS" },
    { label: "PTE Academic", value: "PTE Academic" },
]

export const boardOfEducationOption = [
    { label: "CBSE", value: "CBSE" },
    { label: "State Board", value: "State Board" },
    { label: "ISC", value: "ISC" },
]

export const schoolMediumOption = [
    { label: "Tamil", value: "Tamil" },
    { label: "English", value: "English" },
    { label: "Hindi", value: "Hindi" },
]


const gradeOption = [
    {
        label: "CGPA 4", value: 'CGPA 4'
    },
    {
        label: "CGPA 5", value: 'CGPA 5'
    },
    {
        label: "CGPA 7", value: 'CGPA 7'
    },
    {
        label: "CGPA 10", value: 'CGPA 10'
    },
    {
        label: 'Percentage(1-100', value: 'Percentage(1-100'
    }
]

const currentYear = new Date().getFullYear();
const yearOptions = Array.from({ length: 4 }, (_, i) => {
    const year = currentYear + i;
    return { value: year.toString(), label: year.toString() };
});

const ProfileInfo = () => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.profile.user)
    const [isQualification, setIsQualification] = useState(false)
    const [isEnglishTest, setIsEnglishTest] = useState(false)
    const [is12th, setIs12th] = useState(false)
    const [userProfile, setUserProfile] = useState({
        fullName: user?.fullName ?? '',
        country: user?.country ?? '',
        city: user?.city ?? '',
        nationality: user?.nationality ?? '',
        mobile: user?.mobile ?? '',
        dob: user?.dob ?? ''
    })
    const [qualification, setQualification] = useState({
        degree: user?.qualification?.degree ?? '',
        country: user?.qualification?.country ?? '',
        university: user?.qualification?.university ?? '',
        cgpa_level: user?.qualification?.cgpa_level ?? '',
        score: user?.qualification?.score ?? ''
    })
    const [school12th, setSchool12th] = useState({
        school: user?.school12th?.school ?? '',
        boardOfEducation: user?.school12th?.boardOfEducation ?? '',
        mediumOfInstruction: user?.school12th?.mediumOfInstruction ?? '',
        yearsOfPassing: user?.school12th?.yearsOfPassing ?? '',
        subjectStudied: user?.school12th?.subjectStudied ?? '',
        totalMarks: user?.school12th?.totalMarks ?? '',
        marksObtained: user?.school12th?.marksObtained ?? '',
        percentage: user?.school12th?.percentage ?? ''
    })

    const [englishTest, setEnglishTest] = useState({
        test: user?.englishTest?.test ?? '',
        overallScore: user?.englishTest?.overallScore ?? '',
        reading: user?.englishTest?.reading ?? '',
        listening: user?.englishTest?.listening ?? '',
        speaking: user?.englishTest?.speaking ?? '',
        writing: user?.englishTest?.writing ?? ''
    })

    const [preferred, setPreferred] = useState({
        destination: user?.preferred?.destination ?? '',
        degree: user?.preferred?.degree ?? '',
        start_year: user?.preferred?.start_year ?? '',
        month: user?.preferred?.month ?? ''
    })
    const [activeTab, setActiveTab] = useState('1');

    const toggle = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    const handleChange = (name, e) => {
        setUserProfile({ ...userProfile, [name]: e })
    }

    const handleQualificationChange = (name, e) => {
        setQualification({ ...qualification, [name]: e })
    }

    const handleEnglishTestChange = (name, e) => {
        setEnglishTest({ ...englishTest, [name]: e })
    }

    const handleSchool12thChange = (name, e) => {
        setSchool12th({ ...school12th, [name]: e })
    }

    const handlePreferredChange = (name, e) => {
        setPreferred({ ...preferred, [name]: e })
    }

    useEffect(() => {
        dispatch(fetchUser())

    }, [])


    const updateUser = () => {
        const { fullName, country, dob, city, nationality, mobile } = userProfile

        if (fullName === '') {
            return toast.error("Full Name required")
        }
        if (country === '') {
            return toast.error("Country required")
        }
        if (city === '') {
            return toast.error("City required")
        }
        if (nationality === '') {
            return toast.error("Nationality required")
        }
        if (mobile === '') {
            return toast.error("Mobile required")
        }
        if (dob === '') {
            return toast.error("DOB required")
        }
        toast.loading("Saving..." ,{duration:Infinity})
        request({
            url: '/update/user',
            method: 'POST',
            data: { ...userProfile, userId: user._id }
        }).then((res) => {
            toast.remove()
            if (res.status === 1) {
                dispatch(fetchUser())
                toast.success("Data Saved Successfully")
            }
            if (res.status === 0) {
                toast.error(res.message)
            }
        })
    }

    const updateUserQualification = () => {
        const { degree, country, university, cgpa_level, score } = qualification

        if (degree === '') {
            return toast.error("Degree required")
        }
        if (country === '') {
            return toast.error("Country required")
        }
        if (university === '') {
            return toast.error("University required")
        }
        if (cgpa_level === '') {
            return toast.error("CGPPA level required")
        }
        if (score === '') {
            return toast.error("Score required")
        }
toast.loading("Saving..." ,{duration:Infinity})
        request({
            url: '/update/user/qualification',
            method: 'POST',
            data: { ...qualification, userId: user._id }
        }).then((res) => {
             toast.remove()
            if (res.status === 1) {
                dispatch(fetchUser())
                 toast.success("Data Saved Successfully")
            }
            if (res.status === 0) {
                toast.error(res.message)
            }
        })
    }

    const updateEnglishTest = () => {
        const { test, overallScore, listening, speaking, writing, reading } = englishTest

        if (test === '') {
            return toast.error("Test required")
        }
        if (overallScore === '') {
            return toast.error("Over All Score required")
        }
        if (listening === '') {
            return toast.error("Listening score required")
        }
        if (speaking === '') {
            return toast.error("Speaking score required")
        }
        if (writing === '') {
            return toast.error("Writing Score required")
        }
        if (reading === '') {
            return toast.error("Reading Score required")
        }
        toast.loading("Saving..." ,{duration:Infinity})
        request({
            url: '/update/user/english/test',
            method: 'POST',
            data: { ...englishTest, userId: user._id }
        }).then((res) => {
            toast.remove()
            if (res.status === 1) {
                dispatch(fetchUser())
                toast.success("Data Saved Successfully")
            }
            if (res.status === 0) {
                toast.error(res.message)
            }
        })
    }

    const updateSchool12th = () => {
        const { school,
            boardOfEducation,
            mediumOfInstruction,
            yearsOfPassing,
            subjectStudied,
            totalMarks,
            marksObtained,
            percentage } = school12th

        if (school === '') {
            return toast.error("school required")
        }
        if (boardOfEducation === '') {
            return toast.error("Board Of Education required")
        }
        if (mediumOfInstruction === '') {
            return toast.error("medium Of Instruction required")
        }
        if (yearsOfPassing === '') {
            return toast.error("Years of Passing required")
        }
        if (subjectStudied === '') {
            return toast.error("Subject Studied required")
        }
        if (totalMarks === '') {
            return toast.error("Total Marks required")
        }
        if (marksObtained === '') {
            return toast.error("Marks Obtained required")
        }
        if (percentage === '') {
            return toast.error("Percentage required")
        }
        toast.loading("Saving..." ,{duration:Infinity})
        request({
            url: '/update/user/12th/details',
            method: 'POST',
            data: { ...school12th, userId: user._id }
        }).then((res) => {
            toast.remove()
            if (res.status === 1) {
                dispatch(fetchUser())
                toast.success("Data Saved Successfully")
            }
            if (res.status === 0) {
                toast.error(res.message)
            }
        })
    }


    const updatePreferred = () => {
        const { destination, degree, start_year, month } = preferred

        if (destination === '') {
            return toast.error("Destination required")
        }
        if (degree === '') {
            return toast.error("Degree required")
        }
        if (start_year === '') {
            return toast.error("Start Year required")
        }
        // if (month === '') {
        //     return toast.error("Month required")
        // }
        toast.loading("Saving..." ,{duration:Infinity})
        request({
            url: '/update/user/preferred',
            method: 'POST',
            data: { ...preferred, userId: user._id }
        }).then((res) => {
            toast.remove()
            if (res.status === 1) {
                dispatch(fetchUser())
                toast.success("Data Saved Successfully")
            }
            if (res.status === 0) {
                toast.error(res.message)
            }
        })
    }



    return (
        <div className="container p-4 rounded shadow-sm w-100 profile-bg">
            <h5 className="mb-4">Profile</h5>

            {/* Tabs */}
            <Nav tabs className='profile-info'>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => toggle('1')}
                        style={{ cursor: 'pointer' }}
                    >
                        Basic Info
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => toggle('2')}
                        style={{ cursor: 'pointer' }}
                    >
                        Qualifications
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '3' })}
                        onClick={() => toggle('3')}
                        style={{ cursor: 'pointer' }}
                    >
                        Preferences
                    </NavLink>
                </NavItem>
            </Nav>

            {/* Tab Contents */}
            <TabContent activeTab={activeTab} className="pt-4">
                {/* Basic Info */}
                <TabPane tabId="1">
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="fullName">Full Name</Label>
                                <Input id="fullName" placeholder="Enter Full Name" value={userProfile?.fullName} onChange={(e) => handleChange('fullname', e.target.value)} />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="country">Country</Label>
                                <Select options={countryOptions} value={countryOptions?.filter((e) => e.value === userProfile.country)} onChange={(e) => handleChange('country', e.value)} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="city">City</Label>
                                <Input id="city" type="text" placeholder="Chennai" value={userProfile?.city} onChange={(e) => handleChange('city', e.target.value)} />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="nationality">Nationality</Label>
                                <Input id="nationality" type="text" placeholder="" value={userProfile?.nationality} onChange={(e) => handleChange('nationality', e.target.value)} />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="phone">Phone</Label>
                                <Input id="phone" type="text" placeholder="+91 98765 43210" value={userProfile?.mobile} onChange={(e) => handleChange('mobile', e.target.value)} />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="dob">Date of Birth</Label>
                                <Input id="dob" type="date" value={userProfile?.dob ? format(new Date(userProfile.dob), 'yyyy-MM-dd') : ''} onChange={(e) => setUserProfile({ ...userProfile, dob: e.target.value })} />
                            </FormGroup>
                        </Col>
                    </Row>

                    <div className="d-flex justify-content-end gap-3 mt-4 text-end">
                        <Button className='discard-btn'>Discard</Button>
                        <Button className='save-btn' onClick={() => updateUser()}>Save</Button>
                    </div>
                </TabPane>

                {/* Qualifications */}
                <TabPane tabId="2">
                    <div className='container'>
                        <div>
                            <h6>Academic Qualification</h6>
                        </div>
                        <div className='w-25'>
                            <button className='deg-btn' onClick={() => setIsQualification(!isQualification)}>{user?.qualification ? 'Edit Qualification' : "Add Qualification"}</button>
                        </div>
                        {
                            user?.qualification && isQualification ? 
                            <div className='my-3'>
                                <Row>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="fullName">Academic Qualification</Label>
                                            <Select options={qualificationOption} value={qualificationOption?.filter((op) => op.value === qualification.degree)} onChange={(e) => handleQualificationChange('degree', e.value)} />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="country">Country</Label>
                                            <Select options={countryOptions} value={countryOptions?.filter((e) => e.value === userProfile.country)} onChange={(e) => handleQualificationChange('country', e.value)} />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="University1">University</Label>
                                            <Input id="University1" type="text" value={qualification.university} placeholder="University" onChange={(e) => handleQualificationChange('university', e.target.value)} />
                                        </FormGroup>
                                    </Col>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label for="GradeScheme">Grade Scheme</Label>
                                            <Select options={gradeOption} value={gradeOption.filter((op) => op.value === qualification.cgpa_level)} onChange={(e) => handleQualificationChange('cgpa_level', e.value)} />
                                        </FormGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <FormGroup>
                                            <Label >Score(1-100)</Label>
                                            <Input type="text" value={qualification.score} placeholder="Score(1-100)" onChange={(e) => handleQualificationChange('score', e.target.value)} />
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <div className="d-flex gap-3 mt-4">
                                    <Button className='discard-btn' onClick={() => setIsQualification(false)}>Discard</Button>
                                    <Button className='save-btn' onClick={() => updateUserQualification()}>Save</Button>
                                </div>
                            </div> :
                                isQualification ? 
                                <div className='my-3'>
                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="fullName">Academic Qualification</Label>
                                                <Select options={qualificationOption} value={qualificationOption?.filter((op) => op.value === qualification.degree)} onChange={(e) => handleQualificationChange('degree', e.value)} />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="country">Country</Label>
                                                <Select options={countryOptions} value={countryOptions?.filter((e) => e.value === userProfile.country)} onChange={(e) => handleQualificationChange('country', e.value)} />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="University1">University</Label>
                                                <Input id="University1" type="text" value={qualification.university} placeholder="University" onChange={(e) => handleQualificationChange('university', e.target.value)} />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="GradeScheme">Grade Scheme</Label>
                                                <Select options={gradeOption} value={gradeOption.filter((op) => op.value === qualification.cgpa_level)} onChange={(e) => handleQualificationChange('cgpa_level', e.value)} />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label >Score(1-100)</Label>
                                                <Input type="text" value={qualification.score} placeholder="Score(1-100)" onChange={(e) => handleQualificationChange('score', e.target.value)} />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                     <div className="d-flex gap-3 mt-4">
                                    <Button className='discard-btn' onClick={() => setIsQualification(false)}>Discard</Button>
                                    <Button className='save-btn' onClick={() => updateUserQualification()}>Save</Button>
                                </div>
                                </div> : ''
                        }

                        <div>
                            <h6>12th Details</h6>
                        </div>
                        <div className='w-25'>
                            <button className='deg-btn' onClick={() => setIs12th(!is12th)}>{user?.school12th ? 'Edit 12th' : "Add 12th"}</button>
                        </div>
                        {
                            user?.school12th && is12th ?
                                <div className='my-3'>
                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="fullName">Name of School</Label>
                                                <Input type='text' value={school12th?.school} onChange={(e) => handleSchool12thChange('school', e.target.value)} />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label >Board of Education</Label>
                                                <Select options={boardOfEducationOption} value={boardOfEducationOption?.filter((op) => op.value === school12th.boardOfEducation)} onChange={(e) => handleSchool12thChange('boardOfEducation', e.value)} />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="">Medium of Instruction</Label>
                                                <Select options={schoolMediumOption} value={schoolMediumOption?.filter((op) => op.value === school12th.mediumOfInstruction)} onChange={(e) => handleSchool12thChange('mediumOfInstruction', e.value)} />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="">Year of Passing</Label>
                                                <div>
                                                    <DatePicker
                                                        selected={school12th.yearsOfPassing ? new Date(school12th.yearsOfPassing, 0) : null}
                                                        onChange={(date) =>
                                                            handleSchool12thChange('yearsOfPassing', date.getFullYear())
                                                        }
                                                        showYearPicker
                                                        dateFormat="yyyy"
                                                        placeholderText="Select year"
                                                    />
                                                </div>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label >Subject Studied</Label>
                                                <Input type="text" value={school12th.subjectStudied} placeholder="" onChange={(e) => handleSchool12thChange('subjectStudied', e.target.value)} />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label >Total Marks</Label>
                                                <Input type="text" value={school12th.totalMarks} placeholder="=" onChange={(e) => handleSchool12thChange('totalMarks', e.target.value)} />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label >Mark Obtained</Label>
                                                <Input type="text" value={school12th.marksObtained} placeholder="" onChange={(e) => handleSchool12thChange('marksObtained', e.target.value)} />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label >CGPA/Percentage</Label>
                                                <Input type="text" value={school12th.percentage} placeholder="=" onChange={(e) => handleSchool12thChange('percentage', e.target.value)} />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <div className="d-flex gap-3 mt-4">
                                        <Button className='discard-btn' color="" onClick={() => setIs12th(false)}>Discard</Button>
                                        <Button className='save-btn' color="" onClick={() => updateSchool12th()}>Save</Button>
                                    </div>
                                </div> :
                                is12th ? <div className='my-3'>
                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="fullName">Name of School</Label>
                                                <Input type='text' value={school12th?.school} onChange={(e) => handleSchool12thChange('school', e.target.value)} />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label >Board of Education</Label>
                                                <Select options={boardOfEducationOption} value={boardOfEducationOption?.filter((op) => op.value === school12th.boardOfEducation)} onChange={(e) => handleSchool12thChange('boardOfEducation', e.value)} />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="">Medium of Instruction</Label>
                                                <Select options={schoolMediumOption} value={schoolMediumOption?.filter((op) => op.value === school12th.mediumOfInstruction)} onChange={(e) => handleSchool12thChange('mediumOfInstruction', e.value)} />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="">Year of Passing</Label>
                                                <div>
                                                    <DatePicker
                                                        selected={school12th.yearsOfPassing ? new Date(school12th.yearsOfPassing, 0) : null}
                                                        onChange={(date) =>
                                                            handleSchool12thChange('yearsOfPassing', date.getFullYear())
                                                        }
                                                        showYearPicker
                                                        dateFormat="yyyy"
                                                        placeholderText="Select year"
                                                    />
                                                </div>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label >Subject Studied</Label>
                                                <Input type="text" value={school12th.subjectStudied} placeholder="" onChange={(e) => handleSchool12thChange('subjectStudied', e.target.value)} />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label >Total Marks</Label>
                                                <Input type="text" value={school12th.totalMarks} placeholder="=" onChange={(e) => handleSchool12thChange('totalMarks', e.target.value)} />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label >Mark Obtained</Label>
                                                <Input type="text" value={school12th.marksObtained} placeholder="" onChange={(e) => handleSchool12thChange('marksObtained', e.target.value)} />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label >CGPA/Percentage</Label>
                                                <Input type="text" value={school12th.percentage} placeholder="=" onChange={(e) => handleSchool12thChange('percentage', e.target.value)} />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <div className="d-flex gap-3 mt-4">
                                        <Button className='discard-btn' onClick={() => setIs12th(false)}>Discard</Button>
                                        <Button className='save-btn' onClick={() => updateSchool12th()}>Save</Button>
                                    </div>
                                </div> : ''
                        }


                        <div>
                            <h6>English Test</h6>
                        </div>
                        <div className='w-25'>
                            <button className='deg-btn' onClick={() => setIsEnglishTest(!isEnglishTest)}>{user?.englishTest ? 'Edit English Test' : "Add English Test"}</button>
                        </div>
                        {
                            user?.englishTest && isEnglishTest ?
                                <div className='my-3'>
                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="fullName">English Language Test</Label>
                                                <Select options={englishTestOption} value={englishTestOption?.filter((op) => op.value === englishTest.test)} onChange={(e) => handleEnglishTestChange('test', e.value)} />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label >Overall Score(1-120)</Label>
                                                <Input type='text' value={englishTest?.overallScore} onChange={(e) => handleEnglishTestChange('overallScore', e.target.value)} />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="">Reading</Label>
                                                <Input id="" type="text" value={englishTest.reading} placeholder="Reading (1-30)" onChange={(e) => handleEnglishTestChange('reading', e.target.value)} />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="">Listening</Label>
                                                <Input id="" type="text" value={englishTest.listening} placeholder="Listening (1-30)" onChange={(e) => handleEnglishTestChange('listening', e.target.value)} />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label >Speaking</Label>
                                                <Input type="text" value={englishTest.speaking} placeholder="Speaking (1-30)" onChange={(e) => handleEnglishTestChange('speaking', e.target.value)} />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label >Writing</Label>
                                                <Input type="text" value={englishTest.writing} placeholder="Writing (1-30)" onChange={(e) => handleEnglishTestChange('writing', e.target.value)} />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <div className="d-flex gap-3 mt-4">
                                        <Button className='discard-btn' color="" onClick={() => setIsEnglishTest(false)}>Discard</Button>
                                        <Button className='save-btn' color="" onClick={() => updateEnglishTest()}>Save</Button>
                                    </div>
                                </div> :
                                isEnglishTest ? <div className='my-3'>
                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="fullName">English Language Test</Label>
                                                <Select options={englishTestOption} value={englishTestOption?.filter((op) => op.value === englishTest.test)} onChange={(e) => handleEnglishTestChange('test', e.value)} />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label >Overall Score(1-120)</Label>
                                                <Input type='text' onChange={(e) => handleEnglishTestChange('overallScore', e.target.value)} />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="">Reading</Label>
                                                <Input id="" type="text" value={englishTest.reading} placeholder="Reading (1-30)" onChange={(e) => handleEnglishTestChange('reading', e.target.value)} />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label for="">Listening</Label>
                                                <Input id="" type="text" value={englishTest.listening} placeholder="Listening (1-30)" onChange={(e) => handleEnglishTestChange('listening', e.target.value)} />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label >Speaking</Label>
                                                <Input type="text" value={englishTest.speaking} placeholder="Speaking (1-30)" onChange={(e) => handleEnglishTestChange('speaking', e.target.value)} />
                                            </FormGroup>
                                        </Col>
                                        <Col md={6}>
                                            <FormGroup>
                                                <Label >Writing</Label>
                                                <Input type="text" value={englishTest.writing} placeholder="Writing (1-30)" onChange={(e) => handleEnglishTestChange('writing', e.target.value)} />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    <div className="d-flex gap-3 mt-4">
                                        <Button className='discard-btn' color="" onClick={() => setIsEnglishTest(false)}>Discard</Button>
                                        <Button className='save-btn' color="" onClick={() => updateEnglishTest()}>Save</Button>
                                    </div>
                                </div> : ''
                        }


                    </div>
                </TabPane>

                {/* Preferences */}
                <TabPane tabId="3">
                    <div className='my-3'>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="fullName">Preferred Distination</Label>
                                    <Select options={countryOptions} value={countryOptions?.filter((op) => op.value === preferred?.destination)} onChange={(e) => handlePreferredChange('destination', e.value)} />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label >Preferred Study Level</Label>
                                    <Select options={qualificationOption} value={qualificationOption?.filter((op) => op.value === preferred?.degree)} onChange={(e) => handlePreferredChange('degree', e.value)} />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="">Preferred start year</Label>
                                    <Select options={yearOptions} value={yearOptions?.filter((op) => op.value === preferred?.start_year)} onChange={(e) => handlePreferredChange('start_year', e.value)} />
                                </FormGroup>
                            </Col>

                        </Row>
                        <div className="d-flex gap-3 mt-4">
                            <Button className='save-btn' color="" onClick={() => updatePreferred()}>Save</Button>
                        </div>
                    </div>
                </TabPane>
            </TabContent>
        </div>
    );
};

export default ProfileInfo;

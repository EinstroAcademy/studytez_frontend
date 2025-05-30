import React, { useState } from 'react'
import Layout from '../Layout/Layout'
import './student.css'
import { Card, CardBody, CardHeader, CardText, CardTitle, ListGroup, ListGroupItem, Modal, ModalBody, ModalHeader } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import account from '../../Images/icons/account.png'
import { FaEnvelopeOpenText, FaFileAlt, FaHeart, FaHome, FaUser } from 'react-icons/fa'
import { Outlet, useNavigate } from 'react-router-dom'
import upload from '../../Images/icons/upload.png'
import request, { NodeURL } from '../../api/api'
import { fetchUser } from '../../redux/features/profileSlice'
import toast from 'react-hot-toast'

const menuItems = [
    { label: 'Home', icon: <FaHome />, id: '' },
    { label: 'Profile', icon: <FaUser />, id: 'profile' },
    { label: 'Documents', icon: <FaFileAlt />, id: 'documents' },
    { label: 'Shortlist', icon: <FaHeart />, id: 'shortlist' },
    { label: 'Applications', icon: <FaEnvelopeOpenText />, id: 'applications' },
];

function Student() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector((state) => state.profile.user)
    const [isProfilePhoto, setIsProfilePhoto] = useState(false)
    const [files, setFiles] = useState({
        image: '',
        userId: user?._id ?? '',
    })
    const [sample, setSample] = useState('')



    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;
        setFiles({ ...files, image: file });
        let url = URL.createObjectURL(file)
        setSample(url)
    };

    const updateProfilePhoto = () => {

        const formData = new FormData()

        Object.entries(files).forEach(([key, value]) => {
            formData.append(key, value);
        });



        request({
            url: '/update/profile/pic',
            method: 'POST',
            data: formData
        }).then((res) => {
            if (res.status === 1) {
                dispatch(fetchUser())
                setIsProfilePhoto(false)
                setFiles({
                    image:'',
                    userId:user?._id ?? ''
                })
                setSample('')
            }
            if (res.status === 0) {
                toast.error(res.message)
            }
        })
    }

    return (
        <Layout>
            <div className='container student-bg'>
                <div className='row'>
                    <div className='col-4'>
                        <div className='student-menu'>
                            <Card
                                className="my-2 p-2"
                            >
                                <CardBody>
                                    <div>
                                        <div className='d-flex'>
                                            <img src={
                                                user?.image
                                                    ? user.image.startsWith('https://')
                                                        ? user.image
                                                        : `${NodeURL}/${user.image}`
                                                    : account
                                            } width={'30'} height={'30'} onClick={() => setIsProfilePhoto(!isProfilePhoto)} className='rounded me-2' />

                                            <div>
                                                <h5>{user?.fullName}</h5>
                                                <h6 className='text-muted'>{user?.city}, {user?.country}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                            <Card
                                className="my-2 p-2"
                            >
                                <CardBody>
                                    <ListGroup flush>
                                        {menuItems.map((item, index) => (
                                            <ListGroupItem
                                                key={index}
                                                action
                                                tag="button"
                                                className="d-flex align-items-center gap-3 border-0 rounded py-3"
                                                onClick={() => navigate(item.id)}
                                            >
                                                <span style={{ fontSize: '18px' }}>{item.icon}</span>
                                                <span>{item.label}</span>
                                            </ListGroupItem>
                                        ))}
                                    </ListGroup>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                    <div className='col-8'>
                        <Outlet />
                    </div>
                </div>
            </div>
            <Modal isOpen={isProfilePhoto} toggle={() => setIsProfilePhoto(!isProfilePhoto)} centered>
                <ModalHeader toggle={() => setIsProfilePhoto(!isProfilePhoto)}>Change Profile photo</ModalHeader>
                <ModalBody>
                    <div className='container'>
                        <h6>Upload your photo</h6>
                        {
                            sample === '' && files.image === '' ? <div className='upload-box'>
                                <img src={upload} width={'20px'} height={'20px'} />
                                <label for="profileUpload">Upload Photo <input type='file' id='profileUpload' hidden onChange={(e) => handleFileChange(e, "contract")} /></label>
                            </div> :
                                <div>
                                    <img src={sample} width={'250px'} height={'250px'} />
                                    <div>
                                        <button onClick={() => updateProfilePhoto()}>Save</button>
                                    </div>
                                </div>
                        }

                    </div>
                </ModalBody>
            </Modal>
        </Layout>
    )
}

export default Student
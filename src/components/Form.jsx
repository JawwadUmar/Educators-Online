    import React, { useState } from 'react';
    import axios from 'axios';
    import Modal from './modal/Modal'

    const Form = () => {
    
    const [modalContent, setmodalContent] = useState({
        title: '',
        message: '',
    })

    const [isopen, setisopen] = useState(false);

    const toggleModal = () =>{
        setisopen(!isopen);
    }

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        membership: 'demo',
        customPlan: '',
        email: '',
        grade: '',
        curriculum: '',
        subject: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        }));
    };

    const handleMembershipChange = (e) => {
        const selectedMembership = e.target.value;
        setFormData((prevData) => ({
        ...prevData,
        membership: selectedMembership,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted:', formData);
        const data = {
            Name: formData.name,
            Phone: formData.phone,
            Membership: formData.membership,
            CustomPlan: formData.customPlan,
            Email: formData.email,
            Grade: formData.grade,
            Curriculum: formData.curriculum,
            Subject: formData.subject
        };

        axios.post('https://sheet.best/api/sheets/8226431e-80d7-49a9-8375-cff8512e8733', data)
        .then((response)=>{
            //set form data to empty field
            setFormData({
                name: '',
                phone: '',
                membership: 'demo',
                customPlan: '',
                email: '',
                grade: '',
                curriculum: '',
                subject: '',
            });

            setmodalContent({
                title: 'Form Subitted',
                message: 'We will contact you within 2 days'
            })
            
            toggleModal();
        })
        .catch((error) =>{
            // Handle error if needed
            console.error('Error submitting form:', error);
        })
    };

    return (
        <div className='myform flex items-center justify-center h-screen'>
            <Modal open = {isopen} title = {modalContent.title} message = {modalContent.message} close = {toggleModal}/>
        <form onSubmit={handleSubmit} className="max-w-lg w-full p-8 bg-transparent rounded-lg">
           
                        <h2 className="text-2xl font-bold mb-6 text-[#00df9a]">Registration Form</h2>

                        {/* Name */}
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-white">
                            Name
                            </label>
                            <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="John Doe"
                            required
                            />
                        </div>

                        {/*Phone Number */}

                            <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-white">
                                Phone Number (Include Country Code)
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                                placeholder="e.g., +1 123-456-7890"
                                required
                            />
                            </div>

                        {/* Membership Plan */}
                        <div className="mb-4 mt-4">
                            <label htmlFor="membership" className="block text-sm font-medium text-white">
                            Membership Plan (Select 'Demo' for a free one to one live session)
                            </label>
                            <select
                            id="membership"
                            name="membership"
                            value={formData.membership}
                            onChange={handleMembershipChange}
                            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                            >
                            <option value="demo">Demo</option>
                            <option value="basic">Basic</option>
                            <option value="premium">Premium</option>
                            <option value="standard">Standard</option>
                            <option value="custom">Custom</option>
                            </select>
                            {/* Custom Plan Input (displayed when 'Custom' is selected) */}
                            {formData.membership === 'custom' && (
                            <input
                                type="text"
                                id="customPlan"
                                name="customPlan"
                                value={formData.customPlan}
                                onChange={handleInputChange}
                                className="mt-2 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                                placeholder="Enter the number of classes you want"
                                required
                            />
                            )}
                        </div>

                        {/* Email */}
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-white">
                            Email
                            </label>
                            <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="john@example.com"
                            required
                            />
                        </div>

                        {/* Grade */}
                        <div className="mb-4">
                            <label htmlFor="grade" className="block text-sm font-medium text-white">
                            Grade
                            </label>
                            <input
                            type="text"
                            id="grade"
                            name="grade"
                            value={formData.grade}
                            onChange={handleInputChange}
                            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="e.g., 10th grade"
                            required
                            />
                        </div>

                        {/* Curriculum */}
                        <div className="mb-4">
                            <label htmlFor="curriculum" className="block text-sm font-medium text-white">
                            Curriculum
                            </label>
                            <input
                            type="text"
                            id="curriculum"
                            name="curriculum"
                            value={formData.curriculum}
                            onChange={handleInputChange}
                            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="e.g., CBSE"
                            />
                        </div>

                        {/* Subject */}
                        <div className="mb-6">
                            <label htmlFor="subject" className="block text-sm font-medium text-white">
                            Subject
                            </label>
                            <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="e.g., Mathematics"
                            required
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-[#00df9a] w-[100px] rounded-md font-medium my-6 mx-auto py-3 text-black"
                        >
                            Submit
                        </button>
            
        </form>
    </div>
    );
    };

    export default Form;

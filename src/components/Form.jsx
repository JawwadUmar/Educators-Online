import React, { useRef, useState } from 'react';
import Modal from './modal/Modal'

const Form = () => {

const [modalContent, setmodalContent] = useState({
    title: '',
    message: '',
})

const [isopen, setisopen] = useState(false);
const [selectedMembership, setSelectedMembership] = useState('demo');

const handleMembershipChange = (event) => {
    setSelectedMembership(event.target.value);
  };

const toggleModal = () =>{
    setisopen(!isopen);
}

const nameRef = useRef();
const phoneRef = useRef();
const membershipRef = useRef();
const emailRef = useRef();
const customPlanRef = useRef();
const gradeRef = useRef();
const curriculumRef = useRef();
const subjectRef = useRef();


const handleFormSubmit = async(event) => {
    event.preventDefault();

    const name = nameRef.current.value;
    const phone = phoneRef.current.value;
    const membership = membershipRef.current.value;
    const customPlan = customPlanRef.current ? customPlanRef.current.val : '';
    const email = emailRef.current.value;
    const grade = gradeRef.current.value;
    const curriculum = curriculumRef.current.value;
    const subject = subjectRef.current.value;

    const formData = new FormData();
    
    formData.append('Name', name);
    formData.append('Phone', phone);
    formData.append('Membership', membership);
    formData.append('CustomPlan', customPlan);
    formData.append('Email', email);
    formData.append('Grade', grade);
    formData.append('Curriculum', curriculum);
    formData.append('Subject', subject);

    var keyValuePairs = [];
        for (var pair of formData.entries()) {
          keyValuePairs.push(pair[0] + "=" + pair[1]);
    }

    // console.log(keyValuePairs);
    var formDataString = keyValuePairs.join("&");
    console.log(formDataString);

    fetch(
        "https://script.google.com/macros/s/AKfycby8hT5MtxCiGkGa6hcmmgYSblcB4va_FCgmWTLnwjGSxc32LaPQ8l2-U9f80KsKkqXWOQ/exec",
        {
          redirect: "follow",
          method: "POST",
          body: formDataString,
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
        }
      )
        .then(function (response) {
          // Check if the request was successful
          if (response) {
            return response; // Assuming your script returns JSON response
          } else {
            throw new Error("Failed to submit the form.");
          }
        })

    nameRef.current.value = '';
    phoneRef.current.value = '';
    membershipRef.current.value = '';
    emailRef.current.value = '';
    gradeRef.current.value = '';
    curriculumRef.current.value = '';
    subjectRef.current.value = '';
    if(customPlanRef.current){
        customPlanRef.current.value = '';
    }
    

    setmodalContent({
        title: 'Form Subitted',
        message: 'We will contact you within 2 days'
    })
    
    toggleModal();
  };
  


return (
    <div className='myform flex items-center justify-center h-screen'>
        <Modal open = {isopen} title = {modalContent.title} message = {modalContent.message} close = {toggleModal}/>
    <form onSubmit={handleFormSubmit} className="max-w-lg w-full p-8 bg-transparent rounded-lg" method="POST">
       
                    <h2 className="text-2xl font-bold mb-6 text-[#00df9a]">Registration Form</h2>

                    {/* Name */}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-white">
                        Name
                        </label>
                        <input
                        type="text"
                        id="name"
                        name="Name"
                        ref={nameRef}
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
                            name="Phone"
                            ref={phoneRef}
                            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="e.g., +971 12 345 6789"
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
                        name="Membership"
                        ref={membershipRef}
                        value={selectedMembership}
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
                        {selectedMembership === 'custom' && (
                        <input
                            type="text" 
                            id="customPlan"
                            name="CustomPlan"
                            ref={customPlanRef}
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
                        name="Email"
                        ref={emailRef}
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
                        name="Grade"
                        ref={gradeRef}
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
                        name="Curriculum"
                        ref={curriculumRef}
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
                        name="Subject"
                        ref={subjectRef}
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



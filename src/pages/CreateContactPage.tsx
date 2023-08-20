import React, { useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import ContactForm from '../components/ContactForm';
import { createContact } from '../store/contactsSlice';

const CreateContactPage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use useNavigate hook
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    status: 'active',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCreateContact = () => {
    dispatch(createContact(formData));
    navigateToContacts();
  };

  const navigateToContacts = () => {
    // Implement navigation logic here
    navigate('/'); // Navigate to the desired route (e.g., '/')
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-6">Create Contact</h1>
      <ContactForm
        formData={formData}
        handleInputChange={handleInputChange}
        onSubmit={handleCreateContact}
        isEditMode={false}
        navigateCallback={navigateToContacts}
      />
    </div>
  );
};

export default CreateContactPage;

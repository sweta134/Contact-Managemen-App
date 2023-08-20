import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ContactForm, { ContactFormProps } from '../components/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { updateContact } from '../store/contactsSlice';

const EditContactPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Use RootState to provide correct type for useSelector
  const contacts = useSelector((state: RootState) => state.contacts);

  const contact = contacts.find((c) => c.id.toString() === id);

  // Initialize formData with an empty object if no contact is found
  const [formData, setFormData] = useState<ContactFormProps['formData']>(contact || {
    firstName: '',
    lastName: '',
    status: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleEditContact = () => {
    const updatedContact = { ...contact, ...formData };
    dispatch(updateContact({ id, updatedContact })); // Pass id and updatedContact as an object
    navigate('/');
  };
  
  
  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-6">Edit Contact</h1>
      <ContactForm
        formData={formData}
        handleInputChange={handleChange}
        onSubmit={handleEditContact}
        isEditMode={true}
        navigateCallback={() => navigate('/')} // Use the navigate function directly
      />
    </div>
  );
};

export default EditContactPage;

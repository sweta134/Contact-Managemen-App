import React from 'react';
import { useDispatch } from 'react-redux';
import { updateContact, createContact } from '../store/contactsSlice';

interface ContactFormProps {
  formData: {
    firstName: string;
    lastName: string;
    status: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  isEditMode: boolean;
  navigateCallback: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({
  formData,
  handleInputChange,
  onSubmit,
  isEditMode,
  navigateCallback,
}) => {
  const dispatch = useDispatch();

  const handleCreateContact = () => {
    dispatch(createContact(formData));
    navigateCallback();
  };

  const handleEditContact = () => {
    dispatch(updateContact(formData)); // Use updateContact here
    navigateCallback();
  };


  return (
    <form className="p-6 bg-white rounded-lg shadow-md">
      <div className="space-y-4">
        <div className="flex items-center my-4">
          <label className="text-gray-600 font-semibold w-32 mr-4">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="flex-grow p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="flex items-center my-4">
          <label className="text-gray-600 font-semibold w-32 mr-4">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="flex-grow p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="flex items-center my-4">
          <label className="text-gray-600 font-semibold w-32 mr-4">
            Status
          </label>
          <div className="flex space-x-4">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="status"
                value="active"
                checked={formData.status === 'active'}
                onChange={handleInputChange}
                className="mr-2"
              />
              Active
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                name="status"
                value="inactive"
                checked={formData.status === 'inactive'}
                onChange={handleInputChange}
                className="mr-2"
              />
              Inactive
            </label>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <button
          type="button" 
          className={`w-full py-2 text-white ${
            isEditMode ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'
          } rounded`}
          onClick={isEditMode ? handleEditContact : handleCreateContact}
        >
          {isEditMode ? 'Save Edited Contact' : 'Save Contact'}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;

// Export the ContactFormProps type
export type { ContactFormProps };

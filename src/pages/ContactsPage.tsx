import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteContact } from '../store/contactsSlice'; // Import the Redux action

interface ContactProps {
  id: number;
  firstName: string;
  lastName: string;
  status: string;
  onDelete: (id: number) => void;
}

const Contact: React.FC<ContactProps> = ({
  id,
  firstName,
  lastName,
  status,
  onDelete,
}) => (
  <div className="mx-2 border rounded p-3 mb-4 bg-white flex flex-col">
    <div>
      <p className="text-lg font-semibold">Name: {firstName} {lastName}</p>
      <p>Status: <span className={`text-${status === 'active' ? 'green' : 'red'}-500`}>{status}</span></p>
    </div>
    <div className="mt-4 flex flex-col space-y-2 items-center">
      <Link
        to={`/edit/${id}`}
        className="inline-block w-full px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 transform transition duration-300 hover:scale-105 text-center"
      >
        Edit
      </Link>
      <button
        className="w-full px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 transform transition duration-300 hover:scale-105 text-center"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>
  </div>
);

const ContactsPage: React.FC = () => {
  const contacts = useSelector((state: any) => state.contacts); // Access contacts from Redux store
  // console.log('Contacts in Redux Store:', contacts);
  const dispatch = useDispatch(); // Initialize the dispatch function

  

  const handleDeleteContact = (id: number) => {
    dispatch(deleteContact(id)); // Dispatch the action to delete a contact
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-6">Contacts Page</h1>
      <Link
        to="/create"
        className="inline-block px-4 py-2 mb-4 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Create Contact
      </Link>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {contacts.map((contact: any) => (
          <Contact key={contact.id} {...contact} onDelete={handleDeleteContact} />
        ))}
      </div>
    </div>
  );
};

export default ContactsPage;

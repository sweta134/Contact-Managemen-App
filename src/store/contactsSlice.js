// store/contactsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    createContact: (state, action) => {
      const newContact = {
        id: uuidv4(), // Generate unique ID
        ...action.payload,
      };
      state.push(newContact);
    },
    updateContact: (state, action) => {
      // console.log('Updating contact:', action.payload);
      const { id, updatedContact } = action.payload;
      // console.log('ID:', id);
      // console.log('Updated Contact:', updatedContact);
      const contactIndex = state.findIndex((contact) => contact.id === id);
      if (contactIndex !== -1) {
        state[contactIndex] = {
          ...state[contactIndex],
          ...action.payload,
        };
      }
      // console.log('Updated State:', state);
    },
    

    deleteContact: (state, action) => {
      const idToDelete = action.payload;
      return state.filter(contact => contact.id !== idToDelete);
    },
  },
});

export const { createContact, updateContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;

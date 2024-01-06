import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.cont.items;

export const selectFilter = state => state.filt;

export const selectLoading = state => state.cont.loading;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

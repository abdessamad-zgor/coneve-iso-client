import { createAction } from '@reduxjs/toolkit';

const persistData = createAction('PERSIST_DATA');
const getPersistedData = createAction('GET_PERSISTED_DATA');
const signOutUser = createAction('SIGN_OUT_USER');

export { persistData, getPersistedData, signOutUser };

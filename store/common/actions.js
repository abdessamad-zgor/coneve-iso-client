import { createAction } from '@reduxjs/toolkit';

const persistData = createAction('PERSIST_DATA');
const getPersistedData = createAction('GET_PERSISTED_DATA');

export { persistData, getPersistedData };

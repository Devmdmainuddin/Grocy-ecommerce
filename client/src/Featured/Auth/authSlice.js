import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  authenticate: JSON.parse(localStorage.getItem('authenticate')) || false,
  user: JSON.parse(localStorage.getItem('user')) || null,
  loading: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth(state, action) {
      state.authenticate = true;
      state.user = action.payload.user;
      state.loading = false;

      localStorage.setItem('authenticate', JSON.stringify(true));
      localStorage.setItem('user', JSON.stringify(action.payload.user));
    },
    resetAuth(state) {
      state.authenticate = false;
      state.user = null;
      state.loading = false;
       // Remove from localStorage
       localStorage.removeItem('authenticate');
       localStorage.removeItem('user');
    },
  },
});

export const { setAuth, resetAuth } = authSlice.actions;
export default authSlice.reducer;

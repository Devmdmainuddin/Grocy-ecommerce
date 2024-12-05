// import { useEffect } from 'react';
// import { useLoginUserMutation, useAddUserMutation, useCheckAuthQuery } from '../Featured/Auth/authApi';
// import { setAuth, resetAuth } from '../Featured/Auth/authSlice';
// import { useDispatch } from 'react-redux';



// Login Function
// export function useLogin() {
//   const [LoginUser] = useLoginUserMutation();
//   const dispatch = useDispatch();

//   async function handleLogin(formData) {
//     const response = await LoginUser(formData).unwrap();
//     if (response.success) {
//       sessionStorage.setItem('accessToken', JSON.stringify(response.data.accessToken));
//       dispatch(setAuth({ user: response.data.user }));
//     } else {
//       dispatch(resetAuth());
//     }
//   }

//   return handleLogin;
// }

// Register Function
// export function useRegister() {
//   const [AddUser] = useAddUserMutation();

//   async function handleRegister(formData) {
//     await AddUser(formData).unwrap();
//   }

//   return handleRegister;
// }

// Check Auth Function
// export function useCheckAuth() {
//   const { data, error, isLoading } = useCheckAuthQuery();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (data?.success) {
//       dispatch(setAuth({ user: data.data.user }));
//     } else if (error) {
//       dispatch(resetAuth());
//     }
//   }, [data, error, dispatch]);

//   return { isLoading };
// }

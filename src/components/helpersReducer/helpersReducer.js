//---------------first-step--------------------------------------------
// const stateItemNoRepeat = (state, action) => {
//   if (
//     state.some(
//       ({ name }) => name.toLowerCase() === action.payload.name.toLowerCase(),
//     )
//   ) {
//     alert(`${action.payload.name} is already in contacts`);
//     return [...state];
//   }
//   if (state.some(({ number }) => number === action.payload.number)) {
//     alert(`${action.payload.number} is already in contacts`);
//     return [...state];
//   }

//   return [action.payload, ...state];
// };

// export default stateItemNoRepeat;

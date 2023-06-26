import { createContext } from "react";

// export const initialState = {darkMode: false}


// const themeReducer = (state, action) => {
//   switch (action.type) {
//     case 'TOGGLE_THEME':
//       return {
//         ...state,
//         darkMode: !state.darkMode,
//       };
//       default:
//         return state;
//       }
//     };

export const ContextGlobal = createContext();
    
export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  // const [state, dispatch] = useReducer(themeReducer, initialState);

  // const toggleTheme = () => {
  //   dispatch({ type: 'TOGGLE_THEME' });
  // };

  return (
    <ContextGlobal.Provider value={{}}>
      {children}
    </ContextGlobal.Provider>
  );
};

import { createContext, useState, useEffect, useReducer } from "react";

export const ContextGlobal = createContext();

const initState = JSON.parse(localStorage.getItem("dentistas")) || {
  dentistaList: [],
  favList: [],
  dentista: {},
};

const url = "https://jsonplaceholder.typicode.com/users/";

const dentistaReducer = (state, action) => {
  switch (action.type) {
    case "GET_DENTISTAS":
      return {
        dentistaList: action.payload,
        favList: state.favList,
        dentista: state.dentista,
      };
    case "ADD_FAV":
      return {
        dentistaList: state.dentistaList,
        favList: [...state.favList, action.payload],
        dentista: state.dentista,
      };
    case "DELETE_FAV":
      return {
        dentistaList: state.dentistaList,
        favList: state.favList.filter((fav) => fav.id !== action.payload),
        dentista: state.dentista,
      };

    case "SET_DETAIL":
      return {
        dentistaList: state.dentistaList,
        favList: state.favList,
        dentista: action.payload,
      };
  }
};

export const ContextProvider = ({ children }) => {
  const [dentistaState, dentistaDispatch] = useReducer(
    dentistaReducer,
    initState
  );

  useEffect(() => {
    const fetchDentistas = async () => {
      const response = await fetch(url);
      const data = await response.json();
      dentistaDispatch({ type: "GET_DENTISTAS", payload: data });
    };

    fetchDentistas();
  }, []);

  useEffect(() => {
    localStorage.setItem("dentistas", JSON.stringify(dentistaState));
  }, [dentistaState]);

  return (
    <ContextGlobal.Provider value={{ dentistaState, dentistaDispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

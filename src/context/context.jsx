import axios from "axios";
import { createContext, useContext, useReducer, useEffect} from "react";
import { reducer } from "../reducers/reducer";

const CharStates = createContext()

const initialState = {
    list: [],
    favs: JSON.parse(localStorage.getItem('favs')) || [],
    theme: "light"// theme
}

const Context = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const {list, favs} = state
    console.log(state)
    const url = 'https://jsonplaceholder.typicode.com/users'
    useEffect(() => {
        axios(url)
        .then(res => dispatch({type: 'GET_CHARACTERS', payload: res.data}))
    }, [])

    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(state.favs))
    }, [state.favs])
    
    const toggleTheme = () => {
        dispatch({ type: "TOGGLE_THEME" });
      };
    return (
        <CharStates.Provider value={{list, favs, dispatch, toggleTheme}}>
            {children}
        </CharStates.Provider>
    )
}

export default Context

export const useCharStates = () => useContext(CharStates)
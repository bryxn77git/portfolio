import { useReducer } from 'react';
import { UiContext, uiReducer } from './';
import { useTranslation } from 'react-i18next';

const UI_INITIAL_STATE = {
    lang: 'es'
}

export const UiProvider = ({ children }) => {

    const [state, dispatch] = useReducer( uiReducer , UI_INITIAL_STATE );   

    const {t, i18n} = useTranslation();

    const toggleChangeLang = ( lang ) => {
        dispatch({ type: '[UI] - ToggleChangeLang', payload: lang });
        i18n.changeLanguage(lang)
    }    

    return (
        <UiContext.Provider value={{
            ...state,
            toggleChangeLang,
        }}>
            { children }
        </UiContext.Provider>
    )
};
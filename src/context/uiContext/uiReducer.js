


export const uiReducer = ( state, action ) => {

   switch (action.type) {
      case '[UI] - ToggleChangeLang':
         return {
            ...state,
            lang: action.payload,
        }
      case '[UI] - ToggleChangeTheme':
         return {
            ...state,
            theme: action.payload,
        }

       default:
          return state;
   }

}
import { createContext, useReducer } from "react";

// ✅ Context definition
export const WishlistContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

// ✅ Reducer
function wishlistReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const exists = state.items.some((item) => item.id === action.item.id);
      if (exists) return state;

      return {
        ...state,
        items: [...state.items, action.item],
      };
    }

    case "REMOVE_ITEM": {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    }

    default:
      return state;
  }
}

// ✅ Provider
export function WishlistContextProvider({ children }) {
  const [wishlistState, dispatch] = useReducer(wishlistReducer, { items: [] });

  function addItem(item) {
    dispatch({ type: "ADD_ITEM", item });
  }

  function removeItem(id) {
    dispatch({ type: "REMOVE_ITEM", id });
  }

  const contextValue = {
    items: wishlistState.items,
    addItem,
    removeItem,
  };

  return (
    <WishlistContext.Provider value={contextValue}>
      {children}
    </WishlistContext.Provider>
  );
}

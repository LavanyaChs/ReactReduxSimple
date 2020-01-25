
const initialState = { name: "Meeee!" };

const greet =(state = initialState, action) => {
  switch (action.type) {
    case "GREET": {
      const { name } = action.payload;// Object Destructing
      return { ...state, name }; // Immutability - Object.assi
    }
  }
  return state;
};
export default greet
//  Create a new SLICE AND EXPORT I

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  color: "#be123c",
};

const backgroundColorSlice = createSlice({
  name: "cardSides",
  initialState,
  reducers: {
    updateColor: (state, action) => {
      state.color = action.payload;
      //   payload is the actual data
    },
  },
});

export const { updateColor } = backgroundColorSlice.actions;

export default backgroundColorSlice.reducer;

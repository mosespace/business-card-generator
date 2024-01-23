//  Create a new SLICE AND EXPORT I

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  currentSlide: "front-side",
  formData: {},
};

const cardSideSlice = createSlice({
  name: "cardSides",
  initialState,
  reducers: {
    setCurrentSlide: (state, action) => {
      state.currentSlide = action.payload;
      //   payload is the actial data
    },

    updateFormDAta: (state, action) => {
      state.formData = {
        ...state.formData,
        ...action.payload,
      };
    },
  },
});

export const { setCurrentSlide, updateFormData } = cardSideSlice.actions;

export default cardSideSlice.reducer;

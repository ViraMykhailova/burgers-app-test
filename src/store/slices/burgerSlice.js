import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//Get all burgers

export const fetchBurgers = createAsyncThunk(
  "burgers/fetchBurgers",
  async function (_, { rejectWithValue }) {
    try {
      const response = await fetch(
        "https://my-burger-api.herokuapp.com/burgers"
      );
      if (!response.ok) {
        throw new Error("Server Error");
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//Initial state
const initialState = {
  burgers: [],
  status: null,
  error: null,
};

//create slice

const burgersSlice = createSlice({
  name: "burgers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBurgers.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchBurgers.fulfilled, (state, action) => {
        state.status = "resolved";

        //add random price to each burger in burgers array
        state.burgers = action.payload.map((burger) => {
          const burgerPrice = (Math.random() * 5.0 + 3.0).toFixed(2);

          return {
            ...burger,
            burgerPrice: burgerPrice,
            currency: "$",
          };
        });
      })
      .addCase(fetchBurgers.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});

export default burgersSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const renderSlice = createSlice({
    name: "render",
    initialState: 16,
    reducers: {
        setRenderGlobal: (state, action) => action.payload
    }
})

export const { setRenderGlobal } = renderSlice.actions
export default renderSlice.reducer
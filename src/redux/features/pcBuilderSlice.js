import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedComponents: [],
};

const pcBuilderSlice = createSlice({
    name: 'pcBuilder',
    initialState,
    reducers: {
        addToBuilder: (state, action) => {
            const selectedComponent = action.payload;
            state.selectedComponents.push(selectedComponent);
        },
    },
});

export const { addToBuilder } = pcBuilderSlice.actions;

export default pcBuilderSlice.reducer;
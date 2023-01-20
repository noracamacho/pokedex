import { configureStore } from "@reduxjs/toolkit";
import trainer from './slices/trainer.slice';
import theme from './slices/theme.slice';
import render from './slices/render.slice';

export default configureStore({
    reducer: {
        trainer,
        theme,
        render
    }
})
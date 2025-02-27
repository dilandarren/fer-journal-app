import { createSlice } from '@reduxjs/toolkit';

export const jornalSlice = createSlice({
    name: 'jornal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
        // active: {
        //     id: 'ABC123',
        //     title: '',
        //     body: '',
        //     date: '123456',
        //     imageUrls: [],// https://foto1.png, https://foto2.png, https://foto3.png
        // }
    },
    reducers: {

        savingNewNote: ( state ) => {
            state.isSaving = true;
        },
        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.active = action.payload;
        },
        setNotes: (state, action) => {
            state.notes = action.payload
        },
        setSaving: (state) => {
            
        },
        updateNote: (state, action) => {

        },
        deleteNodeById: (state, action) => {
            
        }
    }
});


// Action creators are generated for each case reducer function
export const { 

    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNodeById,
    savingNewNote,

} = jornalSlice.actions;
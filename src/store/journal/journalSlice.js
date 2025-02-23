import { createSlice } from '@reduxjs/toolkit';

export const jornalSlice = createSlice({
    name: 'jornal',
    initialState: {
        isSaving: true,
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
        addNewEmptyNote: (state, action) => {

        },
        setActiveNote: (state, action) => {

        },
        setNotes: (state, action) => {

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
    deleteNodeById

} = jornalSlice.actions;
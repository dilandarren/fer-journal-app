import { SaveOutlined, UploadOutlined } from "@mui/icons-material";
import { Button, Grid2, IconButton, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";
import { useForm } from "../../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { useMemo, useRef } from "react";
import { useEffect } from "react";
import { setActiveNote } from "../../../store/journal/journalSlice";
import { startSaveNotes, startUploadingFiles } from "../../../store/journal/thunks";
import Swal from "sweetalert2";


export const NoteView = () => {

    const dispatch = useDispatch();
    const { active:note, messageSaved, isSaving} = useSelector(state => state.journal)

    const {body, title, date, onInputChange, formState} = useForm( note );

    const dateString = useMemo(() => {
        const newDate = new Date(date);

        return newDate.toUTCString();
    }, [date])


    const FileInputRef = useRef();


    useEffect(() => {
      dispatch(setActiveNote(formState));

    }, [formState])


    useEffect(() => {
      if ( messageSaved.length > 0 ) {
        Swal.fire('Nota actualizada', messageSaved, 'success');
      }
    }, [messageSaved])
    


    const onSaveNote = () => {
        dispatch(startSaveNotes());
    }

    const onFileInputChange = ({target}) => {
        if(target.files === 0) return;

        dispatch(startUploadingFiles(target.files))
    }
    

    return (
        <Grid2 
        
            container 
            direction="row" 
            justifyContent="space-between"  
            alignItems="center"
            sx={{mb: 1}}
            className='animate__animated animate__fadeIn animate__faster'
            >
            <Grid2>
                <Typography fontSize={39} fontWeight="light">{dateString}</Typography>
            </Grid2>
            
            <Grid2>

                <input
                    type="file"
                    multiple
                    ref={FileInputRef}
                    onChange={onFileInputChange}
                    style={{display: 'none'}}
                />

                <IconButton
                    color="primary"
                    disabled={isSaving}
                    onClick={ () => FileInputRef.current.click() }
                >
                    <UploadOutlined />
                </IconButton>

                <Button 
                    disabled={isSaving}
                    onClick={onSaveNote}
                    color="primary" 
                    sx={{ padding:2, boxShadow: 10}}
                >
                    <SaveOutlined sx={{ fontSize: 30, mr: 1}} />
                    Guardar
                </Button>
            </Grid2>

            <Grid2>
                <TextField 
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="agrega el título"
                    label="Título"
                    sx={{border:'none', mb: 1}}
                    name="title"
                    value={title}
                    onChange={onInputChange}
                />

                <TextField 
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Qué sucedió en el dia de hoy?"
                    minRows={5}
                    name="body"
                    value={body}
                    onChange={onInputChange}
                />
            </Grid2>

            {/* Gallery */}
            <ImageGallery />
        </Grid2>
    )
}

import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { AddOutlined } from "@mui/icons-material"
import { useDispatch, useSelector } from "react-redux"
import { startNewNote } from "../../../store/journal/thunks"

export const JournalPage = () => {

    const dispatch = useDispatch();

    const { isSaving, active } = useSelector(state => state.journal);
    
    const onClickNewNote = () => {
        dispatch(startNewNote())
    }

    
    return (
        <JournalLayout>

        {/* <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet itaque eligendi atque cumque ratione facilis sapiente enim sed mollitia quaerat animi unde aut accusamus, et maxime aliquam, officia veniam tempora.
        </Typography> */}
        {
            (active) 
            ? <NoteView />
            : <NothingSelectedView />
        }

        <IconButton
            onClick={onClickNewNote}
            size="large"
            disabled={isSaving}
            sx={{
                color: 'white',
                backgroundColor: 'error.main',
                ':hover': {backgroundColor : 'error.main', opacity: 0.9},
                position: "fixed",
                right: 50,
                bottom: 50,
            }}
        >
            <AddOutlined sx={{fontSize: 30}}/>
        </IconButton>

        </JournalLayout>
        
    )
}

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router'

export const AuthModal = (Component) => {
    const Wrapper = (props) => {
        const navigate = useNavigate()
        const [isOpenModalWindow, setIsOpenModalWindow] = useState(false)

        const goSignInPage = () => {
            setIsOpenModalWindow(false)
            navigate('/signin')
        }
        return (
            <>
                <Component
                    {...props}
                    showAuthModal={() => setIsOpenModalWindow(true)}
                />

                <Dialog
                    open={isOpenModalWindow}
                    onClose={() => setIsOpenModalWindow(false)}
                >
                    <DialogTitle>Not Authorized</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            In order to complete this action, plese sign in
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={goSignInPage}>go to sign in</Button>
                        <Button onClick={() => setIsOpenModalWindow(false)}>
                            ok
                        </Button>
                    </DialogActions>
                </Dialog>
            </>
        )
    }
    return Wrapper
}

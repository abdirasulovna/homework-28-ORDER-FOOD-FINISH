/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import { Button, Grid, TextField } from '@mui/material'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { UserRoles } from '../../lib/constants/common'
import { signUp } from '../../store/auth/auth.thunk'

export const SignUpPage = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const submitHandler = async ({ email, name, password }) => {
        try {
            const data = {
                email,
                name,
                password,
                role: UserRoles.ADMIN,
            }
            await dispatch(signUp(data))
                .unwrap()
                .then(() => navigate('/'))
        } catch (error) {
            // console.log(error)
        }
    }
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        onSubmit: submitHandler,
    })

    const { values, handleChange, handleSubmit } = formik

    return (
        <Grid display="flex" justifyContent="center" marginTop={20}>
            <StyledGrid>
                <form onSubmit={handleSubmit}>
                    <Grid display="flex" flexDirection="column">
                        <TextField
                            value={values.name}
                            onChange={handleChange}
                            label="Name"
                            name="name"
                            type="text"
                        />
                        <TextField
                            value={values.email}
                            onChange={handleChange}
                            label="Email"
                            name="email"
                        />
                        <TextField
                            value={values.password}
                            onChange={handleChange}
                            label="Password"
                            name="password"
                        />
                        <TextField
                            value={values.confirmPassword}
                            onChange={handleChange}
                            label="Confirm"
                            name="confirmPassword"
                        />
                        <Button type="submit">sign up</Button>
                        <Link to="/signin">{`Don't have account`}</Link>
                    </Grid>
                </form>
            </StyledGrid>
        </Grid>
    )
}
const StyledGrid = styled(Grid)(() => ({
    backgroundColor: '#FFF',
    width: '350px',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
}))

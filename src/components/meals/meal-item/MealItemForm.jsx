/* eslint-disable no-undef */
import React, { useState } from 'react'
import styled from '@emotion/styled'

import { useDispatch, useSelector } from 'react-redux'
import { TextField } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import Button from '../../UI/Button'
import { addToBasket } from '../../../store/basket/basketThunk'

const MealItemForm = ({ id, title, price }) => {
    const isAuthorized = useSelector((state) => state.auth.isAuthorized)
    const dispatch = useDispatch()
    const [amount, setAmount] = useState(1)

    const amountChangeHandler = (e) => {
        setAmount(e.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        if (!isAuthorized) {
            dispatch()
        }
        const basketItem = {
            id,
            price,
            title,
            amount: +amount,
        }
        dispatch(addToBasket(basketItem))
    }

    return (
        <StyledForm>
            <Container>
                <StyledLabel htmlFor={id}>Amount</StyledLabel>
                <StyledText
                    id={id}
                    type="number"
                    size="small"
                    value={amount}
                    onChange={amountChangeHandler}
                />
            </Container>
            <StyledButton onClick={submitHandler}>
                <AddIcon />
                Add
            </StyledButton>
        </StyledForm>
    )
}

export default MealItemForm

const StyledText = styled(TextField)(() => ({
    width: ' 3.75rem',
    height: '2rem',
    outline: 'none',
    borderRadius: '6px',
    fontWeight: '500',
    fontSize: '16px',
}))

const StyledForm = styled('form')(() => ({
    display: ' flex',
    flexDirection: ' column',
    alignItems: 'flex-end',
}))

const Container = styled('div')(() => ({
    marginBottom: '15px',
}))

const StyledLabel = styled('label')(() => ({
    fontWeight: '600',
    fontSize: '1.125rem',
    lineHeight: '1.6875rem',
    margin: '0 1.25rem 0 0',
}))
const StyledButton = styled(Button)(({ theme }) => ({
    background: theme.palette.primary.main,
    color: '#FFF',
    '&:hover': {
        backgroundColor: theme.palette.primary.main,
    },
}))

import { styled } from '@mui/material'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { signOut } from '../../store/auth/auth.thunk'
import { getBasket } from '../../store/basket/basketThunk'
import { uiActions } from '../../store/ui/uiSlice'
import Button from '../UI/Button'
import { BasketButton } from './BasketButton'

const Header = ({ onShowBasket, showAuthModal }) => {
    const navigate = useNavigate()
    const isAuthorized = useSelector((state) => state.auth.isAuthorized)
    const items = useSelector((state) => state.basket.items)
    const [animationClass, setAnimationClass] = useState('')
    const themeMode = useSelector((state) => state.ui.themeMode)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBasket())
    }, [dispatch])

    const calculateTotalAmount = () => {
        const sum = items.reduce((s, item) => {
            return s + item.amount
        }, 0)

        return sum
    }

    useEffect(() => {
        setAnimationClass('bump')

        const id = setTimeout(() => {
            setAnimationClass('')
        }, 300)

        return () => {
            clearTimeout(id)
        }
    }, [items])

    const themeChangeHandler = () => {
        const theme = themeMode === 'light' ? 'dark' : 'light'

        dispatch(uiActions.changeTheme(theme))
    }
    const signOutHandler = () => {
        dispatch(signOut())
        navigate('/signin')
    }

    const showBasketHandler = () => {
        if (!isAuthorized) {
            return showAuthModal(true)
        }
        return onShowBasket()
    }

    const goToOrderPageHandler = () => {
        if (!isAuthorized) {
            return showAuthModal(true)
        }
        return navigate('/my-order')
    }
    return (
        <Container>
            <Link to="/">
                <Logo>ReactMeals</Logo>
            </Link>
            <BasketButton
                className={animationClass}
                onClick={showBasketHandler}
                count={calculateTotalAmount()}
            />
            <StyledButton onClick={goToOrderPageHandler}>
                My Orders
            </StyledButton>
            <StyledButton onClick={themeChangeHandler}>
                {themeMode === 'light' ? 'Turn Dark mode' : 'Turn light mode'}
            </StyledButton>
            {isAuthorized ? (
                <StyledButton onClick={signOutHandler}>sign Out</StyledButton>
            ) : (
                <StyledButton onClick={() => navigate('/signin')}>
                    sign In
                </StyledButton>
            )}
        </Container>
    )
}

export default Header

const Container = styled('header')(({ theme }) => ({
    position: 'fixed',
    top: 0,
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    height: '6.3125rem',
    backgroundColor: theme.palette.primary.light,
    padding: '0 7.5rem',
    alignItems: 'center',
    zIndex: 1,
}))

const Logo = styled('p')(() => ({
    fontWeight: 600,
    fontSize: '2.375rem',
    lineHeight: '3.5625rem',
    color: '#ffffff',
    margin: 0,
}))

const StyledButton = styled(Button)(({ theme }) => ({
    background: theme.palette.primary.main,
    color: '#FFF',
    padding: '12px 3rem',
    gap: '2rem',
    '&:hover': {
        backgroundColor: theme.palette.primary.main,
    },
}))

import { useCallback, useState } from 'react'
import { Outlet } from 'react-router'
import styled from 'styled-components'
import Basket from '../components/basket/Basket'
import Header from '../components/header/Header'

export const UserLayout = () => {
    const [isBasketVisible, setBasketVisible] = useState(false)

    const showBasketHandler = useCallback(() => {
        setBasketVisible((prevState) => !prevState)
    }, [])
    return (
        <>
            <Header onShowBasket={showBasketHandler} />
            <Basket onClose={showBasketHandler} open={isBasketVisible} />
            <Content>
                <Outlet />
            </Content>
        </>
    )
}
const Content = styled.div`
    margin-top: 101px;
`

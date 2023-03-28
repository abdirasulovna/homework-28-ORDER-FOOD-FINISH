/* eslint-disable prettier/prettier */
import { useSelector } from 'react-redux'
import { Route, Routes } from 'react-router'
import { AdminLayout } from '../layout/AdminLayout'
import { UserLayout } from '../layout/UserLayout'
import { UserRoles } from '../lib/constants/common'
import { MealsPage } from '../pages/user/MealsPage'
import { SignInPage } from '../pages/guest/SignIn'
import { SignUpPage } from '../pages/guest/SignUp'
import { ProtectedRouter } from './ProtectedRoute'
import AdminMeals from '../pages/admin/AdminMeals.page'
import OrdersTable from '../pages/admin/Orders.page'

export const AppRoutes = () => {
    const role = useSelector((state) => state.auth.user.role)

    const isAllowed = (roles) => {
        return roles.includes(role)
    }
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <ProtectedRouter
                        isAllowed={isAllowed([UserRoles.GUEST, UserRoles.USER])}
                        fallBackPath="/admin/meals"
                        component={UserLayout}
                    />
                }
            >
                <Route
                    index
                    element={
                        <ProtectedRouter
                            isAllowed={isAllowed([
                                UserRoles.GUEST,
                                UserRoles.USER,
                            ])}
                            fallBackPath="/admin/meals"
                            component={MealsPage}
                        />
                    }
                />
                <Route
                    path="signup"
                    element={
                        <ProtectedRouter
                            isAllowed={isAllowed([
                                UserRoles.GUEST,
                                UserRoles.USER,
                            ])}
                            fallBackPath={
                                role === UserRoles.ADMIN ? '/admin/meals' : '/'
                            }
                            component={SignUpPage}
                        />
                    }
                />
                <Route
                    path="signin"
                    element={
                        <ProtectedRouter
                            isAllowed={isAllowed([
                                UserRoles.GUEST,
                                UserRoles.USER,
                            ])}
                            fallBackPath={
                                role === UserRoles.ADMIN ? '/admin/meals' : '/'
                            }
                            component={SignInPage}
                        />
                    }
                />
            </Route>
            <Route
                path="/admin"
                element={
                    <ProtectedRouter
                        isAllowed={isAllowed([UserRoles.ADMIN])}
                        fallBackPath="/"
                        component={AdminLayout}
                    />
                }
            >
                <Route
                    path="meals"
                    element={
                        <ProtectedRouter
                            isAllowed={isAllowed([UserRoles.ADMIN])}
                            fallBackPath="/"
                            component={AdminMeals}
                        />
                    }
                />
                <Route
                    path="orders"
                    element={
                        <ProtectedRouter
                            isAllowed={isAllowed([UserRoles.ADMIN])}
                            fallBackPath="/"
                            component={OrdersTable}
                        />
                    }
                />
            </Route>
            <Route path="*" element={<p>Not Found Page</p>} />
        </Routes>
    )
}

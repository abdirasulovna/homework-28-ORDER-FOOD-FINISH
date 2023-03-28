import { Navigate } from 'react-router'

export const ProtectedRouter = ({
    component: Component,
    fallBackPath,
    isAllowed,
}) => {
    if (!isAllowed) {
        return <Navigate to={fallBackPath} />
    }
    return <Component />
}

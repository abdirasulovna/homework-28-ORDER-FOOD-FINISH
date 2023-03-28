import { Grid } from '@mui/material'
import { Outlet } from 'react-router'
import { AdminHeader } from '../components/header/admin-header/AdminHeader'

export const AdminLayout = () => {
    return (
        <>
            <AdminHeader />
            <Grid sx={{ backgroundColor: '#FFF' }}>
                <Outlet />
            </Grid>
        </>
    )
}

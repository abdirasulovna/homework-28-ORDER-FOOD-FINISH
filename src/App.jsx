import { createTheme, ThemeProvider } from '@mui/material'
import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import './App.css'
import Snackbar from './components/UI/Snackbar'
import { darkTheme, lightTheme } from './lib/constants/theme'
import { AppRoutes } from './routes/Routes'
import { uiActions } from './store/ui/uiSlice'

function AppContent() {
    const dispatch = useDispatch()

    const snackbar = useSelector((state) => state.ui.snackbar)

    const themeMode = useSelector((state) => state.ui.themeMode)

    const theme = useMemo(() => {
        const currentTheme =
            themeMode === 'light' ? { ...lightTheme } : { ...darkTheme }

        return createTheme(currentTheme)
    }, [themeMode])

    const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  /* background-color: ${theme.palette.primary.dark}; */
}
`

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <Snackbar
                    isOpen={snackbar.isOpen}
                    severity={snackbar.severity}
                    message={snackbar.message}
                    autoHideDuration={4000}
                    onClose={() => dispatch(uiActions.closeSnackbar())}
                />
                <GlobalStyle />
                <AppRoutes />
            </ThemeProvider>
        </div>
    )
}

const App = () => {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    )
}
export default App

// const Content = styled.div`
//   margin-top: 101px;
// `;

// GET /foods
// Headers: { UserID: "your_name"  }

// GET /basket
// Headers: { UserID: "your_name"  }

// POST /foods/:foodId/addToBasket
// BODY: { amount: number }

// Headers: { UserID: "your_name"  }

// DELETE /basketItem/:id/delete
// Headers: { UserID: "your_name"  }

// PUT /basketItem/:id/update
// BODY: { amount: number }

// Headers: { UserID: "your_name"  }

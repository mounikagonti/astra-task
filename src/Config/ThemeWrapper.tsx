import {FC, useLayoutEffect} from 'react'
import {RouterProvider} from 'react-router-dom'
import {ThemeProvider} from 'styled-components'
import {useDispatch, useSelector} from 'react-redux'
import {AppDispatch, RootState} from '../Redux/store'

// Configs
import { router } from './routerConfig'

// Redux slice for theme
import {fetchInitialTheme} from '../Redux/Slices/themeSlice'

// Styles
import {GlobalStyle} from '../Styles/globalStyles'
import {darkTheme, lightTheme} from '../Styles/theme'


const ThemeWrapper: FC = () => {
  const dispatch: AppDispatch = useDispatch()
  const {mode} = useSelector((state: RootState) => state.theme)
  const currentTheme = mode === 'light' ? lightTheme : darkTheme

  useLayoutEffect(() => {
    dispatch(fetchInitialTheme())
  }, [dispatch])

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle theme={currentTheme} />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default ThemeWrapper

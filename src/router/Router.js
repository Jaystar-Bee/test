import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./../components/Header"
import CounterPage from "./../pages/CounterPage"
import classes from './Router.module.css'

const ReducerPage = React.lazy(() => import('./../pages/ReducerPage.jsx'))
const ErrorPage = React.lazy(() => import('./../pages/ErrorPage.jsx'))


const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<CounterPage />} />
                <Route path='/reducer' element={
                    <React.Suspense fallback={<p className={classes.center}>loading..</p>}>
                        <ReducerPage />
                    </React.Suspense>
                } />
                <Route path='*' element={
                    <React.Suspense fallback={<p className={classes.center}>loading..</p>}>
                        <ErrorPage />
                    </React.Suspense>
                } />
            </Routes>
        </BrowserRouter>
    )
}

export default Router

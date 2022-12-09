import React from 'react'
import Head from "next/head"
import Appbar from './Appbar'
import Footer from './Footer'

const Layout = (props: PropTypes) => {
    return (
        <>
            
            <Appbar />
            <main>{props.children}</main>
            <Footer />
        </>
    )
}

interface PropTypes {
    children: React.ReactNode
}

export default Layout
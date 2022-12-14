import React from 'react'
import Appbar from './Appbar'
import Footer from './Footer'

const Layout = (props: PropTypes) => {
    return (
        <>
            <Appbar />
            <main className="pb-[100px]">{props.children}</main>
            <Footer />
        </>
    )
}

interface PropTypes {
    children: React.ReactNode
}

export default Layout
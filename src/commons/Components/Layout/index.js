import React from 'react';
import Header from "../Header";
import Footer from "../Footer";
import {
    Container
}               from "reactstrap";

export default function Layout({
    children
}) {
    return (
        <>
            <Header/>
            <main>
                <Container className="mt-5 pt-3">
                    {children}
                </Container>
            </main>
            <Footer/>
        </>
    )
}

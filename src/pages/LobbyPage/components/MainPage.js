import React from 'react'
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

const mainPage = () => {
    return(
        <Container maxWidth="xg" component="main" style={{ backgroundColor: "darkgray", height: "100vh", width: "100vw" }} className={classes.heroContent}>
            <div>
                <h1>
                    olá
                </h1>
            </div>
        </Container>
    )
}

export default mainPage;
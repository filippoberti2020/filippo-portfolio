import Head from 'next/head'
import {Box, Container} from '@chakra-ui/react'
import Navbar from '../navbar.js'
import Footer from '../footer'


const Main = ({children, router})=>{
    return(
        <Box as="main" pb={8}>
            <Head>
                <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Filippo's homepage" />
                <meta name="author" content="Filippo Berti" />
                <title>Filippo Berti - Homepage</title> 
            </Head>
            <Navbar path={router.asPath} />
            <Container maxW="container.md" pt={14}>
                {children}
                <Footer />
            </Container>
        </Box>
    )
}

export default Main
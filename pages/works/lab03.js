import {Container ,Badge,Link,List,ListItem, useColorModeValue } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {Title, WorkImage, Meta} from '../../components/work'

import Layout from '../../components/layout/article'



const Work=() => {
    return(
        <Layout title="LAB03">
            <Container>
                <Title>
                    LAB03 <Badge>2023</Badge>
                </Title>
                <p>
                A website created for a premium car detailing business.
                </p>
                <List ml={4} my={4}>
                <ListItem > 
                <Meta >Website</Meta>
                <Link href="https://confidence-march-906887.framer.app/" >
                https://www.lab03.com<ExternalLinkIcon mx="2px" />  
                </Link>  
                </ListItem>
                <ListItem > 
                <Meta >Platform</Meta>
                <spam>Web</spam>
                </ListItem>  
                <ListItem > 
                <Meta >Stack</Meta>
                <spam>Framer</spam>
                </ListItem>
                </List>   
                <WorkImage src="/images/works/lab03-car-detailing-fullpage.png" alt="LAB03 car detailing website" />
            </Container>
        </Layout>
    )
}
export default Work
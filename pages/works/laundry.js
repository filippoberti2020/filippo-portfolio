import {Container ,Badge,Link,List,ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {Title, WorkImage, Meta} from '../../components/work'

import Layout from '../../components/layout/article'



const Work=() => {
    return(
        <Layout title="Laundry">
            <Container>
                <Title>
                    Laundry <Badge>2022</Badge>
                </Title>
                <p>
                A simple website created for a local laundry business shop.
                </p>
                <List ml={4} my={4}>
                <ListItem > 
                <Meta >Platform</Meta>
                <spam>Web</spam>
                </ListItem>  
                <ListItem > 
                <Meta >Stack</Meta>
                <spam>React</spam>
                </ListItem>
                </List>   
                <WorkImage src="/images/works/laundry-fullpage.png" alt="Biodental dentist website" />
            </Container>
        </Layout>
    )
}
export default Work
import {Container ,Badge,Link,List,ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {Title, WorkImage, Meta} from '../../components/work'

import Layout from '../../components/layout/article'



const Work=() => {
    return(
        <Layout title="Printera">
            <Container>
                <Title>
                    Printera <Badge>2022</Badge>
                </Title>
                <p>
                A mobile application to manage 3D printer filament inventory.
                </p>
                <List ml={4} my={4}>
                <ListItem > 
                <Meta >Platform</Meta>
                <spam>Mobile</spam>
                </ListItem>  
                <ListItem > 
                <Meta >Stack</Meta>
                <spam>React Native, NodeJS</spam>
                </ListItem>
                </List>   
                <WorkImage src="/images/works/printera.png" alt="Printera mobile app" />
            </Container>
        </Layout>
    )
}
export default Work
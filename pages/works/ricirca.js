import {Container ,Badge,Link,List,ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {Title, WorkImage, Meta} from '../../components/work'

import Layout from '../../components/layout/article'



const Work=() => {
    return(
        <Layout title="Ricirca">
            <Container>
                <Title>
                    Ricirca <Badge>2022</Badge>
                </Title>
                <p>
                An e-commerce website for products and furniture of a design studio.
                </p>
                <List ml={4} my={4}>
                <ListItem > 
                <Meta >Platform</Meta>
                <spam>Web</spam>
                </ListItem>  
                <ListItem > 
                <Meta >Stack</Meta>
                <spam>React.js, Commerce.js, Stripe</spam>
                </ListItem>
                </List>   
                <WorkImage src="/images/works/ricirca-fullpage.png" alt="Ricirca e-commerce website" />
            </Container>
        </Layout>
    )
}
export default Work
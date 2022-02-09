import {Container ,Badge,Link,List,ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {Title, WorkImage, Meta} from '../../components/work'

import Layout from '../../components/layout/article'



const Work=() => {
    return(
        <Layout title="Biodental">
            <Container>
                <Title>
                    Biodental <Badge>2020</Badge>
                </Title>
                <p>
                A site created and designed from scratch for the specific requirements of a medical dentist office.
                </p>
                <List ml={4} my={4}>
                <ListItem > 
                <Meta >Website</Meta>
                <Link href="https://www.biodental-portogruaro.it" >
                https://www.biodental-portogruaro.it<ExternalLinkIcon mx="2px" />  
                </Link>  
                </ListItem>
                <ListItem > 
                <Meta >Platform</Meta>
                <spam>Web</spam>
                </ListItem>  
                <ListItem > 
                <Meta >Stack</Meta>
                <spam>Html, Css, Javascript</spam>
                </ListItem>
                </List>   
                <WorkImage src="/images/works/biodental.png" alt="Biodental" />
            </Container>
        </Layout>
    )
}
export default Work
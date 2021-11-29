import {Container ,Badge,Link,List,ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {Title, WorkImage, Meta} from '../../components/work'

import Layout from '../../components/layout/article'



const Work=() => {
    return(
        <Layout title="Product Render">
            <Container>
                <Title>
                Product Render and animations <Badge>2019</Badge>
                </Title>
                <p>
                Image and video render of a real product. The objects were remade from scratch and then the textures were created.
                </p>
                <List ml={4} my={4}>
               
                <ListItem > 
                <Meta >Software</Meta>
                <spam>Blender</spam>
                </ListItem>  
               
                </List>   
                <WorkImage src="/images/works/blenderrender.png" alt="Biodental" />
            </Container>
        </Layout>
    )
}
export default Work
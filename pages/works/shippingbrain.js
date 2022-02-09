import {Container ,Badge,Link,List,ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {Title, WorkImage, Meta} from '../../components/work'

import Layout from '../../components/layout/article'



const Work=() => {
    return(
        <Layout title="Shipping Brain">
            <Container>
                <Title>
                Shipping Brain <Badge>2020</Badge>
                </Title>
                <p>
                Website designed and created from scratch for a company that manages shipments. 
                Shipping Brain allows the customer to track the shipment and always know its status. 
                Each shipment has a barcode which is used by the courier for delivery information.
                </p>
                <List ml={4} my={4}>
                <ListItem > 
                <Meta >Website</Meta>
                <Link href="https://www.github.com/filippo2020" >
                https://www.github.com/filippo2020<ExternalLinkIcon mx="2px" />  
                </Link>  
                </ListItem>
                <ListItem > 
                <Meta >Platform</Meta>
                <spam>Web</spam>
                </ListItem>  
                <ListItem > 
                <Meta >Stack</Meta>
                <spam> Php, Sql, Html, Css, Javascript</spam>
                </ListItem>
                </List>   
                <WorkImage src="/images/works/shippingBrain2.jpg" alt="ShippingBrain" />
            </Container>
        </Layout>
    )
}
export default Work
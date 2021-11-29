import {Container ,Badge,Link,List,ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import {Title, WorkImage, Meta} from '../../components/work'

import Layout from '../../components/layout/article'



const Work=() => {
    return(
        <Layout title="SmarTimer">
            <Container>
                <Title>
                    SmarTimer <Badge>2020</Badge>
                </Title>
                <p>
                An app designed for the relaxation of high-level athletes. Includes various types of timers with sound warnings and visual animations aimed at performance.
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
                <spam>Android</spam>
                </ListItem>  
                <ListItem > 
                <Meta >Stack</Meta>
                <spam>Java</spam>
                </ListItem>
                </List>   
                <WorkImage src="/images/works/timerapp.png" alt="smarTimer" />
            </Container>
        </Layout>
    )
}
export default Work
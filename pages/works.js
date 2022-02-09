import {Container,  Heading, SimpleGrid, Divider} from '@chakra-ui/react'
import Layout from '../components/layout/article'
import Section from '../components/section'
import {WorkGridItem} from '../components/grid-item'
import thumbBiodental from '../public/images/works/biodental.png'
import thumbTimerApp from '../public/images/works/timerapp.png'
import thumbBlederReder from '../public/images/works/blenderrender.png'
import thumbShippingBrain from '../public/images/works/shippingBrain.jpg'
const Works =()=>{
    return(
        <Layout title="Works">
        <Container>
            <Heading as="h3" fontSize={20} mb={4} >
                Works
            </Heading>
            <SimpleGrid  columns={[1,1,2]} gap={6}>
            <Section>
            <WorkGridItem id="biodental" title="Biodental" thumbnail={thumbBiodental}>
            Website designed and created for a medical dentist office.
            </WorkGridItem>
            </Section>
            <Section>
            <WorkGridItem id="smartimer" title="SmarTimer" thumbnail={thumbTimerApp}>
            An app designed for the relaxation of high-level athletes. 
            </WorkGridItem>
            </Section>
            <Section delay={0.1}>
            <WorkGridItem id="shippingbrain" title="Shipping Brain" thumbnail={thumbShippingBrain}>
            Website designed and created for a company that manages shipments.
            </WorkGridItem>
            </Section>
            <Section delay={0.1}>
            <WorkGridItem id="productrender" title="Product Render" thumbnail={thumbBlederReder}>
            Image and video render of a real product for a client.
            </WorkGridItem>
            </Section>
            </SimpleGrid>
            
            <Divider my={6} />
        </Container>
        </Layout>
    )
}

export default Works
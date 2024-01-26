import {Container,  Heading, SimpleGrid, Divider} from '@chakra-ui/react'
import Layout from '../components/layout/article'
import Section from '../components/section'
import {WorkGridItem} from '../components/grid-item'
import thumbBiodental from '../public/images/works/biodental.png'
import thumbTimerApp from '../public/images/works/timerapp.png'
import thumbBlederReder from '../public/images/works/blenderrender.png'
import thumbShippingBrain from '../public/images/works/shippingBrain.jpg'
import thumbLAB03 from '../public/images/works/lab03-car-detailing.png'
import thumblaundry from '../public/images/works/laundry.png'
import thumbprintera from '../public/images/works/printera.png'
import thumbricirca from '../public/images/works/ricirca.png'
const Works =()=>{
    return(
        <Layout title="Works">
        <Container>
            <Heading as="h3" fontSize={20} mb={4} >
                Works
            </Heading>
            <SimpleGrid  columns={[1,1,2]} gap={6}>
            <Section>
            <WorkGridItem id="lab03" title="LAB03" thumbnail={thumbLAB03}>
            A website created for a premium car detailing business.
            </WorkGridItem>
            </Section>
            <Section>
            <WorkGridItem id="ricirca" title="Ricirca" thumbnail={thumbricirca}>
            An e-commerce website for products and furniture of a design studio.
            </WorkGridItem>
            </Section>
            <Section>
            <WorkGridItem id="printera" title="Printera" thumbnail={thumbprintera}>
            A mobile application to manage 3D printer filament inventory.
            </WorkGridItem>
            </Section>
            <Section>
            <WorkGridItem id="laundry" title="Laundry" thumbnail={thumblaundry}>
            A simple website created for a local laundry business shop.
            </WorkGridItem>
            </Section>
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
import NextLink from 'next/link'
import {Container, Box , Text, Heading, Image, Link, List, ListItem, Button, Icon, useColorModeValue, color } from '@chakra-ui/react'
import Paragraph from '../components/paragrapth'
import {BioSection, BioYear} from '../components/bio'
import {IoLogoGithub, IoMailOutline} from 'react-icons/io5'
import Layout from '../components/layout/article'
import { ChevronRightIcon } from '@chakra-ui/icons'
const Page= () =>{
   
    return (
      
        <Layout>
        
        <Container >
             <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')} p={3} mb={6} align="center" mt={50}>
                Hello, I&apos;m Filippo Berti. 
                I&apos;m a <Text as="u" color="yellow.500">web</Text> and <Text as="u" color="red.600">full-stack</Text> developer based in Italy!       
            </Box>
            
            <Box display={{ md: 'flex' }}>
            <Box  flexGrow={1} >
            <Heading as="h2" variant="page-title" >
               Filippo Berti
            </Heading>
            <p>Digital Native ( Maker / Developer / Designer )</p>
            </Box> 
            <Box flexShrink={0} mt={{base: 4 , md: 0}} ml={{md: 6}} textAlign="center"> 
            <Image  borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/filip.jpg"
            alt="Profile Image" /> 
           
            </Box>
            </Box>
            <Box id="work" delay={0.1}  >
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                    <Paragraph>Filippo is a junior web and full-stack developer  with the spirit of code mastery.  
                    He has a knack for everything to do with learning, from planning and design to solving real problems with code. 
                    When not online, she loves to develop practical solutions but without giving up design to solve her personal problems and needs. 
                    He also work to his agency that help business to create website and offer other services.</Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button  _hover={{ bg: "#5A200A" }} _focus={{ bg: "#5A200A" }} rightIcon={<ChevronRightIcon />} colorScheme="#1A365D80" color="#0f0f0f" backgroundColor="#954144">
                            My portfolio
                            </Button>
                        </NextLink>
                    </Box>
            </Box>
            <Box id="bio" delay={0.2} >
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                    <BioSection>
                        <BioYear>2002</BioYear>
                        Born in Italy.
                    </BioSection> 
                    <BioSection>
                        <BioYear>2019</BioYear>
                        CISCO IT Essentials Course Certificate
                    </BioSection>   
                    <BioSection>
                        <BioYear>2021</BioYear>
                        Graduated in Computer Science at I.T.S.T Kennedy High School, Pordenone, Italy.
                    </BioSection>    
                    <BioSection>
                        <BioYear>2022</BioYear>
                        Working as a freelancer   
                    </BioSection>   

                       
            </Box>
            <Box id="bio" delay={0.2}  >
                <Heading as="h3" variant="section-title">
                I ♡ 
                </Heading>
                <Paragraph>Cycling, Reading, Nature, Plants, 3D Printing, Linux, Open Source Software, Self-Hosted Applications.</Paragraph>     
            </Box>
            <Box id="contact" delay={0.3} >
                <Heading as="h3" variant="section-title">
                    Contact
                </Heading>
                    <List>
                        <ListItem>
                            <Link href="mailto:bertifilippo2002@gmail.com" target="_blank" color="#954144">
                            <Button variant="ghost" colorScheme="blue.700" leftIcon={<Icon as={IoMailOutline} />}>filippoberti57@gmail.com</Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://github.com/filippoberti2020" target="_blank"  color="#954144">
                            <Button variant="ghost" colorScheme="blue.700" leftIcon={<Icon as={IoLogoGithub} />}>@filippoberti2020</Button>
                            </Link>
                        </ListItem>
                    
                    </List> 
            </Box>         
            
         
        </Container>
        </Layout>
    )
}

export default Page
import { Text, useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'



 
const Logo=() =>{
    
     return (
        <Link href="/">
        <a>
        <div>
           
            
            <Text

            color={useColorModeValue('Black', 'white')}
            fontFamily='IBM Plex Sans'
            fontWeight="bold"
            ml={3}
          >

          Filippo Berti</Text>
        </div>
        </a>
        </Link>
    )
}

export default Logo






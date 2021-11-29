import { Text, useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'



 
const Logo=() =>{
    
     return (
        <Link href="/">
        <a>
        <div class="don">
            <div class="clock">
                <div class="clock-inner" >
                    <div  class="clock-center"></div>
                    <div class="hand second"></div>
                    <div class="hand minute" ></div>
                    <div class="hand hour"></div>
                </div>
            </div>
            
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






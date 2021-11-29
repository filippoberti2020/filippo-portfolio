import {extendTheme}  from '@chakra-ui/react'
import {mode} from '@chakra-ui/theme-tools'


const styles={
    global:props =>({
        body: {
            bg: mode('#F9FAFB','#0f0f0f')(props)
        }
    })
}

const components={
    Heading:{
        variants: {
            'section-title':{
                textDecoration: 'underline',
                fontSize:20,
                textUnderlineOffset:6,
                textDecorationColor: '#525252',
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4
            }
        }
    },
    Link: {
        baseStyle: props =>({
            color: mode('#3d7aed','blue.700')(props),
            textUnderlineOffset:3
        })
    }
}

const fonts={
    heading: "'IBM Plex Sans'"

}
const colors={
    glassTeal: '#88ccca'
    
}
const config = {
    initialColorMode: 'dark',
    useSystemColorMode: true
  }

const theme = extendTheme({
    config, styles, components, fonts, colors
})

export default theme
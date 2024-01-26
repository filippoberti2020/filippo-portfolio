import {extendTheme}  from '@chakra-ui/react'
import {mode} from '@chakra-ui/theme-tools'


const styles={
    global:props =>({
        body: {
            bg: mode('#E6E5DD','#202023')(props)
        },

    })
}

const components={
    Heading:{
        variants: {
            'section-title':{
                textDecoration: 'underline',
                fontSize:20,
                textUnderlineOffset:6,
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4
            },     
        }
    },
    Link: {
        baseStyle: props =>({
            color: mode('#3d7aed', '#ff63c3')(props),
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
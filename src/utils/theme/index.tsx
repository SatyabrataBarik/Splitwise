import { createTheme } from "@shopify/restyle"

const palette={
    DarkGrey:'#666666',
    WhiteGrey:'#e3e3e3',
    Lightgreen:'#5ac5a7',
    midiumGreen:'#3ecaad'

}
const theme=createTheme({
    colors:{
         loginBG:palette.DarkGrey,
         loginText:palette.WhiteGrey,
         signUpBg:palette.Lightgreen,
         landingBg:palette.midiumGreen

         
    },
    spacing:{
        s: 8,
		m: 16,
		l: 24,
		xl: 40
    },
   
})
export type ThemeType = typeof theme;
export { theme };
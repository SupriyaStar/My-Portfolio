tailwind.config={
    theme:{
        extend:{
            gridTemplatesColumns:{
                'auto':'repeat(auto-fit,minmax(200px,1fr))'
            },
        fontFamily:{
                Outfit:["Outfit", " sans-serif"],
                Ovo:[ "Ovo", "serif"],
        },
        colors:{
            lightHover:'#fcf4ff',
            darkHover:'#1f4cd1',
            darkTheme:'#11001F',
        },
        boxShadow:{
            'black1':'4px 4px 0 #000',
            'white1':'4px 4px 0 #fff',
        }
        }
           
      
    },
    darkMode: 'selector'
}
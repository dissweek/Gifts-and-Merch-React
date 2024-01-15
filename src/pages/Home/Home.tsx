import React from 'react'
import {MainBanner,Popular,Creative,Idea,Partners,} from '../../components'

const Home:React.FC = ()=> {

    return (<>
    
    <main className="main">
        <MainBanner />
        <Popular />
        <Creative />
        <Idea />
        <Partners />
    </main>
    </>)
}

export default Home
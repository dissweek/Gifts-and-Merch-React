import React from 'react'
import MainBanner from '../../components/MainBanner/MainBanner'
import Popular from '../../components/Popular/Popular'
import Creative from '../../components/Creaative/Creative'
import Idea from '../../components/Idea/Idea'
import Partners from '../../components/Partners/Partners'

function Home() {

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
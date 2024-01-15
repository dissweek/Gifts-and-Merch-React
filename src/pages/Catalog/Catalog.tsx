import React from 'react'
import {MainBanner,Idea,SectionCatalog} from '../../components'

const Catalog:React.FC = () => {
    return (<>
    
    <main className="main">
        <MainBanner />
        <SectionCatalog />
        <Idea />
    </main>
    </>)
}

export default Catalog
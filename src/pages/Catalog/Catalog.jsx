import React from 'react'
import MainBanner from '../../components/MainBanner/MainBanner'
import Idea from '../../components/Idea/Idea'
import SectionCatalog from '../../components/Catalog/sectionCatalog'

function Catalog() {
    return (<>
    
    <main className="main">
        <MainBanner />
        <SectionCatalog />
        <Idea />
    </main>
    </>)
}

export default Catalog
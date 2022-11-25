import React from 'react';
import Banner from './Banner/Banner'
import Categories from './Categories/Categories';
import InfoSection from './InfoSection/InfoSection';

const Home = () => {
    return (
        <div>
            <section className='mb-3'>
                <Banner></Banner>
                
            </section>
            <section>
                <InfoSection></InfoSection>

            </section>
            <section>
                <Categories></Categories>
            </section>
            
            
        </div>
    );
};

export default Home;
import {useEffect} from 'react';

import ExperienceLayout from '../layouts/ExperienceLayout.jsx';

export default function Experience() {
    useEffect(() => {
        document.title = 'Experiences - Cudiamat';
    }, []);

    const carouselItems = [

    ];

    const carousel = () => {
        return(
            <div id={'carousel'} className={'carousel slide'}>
                <div className={'carousel-inner'}>
                    {/*{*/}
                    {/*    carouselItems.map((item, index) => {*/}
                    {/*        return (*/}

                    {/*        );*/}
                    {/*    })*/}
                    {/*}*/}

                    <div className={'carousel-item active'}>
                        <img src='...' className='d-block w-100' alt='...'/>
                    </div>
                    <div className={'carousel-item'}>

                    </div>
                    <div className={'carousel-item'}>

                    </div>
                </div>
            </div>
        );
    }

    return (
        <ExperienceLayout
            content={ carousel }
        />
    );
}
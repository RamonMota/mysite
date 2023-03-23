import { useState, useEffect } from 'react';
import TextLoop from "react-text-loop";

import itsMe from '../../assets/img/i.png'
import './home.scss'
import { CardItem } from '../../components/card/card-item';
import img from '../../assets/img/imgTest.jpg'
import { FooterSocial } from '../../components/footer-social/footer-social';
import { useSizeScreen } from '../../hooks/height-screen';
import { Paths } from '../../config/paths/path';
import { Box, Button } from '@chakra-ui/react';

export const Home = () => {

    const [opacity, setOpacity] = useState(1);
    const screenSize = useSizeScreen()
    const goToCases = () => window.scrollTo({ top: screenSize.heightScreen, behavior: 'smooth' })

    useEffect(() => {
        const handleScroll = () => {
            const distanceFromTop = window.pageYOffset || document.documentElement.scrollTop;
            const newOpacity = distanceFromTop > 150 ? 0 : 1 - (distanceFromTop / 150);

            setOpacity(newOpacity);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='container-home' >
            <Box className='container-full-height' p='1rem' h='100vh' w='100%' position='relative'>
                <Box className='box-info' position='relative' pb='12'>
                    <img src={itsMe} alt="it's Me!" />
                    <span>Hey, i’m</span>
                    <h1>Ramon Mota</h1>
                    <TextLoop springConfig={{ stiffness: 180, damping: 12 }}>
                        <h2>Front End Developer</h2>
                        <h2>Illustrator</h2>
                        <h2>UI/UX Designer</h2>
                    </TextLoop>
                    <FooterSocial />
                </Box>
                <Button bg='none !important'
                    color='#fff'
                    borderRadius={8}
                    fontWeight={400}
                    position='fixed'
                    bottom='1rem'
                    right='1rem'
                    onClick={goToCases}
                    opacity={opacity}
                    display={opacity === 0 ? 'none' : ''}
                >Cases</Button>
            </Box>
            <Box p='1rem' w='100%'>
                <h2 className='title-section'>Case studies</h2>
                <span className='subtitle-section'>Selected projects</span>
                <div className='container-cards'>
                    <CardItem
                        uiux={true}
                        illustrator={true}
                        frontend={true}
                        new={false}
                        date={'2002'}
                        name={'E-commerce sebrae dolor sit amet consectetur adipiscing elitPP'}
                        image={img}
                        router={Paths.CASES_WELCOME_VAIDEBET} />
                </div>
            </Box>
        </div>
    )
}
import hero from '../../assets/hero.png';
import { Description, Image, ImageWrapper, MainPageWrapper } from './Home.styled';

const HomePage = () => {
    return (
        <MainPageWrapper>
            <h1 className='hidden'>CarRent description</h1>
            <ImageWrapper><Image src={hero} alt='main page picture of easy car deal'/></ImageWrapper>
            <Description>Welcome to our <span>Rental Car Hub!</span> Discover a world of convenience and choice with our user-friendly website. Browse and book from a wide selection of rental cars for your every need. Whether you&#x27;re planning a road trip, a business journey, or just need a temporary ride, we&#x27;ve got you covered. 
                <p><span>Enjoy</span> competitive rates, diverse vehicle options, and seamless reservations &#x2011; all in one place. Your adventure begins here!</p>
            </Description>
        </MainPageWrapper>
    )
}

export default HomePage;
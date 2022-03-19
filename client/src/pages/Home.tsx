import { Container } from '@mui/material';



function Home() {
    let w = window.innerWidth;
    let h = window.innerHeight;
    return (
        <Container
            sx={{
                height: '100vh',
                minWidth: '100vw',
                background: `url(https://source.unsplash.com/random/${w}x${h}?dating)no-repeat center center/cover`,
            }}
        ></Container>
    );
}
export default Home;

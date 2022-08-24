import styled from '@emotion/styled';
import { Login } from '../../components';

const All = styled.div`
    background-color: white;
`;

const Borders = styled.div`
    gap: 1rem;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    background-image: linear-gradient(to right bottom, rgba(109, 37, 37, 0.8), rgba(76, 0, 200, 0.8)),
        url(./img/virus.jpg);

    background-size: 100%;

    background-position: top;

    clip-path: polygon(0 0, 100% 0, 90% 90%, 20% 100%, 0 100%);

    @media (max-width: 700px) {
    }
`;

const TitleConstainer = styled.div`
    position: absolute;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    text-align: center;
`;

const Title = styled.div`
    font-family: 'Comic Sans';
    font-weight: bold;
    font-size: 5vh;
    width: 50vw;
    text-transform: uppercase;
    letter-spacing: 1ch;

    animation: moveinleft 1.5s ease-in-out, 0.5s zoomin 1.5s ease-in-out;
    backface-visibility: hidden;

    @keyframes moveinleft {
        0% {
            opacity: 0;
            transform: translateX(-5vh) rotate3d(-50deg);
            scale: 0;
        }

        10% {
            opacity: 0.1;
            scale: 0.2;
        }

        100% {
            opacity: 1;
            scale: 0.5;
            transform: translateX(0) rotate(360deg);
        }
    }

    @keyframes zoomin {
        0% {
            transform: scale(0.5);
        }

        100% {
            transform: scale(1);
        }
    }
`;

const SubTitle = styled(Title)`
    font-weight: lighter;
    letter-spacing: 1mm;
    font-size: 4vh;
    text-transform: capitalize;
    animation: moveinright 1s ease-in-out;

    @keyframes moveinright {
        0% {
            opacity: 0;
            transform: translateX(2vh);
        }

        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;

const Konon = styled.div`
    position: relative;
    top: -25vh;
    //left: 50vw;
    //transform: translateX(-50%);
`;

const KononImg = styled.img`
    height: 10vh;
    backface-visibility: hidden;
    content: url(./img/konon.png);

    animation: circle 1s ease-in-out;

    :hover {
        animation: hoveranimation 1s infinite ease-in-out;
    }

    @keyframes circle {
        0% {
            transform: translate(0, 0);
        }

        25% {
            transform: translate(5vw, 5vh);
        }

        50% {
            transform: translate(0, 10vh);
        }

        75% {
            transform: translate(-5vw, 5vh);
        }

        100% {
            transform: translate(0, 0);
        }
    }

    @keyframes hoveranimation {
        0% {
            opacity: 1;
            transform: scale(1, 1);
            rotate: 0deg;
        }

        40% {
            opacity: 0.7;
            transform: scale(1.5, 1.5);
        }

        80% {
            opacity: 1;
            transform: scale(1, 1);
            rotate: 360deg;
        }

        100% {
            opacity: 1;
            transform: scale(1, 1);
            rotate: 360deg;
        }
    }
`;

const KononButton = styled.button`
    width: 8vw;
    font-size: 3vh;
    text-align: center;
    border-width: 0vh;
    background-color: #888888;
    margin: 2em;
    border-radius: 1rem;
    transition: all 0.1s;
    color: rgb(0, 0, 0);
    position: relative;

    :hover {
        background-color: #5e5e5e;
        transform: translate(0, -0.1em);
        transition: all 0.2s;
        text-shadow: 0 10px 20px;
        box-shadow: 0 10px 20px rgba(1, 1, 1, 0.5);
    }

    :active {
        background-color: #333333;
        transform: translate(0, 0em);
        transition: all 0.2s;
    }

    :visited {
        background-color: #0033ff !important;
        transition: all 0.2s;
    }

    :link {
        transition: all 0.2s;
    }

    ::after {
        content: '';
        display: inline-block;
        height: 100%;
        width: 100%;
        border-radius: 1rem;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }

    :hover::after {
        transform: scale(2);
        z-index: 2;
        color: white;
        transition: all 0.2s;
    }
`;

const Bitch = styled.div`
    position: relative;
    left: 50%;
    bottom: 50%;
    transform: translate(-50%, -50%);
    color: white;
`;

export const MainSection: React.FC = () => {
    return (
        <All>
            <Login />
            <Container>
                <TitleConstainer>
                    <Title>Lorem ipsum</Title>
                    <SubTitle>dolor</SubTitle>
                    <KononButton>Click</KononButton>
                    <Bitch>lololool</Bitch>
                </TitleConstainer>
                <Konon>
                    <KononImg />
                </Konon>
            </Container>
        </All>
    );
};

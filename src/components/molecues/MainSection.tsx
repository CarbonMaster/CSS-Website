import styled from '@emotion/styled';

const All = styled.div``;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    background: linear-gradient(to right bottom, rgba(4, 102, 140, 0.8), rgba(2, 136, 209, 0.8)),
        url(./img/virus.jpg) no-repeat;

    //background-size: 100%;

    background-position: top;

    clip-path: polygon(0 0, 100% 0, 90% 90%, 20% 100%, 0 100%);
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
    text-shadow: 2px 2px 5px rgba(255, 255, 255, 0.5);

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
    text-shadow: 2px 2px 3px rgba(255, 255, 255, 0.5);

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

const ImageContainer = styled.div`
    position: relative;
    top: -25vh;
`;

const XImage = styled.img`
    height: 10vh;
    backface-visibility: hidden;
    content: url(./svg/x.svg);
    box-shadow: 2px 2px 5px rgba(255, 255, 255, 0.5);
    border-radius: 100px;

    animation: spinner 0.4s infinite ease-in-out;

    :hover {
        animation: hoveranimation 1s infinite ease-in-out;
    }

    @keyframes spinner {
        0% {
            box-shadow: 2px 2px 5px rgba(255, 255, 255, 0.5);
        }

        25% {
            box-shadow: 0px 2px 5px rgba(255, 255, 255, 0.5);
        }

        50% {
            box-shadow: 0px 0px 5px rgba(255, 255, 255, 0.5);
        }

        75% {
            box-shadow: 2px 0px 5px rgba(255, 255, 255, 0.5);
        }

        100% {
            box-shadow: 2px 2px 5px rgba(255, 255, 255, 0.5);
        }
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
    font-size: 2em;
    text-shadow: 0px 0px 10px rgba(52, 52, 52, 0.8);
    color: white;
`;

export const MainSection: React.FC = () => {
    return (
        <All>
            <Container>
                <TitleConstainer>
                    <Title>Lorem ipsum</Title>
                    <SubTitle>dolor</SubTitle>
                    <KononButton>Click</KononButton>
                    <Bitch>Mini text</Bitch>
                </TitleConstainer>
                <ImageContainer>
                    <XImage />
                </ImageContainer>
            </Container>
        </All>
    );
};

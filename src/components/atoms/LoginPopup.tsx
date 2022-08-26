import styled from '@emotion/styled';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const Background = styled.div`
    background: rgb(0, 107, 107);
    position: flex;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    font-size: 3em;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
    position: fixed;
    position: absolute;
    justify-self: center;
    align-self: center;
    background: rgb(4, 191, 191);
    z-index: 4;
`;

const LoginTitle = styled.div`
    font-size: 3rem;
    font-weight: bold;
    padding-bottom: 15px;
    align-self: center;
    text-shadow: 0px 0px 3px rgba(0, 48, 90, 0.8);
`;

const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const SubmitButton = styled.button`
    margin: 5px;
    padding: 5px;
    border-radius: 5px;
    border-color: rgb(1, 255, 247);
    box-shadow: 0px 0px 2px 2px rgb(173, 213, 247);

    ::hover {
        transform: all 2s;
        box-shadow: 0px 0px 2px 2px rgb(0, 48, 90);
    }
`;

const DataVerify = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
});

const InputField = styled(Field)`
    padding: 5px;
    margin: 5px;
    border-radius: 5px;
`;

export const LoginPopup = () => {
    return (
        <Background>
            <LoginContainer>
                <LoginTitle>Log in</LoginTitle>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    onSubmit={async (values) => {
                        console.log(values);
                    }}
                    validationSchema={DataVerify}
                >
                    <Form>
                        <InputsContainer>
                            <InputField id="email" name="email" placeholder="E-mail" type="email" />
                            <InputField id="password" name="password" placeholder="Password" type="password" />
                            <SubmitButton type="submit">Login</SubmitButton>
                        </InputsContainer>
                    </Form>
                </Formik>
            </LoginContainer>
        </Background>
    );
};

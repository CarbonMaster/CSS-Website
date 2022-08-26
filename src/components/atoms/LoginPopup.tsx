import styled from '@emotion/styled';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    font-size: 3em;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
    //position: fixed;
    //position: absolute;
    justify-self: center;
    align-self: center;
    background: rgb(203, 153, 153);
    //z-index: 4;
`;

const LoginTitle = styled.div`
    font-size: 1em;
    font-weight: bold;
    padding-bottom: 15px;
    align-self: center;
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
    box-shadow: 0px 0px 2px 2px #cfcf75;

    ::hover {
        transform: all 2s;
        box-shadow: 0px 0px 2px 2px black;
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
        <Container>
            <LoginTitle>Login</LoginTitle>
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
        </Container>
    );
};

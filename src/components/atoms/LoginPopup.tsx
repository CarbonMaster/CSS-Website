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

const SubmitButton = styled.button``;

const DataVerify = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required(),
});

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
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
                validationSchema={DataVerify}
            >
                <Form>
                    <InputsContainer>
                        <Field id="email" name="email" placeholder="E-mail" type="email" />
                        <Field id="password" name="password" placeholder="Password" type="password" />
                        <SubmitButton type="submit">Login</SubmitButton>
                    </InputsContainer>
                </Form>
            </Formik>
        </Container>
    );
};

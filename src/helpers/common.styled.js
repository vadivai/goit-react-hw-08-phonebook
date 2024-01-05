import styled from 'styled-components';

import { Form as FormikForm, Field as FormikField } from 'formik';

export const PageWrapper = styled.div`
  display: flex;
`;

export const SectionHome = styled.div`
  padding: 10px 20px;
  background-color: orange;
  width: 100vw;
  height: 100vh;

  color: #000;
`;

export const Section = styled.section`
  padding: 10px 50px 20px;
  background-color: orange;
  color: #000;
  width: 50vw;
  height: 60vh;
  margin: auto;
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* max-width: 280px; */
`;

export const Field = styled(FormikField)`
  padding: 4px 8px;
  font: inherit;
  border: 0;
  outline: none;
  margin-bottom: 10px;
`;

export const FormGroup = styled.label`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Button = styled.button`
  /* display: block; */
  max-width: 100px;
  padding: 8px 8px;
  color: white;
  background-color: teal;
  border: 0;
`;

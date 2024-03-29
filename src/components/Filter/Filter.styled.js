import styled from 'styled-components';
import { Form as FormikForm, Field as FormikField } from 'formik';

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 400px;
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
  min-width: 100px;
  padding: 8px 8px;
  color: white;
  background-color: teal;
  border: 0;
`;

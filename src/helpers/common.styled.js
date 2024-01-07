import styled from 'styled-components';

import { Form as FormikForm, Field as FormikField } from 'formik';

export const PageWrapper = styled.div`
  display: flex;
`;

// export const SectionHome = styled.div`
//   padding: 10px 20px;
//   background-color: orange;
//   width: 100vw;
//   height: 100vh;

//   color: #000;
// `;

export const Section = styled.section`
  padding: 10px 10px;
  background-color: orange;
  color: #000;
  width: 50vw;
  min-height: 70vh;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  /* padding-left: 20px; */
  /* margin-left: 20px; */
  justify-content: center;

  /* list-style:  */
`;

export const Text = styled.h2`
  text-align: center;
  font-size: 20px;
  padding: 8px;
`;

export const BlueText = styled.span`
  font-weight: 600;
  font-size: ingerit;
  font-style: italic;
  color: #10066b;
`;

export const Paragraph = styled.p`
  /* style={{ textAlign: 'center', margin: 'auto' }} */
  text-align: center;
  padding: 10px;
`;

export const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 400px;
  /* max-height: 450px; */
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
  align-self: center;
`;

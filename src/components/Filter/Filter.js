import { Formik } from 'formik';
import { Form, Field, FormGroup } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filteredContacts } from '../../redux/filterSlice';
import { selectFilter } from '../../redux/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  // console.log('filter from Filter.js', filter);
  const dispatch = useDispatch();

  return (
    <Formik>
      <Form>
        <FormGroup>
          Find contacts by name
          <Field
            type="text"
            name="filter"
            placeholder="Фільтр"
            value={filter}
            onChange={evt => dispatch(filteredContacts(evt.target.value))}
          />
        </FormGroup>
      </Form>
    </Formik>

    // <div>
    //   <input
    //     type="text"
    //     value={filter}
    //     onChange={evt => onFilter(evt.target.value)}
    //     placeholder="Фільтр"
    //   />
    // </div>
  );
};

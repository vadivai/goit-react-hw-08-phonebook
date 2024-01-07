import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';
import { WrapperHoriz } from 'components/AppBar/AppBar.styled';
import { BlueText } from 'helpers/common.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <WrapperHoriz>
      <BlueText>{user.email}</BlueText>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </WrapperHoriz>
  );
};

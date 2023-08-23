import './logo.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setModifyMode } from '../../redux/reducers/modifySlice';

const Logo = () => {
  const dispatch = useDispatch();
  const modifyMode = useSelector((state) => state.modifySlice.modifyMode);
  return (
    <Link
      to="/"
      onClick={() =>
        dispatch(
          setModifyMode({ modifyMode: !modifyMode, post_id: '', type: '' }),
        )
      }
    >
      <img src="/img/logo.svg" alt="logo" />
    </Link>
  );
};

export default Logo;

import { useRef } from 'react';
// import { useDispatch, useSelector } from "react-redux";
// import { setSearch } from "../../redux/reducers/searchSlice";
import Search from '../../atoms/Search/Search';
import './Main.css';

export default function Main() {
  const searchRef = useRef();

  return (
    <div className="MainContainer">
      <Search searchRef={searchRef} />
    </div>
  );
}

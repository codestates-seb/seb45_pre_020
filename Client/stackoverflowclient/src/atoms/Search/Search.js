import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../../redux/reducers/searchSlice';
import { useNavigate } from 'react-router-dom';
import { AiOutlineSearch } from "react-icons/ai";
import './Search.css';


export default function Search({ searchRef }){
  const dispatch = useDispatch();
  const navigate = useNavigate();
//   const searchWord = useSelector(state => state.search.searchWord);

  const onKeyHandler = (e) => {
    if(e.target.value === '' && e.key === 'Enter') return alert('공백은 입력할 수 없습니다.')
    if(e.key === 'Enter'){
      dispatch(setSearch(e.target.value));
      navigate(`/search/${e.target.value}`);
    }
  }

    return (
        <div className='centered-container'>
        <div className='main-search-container'>

       <div className='main-search-icon-wrap'>
        <AiOutlineSearch />
       </div>
      
      <input
        type="text"
        className="main-search-input"
        placeholder="Search..."
        ref={searchRef}
        onKeyDown={(e)=> onKeyHandler(e)}
        // defaultValue={searchWord === '' ? '' : searchWord}
        />

        </div>
      </div>
    );
  };
  
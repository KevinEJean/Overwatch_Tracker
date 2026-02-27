import './Frame.css'
import DefaultFrame from './default/DefaultFrame.jsx'
import Search from './search/Search.jsx'

export default function Frame({ curFrame='' }) {

  switch (curFrame.toLowerCase()) {
    case 'search':
      return (
        <>
          {<Search />}
        </>
      );

    default:
      return (
        <>
          {<DefaultFrame />}
        </>
      );
  }
}
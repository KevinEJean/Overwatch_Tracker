import DefaultFrame from './default/DefaultFrame.jsx';

export default function Frame({ curFrame='' }) {

  switch (curFrame.toLowerCase()) {
    default:
      return (
        <>
          {<DefaultFrame />}
        </>
      );
  }
}
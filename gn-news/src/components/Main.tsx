import '../styles/styles.css'
import NewsWrapper from './NewsWrapper';
import SideMenu from './SideMenu';

const Main = (): JSX.Element => {
  return (
    <div className='main'>
      <SideMenu />
      <div className='wrapper'>
        <NewsWrapper />
      </div>
    </div>
  );
};

export default Main;

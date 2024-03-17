import FeaturedProduct from '@/Containers/FeaturedProduct';
import CollectionDetails from '@/Routes/Home/Containers/CollectionDetails';

const Home = () => {
  return (
    <div>
      <div
        id="home-cover"
        className={'h-[420px] bg-cover bg-center overflow-hidden bg-[url("assets/images/cover.png")]'}
      ></div>
      <div id="home-container" className={'px-40 pt-24 pb-40 flex flex-col justify-center'}>
        <CollectionDetails />
        <div id="home-product">
          <p className="text-h5 w-full text-center mt-32 mb-16">Featured Product</p>
          <FeaturedProduct />
        </div>
      </div>
    </div>
  );
};

export default Home;

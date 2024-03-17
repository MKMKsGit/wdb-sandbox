import FeaturedProduct from '@/Containers/FeaturedProduct';
import CollectionDetails from '@/Routes/Home/Containers/CollectionDetails';

const Home = () => {
  return (
    <div>
      <img
        className="w-full h-[420px] object-cover object-center overflow-hidden"
        src={`${import.meta.env.VITE_PUBLIC_URL}assets/images/cover.png`}
        alt="cover of wdb shop, 5 people walk on the street with colorful cloths"
      />
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

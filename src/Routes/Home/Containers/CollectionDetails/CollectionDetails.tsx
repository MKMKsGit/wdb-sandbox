import Loading from '@/Components/Loading';
import ProductCollectionItem from '@/Components/ProductCollectionItem';
import { useGetAllCollection } from '@/Hooks/useGetAllCollections';

const CollectionDetails = () => {
  const { data, loading } = useGetAllCollection();

  const springCollection = data?.find((collection) => collection.name === 'Spring 2024');

  const { description = '', items = [] } = springCollection || {};

  if (loading) {
    return <Loading className={'min-h-40'} />;
  }

  return (
    <div className="flex gap-10">
      <div className="flex-1">
        <p className={'text-h1'}>2024</p>
        <p className={'text-h3'}>Collection</p>
        <p>{description}</p>
      </div>
      {items.map((item) => {
        const { title, description, imageUrl } = item;
        return (
          <ProductCollectionItem
            key={item.title}
            header={title}
            description={description}
            imgUrl={imageUrl}
            onClick={() => {}}
          />
        );
      })}
    </div>
  );
};

export default CollectionDetails;

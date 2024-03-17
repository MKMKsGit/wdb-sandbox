type FooterProps = {
  productList: string[];
  handleClickProduct: (product: string) => void;
};

const Footer = (props: FooterProps) => {
  const { productList, handleClickProduct } = props;

  return (
    <div className={'w-full px-40 py-6 bg-secondary-900 text-white'}>
      <div id="footer-content" className="flex gap-[35px]">
        <div className={'flex-1'}>
          <p className={'text-h5'}>Featured product</p>
          <div className={'flex flex-col gap-4 mt-6'}>
            {productList.map((product, index) => (
              <p key={index} className={'cursor-pointer text-subHeading'} onClick={() => handleClickProduct(product)}>
                {product}
              </p>
            ))}
          </div>
        </div>
        <div className={'flex-1'}>
          <p className={'text-h5'}>Customer services</p>
          <div className={'flex flex-col gap-4 mt-6'}>
            <p className={'text-body'}>MBK Tower 20th Floor, 444, Phaya Thai Rd, Wang Mai, Pathum Wan, Bangkok 10330</p>
            <p className={'text-body'}>Email: ratchitta.panyangam@gmail.com</p>
          </div>
        </div>
      </div>
      <div id="footer-credit" className={'flex justify-between items-center text-secondary-500 mt-4'}>
        <p className="text-caption">Copyright © 2024 All rights reserved for all contents. </p>
        <div className={'flex gap-2'}>
          <p className={'text-caption'}>Powerd By</p>
          <div className={'flex items-center gap-2'}>
            <img src="/assets/skooldio-logo.png" alt="Skooldio" />
            <div className="inline-block w-px self-stretch bg-neutral-100"></div>
            <img src="/assets/web-dev-logo.png" alt="Web Development Bootcamp" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

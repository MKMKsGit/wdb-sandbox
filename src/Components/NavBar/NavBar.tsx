type NavBarProps = {
  tabList: string[];
  handleClickTab: (tab: string) => void;
  handleClickLogo: () => void;
  rightAdornment?: React.ReactNode;
};

const NavBar = (props: NavBarProps) => {
  const { tabList, handleClickTab, handleClickLogo, rightAdornment } = props;

  return (
    <div className="w-full px-40 py-2.5 bg-secondary-900 text-white">
      <div id="navbar-content" className="flex justify-between items-center">
        <div id="left" className="flex gap-10 items-center">
          <div id="logo" className="cursor-pointer flex gap-2.5 items-center" onClick={handleClickLogo}>
            <img className="w-[36px] h-[36px] object-contain" src="assets/logo.svg" alt="logo" />
            <p className="text-subHeading">WDB</p>
          </div>
          <div className="flex gap-6">
            {tabList.map((tab, index) => (
              <p key={index} className="cursor-pointer" onClick={() => handleClickTab(tab)}>
                {tab}
              </p>
            ))}
          </div>
        </div>
        {rightAdornment}
      </div>
    </div>
  );
};

export default NavBar;

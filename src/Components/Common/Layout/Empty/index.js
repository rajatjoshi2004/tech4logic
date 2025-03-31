import Header from "../../Header";

const EmptyLayout = ({ children, customStyles = {} }) => {
  return (
    <div
      className={`min-h-screen ${
        customStyles.wrapper || ""
      } bg-gradient-to-r from-black via-gray-900 to-black`}
    >
      <Header />
      <div className="min-h-screen mt-16 bg-gradient-to-r from-black to-gray-900">{children}</div>
    </div>
  );
};

export default EmptyLayout;

import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Header />
      <div className="container">{children}</div>
    </div>
  );
};

export default Layout;

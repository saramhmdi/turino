import Footer from "../organisms/Footer";
import Header from "../organisms/Header";

function LayoutPage({ children }) {
  return (
    <div >
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}

export default LayoutPage;

import { Header } from "../atoms/layout/Header";
import { Footer } from "../atoms/layout/Footer";

export const HeaderAndFooter = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

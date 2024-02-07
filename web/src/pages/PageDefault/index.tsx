import Header from "../../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";

export default function PageDefault() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
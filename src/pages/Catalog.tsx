import {useEffect} from 'react'
import HeaderFilter from "../components/CatalogPageComponents/HeaderFilter/HeaderFilter";
import ProductBlock from "../components/CatalogPageComponents/ProductBlock/ProductBlock";

const Catalog = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <HeaderFilter />
      <ProductBlock />
    </>
  );
}

export default Catalog
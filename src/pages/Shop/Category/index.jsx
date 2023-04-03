import { useSelector } from "react-redux";
import { selectProductsByCategory, selectProductsAsyncState } from "../../../features/products";
import asyncStatus from "../../../constants/asyncStatus";

import { useParams } from "react-router-dom";

import * as S from "./styles";
import LoadingGlyph from "../../../components/LoadingGlyph";
import ProductCard from "../../../components/ProductCard";

const ShopCategoryPage = () => {
    const { categoryId } = useParams();
    const products = useSelector(state => selectProductsByCategory(state, categoryId));
    const asyncState = useSelector(selectProductsAsyncState);

    if (asyncState.status !== asyncStatus.succeeded) {
        return (<LoadingGlyph />);
    }

    return (<>
        <S.CategoryProductsCollection>
            { products.map(product => <ProductCard key={product.id} product={product} />) }
        </S.CategoryProductsCollection>
    </>);
}

export default ShopCategoryPage;

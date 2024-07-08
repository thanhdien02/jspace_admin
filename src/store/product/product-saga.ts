import { takeLatest } from "redux-saga/effects";
import {
  productCreateProduct,
  productDeleteProductById,
  productGetProduct,
  productGetProductById,
  productUpdateProduct,
} from "./product-slice";
import {
  handleProductCreateProduct,
  handleProductDeleteProductById,
  handleProductGetProduct,
  handleProductGetProductById,
  handleProductUpdateProduct,
} from "./product-handlers";

export default function* authSaga() {
  yield takeLatest(productGetProduct.type, handleProductGetProduct);
  yield takeLatest(productGetProductById.type, handleProductGetProductById);
  yield takeLatest(productCreateProduct.type, handleProductCreateProduct);
  yield takeLatest(productUpdateProduct.type, handleProductUpdateProduct);
  yield takeLatest(
    productDeleteProductById.type,
    handleProductDeleteProductById
  );
}

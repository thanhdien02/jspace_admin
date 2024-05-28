import { takeLatest } from "redux-saga/effects";
import {
  productCreateProduct,
  productGetProduct,
  productGetProductById,
  productUpdateProduct,
} from "./product-slice";
import {
  handleProductCreateProduct,
  handleProductGetProduct,
  handleProductGetProductById,
  handleProductUpdateProduct,
} from "./product-handlers";

export default function* authSaga() {
  yield takeLatest(productGetProduct.type, handleProductGetProduct);
  yield takeLatest(productGetProductById.type, handleProductGetProductById);
  yield takeLatest(productCreateProduct.type, handleProductCreateProduct);
  yield takeLatest(productUpdateProduct.type, handleProductUpdateProduct);
}

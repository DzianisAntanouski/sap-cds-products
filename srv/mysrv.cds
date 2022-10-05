using { myCompany.products } from '../db/Products';


service mysrv {

    entity ProductsSRV as projection on products.Products;

    function myFuncName(msg: String) returns String

}
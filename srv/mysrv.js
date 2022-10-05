const mysrv = function(srv) {

    srv.on("myFuncName", function(req, res) {
        return `${new Date()} - date; ${req.data.msg} - our msg`;
    });

    srv.impl(async function() {
        this.after('READ', 'ProductsSRV', productData => {
            const products = Array.isArray(productData) ? productData : [productData];
            products.forEach(product => {
                product.availability == 'stock' ? product.criticality = 1 : product.criticality = 2;
            })
        })
    })
};

module.exports = mysrv;
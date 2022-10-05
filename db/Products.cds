namespace myCompany.products;

entity Products {

    key id           : Integer;
        name         : String(65) @title : 'Name';
        price        : Integer;
        supplier     : String(65);
        workSince    : Date;
        remains      : Integer;
        availability : String(24);
        criticality  : Integer;

}


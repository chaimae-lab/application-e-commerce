export class Products {
    id:number;
    name:string;
    description:string;
    price:number;
    image:string;

    constructor(id,name,description='',price=0,image='https://production-eu01-dior.demandware.net/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw68c80ad7/assets/Y0027830/Y0027830_F002783999_E02_GHC.jpg?sw=715&sh=773&sm=fit'){
    this.id=id;
    this.name=name;
    this.description=description;
    this.price=price;
    this.image=image;
    }
}


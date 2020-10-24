class Tienda{
    constructor(usuario){
        this.usuario = usuario
        this.paypal = new Paypal()
        //this.stripe = new Stripe(usuario)
    }
    comprarComputadora(cantidad){
        this.paypal.hacerPago(this.usuario, cantidad * 100 * 200)
        //this.stripe.hacerPago(100 * cantidad *200)
    }
}
class Stripe{
    constructor(usuario){
        this.usuario = usuario
    }
    hacerPago(cantidadEnPesos){
        console.log(`${this.usuario} hizo un pago de ${cantidadEnPesos / 100} MXN`)
    }
}
class Paypal{
    hacerPago(usuario, cantidadEnPesos){
        console.log(`${usuario} hizo un pago de ${cantidadEnPesos / 100} MXN`)
    }
}

const tienda = new Tienda('Manuel')
tienda.comprarComputadora('5')
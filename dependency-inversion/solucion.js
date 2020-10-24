class Tienda{
    constructor(procesadorPago){
        this.procesadorPago = procesadorPago
    }
    comprarComputadora(cantidad){
        this.procesadorPago.hacerPago(cantidad * 100 * 200)
    }
}
class procesadorStripe{
    constructor(usuario){
        this.stripe = new Stripe(usuario)
    }
    hacerPago(cantidadEnPesos){
        this.stripe.hacerPago( cantidadEnPesos)
    }
}
class procesadorPaypal{
    constructor(usuario){
        this.usuario = usuario
        this.paypal = new Paypal()
    }
    hacerPago(cantidadEnPesos){
        this.paypal.hacerPago( this.usuario, cantidadEnPesos)
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

const tienda1 = new Tienda(new procesadorStripe('Juan'))
const tienda2 = new Tienda(new procesadorStripe('Pedro'))
tienda1.comprarComputadora('5')
tienda2.comprarComputadora('5')
export const formatPrice = (price: number) => {
    return new Intl.NumberFormat("fr-FR", {
        style:"currency",
        currency: "TND"
    
}).format(price)
}

const dollarFormatter = (currency: string | number) => {
    const num = typeof currency === 'string' ? parseFloat(currency) : currency;

    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0
    }).format(num);
}

export { dollarFormatter }

const dollarFormatter = (currency: string | number) => {
    const num = typeof currency === 'string' ? parseFloat(currency) : currency;

    const formattedNumber = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0
    }).format(num);

    return formattedNumber.replace('COP', 'COP $');
}

export { dollarFormatter }
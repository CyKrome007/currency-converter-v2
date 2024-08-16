export const CInput = ({
    label = "To",
    amount = "",
    onAmountChange,
    onCurrencyChange,
    currencyOption = [],
    selectCurrency = "usd",
    amountDisable = false,
    className = ""
}) => {
    //console.log("label: ", label, " amount", amount)
    return (

        <>
            <div className={'flex flex-wrap w-auto justify-center items-center p-5 shadow-xl duration-200'}>
                <div className={'flex flex-col px-5 py-5 '}>
                    <label
                        htmlFor={`${label}`}
                        className={'pb-5'}
                    >
                        {label}:
                    </label>
                    <input
                        id={`${label}`}
                        type="number"
                        value={amount.toString()}
                        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                        className={'px-2 py-1 max-w-80 w-auto rounded-md shadow-xl'}
                        placeholder={`100`}
                        disabled={amountDisable}
                    />
                </div>
                <div className={'flex flex-col px-5 py-5'}>
                    <label
                        htmlFor={`${label}Currency`}
                        className={'pb-5'}
                    >
                        Currency:
                    </label>
                    <select
                        id={`${label}Currency`}
                        value={selectCurrency}
                        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                        className={'px-2 py-1 max-w-80 w-auto rounded-md shadow-xl cursor-pointer'}
                    >
                        {currencyOption.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency.toString().toUpperCase()}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </>
    )
}

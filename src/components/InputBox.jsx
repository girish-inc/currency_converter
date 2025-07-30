// Enhanced InputBox.jsx - Updated for modern dark theme
import { useId } from "react";
import {formatCurrencyDisplay} from "../Utilities/currencyData.js";
function InputBox({
                      label,
                      amount,
                      onAmountChange,
                      onCurrencyChange,
                      currencyOptions = [],
                      selectCurrency = "USD",
                      amountDisable = false,
                      currencyDisable = false,
                      className = "",
                      displayFormat = "FlagNameCodeAndSymbol"
                  }) {
    const amountInputId = useId();

    // Modern dark theme styling
    const isModernDark = className.includes('modern-dark');

    const containerClasses = isModernDark
        ? `bg-gray-700/30 backdrop-blur-sm border border-gray-600/50 p-4 rounded-xl text-sm flex ${className}`
        : `bg-white p-3 rounded-lg text-sm flex ${className}`;

    const labelClasses = isModernDark
        ? "text-gray-300 mb-3 inline-block font-medium"
        : "text-black/40 mb-2 inline-block";

    const inputClasses = isModernDark
        ? "outline-none w-full bg-transparent py-2 text-white text-lg font-semibold placeholder-gray-400 focus:ring-2 focus:ring-blue-500 rounded-lg px-2 transition-all duration-200"
        : "outline-none w-full bg-transparent py-1.5";

    const selectClasses = isModernDark
        ? "rounded-xl px-3 py-2 bg-gray-600/50 border border-gray-500/50 text-white font-medium cursor-pointer outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-sm min-w-0"
        : "rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none min-w-0 text-xs";

    return (
        <div className={containerClasses}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className={labelClasses}>
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className={inputClasses}
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount || ""}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className={`${isModernDark ? 'text-gray-300' : 'text-black/40'} mb-2 w-full font-medium`}>
                    Currency Type
                </p>
                <select
                    className={selectClasses}
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                    style={{ maxWidth: '180px' }}
                >
                    {currencyOptions.length > 0 ? (
                        currencyOptions.map((currency) => (
                            <option
                                key={currency}
                                value={currency}
                                className={isModernDark ? "bg-gray-700 text-white" : ""}
                            >
                                {formatCurrencyDisplay(currency, displayFormat)}
                            </option>
                        ))
                    ) : (
                        <option value="">Loading currencies...</option>
                    )}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
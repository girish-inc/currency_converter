import { useState, useEffect } from 'react';
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import { formatCurrencyDisplay } from './Utilities/currencyData.js';

// Smart formatting function for currency amounts
const formatCurrencyAmount = (amount, currencyCode) => {
    if (!amount || amount === 0) return '0';

    // Currencies that typically don't use decimals
    const noDecimalCurrencies = ['JPY', 'KRW', 'VND', 'IDR', 'CLP', 'PYG'];

    // Very weak currencies that need more precision
    const highPrecisionCurrencies = ['IRR', 'VES', 'LAK', 'SLL', 'GNF'];

    const absAmount = Math.abs(amount);

    if (noDecimalCurrencies.includes(currencyCode)) {
        return Math.round(amount).toLocaleString();
    }

    if (highPrecisionCurrencies.includes(currencyCode)) {
        if (absAmount < 1) return amount.toFixed(6);
        if (absAmount < 100) return amount.toFixed(4);
        return amount.toFixed(2);
    }

    // Smart precision based on amount size
    if (absAmount < 0.01) return amount.toFixed(6);
    if (absAmount < 0.1) return amount.toFixed(4);
    if (absAmount < 1) return amount.toFixed(4);
    if (absAmount < 100) return amount.toFixed(2);
    if (absAmount < 10000) return amount.toFixed(2);

    // For very large amounts, consider less precision
    return amount.toFixed(2);
};

// Format exchange rate display
const formatExchangeRate = (rate, fromCurrency, toCurrency) => {
    if (!rate) return '';

    const noDecimalCurrencies = ['JPY', 'KRW', 'VND', 'IDR', 'CLP', 'PYG'];

    if (noDecimalCurrencies.includes(toCurrency)) {
        return Math.round(rate).toLocaleString();
    }

    if (rate < 0.0001) return rate.toFixed(6);
    if (rate < 0.01) return rate.toFixed(4);
    if (rate < 1) return rate.toFixed(4);
    if (rate < 100) return rate.toFixed(2);

    return rate.toFixed(2);
};

function App() {
    const [amount, setAmount] = useState(1);
    const [from, setFrom] = useState("USD");
    const [to, setTo] = useState("INR");
    const [convertedAmount, setConvertedAmount] = useState(0);

    const { rates: currencyInfo, loading, error } = useCurrencyInfo(from);

    const options = Object.keys(currencyInfo);

    // Auto-convert when data loads or dependencies change
    useEffect(() => {
        if (currencyInfo[to] && amount) {
            const result = amount * currencyInfo[to];
            setConvertedAmount(result);
        }
    }, [currencyInfo, to, amount]);

    const swap = () => {
        setFrom(to);
        setTo(from);
        setConvertedAmount(amount);
        setAmount(convertedAmount);
    };

    const convert = () => {
        if (currencyInfo[to]) {
            setConvertedAmount(amount * currencyInfo[to]);
        } else {
            console.error("Currency rate not found for:", to);
            setConvertedAmount(0);
        }
    };

    if (error) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex justify-center items-center">
                <div className="bg-gray-800/80 backdrop-blur-xl p-8 rounded-2xl shadow-2xl text-center border border-gray-700">
                    <h2 className="text-xl font-bold text-red-400 mb-4">Error Loading Currency Data</h2>
                    <p className="text-gray-300">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-all duration-200 transform hover:scale-105"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
            {/* Decorative gradient orbs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full blur-3xl opacity-20 -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-full blur-3xl opacity-20 translate-y-32 -translate-x-32"></div>

            <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
                <div className="w-full max-w-md">
                    <div className="bg-gray-800/40 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-gray-700/50">
                        {/* Header - Fixed height */}
                        <div className="text-center mb-8 h-16 flex flex-col justify-center">
                            <h1 className="text-3xl font-bold text-white mb-2">Currency Converter</h1>
                            <div className="h-5 flex items-center justify-center">
                                {loading ? (
                                    <p className="text-gray-400 text-xs">Loading exchange rates...</p>
                                ) : currencyInfo[to] ? (
                                    <p className="text-gray-300 text-sm">
                                        1 {formatCurrencyDisplay(from, "nameOnly")} = {formatExchangeRate(currencyInfo[to], from, to)} {formatCurrencyDisplay(to, "nameOnly")}
                                    </p>
                                ) : (
                                    <p className="text-gray-500 text-xs">Select currencies to see exchange rate</p>
                                )}
                            </div>
                        </div>

                        <form onSubmit={(e) => { e.preventDefault(); convert(); }}>
                            {/* From Currency */}
                            <div className="w-full mb-9">
                                <InputBox
                                    label="From"
                                    amount={amount}
                                    currencyOptions={options}
                                    onCurrencyChange={(currency) => setFrom(currency)}
                                    selectCurrency={from}
                                    onAmountChange={(amount) => setAmount(amount)}
                                    displayFormat="withFlagAndCode"
                                    className="modern-dark"
                                />
                            </div>

                            {/* Swap Button */}
                            <div className="relative w-full h-0.5">
                                <button
                                    type="button"
                                    className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gray-600/50 hover:bg-gray-500/50 rounded-full flex items-center justify-center text-white transition-all duration-200 transform hover:scale-110 disabled:opacity-50 border border-gray-500/30"
                                    onClick={swap}
                                    disabled={loading}
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m0-4l-4-4" />
                                    </svg>
                                </button>
                            </div>

                            {/* To Currency */}
                            <div className="w-full mb-6 mt-9">
                                <InputBox
                                    label="To"
                                    amount={formatCurrencyAmount(convertedAmount, to)}
                                    currencyOptions={options}
                                    onCurrencyChange={(currency) => setTo(currency)}
                                    selectCurrency={to}
                                    amountDisable
                                    displayFormat="withFlagAndCode"
                                    className="modern-dark"
                                />
                            </div>

                            {/* Convert Button */}
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100 mb-6 shadow-lg"
                                disabled={loading || !currencyInfo[to]}
                            >
                                {loading ? (
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        Loading...
                                    </div>
                                ) : (
                                    `Convert ${from} to ${to}`
                                )}
                            </button>
                        </form>

                        {/* Display conversion result - Fixed height */}
                        <div className="h-20 flex items-center justify-center">
                            {loading ? (
                                <div className="w-full bg-gray-700/30 rounded-xl p-4 text-center">
                                    <p className="text-gray-400 text-sm">Loading conversion...</p>
                                </div>
                            ) : convertedAmount > 0 && currencyInfo[to] ? (
                                <div className="w-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-xl p-4 text-center">
                                    <p className="text-white text-lg font-bold">
                                        {formatCurrencyAmount(amount, from)} {from} = {formatCurrencyAmount(convertedAmount, to)} {to}
                                    </p>
                                </div>
                            ) : (
                                <div className="w-full p-4 text-center">
                                    <p className="text-transparent text-lg">Placeholder for conversion result</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
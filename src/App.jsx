// Enhanced App.jsx
import { useState, useEffect } from 'react';
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import { formatCurrencyDisplay } from './Utilities/currencyData.js';

function App() {
    const [amount, setAmount] = useState(1); // Initialize with 1
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
            <div className="w-full h-screen flex justify-center items-center bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                    <h2 className="text-xl font-bold text-red-600 mb-4">Error Loading Currency Data</h2>
                    <p className="text-gray-600">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                    >
                        Retry
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    {/* Header with current exchange rate - Fixed height */}
                    <div className="text-center mb-4 h-16 flex flex-col justify-center">
                        <h1 className="text-white text-lg font-bold mb-2">Currency Converter</h1>
                        <div className="h-5 flex items-center justify-center">
                            {loading ? (
                                <p className="text-white/60 text-xs">Loading exchange rates...</p>
                            ) : currencyInfo[to] ? (
                                <p className="text-white/80 text-sm">
                                    1 {formatCurrencyDisplay(from, "nameOnly")} = {currencyInfo[to].toFixed(4)} {formatCurrencyDisplay(to, "nameOnly")}
                                </p>
                            ) : (
                                <p className="text-white/60 text-xs">Select currencies to see exchange rate</p>
                            )}
                        </div>
                    </div>

                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                selectCurrency={from}
                                onAmountChange={(amount) => setAmount(amount)}
                                displayFormat="withFlagAndCode"
                            />
                        </div>

                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 hover:bg-blue-700 transition-colors"
                                onClick={swap}
                                disabled={loading}
                            >
                                ⇅ swap
                            </button>
                        </div>

                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={to}
                                amountDisable
                                displayFormat="withFlagAndCode"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            disabled={loading || !currencyInfo[to]}
                        >
                            {loading ? 'Loading...' : `Convert ${from} to ${to}`}
                        </button>
                    </form>

                    {/* Display conversion result - Fixed height */}
                    <div className="mt-4 h-16 flex items-center justify-center">
                        {loading ? (
                            <div className="p-3 bg-white/20 rounded-lg text-center w-full">
                                <p className="text-white/60 text-sm">Loading conversion...</p>
                            </div>
                        ) : convertedAmount > 0 && currencyInfo[to] ? (
                            <div className="p-3 bg-white/20 rounded-lg text-center w-full">
                                <p className="text-white text-sm">
                                    <span className="font-bold">{amount} {from}</span> =
                                    <span className="font-bold"> {convertedAmount.toFixed(2)} {to}</span>
                                </p>
                            </div>
                        ) : (
                            <div className="p-3 bg-transparent rounded-lg text-center w-full">
                                <p className="text-transparent text-sm">Placeholder for conversion result</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
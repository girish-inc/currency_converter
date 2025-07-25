import {useEffect, useState} from "react"

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        if (!currency) return;

        // Using ExchangeRate-API - more reliable and free
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency.toUpperCase()}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then((res) => {
                // This API returns: { base: "USD", rates: { EUR: 0.85, ... } }
                if (res && res.rates) {
                    setData(res.rates);
                    console.log("Currency data loaded:", res.rates);
                } else {
                    console.error("Invalid response format:", res);
                    setData({});
                }
            })
            .catch((error) => {
                console.error("Error fetching currency data:", error);
                // Fallback to a backup API
                fetch(`https://open.er-api.com/v6/latest/${currency.toUpperCase()}`)
                    .then((res) => res.json())
                    .then((res) => {
                        if (res && res.rates) {
                            setData(res.rates);
                            console.log("Currency data loaded from backup API:", res.rates);
                        } else {
                            setData({});
                        }
                    })
                    .catch((backupError) => {
                        console.error("Backup API also failed:", backupError);
                        setData({});
                    });
            })
    }, [currency])
    return data
}

export default useCurrencyInfo;
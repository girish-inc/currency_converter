// Simplified useCurrencyInfo.js - No longer needs additional API calls
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!currency) return;

        setLoading(true);
        setError(null);

        // Main API call for exchange rates
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency.toUpperCase()}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }
                return res.json();
            })
            .then((res) => {
                if (res && res.rates) {
                    setData(res.rates);
                    console.log("Currency exchange rates loaded:", res.rates);
                } else {
                    console.error("Invalid response format:", res);
                    setData({});
                }
            })
            .catch((error) => {
                console.error("Error fetching currency data:", error);
                setError(error.message);

                // Fallback to backup API
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
                        setError("Failed to load currency data");
                    })
                    .finally(() => {
                        setLoading(false);
                    });
            })
            .finally(() => {
                setLoading(false);
            });
    }, [currency]);

    return {
        rates: data,
        loading,
        error
    };
}

export default useCurrencyInfo;
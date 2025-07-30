// currencyData.js - Complete Currency Database with 170+ currencies
export const baseCurrencyData = {
    // Major Currencies
    USD: {name: "United States Dollar", symbol: "$", country: "United States", flag: "🇺🇸"},
    EUR: {name: "Euro", symbol: "€", country: "European Union", flag: "🇪🇺"},
    GBP: {name: "British Pound Sterling", symbol: "£", country: "United Kingdom", flag: "🇬🇧"},
    JPY: {name: "Japanese Yen", symbol: "¥", country: "Japan", flag: "🇯🇵"},
    CHF: {name: "Swiss Franc", symbol: "Fr", country: "Switzerland", flag: "🇨🇭"},
    CAD: {name: "Canadian Dollar", symbol: "C$", country: "Canada", flag: "🇨🇦"},
    AUD: {name: "Australian Dollar", symbol: "A$", country: "Australia", flag: "🇦🇺"},
    CNY: {name: "Chinese Yuan", symbol: "¥", country: "China", flag: "🇨🇳"},
    INR: {name: "Indian Rupee", symbol: "₹", country: "India", flag: "🇮🇳"},

    // Asia Pacific
    KRW: {name: "South Korean Won", symbol: "₩", country: "South Korea", flag: "🇰🇷"},
    SGD: {name: "Singapore Dollar", symbol: "S$", country: "Singapore", flag: "🇸🇬"},
    HKD: {name: "Hong Kong Dollar", symbol: "HK$", country: "Hong Kong", flag: "🇭🇰"},
    TWD: {name: "Taiwan Dollar", symbol: "NT$", country: "Taiwan", flag: "🇹🇼"},
    THB: {name: "Thai Baht", symbol: "฿", country: "Thailand", flag: "🇹🇭"},
    MYR: {name: "Malaysian Ringgit", symbol: "RM", country: "Malaysia", flag: "🇲🇾"},
    IDR: {name: "Indonesian Rupiah", symbol: "Rp", country: "Indonesia", flag: "🇮🇩"},
    PHP: {name: "Philippine Peso", symbol: "₱", country: "Philippines", flag: "🇵🇭"},
    VND: {name: "Vietnamese Dong", symbol: "₫", country: "Vietnam", flag: "🇻🇳"},
    BDT: {name: "Bangladeshi Taka", symbol: "৳", country: "Bangladesh", flag: "🇧🇩"},
    PKR: {name: "Pakistani Rupee", symbol: "₨", country: "Pakistan", flag: "🇵🇰"},
    LKR: {name: "Sri Lankan Rupee", symbol: "Rs", country: "Sri Lanka", flag: "🇱🇰"},
    NPR: {name: "Nepalese Rupee", symbol: "Rs", country: "Nepal", flag: "🇳🇵"},
    BTN: {name: "Bhutanese Ngultrum", symbol: "Nu", country: "Bhutan", flag: "🇧🇹"},
    MMK: {name: "Myanmar Kyat", symbol: "Ks", country: "Myanmar", flag: "🇲🇲"},
    KHR: {name: "Cambodian Riel", symbol: "៛", country: "Cambodia", flag: "🇰🇭"},
    LAK: {name: "Lao Kip", symbol: "₭", country: "Laos", flag: "🇱🇦"},
    MNT: {name: "Mongolian Tugrik", symbol: "₮", country: "Mongolia", flag: "🇲🇳"},
    KZT: {name: "Kazakhstani Tenge", symbol: "₸", country: "Kazakhstan", flag: "🇰🇿"},
    UZS: {name: "Uzbekistani Som", symbol: "лв", country: "Uzbekistan", flag: "🇺🇿"},
    KGS: {name: "Kyrgyzstani Som", symbol: "лв", country: "Kyrgyzstan", flag: "🇰🇬"},
    TJS: {name: "Tajikistani Somoni", symbol: "SM", country: "Tajikistan", flag: "🇹🇯"},
    TMT: {name: "Turkmenistani Manat", symbol: "T", country: "Turkmenistan", flag: "🇹🇲"},

    // Middle East & Gulf
    AED: {name: "UAE Dirham", symbol: "د.إ", country: "United Arab Emirates", flag: "🇦🇪"},
    SAR: {name: "Saudi Riyal", symbol: "﷼", country: "Saudi Arabia", flag: "🇸🇦"},
    QAR: {name: "Qatari Riyal", symbol: "ر.ق", country: "Qatar", flag: "🇶🇦"},
    KWD: {name: "Kuwaiti Dinar", symbol: "د.ك", country: "Kuwait", flag: "🇰🇼"},
    BHD: {name: "Bahraini Dinar", symbol: ".د.ب", country: "Bahrain", flag: "🇧🇭"},
    OMR: {name: "Omani Rial", symbol: "﷼", country: "Oman", flag: "🇴🇲"},
    JOD: {name: "Jordanian Dinar", symbol: "د.ا", country: "Jordan", flag: "🇯🇴"},
    ILS: {name: "Israeli Shekel", symbol: "₪", country: "Israel", flag: "🇮🇱"},
    LBP: {name: "Lebanese Pound", symbol: "ل.ل", country: "Lebanon", flag: "🇱🇧"},
    SYP: {name: "Syrian Pound", symbol: "£", country: "Syria", flag: "🇸🇾"},
    IQD: {name: "Iraqi Dinar", symbol: "ع.د", country: "Iraq", flag: "🇮🇶"},
    IRR: {name: "Iranian Rial", symbol: "﷼", country: "Iran", flag: "🇮🇷"},
    AFN: {name: "Afghan Afghani", symbol: "؋", country: "Afghanistan", flag: "🇦🇫"},
    TRY: {name: "Turkish Lira", symbol: "₺", country: "Turkey", flag: "🇹🇷"},

    // Europe
    NOK: {name: "Norwegian Krone", symbol: "kr", country: "Norway", flag: "🇳🇴"},
    SEK: {name: "Swedish Krona", symbol: "kr", country: "Sweden", flag: "🇸🇪"},
    DKK: {name: "Danish Krone", symbol: "kr", country: "Denmark", flag: "🇩🇰"},
    ISK: {name: "Icelandic Krona", symbol: "kr", country: "Iceland", flag: "🇮🇸"},
    PLN: {name: "Polish Zloty", symbol: "zł", country: "Poland", flag: "🇵🇱"},
    CZK: {name: "Czech Koruna", symbol: "Kč", country: "Czech Republic", flag: "🇨🇿"},
    HUF: {name: "Hungarian Forint", symbol: "Ft", country: "Hungary", flag: "🇭🇺"},
    RON: {name: "Romanian Leu", symbol: "lei", country: "Romania", flag: "🇷🇴"},
    BGN: {name: "Bulgarian Lev", symbol: "лв", country: "Bulgaria", flag: "🇧🇬"},
    HRK: {name: "Croatian Kuna", symbol: "kn", country: "Croatia", flag: "🇭🇷"},
    RSD: {name: "Serbian Dinar", symbol: "Дин.", country: "Serbia", flag: "🇷🇸"},
    RUB: {name: "Russian Ruble", symbol: "₽", country: "Russia", flag: "🇷🇺"},
    BYN: {name: "Belarusian Ruble", symbol: "Br", country: "Belarus", flag: "🇧🇾"},
    UAH: {name: "Ukrainian Hryvnia", symbol: "₴", country: "Ukraine", flag: "🇺🇦"},
    MDL: {name: "Moldovan Leu", symbol: "L", country: "Moldova", flag: "🇲🇩"},
    GEL: {name: "Georgian Lari", symbol: "₾", country: "Georgia", flag: "🇬🇪"},
    AZN: {name: "Azerbaijani Manat", symbol: "₼", country: "Azerbaijan", flag: "🇦🇿"},
    AMD: {name: "Armenian Dram", symbol: "֏", country: "Armenia", flag: "🇦🇲"},
    ALL: {name: "Albanian Lek", symbol: "L", country: "Albania", flag: "🇦🇱"},
    MKD: {name: "Macedonian Denar", symbol: "ден", country: "North Macedonia", flag: "🇲🇰"},
    BAM: {name: "Bosnia-Herzegovina Convertible Mark", symbol: "KM", country: "Bosnia and Herzegovina", flag: "🇧🇦"},

    // Americas
    BRL: {name: "Brazilian Real", symbol: "R$", country: "Brazil", flag: "🇧🇷"},
    MXN: {name: "Mexican Peso", symbol: "Mex$", country: "Mexico", flag: "🇲🇽"},
    ARS: {name: "Argentine Peso", symbol: "$", country: "Argentina", flag: "🇦🇷"},
    CLP: {name: "Chilean Peso", symbol: "$", country: "Chile", flag: "🇨🇱"},
    COP: {name: "Colombian Peso", symbol: "$", country: "Colombia", flag: "🇨🇴"},
    PEN: {name: "Peruvian Nuevo Sol", symbol: "S/.", country: "Peru", flag: "🇵🇪"},
    VES: {name: "Venezuelan Bolívar", symbol: "Bs", country: "Venezuela", flag: "🇻🇪"},
    UYU: {name: "Uruguayan Peso", symbol: "$U", country: "Uruguay", flag: "🇺🇾"},
    PYG: {name: "Paraguayan Guarani", symbol: "Gs", country: "Paraguay", flag: "🇵🇾"},
    BOB: {name: "Bolivian Boliviano", symbol: "$b", country: "Bolivia", flag: "🇧🇴"},
    GTQ: {name: "Guatemalan Quetzal", symbol: "Q", country: "Guatemala", flag: "🇬🇹"},
    HNL: {name: "Honduran Lempira", symbol: "L", country: "Honduras", flag: "🇭🇳"},
    NIO: {name: "Nicaraguan Córdoba", symbol: "C$", country: "Nicaragua", flag: "🇳🇮"},
    CRC: {name: "Costa Rican Colón", symbol: "₡", country: "Costa Rica", flag: "🇨🇷"},
    PAB: {name: "Panamanian Balboa", symbol: "B/.", country: "Panama", flag: "🇵🇦"},
    DOP: {name: "Dominican Peso", symbol: "RD$", country: "Dominican Republic", flag: "🇩🇴"},
    HTG: {name: "Haitian Gourde", symbol: "G", country: "Haiti", flag: "🇭🇹"},
    JMD: {name: "Jamaican Dollar", symbol: "J$", country: "Jamaica", flag: "🇯🇲"},
    CUP: {name: "Cuban Peso", symbol: "₱", country: "Cuba", flag: "🇨🇺"},
    BBD: {name: "Barbadian Dollar", symbol: "$", country: "Barbados", flag: "🇧🇧"},
    BSD: {name: "Bahamian Dollar", symbol: "$", country: "Bahamas", flag: "🇧🇸"},
    BZD: {name: "Belize Dollar", symbol: "BZ$", country: "Belize", flag: "🇧🇿"},
    XCD: {name: "East Caribbean Dollar", symbol: "$", country: "Eastern Caribbean", flag: "🏴"},
    TTD: {name: "Trinidad and Tobago Dollar", symbol: "TT$", country: "Trinidad and Tobago", flag: "🇹🇹"},
    GYD: {name: "Guyanese Dollar", symbol: "$", country: "Guyana", flag: "🇬🇾"},
    SRD: {name: "Surinamese Dollar", symbol: "$", country: "Suriname", flag: "🇸🇷"},

    // Africa
    ZAR: {name: "South African Rand", symbol: "R", country: "South Africa", flag: "🇿🇦"},
    NGN: {name: "Nigerian Naira", symbol: "₦", country: "Nigeria", flag: "🇳🇬"},
    EGP: {name: "Egyptian Pound", symbol: "£", country: "Egypt", flag: "🇪🇬"},
    KES: {name: "Kenyan Shilling", symbol: "Sh", country: "Kenya", flag: "🇰🇪"},
    GHS: {name: "Ghanaian Cedi", symbol: "₵", country: "Ghana", flag: "🇬🇭"},
    TZS: {name: "Tanzanian Shilling", symbol: "TSh", country: "Tanzania", flag: "🇹🇿"},
    UGX: {name: "Ugandan Shilling", symbol: "USh", country: "Uganda", flag: "🇺🇬"},
    ETB: {name: "Ethiopian Birr", symbol: "Br", country: "Ethiopia", flag: "🇪🇹"},
    MAD: {name: "Moroccan Dirham", symbol: "DH", country: "Morocco", flag: "🇲🇦"},
    TND: {name: "Tunisian Dinar", symbol: "د.ت", country: "Tunisia", flag: "🇹🇳"},
    DZD: {name: "Algerian Dinar", symbol: "دج", country: "Algeria", flag: "🇩🇿"},
    LYD: {name: "Libyan Dinar", symbol: "ل.د", country: "Libya", flag: "🇱🇾"},
    AOA: {name: "Angolan Kwanza", symbol: "Kz", country: "Angola", flag: "🇦🇴"},
    ZMW: {name: "Zambian Kwacha", symbol: "ZK", country: "Zambia", flag: "🇿🇲"},
    BWP: {name: "Botswanan Pula", symbol: "P", country: "Botswana", flag: "🇧🇼"},
    NAD: {name: "Namibian Dollar", symbol: "$", country: "Namibia", flag: "🇳🇦"},
    SZL: {name: "Swazi Lilangeni", symbol: "E", country: "Eswatini", flag: "🇸🇿"},
    LSL: {name: "Lesotho Loti", symbol: "M", country: "Lesotho", flag: "🇱🇸"},
    MWK: {name: "Malawian Kwacha", symbol: "MK", country: "Malawi", flag: "🇲🇼"},
    ZWL: {name: "Zimbabwean Dollar", symbol: "Z$", country: "Zimbabwe", flag: "🇿🇼"},
    MZN: {name: "Mozambican Metical", symbol: "MT", country: "Mozambique", flag: "🇲🇿"},
    MGA: {name: "Malagasy Ariary", symbol: "Ar", country: "Madagascar", flag: "🇲🇬"},
    MUR: {name: "Mauritian Rupee", symbol: "Rs", country: "Mauritius", flag: "🇲🇺"},
    SCR: {name: "Seychellois Rupee", symbol: "Rs", country: "Seychelles", flag: "🇸🇨"},
    GMD: {name: "Gambian Dalasi", symbol: "D", country: "Gambia", flag: "🇬🇲"},
    GNF: {name: "Guinean Franc", symbol: "Fr", country: "Guinea", flag: "🇬🇳"},
    SLL: {name: "Sierra Leonean Leone", symbol: "Le", country: "Sierra Leone", flag: "🇸🇱"},
    LRD: {name: "Liberian Dollar", symbol: "$", country: "Liberia", flag: "🇱🇷"},
    CDF: {name: "Congolese Franc", symbol: "Fr", country: "Democratic Republic of Congo", flag: "🇨🇩"},
    XAF: {name: "Central African CFA Franc", symbol: "Fr", country: "Central Africa", flag: "🌍"},
    XOF: {name: "West African CFA Franc", symbol: "Fr", country: "West Africa", flag: "🌍"},
    KMF: {name: "Comorian Franc", symbol: "Fr", country: "Comoros", flag: "🇰🇲"},
    DJF: {name: "Djiboutian Franc", symbol: "Fr", country: "Djibouti", flag: "🇩🇯"},
    ERN: {name: "Eritrean Nakfa", symbol: "Nfk", country: "Eritrea", flag: "🇪🇷"},
    RWF: {name: "Rwandan Franc", symbol: "Fr", country: "Rwanda", flag: "🇷🇼"},
    BIF: {name: "Burundian Franc", symbol: "Fr", country: "Burundi", flag: "🇧🇮"},
    SOS: {name: "Somali Shilling", symbol: "S", country: "Somalia", flag: "🇸🇴"},
    SDG: {name: "Sudanese Pound", symbol: "ج.س.", country: "Sudan", flag: "🇸🇩"},
    SSP: {name: "South Sudanese Pound", symbol: "£", country: "South Sudan", flag: "🇸🇸"},

    // Oceania
    NZD: {name: "New Zealand Dollar", symbol: "NZ$", country: "New Zealand", flag: "🇳🇿"},
    FJD: {name: "Fijian Dollar", symbol: "$", country: "Fiji", flag: "🇫🇯"},
    PGK: {name: "Papua New Guinean Kina", symbol: "K", country: "Papua New Guinea", flag: "🇵🇬"},
    SBD: {name: "Solomon Islands Dollar", symbol: "$", country: "Solomon Islands", flag: "🇸🇧"},
    VUV: {name: "Vanuatu Vatu", symbol: "Vt", country: "Vanuatu", flag: "🇻🇺"},
    WST: {name: "Samoan Tala", symbol: "T", country: "Samoa", flag: "🇼🇸"},
    TOP: {name: "Tongan Paʻanga", symbol: "T$", country: "Tonga", flag: "🇹🇴"},

    // Special & Caribbean
    ANG: {name: "Netherlands Antillean Guilder", symbol: "ƒ", country: "Netherlands Antilles", flag: "🇳🇱"},
    AWG: {name: "Aruban Florin", symbol: "ƒ", country: "Aruba", flag: "🇦🇼"},
    BMD: {name: "Bermudian Dollar", symbol: "$", country: "Bermuda", flag: "🇧🇲"},
    KYD: {name: "Cayman Islands Dollar", symbol: "$", country: "Cayman Islands", flag: "🇰🇾"},

    // Less Common
    BND: {name: "Brunei Dollar", symbol: "$", country: "Brunei", flag: "🇧🇳"},
    MVR: {name: "Maldivian Rufiyaa", symbol: "Rf", country: "Maldives", flag: "🇲🇻"},
    FOK: {name: "Faroese Króna", symbol: "kr", country: "Faroe Islands", flag: "🇫🇴"},
    GGP: {name: "Guernsey Pound", symbol: "£", country: "Guernsey", flag: "🇬🇬"},
    IMP: {name: "Isle of Man Pound", symbol: "£", country: "Isle of Man", flag: "🇮🇲"},
    JEP: {name: "Jersey Pound", symbol: "£", country: "Jersey", flag: "🇯🇪"},
    SHP: {name: "Saint Helena Pound", symbol: "£", country: "Saint Helena", flag: "🇸🇭"},
    FKP: {name: "Falkland Islands Pound", symbol: "£", country: "Falkland Islands", flag: "🇫🇰"},
    GIP: {name: "Gibraltar Pound", symbol: "£", country: "Gibraltar", flag: "🇬🇮"},
    TVD: {name: "Tuvaluan Dollar", symbol: "$", country: "Tuvalu", flag: "🇹🇻"},
    KID: {name: "Kiribati Dollar", symbol: "$", country: "Kiribati", flag: "🇰🇮"},

    // Cryptocurrency representation (if your API includes them)
    XBT: {name: "Bitcoin", symbol: "₿", country: "Digital", flag: "₿"},

    // Special Drawing Rights
    XDR: {name: "Special Drawing Rights", symbol: "SDR", country: "International Monetary Fund", flag: "🏛️"},

    // Gold/Silver (if your API includes precious metals)
    XAU: {name: "Gold Ounce", symbol: "oz", country: "Precious Metal", flag: "🥇"},
    XAG: {name: "Silver Ounce", symbol: "oz", country: "Precious Metal", flag: "🥈"},

    // Caribbean Currencies
    XPF: {name: "CFP Franc", symbol: "Fr", country: "French Pacific Territories", flag: "🇫🇷"},

    // More African Currencies
    CVE: {name: "Cape Verdean Escudo", symbol: "$", country: "Cape Verde", flag: "🇨🇻"},
    STN: {name: "São Tomé and Príncipe Dobra", symbol: "Db", country: "São Tomé and Príncipe", flag: "🇸🇹"},

    // Asian Minor Currencies
    YER: {name: "Yemeni Rial", symbol: "﷼", country: "Yemen", flag: "🇾🇪"},

    // European Minor
    SLE: {name: "Sierra Leonean Leone", symbol: "Le", country: "Sierra Leone", flag: "🇸🇱"}
};

// Utility function to get currency display information
export const getCurrencyDisplayInfo = (currencyCode) => {
    // Check local base data first
    if (baseCurrencyData[currencyCode]) {
        return baseCurrencyData[currencyCode];
    }

    // Fallback for unknown currencies
    return {
        name: `${currencyCode} Currency`,
        symbol: currencyCode,
        country: "Unknown",
        flag: "🌍"
    };
};

// Function to format currency display text
export const formatCurrencyDisplay = (currencyCode, format = "nameWithCode") => {
    const currencyInfo = getCurrencyDisplayInfo(currencyCode);

    switch (format) {
        case "nameOnly":
            return currencyInfo.name;
        case "nameWithCode":
            return `${currencyInfo.name} (${currencyCode})`;
        case "codeWithName":
            return `${currencyCode} - ${currencyInfo.name}`;
        case "withFlag":
            return `${currencyInfo.flag} ${currencyInfo.name}`;
        case "withFlagAndCode":
            return `${currencyInfo.flag} ${currencyInfo.name} (${currencyCode})`;
        case "withSymbol":
            return `${currencyInfo.name} (${currencyInfo.symbol})`;
        case "compact":
            return `${currencyInfo.flag} ${currencyCode}`;
        case "FlagNameCodeAndSymbol":
            return `${currencyInfo.flag} ${currencyInfo.name} (${currencyCode}) (${currencyInfo.symbol})`;
        default:
            return `${currencyInfo.name} (${currencyCode})`;
    }
};
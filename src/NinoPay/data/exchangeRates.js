import usa from '../../assets/flag-image/us.webp'
import uk from '../../assets/flag-image/uk.webp'
import japan from '../../assets/flag-image/japan.webp'
import nigeria from '../../assets/flag-image/nigerian.jfif'
import canada from '../../assets/flag-image/canada.jfif'
import germany from '../../assets/flag-image/germany.webp'
const exchangeRates = [
  {
    country: "United States",
    currency: "United States Dollar",
    abbreviation: "USD",
    baseCurrency: "USD",
    exchangeRate: 1.00,
    trend: "rose",
    percentageChange: 0.5,
    image: usa
  },
  {
    country: "United Kingdom",
    currency: "British Pound Sterling",
    abbreviation: "GBP",
    baseCurrency: "USD",
    exchangeRate: 0.76,
    trend: "drop",
    percentageChange: -0.3,
    image: uk
  },
  {
    country: "Japan",
    currency: "Japanese Yen",
    abbreviation: "JPY",
    baseCurrency: "USD",
    exchangeRate: 134.25,
    trend: "rose",
    percentageChange: 1.2,
    image: japan
  },
  {
    country: "Nigeria",
    currency: "Nigerian Naira",
    abbreviation: "NGN",
    baseCurrency: "USD",
    exchangeRate: 1450.75,
    trend: "drop",
    percentageChange: -2.5,
    image: nigeria
  },
  {
    country: "Canada",
    currency: "Canadian Dollar",
    abbreviation: "CAD",
    baseCurrency: "USD",
    exchangeRate: 1.35,
    trend: "rose",
    percentageChange: 0.7,
    image: canada
  },
  {
    country: "Germany",
    currency: "Euro",
    abbreviation: "EUR",
    baseCurrency: "USD",
    exchangeRate: 0.91,
    trend: "drop",
    percentageChange: -0.4,
    image: germany
  }
];

export default exchangeRates
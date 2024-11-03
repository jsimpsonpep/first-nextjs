import styles from '../styles/global.css';
import Counter from '../components/Counter/Counter';
import SearchBar from '../components/SearchBar/SearchBar';

export default function MyApp({ Component, pageProps }) {
  return <Component{...pageProps} />
}
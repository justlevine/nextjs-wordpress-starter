import { faSearch } from '@fortawesome/fontawesome-pro/js-packages/@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InputBase } from '@material-ui/core';
import cn from 'classnames';
import styles from './SearchBox.module.scss';

const SearchBox = ( props ) => {
	return (
		<li
			id="headersearchbox"
			className={ cn( styles.searchBox, props.className ?? null ) }
		>
			<InputBase
				placeholder="Search..."
				inputProps={ { 'aria-label': 'search' } }
				className={ styles.searchField }
			/>
			<div className={ styles.searchBtn }>
				<FontAwesomeIcon icon={ faSearch } />
			</div>
		</li>
	);
};

export default SearchBox;

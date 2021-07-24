import SkipLink from '@/components/atoms/SkipLink';
import AlgoliaSearch from '@/components/molecules/AlgoliaSearch';
import Logo from '@/components/molecules/Logo';
import Navigation from '@/components/molecules/Navigation';
import { MobileMenu } from '@/components/organisms/MobileMenu';
import { AppBar, Toolbar } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { UserMenu } from '../UserMenu';
import styles from './Header.module.scss';

/**
 * Render the Header component.
 *
 * @author WebDevStudios
 * @param  {object}  props          The component attributes as props.
 * @param  {object}  props.menu     The header menu object.
 * @param  {Element} props.search   The search component.
 * @param  {boolean} props.isSimple If a simple or full header should be displayed.
 * @return {Element}                The Header component.
 */

const search = () =>
	React.memo( <AlgoliaSearch useHistory={ true } usePlaceholder={ true } /> );
export default function Header( { menu, isSimple } ) {
	const isScrolling = useScrollTrigger( {
		disableHysteresis: true,
		threshold: 250,
	} );

	return (
		<>
			<AppBar
				color="inherit"
				position={ isScrolling ? 'sticky' : 'relative' }
				className={ cn(
					styles.header,
					isSimple ? styles.simple : styles.full
				) }
			>
				<MemoizedToolbar
					menu={ menu }
					isScrolling={ isScrolling }
					isSimple={ isSimple }
				/>
			</AppBar>
		</>
	);
}

const Bar = ( { menu, isScrolling, isSimple } ) => (
	<Toolbar className={ styles.toolbar }>
		<SkipLink />
		<MobileMenu menu={ menu?.mobile_menu } />
		<Logo
			href="/"
			width={ '80px' }
			height={ '107.33px' }
			className={ cn( isScrolling && styles.scrollingLogo ) }
		/>
		{ ! isSimple && (
			<Navigation
				menu={ menu?.primary_menu }
				styles={ styles }
				className={ styles.primaryMenu }
			/>
		) }
		<UserMenu menu={ menu?.user_menu } isScrolling={ isScrolling } />
	</Toolbar>
);
Bar.whyDidYouRender = true;

const MemoizedToolbar = React.memo( Bar );
MemoizedToolbar.whyDidYouRender = true;
Header.propTypes = {
	menu: PropTypes.object,
	search: PropTypes.element,
	isSimple: PropTypes.bool,
};

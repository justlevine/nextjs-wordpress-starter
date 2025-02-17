import Link from '@/components/atoms/Link';
import { Button } from '@material-ui/core';
import cn from 'classnames';
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import DualButton from '../DualButton/DualButton';
import SearchBox from '../SearchBox/SearchBox';
import styles from './Navigation.module.scss';

/**
 * Render the NavigationMenu component.
 *
 * Recursively displays a menu and its children.
 *
 * @author WebDevStudios
 * @param  {object}  props      NavigationMenu props.
 * @param  {Array}   props.menu Array of menu items.
 * @return {Element}            The NavigationMenu component.
 */
function NavigationMenu( { menu } ) {
	const { asPath } = useRouter();
	const [ session, loading ] = useSession();
	const isGuest = ! loading && ! session?.user?.accessToken;

	if ( ! menu || ! menu?.length ) {
		return null;
	}

	return (
		<>
			{ menu.map( ( item, index ) => {
				// Check for session-specific menu items.
				if ( ( loading || isGuest ) && item.path === '/profile' ) {
					return;
				} else if (
					( loading || ! isGuest ) &&
					item.path === '/login'
				) {
					return;
				}

				const children =
					item.children && item.children.length > 0
						? item.children
						: '';

				return (
					<li
						key={ index }
						className={ cn(
							children && children?.length
								? styles.hasChildren
								: ''
						) }
					>
						<Button
							component={ Link }
							color="inherit"
							href={ item.path }
							underline="none"
						>
							{ item.label }
							{ children && children?.length && <Arrow /> }
						</Button>

						{ !! children && !! children.length && (
							<ul
								className={ cn(
									styles.subMenu,
									styles[ `subMenu${ index + 1 }` ]
								) }
								id={ index }
							>
								<NavigationMenu menu={ children } />
							</ul>
						) }
					</li>
				);
			} ) }
		</>
	);
}

NavigationMenu.propTypes = {
	menu: PropTypes.arrayOf( PropTypes.object ),
};

/**
 * Render the Navigation component.
 *
 * @author                           WebDevStudios
 * @param  {object}  props           Navigation props.
 * @param  {Array}   props.menu      Array of menu items.
 * @param  {string}  props.className Optional classname for the element.
 * @return {Element}                 The Navigation component.
 */
export default function Navigation( { menu, className } ) {
	const buttons = useMemo(
		() => [
			{
				className: styles.volunteer,
				href: '/about/volunteer',
				color: 'secondary',
				underline: 'none',
				text: 'Volunteer',
			},
			{
				className: styles.donate,
				href: '/about/donate',
				color: 'primary',
				underline: 'none',
				text: 'Donate',
			},
		],
		[]
	);

	return (
		<>
			{ !! menu?.length && (
				<nav
					className={ cn( styles.navigation, className ) }
					role="navigation"
					aria-label="Main Menu"
				>
					<ul className={ styles.menu }>
						<NavigationMenu menu={ menu } />
						<SearchBox className={ styles.headerSearch } />
						<li>
							<DualButton buttons={ buttons } />
						</li>
					</ul>
				</nav>
			) }
		</>
	);
}

Navigation.propTypes = {
	className: PropTypes.string,
	menu: PropTypes.arrayOf( PropTypes.object ),
};

/**
 * Render the Sub menu arrow component.
 *
 * @author WebDevStudios
 * @return {object} The Arrow component.
 */
function Arrow() {
	return (
		<span role="button" className={ styles.arrow }>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="10"
				height="10"
				viewBox="0 0 24 24"
			>
				<path d="M6 0l12 12-12 12z" />
			</svg>
		</span>
	);
}

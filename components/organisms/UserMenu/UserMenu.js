import { Avatar } from '@/components/atoms/Avatar';
import { CartIcon } from '@/components/molecules/CartIcon';
import { faSignIn } from '@fortawesome/fontawesome-pro/js-packages/@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	Button,
	ClickAwayListener,
	Grow,
	Link,
	MenuItem,
	MenuList,
	Paper,
	Popper,
} from '@material-ui/core';
import { signOut, useSession } from 'next-auth/client';
import { useRef, useState } from 'react';
import styles from './UserMenu.module.scss';

const UserMenu = ( { menu } ) => {
	const [ open, setOpen ] = useState( false );
	const anchorRef = useRef( null );

	const [ session, loading ] = useSession();
	const isGuest = loading || ! session?.user?.accessToken;

	const toggleDrawer = ( open ) => ( event ) => {
		if (
			event.type === 'keydown' &&
			( event.key === 'Tab' || event.key === 'Shift' )
		) {
			return;
		}

		setOpen( open );
	};

	if ( ! menu || ! menu?.length ) {
		return null;
	}

	const handleListKeyDown = ( event ) => {
		if ( event.key === 'Tab' ) {
			event.preventDefault();
			setOpen( false );
		}
	};

	const UserAvatar = ( firstName, lastName, src ) => (
		<Avatar
			firstName={ session?.user?.firstName }
			lastName={ session?.user?.lastName }
			src={ session?.user?.image }
		/>
	);

	console.warn( { menu } );

	return (
		<>
			<CartIcon />
			{ isGuest ? (
				<Button
					color="inherit"
					href="/login"
					variant="outlined"
					component={ Link }
					endIcon={ <FontAwesomeIcon icon={ faSignIn } /> }
					className={ styles.login }
				>
					Login/Register
				</Button>
			) : (
				<>
					<Link
						ref={ anchorRef }
						onClick={ toggleDrawer( true ) }
						aria-controls={ open ? 'user-menu' : undefined }
						aria-haspopup="true"
						underline="none"
					>
						<UserAvatar />
					</Link>
					<Popper
						open={ open }
						anchorEl={ anchorRef.current }
						role={ undefined }
						transition
						className={ styles.menu }
					>
						{ ( { TransitionProps, placement } ) => (
							<Grow
								{ ...TransitionProps }
								style={ {
									transformOrigin:
										placement === 'bottom'
											? 'center top'
											: 'center bottom',
								} }
							>
								<Paper elevation={ 5 }>
									<ClickAwayListener
										onClickAway={ toggleDrawer( false ) }
									>
										<MenuList
											autoFocusItem={ open }
											id="user-menu"
											onKeyDown={ handleListKeyDown }
										>
											<MenuItem
												alignItems="center"
												className={ styles.userBlock }
											>
												<UserAvatar />
												{ `Hey ${
													session?.user?.firstName ??
													session?.user?.email
												}!` }
												<Link
													color="inherit"
													onClick={ signOut }
													className={ styles.logout }
												>
													Log out
												</Link>
											</MenuItem>
											{ menu.length &&
												menu.map( ( item ) => (
													<MenuItem
														key={ item.id }
														id={ item.id }
														component={ Link }
														color="inherit"
														onClick={ toggleDrawer(
															false
														) }
														href={ item.path }
													>
														{ item.label }
													</MenuItem>
												) ) }
										</MenuList>
									</ClickAwayListener>
								</Paper>
							</Grow>
						) }
					</Popper>
				</>
			) }
		</>
	);
};

export default UserMenu;

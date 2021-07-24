import { Avatar as MuiAvatar } from '@material-ui/core';

const Avatar = ( { firstName = '', lastName = '', src } ) => (
	<MuiAvatar alt={ `${ firstName } ${ lastName }` } src={ src }>
		{ firstName?.charAt( 0 ) + lastName?.charAt( 0 ) ?? '' }
	</MuiAvatar>
);

export default Avatar;

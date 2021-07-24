import Link from '@/components/atoms/Link';
import { useWordPressContext } from '@/components/common/WordPressProvider';
import { faShoppingCart } from '@fortawesome/fontawesome-pro/js-packages/@fortawesome/pro-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Chip, IconButton } from '@material-ui/core';
import styles from './CartIcon.module.scss';

const CartIcon = () => {
	const { cart } = useWordPressContext();

	const productCount = cart?.totalProductsCount ?? null;
	const totalPrice = cart?.totalProductsPrice ?? null;

	return (
		<Link href="/cart" color="inherit" className={ styles.container }>
			{ totalPrice && (
				<span className={ styles.price }>{ totalPrice }</span>
			) }
			<IconButton className={ styles.button }>
				<FontAwesomeIcon icon={ faShoppingCart }>
					{ productCount && (
						<Chip
							size="small"
							label={ productCount }
							className={ styles.count }
						/>
					) }
				</FontAwesomeIcon>
			</IconButton>
		</Link>
	);
};

export default CartIcon;

import { Searchicon } from '../icons';

function Searchbar() {
	return (
		<>
			<div className="searchbar">
				<div className="searchbar-input">
					<input className="searchbar-input-el" type="text" />
				</div>

				<div className="searchbar-icon">
					<Searchicon />
				</div>
			</div>
		</>
	);
}

export default Searchbar;

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			inPage: '',
		},
		actions: {
			putCurrentPage: () =>{
				return 'hello'
			}
		}
	};
};

export default getState;

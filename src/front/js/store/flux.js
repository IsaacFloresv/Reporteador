const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			inPage: '',
		},
		actions: {
			uploadFiles: (files, user) =>{
				for(let i = 0; i < files.length; i++){
					const formData = new FormData();
					formData.append("usuario", user);
					formData.append("archivo", files[i]);
					fetch(
					"https://3001-carloslukass-dropcases-od2ynxzu3gx.ws-us63.gitpod.io/api/upload",
					{
						method: "POST",
						body: formData,
					}
				).then((res) => console.log(res));
			}
			}
		}
	};
};

export default getState;

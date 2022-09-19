import React from "react"; 
import {createRoot} from "react-dom/client"; 
import "./index.css"; 
import App from "./App"; 
import store from "./redux/store";
import {Provider} from "react-redux";

import 'normalize.css';
// alert('Не успела до дедлайна сделать стили. Пожалуйста, проверь работу в среду=) Надеюсь на твоё понимание');
const rootElement = document.getElementById("root"); 
if (!rootElement) throw new Error('Failed to find the root element'); 
const root = createRoot(rootElement); 
root.render( 
	<React.StrictMode> 
		<Provider store={store}>
			<App/> 
		</Provider>
	</React.StrictMode> 
); 

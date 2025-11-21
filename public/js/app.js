// app.js
const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
    return React.createElement('div', null, 'Hola, React funciona!');
}

root.render(React.createElement(App));

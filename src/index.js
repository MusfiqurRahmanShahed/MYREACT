import ReactDOM from "react-dom/client";
// import App from "./app";
// import reportWebVitals from "./reportWebVitals";
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

//const element = React.createElement( 'h1', null, 'Hello , World!'); 
setInterval(() => {
  const element = (
    <h1>
      <span>Hello {new Date().toLocaleTimeString()}</span>
    </h1>
  );
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(element);
}, 1000);


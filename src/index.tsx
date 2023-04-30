import React from "react"
import "./index.css"
import {HashRouter} from "react-router-dom"
import {App} from "./App"
import {store} from "./redux/store"
import {Provider} from "react-redux"
// @ts-ignore
import {createRoot} from "react-dom/client"

const root = createRoot(document.getElementById("root")!)
root.render(
    <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>,
)


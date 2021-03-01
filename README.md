# Getting started with pyodide in React

This repository serves as a template for using pyodide in React. It was created using `create-react-app`.

## Quickstart

To get started, simply run the lines below in your terminal:
```
git clone https://github.com/xhlulu/react-pyodide-template.git
cd react-pyodide-template
npm i
npm start
```

When you are ready, you can serve the production build:
```
npm i -g serve
serve -s build
```

## What just happened

Now that you ran the app, you saw `5+7=12` being computed after a few seconds.

What happened behind the scene was: (1) we fetched a python script, (2) we ran it from the JavaScript scope using `pyodide`, and (3) we updated our React component using state hooks.

Here's the code we just ran:
```python
def func():
    return 5 + 7

func()
```

It's very simple but you can run pretty advanced `python` code once you start loading packages like `numpy`, `pandas`, `scipy`, etc. albeit at the cost of increased loading time.


## What you need to change

Below are some files you might need to modify for your own project:

1. 🐍 [`src/python/script.py`](./src/python/script.py)\
This file contains a toy Python function being defined and run inside your browser using `pyodide`. You can modify this to have more complex use cases (e.g. load standard libraries, `pandas`, `numpy`, etc.). For more details, [read the pyodide docs](https://pyodide.readthedocs.io/en/latest/index.html).

2. ⚛️ [`src/App.js`](./src/App.js) \
This file contains the code that reads a `python` script, load `pyodide` and run the script. It also renders a basic React app directly derived from `create-react-app`, which can be easily modified. You will need to modify this file if you want to [access the Python scope from JS](https://pyodide.readthedocs.io/en/latest/usage/quickstart.html#accessing-python-scope-from-javascript) or [load packages](https://pyodide.readthedocs.io/en/latest/usage/loading-packages.html) like `numpy`, `pandas`, etc.

3. 📇 [`public/index.html`](./public/index.html)\
The code in the html template was modified to load pyodide inside the `<head>`. If you wish to change the version of `pyodide` being loaded, you will have to modify the loading.

4. 🎨 [`src/App.css`](./src/App.css)\
Modify this file or `index.css` in order to add custom styling to your application.

5. 🧪 [`src/App.test.js`](./src/App.test.js)\
No test has been set up for this project. You will need to create your own tests and run them with `npm run test`.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

<!-- ### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information. -->

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


## Acknowledgement

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Why
Show what test coverage looks with react-testing-library

Debug react-testing-library interaction with formik

## Expected behavior
When app loads
show a form with a text field and a button
on click, route to another page


## Types of tests
unit test:
fill out form, on click, expect output to match input

integration in app
on submit form, check route

e2e
submit form, check route

## iterations
1. simple form: what you get with react
2. formik

## process
1. setup with create-react-app, setup router and cypress
2. test existing content
3. tdd through each iteration
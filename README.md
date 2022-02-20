This project was bootstrapped with [Create React App]

Kastoria Air Travel
An Air Travel Theme: A fusion of an airport's API, Priceline's Design System (it's much, much more than CSS), and Storybook.

The intent, and successful attempt I should say, was to create a thin slice across the front end to use an airport's API and theme it to look like a popular travel web site, in this case Priceline.com.

In addition I incorporated Storybook to house the library of components. These components are broken up in the file structure to follow best practices. The structure is 'Organisms', 'Molecules', 'Atoms'.

Atoms houses the simplest html elements such as a single button element.
Molecules then house a group of elements that is a tiny more complex than such as a button and a input field.

Beyond that we can create 'organisms' and even 'bodies' to house even more complex html pieces.

Ultimately the idea is to have plenty of highly-modular atoms which can be used across different web sites by importing them and tweaking their parameters.

Ths web site was completely styled and laid out using Priceline's Design System. I did not add any custom CSS.

# Notion HTML to PDF Formatter
A Tampermonkey javascript to make pdf exporting notion notes easier and customizable.

Notion does not have functionality to set page breaks and other formatting options for the pdf export of notes. This script changes that by taking the html export of notion notes and replacing note paragraphs with specific content with configurable styles. 

## Tampermonkey
Tampermonkey is a Google Chrome extension you can use to execute javascript on specific websites.

## Configuration
This is what the configuration section looks like currently.
```javascript
const formattingConfig = [
  { id: 1, key: "/pb-b", style: "page-break-before: always;", description: "page break", type: "styling_obj" },
  { id: 2, key: ".simple-table td", style: "min-width: 0px;", description: "remove min-width from table data", type: "css_overwrite" },
  { id: 3, key: ".simple-table th", style: "min-width: 0px;", description: "remove min-width from table header", type: "css_overwrite" },
];
```
Here, every time the user has a paragraph in their notion with the text /pb-b, it will add the style `page-break-before: always;` to this paragraph element. It will as well remove the text from the element so you dont have to worry about the /pb-b being displayed.

For the configs with type `css_overwrite`, it will queryselect all the elements with the classes as stated under config-`key` and add styling as configured in `style`.

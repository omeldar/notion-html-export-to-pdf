# Notion HTML to PDF Formatter
A Tampermonkey javascript to make pdf exporting notion notes easier and customizable.

Notion does not have functionality to set page breaks and other formatting options for the pdf export of notes. This script changes that by taking the html export of notion notes and replacing note paragraphs with specific content with configurable styles. 

## Tampermonkey
Tampermonkey is a Google Chrome extension you can use to execute javascript on specific websites.

## Configuration
This is what the configuration section looks like currently.
```javascript
const config = [
  { id: 1, key: "/pb-b", style: "page-break-before: always;", description: "page break" },
];
```
Here, every time the user has a paragraph in their notion with the text /pb-b, it will add the style `page-break-before: always;` to this paragraph element. It will as well remove the text from the element so you dont have to worry about the /pb-b being displayed.

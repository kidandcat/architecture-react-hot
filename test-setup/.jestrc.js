const React = require("react");
const Enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");

const DATE_TO_USE = new Date("05/11/1993 15:04:45");
const _Date = Date;
global.Date = jest.fn(() => DATE_TO_USE);
global.Date.UTC = _Date.UTC;
global.Date.parse = _Date.parse;
global.Date.now = _Date.now;

Enzyme.configure({ adapter: new Adapter() });

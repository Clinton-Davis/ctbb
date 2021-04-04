import tracer from "dd-tracer";
const tracer = require("dd-trace").init({
  logInjection: true,
});
export default tracer;

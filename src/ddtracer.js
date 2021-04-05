import tracer from "dd-trace";
tracer = require("dd-trace").init({
  logInjection: true,
});
export default tracer;

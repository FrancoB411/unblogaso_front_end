import DS from "ember-data";
import ENV from "../config/environment";

export default DS.RESTAdapter.extend({
  // host: "http://localhost:4000"
  host: ENV.APP.API_URL,
});


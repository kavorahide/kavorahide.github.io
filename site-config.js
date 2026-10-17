// Public storefront configuration. These values are not credentials.
// GA4 loads only after the visitor accepts analytics.
// Optional order/inquiry alerts (leave empty to disable). Web3Forms access keys
// and ntfy topics are designed to be public; use a long random ntfy topic.
window.KAVORA_CONFIG = Object.freeze({
  apiBaseUrl: "",
  ga4MeasurementId: "G-94DZ8WMHMZ",
  alerts: Object.freeze({ web3formsKey: "", ntfyTopic: "" }),
});

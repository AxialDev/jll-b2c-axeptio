// Set project-specific values from the integration screen in Axeptio
const clientId =  "66549162df02d497e74af854"; //Project ID in Axeptio
const cookieVersionEN = "prod-en"; //English cookie version set in Axeptio
const cookieVersionFR = "prod-fr"; //French cookie version set in Axeptio

// Default Google Consent Mode configuration for GTM when consent mode is enabled in Axeptio dashboard
const googleConsentModeConfig = {
    default: {
        analytics_storage: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
        wait_for_update: 500
    }
}

// Ensure user's cookie preferences persist between domain and subdomains
const userCookiesDomain = "laurierquebec.com"

// Determine the appropriate cookie version based on the current language of the document
let cookieVersion;
document.documentElement.lang === 'fr' ? cookieVersion = cookieVersionFR : cookieVersion = cookieVersionEN;

// Configure Axeptio settings
window.axeptioSettings = {
    clientId: clientId,
    cookiesVersion: cookieVersion,
    googleConsentMode: googleConsentModeConfig,
    userCookiesDomain: userCookiesDomain
};

// Instantiate Axeptio by loading the SDK script asynchronously
(function(d, s) {
    var t = d.getElementsByTagName(s)[0], e = d.createElement(s);
    e.async = true; e.src = "//static.axept.io/sdk.js";
    t.parentNode.insertBefore(e, t);
})(document, "script");

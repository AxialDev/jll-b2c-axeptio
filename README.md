# Axeptio configuration for the B2C sites for JLL properties

The script in the axeptio.js file must be added as close as possible to the closing `</body>` tag. 

You can find more details in the Axeptio official doc : https://developers.axeptio.eu/v/english/sdk/integration-du-sdk

### Using the cookie domain 

By specifying the `userCookiesDomain`, user's cookie preferences will persist between domain and subdomains. This may make working on the dev environment harder as if the current domain doesn't correspond to the specified domain the popup up will reappear on every page load.


## Testing and preview

You can test and preview the axeptio popup by opening the index.html file in any browser

### How to use the consent to launch a script in the code

Any script that is deployed from the codebase that requires user consent must not be triggered before consent is given. You can use this script to trigger an action depending on the user's choice in the Axeptio popup.

See example in the `index.html` page for an Iframe that is not loaded before user consent.

```
<script>
    void 0 === window._axcb && (window._axcb = []);
    window._axcb.push(function(axeptio) {
        axeptio.on("cookies:complete", function (choices) {
            if (choices.cookie_name) {
                //action to do following consent
            }
        });
    });
</script>
```

See [manage cookies in custom mode](https://developers.axeptio.eu/v/english/cookies/cookies-integration) from the Axeptio doc

### How to use the consent to launch a script in GTM

When user makes a choice in the Axeptio pop, Axeptio push the user's choice to GTM. For our projet, here are the custom events that Axeptio may trigger : 

- axeptio_activate_datadog
- axeptio_activate_facebook
- axeptio_activate_hotjar
- axeptio_activate_linkedin
- axeptio_activate_logrocket
- axeptio_activate_snowplow


[Trigger third party scripts in GTM](https://developers.axeptio.eu/v/english/cookies/google-tag-manager/controler-vos-balises-axeptio-avec-google-tag-manager)


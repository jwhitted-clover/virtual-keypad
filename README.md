![Clover logo](https://www.clover.com/assets/images/public-site/press/clover_primary_gray_rgb.png)

## Virtual Keypad

[Demo](https://jwhitted-clover.github.io/virtual-keypad/)

1. Install and launch `Cloud Pay Display` on target device (Flex, Mini, etc.)
1. Install `Virtual Keypad` for the merchant
1. Click `Virtual Keypad` from the merchant dashboard
1. ???
1. Profit

### Technologies:

- Clover Cloud SDK (`remote-pay-cloud`)
- React (`react`, `create-react-app`)
- Redux (`redux`, `redux-thunk`, `reselect`)

### TODO

- [x] Responsively fit mobile phones
- [x] Prevent double tap zooming on mobile devices
- [x] Read merchantId and accessToken from url
- [x] Support more than 2 actions (dropdown)
- [x] Allow cancel on device selection
- [x] Auto-connect option
- [x] Improve UX when selecting a device
- [x] Switch errors to toasts
- [x] Allow void after payment success
- [x] Handle partial payment
- [x] Make manual card entry configurable
- [x] Get rid of transaction and payment stores if they are not needed
- [x] Allow 'cancel' when attempting to connect to a device
- [x] Support reviewing transactions in store
- [x] Support showWelcomeScreen, resetDevice, dispose from menu
- [x] i18n localization
- [x] Support more than sale transactions (naked refund)
- [x] Initially hide configuration screen
- [ ] Add validation to configuration
- [ ] Add help to configuration
- [ ] Test error flows in thunks
- [ ] Add timeouts to transactions
- [ ] smartling translations
- [ ] Complete README
- [ ] Enable Service Worker
- [ ] Move repo to github.com/clover/virtual-keypad

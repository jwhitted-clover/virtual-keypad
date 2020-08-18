![Clover logo](https://www.clover.com/assets/images/public-site/press/clover_primary_gray_rgb.png)

## Virtual Keypad

[Demo](https://jwhitted-clover.github.io/virtual-keypad/)

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
- [ ] Get rid of transaction and payment stores if they are not needed
- [ ] Remove MANUAL entry (configurable?)
- [ ] Support more than sale transactions
- [ ] Add validation to configuration
- [ ] Add help to configuration
- [ ] Test error flows in thunks
- [ ] Add timeouts to transactions
- [ ] Enable Service Worker
- [ ] Check for device online on device selection screen
- [ ] Complete README

var config = {
    map: {
        '*': {
            handleCheckoutMultipleAddressButton: 'RefactoredGroup_AutoFflCheckoutMultiShipping/js/checkout/handle-checkout-multiple-address-button',
            setupFflGrid: 'RefactoredGroup_AutoFflCheckoutMultiShipping/js/checkout/setup-ffl-grid',
            fflLoginRedirect: 'RefactoredGroup_AutoFflCheckoutMultiShipping/js/ffl-login-redirect',
        }
    },
    config: {
        mixins: {
            'Magento_Multishipping/js/multi-shipping': {
                'RefactoredGroup_AutoFflCheckoutMultiShipping/js/multi-shipping-mixin': true
            }
        }
    }
};

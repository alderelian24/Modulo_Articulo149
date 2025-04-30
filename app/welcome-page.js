import { createViewModel } from './welcome-view-model';

export function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = createViewModel();
}

export function onNavigateToLaw(args) {
    const button = args.object;
    const page = button.page;
    page.frame.navigate("law-page");
}

const { Page } = require("@nativescript/core");

exports.onNavigatingTo = function(args) {
    const page = args.object;

    const btn = page.getViewById("btnIndemnizacion");
    const img = page.getViewById("imgLey");

    // Sombra para botón (Android)
    if (btn?.android) {
        btn.android.setElevation(10);
    }

    // Sombra para imagen
    if (img.android) {
        img.android.setElevation(8);
    }

    if (btn?.ios) {
        const layer = btn.ios.layer;
        layer.shadowColor = UIColor.blackColor.CGColor;
        layer.shadowOffset = { width: 0, height: 2 };
        layer.shadowOpacity = 0.25;
        layer.shadowRadius = 4.0;
        layer.masksToBounds = false;
    }

    if (img?.ios) {
        const layer = img.ios.layer;
        layer.shadowColor = UIColor.blackColor.CGColor;
        layer.shadowOffset = { width: 0, height: 3 };
        layer.shadowOpacity = 0.3;
        layer.shadowRadius = 6.0;
        layer.masksToBounds = false;
    }
};

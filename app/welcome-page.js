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
import { createViewModel } from './law-view-model';

export function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = createViewModel();
}

export function onBackButtonTap(args) {
    const page = args.object.page;
    page.frame.goBack();
}
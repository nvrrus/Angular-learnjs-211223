import {Component, Input, Output} from '@angular/core';
import {Subject} from 'rxjs';
import {IProduct} from 'src/app/shared/products/product.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent {
    @Input() product: IProduct | null = null;

    @Output() buy = new Subject<IProduct>();

    onProductBuy(event: Event) {
        if (!this.product) {
            return;
        }

        event.stopPropagation();

        this.buy.next(this.product);

        // eslint-disable-next-line no-console
        console.log('Buy product');
    }

    isStarActive(starIndex: number): boolean {
        return this.product ? this.product.rating >= starIndex : false;
    }
}
